parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aSor":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Component=x,exports.Fragment=b,exports.cloneElement=V,exports.createContext=j,exports.h=exports.createElement=m,exports.createRef=k,exports.hydrate=B,exports.options=exports.isValidElement=void 0,exports.render=$,exports.toChildArray=T;var e,t,n,_,o,l,r,u,i,s,c,p,f={},a=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,t){for(var n in t)e[n]=t[n];return e}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function m(t,n,_){var o,l,r,u={};for(r in n)"key"==r?o=n[r]:"ref"==r?l=n[r]:u[r]=n[r];if(arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===u[r]&&(u[r]=t.defaultProps[r]);return g(t,u,o,l,null)}function g(e,_,o,l,r){var u={type:e,props:_,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++n:r,__i:-1,__u:0};return null==r&&null!=t.vnode&&t.vnode(u),u}function k(){return{current:null}}function b(e){return e.children}function x(e,t){this.props=e,this.context=t}function w(e,t){if(null==t)return e.__?w(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?w(e):null}function C(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return C(e)}}function P(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!S.__r++||l!==t.debounceRendering)&&((l=t.debounceRendering)||r)(S)}function S(){var e,n,_,l,r,i,s,c;for(o.sort(u);e=o.shift();)e.__d&&(n=o.length,l=void 0,i=(r=(_=e).__v).__e,s=[],c=[],_.__P&&((l=v({},r)).__v=r.__v+1,t.vnode&&t.vnode(l),N(_.__P,l,r,_.__n,_.__P.namespaceURI,32&r.__u?[i]:null,s,null==i?w(r):i,!!(32&r.__u),c),l.__v=r.__v,l.__.__k[l.__i]=l,R(s,l,c),l.__e!=i&&C(l)),o.length>n&&o.sort(u));S.__r=0}function U(e,t,n,_,o,l,r,u,i,s,c){var p,d,h,v,y,m=_&&_.__k||a,g=t.length;for(n.__d=i,E(n,t,m),i=n.__d,p=0;p<g;p++)null!=(h=n.__k[p])&&"boolean"!=typeof h&&"function"!=typeof h&&(d=-1===h.__i?f:m[h.__i]||f,h.__i=p,N(e,h,d,o,l,r,u,i,s,c),v=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&H(d.ref,null,h),c.push(h.ref,h.__c||v,h)),null==y&&null!=v&&(y=v),65536&h.__u||d.__k===h.__k?(i&&!i.isConnected&&(i=w(d)),i=M(h,i,e)):"function"==typeof h.type&&void 0!==h.__d?i=h.__d:v&&(i=v.nextSibling),h.__d=void 0,h.__u&=-196609);n.__d=i,n.__e=y}function E(e,t,n){var _,o,l,r,u,i=t.length,s=n.length,c=s,p=0;for(e.__k=[],_=0;_<i;_++)r=_+p,null!=(o=e.__k[_]=null==(o=t[_])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):h(o)?g(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=D(o,n,r,c),o.__i=u,l=null,-1!==u&&(c--,(l=n[u])&&(l.__u|=131072)),null==l||null===l.__v?(-1==u&&p--,"function"!=typeof o.type&&(o.__u|=65536)):u!==r&&(u===r+1?p++:u>r?c>i-r?p+=u-r:p--:u<r?u==r-1&&(p=u-r):p=0,u!==_+p&&(o.__u|=65536))):(l=n[r])&&null==l.key&&l.__e&&0==(131072&l.__u)&&(l.__e==e.__d&&(e.__d=w(l)),I(l,l,!1),n[r]=null,c--);if(c)for(_=0;_<s;_++)null!=(l=n[_])&&0==(131072&l.__u)&&(l.__e==e.__d&&(e.__d=w(l)),I(l,l))}function M(e,t,n){var _,o;if("function"==typeof e.type){for(_=e.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=e,t=M(_[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8===t.nodeType);return t}function T(e,t){return t=t||[],null==e||"boolean"==typeof e||(h(e)?e.some(function(e){T(e,t)}):t.push(e)),t}function D(e,t,n,_){var o=e.key,l=e.type,r=n-1,u=n+1,i=t[n];if(null===i||i&&o==i.key&&l===i.type&&0==(131072&i.__u))return n;if(_>(null!=i&&0==(131072&i.__u)?1:0))for(;r>=0||u<t.length;){if(r>=0){if((i=t[r])&&0==(131072&i.__u)&&o==i.key&&l===i.type)return r;r--}if(u<t.length){if((i=t[u])&&0==(131072&i.__u)&&o==i.key&&l===i.type)return u;u++}}return-1}function L(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||d.test(t)?n:n+"px"}function W(e,t,n,_,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||L(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||L(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?_?n.u=_.u:(n.u=i,e.addEventListener(t,l?c:s,l)):e.removeEventListener(t,l?c:s,l);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function F(e){return function(n){if(this.l){var _=this.l[n.type+e];if(null==n.t)n.t=i++;else if(n.t<_.u)return;return _(t.event?t.event(n):n)}}}function N(e,n,_,o,l,r,u,i,s,c){var p,f,a,d,y,m,g,k,w,C,P,S,E,M,T,D=n.type;if(void 0!==n.constructor)return null;128&_.__u&&(s=!!(32&_.__u),r=[i=n.__e=_.__e]),(p=t.__b)&&p(n);e:if("function"==typeof D)try{if(k=n.props,w=(p=D.contextType)&&o[p.__c],C=p?w?w.props.value:p.__:o,_.__c?g=(f=n.__c=_.__c).__=f.__E:("prototype"in D&&D.prototype.render?n.__c=f=new D(k,C):(n.__c=f=new x(k,C),f.constructor=D,f.render=O),w&&w.sub(f),f.props=k,f.state||(f.state={}),f.context=C,f.__n=o,a=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=D.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,D.getDerivedStateFromProps(k,f.__s))),d=f.props,y=f.state,f.__v=n,a)null==D.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==D.getDerivedStateFromProps&&k!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,C),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,C)||n.__v===_.__v)){for(n.__v!==_.__v&&(f.props=k,f.state=f.__s,f.__d=!1),n.__e=_.__e,n.__k=_.__k,n.__k.forEach(function(e){e&&(e.__=n)}),P=0;P<f._sb.length;P++)f.__h.push(f._sb[P]);f._sb=[],f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,y,m)})}if(f.context=C,f.props=k,f.__P=e,f.__e=!1,S=t.__r,E=0,"prototype"in D&&D.prototype.render){for(f.state=f.__s,f.__d=!1,S&&S(n),p=f.render(f.props,f.state,f.context),M=0;M<f._sb.length;M++)f.__h.push(f._sb[M]);f._sb=[]}else do{f.__d=!1,S&&S(n),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++E<25);f.state=f.__s,null!=f.getChildContext&&(o=v(v({},o),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,y)),U(e,h(T=null!=p&&p.type===b&&null==p.key?p.props.children:p)?T:[T],n,_,o,l,r,u,i,s,c),f.base=n.__e,n.__u&=-161,f.__h.length&&u.push(f),g&&(f.__E=f.__=null)}catch(e){n.__v=null,s||null!=r?(n.__e=i,n.__u|=s?160:32,r[r.indexOf(i)]=null):(n.__e=_.__e,n.__k=_.__k),t.__e(e,n,_)}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=A(_.__e,n,_,o,l,r,u,s,c);(p=t.diffed)&&p(n)}function R(e,n,_){n.__d=void 0;for(var o=0;o<_.length;o++)H(_[o],_[++o],_[++o]);t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function A(t,n,_,o,l,r,u,i,s){var c,p,a,d,v,m,g,k=_.props,b=n.props,x=n.type;if("svg"===x?l="http://www.w3.org/2000/svg":"math"===x?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),null!=r)for(c=0;c<r.length;c++)if((v=r[c])&&"setAttribute"in v==!!x&&(x?v.localName===x:3===v.nodeType)){t=v,r[c]=null;break}if(null==t){if(null===x)return document.createTextNode(b);t=document.createElementNS(l,x,b.is&&b),r=null,i=!1}if(null===x)k===b||i&&t.data===b||(t.data=b);else{if(r=r&&e.call(t.childNodes),k=_.props||f,!i&&null!=r)for(k={},c=0;c<t.attributes.length;c++)k[(v=t.attributes[c]).name]=v.value;for(c in k)if(v=k[c],"children"==c);else if("dangerouslySetInnerHTML"==c)a=v;else if("key"!==c&&!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;W(t,c,null,v,l)}for(c in b)v=b[c],"children"==c?d=v:"dangerouslySetInnerHTML"==c?p=v:"value"==c?m=v:"checked"==c?g=v:"key"===c||i&&"function"!=typeof v||k[c]===v||W(t,c,v,k[c],l);if(p)i||a&&(p.__html===a.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),n.__k=[];else if(a&&(t.innerHTML=""),U(t,h(d)?d:[d],n,_,o,"foreignObject"===x?"http://www.w3.org/1999/xhtml":l,r,u,r?r[0]:_.__k&&w(_,0),i,s),null!=r)for(c=r.length;c--;)null!=r[c]&&y(r[c]);i||(c="value",void 0!==m&&(m!==t[c]||"progress"===x&&!m||"option"===x&&m!==k[c])&&W(t,c,m,k[c],l),c="checked",void 0!==g&&g!==t[c]&&W(t,c,g,k[c],l))}return t}function H(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function I(e,n,_){var o,l;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||H(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&I(o[l],n,_||"function"!=typeof e.type);_||null==e.__e||y(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function O(e,t,n){return this.constructor(e,n)}function $(n,_,o){var l,r,u,i;t.__&&t.__(n,_),r=(l="function"==typeof o)?null:o&&o.__k||_.__k,u=[],i=[],N(_,n=(!l&&o||_).__k=m(b,null,[n]),r||f,f,_.namespaceURI,!l&&o?[o]:r?null:_.firstChild?e.call(_.childNodes):null,u,!l&&o?o:r?r.__e:_.firstChild,l,i),R(u,n,i)}function B(e,t){$(e,t,B)}function V(t,n,_){var o,l,r,u,i=v({},t.props);for(r in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),n)"key"==r?o=n[r]:"ref"==r?l=n[r]:i[r]=void 0===n[r]&&void 0!==u?u[r]:n[r];return arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),g(t.type,i,o||t.key,l||t.ref,null)}function j(e,t){var n={__c:t="__cC"+p++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,_;return this.getChildContext||(n=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(function(e){e.__e=!0,P(e)})},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}e=a.slice,exports.options=t={__e:function(e,t,n,_){for(var o,l,r;t=t.__;)if((o=t.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),r=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),r=o.__d),r)return o.__E=o}catch(t){e=t}throw e}},n=0,exports.isValidElement=_=function(e){return null!=e&&null==e.constructor},x.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},n),this.props)),e&&v(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),P(this))},x.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},x.prototype.render=b,o=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,t){return e.__v.__b-t.__v.__b},S.__r=0,i=0,s=F(!1),c=F(!0),p=0;
},{}],"yOgR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Fragment",{enumerable:!0,get:function(){return e.Fragment}}),exports.jsxs=exports.jsxDEV=exports.jsx=s,exports.jsxAttr=c,exports.jsxEscape=p,exports.jsxTemplate=f;var e=require("preact"),r=/["&<]/;function t(e){if(0===e.length||!1===r.test(e))return e;for(var t=0,n=0,o="",i="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}n!==t&&(o+=e.slice(t,n)),o+=i,t=n+1}return n!==t&&(o+=e.slice(t,n)),o}var n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,o=0,i=Array.isArray;function s(r,t,n,i,s,f){t||(t={});var u,a,c=t;if("ref"in c)for(a in c={},t)"ref"==a?u=t[a]:c[a]=t[a];var p={type:r,props:c,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--o,__i:-1,__u:0,__source:s,__self:f};if("function"==typeof r&&(u=r.defaultProps))for(a in u)void 0===c[a]&&(c[a]=u[a]);return e.options.vnode&&e.options.vnode(p),p}function f(r){var t=s(e.Fragment,{tpl:r,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var u={},a=/[A-Z]/g;function c(r,o){if(e.options.attr){var i=e.options.attr(r,o);if("string"==typeof i)return i}if("ref"===r||"key"===r)return"";if("style"===r&&"object"==typeof o){var s="";for(var f in o){var c=o[f];if(null!=c&&""!==c){var p="-"==f[0]?f:u[f]||(u[f]=f.replace(a,"-$&").toLowerCase()),l=";";"number"!=typeof c||p.startsWith("--")||n.test(p)||(l="px;"),s=s+p+":"+c+l}}return r+'="'+s+'"'}return null==o||!1===o||"function"==typeof o||"object"==typeof o?"":!0===o?r:r+'="'+t(o)+'"'}function p(e){if(null==e||"boolean"==typeof e||"function"==typeof e)return null;if("object"==typeof e){if(void 0===e.constructor)return e;if(i(e)){for(var r=0;r<e.length;r++)e[r]=p(e[r]);return e}}return t(""+e)}
},{"preact":"aSor"}],"j2Tk":[function(require,module,exports) {
"use strict";function r(r,e){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=t(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return u=r.done,r},e:function(r){f=!0,i=r},f:function(){try{u||null==n.return||n.return()}finally{if(f)throw i}}}}function t(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function n(t){for(var e=[],n=0,o=Object.keys(t);n<o.length;n++){var a,i=o[n],u=r(t[i]);try{for(u.s();!(a=u.n()).done;){var f=a.value;e.push([i,f])}}catch(l){u.e(l)}finally{u.f()}}return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.pairs=n;
},{}],"FnLY":[function(require,module,exports) {
"use strict";function t(t){return Math.floor(Math.random()*t)}function r(t){return t[Math.floor(Math.random()*t.length)]}function n(t,n){for(var e=[],o=function(){var n=r(t);e.push(n),t=t.filter(function(t){return t!=n})};e.length<n&&t.length>0;)o();return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.pick=r,exports.pickInt=t,exports.pickN=n;
},{}],"s4OD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateBackward=s,exports.generateBadPair=p,exports.generateForward=u,exports.generateGoodPair=f;var t=require("./pick");function r(t){return c(t)||o(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function o(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function c(t){if(Array.isArray(t))return i(t)}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function a(t){return(t=r(t)).sort(function(t){return Math.random()-.5}),t}function u(e,n,o,c){var i=(0,t.pick)(c),u=(0,t.pickN)(c.filter(function(t){return t[0]!=i[0]}).map(function(t){return t[1]}),3);return{topic:e,text:o(i[0]),correctAnswer:i[1],options:a([i[1]].concat(r(u))),source:n,attempts:0,failures:0}}function s(t,r,e,n){return u(t,r,e,n.map(function(t){return[t[1],t[0]]}))}function f(e,n,o){var c=(0,t.pickN)(o,4),i=m(c[0]),u=c.slice(1).map(function(t){return l(t,o)}).map(m);return{topic:e,text:"Select the correct one.",correctAnswer:i,options:a([i].concat(r(u))),source:n,attempts:0,failures:0}}function p(e,n,o){var c=(0,t.pickN)(o,4),i=m(l(c[0],o)),u=c.slice(1).map(m);return{topic:e,text:"Select the wrong one.",correctAnswer:i,options:a([i].concat(r(u))),source:n,attempts:0,failures:0}}function l(r,e){var n=e.filter(function(t){return t[0]!=r[0]}).map(function(t){return t[1]});return[r[0],(0,t.pick)(n)]}function m(t){return"".concat(t[0]," - ").concat(t[1])}
},{"./pick":"FnLY"}],"xI8f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateQuestion=i;var a=require("./assoc"),e=require("./pick"),n=require("./questions"),r=(0,a.pairs)({Portugal:["CT","CS"],Andorra:["C3"],Germany:["DL","DA...DO"],Spain:["EA","EB","EC","ED"],Ireland:["EI"],Moldova:["ER"],Estonia:["ES"],Belarus:["EU"],France:["F","FA...FE"],"United Kingdom":["G","GB...GM","M"],Hungary:["HA","HG"],Switzerland:["HB"],Liechtenstein:["HB0"],Vatican:["HV"],Italy:["I","IA...IZ"],Norway:["LA","LB"],Luxembourg:["LX"],Lithuania:["LY"],Bulgaria:["LZ"],Austria:["OE"],Finland:["OH","OF...OI"],"Czech Republic":["OK","OL"],Slovakia:["OM"],Belgium:["ON"],"Faroe Islands":["OY"],Denmark:["OZ"],Netherlands:["PA","PB","PD","PE","PI"],Russia:["RA","UA..."],Kaliningrad:["RA2"],Sweden:["SM","SK","SL"],Poland:["SP","SO"],Greece:["SV"],Slovenia:["S5"],Corsica:["TK"],"San Marino":["T7"],"Bosnia and Herzegovina":["T9"],Turkey:["TA","TB","TC"],Ukraine:["UR"],Latvia:["YL"],Romania:["YO"],"Serbia and Montenegro":["YU","YT"],Albania:["ZA"],"North Macedonia":["Z3"],Gibraltar:["ZB"],Monaco:["3A"],Croatia:["9A"],Malta:["9H"]});function i(){var a="Callsign prefixes",i="https://tankonyv.ham.hu/A_vizsga-DJ4UF/?cid=a11";return(0,e.pick)([function(){return(0,n.generateForward)(a,i,function(a){return"What is the prefix of ".concat(a,"?")},r)},function(){return(0,n.generateBackward)(a,i,function(a){return"What country corresponds to the prefix ".concat(a,"?")},r)},function(){return(0,n.generateGoodPair)(a,i,r)},function(){return(0,n.generateBadPair)(a,i,r)}])()}
},{"./assoc":"j2Tk","./pick":"FnLY","./questions":"s4OD"}],"EarN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateQuestion=a;var e=require("./pick"),o=require("./questions"),r=[["QRA?","What is the name (or call sign) of your station?"],["QRA","The name (or call sign) of my station is ..."],["QRB?","How far are you from my station?"],["QRB","The distance between our stations is ... nautical miles (or km)."],["QRG?","Will you tell me my exact frequency (or that of ...)?"],["QRG","Your exact frequency (or that of ... ) is ... kHz (or MHz)."],["QRH?","Does my frequency vary?"],["QRH","Your frequency varies."],["QRI?","How is the tone of my transmission?"],["QRI","The tone of your transmission is (1: good, 2: variable 3: bad)"],["QRK?","What is the readability of my signals (or those of ...)?"],["QRK","The readability of your signals (or those of ...) is ... (1: bad .. 5: excellent)."],["QRL?","Are you busy?"],["QRL","I am busy. (or I am busy with ... ) Please do not interfere."],["QRM?","Do you have interference?"],["QRM","I have interference."],["QRN?","Are you troubled by static noise?"],["QRN","I am troubled by static noise."],["QRO?","Shall I increase transmit power?"],["QRO","Please increase transmit power."],["QRP?","Shall I decrease transmit power?"],["QRP","Please decrease transmit power."],["QRQ?","Shall I send faster?"],["QRQ","Please send faster (... words per minute)."],["QRS?","Shall I send more slowly?"],["QRS","Please send more slowly (... words per minute)."],["QRT?","Shall I cease or suspend operation?"],["QRT","I am suspending operation."],["QRU?","Have you anything for me?"],["QRU","I have nothing for you."],["QRV?","Are you ready?"],["QRV","I am ready."],["QRX?","Shall I standby? / When will you call me again?"],["QRX","Please standby. / I will call you again at ... (hours) on ... kHz (or MHz)."],["QRZ?","Who is calling me?"],["QRZ","You are being called by ... (on ... kHz (or MHz))."],["QSA?","What is the strength of my signals (or those of ... )?"],["QSA","The strength of your signals (or those of ...) is ... (1: very weak .. 5: very strong)."],["QSB?","Are my signals fading?"],["QSB","Your signals are fading."],["QSD?","Is my keying defective?"],["QSD","Your keying is defective."],["QSK?","Can you hear me between your signals (while transmitting), and if so can I break in on your transmission?"],["QSK","I can hear you between my signals (while transmitting); break in on my transmission."],["QSL?","Can you acknowledge receipt?"],["QSL","I am acknowledging receipt."],["QSM?","Shall I repeat the last telegram (message) which I sent you, or some previous telegram (message)?"],["QSM","Repeat the last telegram (message) which you sent me (or telegram(s) (message(s)) numbers(s) ...)."],["QSN?","Did you hear me (or ...) on ... kHz (or MHz)?."],["QSN","I did hear you (or ...) on ... kHz (or MHz)."],["QSO?","Can you communicate with ... direct or by relay?"],["QSO","I can communicate with ... direct (or by relay through ...)."],["QSP?","Will you relay a message to ...?"],["QSP","I will relay a message to ... ."],["QSS?","What working frequency will you use?"],["QSS","I will use ... kHz (or MHz)."],["QSU?","Shall I send or reply on this frequency (or on ... kHz (or MHz))?"],["QSU","Please send or reply on this frequency (or on ... kHz (or MHz))."],["QSV?",'Shall I send a series of "V" on this frequency (or on ... kHz (or MHz))?'],["QSV",'Please send a series of "V" on this frequency (or on ... kHz (or MHz)).'],["QSX?","Will you listen to ... on ... kHz (or MHz)?"],["QSX","I am listening to ... on ... kHz (or MHz)."],["QSY?","Shall I change transmission frequency (to ... kHz (or MHz))?"],["QSY","Please change transmission frequency (to ... kHz (or MHz))."],["QSZ?","Shall I send each word or group more than once?"],["QSZ","Send each word or group twice (or ... times)."],["QTC?","How many telegrams (messages) have you to send?"],["QTC","I have ... telegrams (messages) for you (or for ...)."],["QTH?","What is your position in latitude and longitude (or according to any other indication)?"],["QTH","My position is ... latitude, ... longitude."],["QTR?","What is the correct time?"],["QTR","The correct time is ... hours."]];function a(){var a="https://www.giangrandi.org/electronics/radio/qcode.shtml";return(0,e.pick)([function(){return(0,o.generateForward)("Q-codes",a,function(e){return"Translate '".concat(e,"'")},r)},function(){return(0,o.generateBackward)("Q-codes",a,function(e){return e},r)}])()}
},{"./pick":"FnLY","./questions":"s4OD"}],"MwGB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useCallback=V,exports.useContext=b,exports.useDebugValue=g,exports.useEffect=H,exports.useErrorBoundary=C,exports.useId=q,exports.useImperativeHandle=y,exports.useLayoutEffect=x,exports.useMemo=N,exports.useReducer=d,exports.useRef=E,exports.useState=m;var _,n,t,e,r=require("preact"),u=0,o=[],c=[],i=r.options,f=i.__b,a=i.__r,s=i.diffed,h=i.__c,l=i.unmount,v=i.__;function p(_,t){i.__h&&i.__h(n,_,u||t),u=0;var e=n.__H||(n.__H={__:[],__h:[]});return _>=e.__.length&&e.__.push({__V:c}),e.__[_]}function m(_){return u=1,d(T,_)}function d(t,e,r){var u=p(_++,2);if(u.t=t,!u.__c&&(u.__=[r?r(e):T(void 0,e),function(_){var n=u.__N?u.__N[0]:u.__[0],t=u.t(n,_);n!==t&&(u.__N=[t,u.__[1]],u.__c.setState({}))}],u.__c=n,!n.u)){var o=function(_,n,t){if(!u.__c.__H)return!0;var e=u.__c.__H.__.filter(function(_){return!!_.__c});if(e.every(function(_){return!_.__N}))return!c||c.call(this,_,n,t);var r=!1;return e.forEach(function(_){if(_.__N){var n=_.__[0];_.__=_.__N,_.__N=void 0,n!==_.__[0]&&(r=!0)}}),!(!r&&u.__c.props===_)&&(!c||c.call(this,_,n,t))};n.u=!0;var c=n.shouldComponentUpdate,i=n.componentWillUpdate;n.componentWillUpdate=function(_,n,t){if(this.__e){var e=c;c=void 0,o(_,n,t),c=e}i&&i.call(this,_,n,t)},n.shouldComponentUpdate=o}return u.__N||u.__}function H(t,e){var r=p(_++,3);!i.__s&&P(r.__H,e)&&(r.__=t,r.i=e,n.__H.__h.push(r))}function x(t,e){var r=p(_++,4);!i.__s&&P(r.__H,e)&&(r.__=t,r.i=e,n.__h.push(r))}function E(_){return u=5,N(function(){return{current:_}},[])}function y(_,n,t){u=6,x(function(){return"function"==typeof _?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0},null==t?t:t.concat(_))}function N(n,t){var e=p(_++,7);return P(e.__H,t)?(e.__V=n(),e.i=t,e.__h=n,e.__V):e.__}function V(_,n){return u=8,N(function(){return _},n)}function b(t){var e=n.context[t.__c],r=p(_++,9);return r.c=t,e?(null==r.__&&(r.__=!0,e.sub(n)),e.props.value):t.__}function g(_,n){i.useDebugValue&&i.useDebugValue(n?n(_):_)}function C(t){var e=p(_++,10),r=m();return e.__=t,n.componentDidCatch||(n.componentDidCatch=function(_,n){e.__&&e.__(_,n),r[1](_)}),[r[0],function(){r[1](void 0)}]}function q(){var t=p(_++,11);if(!t.__){for(var e=n.__v;null!==e&&!e.__m&&null!==e.__;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function A(){for(var n;n=o.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(k),n.__H.__h.forEach(U),n.__H.__h=[]}catch(_){n.__H.__h=[],i.__e(_,n.__v)}}i.__b=function(_){n=null,f&&f(_)},i.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),v&&v(_,n)},i.__r=function(e){a&&a(e),_=0;var r=(n=e.__c).__H;r&&(t===n?(r.__h=[],n.__h=[],r.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=c,_.__N=_.i=void 0})):(r.__h.forEach(k),r.__h.forEach(U),r.__h=[],_=0)),t=n},i.diffed=function(_){s&&s(_);var r=_.__c;r&&r.__H&&(r.__H.__h.length&&(1!==o.push(r)&&e===i.requestAnimationFrame||((e=i.requestAnimationFrame)||F)(A)),r.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==c&&(_.__=_.__V),_.i=void 0,_.__V=c})),t=n=null},i.__c=function(_,t){t.some(function(_){try{_.__h.forEach(k),_.__h=_.__h.filter(function(_){return!_.__||U(_)})}catch(n){t.some(function(_){_.__h&&(_.__h=[])}),t=[],i.__e(n,_.__v)}}),h&&h(_,t)},i.unmount=function(_){l&&l(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(_){try{k(_)}catch(_){n=_}}),t.__H=void 0,n&&i.__e(n,t.__v))};var D="function"==typeof requestAnimationFrame;function F(_){var n,t=function(){clearTimeout(e),D&&cancelAnimationFrame(n),setTimeout(_)},e=setTimeout(t,100);D&&(n=requestAnimationFrame(t))}function k(_){var t=n,e=_.__c;"function"==typeof e&&(_.__c=void 0,e()),n=t}function U(_){var t=n;_.__c=_.__(),n=t}function P(_,n){return!_||_.length!==n.length||n.some(function(n,t){return n!==_[t]})}function T(_,n){return"function"==typeof n?n(_):n}
},{"preact":"aSor"}],"zo2T":[function(require,module,exports) {
"use strict";var e=require("preact/jsx-runtime"),t=require("preact"),r=require("./prefixes"),n=require("./qcodes"),o=require("./pick"),i=require("preact/hooks");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return l(e)||a(e,t)||O(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,u=[],s=!0,a=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{if(!s&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(a)throw o}}return u}}function l(e){if(Array.isArray(e))return e}function f(e){return y(e)||p(e)||O(e)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function y(e){if(Array.isArray(e))return w(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=g(e,"string");return"symbol"==c(t)?t:t+""}function g(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function j(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=O(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function O(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var q=.6,S=function(t){var r=t.question,n="good"==t.correct?"green":"bad"==t.correct?"red":"";return(0,e.jsxs)("div",{className:"option-container",children:[(0,e.jsx)("h2",{children:r.topic}),(0,e.jsx)("p",{children:r.text}),(0,e.jsx)("button",{className:0==t.selectedOption?n:"",onClick:function(){return t.checkAnswer(0)},children:r.options[0]}),(0,e.jsx)("button",{className:1==t.selectedOption?n:"",onClick:function(){return t.checkAnswer(1)},children:r.options[1]}),(0,e.jsx)("button",{className:2==t.selectedOption?n:"",onClick:function(){return t.checkAnswer(2)},children:r.options[2]}),(0,e.jsx)("button",{className:3==t.selectedOption?n:"",onClick:function(){return t.checkAnswer(3)},children:r.options[3]}),(0,e.jsxs)("div",{className:"feedback",children:["good"==t.correct&&"That's right!","bad"==t.correct&&"Unfortunately not..."]}),(0,e.jsx)("div",{className:"source",children:(0,e.jsx)("a",{href:t.question.source,children:"source"})})]})};function x(e){return(e.failures+1)/(e.attempts+1)}function A(e){console.log("recite old question");for(var t=function(e){return x(e)<q?0:x(e)},r=I(e.map(t)),n=Math.random()*r,o=0,i=0;i<e.length;i++)if((o+=t(e[i]))>n)return i;return e.length-1}function k(e){return console.log("generate new question"),(0,o.pick)([r.generateQuestion,n.generateQuestion])()}function I(e){var t,r=0,n=j(e);try{for(n.s();!(t=n.n()).done;){r+=t.value}}catch(o){n.e(o)}finally{n.f()}return r}function P(e){var t=I(e.questions.map(x))/e.questions.length;if(console.log(e.questions.length,t),e.questions.length<4||t<q){var r=k(e.questions);return m(m({},e),{},{questions:[r].concat(f(e.questions)),currentQuestionIndex:0,correct:"notAnswered",selectedOption:"notSelected"})}return m(m({},e),{},{currentQuestionIndex:A(e.questions),correct:"notAnswered",selectedOption:"notSelected"})}var N=P({questions:[],currentQuestionIndex:-1,correct:"notAnswered",selectedOption:"notSelected"}),Q=function(){var t=u((0,i.useState)(N),2),r=t[0],n=t[1],o=(0,i.useCallback)(function(e){if("good"!=r.correct){var t=r.questions[r.currentQuestionIndex],o=t.options[e]===t.correctAnswer;n(m(m({},r),{},{questions:r.questions.map(function(e,t){return t==r.currentQuestionIndex?m(m({},e),{},{attempts:e.attempts+1,failures:e.failures+(o?0:1)}):e}),selectedOption:e,correct:o?"good":"bad"})),o?setTimeout(function(){n(P)},500):setTimeout(function(){n(function(e){return m(m({},e),{},{correct:"notAnswered",selectedOption:"notSelected"})})},500)}},[r]);return(0,e.jsx)("div",{children:(0,e.jsx)(S,{question:r.questions[r.currentQuestionIndex],checkAnswer:o,correct:r.correct,selectedOption:r.selectedOption})})};(0,t.render)((0,e.jsx)(Q,{}),document.body);
},{"preact/jsx-runtime":"yOgR","preact":"aSor","./prefixes":"xI8f","./qcodes":"EarN","./pick":"FnLY","preact/hooks":"MwGB"}]},{},["zo2T"], null)
//# sourceMappingURL=src.32453299.js.map