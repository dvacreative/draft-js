/*! For license information please see 63d4bdf9.912b888b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),a=(r(181),r(180)),c={id:"getting-started",title:"Overview",onPageNav:"none"},i={id:"getting-started",title:"Overview",description:"Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences.",source:"@site/../docs/Overview.md",permalink:"/docs/getting-started",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Overview.md",lastUpdatedBy:"Robbert Brak",lastUpdatedAt:1593731e3,sidebar:"docs",next:{title:"API Basics",permalink:"/docs/quickstart-api-basics"}},u=[{value:"Installation",id:"installation",children:[]},{value:"API Changes Notice",id:"api-changes-notice",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences."),Object(a.b)("p",null,"Draft.js allows you to build any type of rich text input, whether you're only looking to support a few inline text styles or building a complex text editor for composing long-form articles."),Object(a.b)("p",null,"Draft.js was introduced at ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://conf2016.reactjs.org/schedule#rich-text-editing-with-react"}),"React.js Conf")," in February 2016."),Object(a.b)("iframe",{width:"100%",height:"365",src:"https://www.youtube.com/embed/feUYwoLhE_4",frameBorder:"0",allowFullScreen:!0}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Draft.js is distributed via npm. It depends on React and React DOM which must also be installed."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install draft-js react react-dom\n# or alternately\nyarn add draft-js react react-dom\n")),Object(a.b)("p",null,"Draft.js uses some modern ECMAScript features which are not available to IE11 and not part of create-react-app's default babel config. If you're running into problems out-of-the-box try installing a shim or polyfill alongside Draft."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install draft-js react react-dom babel-polyfill\n# or\nyarn add draft-js react react-dom es6-shim\n")),Object(a.b)("p",null,"Learn more about ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced-topics-issues-and-pitfalls#polyfills"}),"using a shim with Draft"),"."),Object(a.b)("h2",{id:"api-changes-notice"},"API Changes Notice"),Object(a.b)("p",null,"Before getting started, please be aware that we recently changed the API of\nEntity storage in Draft. The latest version, ",Object(a.b)("inlineCode",{parentName:"p"},"v0.10.0"),", supports both the old\nand new API. Following that up will be ",Object(a.b)("inlineCode",{parentName:"p"},"v0.11.0")," which will remove the old API.\nIf you are interested in helping out, or tracking the progress, please follow\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/issues/839"}),"issue 839"),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {Editor, EditorState} from 'draft-js';\nimport 'draft-js/dist/Draft.css';\n\nclass MyEditor extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {editorState: EditorState.createEmpty()};\n    this.onChange = editorState => this.setState({editorState});\n  }\n\n  render() {\n    return (\n      <Editor editorState={this.state.editorState} onChange={this.onChange} />\n    );\n  }\n}\n\nReactDOM.render(<MyEditor />, document.getElementById('container'));\n")),Object(a.b)("p",null,"Since the release of React 16.8, you can use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"Hooks")," as a way to work with ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," without using a class."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {Editor, EditorState} from 'draft-js';\nimport 'draft-js/dist/Draft.css';\n\nfunction MyEditor() {\n  const [editorState, setEditorState] = React.useState(\n    () => EditorState.createEmpty(),\n  );\n\n  return <Editor editorState={editorState} onChange={setEditorState} />;\n}\n\nReactDOM.render(<MyEditor />, document.getElementById('container'));\n")),Object(a.b)("p",null,"Because Draft.js supports unicode, you must have the following meta tag in the ",Object(a.b)("inlineCode",{parentName:"p"},"<head></head>")," block of your HTML file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<meta charset="utf-8" />\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Draft.css")," should be included when rendering the editor. Learn more about ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced-topics-issues-and-pitfalls#missing-draftcss"}),"why"),"."),Object(a.b)("p",null,"Next, let's go into the basics of the API and learn what else you can do with Draft.js."))}s.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(b,i(i({ref:t},l),{},{components:r})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},181:function(e,t,r){"use strict";e.exports=r(182)},182:function(e,t,r){"use strict";var n=r(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}function v(){}function w(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var S=w.prototype=new v;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var E={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,N=[];function _(e,t,r,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case c:u=!0}}if(u)return n(o,t,""===r?"."+$(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+$(i=t[l],l);u+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,s=r+$(i,l++),n,o);else if("object"===i)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return u}(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function T(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),I(e,A,t=_(t,a,n,o)),D(t)}var U={current:null};function B(){var e=U.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,M,t=_(null,null,t,r)),D(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(h(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)k.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return B().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,r){return B().useReducer(e,t,r)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="16.13.1"},183:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,u=c(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(u[s]=r[s]);if(n){i=n(r);for(var f=0;f<i.length;f++)a.call(r,i[f])&&(u[i[f]]=r[i[f]])}}return u}}}]);