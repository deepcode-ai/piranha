"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"staleflags",title:"Stale Flag Cleanup",sidebar_label:"Stale Flag Cleanup"},l=void 0,o={unversionedId:"reference/staleflags",id:"reference/staleflags",title:"Stale Flag Cleanup",description:"Adding support for a new feature flag system",source:"@site/docs/reference/staleflags.md",sourceDirName:"reference",slug:"/reference/staleflags",permalink:"/piranha/docs/reference/staleflags",draft:!1,editUrl:"https://github.com/uber/piranha/tree/website/site/docs/reference/staleflags.md",tags:[],version:"current",frontMatter:{id:"staleflags",title:"Stale Flag Cleanup",sidebar_label:"Stale Flag Cleanup"},sidebar:"docsSidebar",previous:{title:"Why Piranha?",permalink:"/piranha/docs/reference/usecases"},next:{title:"Installation",permalink:"/piranha/docs/reference/getting-started/install"}},s={},p=[],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",null," Adding support for a new feature flag system "),(0,i.kt)("p",null,"To onboard a new feature flag system users will have to specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"<path-to-configurations>/rules.toml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<path-to-configurations>/edges.toml")," files (look ",(0,i.kt)("a",{parentName:"p",href:"/src/cleanup_rules/java"},"here"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.toml")," will contain rules that identify the usage of a feature flag system API. Defining ",(0,i.kt)("inlineCode",{parentName:"p"},"edges.toml")," is required if your feature flag system API rules are inter-dependent.\nFor instance, you want to delete a method declaration with specific annotations and then update its usages with some boolean value.\nPlease refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"test-resources/java")," for detailed examples."),(0,i.kt)("h3",null," Adding a new API usage "),(0,i.kt)("p",null,"The example below shows a usage of a feature flag API (",(0,i.kt)("inlineCode",{parentName:"p"},"experiment.isTreated(STALE_FLAG)"),"), in a ",(0,i.kt)("inlineCode",{parentName:"p"},"if_statement"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class PiranhaDemo {\n\n    void demoMethod(ExperimentAPI experiment){\n        // Some code\n        if (experiment.isTreated(STALE_FLAG)) {\n            // Do something\n        } else {\n            // Do something else\n        }\n        // Do other things\n    }\n}\n")),(0,i.kt)("p",null,"In the case when STALE_FLAG is treated, we would expect Piranha to refactor the code as shown below (assuming that ",(0,i.kt)("inlineCode",{parentName:"p"},"STALE_FLAG")," is treated) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class PiranhaDemo {\n\n    void demoMethod(ExperimentAPI experiment){\n        // Some code\n        // Do something\n        // Do other things\n    }\n}\n")),(0,i.kt)("p",null,"This can be achieved by adding a rule in the ",(0,i.kt)("inlineCode",{parentName:"p"},"input_rules.toml")," file (as shown below) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[[rules]]\nname = "Enum Based, toggle enabled"\nquery = """((\n    (method_invocation\n        name : (_) @n1\n        arguments: ((argument_list\n                        ([\n                          (field_access field: (_)@f)\n                          (_) @f\n                         ])) )\n\n    ) @mi\n)\n(#eq? @n1 "isTreated")\n(#eq? @f "@stale_flag_name")\n)"""\nreplace_node = "mi"\nreplace = "@treated"\ngroups = [ "replace_expression_with_boolean_literal"]\nholes = ["treated", "stale_flag_name"]\n')),(0,i.kt)("p",null,"This specifies a rule that matches against expressions like ",(0,i.kt)("inlineCode",{parentName:"p"},"exp.isTreated(SOME_FLAG_NAME)")," and replaces it with ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," property of the rule contains a ",(0,i.kt)("a",{parentName:"p",href:"https://tree-sitter.github.io/tree-sitter/using-parsers#pattern-matching-with-queries"},"tree-sitter query")," that is matched against the source code.\nThe node captured by the tag-name specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"replace_node")," property is replaced with the pattern specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"replace")," property.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"replace")," pattern can use the tags from the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," to construct a replacement based on the match (like ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/ide/using-regular-expressions-in-visual-studio?view=vs-2022"},"regex-replace"),")."),(0,i.kt)("p",null,"Each rule also contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"groups")," property, that specifies the kind of change performed by this rule. Based on this group, appropriate\ncleanup will be performed by Piranha. For instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"replace_expression_with_boolean_literal")," will trigger deep cleanups to eliminate dead code (like eliminating ",(0,i.kt)("inlineCode",{parentName:"p"},"consequent")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"if statement"),") caused by replacing an expression with a boolean literal.\nCurrently, Piranha provides deep clean-ups for edits that belong the groups - ",(0,i.kt)("inlineCode",{parentName:"p"},"replace_expression_with_boolean_literal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete_statement"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"delete_method"),". Basically, by adding an appropriate entry to the groups, a user can hook up their rules to the pre-built cleanup rules."),(0,i.kt)("p",null,"Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_seed_rule=False")," ensures that the user defined rule is treated as a cleanup rule not as a seed rule (For more details refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"demo/find_replace_custom_cleanup"),")."),(0,i.kt)("p",null,"A user can also define exclusion filters for a rule (",(0,i.kt)("inlineCode",{parentName:"p"},"rules.filters"),"). These filters allow matching against the context of the primary match. For instance, we can write a rule that matches the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"new ArrayList<>()")," and exclude all instances that occur inside static methods (For more details, refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo/match_only"),")."),(0,i.kt)("p",null,"At a higher level, we can say that - Piranha first selects AST nodes matching ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.query"),", excluding those that match ",(0,i.kt)("strong",{parentName:"p"},"any of")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.filters.not_contains")," (within ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.filters.enclosing_node"),"). It then replaces the node identified as ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.replace_node")," with the formatted (using matched tags) content of ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.replace"),"."),(0,i.kt)("h3",null," Parameterizing the behavior of the feature flag API "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rule")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"holes")," or template variables that need to be instantiated.\nFor instance, in the above rule ",(0,i.kt)("inlineCode",{parentName:"p"},"@treated")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@stale_flag_name")," need to be replaced with some concrete value so that the rule matches only the feature flag API usages corresponding to a specific flag, and replace it specifically with ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".  To specify such a behavior,\nuser should create a ",(0,i.kt)("inlineCode",{parentName:"p"},"piranha_arguments.toml")," file as shown below (assuming that the behavior of STALE_FLAG is ",(0,i.kt)("strong",{parentName:"p"},"treated"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'language = ["java"]\nsubstitutions = [\n    ["stale_flag_name", "STALE_FLAG"],\n    ["treated", "true"]\n]\n')),(0,i.kt)("p",null,"This file specifies that, the user wants to perform this refactoring for ",(0,i.kt)("inlineCode",{parentName:"p"},"java")," files.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"substitutions")," field captures mapping between the tags and their corresponding concrete values. In this example, we specify that the tag named ",(0,i.kt)("inlineCode",{parentName:"p"},"stale_flag_name")," should be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"STALE_FLAG")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"treated")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",null," Adding Cleanup Rules "),(0,i.kt)("p",null,"This section describes how to configure Piranha to support a new language. Users who do not intend to onboard a new language can skip this section.\nThis section will describe how to encode cleanup rules that are triggered based on the update applied to the flag API usages.\nThese rules should perform cleanups like simplifying boolean expressions, or if statements when the condition is constant, or deleting empty interfaces, or in-lining variables.\nFor instance, the below example shows a rule that simplifies a ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," operation where its ",(0,i.kt)("inlineCode",{parentName:"p"},"RHS")," is true."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[[rules]]\nname = "Or - right operand is True"\nquery = """(\n(binary_expression\n    left : (_)*\n    operator:"||"\n    right: (true)\n) @binary_expression)"""\nreplace_node = "binary_expression"\nreplace = "true"\n')),(0,i.kt)("p",null,"Currently, Piranha picks up the language specific configurations from ",(0,i.kt)("inlineCode",{parentName:"p"},"src/cleanup_rule/<language>"),"."),(0,i.kt)("h5",null," Example "),(0,i.kt)("div",{style:{display:"flex",justifyContent:"space-around"}},(0,i.kt)("div",{style:{width:"49%"}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int foobar(){\n    boolean x = exp.isTreated(SOME_STALE_FLAG);\n        if (x || someCondition()) {\n            return 100;\n    }\n        return 0;\n    }\n"))),(0,i.kt)("div",{style:{width:"2%"}}),(0,i.kt)("div",{style:{width:"49%"}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int foobar(){\n    return 100;\n}\n\n\n")))),(0,i.kt)("p",null,"We would first define flag API rules as discussed in the section ",(0,i.kt)("a",{parentName:"p",href:"#adding-support-for-a-new-language"},"Adding Support for a new language"),". Assuming this rule replaces the occurrence of the flag API corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"SOME_STALE_FLAG")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"; we would have to define more cleanup rules as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"R0"),": Deletes the enclosing variable declaration (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),") (E.g. ",(0,i.kt)("a",{parentName:"li",href:"/src/cleanup_rules/java/rules.toml"},"java-rules"),":",(0,i.kt)("inlineCode",{parentName:"li"},"delete_variable_declarations"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"R1"),": replace the identifier with the RHS of the deleted variable declaration, within the body of the enclosing method where ",(0,i.kt)("inlineCode",{parentName:"li"},"R0")," was applied i.e. replace ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," within the method body of ",(0,i.kt)("inlineCode",{parentName:"li"},"foobar"),". (E.g. ",(0,i.kt)("a",{parentName:"li",href:"/src/cleanup_rules/java/rules.toml"},"java-rules"),":",(0,i.kt)("inlineCode",{parentName:"li"},"replace_expression_with_boolean_literal"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"R2"),": simplify the boolean expressions, for example replace ",(0,i.kt)("inlineCode",{parentName:"li"},"true || someCondition()")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", that encloses the node where ",(0,i.kt)("inlineCode",{parentName:"li"},"R1")," was applied. (E.g. ",(0,i.kt)("a",{parentName:"li",href:"/src/cleanup_rules/java/rules.toml"},"java-rules"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"true_or_something"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"R3"),": eliminate the enclosing if statement with a constant condition where ",(0,i.kt)("inlineCode",{parentName:"li"},"R2")," was applied (",(0,i.kt)("inlineCode",{parentName:"li"},"if (true) { return 100;}")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"return 100;"),"). E.g. ",(0,i.kt)("a",{parentName:"li",href:"/src/cleanup_rules/java/rules.toml"},"java-rules"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"simplify_if_statement_true, remove_unnecessary_nested_block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"R4"),": eliminate unreachable code (",(0,i.kt)("inlineCode",{parentName:"li"},"return 0;")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"return 100; return 0;"),") in the enclosing block where ",(0,i.kt)("inlineCode",{parentName:"li"},"R3")," was applied. (E.g. ",(0,i.kt)("a",{parentName:"li",href:"/src/cleanup_rules/java/rules.toml"},"java-rules"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"delete_all_statements_after_return"),")")),(0,i.kt)("p",null,"The fact that ",(0,i.kt)("inlineCode",{parentName:"p"},"R2")," has to be applied to the enclosing node where ",(0,i.kt)("inlineCode",{parentName:"p"},"R1")," was applied, is expressed by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"edges.toml")," file."),(0,i.kt)("p",null,"To define how these cleanup rules should be chained, one needs to specify edges (e.g. the ",(0,i.kt)("a",{parentName:"p",href:"/src/cleanup_rules/java/edges.toml"},"java-edges")," file) between the groups and (or) individual rules.\nThe edges can be labelled as ",(0,i.kt)("inlineCode",{parentName:"p"},"Parent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Global")," or even much finer scopes like ",(0,i.kt)("inlineCode",{parentName:"p"},"Method")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Class")," (or let's say ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"go-lang"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Parent")," edge implies that after Piranha applies the ",(0,i.kt)("inlineCode",{parentName:"li"},'"from"')," rule to update the node ",(0,i.kt)("inlineCode",{parentName:"li"},"n1")," in the AST to node ",(0,i.kt)("inlineCode",{parentName:"li"},"n2"),", Piranha tries to apply ",(0,i.kt)("inlineCode",{parentName:"li"},'"to"')," rules on any ancestor of ",(0,i.kt)("inlineCode",{parentName:"li"},'"n2"')," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"R1")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"R2"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"R2")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"R3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"R3")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"R4"),")"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Method")," edge implies that after Piranha applies the ",(0,i.kt)("inlineCode",{parentName:"li"},'"from"')," rule to update the node ",(0,i.kt)("inlineCode",{parentName:"li"},"n1")," in the AST to node ",(0,i.kt)("inlineCode",{parentName:"li"},"n2"),", Piranha tries to apply ",(0,i.kt)("inlineCode",{parentName:"li"},'"to"')," rules within the enclosing method's body. (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"R0")," \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"R1"),")"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Class")," edge implies that after Piranha applies the ",(0,i.kt)("inlineCode",{parentName:"li"},'"from"')," rule to update the node ",(0,i.kt)("inlineCode",{parentName:"li"},"n1")," in the AST to node ",(0,i.kt)("inlineCode",{parentName:"li"},"n2"),", Piranha tries to apply ",(0,i.kt)("inlineCode",{parentName:"li"},'"to"')," rules within the enclosing class body. (e.g. in-lining a private field)"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Global")," edge implies that after Piranha applies the ",(0,i.kt)("inlineCode",{parentName:"li"},'"from"')," rule to update the node ",(0,i.kt)("inlineCode",{parentName:"li"},"n1")," in the AST to node ",(0,i.kt)("inlineCode",{parentName:"li"},"n2"),", Piranha tries to apply ",(0,i.kt)("inlineCode",{parentName:"li"},'"to"')," rules in the entire code base. (e.g. in-lining a public field).")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scope_config.toml")," file specifies how to capture these fine-grained scopes like ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"function"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lambda"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),'.\nFirst decide, what scopes you need to capture, for instance, in Java we capture "Method" and "Class" scopes. Once, you decide the scopes construct scope query generators similar to ',(0,i.kt)("a",{parentName:"p",href:"/src/cleanup_rules/java/scope_config.toml"},"java-scope_config"),". Each scope query generator has two parts - (i) ",(0,i.kt)("inlineCode",{parentName:"p"},"matcher")," is a tree-sitter query that matches the AST for the scope, and (ii) ",(0,i.kt)("inlineCode",{parentName:"p"},"generator")," is a tree-sitter query with holes that is instantiated with the code snippets corresponding to tags when ",(0,i.kt)("inlineCode",{parentName:"p"},"matcher")," is matched."))}m.isMDXComponent=!0}}]);