(()=>{var e={131:(e,t,r)=>{var n=r(927),o=r(681).devDependencies;e.exports={corePath:"undefined"!=typeof process&&"development"===process.env.FFMPEG_ENV?n("/node_modules/@ffmpeg/core/dist/ffmpeg-core.js"):"https://unpkg.com/@ffmpeg/core@".concat(o["@ffmpeg/core"].substring(1),"/dist/ffmpeg-core.js")}},766:(e,t,r)=>{function n(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}var o=r(927),a=function(e){return new Promise((function(t,r){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(e){var t=e.target.error.code;r(Error("File could not be read! Code=".concat(t)))},n.readAsArrayBuffer(e)}))};e.exports=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t,void 0!==t){e.next=3;break}return e.abrupt("return",new Uint8Array);case 3:if("string"!=typeof t){e.next=16;break}if(!/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(t)){e.next=8;break}r=atob(t.split(",")[1]).split("").map((function(e){return e.charCodeAt(0)})),e.next=14;break;case 8:return e.next=10,fetch(o(t));case 10:return n=e.sent,e.next=13,n.arrayBuffer();case 13:r=e.sent;case 14:e.next=20;break;case 16:if(!(t instanceof File||t instanceof Blob)){e.next=20;break}return e.next=19,a(t);case 19:r=e.sent;case 20:return e.abrupt("return",new Uint8Array(r));case 21:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}()},82:(e,t,r)=>{function n(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))}}var a=r(927),i=r(380).log,c=function(){var e=o(regeneratorRuntime.mark((function e(t,r){var n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("info","fetch ".concat(t)),e.next=3,fetch(t);case 3:return e.next=5,e.sent.arrayBuffer();case 5:return n=e.sent,i("info","".concat(t," file size = ").concat(n.byteLength," bytes")),o=new Blob([n],{type:r}),a=URL.createObjectURL(o),i("info","".concat(t," blob URL = ").concat(a)),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();e.exports=function(){var e=o(regeneratorRuntime.mark((function e(t){var r,n,o,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"==typeof(r=t.corePath)){e.next=3;break}throw Error("corePath should be a string!");case 3:return n=a(r),e.next=6,c(n,"application/javascript");case 6:return o=e.sent,e.next=9,c(n.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm");case 9:return s=e.sent,e.next=12,c(n.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");case 12:if(u=e.sent,"undefined"!=typeof createFFmpegCore){e.next=15;break}return e.abrupt("return",new Promise((function(e){var t=document.createElement("script");t.src=o,t.type="text/javascript",t.addEventListener("load",(function r(){t.removeEventListener("load",r),i("info","ffmpeg-core.js script loaded"),e({createFFmpegCore,corePath:o,wasmPath:s,workerPath:u})})),document.getElementsByTagName("head")[0].appendChild(t)})));case 15:return i("info","ffmpeg-core.js script is loaded already"),e.abrupt("return",Promise.resolve({createFFmpegCore,corePath:o,wasmPath:s,workerPath:u}));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},10:(e,t,r)=>{var n=r(131),o=r(82),a=r(766);e.exports={defaultOptions:n,getCreateFFmpegCore:o,fetchFile:a}},620:e=>{e.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:function(){},progress:function(){},corePath:""}}},554:(e,t,r)=>{function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){a(i,n,o,c,s,"next",e)}function s(e){a(i,n,o,c,s,"throw",e)}c(void 0)}))}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=r(620),p=l.defaultArgs,m=l.baseOptions,d=r(380),h=d.setLogging,g=d.setCustomLogger,v=d.log,y=r(683),b=r(959),w=r(10),x=w.defaultOptions,j=w.getCreateFFmpegCore,E=r(681).version,O=Error("ffmpeg.wasm is not ready, make sure you have completed load().");e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(s(s({},m),x),e),r=t.log,o=t.logger,a=t.progress,c=f(t,["log","logger","progress"]),u=null,l=null,d=null,w=!1,F=a,L=function(e){"FFMPEG_END"===e&&null!==d&&(d(),d=null,w=!1)},k=function(e){var t=e.type,r=e.message;v(t,r),y(r,F),L(r)},P=function(){var e=i(regeneratorRuntime.mark((function e(){var t,r,n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v("info","load ffmpeg-core"),null!==u){e.next=17;break}return v("info","loading ffmpeg-core"),e.next=5,j(c);case 5:return t=e.sent,r=t.createFFmpegCore,n=t.corePath,o=t.workerPath,a=t.wasmPath,e.next=12,r({mainScriptUrlOrBlob:n,printErr:function(e){return k({type:"fferr",message:e})},print:function(e){return k({type:"ffout",message:e})},locateFile:function(e,t){if("undefined"!=typeof window){if(void 0!==a&&e.endsWith("ffmpeg-core.wasm"))return a;if(void 0!==o&&e.endsWith("ffmpeg-core.worker.js"))return o}return t+e}});case 12:u=e.sent,l=u.cwrap("proxy_main","number",["number","number"]),v("info","ffmpeg-core loaded"),e.next=18;break;case 17:throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){return null!==u},_=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(v("info","run ffmpeg command: ".concat(t.join(" "))),null===u)throw O;if(w)throw Error("ffmpeg.wasm can only run one command at a time");return w=!0,new Promise((function(e){var r=[].concat(n(p),t).filter((function(e){return 0!==e.length}));d=e,l.apply(void 0,n(b(u,r)))}))},R=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if(v("info","run FS.".concat(e," ").concat(r.map((function(e){return"string"==typeof e?e:"<".concat(e.length," bytes binary file>")})).join(" "))),null===u)throw O;var o=null;try{var a;o=(a=u.FS)[e].apply(a,r)}catch(t){throw"readdir"===e?Error("ffmpeg.FS('readdir', '".concat(r[0],"') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')")):"readFile"===e?Error("ffmpeg.FS('readFile', '".concat(r[0],"') error. Check if the path exists")):Error("Oops, something went wrong in FS operation.")}return o},A=function(e){F=e},T=function(e){g(e)};return h(r),g(o),v("info","use ffmpeg.wasm v".concat(E)),{setProgress:A,setLogger:T,setLogging:h,load:P,isLoaded:S,run:_,FS:R}}},137:(e,t,r)=>{r(760);var n=r(554),o=r(10).fetchFile;e.exports={createFFmpeg:n,fetchFile:o}},380:e=>{var t=!1,r=function(){};e.exports={logging:t,setLogging:function(e){t=e},setCustomLogger:function(e){r=e},log:function(e,n){r({type:e,message:n}),t&&console.log("[".concat(e,"] ").concat(n))}}},959:e=>{e.exports=function(e,t){var r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach((function(t,n){var o=e._malloc(t.length+1);e.writeAsciiToMemory(t,o),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*n,o,"i32")})),[t.length,r]}},683:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var r=0,n=function(e){var r,n,o=(r=e.split(":"),n=3,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,n)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1],c=o[2];return 60*parseFloat(a)*60+60*parseFloat(i)+parseFloat(c)};e.exports=function(e,t){if("string"==typeof e)if(e.startsWith("  Duration")){var o=e.split(", ")[0].split(": ")[1],a=n(o);(0===r||r>a)&&(r=a)}else if(e.startsWith("frame")||e.startsWith("size")){var i=e.split("time=")[1].split(" ")[0];t({ratio:n(i)/r})}else e.startsWith("video:")&&(t({ratio:1}),r=0)}},760:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){"use strict";var t,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n=p;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?h:m,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var p="suspendedStart",m="suspendedYield",d="executing",h="completed",g={};function v(){}function y(){}function b(){}var w={};u(w,i,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(_([])));j&&j!==r&&o.call(j,i)&&(w=j);var E=b.prototype=v.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function F(e,t){function r(a,i,c,s){var u=l(e[a],e,i);if("throw"!==u.type){var f=u.arg,p=f.value;return p&&"object"===n(p)&&o.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(p).then((function(e){f.value=e,c(f)}),(function(e){return r("throw",e,c,s)}))}s(u.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function _(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:t,done:!0}}return y.prototype=b,u(E,"constructor",b),u(b,"constructor",y),y.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},O(F.prototype),u(F.prototype,c,(function(){return this})),e.AsyncIterator=F,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new F(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(E),u(E,s,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}("object"===n(e=r.nmd(e))?e.exports:{});try{regeneratorRuntime=o}catch(e){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},927:function(e,t,r){var n,o;void 0===(o="function"==typeof(n=function(){return function(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var t=document.createElement("base");if(t.href=arguments[0],1===e)return t.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(t,r.firstChild);for(var n,o=document.createElement("a"),a=1;a<e;a++)o.href=arguments[a],n=o.href,t.href=n;return r.removeChild(t),n}})?n.call(t,r,t,e):n)||(e.exports=o)},681:e=>{"use strict";e.exports=JSON.parse('{"_from":"@ffmpeg/ffmpeg@0.9.7","_id":"@ffmpeg/ffmpeg@0.9.7","_inBundle":false,"_integrity":"sha512-WpZkNnqYGoaMcMd1EpaDi7nxRyEd05OjOTAfItH/ZwvAKJpr7ksvHKTC/NjP0li6mFrTFLGudP81J1tG0babdg==","_location":"/@ffmpeg/ffmpeg","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"@ffmpeg/ffmpeg@0.9.7","name":"@ffmpeg/ffmpeg","escapedName":"@ffmpeg%2fffmpeg","scope":"@ffmpeg","rawSpec":"0.9.7","saveSpec":null,"fetchSpec":"0.9.7"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/@ffmpeg/ffmpeg/-/ffmpeg-0.9.7.tgz","_shasum":"f309d689c59e35d345c049bf5e35f1ccde28c215","_spec":"@ffmpeg/ffmpeg@0.9.7","_where":"C:\\\\Users\\\\User\\\\Desktop\\\\wetube_ver2","author":{"name":"Jerome Wu","email":"jeromewus@gmail.com"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"bundleDependencies":false,"dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"deprecated":false,"description":"FFmpeg WebAssembly version","devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.8.5","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.2.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"},"directories":{"example":"examples"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","keywords":["ffmpeg","WebAssembly","video"],"license":"MIT","main":"src/index.js","name":"@ffmpeg/ffmpeg","repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"scripts":{"build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","lint":"eslint src","prepublishOnly":"npm run build","start":"node scripts/server.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js"},"types":"src/index.d.ts","version":"0.9.7"}')}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";var e=r(137);function t(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function n(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}}r(760);var o,a,i=document.getElementById("actionBtn"),c=document.getElementById("preview"),s="recording.webm",u="output.mp4",f="thumnail.jpg",l=function(e,t){var r=document.createElement("a");r.href=e,r.download=t,document.body.appendChild(r),r.click()},p=function(){var t=n(regeneratorRuntime.mark((function t(){var r,n,o,c,d,h,g;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.removeEventListener("click",p),i.innerText="Transcoding...",i.disabled=!0,r=(0,e.createFFmpeg)({log:!0}),t.next=6,r.load();case 6:return t.t0=r,t.t1=s,t.next=10,(0,e.fetchFile)(a);case 10:return t.t2=t.sent,t.t0.FS.call(t.t0,"writeFile",t.t1,t.t2),t.next=14,r.run("-i",s,"-r","60",u);case 14:return t.next=16,r.run("-i",s,"-ss","00:00:01","-frames:v","1",f);case 16:n=r.FS("readFile",f),o=r.FS("readFile",f),c=new Blob([n.buffer],{type:"video/mp4"}),d=new Blob([o.buffer],{type:"image/jpg"}),h=URL.createObjectURL(c),g=URL.createObjectURL(d),l(h,"MyRecording.mp4"),l(g,"MyThumbnail.jpg"),r.FS("unlink",s),r.FS("unlink",u),r.FS("unlink",f),URL.revokeObjectURL(h),URL.revokeObjectURL(a),URL.revokeObjectURL(g),i.disabled=!1,i.innerText="Record Again",i.addEventListener("click",m);case 33:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function e(){i.innerText="Recording",i.disabled=!0,i.removeEventListener("click",e);var t=new MdediaRecorder(o,{MimeType:"video/webm"});t.ondataavailable=function(e){a=URL.createObjectURL(e.data),c.srcObject=null,c.src=a,c.loop=!0,c.play(),i.innerText="Download",i.disabled=!1,i.addEventListener("click",p)},t.start(),setTimeout((function(){t.stop()}),5e3)};(function(){var e=n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!1,video:{width:1024,height:576}});case 2:o=e.sent,c.srcObject=o,c.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),startBtn.addEventListener("click",m)})()})();