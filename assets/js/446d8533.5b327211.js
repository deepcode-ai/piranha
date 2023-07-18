"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={id:"usecases",title:"When is Polyglot Piranha useful?",sidebar_label:"Why Piranha?"},l=void 0,o={unversionedId:"reference/usecases",id:"reference/usecases",title:"When is Polyglot Piranha useful?",description:"Example 1 (Stale Feature Flag Cleanup)",source:"@site/docs/reference/usecases.md",sourceDirName:"reference",slug:"/reference/usecases",permalink:"/piranha/docs/reference/usecases",draft:!1,editUrl:"https://github.com/uber/piranha/tree/website/site/docs/reference/usecases.md",tags:[],version:"current",frontMatter:{id:"usecases",title:"When is Polyglot Piranha useful?",sidebar_label:"Why Piranha?"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/piranha/docs/reference/intro"},next:{title:"Stale Flag Cleanup",permalink:"/piranha/docs/reference/staleflags"}},s={},u=[{value:"Example 1 (Stale Feature Flag Cleanup)",id:"example-1-stale-feature-flag-cleanup",level:3},{value:"Example 2 (Structural Find/Replace with built-in cleanup)",id:"example-2-structural-findreplace-with-built-in-cleanup",level:3},{value:"Example 3 (Structural Find/Replace with custom cleanup)",id:"example-3-structural-findreplace-with-custom-cleanup",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"example-1-stale-feature-flag-cleanup"},"Example 1 (Stale Feature Flag Cleanup)"),(0,r.kt)("p",null,"Let's take an example, where we know for a fact that the expression ",(0,r.kt)("inlineCode",{parentName:"p"},'exp.isTreated("SHOW_MENU")')," always returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (i.e. the feature ",(0,r.kt)("em",{parentName:"p"},"Show Menu")," is treated)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public String fooBar(boolean x) {\n    if(exp.isTreated("SHOW_MENU")|| x){\n        String menu = getMenu();\n        return menu;\n    }\n    return "";\n}\n')),(0,r.kt)("p",null,"To cleanup this code with Piranha, a user would have to write ",(0,r.kt)("em",{parentName:"p"},"one")," rule to update the expressions like ",(0,r.kt)("inlineCode",{parentName:"p"},'exp.isTreated("SHOW_MENU")')," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and hook it to the pre-built boolean simplification rules. It would result in :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public String fooBar(boolean x) {\n    String menu = getMenu();\n    return menu;\n}\n")),(0,r.kt)("p",null,"Note how, user only specified the seed rule to update the expression to true, and Piranha simplified the disjunction (",(0,r.kt)("inlineCode",{parentName:"p"},'exp.isTreated("SHOW_MENU")|| x')," => ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"), then removed the stale if condition and finally deleted the unreachable return statement (",(0,r.kt)("inlineCode",{parentName:"p"},'return "";'),")."),(0,r.kt)("h3",{id:"example-2-structural-findreplace-with-built-in-cleanup"},"Example 2 (Structural Find/Replace with built-in cleanup)"),(0,r.kt)("p",null,"Let's say a user writes a piranha rule to delete an unused enum case (let's say ",(0,r.kt)("inlineCode",{parentName:"p"},"LOW"),'). However, this enum case "co-incidentally" is the only enum case in this enum declaration.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"enum Level {\n  LOW,\n}\n")),(0,r.kt)("p",null,"If the user hooks up this ",(0,r.kt)("em",{parentName:"p"},"enum case deletion")," rule to the pre-built rules, it would not only delete the enum case (",(0,r.kt)("inlineCode",{parentName:"p"},"LOW"),"), but also the consequent empty enum declaration and also optionally delete the consequently empty compilation unit."),(0,r.kt)("h3",{id:"example-3-structural-findreplace-with-custom-cleanup"},"Example 3 (Structural Find/Replace with custom cleanup)"),(0,r.kt)("p",null,"Let's take a canonical example of replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"Arrays.asList")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Collections.singletonList"),", when possible.\nThis task involves two steps (i) Replacing the expression (ii) Adding the import statement for ",(0,r.kt)("inlineCode",{parentName:"p"},"Collections")," if absent (Assuming ",(0,r.kt)("em",{parentName:"p"},"google java format")," takes care of the unused imports \ud83d\ude04).\nHowever, Piranha does not contain pre-built rules to add such a custom import statements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import java.util.ArrayList;\nimport java.util.Arrays;\n+ import java.util.Collections;\nclass Character{\n    String name;\n    List<String> friends;\n    List<String> enemies;\n\n    Character(String name) {\n        this.name = name;\n        this.friends = new ArrayList<>();\n-         this.enemies = Arrays.asList(this.name);\n+         this.enemies = Collections.singletonList(this.name);\n    }\n}\n")),(0,r.kt)("p",null,'For such a scenario a developer could first write a seed rule for replacing the expression and then craft a custom "cleanup" rule (that would be triggered by the seed rule) to add the import statement if absent within the same file.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Users can also craft a set of rules that trigger no other rules, i.e. use piranha as a simple structural find/replace tool."),(0,r.kt)("p",{parentName:"admonition"},"If you end up implementing a cleanup rule that could be useful for the community, feel free to make a PR to add it into the pre-built language specific rules*")))}m.isMDXComponent=!0}}]);