_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/ztp":function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"default",(function(){return s}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),c=n.n(o),u=n("7ljp"),i=n("ZDfL"),f=(c.a.createElement,{version:"*",title:"Feature C",shortTitle:"Feature C",intro:"Feature C intro.",__resourcePath:"app-1/feature-c/index.mdx",__scans:{},layout:"index"}),l={frontMatter:f},p=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(u.a)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(u.a)("p",null,"Content"))}s.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createContext({}),l=function(e){var t=a.a.useContext(f),n=t;return e&&(n="function"===typeof e?e(t):u(u({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,y=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return n?a.a.createElement(y,u(u({ref:t},f),{},{components:n})):a.a.createElement(y,u({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"===typeof e?e:r,c[1]=u;for(var f=2;f<o;f++)c[f]=n[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},IIeE:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("YFqc"),a=n.n(r),o=n("nOHt"),c=n("q1tI"),u=n.n(c),i=n("dJVS"),f=u.a.createElement;function l(){var e=Object(c.useContext)(i.a),t=Object(o.useRouter)(),n="/"!==t.pathname&&t.pathname.split("/")[1],r=function(e){return e.data?e.data.linkTitle?e.data.linkTitle:e.data.title:u(e.fileName?e.fileName:e.pathName)},u=function(e){return e.split("/").pop().replace(/\.[^/.]+$/,"").replace(/-/g," ").replace(/(?: |\b)(\w)/g,(function(e){return e.toUpperCase()}))},l=function(e,t){return"".concat(e,"/").concat("index.mdx"===t?"":t.replace(/\.[^/.]+$/,""))},p=function(e,t){var n=function(e,t){if(e===t.pathName)return!0;var n=t.pathName.split("/").filter((function(e){return e.length})),r=e.split("/").filter((function(e){return e.length}));return n.every((function(e,t){return r[t]===e}))}(e,t);return f("li",{key:t.pathName},f("p",null,f("a",{href:t.pathName},r(t)," ",function(e){return e?"--Down--":"--Up--"}(n))),n&&s(e,t))},s=function(e,t){return f("ul",null,t.files&&t.files.filter((function(e){return"mdx"===/(?:\.([^.]+))?$/.exec(e.fileName)[1].toLowerCase()})).map((function(e){return n=t.pathName,f("li",{key:(a=e).fileName},f("a",{href:l(n,a.fileName)},r(a)));var n,a})),t.directories&&Object.keys(t.directories).map((function(n){return p(e,t.directories[n])})))};return f("div",null,f(a.a,{href:"/"},f("a",null,"Home")),f("div",null,n?s(t.pathname,e.pages.apps[n]):Object.keys(e.pages.apps).map((function(t,n){return f("li",{key:n},f(a.a,{href:"/".concat(t)},f("a",null,e.pages.apps[t].data.title)))}))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},ZDfL:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("IIeE"),c=a.a.createElement;function u(e){var t=e.children,n=e.frontMatter;return c("div",null,c(o.a,null),c("h1",null,n.title),t)}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),u=n("elyg"),i=n("nOHt"),f=new Map,l=window.IntersectionObserver,p={};var s=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),p[t+"%"+n]=!0)}var y=function(e){var t=!1!==e.prefetch,n=c.default.useState(),a=r(n,2),o=a[0],f=a[1],y=(0,i.useRouter)(),m=y&&y.pathname||"/",v=c.default.useMemo((function(){var t=(0,u.resolveHref)(m,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,u.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),h=v.href,b=v.as;c.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,u.isLocalURL)(h)&&!p[h+"%"+b])return s(o,(function(){d(y,h,b)}))}),[t,o,h,b,y]);var O=e.children,g=e.replace,w=e.shallow,j=e.scroll;"string"===typeof O&&(O=c.default.createElement("a",null,O));var E=c.Children.only(O),x={ref:function(e){e&&f(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,y,h,b,g,w,j)}};return t&&(x.onMouseEnter=function(e){(0,u.isLocalURL)(h)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(y,h,b,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(x.href=(0,u.addBasePath)((0,u.addLocale)(b,y&&y.locale,y&&y.defaultLocale))),c.default.cloneElement(E,x)};t.default=y},dJVS:function(e,t,n){"use strict";var r=n("q1tI"),a=Object(r.createContext)();t.a=a},pJac:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app-1/feature-c",function(){return n("/ztp")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["pJac",0,1,2]]]);