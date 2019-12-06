(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return i}));t(58),t(31),t(22),t(23),t(59),t(0);var r=t(230);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={id:"analyzing-the-bundle-size",title:"Analyzing the Bundle Size",sidebar_label:"Analyzing Bundle Size"},c=[],p={rightToc:c},l="wrapper";function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(l,a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/source-map-explorer"}),"Source map explorer")," analyzes\nJavaScript bundles using the source maps. This helps you understand where code\nbloat is coming from."),Object(r.b)("p",null,"To add Source map explorer to a Create React App project, follow these steps:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npm install --save source-map-explorer\n")),Object(r.b)("p",null,"Alternatively you may use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"yarn add source-map-explorer\n")),Object(r.b)("p",null,"Then in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", add the following line to ",Object(r.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-diff"}),'   "scripts": {\n+    "analyze": "source-map-explorer \'build/static/js/*.js\'",\n     "start": "react-scripts start",\n     "build": "react-scripts build",\n     "test": "react-scripts test",\n')),Object(r.b)("p",null,"Then to analyze the bundle run the production build then run the analyze\nscript."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-sh"}),"npm run build\nnpm run analyze\n")))}i.isMDXComponent=!0},230:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var l="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,b=s[p+"."+u]||s[u]||i[u]||o;return t?a.a.createElement(b,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(b,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[l]="string"==typeof e?e:r,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);