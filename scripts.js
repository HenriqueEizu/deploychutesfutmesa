/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;/*!
 * jQuery Typeahead
 * Copyright (C) 2020 RunningCoder.org
 * Licensed under the MIT license
 *
 * @author Tom Bertrand
 * @version 2.11.1 (2020-5-18)
 * @link http://www.runningcoder.org/jquerytypeahead/
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define("jquery-typeahead", ["jquery"], function (jQuery) {
            return factory(jQuery);
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = (function (jQuery, root) {
            if (jQuery === undefined) {
                if (typeof window !== "undefined") {
                    jQuery = require("jquery");
                } else {
                    jQuery = require("jquery")(root);
                }
            }
            return factory(jQuery);
        })();
    } else {
        factory(jQuery);
    }
})(function ($) {
    "use strict";

    window.Typeahead = {
        version: '2.11.1'
    };

    /**
     * @private
     * Default options
     * @link http://www.runningcoder.org/jquerytypeahead/documentation/
     */
    var _options = {
        input: null,                // *RECOMMENDED*, jQuery selector to reach Typeahead's input for initialization
        minLength: 2,               // Accepts 0 to search on focus, minimum character length to perform a search
        maxLength: false,           // False as "Infinity" will not put character length restriction for searching results
        maxItem: 8,                 // Accepts 0 / false as "Infinity" meaning all the results will be displayed
        dynamic: false,             // When true, Typeahead will get a new dataset from the source option on every key press
        delay: 300,                 // delay in ms when dynamic option is set to true
        order: null,                // "asc" or "desc" to sort results
        offset: false,              // Set to true to match items starting from their first character
        hint: false,                // Added support for excessive "space" characters
        accent: false,              // Will allow to type accent and give letter equivalent results, also can define a custom replacement object
        highlight: true,            // Added "any" to highlight any word in the template, by default true will only highlight display keys
        multiselect: null,          // Multiselect configuration object, see documentation for all options
        group: false,               // Improved feature, Boolean,string,object(key, template (string, function))
        groupOrder: null,           // New feature, order groups "asc", "desc", Array, Function
        maxItemPerGroup: null,      // Maximum number of result per Group
        dropdownFilter: false,      // Take group options string and create a dropdown filter
        dynamicFilter: null,        // Filter the typeahead results based on dynamic value, Ex: Players based on TeamID
        backdrop: false,            // Add a backdrop behind Typeahead results
        backdropOnFocus: false,     // Display the backdrop option as the Typeahead input is :focused
        cache: false,               // Improved option, true OR 'localStorage' OR 'sessionStorage'
        ttl: 3600000,               // Cache time to live in ms
        compression: false,         // Requires LZString library
        searchOnFocus: false,       // Display search results on input focus
        blurOnTab: true,            // Blur Typeahead when Tab key is pressed, if false Tab will go though search results
        resultContainer: null,      // List the results inside any container string or jQuery object
        generateOnLoad: null,       // Forces the source to be generated on page load even if the input is not focused!
        mustSelectItem: false,      // The submit function only gets called if an item is selected
        href: null,                 // String or Function to format the url for right-click & open in new tab on link results
        display: ["display"],       // Allows search in multiple item keys ["display1", "display2"]
        template: null,             // Display template of each of the result list
        templateValue: null,        // Set the input value template when an item is clicked
        groupTemplate: null,        // Set a custom template for the groups
        correlativeTemplate: false, // Compile display keys, enables multiple key search from the template string
        emptyTemplate: false,       // Display an empty template if no result
        cancelButton: true,         // If text is detected in the input, a cancel button will be available to reset the input (pressing ESC also cancels)
        loadingAnimation: true,     // Display a loading animation when typeahead is doing request / searching for results
        asyncResult: false,         // If set to true, the search results will be displayed as they are beging received from the requests / async data function
        filter: true,               // Set to false or function to bypass Typeahead filtering. WARNING: accent, correlativeTemplate, offset & matcher will not be interpreted
        matcher: null,              // Add an extra filtering function after the typeahead functions
        source: null,               // Source of data for Typeahead to filter
        callback: {
            onInit: null,               // When Typeahead is first initialized (happens only once)
            onReady: null,              // When the Typeahead initial preparation is completed
            onShowLayout: null,         // Called when the layout is shown
            onHideLayout: null,         // Called when the layout is hidden
            onSearch: null,             // When data is being fetched & analyzed to give search results
            onResult: null,             // When the result container is displayed
            onLayoutBuiltBefore: null,  // When the result HTML is build, modify it before it get showed
            onLayoutBuiltAfter: null,   // Modify the dom right after the results gets inserted in the result container
            onNavigateBefore: null,     // When a key is pressed to navigate the results, before the navigation happens
            onNavigateAfter: null,      // When a key is pressed to navigate the results
            onEnter: null,              // When an item in the result list is focused
            onLeave: null,              // When an item in the result list is blurred
            onClickBefore: null,        // Possibility to e.preventDefault() to prevent the Typeahead behaviors
            onClickAfter: null,         // Happens after the default clicked behaviors has been executed
            onDropdownFilter: null,     // When the dropdownFilter is changed, trigger this callback
            onSendRequest: null,        // Gets called when the Ajax request(s) are sent
            onReceiveRequest: null,     // Gets called when the Ajax request(s) are all received
            onPopulateSource: null,     // Perform operation on the source data before it gets in Typeahead data
            onCacheSave: null,          // Perform operation on the source data before it gets in Typeahead cache
            onSubmit: null,             // When Typeahead form is submitted
            onCancel: null              // Triggered if the typeahead had text inside and is cleared
        },
        selector: {
            container: "typeahead__container",
            result: "typeahead__result",
            list: "typeahead__list",
            group: "typeahead__group",
            item: "typeahead__item",
            empty: "typeahead__empty",
            display: "typeahead__display",
            query: "typeahead__query",
            filter: "typeahead__filter",
            filterButton: "typeahead__filter-button",
            dropdown: "typeahead__dropdown",
            dropdownItem: "typeahead__dropdown-item",
            labelContainer: "typeahead__label-container",
            label: "typeahead__label",
            button: "typeahead__button",
            backdrop: "typeahead__backdrop",
            hint: "typeahead__hint",
            cancelButton: "typeahead__cancel-button"
        },
        debug: false // Display debug information (RECOMMENDED for dev environment)
    };

    /**
     * @private
     * Event namespace
     */
    var _namespace = ".typeahead";

    /**
     * @private
     * Accent equivalents
     */
    var _accent = {
        from: "ãàáäâẽèéëêìíïîõòóöôùúüûñç",
        to: "aaaaaeeeeeiiiiooooouuuunc"
    };

    /**
     * #62 IE9 doesn't trigger "input" event when text gets removed (backspace, ctrl+x, etc)
     * @private
     */
    var _isIE9 = ~window.navigator.appVersion.indexOf("MSIE 9.");

    /**
     * #193 Clicking on a suggested option does not select it on IE10/11
     * @private
     */
    var _isIE10 = ~window.navigator.appVersion.indexOf("MSIE 10");
    var _isIE11 = ~window.navigator.userAgent.indexOf("Trident")
        ? ~window.navigator.userAgent.indexOf("rv:11")
        : false;

    // SOURCE GROUP RESERVED WORDS: ajax, data, url
    // SOURCE ITEMS RESERVED KEYS: group, display, data, matchedKey, compiled, href

    /**
     * @constructor
     * Typeahead Class
     *
     * @param {object} node jQuery input object
     * @param {object} options User defined options
     */
    var Typeahead = function (node, options) {
        this.rawQuery = node.val() || "";   // Unmodified input query
        this.query = node.val() || "";      // Input query
        this.selector = node[0].selector;   // Typeahead instance selector (to reach from window.Typeahead[SELECTOR])
        this.deferred = null;               // Promise when "input" event in triggered, this.node.triggerHandler('input').then(() => {})
        this.tmpSource = {};                // Temp var to preserve the source order for the searchResult function
        this.source = {};                   // The generated source kept in memory
        this.dynamicGroups = [];            // Store the source groups that are defined as dynamic
        this.hasDynamicGroups = false;      // Boolean if at least one of the groups has a dynamic source
        this.generatedGroupCount = 0;       // Number of groups generated, if limit reached the search can be done
        this.groupBy = "group";             // This option will change according to filtering or custom grouping
        this.groups = [];                   // Array of all the available groups, used to build the groupTemplate
        this.searchGroups = [];             // Array of groups to generate when Typeahead searches data
        this.generateGroups = [];           // Array of groups to generate when Typeahead requests data
        this.requestGroups = [];            // Array of groups to request via Ajax
        this.result = [];                   // Results based on Source-query match (only contains the displayed elements)
        this.tmpResult = {};                // Temporary object of results, before they get passed to the buildLayout function
        this.groupTemplate = "";            // Result template at the {{group}} level
        this.resultHtml = null;             // HTML Results (displayed elements)
        this.resultCount = 0;               // Total results based on Source-query match
        this.resultCountPerGroup = {};      // Total results based on Source-query match per group
        this.options = options;             // Typeahead options (Merged default & user defined)
        this.node = node;                   // jQuery object of the Typeahead <input>
        this.namespace =
            "." +
            this.helper.slugify.call(this, this.selector) +
            _namespace;                     // Every Typeahead instance gets its own namespace for events
        this.isContentEditable = typeof this.node.attr('contenteditable') !== "undefined"
            && this.node.attr('contenteditable') !== "false";
        this.container = null;              // Typeahead container, usually right after <form>
        this.resultContainer = null;        // Typeahead result container (html)
        this.item = null;                   // Selected item
        this.items = null;                  // Multiselect selected items
        this.comparedItems = null;          // Multiselect items stored for comparison
        this.xhr = {};                      // Ajax request(s) stack
        this.hintIndex = null;              // Numeric value of the hint index in the result list
        this.filters = {                    // Filter list for searching, dropdown and dynamic(s)
            dropdown: {},                   // Dropdown menu if options.dropdownFilter is set
            dynamic: {}                     // Checkbox / Radio / Select to filter the source data
        };
        this.dropdownFilter = {
            static: [],                     // Objects that has a value
            dynamic: []
        };
        this.dropdownFilterAll = null;      // The last "all" definition
        this.isDropdownEvent = false;       // If a dropdownFilter is clicked, this will be true to trigger the callback

        this.requests = {};                 // Store the group:request instead of generating them every time

        this.backdrop = {};                 // The backdrop object
        this.hint = {};                     // The hint object
        this.label = {};                    // The label object
        this.hasDragged = false;            // Will cancel mouseend events if true
        this.focusOnly = false;             // Focus the input preventing any operations
        this.displayEmptyTemplate;          // Display the empty template in the result list

        this.__construct();
    };

    Typeahead.prototype = {
        _validateCacheMethod: function (cache) {
            var supportedCache = ["localStorage", "sessionStorage"],
                supported;

            if (cache === true) {
                cache = "localStorage";
            } else if (typeof cache === "string" && !~supportedCache.indexOf(cache)) {
                // {debug}
                if (this.options.debug) {
                    _debug.log({
                        node: this.selector,
                        function: "extendOptions()",
                        message: 'Invalid options.cache, possible options are "localStorage" or "sessionStorage"'
                    });

                    _debug.print();
                }
                // {/debug}
                return false;
            }

            supported = typeof window[cache] !== "undefined";

            try {
                window[cache].setItem("typeahead", "typeahead");
                window[cache].removeItem("typeahead");
            } catch (e) {
                supported = false;
            }

            return (supported && cache) || false;
        },

        extendOptions: function () {
            this.options.cache = this._validateCacheMethod(this.options.cache);

            if (this.options.compression) {
                if (typeof LZString !== "object" || !this.options.cache) {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.selector,
                            function: "extendOptions()",
                            message: "Missing LZString Library or options.cache, no compression will occur."
                        });

                        _debug.print();
                    }
                    // {/debug}
                    this.options.compression = false;
                }
            }

            if (!this.options.maxLength || isNaN(this.options.maxLength)) {
                this.options.maxLength = Infinity;
            }

            if (
                typeof this.options.maxItem !== "undefined" && ~[0, false].indexOf(this.options.maxItem)
            ) {
                this.options.maxItem = Infinity;
            }

            if (
                this.options.maxItemPerGroup && !/^\d+$/.test(this.options.maxItemPerGroup)
            ) {
                this.options.maxItemPerGroup = null;
            }

            if (this.options.display && !Array.isArray(this.options.display)) {
                this.options.display = [this.options.display];
            }

            if (this.options.multiselect) {
                this.items = [];
                this.comparedItems = [];
                if (typeof this.options.multiselect.matchOn === "string") {
                    this.options.multiselect.matchOn = [this.options.multiselect.matchOn];
                }
            }

            if (this.options.group) {
                if (!Array.isArray(this.options.group)) {
                    if (typeof this.options.group === "string") {
                        this.options.group = {
                            key: this.options.group
                        };
                    } else if (typeof this.options.group === "boolean") {
                        this.options.group = {
                            key: "group"
                        };
                    }

                    this.options.group.key = this.options.group.key || "group";
                } else {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.selector,
                            function: "extendOptions()",
                            message: "options.group must be a boolean|string|object as of 2.5.0"
                        });

                        _debug.print();
                    }
                    // {/debug}
                }
            }

            if (this.options.highlight && !~["any", true].indexOf(this.options.highlight)) {
                this.options.highlight = false;
            }

            if (
                this.options.dropdownFilter &&
                this.options.dropdownFilter instanceof Object
            ) {
                if (!Array.isArray(this.options.dropdownFilter)) {
                    this.options.dropdownFilter = [this.options.dropdownFilter];
                }
                for (var i = 0, ii = this.options.dropdownFilter.length; i < ii; ++i) {
                    this.dropdownFilter[
                        this.options.dropdownFilter[i].value ? "static" : "dynamic"
                        ].push(this.options.dropdownFilter[i]);
                }
            }

            if (this.options.dynamicFilter && !Array.isArray(this.options.dynamicFilter)) {
                this.options.dynamicFilter = [this.options.dynamicFilter];
            }

            if (this.options.accent) {
                if (typeof this.options.accent === "object") {
                    if (
                        this.options.accent.from &&
                        this.options.accent.to &&
                        this.options.accent.from.length !== this.options.accent.to.length
                    ) {
                        // {debug}
                        if (this.options.debug) {
                            _debug.log({
                                node: this.selector,
                                function: "extendOptions()",
                                message: 'Invalid "options.accent", from and to must be defined and same length.'
                            });

                            _debug.print();
                        }
                        // {/debug}
                    }

                } else {
                    this.options.accent = _accent;
                }
            }

            if (this.options.groupTemplate) {
                this.groupTemplate = this.options.groupTemplate;
            }

            if (this.options.resultContainer) {
                if (typeof this.options.resultContainer === "string") {
                    this.options.resultContainer = $(this.options.resultContainer);
                }

                if (
                    !(this.options.resultContainer instanceof $) || !this.options.resultContainer[0]
                ) {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.selector,
                            function: "extendOptions()",
                            message: 'Invalid jQuery selector or jQuery Object for "options.resultContainer".'
                        });

                        _debug.print();
                    }
                    // {/debug}
                } else {
                    this.resultContainer = this.options.resultContainer;
                }
            }

            if (
                this.options.group &&
                this.options.group.key
            ) {
                this.groupBy = this.options.group.key;
            }

            // Compatibility onClick callback
            if (this.options.callback && this.options.callback.onClick) {
                this.options.callback.onClickBefore = this.options.callback.onClick;
                delete this.options.callback.onClick;
            }

            // Compatibility onNavigate callback
            if (this.options.callback && this.options.callback.onNavigate) {
                this.options.callback.onNavigateBefore = this.options.callback.onNavigate;
                delete this.options.callback.onNavigate;
            }

            this.options = $.extend(true, {}, _options, this.options);
        },

        unifySourceFormat: function () {
            this.dynamicGroups = [];

            // source: ['item1', 'item2', 'item3']
            if (Array.isArray(this.options.source)) {
                this.options.source = {
                    group: {
                        data: this.options.source
                    }
                };
            }

            // source: "http://www.test.com/url.json"
            if (typeof this.options.source === "string") {
                this.options.source = {
                    group: {
                        ajax: {
                            url: this.options.source
                        }
                    }
                };
            }

            if (this.options.source.ajax) {
                this.options.source = {
                    group: {
                        ajax: this.options.source.ajax
                    }
                };
            }

            // source: {data: ['item1', 'item2'], url: "http://www.test.com/url.json"}
            if (this.options.source.url || this.options.source.data) {
                this.options.source = {
                    group: this.options.source
                };
            }

            var group, groupSource, tmpAjax;

            for (group in this.options.source) {
                if (!this.options.source.hasOwnProperty(group)) continue;

                groupSource = this.options.source[group];

                // source: {group: "http://www.test.com/url.json"}
                if (typeof groupSource === "string") {
                    groupSource = {
                        ajax: {
                            url: groupSource
                        }
                    };
                }

                // source: {group: {url: ["http://www.test.com/url.json", "json.path"]}}
                tmpAjax = groupSource.url || groupSource.ajax;
                if (Array.isArray(tmpAjax)) {
                    groupSource.ajax =
                        typeof tmpAjax[0] === "string"
                            ? {
                                url: tmpAjax[0]
                            }
                            : tmpAjax[0];
                    groupSource.ajax.path = groupSource.ajax.path || tmpAjax[1] || null;
                    delete groupSource.url;
                } else {
                    // source: {group: {url: {url: "http://www.test.com/url.json", method: "GET"}}}
                    // source: {group: {url: "http://www.test.com/url.json", dataType: "jsonp"}}
                    if (typeof groupSource.url === "object") {
                        groupSource.ajax = groupSource.url;
                    } else if (typeof groupSource.url === "string") {
                        groupSource.ajax = {
                            url: groupSource.url
                        };
                    }
                    delete groupSource.url;
                }

                if (!groupSource.data && !groupSource.ajax) {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.selector,
                            function: "unifySourceFormat()",
                            arguments: JSON.stringify(this.options.source),
                            message: 'Undefined "options.source.' +
                            group +
                            '.[data|ajax]" is Missing - Typeahead dropped'
                        });

                        _debug.print();
                    }
                    // {/debug}

                    return false;
                }

                if (groupSource.display && !Array.isArray(groupSource.display)) {
                    groupSource.display = [groupSource.display];
                }

                groupSource.minLength =
                    typeof groupSource.minLength === "number"
                        ? groupSource.minLength
                        : this.options.minLength;
                groupSource.maxLength =
                    typeof groupSource.maxLength === "number"
                        ? groupSource.maxLength
                        : this.options.maxLength;
                groupSource.dynamic =
                    typeof groupSource.dynamic === "boolean" || this.options.dynamic;

                if (groupSource.minLength > groupSource.maxLength) {
                    groupSource.minLength = groupSource.maxLength;
                }
                this.options.source[group] = groupSource;

                if (this.options.source[group].dynamic) {
                    this.dynamicGroups.push(group);
                }

                groupSource.cache =
                    typeof groupSource.cache !== "undefined"
                        ? this._validateCacheMethod(groupSource.cache)
                        : this.options.cache;

                if (groupSource.compression) {
                    if (typeof LZString !== "object" || !groupSource.cache) {
                        // {debug}
                        if (this.options.debug) {
                            _debug.log({
                                node: this.selector,
                                function: "unifySourceFormat()",
                                message: "Missing LZString Library or group.cache, no compression will occur on group: " +
                                group
                            });

                            _debug.print();
                        }
                        // {/debug}
                        groupSource.compression = false;
                    }
                }
            }

            this.hasDynamicGroups =
                this.options.dynamic || !!this.dynamicGroups.length;

            return true;
        },

        init: function () {
            this.helper.executeCallback.call(this, this.options.callback.onInit, [
                this.node
            ]);

            this.container = this.node.closest("." + this.options.selector.container);

            // {debug}
            if (this.options.debug) {
                _debug.log({
                    node: this.selector,
                    function: "init()",
                    //'arguments': JSON.stringify(this.options),
                    message: "OK - Typeahead activated on " + this.selector
                });

                _debug.print();
            }
            // {/debug}
        },

        delegateEvents: function () {
            var scope = this,
                events = [
                    "focus" + this.namespace,
                    "input" + this.namespace,
                    "propertychange" + this.namespace, // IE8 Fix
                    "keydown" + this.namespace,
                    "keyup" + this.namespace, // IE9 Fix
                    "search" + this.namespace,
                    "generate" + this.namespace
                ];

            // #149 - Adding support for Mobiles
            $("html")
                .on("touchmove", function () {
                    scope.hasDragged = true;
                })
                .on("touchstart", function () {
                    scope.hasDragged = false;
                });

            this.node
                .closest("form")
                .on("submit", function (e) {
                    if (
                        scope.options.mustSelectItem &&
                        scope.helper.isEmpty(scope.item)
                    ) {
                        e.preventDefault();
                        return;
                    }

                    if (!scope.options.backdropOnFocus) {
                        scope.hideLayout();
                    }

                    if (scope.options.callback.onSubmit) {
                        return scope.helper.executeCallback.call(
                            scope,
                            scope.options.callback.onSubmit,
                            [scope.node, this, scope.item || scope.items, e]
                        );
                    }
                })
                .on("reset", function () {
                    // #221 - Reset Typeahead on form reset.
                    // setTimeout to re-queue the `input.typeahead` event at the end
                    setTimeout(function () {
                        scope.node.trigger("input" + scope.namespace);
                        // #243 - minLength: 0 opens the Typeahead results
                        scope.hideLayout();
                    });
                });

            // IE8 fix
            var preventNextEvent = false;

            // IE10/11 fix
            if (this.node.attr("placeholder") && (_isIE10 || _isIE11)) {
                var preventInputEvent = true;

                this.node.on("focusin focusout", function () {
                    preventInputEvent = !!(!this.value && this.placeholder);
                });

                this.node.on("input", function (e) {
                    if (preventInputEvent) {
                        e.stopImmediatePropagation();
                        preventInputEvent = false;
                    }
                });
            }

            this.node
                .off(this.namespace)
                .on(events.join(" "), function (e, data) {
                    switch (e.type) {
                        case "generate":
                            scope.generateSource(Object.keys(scope.options.source));
                            break;
                        case "focus":
                            if (scope.focusOnly) {
                                scope.focusOnly = false;
                                break;
                            }
                            if (scope.options.backdropOnFocus) {
                                scope.buildBackdropLayout();
                                scope.showLayout();
                            }
                            if (scope.options.searchOnFocus && !scope.item) {
                                scope.deferred = $.Deferred();
                                scope.assignQuery();
                                scope.generateSource();
                            }
                            break;
                        case "keydown":
                            if (e.keyCode === 8
                                && scope.options.multiselect
                                && scope.options.multiselect.cancelOnBackspace
                                && scope.query === ''
                                && scope.items.length
                            ) {
                                scope.cancelMultiselectItem(scope.items.length - 1, null, e);
                            } else if (e.keyCode && ~[9, 13, 27, 38, 39, 40].indexOf(e.keyCode)) {
                                preventNextEvent = true;
                                scope.navigate(e);
                            }
                            break;
                        case "keyup":
                            if (
                                _isIE9 &&
                                scope.node[0].value.replace(/^\s+/, "").toString().length <
                                scope.query.length
                            ) {
                                scope.node.trigger("input" + scope.namespace);
                            }
                            break;
                        case "propertychange":
                            if (preventNextEvent) {
                                preventNextEvent = false;
                                break;
                            }
                        case "input":
                            scope.deferred = $.Deferred();
                            scope.assignQuery();

                            // #195 Trigger an onCancel event if the Typeahead is cleared
                            if (scope.rawQuery === "" && scope.query === "") {
                                e.originalEvent = data || {};
                                scope.helper.executeCallback.call(
                                    scope,
                                    scope.options.callback.onCancel,
                                    [scope.node, scope.item, e]
                                );
                                scope.item = null;
                            }

                            scope.options.cancelButton &&
                            scope.toggleCancelButtonVisibility();

                            if (
                                scope.options.hint &&
                                scope.hint.container &&
                                scope.hint.container.val() !== ""
                            ) {
                                if (scope.hint.container.val().indexOf(scope.rawQuery) !== 0) {
                                    scope.hint.container.val("");
                                    if (scope.isContentEditable) {
                                        scope.hint.container.text("");
                                    }
                                }
                            }

                            if (scope.hasDynamicGroups) {
                                scope.helper.typeWatch(function () {
                                    scope.generateSource();
                                }, scope.options.delay);
                            } else {
                                scope.generateSource();
                            }
                            break;
                        case "search":
                            scope.searchResult();
                            scope.buildLayout();

                            if (scope.result.length ||
                                (scope.searchGroups.length &&
                                scope.displayEmptyTemplate)
                            ) {
                                scope.showLayout();
                            } else {
                                scope.hideLayout();
                            }

                            scope.deferred && scope.deferred.resolve();
                            break;
                    }

                    return scope.deferred && scope.deferred.promise();
                });

            if (this.options.generateOnLoad) {
                this.node.trigger("generate" + this.namespace);
            }
        },

        assignQuery: function () {
            if (this.isContentEditable) {
                this.rawQuery = this.node.text();
            } else {
                this.rawQuery = this.node.val().toString();
            }
            this.rawQuery = this.rawQuery.replace(/^\s+/, "");

            if (this.rawQuery !== this.query) {
                this.query = this.rawQuery;
            }
        },

        filterGenerateSource: function () {
            this.searchGroups = [];
            this.generateGroups = [];

            if (this.focusOnly && !this.options.multiselect) return;

            for (var group in this.options.source) {
                if (!this.options.source.hasOwnProperty(group)) continue;
                if (
                    this.query.length >= this.options.source[group].minLength &&
                    this.query.length <= this.options.source[group].maxLength
                ) {
                    if (
                        this.filters.dropdown &&
                        this.filters.dropdown.key === 'group' &&
                        this.filters.dropdown.value !== group
                    ) {
                        continue;
                    }

                    this.searchGroups.push(group);
                    if (!this.options.source[group].dynamic && this.source[group]) {
                        continue;
                    }
                    this.generateGroups.push(group);
                }
            }
        },

        generateSource: function (generateGroups) {
            this.filterGenerateSource();

            this.generatedGroupCount = 0;

            if (Array.isArray(generateGroups) && generateGroups.length) {
                this.generateGroups = generateGroups;
            } else if (!this.generateGroups.length) {
                this.node.trigger("search" + this.namespace);
                return;
            }

            this.requestGroups = [];
            this.options.loadingAnimation && this.container.addClass("loading");

            if (!this.helper.isEmpty(this.xhr)) {
                for (var i in this.xhr) {
                    if (!this.xhr.hasOwnProperty(i)) continue;
                    this.xhr[i].abort();
                }
                this.xhr = {};
            }

            var scope = this,
                group,
                groupData,
                groupSource,
                cache,
                compression,
                dataInStorage,
                isValidStorage;

            for (var i = 0, ii = this.generateGroups.length; i < ii; ++i) {
                group = this.generateGroups[i];
                groupSource = this.options.source[group];
                cache = groupSource.cache;
                compression = groupSource.compression;

                if (this.options.asyncResult) {
                    delete this.source[group];
                }

                if (cache) {
                    dataInStorage = window[cache].getItem(
                        "TYPEAHEAD_" + this.selector + ":" + group
                    );
                    if (dataInStorage) {
                        if (compression) {
                            dataInStorage = LZString.decompressFromUTF16(dataInStorage);
                        }

                        isValidStorage = false;
                        try {
                            dataInStorage = JSON.parse(dataInStorage + "");

                            if (
                                dataInStorage.data &&
                                dataInStorage.ttl > new Date().getTime()
                            ) {
                                this.populateSource(dataInStorage.data, group);
                                isValidStorage = true;

                                // {debug}
                                if (this.options.debug) {
                                    _debug.log({
                                        node: this.selector,
                                        function: "generateSource()",
                                        message: 'Source for group "' + group + '" found in ' + cache
                                    });
                                    _debug.print();
                                }
                                // {/debug}
                            } else {
                                window[cache].removeItem(
                                    "TYPEAHEAD_" + this.selector + ":" + group
                                );
                            }
                        } catch (error) {
                        }

                        if (isValidStorage) continue;
                    }
                }

                if (groupSource.data && !groupSource.ajax) {
                    // #198 Add support for async data source
                    if (typeof groupSource.data === "function") {
                        groupData = groupSource.data.call(this);
                        if (Array.isArray(groupData)) {
                            scope.populateSource(groupData, group);
                        } else if (typeof groupData.promise === "function") {
                            (function (group) {
                                $.when(groupData).then(function (deferredData) {
                                    if (deferredData && Array.isArray(deferredData)) {
                                        scope.populateSource(deferredData, group);
                                    }
                                });
                            })(group);
                        }
                    } else {
                        this.populateSource($.extend(true, [], groupSource.data), group);
                    }
                    continue;
                }

                if (groupSource.ajax) {
                    if (!this.requests[group]) {
                        this.requests[group] = this.generateRequestObject(group);
                    }
                    this.requestGroups.push(group);
                }
            }

            if (this.requestGroups.length) {
                this.handleRequests();
            }

            if (this.options.asyncResult && this.searchGroups.length !== this.generateGroups) {
                this.node.trigger("search" + this.namespace);
            }

            return !!this.generateGroups.length;
        },

        generateRequestObject: function (group) {
            var scope = this,
                groupSource = this.options.source[group];

            var xhrObject = {
                request: {
                    url: groupSource.ajax.url || null,
                    dataType: "json",
                    beforeSend: function (jqXHR, options) {
                        // Important to call .abort() in case of dynamic requests
                        scope.xhr[group] = jqXHR;

                        var beforeSend =
                            scope.requests[group].callback.beforeSend ||
                            groupSource.ajax.beforeSend;
                        typeof beforeSend === "function" &&
                        beforeSend.apply(null, arguments);
                    }
                },
                callback: {
                    beforeSend: null,
                    done: null,
                    fail: null,
                    then: null,
                    always: null
                },
                extra: {
                    path: groupSource.ajax.path || null,
                    group: group
                },
                validForGroup: [group]
            };

            if (typeof groupSource.ajax !== "function") {
                if (groupSource.ajax instanceof Object) {
                    xhrObject = this.extendXhrObject(xhrObject, groupSource.ajax);
                }

                if (Object.keys(this.options.source).length > 1) {
                    for (var _group in this.requests) {
                        if (!this.requests.hasOwnProperty(_group)) continue;
                        if (this.requests[_group].isDuplicated) continue;

                        if (
                            xhrObject.request.url &&
                            xhrObject.request.url === this.requests[_group].request.url
                        ) {
                            this.requests[_group].validForGroup.push(group);
                            xhrObject.isDuplicated = true;
                            delete xhrObject.validForGroup;
                        }
                    }
                }
            }

            return xhrObject;
        },

        extendXhrObject: function (xhrObject, groupRequest) {
            if (typeof groupRequest.callback === "object") {
                xhrObject.callback = groupRequest.callback;
                delete groupRequest.callback;
            }

            // #132 Fixed beforeSend when using a function as the request object
            if (typeof groupRequest.beforeSend === "function") {
                xhrObject.callback.beforeSend = groupRequest.beforeSend;
                delete groupRequest.beforeSend;
            }

            // Fixes #105 Allow user to define their beforeSend function.
            // Fixes #181 IE8 incompatibility
            xhrObject.request = $.extend(true, xhrObject.request, groupRequest);

            // JSONP needs a unique jsonpCallback to run concurrently
            if (
                xhrObject.request.dataType.toLowerCase() === "jsonp" && !xhrObject.request.jsonpCallback
            ) {
                xhrObject.request.jsonpCallback = "callback_" + xhrObject.extra.group;
            }

            return xhrObject;
        },

        handleRequests: function () {
            var scope = this,
                group,
                requestsCount = this.requestGroups.length;

            if (
                this.helper.executeCallback.call(
                    this,
                    this.options.callback.onSendRequest,
                    [this.node, this.query]
                ) === false
            ) {
                return;
            }

            for (var i = 0, ii = this.requestGroups.length; i < ii; ++i) {
                group = this.requestGroups[i];
                if (this.requests[group].isDuplicated) continue;

                (function (group, xhrObject) {
                    if (typeof scope.options.source[group].ajax === "function") {
                        var _groupRequest = scope.options.source[group].ajax.call(
                            scope,
                            scope.query
                        );

                        // Fixes #271 Data is cached inside the xhrObject
                        xhrObject = scope.extendXhrObject(
                            scope.generateRequestObject(group),
                            typeof _groupRequest === "object" ? _groupRequest : {}
                        );

                        if (
                            typeof xhrObject.request !== "object" || !xhrObject.request.url
                        ) {
                            // {debug}
                            if (scope.options.debug) {
                                _debug.log({
                                    node: scope.selector,
                                    function: "handleRequests",
                                    message: 'Source function must return an object containing ".url" key for group "' +
                                    group +
                                    '"'
                                });
                                _debug.print();
                            }
                            // {/debug}
                            scope.populateSource([], group);
                            return;
                        }
                        scope.requests[group] = xhrObject;
                    }

                    var _request,
                        _isExtended = false, // Prevent the main request from being changed
                        _groupData = {};

                    if (~xhrObject.request.url.indexOf("{{query}}")) {
                        if (!_isExtended) {
                            xhrObject = $.extend(true, {}, xhrObject);
                            _isExtended = true;
                        }
                        // #184 Invalid encoded characters on dynamic requests for `{{query}}`
                        xhrObject.request.url = xhrObject.request.url.replace(
                            "{{query}}",
                            encodeURIComponent(scope.query)
                        );
                    }

                    if (xhrObject.request.data) {
                        for (var i in xhrObject.request.data) {
                            if (!xhrObject.request.data.hasOwnProperty(i)) continue;
                            if (~String(xhrObject.request.data[i]).indexOf("{{query}}")) {
                                if (!_isExtended) {
                                    xhrObject = $.extend(true, {}, xhrObject);
                                    _isExtended = true;
                                }
                                // jQuery handles encodeURIComponent when the query is inside the data object
                                xhrObject.request.data[i] = xhrObject.request.data[i].replace(
                                    "{{query}}",
                                    scope.query
                                );
                                break;
                            }
                        }
                    }

                    $.ajax(xhrObject.request)
                        .done(function (data, textStatus, jqXHR) {
                            var _group;

                            for (
                                var i = 0, ii = xhrObject.validForGroup.length;
                                i < ii;
                                i++
                            ) {
                                _group = xhrObject.validForGroup[i];
                                _request = scope.requests[_group];

                                if (typeof _request.callback.done === 'function') {
                                    _groupData[_group] = _request.callback.done.call(
                                        scope,
                                        data,
                                        textStatus,
                                        jqXHR
                                    );

                                    // {debug}
                                    if (
                                        !Array.isArray(_groupData[_group]) ||
                                        typeof _groupData[_group] !== "object"
                                    ) {
                                        if (scope.options.debug) {
                                            _debug.log({
                                                node: scope.selector,
                                                function: "Ajax.callback.done()",
                                                message: "Invalid returned data has to be an Array"
                                            });
                                            _debug.print();
                                        }
                                    }
                                    // {/debug}
                                }
                            }
                        })
                        .fail(function (jqXHR, textStatus, errorThrown) {
                            for (
                                var i = 0, ii = xhrObject.validForGroup.length;
                                i < ii;
                                i++
                            ) {
                                _request = scope.requests[xhrObject.validForGroup[i]];
                                _request.callback.fail instanceof Function &&
                                _request.callback.fail.call(
                                    scope,
                                    jqXHR,
                                    textStatus,
                                    errorThrown
                                );
                            }

                            // {debug}
                            if (scope.options.debug) {
                                _debug.log({
                                    node: scope.selector,
                                    function: "Ajax.callback.fail()",
                                    arguments: JSON.stringify(xhrObject.request),
                                    message: textStatus
                                });

                                console.log(errorThrown);

                                _debug.print();
                            }
                            // {/debug}
                        })
                        .always(function (data, textStatus, jqXHR) {
                            var _group;
                            for (
                                var i = 0, ii = xhrObject.validForGroup.length;
                                i < ii;
                                i++
                            ) {
                                _group = xhrObject.validForGroup[i];
                                _request = scope.requests[_group];
                                _request.callback.always instanceof Function &&
                                _request.callback.always.call(scope, data, textStatus, jqXHR);

                                // #248, #303 Aborted requests would call populate with invalid data
                                if (textStatus === 'abort') return;

                                // #265 Modified data from ajax.callback.done is not being registered (use of _groupData[_group])
                                scope.populateSource(
                                    (data !== null && typeof data.promise === "function" && []) ||
                                    _groupData[_group] ||
                                    data,
                                    _request.extra.group,
                                    _request.extra.path || _request.request.path
                                );

                                requestsCount -= 1;
                                if (requestsCount === 0) {
                                    scope.helper.executeCallback.call(
                                        scope,
                                        scope.options.callback.onReceiveRequest,
                                        [scope.node, scope.query]
                                    );
                                }
                            }
                        })
                        .then(function (jqXHR, textStatus) {
                            for (
                                var i = 0, ii = xhrObject.validForGroup.length;
                                i < ii;
                                i++
                            ) {
                                _request = scope.requests[xhrObject.validForGroup[i]];
                                _request.callback.then instanceof Function &&
                                _request.callback.then.call(scope, jqXHR, textStatus);
                            }
                        });
                })(group, this.requests[group]);
            }
        },

        /**
         * Build the source groups to be cycled for matched results
         *
         * @param {Array} data Array of Strings or Array of Objects
         * @param {String} group
         * @param {String} [path]
         * @return {*}
         */
        populateSource: function (data, group, path) {
            var scope = this,
                groupSource = this.options.source[group],
                extraData = groupSource.ajax && groupSource.data;

            if (path && typeof path === "string") {
                data = this.helper.namespace.call(this, path, data);
            }

            if (typeof data === "undefined") {
                // {debug}
                if (this.options.debug) {
                    _debug.log({
                        node: this.selector,
                        function: "populateSource()",
                        arguments: path,
                        message: "Invalid data path."
                    });

                    _debug.print();
                }
                // {/debug}
            }

            if (!Array.isArray(data)) {
                // {debug}
                if (this.options.debug) {
                    _debug.log({
                        node: this.selector,
                        function: "populateSource()",
                        arguments: JSON.stringify({group: group}),
                        message: "Invalid data type, must be Array type."
                    });
                    _debug.print();
                }
                // {/debug}
                data = [];
            }

            if (extraData) {
                if (typeof extraData === "function") {
                    extraData = extraData();
                }

                if (Array.isArray(extraData)) {
                    data = data.concat(extraData);
                } else {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.selector,
                            function: "populateSource()",
                            arguments: JSON.stringify(extraData),
                            message: "WARNING - this.options.source." +
                            group +
                            ".data Must be an Array or a function that returns an Array."
                        });

                        _debug.print();
                    }
                    // {/debug}
                }
            }

            var tmpObj,
                display = groupSource.display
                    ? groupSource.display[0] === "compiled"
                        ? groupSource.display[1]
                        : groupSource.display[0]
                    : this.options.display[0] === "compiled"
                        ? this.options.display[1]
                        : this.options.display[0];

            for (var i = 0, ii = data.length; i < ii; i++) {
                if (data[i] === null || typeof data[i] === "boolean") {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.selector,
                            function: "populateSource()",
                            message: "WARNING - NULL/BOOLEAN value inside " +
                            group +
                            "! The data was skipped."
                        });

                        _debug.print();
                    }
                    // {/debug}
                    continue;
                }
                if (typeof data[i] === "string") {
                    tmpObj = {};
                    tmpObj[display] = data[i];
                    data[i] = tmpObj;
                }
                data[i].group = group;
            }

            if (!this.hasDynamicGroups && this.dropdownFilter.dynamic.length) {
                var key,
                    value,
                    tmpValues = {};

                for (var i = 0, ii = data.length; i < ii; i++) {
                    for (
                        var k = 0, kk = this.dropdownFilter.dynamic.length;
                        k < kk;
                        k++
                    ) {
                        key = this.dropdownFilter.dynamic[k].key;

                        value = data[i][key];
                        if (!value) continue;
                        if (!this.dropdownFilter.dynamic[k].value) {
                            this.dropdownFilter.dynamic[k].value = [];
                        }
                        if (!tmpValues[key]) {
                            tmpValues[key] = [];
                        }
                        if (!~tmpValues[key].indexOf(value.toLowerCase())) {
                            tmpValues[key].push(value.toLowerCase());
                            this.dropdownFilter.dynamic[k].value.push(value);
                        }
                    }
                }
            }

            if (this.options.correlativeTemplate) {
                var template = groupSource.template || this.options.template,
                    compiledTemplate = "";

                if (typeof template === "function") {
                    template = template.call(this, "", {});
                }

                if (!template) {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.selector,
                            function: "populateSource()",
                            arguments: String(group),
                            message: "WARNING - this.options.correlativeTemplate is enabled but no template was found."
                        });

                        _debug.print();
                    }
                    // {/debug}
                } else {
                    // #109 correlativeTemplate can be an array of display keys instead of the complete template
                    if (Array.isArray(this.options.correlativeTemplate)) {
                        for (
                            var i = 0, ii = this.options.correlativeTemplate.length;
                            i < ii;
                            i++
                        ) {
                            compiledTemplate +=
                                "{{" + this.options.correlativeTemplate[i] + "}} ";
                        }
                    } else {
                        // Strip down the html tags, #351 if the template needs "<>" use html entities instead &#60;{{email}}&#62;
                        compiledTemplate = template
                            .replace(/<.+?>/g, " ")
                            .replace(/\s{2,}/, " ")
                            .trim();
                    }

                    for (var i = 0, ii = data.length; i < ii; i++) {
                        // Fix #351, convert htmlEntities from the template string
                        data[i].compiled = $("<textarea />")
                            .html(
                                compiledTemplate
                                    .replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g, function (match,
                                                                                         index) {
                                        return scope.helper.namespace.call(
                                            scope,
                                            index,
                                            data[i],
                                            "get",
                                            ""
                                        );
                                    })
                                    .trim()
                            )
                            .text();
                    }

                    if (groupSource.display) {
                        if (!~groupSource.display.indexOf("compiled")) {
                            groupSource.display.unshift("compiled");
                        }
                    } else if (!~this.options.display.indexOf("compiled")) {
                        this.options.display.unshift("compiled");
                    }
                }
            }

            if (this.options.callback.onPopulateSource) {
                data = this.helper.executeCallback.call(
                    this,
                    this.options.callback.onPopulateSource,
                    [this.node, data, group, path]
                );

                // {debug}
                if (this.options.debug) {
                    if (!data || !Array.isArray(data)) {
                        _debug.log({
                            node: this.selector,
                            function: "callback.populateSource()",
                            message: 'callback.onPopulateSource must return the "data" parameter'
                        });

                        _debug.print();
                    }
                }
                // {/debug}
            }

            // Save the data inside tmpSource to re-order once every requests are completed
            this.tmpSource[group] = (Array.isArray(data) && data) || [];

            var cache = this.options.source[group].cache,
                compression = this.options.source[group].compression,
                ttl = this.options.source[group].ttl || this.options.ttl;

            if (
                cache && !window[cache].getItem("TYPEAHEAD_" + this.selector + ":" + group)
            ) {
                if (this.options.callback.onCacheSave) {
                    data = this.helper.executeCallback.call(
                        this,
                        this.options.callback.onCacheSave,
                        [this.node, data, group, path]
                    );

                    // {debug}
                    if (this.options.debug) {
                        if (!data || !Array.isArray(data)) {
                            _debug.log({
                                node: this.selector,
                                function: "callback.populateSource()",
                                message: 'callback.onCacheSave must return the "data" parameter'
                            });

                            _debug.print();
                        }
                    }
                    // {/debug}
                }

                var storage = JSON.stringify({
                    data: data,
                    ttl: new Date().getTime() + ttl
                });

                if (compression) {
                    storage = LZString.compressToUTF16(storage);
                }

                window[cache].setItem(
                    "TYPEAHEAD_" + this.selector + ":" + group,
                    storage
                );
            }

            this.incrementGeneratedGroup(group);
        },

        incrementGeneratedGroup: function (group) {
            this.generatedGroupCount++;
            if (this.generatedGroupCount !== this.generateGroups.length && !this.options.asyncResult) {
                return;
            }

            if (this.xhr && this.xhr[group]) {
                delete this.xhr[group];
            }

            for (var i = 0, ii = this.generateGroups.length; i < ii; i++) {
                this.source[this.generateGroups[i]] = this.tmpSource[
                    this.generateGroups[i]
                ];
            }

            if (!this.hasDynamicGroups) {
                this.buildDropdownItemLayout("dynamic");
            }

            if (this.generatedGroupCount === this.generateGroups.length) {
                this.xhr = {};
                this.options.loadingAnimation && this.container.removeClass("loading");
            }
            this.node.trigger("search" + this.namespace);
        },

        /**
         * Key Navigation
         * tab 9: if option is enabled, blur Typeahead
         * Up 38: select previous item, skip "group" item
         * Down 40: select next item, skip "group" item
         * Right 39: change charAt, if last char fill hint (if options is true)
         * Esc 27: clears input (is not empty) / blur (if empty)
         * Enter 13: Select item + submit search
         *
         * @param {Object} e Event object
         * @returns {*}
         */
        navigate: function (e) {
            this.helper.executeCallback.call(
                this,
                this.options.callback.onNavigateBefore,
                [this.node, this.query, e]
            );

            if (e.keyCode === 27) {
                // #166 Different browsers do not have the same behaviors by default, lets enforce what we want instead
                e.preventDefault();
                if (this.query.length) {
                    this.resetInput();
                    this.node.trigger("input" + this.namespace, [e]);
                } else {
                    this.node.blur();
                    this.hideLayout();
                }
                return;
            }

            if (!this.result.length) return;

            var itemList = this.resultContainer
                    .find("." + this.options.selector.item)
                    .not("[disabled]"),
                activeItem = itemList.filter(".active"),
                activeItemIndex = activeItem[0] ? itemList.index(activeItem) : null,
                activeDataIndex = activeItem[0] ? activeItem.attr("data-index") : null,
                newActiveItemIndex = null,
                newActiveDataIndex = null;

            this.clearActiveItem();

            this.helper.executeCallback.call(this, this.options.callback.onLeave, [
                this.node,
                (activeItemIndex !== null && itemList.eq(activeItemIndex)) || undefined,
                (activeDataIndex !== null && this.result[activeDataIndex]) || undefined,
                e
            ]);

            if (e.keyCode === 13) {
                // Chrome needs preventDefault else the input search event is triggered
                e.preventDefault();
                if (activeItem.length > 0) {
                    // #311 When href is defined and "enter" is pressed, it needs to act as a "clicked" link
                    if (activeItem.find("a:first")[0].href === "javascript:;") {
                        activeItem.find("a:first").trigger("click", e);
                    } else {
                        activeItem.find("a:first")[0].click();
                    }
                } else {
                    this.node
                        .closest("form")
                        .trigger("submit");
                }
                return;
            }

            if (e.keyCode === 39) {
                if (activeItemIndex !== null) {
                    itemList
                        .eq(activeItemIndex)
                        .find("a:first")[0]
                        .click();
                } else if (
                    this.options.hint &&
                    this.hint.container.val() !== "" &&
                    this.helper.getCaret(this.node[0]) >= this.query.length
                ) {
                    itemList
                        .filter('[data-index="' + this.hintIndex + '"]')
                        .find("a:first")[0]
                        .click();
                }
                return;
            }

            // #284 Blur Typeahead when "Tab" key is pressed
            // #326 Improve Up / Down / Tab navigation to have only 1 "selected" item
            if (e.keyCode === 9) {
                if (this.options.blurOnTab) {
                    this.hideLayout();
                } else {
                    if (activeItem.length > 0) {
                        if (activeItemIndex + 1 < itemList.length) {
                            e.preventDefault();
                            newActiveItemIndex = activeItemIndex + 1;
                            this.addActiveItem(itemList.eq(newActiveItemIndex));
                        } else {
                            this.hideLayout();
                        }
                    } else {
                        if (itemList.length) {
                            e.preventDefault();
                            newActiveItemIndex = 0;
                            this.addActiveItem(itemList.first());
                        } else {
                            this.hideLayout();
                        }
                    }
                }
            } else if (e.keyCode === 38) {
                e.preventDefault();

                if (activeItem.length > 0) {
                    if (activeItemIndex - 1 >= 0) {
                        newActiveItemIndex = activeItemIndex - 1;
                        this.addActiveItem(itemList.eq(newActiveItemIndex));
                    }
                } else if (itemList.length) {
                    newActiveItemIndex = itemList.length - 1;
                    this.addActiveItem(itemList.last());
                }
            } else if (e.keyCode === 40) {
                e.preventDefault();

                if (activeItem.length > 0) {
                    if (activeItemIndex + 1 < itemList.length) {
                        newActiveItemIndex = activeItemIndex + 1;
                        this.addActiveItem(itemList.eq(newActiveItemIndex));
                    }
                } else if (itemList.length) {
                    newActiveItemIndex = 0;
                    this.addActiveItem(itemList.first());
                }
            }

            newActiveDataIndex =
                newActiveItemIndex !== null
                    ? itemList.eq(newActiveItemIndex).attr("data-index")
                    : null;

            this.helper.executeCallback.call(this, this.options.callback.onEnter, [
                this.node,
                (newActiveItemIndex !== null && itemList.eq(newActiveItemIndex)) ||
                undefined,
                (newActiveDataIndex !== null && this.result[newActiveDataIndex]) ||
                undefined,
                e
            ]);

            // #115 Prevent the input from changing when navigating (arrow up / down) the results
            if (e.preventInputChange && ~[38, 40].indexOf(e.keyCode)) {
                this.buildHintLayout(
                    newActiveDataIndex !== null && newActiveDataIndex < this.result.length
                        ? [this.result[newActiveDataIndex]]
                        : null
                );
            }

            if (this.options.hint && this.hint.container) {
                this.hint.container.css(
                    "color",
                    e.preventInputChange
                        ? this.hint.css.color
                        : (newActiveDataIndex === null && this.hint.css.color) ||
                        this.hint.container.css("background-color") ||
                        "fff"
                );
            }

            var nodeValue =
                newActiveDataIndex === null || e.preventInputChange
                    ? this.rawQuery
                    : this.getTemplateValue.call(this, this.result[newActiveDataIndex]);

            this.node.val(nodeValue);
            if (this.isContentEditable) {
                this.node.text(nodeValue);
            }

            this.helper.executeCallback.call(
                this,
                this.options.callback.onNavigateAfter,
                [
                    this.node,
                    itemList,
                    (newActiveItemIndex !== null &&
                    itemList.eq(newActiveItemIndex).find("a:first")) ||
                    undefined,
                    (newActiveDataIndex !== null && this.result[newActiveDataIndex]) ||
                    undefined,
                    this.query,
                    e
                ]
            );
        },

        getTemplateValue: function (item) {
            if (!item) return;
            var templateValue =
                (item.group && this.options.source[item.group].templateValue) ||
                this.options.templateValue;
            if (typeof templateValue === "function") {
                templateValue = templateValue.call(this);
            }
            if (!templateValue) {
                return this.helper.namespace
                    .call(this, item.matchedKey, item)
                    .toString();
            }
            var scope = this;

            return templateValue.replace(/\{\{([\w\-.]+)}}/gi, function (match, index) {
                return scope.helper.namespace.call(scope, index, item, "get", "");
            });
        },

        clearActiveItem: function () {
            this.resultContainer
                .find("." + this.options.selector.item)
                .removeClass("active");
        },

        addActiveItem: function (item) {
            item.addClass("active");
        },

        searchResult: function () {
            this.resetLayout();

            if (
                this.helper.executeCallback.call(this, this.options.callback.onSearch, [
                    this.node,
                    this.query
                ]) === false
            ) return;

            if (
                this.searchGroups.length && !(
                    this.options.multiselect &&
                    this.options.multiselect.limit &&
                    this.items.length >= this.options.multiselect.limit
                )
            ) {
                this.searchResultData();
            }

            this.helper.executeCallback.call(this, this.options.callback.onResult, [
                this.node,
                this.query,
                this.result,
                this.resultCount,
                this.resultCountPerGroup
            ]);

            if (this.isDropdownEvent) {
                this.helper.executeCallback.call(
                    this,
                    this.options.callback.onDropdownFilter,
                    [this.node, this.query, this.filters.dropdown, this.result]
                );
                this.isDropdownEvent = false;
            }
        },

        searchResultData: function () {
            var scope = this,
                group,
                groupBy = this.groupBy,
                groupReference = null,
                item,
                match,
                comparedDisplay,
                comparedQuery = this.query.toLowerCase(),
                maxItem = this.options.maxItem,
                maxItemPerGroup = this.options.maxItemPerGroup,
                hasDynamicFilters =
                    this.filters.dynamic && !this.helper.isEmpty(this.filters.dynamic),
                displayKeys,
                displayValue,
                missingDisplayKey = {},
                groupFilter,
                groupFilterResult,
                groupMatcher,
                groupMatcherResult,
                matcher =
                    typeof this.options.matcher === "function" && this.options.matcher,
                correlativeMatch,
                correlativeQuery,
                correlativeDisplay;

            if (this.options.accent) {
                comparedQuery = this.helper.removeAccent.call(this, comparedQuery);
            }

            for (var i = 0, ii = this.searchGroups.length; i < ii; ++i) {
                group = this.searchGroups[i];

                if (
                    this.filters.dropdown &&
                    this.filters.dropdown.key === "group" &&
                    this.filters.dropdown.value !== group
                )
                    continue;

                groupFilter =
                    typeof this.options.source[group].filter !== "undefined"
                        ? this.options.source[group].filter
                        : this.options.filter;
                groupMatcher =
                    (typeof this.options.source[group].matcher === "function" &&
                    this.options.source[group].matcher) ||
                    matcher;

                if (!this.source[group]) continue;

                for (var k = 0, kk = this.source[group].length; k < kk; k++) {
                    if (this.resultItemCount >= maxItem && !this.options.callback.onResult) break;
                    if (hasDynamicFilters && !this.dynamicFilter.validate.apply(this, [this.source[group][k]])) continue;

                    item = this.source[group][k];
                    // Validation over null item
                    if (item === null || typeof item === "boolean") continue;
                    if (this.options.multiselect && !this.isMultiselectUniqueData(item)) continue;

                    // dropdownFilter by custom groups
                    if (
                        this.filters.dropdown &&
                        (item[this.filters.dropdown.key] || "").toLowerCase() !==
                        (this.filters.dropdown.value || "").toLowerCase()
                    ) {
                        continue;
                    }

                    groupReference =
                        groupBy === "group"
                            ? group
                            : item[groupBy] ? item[groupBy] : item.group;

                    if (groupReference && !this.tmpResult[groupReference]) {
                        this.tmpResult[groupReference] = [];
                        this.resultCountPerGroup[groupReference] = 0;
                    }

                    if (maxItemPerGroup) {
                        if (
                            groupBy === "group" &&
                            this.tmpResult[groupReference].length >= maxItemPerGroup && !this.options.callback.onResult
                        ) {
                            break;
                        }
                    }

                    displayKeys = this.options.source[group].display || this.options.display;
                    for (var v = 0, vv = displayKeys.length; v < vv; ++v) {
                        // #286 option.filter: false shouldn't bother about the option.display keys
                        if (groupFilter !== false) {
                            // #183 Allow searching for deep source object keys
                            displayValue = /\./.test(displayKeys[v])
                                ? this.helper.namespace.call(this, displayKeys[v], item)
                                : item[displayKeys[v]];

                            // #182 Continue looping if empty or undefined key
                            if (typeof displayValue === "undefined" || displayValue === "") {
                                // {debug}
                                if (this.options.debug) {
                                    missingDisplayKey[v] = {
                                        display: displayKeys[v],
                                        data: item
                                    };
                                }
                                // {/debug}
                                continue;
                            }

                            displayValue = this.helper.cleanStringFromScript(displayValue);
                        }

                        if (typeof groupFilter === "function") {
                            groupFilterResult = groupFilter.call(this, item, displayValue);

                            // return undefined to skip to next item
                            // return false to attempt the matching function on the next displayKey
                            // return true to add the item to the result list
                            // return item object to modify the item and add it to the result list

                            if (groupFilterResult === undefined) break;
                            if (!groupFilterResult) continue;
                            if (typeof groupFilterResult === "object") {
                                item = groupFilterResult;
                            }
                        }

                        if (~[undefined, true].indexOf(groupFilter)) {
                            if (displayValue === null) continue;

                            comparedDisplay = displayValue;
                            comparedDisplay = comparedDisplay.toString().toLowerCase();

                            if (this.options.accent) {
                                comparedDisplay = this.helper.removeAccent.call(
                                    this,
                                    comparedDisplay
                                );
                            }

                            match = comparedDisplay.indexOf(comparedQuery);

                            if (
                                this.options.correlativeTemplate &&
                                displayKeys[v] === "compiled" &&
                                match < 0 &&
                                /\s/.test(comparedQuery)
                            ) {
                                correlativeMatch = true;
                                correlativeQuery = comparedQuery.split(" ");
                                correlativeDisplay = comparedDisplay;
                                for (var x = 0, xx = correlativeQuery.length; x < xx; x++) {
                                    if (correlativeQuery[x] === "") continue;
                                    if (!~correlativeDisplay.indexOf(correlativeQuery[x])) {
                                        correlativeMatch = false;
                                        break;
                                    }
                                    correlativeDisplay = correlativeDisplay.replace(
                                        correlativeQuery[x],
                                        ""
                                    );
                                }
                            }

                            if (match < 0 && !correlativeMatch) continue;
                            if (this.options.offset && match !== 0) continue;

                            if (groupMatcher) {
                                groupMatcherResult = groupMatcher.call(
                                    this,
                                    item,
                                    displayValue
                                );

                                // return undefined to skip to next item
                                // return false to attempt the matching function on the next displayKey
                                // return true to add the item to the result list
                                // return item object to modify the item and add it to the result list

                                if (groupMatcherResult === undefined) break;
                                if (!groupMatcherResult) continue;
                                if (typeof groupMatcherResult === "object") {
                                    item = groupMatcherResult;
                                }
                            }
                        }

                        this.resultCount++;
                        this.resultCountPerGroup[groupReference]++;

                        if (this.resultItemCount < maxItem) {
                            if (
                                maxItemPerGroup &&
                                this.tmpResult[groupReference].length >= maxItemPerGroup
                            ) {
                                break;
                            }

                            this.tmpResult[groupReference].push(
                                $.extend(true, {matchedKey: displayKeys[v]}, item)
                            );
                            this.resultItemCount++;
                        }
                        break;
                    }

                    if (!this.options.callback.onResult) {
                        if (this.resultItemCount >= maxItem) {
                            break;
                        }
                        if (
                            maxItemPerGroup &&
                            this.tmpResult[groupReference].length >= maxItemPerGroup
                        ) {
                            if (groupBy === "group") {
                                break;
                            }
                        }
                    }
                }
            }

            // {debug}
            if (this.options.debug) {
                if (!this.helper.isEmpty(missingDisplayKey)) {
                    _debug.log({
                        node: this.selector,
                        function: "searchResult()",
                        arguments: JSON.stringify(missingDisplayKey),
                        message: "Missing keys for display, make sure options.display is set properly."
                    });

                    _debug.print();
                }
            }
            // {/debug}

            if (this.options.order) {
                var displayKeys = [],
                    displayKey;

                for (var group in this.tmpResult) {
                    if (!this.tmpResult.hasOwnProperty(group)) continue;
                    for (var i = 0, ii = this.tmpResult[group].length; i < ii; i++) {
                        displayKey =
                            this.options.source[this.tmpResult[group][i].group].display ||
                            this.options.display;
                        if (!~displayKeys.indexOf(displayKey[0])) {
                            displayKeys.push(displayKey[0]);
                        }
                    }
                    this.tmpResult[group].sort(
                        scope.helper.sort(
                            displayKeys,
                            scope.options.order === "asc",
                            function (a) {
                                if (a) {
                                    return a.toString().toUpperCase();
                                } else {
                                    return "";
                                }
                            }
                        )
                    );
                }
            }

            var concatResults = [],
                groupOrder = [];

            if (typeof this.options.groupOrder === "function") {
                groupOrder = this.options.groupOrder.apply(this, [
                    this.node,
                    this.query,
                    this.tmpResult,
                    this.resultCount,
                    this.resultCountPerGroup
                ]);
            } else if (Array.isArray(this.options.groupOrder)) {
                groupOrder = this.options.groupOrder;
            } else if (
                typeof this.options.groupOrder === "string" && ~["asc", "desc"].indexOf(this.options.groupOrder)
            ) {
                groupOrder = Object.keys(this.tmpResult).sort(
                    scope.helper.sort([], scope.options.groupOrder === "asc", function (a) {
                        return a.toString().toUpperCase();
                    })
                );
            } else {
                groupOrder = Object.keys(this.tmpResult);
            }

            for (var i = 0, ii = groupOrder.length; i < ii; i++) {
                concatResults = concatResults.concat(this.tmpResult[groupOrder[i]] || []);
            }

            // #286 groupTemplate option was deleting group reference Array
            this.groups = JSON.parse(JSON.stringify(groupOrder));

            this.result = concatResults;
        },

        buildLayout: function () {
            this.buildHtmlLayout();

            this.buildBackdropLayout();

            this.buildHintLayout();

            if (this.options.callback.onLayoutBuiltBefore) {
                this.tmpResultHtml = this.helper.executeCallback.call(
                    this,
                    this.options.callback.onLayoutBuiltBefore,
                    [this.node, this.query, this.result, this.resultHtml]
                );
            }

            if (this.tmpResultHtml instanceof $) {
                this.resultContainer.html(this.tmpResultHtml);
            } else if (this.resultHtml instanceof $) {
                this.resultContainer.html(this.resultHtml);
            }

            if (this.options.callback.onLayoutBuiltAfter) {
                this.helper.executeCallback.call(
                    this,
                    this.options.callback.onLayoutBuiltAfter,
                    [this.node, this.query, this.result]
                );
            }
        },

        buildHtmlLayout: function () {
            // #150 Add the option to have no resultList but still perform the search and trigger the callbacks
            if (this.options.resultContainer === false) return;

            if (!this.resultContainer) {
                this.resultContainer = $("<div/>", {
                    class: this.options.selector.result
                });

                this.container.append(this.resultContainer);
            }

            var emptyTemplate;
            if (!this.result.length && this.generatedGroupCount === this.generateGroups.length) {
                if (
                    this.options.multiselect &&
                    this.options.multiselect.limit &&
                    this.items.length >= this.options.multiselect.limit
                ) {
                    if (this.options.multiselect.limitTemplate) {
                        emptyTemplate =
                            typeof this.options.multiselect.limitTemplate === "function"
                                ? this.options.multiselect.limitTemplate.call(this, this.query)
                                : this.options.multiselect.limitTemplate.replace(
                                    /\{\{query}}/gi,
                                    $("<div>")
                                        .text(this.helper.cleanStringFromScript(this.query))
                                        .html()
                                );
                    } else {
                        emptyTemplate =
                            "Can't select more than " + this.items.length + " items.";
                    }
                } else if (this.options.emptyTemplate && this.query !== "") {
                    emptyTemplate =
                        typeof this.options.emptyTemplate === "function"
                            ? this.options.emptyTemplate.call(this, this.query)
                            : this.options.emptyTemplate.replace(
                                /\{\{query}}/gi,
                                $("<div>")
                                    .text(this.helper.cleanStringFromScript(this.query))
                                    .html()
                            );
                } else {
                    return;
                }
            }
            this.displayEmptyTemplate = !!emptyTemplate;

            var _query = this.query.toLowerCase();
            if (this.options.accent) {
                _query = this.helper.removeAccent.call(this, _query);
            }

            var scope = this,
                groupTemplate = this.groupTemplate || "<ul></ul>",
                hasEmptyTemplate = false;

            if (this.groupTemplate) {
                groupTemplate = $(
                    groupTemplate.replace(
                        /<([^>]+)>\{\{(.+?)}}<\/[^>]+>/g,
                        function (match, tag, group, offset, string) {
                            var template = "",
                                groups = group === "group" ? scope.groups : [group];

                            if (!scope.result.length) {
                                if (hasEmptyTemplate === true) return "";
                                hasEmptyTemplate = true;

                                return (
                                    "<" + tag + ' class="' + scope.options.selector.empty + '">' + emptyTemplate + "</" + tag + ">"
                                );
                            }

                            for (var i = 0, ii = groups.length; i < ii; ++i) {
                                template += "<" + tag + ' data-group-template="' + groups[i] + '"><ul></ul></' + tag + ">";
                            }

                            return template;
                        }
                    )
                );
            } else {
                groupTemplate = $(groupTemplate);
                if (!this.result.length) {
                    groupTemplate.append(
                        emptyTemplate instanceof $
                            ? emptyTemplate
                            : '<li class="' +
                            scope.options.selector.empty +
                            '">' +
                            emptyTemplate +
                            "</li>"
                    );
                }
            }

            groupTemplate.addClass(
                this.options.selector.list +
                (this.helper.isEmpty(this.result) ? " empty" : "")
            );

            var _group,
                _groupTemplate,
                _item,
                _href,
                _liHtml,
                _template,
                _aHtml,
                _display,
                _displayKeys,
                _displayValue,
                _unusedGroups =
                    (this.groupTemplate && this.result.length && scope.groups) || [],
                _tmpIndexOf;

            for (var i = 0, ii = this.result.length; i < ii; ++i) {
                _item = this.result[i];
                _group = _item.group;
                _href =
                    (!this.options.multiselect &&
                    this.options.source[_item.group].href) ||
                    this.options.href;
                _display = [];
                _displayKeys =
                    this.options.source[_item.group].display || this.options.display;

                if (this.options.group) {
                    _group = _item[this.options.group.key];
                    if (this.options.group.template) {
                        if (typeof this.options.group.template === "function") {
                            _groupTemplate = this.options.group.template.call(this, _item);
                        } else if (typeof this.options.group.template === "string") {
                            _groupTemplate = this.options.group.template.replace(
                                /\{\{([\w\-\.]+)}}/gi,
                                function (match, index) {
                                    return scope.helper.namespace.call(
                                        scope,
                                        index,
                                        _item,
                                        "get",
                                        ""
                                    );
                                }
                            );
                        }
                    }

                    if (!groupTemplate.find('[data-search-group="' + _group + '"]')[0]) {
                        (this.groupTemplate
                            ? groupTemplate.find('[data-group-template="' + _group + '"] ul')
                            : groupTemplate).append(
                            $("<li/>", {
                                class: scope.options.selector.group,
                                html: $("<a/>", {
                                    href: "javascript:;",
                                    html: _groupTemplate || _group,
                                    tabindex: -1
                                }),
                                "data-search-group": _group
                            })
                        );
                    }
                }

                if (this.groupTemplate && _unusedGroups.length) {
                    _tmpIndexOf = _unusedGroups.indexOf(_group || _item.group);
                    if (~_tmpIndexOf) {
                        _unusedGroups.splice(_tmpIndexOf, 1);
                    }
                }

                _liHtml = $("<li/>", {
                    class: scope.options.selector.item + " " + scope.options.selector.group + "-" + this.helper.slugify.call(this, _group),
                    disabled: _item.disabled ? true : false,
                    "data-group": _group,
                    "data-index": i,
                    html: $("<a/>", {
                        href: _href && !_item.disabled
                            ? (function (href, item) {
                                return item.href = scope.generateHref.call(
                                    scope,
                                    href,
                                    item
                                );
                            })(_href, _item)
                            : "javascript:;",
                        html: function () {
                            _template =
                                (_item.group && scope.options.source[_item.group].template) ||
                                scope.options.template;

                            if (_template) {
                                if (typeof _template === "function") {
                                    _template = _template.call(scope, scope.query, _item);
                                }

                                _aHtml = _template.replace(
                                    /\{\{([^\|}]+)(?:\|([^}]+))*}}/gi,
                                    function (match, index, options) {
                                        var value = scope.helper.cleanStringFromScript(
                                            String(
                                                scope.helper.namespace.call(
                                                    scope,
                                                    index,
                                                    _item,
                                                    "get",
                                                    ""
                                                )
                                            )
                                        );

                                        // #151 Slugify should be an option, not enforced
                                        options = (options && options.split("|")) || [];
                                        if (~options.indexOf("slugify")) {
                                            value = scope.helper.slugify.call(scope, value);
                                        }

                                        if (!~options.indexOf("raw")) {
                                            if (
                                                scope.options.highlight === true &&
                                                _query && ~_displayKeys.indexOf(index)
                                            ) {
                                                value = scope.helper.highlight.call(
                                                    scope,
                                                    value,
                                                    _query.split(" "),
                                                    scope.options.accent
                                                );
                                            }
                                        }
                                        return value;
                                    }
                                );
                            } else {
                                for (var i = 0, ii = _displayKeys.length; i < ii; i++) {
                                    _displayValue = /\./.test(_displayKeys[i])
                                        ? scope.helper.namespace.call(
                                            scope,
                                            _displayKeys[i],
                                            _item,
                                            "get",
                                            ""
                                        )
                                        : _item[_displayKeys[i]];

                                    if (
                                        typeof _displayValue === "undefined" ||
                                        _displayValue === ""
                                    )
                                        continue;

                                    _display.push(_displayValue);
                                }

                                _aHtml =
                                    '<span class="' +
                                    scope.options.selector.display +
                                    '">' +
                                    scope.helper.cleanStringFromScript(
                                        String(_display.join(" "))
                                    ) +
                                    "</span>";
                            }

                            if (
                                (scope.options.highlight === true && _query && !_template) ||
                                scope.options.highlight === "any"
                            ) {
                                _aHtml = scope.helper.highlight.call(
                                    scope,
                                    _aHtml,
                                    _query.split(" "),
                                    scope.options.accent
                                );
                            }

                            $(this).append(_aHtml);
                        }
                    })
                });

                (function (i, item, liHtml) {
                    liHtml.on("click", function (e, originalEvent) {
                        if (item.disabled) {
                            e.preventDefault();
                            return;
                        }

                        // #208 - Attach "keyboard Enter" original event
                        if (originalEvent && typeof originalEvent === "object") {
                            e.originalEvent = originalEvent;
                        }

                        if (scope.options.mustSelectItem && scope.helper.isEmpty(item)) {
                            e.preventDefault();
                            return;
                        }

                        if (!scope.options.multiselect) {
                            scope.item = item;
                        }

                        if (
                            scope.helper.executeCallback.call(
                                scope,
                                scope.options.callback.onClickBefore,
                                [scope.node, $(this), item, e]
                            ) === false
                        ) return;

                        if (
                            (e.originalEvent && e.originalEvent.defaultPrevented) ||
                            e.isDefaultPrevented()
                        ) return;

                        if (scope.options.multiselect) {
                            scope.query = scope.rawQuery = "";
                            scope.addMultiselectItemLayout(item);
                        } else {
                            scope.focusOnly = true;
                            scope.query = scope.rawQuery = scope.getTemplateValue.call(scope, item);;
                            if (scope.isContentEditable) {
                                scope.node.text(scope.query);
                                scope.helper.setCaretAtEnd(scope.node[0]);
                            }
                        }

                        scope.hideLayout();

                        scope.node
                            .val(scope.query)
                            .focus();

                        scope.options.cancelButton &&
                            scope.toggleCancelButtonVisibility();

                        scope.helper.executeCallback.call(
                            scope,
                            scope.options.callback.onClickAfter,
                            [scope.node, $(this), item, e]
                        );
                    });
                    liHtml.on("mouseenter", function (e) {
                        if (!item.disabled) {
                            scope.clearActiveItem();
                            scope.addActiveItem($(this));
                        }
                        scope.helper.executeCallback.call(
                            scope,
                            scope.options.callback.onEnter,
                            [scope.node, $(this), item, e]
                        );
                    });
                    liHtml.on("mouseleave", function (e) {
                        if (!item.disabled) {
                            scope.clearActiveItem();
                        }
                        scope.helper.executeCallback.call(
                            scope,
                            scope.options.callback.onLeave,
                            [scope.node, $(this), item, e]
                        );
                    });
                })(i, _item, _liHtml);

                (this.groupTemplate
                    ? groupTemplate.find('[data-group-template="' + _group + '"] ul')
                    : groupTemplate).append(_liHtml);
            }

            if (this.result.length && _unusedGroups.length) {
                for (var i = 0, ii = _unusedGroups.length; i < ii; ++i) {
                    groupTemplate
                        .find('[data-group-template="' + _unusedGroups[i] + '"]')
                        .remove();
                }
            }

            this.resultHtml = groupTemplate;
        },

        generateHref: function (href, item) {
            var scope = this;

            if (typeof href === "string") {
                href = href.replace(
                    /\{\{([^\|}]+)(?:\|([^}]+))*}}/gi,
                    function (match, index, options) {
                        var value = scope.helper.namespace.call(
                            scope,
                            index,
                            item,
                            "get",
                            ""
                        );

                        // #151 Slugify should be an option, not enforced
                        options = (options && options.split("|")) || [];
                        if (~options.indexOf("slugify")) {
                            value = scope.helper.slugify.call(scope, value);
                        }

                        return value;
                    }
                );
            } else if (typeof href === "function") {
                href = href.call(this, item);
            }

            return href;
        },

        getMultiselectComparedData: function (item) {
            var uniqueComparedItem = "";
            if (Array.isArray(this.options.multiselect.matchOn)) {
                for (
                    var i = 0, ii = this.options.multiselect.matchOn.length;
                    i < ii;
                    ++i
                ) {
                    uniqueComparedItem +=
                        typeof item[this.options.multiselect.matchOn[i]] !== "undefined"
                            ? item[this.options.multiselect.matchOn[i]]
                            : "";
                }
            } else {
                var tmpItem = JSON.parse(JSON.stringify(item)),
                    extraKeys = ["group", "matchedKey", "compiled", "href"];

                for (var i = 0, ii = extraKeys.length; i < ii; ++i) {
                    delete tmpItem[extraKeys[i]];
                }
                uniqueComparedItem = JSON.stringify(tmpItem);
            }
            return uniqueComparedItem;
        },

        buildBackdropLayout: function () {
            if (!this.options.backdrop) return;

            if (!this.backdrop.container) {
                this.backdrop.css = $.extend(
                    {
                        opacity: 0.6,
                        filter: "alpha(opacity=60)",
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        "z-index": 1040,
                        "background-color": "#000"
                    },
                    this.options.backdrop
                );

                this.backdrop.container = $("<div/>", {
                    class: this.options.selector.backdrop,
                    css: this.backdrop.css
                }).insertAfter(this.container);
            }
            this.container.addClass("backdrop").css({
                "z-index": this.backdrop.css["z-index"] + 1,
                position: "relative"
            });
        },

        buildHintLayout: function (result) {
            if (!this.options.hint) return;
            // #144 hint doesn't overlap with the input when the query is too long
            if (this.node[0].scrollWidth > Math.ceil(this.node.innerWidth())) {
                this.hint.container && this.hint.container.val("");
                return;
            }

            var scope = this,
                hint = "",
                result = result || this.result,
                query = this.query.toLowerCase();

            if (this.options.accent) {
                query = this.helper.removeAccent.call(this, query);
            }

            this.hintIndex = null;

            if (this.searchGroups.length) {
                if (!this.hint.container) {
                    this.hint.css = $.extend(
                        {
                            "border-color": "transparent",
                            position: "absolute",
                            top: 0,
                            display: "inline",
                            "z-index": -1,
                            float: "none",
                            color: "silver",
                            "box-shadow": "none",
                            cursor: "default",
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "user-select": "none"
                        },
                        this.options.hint
                    );

                    this.hint.container = $("<" + this.node[0].nodeName + "/>", {
                        type: this.node.attr("type"),
                        class: this.node.attr("class"),
                        readonly: true,
                        unselectable: "on",
                        "aria-hidden": "true",
                        tabindex: -1,
                        click: function () {
                            // IE8 Fix
                            scope.node.focus();
                        }
                    })
                        .addClass(this.options.selector.hint)
                        .css(this.hint.css)
                        .insertAfter(this.node);

                    this.node.parent().css({
                        position: "relative"
                    });
                }

                this.hint.container.css("color", this.hint.css.color);

                // Do not display hint for empty query
                if (query) {
                    var _displayKeys, _group, _comparedValue;

                    for (var i = 0, ii = result.length; i < ii; i++) {
                        if (result[i].disabled) continue;

                        _group = result[i].group;
                        _displayKeys =
                            this.options.source[_group].display || this.options.display;

                        for (var k = 0, kk = _displayKeys.length; k < kk; k++) {
                            _comparedValue = String(result[i][_displayKeys[k]]).toLowerCase();
                            if (this.options.accent) {
                                _comparedValue = this.helper.removeAccent.call(
                                    this,
                                    _comparedValue
                                );
                            }

                            if (_comparedValue.indexOf(query) === 0) {
                                hint = String(result[i][_displayKeys[k]]);
                                this.hintIndex = i;
                                break;
                            }
                        }
                        if (this.hintIndex !== null) {
                            break;
                        }
                    }
                }

                var hintValue =
                    (hint.length > 0 &&
                    this.rawQuery + hint.substring(this.query.length)) ||
                    "";
                this.hint.container.val(hintValue);

                if (this.isContentEditable) {
                    this.hint.container.text(hintValue);
                }
            }
        },

        buildDropdownLayout: function () {
            if (!this.options.dropdownFilter) return;

            var scope = this;

            $("<span/>", {
                class: this.options.selector.filter,
                html: function () {
                    $(this).append(
                        $("<button/>", {
                            type: "button",
                            class: scope.options.selector.filterButton,
                            style: "display: none;",
                            click: function () {
                                scope.container.toggleClass("filter");

                                var _ns = scope.namespace + "-dropdown-filter";

                                $("html").off(_ns);

                                if (scope.container.hasClass("filter")) {
                                    $("html").on("click" + _ns + " touchend" + _ns, function (e) {
                                        if (
                                            ($(e.target).closest(
                                                "." + scope.options.selector.filter
                                            )[0] &&
                                            $(e.target).closest(scope.container)[0]) ||
                                            scope.hasDragged
                                        )
                                            return;
                                        scope.container.removeClass("filter");

                                        $("html").off(_ns);
                                    });
                                }
                            }
                        })
                    );

                    $(this).append(
                        $("<ul/>", {
                            class: scope.options.selector.dropdown
                        })
                    );
                }
            }).insertAfter(scope.container.find("." + scope.options.selector.query));
        },

        buildDropdownItemLayout: function (type) {
            if (!this.options.dropdownFilter) return;

            var scope = this,
                template,
                all =
                    (typeof this.options.dropdownFilter === "string" &&
                    this.options.dropdownFilter) ||
                    "All",
                ulScope = this.container.find("." + this.options.selector.dropdown),
                filter;

            // Use regular groups defined in options.source
            if (
                type === "static" &&
                (this.options.dropdownFilter === true ||
                typeof this.options.dropdownFilter === "string")
            ) {
                this.dropdownFilter.static.push({
                    key: "group",
                    template: "{{group}}",
                    all: all,
                    value: Object.keys(this.options.source)
                });
            }

            for (var i = 0, ii = this.dropdownFilter[type].length; i < ii; i++) {
                filter = this.dropdownFilter[type][i];

                if (!Array.isArray(filter.value)) {
                    filter.value = [filter.value];
                }

                if (filter.all) {
                    this.dropdownFilterAll = filter.all;
                }

                for (var k = 0, kk = filter.value.length; k <= kk; k++) {
                    // Only add "all" at the last filter iteration
                    if (k === kk && i !== ii - 1) {
                        continue;
                    } else if (k === kk && i === ii - 1) {
                        if (type === "static" && this.dropdownFilter.dynamic.length) {
                            continue;
                        }
                    }

                    template = this.dropdownFilterAll || all;
                    if (filter.value[k]) {
                        if (filter.template) {
                            template = filter.template.replace(
                                new RegExp("{{" + filter.key + "}}", "gi"),
                                filter.value[k]
                            );
                        } else {
                            template = filter.value[k];
                        }
                    } else {
                        this.container
                            .find("." + scope.options.selector.filterButton)
                            .html(template);
                    }

                    (function (k, filter, template) {
                        ulScope.append(
                            $("<li/>", {
                                class: scope.options.selector.dropdownItem +
                                " " +
                                scope.helper.slugify.call(
                                    scope,
                                    filter.key + "-" + (filter.value[k] || all)
                                ),
                                html: $("<a/>", {
                                    href: "javascript:;",
                                    html: template,
                                    click: function (e) {
                                        e.preventDefault();
                                        _selectFilter.call(scope, {
                                            key: filter.key,
                                            value: filter.value[k] || "*",
                                            template: template
                                        });
                                    }
                                })
                            })
                        );
                    })(k, filter, template);
                }
            }

            if (this.dropdownFilter[type].length) {
                this.container
                    .find("." + scope.options.selector.filterButton)
                    .removeAttr("style");
            }

            /**
             * @private
             * Select the filter and rebuild the result group
             *
             * @param {object} item
             */
            function _selectFilter(item) {
                if (item.value === "*") {
                    delete this.filters.dropdown;
                } else {
                    this.filters.dropdown = item;
                }

                this.container
                    .removeClass("filter")
                    .find("." + this.options.selector.filterButton)
                    .html(item.template);

                this.isDropdownEvent = true;
                this.node.trigger("input" + this.namespace);

                if (this.options.multiselect) {
                    this.adjustInputSize();
                }

                this.node.focus();
            }
        },

        dynamicFilter: {
            init: function () {
                if (!this.options.dynamicFilter) return;

                this.dynamicFilter.bind.call(this);
                this.isDynamicFilterEnabled = true;
            },

            validate: function (item) {
                var isValid,
                    softValid = null,
                    hardValid = null,
                    itemValue;

                for (var key in this.filters.dynamic) {
                    if (!this.filters.dynamic.hasOwnProperty(key)) continue;
                    if (!!~key.indexOf(".")) {
                        itemValue = this.helper.namespace.call(this, key, item, "get");
                    } else {
                        itemValue = item[key];
                    }

                    if (this.filters.dynamic[key].modifier === "|" && !softValid) {
                        softValid = itemValue == this.filters.dynamic[key].value || false;
                    }

                    if (this.filters.dynamic[key].modifier === "&") {
                        // Leaving "==" in case of comparing number with string
                        if (itemValue == this.filters.dynamic[key].value) {
                            hardValid = true;
                        } else {
                            hardValid = false;
                            break;
                        }
                    }
                }

                isValid = softValid;
                if (hardValid !== null) {
                    isValid = hardValid;
                    if (hardValid === true && softValid !== null) {
                        isValid = softValid;
                    }
                }

                return !!isValid;
            },

            set: function (key, value) {
                var matches = key.match(/^([|&])?(.+)/);

                if (!value) {
                    delete this.filters.dynamic[matches[2]];
                } else {
                    this.filters.dynamic[matches[2]] = {
                        modifier: matches[1] || "|",
                        value: value
                    };
                }

                if (this.isDynamicFilterEnabled) {
                    this.generateSource();
                }
            },
            bind: function () {
                var scope = this,
                    filter;

                for (var i = 0, ii = this.options.dynamicFilter.length; i < ii; i++) {
                    filter = this.options.dynamicFilter[i];

                    if (typeof filter.selector === "string") {
                        filter.selector = $(filter.selector);
                    }

                    if (
                        !(filter.selector instanceof $) || !filter.selector[0] || !filter.key
                    ) {
                        // {debug}
                        if (this.options.debug) {
                            _debug.log({
                                node: this.selector,
                                function: "buildDynamicLayout()",
                                message: 'Invalid jQuery selector or jQuery Object for "filter.selector" or missing filter.key'
                            });

                            _debug.print();
                        }
                        // {/debug}
                        continue;
                    }

                    (function (filter) {
                        filter.selector
                            .off(scope.namespace)
                            .on("change" + scope.namespace, function () {
                                scope.dynamicFilter.set.apply(scope, [
                                    filter.key,
                                    scope.dynamicFilter.getValue(this)
                                ]);
                            })
                            .trigger("change" + scope.namespace);
                    })(filter);
                }
            },

            getValue: function (tag) {
                var value;
                if (tag.tagName === "SELECT") {
                    value = tag.value;
                } else if (tag.tagName === "INPUT") {
                    if (tag.type === "checkbox") {
                        value =
                            (tag.checked && tag.getAttribute("value")) || tag.checked || null;
                    } else if (tag.type === "radio" && tag.checked) {
                        value = tag.value;
                    }
                }
                return value;
            }
        },

        buildMultiselectLayout: function () {
            if (!this.options.multiselect) return;
            var scope = this;
            var multiselectData;

            this.label.container = $("<span/>", {
                class: this.options.selector.labelContainer,
                "data-padding-left": parseFloat(this.node.css("padding-left")) || 0,
                "data-padding-right": parseFloat(this.node.css("padding-right")) || 0,
                "data-padding-top": parseFloat(this.node.css("padding-top")) || 0,
                click: function (e) {
                    if ($(e.target).hasClass(scope.options.selector.labelContainer)) {
                        scope.node.focus();
                    }
                }
            });

            this.node
                .closest("." + this.options.selector.query)
                .prepend(this.label.container);

            if (!this.options.multiselect.data) return;

            if (Array.isArray(this.options.multiselect.data)) {
                this.populateMultiselectData(this.options.multiselect.data);
            } else if (typeof this.options.multiselect.data === 'function') {
                multiselectData = this.options.multiselect.data.call(this);
                if (Array.isArray(multiselectData)) {
                    this.populateMultiselectData(multiselectData);
                } else if (typeof multiselectData.promise === "function") {
                    $.when(multiselectData).then(function (deferredData) {
                        if (deferredData && Array.isArray(deferredData)) {
                            scope.populateMultiselectData(deferredData);
                        }
                    });
                }
            }
        },

        isMultiselectUniqueData: function (data) {
            var isUniqueData = true;
            for (var x = 0, xx = this.comparedItems.length; x < xx; ++x) {
                if (
                    this.comparedItems[x] ===
                    this.getMultiselectComparedData(data)
                ) {
                    isUniqueData = false;
                    break;
                }
            }
            return isUniqueData;
        },

        populateMultiselectData: function (data) {
            for (var i = 0, ii = data.length; i < ii; ++i) {
                this.addMultiselectItemLayout(data[i]);
            }

            this.node.trigger("search" + this.namespace, { origin: 'populateMultiselectData' });
        },

        addMultiselectItemLayout: function (item) {
            if (!this.isMultiselectUniqueData(item)) return;

            this.items.push(item);
            this.comparedItems.push(
                this.getMultiselectComparedData(item)
            );

            var templateValue = this.getTemplateValue(item);

            var scope = this,
                htmlTag = this.options.multiselect.href ? "a" : "span";

            var label = $("<span/>", {
                class: this.options.selector.label,
                html: $("<" + htmlTag + "/>", {
                    text: templateValue,
                    click: function (e) {
                        var currentLabel = $(this).closest(
                                "." + scope.options.selector.label
                            ),
                            index = scope.label.container
                                .find("." + scope.options.selector.label)
                                .index(currentLabel);

                        scope.options.multiselect.callback && scope.helper.executeCallback.call(
                            scope,
                            scope.options.multiselect.callback.onClick,
                            [scope.node, scope.items[index], e]
                        );
                    },
                    href: this.options.multiselect.href
                        ? (function (item) {
                            return scope.generateHref.call(
                                scope,
                                scope.options.multiselect.href,
                                item
                            );
                        })(scope.items[scope.items.length - 1])
                        : null
                })
            });

            label.append(
                $("<span/>", {
                    class: this.options.selector.cancelButton,
                    html: "×",
                    click: function (e) {
                        var label = $(this).closest(
                                "." + scope.options.selector.label
                            ),
                            index = scope.label.container
                                .find("." + scope.options.selector.label)
                                .index(label);

                        scope.cancelMultiselectItem(index, label, e);
                    }
                })
            );

            this.label.container.append(label);
            this.adjustInputSize();

            return true;
        },

        cancelMultiselectItem: function (index, label, e) {
            var item = this.items[index];

            label = label
                || this.label.container
                    .find('.' + this.options.selector.label)
                    .eq(index);

            label.remove();

            this.items.splice(index, 1);
            this.comparedItems.splice(index, 1);

            this.options.multiselect.callback && this.helper.executeCallback.call(
                this,
                this.options.multiselect.callback.onCancel,
                [this.node, item, e]
            );

            this.adjustInputSize();

            this.focusOnly = true;
            this.node.focus().trigger('input' + this.namespace, { origin: 'cancelMultiselectItem' });
        },

        adjustInputSize: function () {
            var nodeWidth =
                this.node[0].getBoundingClientRect().width -
                (parseFloat(this.label.container.data("padding-right")) || 0) -
                (parseFloat(this.label.container.css("padding-left")) || 0);

            var labelOuterWidth = 0,
                numberOfRows = 0,
                currentRowWidth = 0,
                isRowAdded = false,
                labelOuterHeight = 0;

            this.label.container
                .find("." + this.options.selector.label)
                .filter(function (i, v) {
                    if (i === 0) {
                        labelOuterHeight =
                            $(v)[0].getBoundingClientRect().height +
                            parseFloat($(v).css("margin-bottom") || 0);
                    }

                    // labelOuterWidth = Math.round($(v)[0].getBoundingClientRect().width * 100) / 100 + parseFloat($(v).css('margin-right'));
                    labelOuterWidth =
                        $(v)[0].getBoundingClientRect().width +
                        parseFloat($(v).css("margin-right") || 0);

                    if (
                        currentRowWidth + labelOuterWidth > nodeWidth * 0.7 && !isRowAdded
                    ) {
                        numberOfRows++;
                        isRowAdded = true;
                    }

                    if (currentRowWidth + labelOuterWidth < nodeWidth) {
                        currentRowWidth += labelOuterWidth;
                    } else {
                        isRowAdded = false;
                        currentRowWidth = labelOuterWidth;
                    }
                });

            var paddingLeft =
                parseFloat(this.label.container.data("padding-left") || 0) +
                (isRowAdded ? 0 : currentRowWidth);
            var paddingTop =
                numberOfRows * labelOuterHeight +
                parseFloat(this.label.container.data("padding-top") || 0);

            this.container
                .find("." + this.options.selector.query)
                .find("input, textarea, [contenteditable], .typeahead__hint")
                .css({
                    paddingLeft: paddingLeft,
                    paddingTop: paddingTop
                });
        },

        showLayout: function () {
            if (this.container.hasClass("result") ||
                (
                    !this.result.length && !this.displayEmptyTemplate && !this.options.backdropOnFocus
                )
            ) return;

            _addHtmlListeners.call(this);

            this.container.addClass(
                [
                    this.result.length ||
                    (this.searchGroups.length &&
                    this.displayEmptyTemplate)
                        ? "result "
                        : "",
                    this.options.hint && this.searchGroups.length ? "hint" : "",
                    this.options.backdrop || this.options.backdropOnFocus
                        ? "backdrop"
                        : ""
                ].join(" ")
            );

            this.helper.executeCallback.call(
                this,
                this.options.callback.onShowLayout,
                [this.node, this.query]
            );

            function _addHtmlListeners() {
                var scope = this;

                // If Typeahead is blured by pressing the "Tab" Key, hide the results
                $("html")
                    .off("keydown" + this.namespace)
                    .on("keydown" + this.namespace, function (e) {
                        if (!e.keyCode || e.keyCode !== 9) return;
                        setTimeout(function () {
                            if (
                                !$(":focus")
                                    .closest(scope.container)
                                    .find(scope.node)[0]
                            ) {
                                scope.hideLayout();
                            }
                        }, 0);
                    });

                // If Typeahead is blured by clicking outside, hide the results
                $("html")
                    .off("click" + this.namespace + " touchend" + this.namespace)
                    .on("click" + this.namespace + " touchend" + this.namespace, function (e) {
                        if ($(e.target).closest(scope.container)[0] ||
                            $(e.target).closest('.' + scope.options.selector.item)[0] ||
                            e.target.className === scope.options.selector.cancelButton ||
                            scope.hasDragged
                        ) return;

                        scope.hideLayout();
                    });
            }
        },

        hideLayout: function () {
            // Means the container is already hidden
            if (!this.container.hasClass("result") && !this.container.hasClass("backdrop")) return;

            this.container.removeClass(
                "result hint filter" +
                (this.options.backdropOnFocus && $(this.node).is(":focus")
                    ? ""
                    : " backdrop")
            );

            if (this.options.backdropOnFocus && this.container.hasClass("backdrop"))
                return;

            // Make sure the event HTML gets cleared
            $("html").off(this.namespace);

            this.helper.executeCallback.call(
                this,
                this.options.callback.onHideLayout,
                [this.node, this.query]
            );
        },

        resetLayout: function () {
            this.result = [];
            this.tmpResult = {};
            this.groups = [];
            this.resultCount = 0;
            this.resultCountPerGroup = {};
            this.resultItemCount = 0;
            this.resultHtml = null;

            if (this.options.hint && this.hint.container) {
                this.hint.container.val("");
                if (this.isContentEditable) {
                    this.hint.container.text("");
                }
            }
        },

        resetInput: function () {
            this.node.val("");
            if (this.isContentEditable) {
                this.node.text("");
            }
            this.query = "";
            this.rawQuery = "";
        },

        buildCancelButtonLayout: function () {
            if (!this.options.cancelButton) return;
            var scope = this;

            $("<span/>", {
                class: this.options.selector.cancelButton,
                html: "×",
                mousedown: function (e) {
                    // Don't blur the input
                    e.stopImmediatePropagation();
                    e.preventDefault();

                    scope.resetInput();
                    scope.node.trigger("input" + scope.namespace, [e]);
                }
            }).insertBefore(this.node);
        },

        toggleCancelButtonVisibility: function () {
            this.container.toggleClass("cancel", !!this.query.length);
        },

        __construct: function () {
            this.extendOptions();

            if (!this.unifySourceFormat()) {
                return;
            }

            this.dynamicFilter.init.apply(this);

            this.init();
            this.buildDropdownLayout();
            this.buildDropdownItemLayout("static");

            this.buildMultiselectLayout();

            this.delegateEvents();
            this.buildCancelButtonLayout();

            this.helper.executeCallback.call(this, this.options.callback.onReady, [
                this.node
            ]);
        },

        helper: {
            isEmpty: function (obj) {
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) return false;
                }

                return true;
            },

            /**
             * Remove every accent(s) from a string
             *
             * @param {String} string
             * @returns {*}
             */
            removeAccent: function (string) {
                if (typeof string !== "string") {
                    return;
                }

                var accent = _accent;

                if (typeof this.options.accent === "object") {
                    accent = this.options.accent;
                }

                string = string
                    .toLowerCase()
                    .replace(new RegExp("[" + accent.from + "]", "g"), function (match) {
                        return accent.to[accent.from.indexOf(match)];
                    });

                return string;
            },

            /**
             * Creates a valid url from string
             *
             * @param {String} string
             * @returns {string}
             */
            slugify: function (string) {
                string = String(string);

                if (string !== "") {
                    string = this.helper.removeAccent.call(this, string);
                    string = string
                        .replace(/[^-a-z0-9]+/g, "-")
                        .replace(/-+/g, "-")
                        .replace(/^-|-$/g, "");
                }

                return string;
            },

            /**
             * Sort list of object by key
             *
             * @param {String|Array} field
             * @param {Boolean} reverse
             * @param {Function} primer
             * @returns {Function}
             */
            sort: function (field, reverse, primer) {
                var key = function (x) {
                    for (var i = 0, ii = field.length; i < ii; i++) {
                        if (typeof x[field[i]] !== "undefined") {
                            return primer(x[field[i]]);
                        }
                    }
                    return x;
                };

                reverse = [-1, 1][+!!reverse];

                return function (a, b) {
                    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
                };
            },

            /**
             * Replace a string from-to index
             *
             * @param {String} string The complete string to replace into
             * @param {Number} offset The cursor position to start replacing from
             * @param {Number} length The length of the replacing string
             * @param {String} replace The replacing string
             * @returns {String}
             */
            replaceAt: function (string, offset, length, replace) {
                return (
                    string.substring(0, offset) +
                    replace +
                    string.substring(offset + length)
                );
            },

            /**
             * Adds <strong> html around a matched string
             *
             * @param {String} string The complete string to match from
             * @param {String} key
             * @param {Boolean} [accents]
             * @returns {*}
             */
            highlight: function (string, keys, accents) {
                string = String(string);

                var searchString =
                        (accents && this.helper.removeAccent.call(this, string)) || string,
                    matches = [];

                if (!Array.isArray(keys)) {
                    keys = [keys];
                }

                keys.sort(function (a, b) {
                    return b.length - a.length;
                });

                // Make sure the '|' join will be safe!
                for (var i = keys.length - 1; i >= 0; i--) {
                    if (keys[i].trim() === "") {
                        keys.splice(i, 1);
                        continue;
                    }
                    keys[i] = keys[i].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                }

                searchString.replace(
                    new RegExp("(?:" + keys.join("|") + ")(?!([^<]+)?>)", "gi"),
                    function (match, index, offset) {
                        matches.push({
                            offset: offset,
                            length: match.length
                        });
                    }
                );

                for (var i = matches.length - 1; i >= 0; i--) {
                    string = this.helper.replaceAt(
                        string,
                        matches[i].offset,
                        matches[i].length,
                        "<strong>" +
                        string.substr(matches[i].offset, matches[i].length) +
                        "</strong>"
                    );
                }

                return string;
            },

            /**
             * Get caret position, used for right arrow navigation
             * when hint option is enabled
             * @param {Node} element
             * @returns {Number} Caret position
             */
            getCaret: function (element) {
                var caretPos = 0;

                if (element.selectionStart) {
                    // Input & Textarea
                    return element.selectionStart;
                } else if (document.selection) {
                    var r = document.selection.createRange();
                    if (r === null) {
                        return caretPos;
                    }

                    var re = element.createTextRange(),
                        rc = re.duplicate();
                    re.moveToBookmark(r.getBookmark());
                    rc.setEndPoint("EndToStart", re);

                    caretPos = rc.text.length;
                } else if (window.getSelection) {
                    // Contenteditable
                    var sel = window.getSelection();
                    if (sel.rangeCount) {
                        var range = sel.getRangeAt(0);
                        if (range.commonAncestorContainer.parentNode == element) {
                            caretPos = range.endOffset;
                        }
                    }
                }
                return caretPos;
            },

            /**
             * For [contenteditable] typeahead node only,
             * when an item is clicked set the cursor at the end
             * @param {Node} element
             */
            setCaretAtEnd: function (element) {
                if (
                    typeof window.getSelection !== "undefined" &&
                    typeof document.createRange !== "undefined"
                ) {
                    var range = document.createRange();
                    range.selectNodeContents(element);
                    range.collapse(false);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (typeof document.body.createTextRange !== "undefined") {
                    var textRange = document.body.createTextRange();
                    textRange.moveToElementText(element);
                    textRange.collapse(false);
                    textRange.select();
                }
            },

            /**
             * Clean strings from possible XSS (script and iframe tags)
             * @param string
             * @returns {string}
             */
            cleanStringFromScript: function (string) {
                return (
                    (typeof string === "string" &&
                    string.replace(/<\/?(?:script|iframe)\b[^>]*>/gm, "")) ||
                    string
                );
            },

            /**
             * Executes an anonymous function or a string reached from the window scope.
             *
             * @example
             * Note: These examples works with every configuration callbacks
             *
             * // An anonymous function inside the "onInit" option
             * onInit: function() { console.log(':D'); };
             *
             * // myFunction() located on window.coucou scope
             * onInit: 'window.coucou.myFunction'
             *
             * // myFunction(a,b) located on window.coucou scope passing 2 parameters
             * onInit: ['window.coucou.myFunction', [':D', ':)']];
             *
             * // Anonymous function to execute a local function
             * onInit: function () { myFunction(':D'); }
             *
             * @param {String|Array} callback The function to be called
             * @param {Array} [extraParams] In some cases the function can be called with Extra parameters (onError)
             * @returns {*}
             */
            executeCallback: function (callback, extraParams) {
                if (!callback) {
                    return;
                }

                var _callback;

                if (typeof callback === "function") {
                    _callback = callback;
                } else if (typeof callback === "string" || Array.isArray(callback)) {
                    if (typeof callback === "string") {
                        callback = [callback, []];
                    }

                    _callback = this.helper.namespace.call(this, callback[0], window);

                    if (typeof _callback !== "function") {
                        // {debug}
                        if (this.options.debug) {
                            _debug.log({
                                node: this.selector,
                                function: "executeCallback()",
                                arguments: JSON.stringify(callback),
                                message: 'WARNING - Invalid callback function"'
                            });

                            _debug.print();
                        }
                        // {/debug}
                        return;
                    }
                }

                return _callback.apply(
                    this,
                    (callback[1] || []).concat(extraParams ? extraParams : [])
                );
            },

            namespace: function (string, object, method, defaultValue) {
                if (typeof string !== "string" || string === "") {
                    // {debug}
                    if (this.options.debug) {
                        _debug.log({
                            node: this.options.input || this.selector,
                            function: "helper.namespace()",
                            arguments: string,
                            message: 'ERROR - Missing string"'
                        });

                        _debug.print();
                    }
                    // {/debug}
                    return false;
                }

                var value = typeof defaultValue !== "undefined"
                    ? defaultValue
                    : undefined;

                // Exit before looping if the string doesn't contain an object reference
                if (!~string.indexOf(".")) {
                    return object[string] || value;
                }

                var parts = string.split("."),
                    parent = object || window,
                    method = method || "get",
                    currentPart = "";

                for (var i = 0, length = parts.length; i < length; i++) {
                    currentPart = parts[i];

                    if (typeof parent[currentPart] === "undefined") {
                        if (~["get", "delete"].indexOf(method)) {
                            return typeof defaultValue !== "undefined"
                                ? defaultValue
                                : undefined;
                        }
                        parent[currentPart] = {};
                    }

                    if (~["set", "create", "delete"].indexOf(method)) {
                        if (i === length - 1) {
                            if (method === "set" || method === "create") {
                                parent[currentPart] = value;
                            } else {
                                delete parent[currentPart];
                                return true;
                            }
                        }
                    }

                    parent = parent[currentPart];
                }
                return parent;
            },

            typeWatch: (function () {
                var timer = 0;
                return function (callback, ms) {
                    clearTimeout(timer);
                    timer = setTimeout(callback, ms);
                };
            })()
        }
    };

    /**
     * @public
     * Implement Typeahead on the selected input node.
     *
     * @param {Object} options
     * @return {Object} Modified DOM element
     */
    $.fn.typeahead = $.typeahead = function (options) {
        return _api.typeahead(this, options);
    };

    /**
     * @private
     * API to handles Typeahead methods via jQuery.
     */
    var _api = {
        /**
         * Enable Typeahead
         *
         * @param {Object} node
         * @param {Object} options
         * @returns {*}
         */
        typeahead: function (node, options) {
            if (!options || !options.source || typeof options.source !== "object") {
                // {debug}
                _debug.log({
                    node: node.selector || (options && options.input),
                    function: "$.typeahead()",
                    arguments: JSON.stringify((options && options.source) || ""),
                    message: 'Undefined "options" or "options.source" or invalid source type - Typeahead dropped'
                });

                _debug.print();
                // {/debug}

                return;
            }

            if (typeof node === "function") {
                if (!options.input) {
                    // {debug}
                    _debug.log({
                        node: node.selector,
                        function: "$.typeahead()",
                        //'arguments': JSON.stringify(options),
                        message: 'Undefined "options.input" - Typeahead dropped'
                    });

                    _debug.print();
                    // {/debug}

                    return;
                }

                node = $(options.input);
            }
            if (!node.length) {
                // {debug}
                _debug.log({
                    node: node.selector,
                    function: "$.typeahead()",
                    arguments: JSON.stringify(options.input),
                    message: "Unable to find jQuery input element - Typeahead dropped"
                });

                _debug.print();
                // {/debug}

                return;
            }
            if (typeof node[0].value === "undefined") {
                node[0].value = node.text();
            }

            // #270 Forcing node.selector, the property was deleted from jQuery3
            // In case of multiple init, each of the instances needs it's own selector!
            if (node.length === 1) {
                node[0].selector =
                    node.selector || options.input || node[0].nodeName.toLowerCase();

                /*jshint boss:true */
                return (window.Typeahead[node[0].selector] = new Typeahead(node, options));
            } else {
                var instances = {},
                    instanceName;

                for (var i = 0, ii = node.length; i < ii; ++i) {
                    instanceName = node[i].nodeName.toLowerCase();
                    if (typeof instances[instanceName] !== "undefined") {
                        instanceName += i;
                    }
                    node[i].selector = instanceName;

                    window.Typeahead[instanceName] = instances[instanceName] = new Typeahead(node.eq(i), options);
                }

                return instances;
            }
        }
    };

    // {debug}
    var _debug = {
        table: {},
        log: function (debugObject) {
            if (!debugObject.message || typeof debugObject.message !== "string") {
                return;
            }

            this.table[debugObject.message] = $.extend(
                {
                    node: "",
                    function: "",
                    arguments: ""
                },
                debugObject
            );
        },
        print: function () {
            if (
                Typeahead.prototype.helper.isEmpty(this.table) || !console || !console.table
            ) {
                return;
            }

            if (console.group !== undefined || console.table !== undefined) {
                console.groupCollapsed("--- jQuery Typeahead Debug ---");
                console.table(this.table);
                console.groupEnd();
            }

            this.table = {};
        }
    };
    _debug.log({
        message: "WARNING - You are using the DEBUG version. Use /dist/jquery.typeahead.min.js in production."
    });

    _debug.print();
    // {/debug}

    // IE8 Shims
    window.console = window.console || {
            log: function () {
            }
        };

    if (!Array.isArray) {
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
        };
    }

    if (!("trim" in String.prototype)) {
        String.prototype.trim = function () {
            return this.replace(/^\s+/, "").replace(/\s+$/, "");
        };
    }
    if (!("indexOf" in Array.prototype)) {
        Array.prototype.indexOf = function (find, i /*opt*/) {
            if (i === undefined) i = 0;
            if (i < 0) i += this.length;
            if (i < 0) i = 0;
            for (var n = this.length; i < n; i++)
                if (i in this && this[i] === find) return i;
            return -1;
        };
    }
    if (!Object.keys) {
        Object.keys = function (obj) {
            var keys = [],
                k;
            for (k in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, k)) {
                    keys.push(k);
                }
            }
            return keys;
        };
    }

    return Typeahead;
});

;