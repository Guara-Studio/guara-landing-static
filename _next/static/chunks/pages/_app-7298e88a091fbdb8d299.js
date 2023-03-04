(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{f:function(){return s},F:function(){return a}});var r=n(7294),o=n(9008),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),a=function(){return(0,r.useContext)(i)},c=["light","dark"],u="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,o=void 0!==n&&n,a=e.enableSystem,s=void 0===a||a,v=e.enableColorScheme,h=void 0===v||v,p=e.storageKey,y=void 0===p?"theme":p,b=e.themes,g=void 0===b?["light","dark"]:b,w=e.defaultTheme,O=void 0===w?s?"system":"light":w,E=e.attribute,T=void 0===E?"data-theme":E,_=e.value,k=e.children,S=(0,r.useState)((function(){return d(y,O)})),j=S[0],C=S[1],P=(0,r.useState)((function(){return d(y)})),x=P[0],L=P[1],N=_?Object.values(_):g,I=(0,r.useCallback)((function(e){var n=f(e);L(n),"system"!==j||t||D(n,!1)}),[j,t]),M=(0,r.useRef)(I);M.current=I;var D=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==_?void 0:_[e])||e,i=o&&n?m():null;if(t)try{localStorage.setItem(y,e)}catch(e){}if("system"===e&&s){var a=f();r=(null==_?void 0:_[a])||a}if(n){var c,u=document.documentElement;"class"===T?((c=u.classList).remove.apply(c,N),u.classList.add(r)):u.setAttribute(T,r),null==i||i()}}),[]);(0,r.useEffect)((function(){var e=function(){return M.current.apply(M,[].slice.call(arguments))},t=window.matchMedia(u);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var H=(0,r.useCallback)((function(e){t?D(e,!0,!1):D(e),C(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===y&&H(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[H]),(0,r.useEffect)((function(){if(h){var e=t&&c.includes(t)?t:j&&c.includes(j)?j:"system"===j&&x||null;document.documentElement.style.setProperty("color-scheme",e)}}),[h,j,x,t]),r.createElement(i.Provider,{value:{theme:j,setTheme:H,forcedTheme:t,resolvedTheme:"system"===j?x:j,themes:s?[].concat(g,["system"]):g,systemTheme:s?x:void 0}},r.createElement(l,{forcedTheme:t,storageKey:y,attribute:T,value:_,enableSystem:s,defaultTheme:O,attrs:N}),k)},l=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,i=e.attribute,a=e.enableSystem,c=e.defaultTheme,s=e.value,l="class"===i?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",d=function(e,t){e=(null==s?void 0:s[e])||e;var n=t?e:"'"+e+"'";return"class"===i?"d.add("+n+")":"d.setAttribute('"+i+"', "+n+")"},m="system"===c;return r.createElement(o.default,null,r.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+l+d(t)+"}()"}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+l+"var e=localStorage.getItem('"+n+"');"+(m?"":d(c)+";")+'if("system"===e||(!e&&'+m+')){var t="'+u+'",m=window.matchMedia(t);m.media!==t||m.matches?'+d("dark")+":"+d("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+d(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+l+'var e=localStorage.getItem("'+n+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+d(s?"x[e]":"e",!0)+"}else{"+d(c)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),d=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},f=function(e){return e||(e=window.matchMedia(u)),e.matches?"dark":"light"}},229:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return u}});var o=n(5893),i=n(425);n(1507);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(i.f,{attribute:"class",children:(0,o.jsx)(t,c({},n))})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(229)}])},1507:function(){},9008:function(e,t,n){e.exports=n(639)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);