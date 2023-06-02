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

use crate::df::basic_analysis::ForwardReachingDirection;
use crate::df::df::DataflowAnalysis;
use crate::models::rule::RuleBuilder;
use crate::models::rule_graph::RuleGraphBuilder;

#[test]
fn test_forward_analysis() {

  let graph = RuleGraphBuilder::default().build();
  let rule = RuleBuilder::default().build().unwrap_or_default();
  let forward = ForwardReachingDirection {graph};
  let mut analysis = DataflowAnalysis::new(forward);
  analysis.run_analysis(vec![], rule);
}
