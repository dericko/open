(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{154:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.default=void 0;var i,o=n(r(7)),a=n(r(35)),s=n(r(75)),u=n(r(76)),l=n(r(0)),c=n(r(4)),d=function(e){var t=(0,u.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=d(e),r=t.fluid?t.fluid.src:t.fixed.src;return f[r]||!1},T=new WeakMap;var E=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(T.has(e.target)){var t=T.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),T.delete(e.target),t())}})},{rootMargin:"200px"})),i);return r&&(r.observe(e),T.set(e,t)),function(){r.unobserve(e),T.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+u+r+i+t+a+o+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=l.default.forwardRef(function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,o=e.style,a=e.onLoad,c=e.onError,d=e.nativeLazyLoadSupported,f=e.loading,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),T={};return d&&(T.loading=f),l.default.createElement("img",(0,u.default)({sizes:r,srcSet:n,src:i},p,{onLoad:a,onError:c,ref:t},T,{style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});A.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var S=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,i=!1,o=t.fadeIn,s=!1,u=p(t);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(n=!0,s=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var c=!(t.critical&&!t.fadeIn);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:o,hasNoScript:c,seenBefore:u,nativeLazyLoadSupported:s},r.imageRef=l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=E(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=t.fluid?t.fluid.src:t.fixed.src,f[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,o=void 0===i?{}:i,a=e.imgStyle,s=void 0===a?{}:a,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,T=e.fluid,E=e.fixed,S=e.backgroundColor,y=e.durationFadeIn,m=e.Tag,g=e.itemProp,b=(e.critical,d(this.props).loading);var v=this.state.nativeLazyLoadSupported,_=this.state.imgLoaded||!1===this.state.fadeIn,R=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,u.default)({opacity:_?1:0,transition:R?"opacity "+y+"ms":"none"},s),w="boolean"==typeof S?"lightgray":S,L={transitionDelay:y+"ms"},P=(0,u.default)({opacity:this.state.imgLoaded?0:1},R&&L,s,f),I={title:t,alt:this.state.isVisible?"":r,style:P,className:p};if(T){var M=T;return l.default.createElement(m,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(m,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),w&&l.default.createElement(m,{title:t,style:(0,u.default)({backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&L)}),M.base64&&l.default.createElement(A,(0,u.default)({src:M.base64},I)),M.tracedSVG&&l.default.createElement(A,(0,u.default)({src:M.tracedSVG},I)),this.state.isVisible&&l.default.createElement("picture",null,M.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),l.default.createElement(A,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:g,nativeLazyLoadSupported:v,loading:b})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,u.default)({alt:r,title:t,loading:b},M))}}))}if(E){var C=E,N=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},o);return"inherit"===o.display&&delete N.display,l.default.createElement(m,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},w&&l.default.createElement(m,{title:t,style:(0,u.default)({backgroundColor:w,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},R&&L)}),C.base64&&l.default.createElement(A,(0,u.default)({src:C.base64},I)),C.tracedSVG&&l.default.createElement(A,(0,u.default)({src:C.tracedSVG},I)),this.state.isVisible&&l.default.createElement("picture",null,C.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),l.default.createElement(A,{alt:r,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:g,nativeLazyLoadSupported:v,loading:b})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,u.default)({alt:r,title:t,loading:b},C))}}))}return null},t}(l.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),m=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:y,sizes:m,fixed:y,fluid:m,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var g=S;t.default=g},157:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=d(r(0)),a=d(r(4)),s=d(r(160)),u=d(r(163)),l=r(164),c=r(158);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var p,T,E,h=(0,s.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)(function(){return null}),A=(p=h,E=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,i=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return n({},i,((t={})[r.type]=[].concat(i[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,i=e.child,o=e.newProps,a=e.newChildProps,s=e.nestedChildren;switch(i.type){case c.TAG_NAMES.TITLE:return n({},o,((t={})[i.type]=s,t.titleAttributes=n({},a),t));case c.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},a)});case c.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},a)})}return n({},o,((r={})[i.type]=n({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach(function(t){var i;r=n({},r,((i={})[t]=e[t],i))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,o=i.children,a=f(i,["children"]),s=(0,l.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(e,o),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),i=n({},r);return t&&(i=this.mapChildrenToProps(t,i)),o.default.createElement(p,i)},i(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=p.peek,T.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},158:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce(function(e,t){return e[n[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},160:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=r(0),o=n(i),a=n(r(161)),s=n(r(162));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u=[],l=void 0;function c(){l=e(u.map(function(e){return e.props})),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return l},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){u.push(this),c()},t.prototype.componentDidUpdate=function(){c()},t.prototype.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},t.prototype.render=function(){return o.createElement(n,this.props)},t}(i.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",d.canUseDOM=a.canUseDOM,d}}},161:function(e,t,r){var n;!function(){"use strict";var i=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()},162:function(e,t){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var l=o[u];if(!s(l))return!1;var c=e[l],d=t[l];if(!1===(i=r?r.call(n,c,d,l):void 0)||void 0===i&&c!==d)return!1}return!0}},163:function(e,t,r){"use strict";var n=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,u,l,c=n(t),d=n(r);if(c&&d){if((u=t.length)!=r.length)return!1;for(s=u;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(c!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,E=r instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==r.toString();var h=i(t);if((u=h.length)!==i(r).length)return!1;for(s=u;0!=s--;)if(!o.call(r,h[s]))return!1;if(a&&t instanceof Element&&r instanceof Element)return t===r;for(s=u;0!=s--;)if(!("_owner"===(l=h[s])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},164:function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=u(r(0)),a=u(r(55)),s=r(158);function u(e){return e&&e.__esModule?e:{default:e}}var l,c=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),r=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return t});var n=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t},[])},E=function(e,t,r){var i={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var n={};r.filter(function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var u=o[a],l=u.toLowerCase();-1===t.indexOf(l)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(u)||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return i[r]||(i[r]={}),n[r]||(n[r]={}),!i[r][c]&&(n[r][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(n),u=0;u<o.length;u++){var l=o[u],c=(0,a.default)({},i[l],n[l]);i[l]=c}return e},[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},A=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout(function(){A(e)},0)}),S=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;O(s.TAG_NAMES.BODY,n),O(s.TAG_NAMES.HTML,i),R(f,p);var T={baseTag:w(s.TAG_NAMES.BASE,r),linkTags:w(s.TAG_NAMES.LINK,o),metaTags:w(s.TAG_NAMES.META,a),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,u),scriptTags:w(s.TAG_NAMES.SCRIPT,c),styleTags:w(s.TAG_NAMES.STYLE,d)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(h[e]=T[e].oldTags)}),t&&t(),l(e,E,h)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),O(s.TAG_NAMES.TITLE,t)},O=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===i.indexOf(l)&&i.push(l);var d=o.indexOf(l);-1!==d&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},w=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),i.some(function(e,t){return a=t,r.isEqualNode(e)})?i.splice(a,1):o.push(r)}),i.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return r.appendChild(e)}),{oldTags:i,newTags:o}},L=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t},t)},I=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,i=P(r,n),[o.default.createElement(s.TAG_NAMES.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=L(r),o=_(t);return i?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+i+">"+c(o,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+c(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,i=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach(function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]}),o.default.createElement(e,i)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var i=Object.keys(n).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var i=void 0===n[t]?t:t+'="'+c(n[t],r)+'"';return e?e+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+e+">")},"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t},t)},t.handleClientStateChange=function(e){b&&m(b),e.defer?b=y(function(){v(e,function(){b=null})}):(v(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:I(s.TAG_NAMES.BASE,t,n),bodyAttributes:I(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:I(s.ATTRIBUTE_NAMES.HTML,i,n),link:I(s.TAG_NAMES.LINK,o,n),meta:I(s.TAG_NAMES.META,a,n),noscript:I(s.TAG_NAMES.NOSCRIPT,u,n),script:I(s.TAG_NAMES.SCRIPT,l,n),style:I(s.TAG_NAMES.STYLE,c,n),title:I(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=g}).call(this,r(74))}}]);
//# sourceMappingURL=1-4c6614e3652f0d7c06b5.js.map