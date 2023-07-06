/*
Copyright (c) 2023 Uber Technologies, Inc.

 <p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 except in compliance with the License. You may obtain a copy of the License at
 <p>http://www.apache.org/licenses/LICENSE-2.0

 <p>Unless required by applicable law or agreed to in writing, software distributed under the
 License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied. See the License for the specific language governing permissions and
 limitations under the License.
*/

use crate::{
  models::Validator,
  utilities::{
    regex_utilities::get_all_matches_for_regex,
    tree_sitter_utilities::{get_all_matches_for_query, get_ts_query_parser, number_of_errors},
    Instantiate,
  },
};
use pyo3::prelude::pyclass;
use regex::Regex;
use serde_derive::Deserialize;
use std::collections::HashMap;
use tree_sitter::{Node, Query};

use super::matches::Match;

#[pyclass]
#[derive(Deserialize, Debug, Clone, Default, PartialEq, Hash, Eq)]
pub struct CGPattern(pub String);

impl CGPattern {
  pub(crate) fn new(query: String) -> Self {
    Self(query)
  }

  pub(crate) fn pattern(&self) -> String {
    self.0.to_string()
  }

  pub(crate) fn extract_regex(&self) -> String {
    let mut _val = &self.pattern()[4..];
    _val.to_string()
  }
}

impl Validator for CGPattern {
  fn validate(&self) -> Result<(), String> {
    if self.pattern().starts_with("rgx ") {
      let mut _val = &self.pattern()[4..];
      return Regex::new(_val)
        .map(|_| Ok(()))
        .unwrap_or(Err(format!("Cannot parse the regex - {_val}")));
    }
    let mut parser = get_ts_query_parser();
    parser
      .parse(self.pattern(), None)
      .filter(|x| number_of_errors(&x.root_node()) == 0)
      .map(|_| Ok(()))
      .unwrap_or(Err(format!(
        "Cannot parse the tree-sitter query - {}",
        self.pattern()
      )))
  }
}

impl Instantiate for CGPattern {
  fn instantiate(&self, substitutions: &HashMap<String, String>) -> Self {
    let substitutions = substitutions
      .iter()
      .map(|(k, v)| (k.to_string(), v.replace('\n', "\\n")))
      .collect();
    CGPattern::new(self.pattern().instantiate(&substitutions))
  }
}

#[derive(Debug)]
pub(crate) enum CompiledCGPattern {
  Q(Query),
  R(Regex), // Regex is not yet supported
}

impl CompiledCGPattern {
  /// Applies the query upon the given node, and gets all the matches
  /// # Arguments
  /// * `node` - the root node to apply the query upon
  /// * `source_code` - the corresponding source code string for the node.
  /// * `query` - the query to be applied
  /// * `recursive` - if `true` it matches the query to `self` and `self`'s sub-ASTs, else it matches the `query` only to `self`.
  ///
  /// # Returns
  /// A vector of `tuples` containing the range of the matches in the source code and the corresponding mapping for the tags (to code snippets).
  /// By default it returns the range of the outermost node for each query match.
  /// If `replace_node` is provided in the rule, it returns the range of the node corresponding to that tag.
  pub(crate) fn get_match(&self, node: &Node, source_code: &str, recursive: bool) -> Option<Match> {
    if let Some(m) = self
      .get_matches(node, source_code.to_string(), recursive, None, None)
      .first()
    {
      return Some(m.clone());
    }
    None
  }

  /// Applies the pattern upon the given `node`, and gets all the matches
  pub(crate) fn get_matches(
    &self, node: &Node, source_code: String, recursive: bool, replace_node: Option<String>,
    replace_node_idx: Option<u8>,
  ) -> Vec<Match> {
    match self {
      CompiledCGPattern::Q(query) => get_all_matches_for_query(
        node,
        source_code,
        query,
        recursive,
        replace_node,
        replace_node_idx,
      ),
      CompiledCGPattern::R(regex) => {
        get_all_matches_for_regex(node, source_code, regex, recursive, replace_node)
      }
    }
  }
}