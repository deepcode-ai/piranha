"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[105],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={id:"rules",label:"Rules",title:"Defining"},o=void 0,l={unversionedId:"reference/rules",id:"reference/rules",title:"Defining",description:"Rules in Polyglot Piranha are defined using TOML (Tom's Obvious, Minimal Language). Each rule represents a transformation that identifies and modifies specific code snippets.",source:"@site/docs/reference/rules.md",sourceDirName:"reference",slug:"/reference/rules",permalink:"/piranha/docs/reference/rules",draft:!1,editUrl:"https://github.com/uber/piranha/tree/website/site/docs/reference/rules.md",tags:[],version:"current",frontMatter:{id:"rules",label:"Rules",title:"Defining"},sidebar:"docsSidebar",previous:{title:"Demos",permalink:"/piranha/docs/reference/getting-started/demos"},next:{title:"Defining edges",permalink:"/piranha/docs/reference/edges"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rules in Polyglot Piranha are defined using TOML (Tom's Obvious, Minimal Language). Each rule represents a transformation that identifies and modifies specific code snippets.\nA rule should contain at least one rule with the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": A query to find the code pattern to refactor (currently only tree-sitter queries and regex are supported)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replace_node"),": The captured node in the query that will be replaced."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replace_string"),": Replacement string or pattern for the refactored code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"holes"),": Placeholders in your queries that will be instantiated at runtime."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_seed_rule"),": Specifies whether this rule is an entry point for the rule graph.")),(0,i.kt)("p",null,"Optionally, a rule can have filters. Piranha supports two kinds of filters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enclosing_node"),": A pattern that specifies the enclosing node of the rule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"not_enclosing_node"),": A pattern that should not match any parent of the main match.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enclosing_node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"not_enclosing_node")," filters can be refined using contains with specified ",(0,i.kt)("inlineCode",{parentName:"p"},"[at_least, at_most]")," bounds, as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"not_contains"),"."),(0,i.kt)("p",null,"Here is an example of a rule:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[[rules]]\nname = "your_rule_name"\nquery = """(\n    (method_invocation name: (_) @name\n                       arguments: (argument_list) @args) @invk\n    (#eq? @name @hole1))\n"""\nreplace_node = "invk"\nreplace = "X.other_string @args"\nholes = ["hole1"]\nis_seed_rule = true\n[[rules.filters]]\nenclosing_node = "(your_enclosing_node_pattern) @your_capture_name"\nnot_contains = [\n    """(\n    (identifier) @id\n    (#eq? @id "x"))\n    """,\n]\ncontains =\n    """(\n    (identifier) @other_id\n    (#eq? @other_id "y"))\n    """\nat_least = 1\nat_most = 5\n')))}d.isMDXComponent=!0}}]);