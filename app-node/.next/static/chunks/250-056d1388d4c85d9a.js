(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,u=n(7273).Z,a=r(n(7294)),l=n(6273),f=n(2725),c=n(3462),i=n(1018),s=n(7190),p=n(1210),d=n(8684),v={};function y(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var b=a.default.forwardRef((function(e,t){var n,r=e.href,b=e.as,h=e.children,g=e.prefetch,O=e.passHref,j=e.replace,C=e.shallow,_=e.scroll,m=e.locale,M=e.onClick,x=e.onMouseEnter,P=e.onTouchStart,L=e.legacyBehavior,R=void 0===L?!0!==Boolean(!1):L,w=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=h,!R||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var E=!1!==g,k=a.default.useContext(c.RouterContext),S=a.default.useContext(i.AppRouterContext);S&&(k=S);var T,D=a.default.useMemo((function(){var e=o(l.resolveHref(k,r,!0),2),t=e[0],n=e[1];return{href:t,as:b?l.resolveHref(k,b):n||t}}),[k,r,b]),I=D.href,Z=D.as,U=a.default.useRef(I),B=a.default.useRef(Z);R&&(T=a.default.Children.only(n));var N=R?T&&"object"===typeof T&&T.ref:t,A=o(s.useIntersection({rootMargin:"200px"}),3),H=A[0],K=A[1],G=A[2],q=a.default.useCallback((function(e){B.current===Z&&U.current===I||(G(),B.current=Z,U.current=I),H(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[Z,N,I,G,H]);a.default.useEffect((function(){var e=K&&E&&l.isLocalURL(I),t="undefined"!==typeof m?m:k&&k.locale,n=v[I+"%"+Z+(t?"%"+t:"")];e&&!n&&y(k,I,Z,{locale:t})}),[Z,I,K,m,E,k]);var z={ref:q,onClick:function(e){R||"function"!==typeof M||M(e),R&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,f,c,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var p=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:c,scroll:f}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};i?a.default.startTransition(p):p()}}(e,k,I,Z,j,C,_,m,Boolean(S),E)},onMouseEnter:function(e){R||"function"!==typeof x||x(e),R&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!E&&S||l.isLocalURL(I)&&y(k,I,Z,{priority:!0})},onTouchStart:function(e){R||"function"!==typeof P||P(e),R&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!E&&S||l.isLocalURL(I)&&y(k,I,Z,{priority:!0})}};if(!R||O||"a"===T.type&&!("href"in T.props)){var F="undefined"!==typeof m?m:k&&k.locale,J=k&&k.isLocaleDomain&&p.getDomainLocale(Z,F,k.locales,k.domainLocales);z.href=J||d.addBasePath(f.addLocale(Z,F,k&&k.defaultLocale))}return R?a.default.cloneElement(T,z):a.default.createElement("a",Object.assign({},w,z),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=o(r.useState(!1),2),s=i[0],p=i[1],d=o(r.useState(null),2),v=d[0],y=d[1];r.useEffect((function(){if(a){if(c||s)return;if(v&&v.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:r},f.push(n),l.set(n,t),t}(n),r=o.id,u=o.observer,a=o.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(o)}}}),[v,c,n,t,s]);var b=r.useCallback((function(){p(!1)}),[]);return[y,s,b]};var r=n(7294),u=n(9311),a="function"===typeof IntersectionObserver,l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=o.default.createContext(null);t.TemplateContext=l},1664:function(e,t,n){e.exports=n(8418)},872:function(e,t,n){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}function r(){return o.apply(this,arguments)}n.d(t,{Z:function(){return r}})},9396:function(e,t,n){"use strict";function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return o}})}}]);