"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"usage",title:"Usage",sidebar_label:"Usage"},i=void 0,l={unversionedId:"reference/getting-started/usage",id:"reference/getting-started/usage",title:"Usage",description:"Polyglot Piranha can be used as a Python library or as a command-line tool.",source:"@site/docs/reference/getting-started/usage.md",sourceDirName:"reference/getting-started",slug:"/reference/getting-started/usage",permalink:"/piranha/docs/reference/getting-started/usage",draft:!1,editUrl:"https://github.com/uber/piranha/tree/website/site/docs/reference/getting-started/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage",sidebar_label:"Usage"},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/piranha/docs/reference/getting-started/install"},next:{title:"Demos",permalink:"/piranha/docs/reference/getting-started/demos"}},s={},c=[{value:"Python API",id:"python-api",level:3},{value:"Command-line Interface",id:"command-line-interface",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Polyglot Piranha can be used as a Python library or as a command-line tool."),(0,a.kt)("h3",{id:"python-api"},"Python API"),(0,a.kt)("p",null,"Here's an example of how to use the Python API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from polyglot_piranha import execute_piranha, PiranhaArguments\n\npiranha_arguments = PiranhaArguments(\n    path_to_codebase = "...",\n    path_to_configurations = "...",\n    language= "java",\n    substitutions = {},\n    dry_run = False, \n    cleanup_comments = True\n)\npiranha_summary = execute_piranha(piranha_arguments)\n')),(0,a.kt)("h3",{id:"command-line-interface"},"Command-line Interface"),(0,a.kt)("p",null,"Here's an example of how to use the command-line interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"polyglot_piranha [OPTIONS] --path-to-codebase <PATH_TO_CODEBASE> --path-to-configurations <PATH_TO_CONFIGURATIONS> -l <LANGUAGE>\n")),(0,a.kt)("p",null,"For more detailed usage instructions, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber/piranha/blob/master/README.md"},"official documentation"),"."))}m.isMDXComponent=!0}}]);