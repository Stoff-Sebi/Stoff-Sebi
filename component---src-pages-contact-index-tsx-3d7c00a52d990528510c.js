"use strict";(self.webpackChunksebastian_stoff_portfolio=self.webpackChunksebastian_stoff_portfolio||[]).push([[563],{7723:function(e,t,r){var n=r(7294),o=r(4637);t.Z=function(e){return n.createElement(o.Z,{keywords:function(e){if(!e.person.keywords.keyword[0])return null;var t=e.person.keywords.keyword.reduce((function(e,t){return e.push(t.content),e}),[]);return 0===t.length?null:t}(e.orcidRoot)},n.createElement("meta",{property:"schema_org:sameAs",content:e.orcidRoot["orcid-identifier"].uri}))}},3184:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(7190),o=r(8014),l=r(4694),a=r(5697),i=r.n(a),c=r(7294);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=b(t.slice(0,n)),l=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[o]=l,e}),{})}var g=!1;try{g=!0}catch(k){}function h(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:l.Qc.icon?l.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function v(e){var t=e.forwardedRef,r=m(e,["forwardedRef"]),n=r.icon,o=r.mask,a=r.symbol,i=r.className,c=r.title,s=r.titleId,f=h(n),b=O("classes",[].concat(y(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,l=e.inverse,a=e.border,i=e.listItem,c=e.flip,s=e.size,f=e.rotation,p=e.pull,m=(u(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":l,"fa-border":a,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(s),null!=s),u(t,"fa-rotate-".concat(f),null!=f&&0!==f),u(t,"fa-pull-".concat(p),null!=p),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),y(i.split(" ")))),d=O("transform","string"==typeof r.transform?l.Qc.transform(r.transform):r.transform),w=O("mask",h(o)),k=(0,l.qv)(f,p({},b,{},d,{},w,{symbol:a,title:c,titleId:s}));if(!k)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var x=k.abstract,j={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(j[e]=r[e])})),E(x[0],j)}v.displayName="FontAwesomeIcon",v.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=d(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),a=n.style,i=void 0===a?{}:a,c=m(n,["style"]);return l.attrs.style=p({},l.attrs.style,{},i),t.apply(void 0,[r.tag,p({},l.attrs,{},c)].concat(y(o)))}.bind(null,c.createElement),w=function(e){var t={height:30,width:30,marginRight:".125em",display:"inline-block",color:"black"},r={fontSize:"1.125em"};return c.createElement("div",{className:"mt-1"},e.mail&&c.createElement("a",{"aria-label":"Write me an e-mail",style:t,href:"mailTo:"+e.mail},c.createElement(v,{icon:o.FU$,style:r})),c.createElement("a",{rel:"noopener",style:t,href:e.orcidURL,target:"_blank","aria-label":"See my ORCID record."},c.createElement(v,{icon:n.Fgt,style:r})),e.researchURLs.map((function(e,o){return e.url.value.toString().includes("github")?c.createElement("a",{"aria-label":"See my code on github",rel:"noopener",style:t,key:o,href:e.url.value.toString(),target:"_blank"},c.createElement(v,{icon:n.zhw,style:r})):e.url.value.toString().includes("npmjs.com")?c.createElement("a",{"aria-label":"Find my javascript code on npmjs.com",rel:"noopener",style:t,key:o,href:e.url.value.toString(),target:"_blank"},c.createElement(v,{icon:n.xDz,style:r})):e.url.value.toString().includes("twitter.com")?c.createElement("a",{"aria-label":"Connect with me on twitter.com",rel:"noopener",style:t,key:o,href:e.url.value.toString(),target:"_blank"},c.createElement(v,{icon:n.mdU,style:r})):e.url.value.toString().includes("linkedin.com")?c.createElement("a",{"aria-label":"Connect with me on linkedin.com",rel:"noopener",style:t,key:o,href:e.url.value.toString(),target:"_blank"},c.createElement(v,{icon:n.D9H,style:r})):void 0})))}},6961:function(e,t,r){r.r(t);var n=r(7294),o=r(3823),l=r(7723),a=r(3184),i=r(4679);t.default=function(e){return n.createElement(o.Z,{orcidRoot:e.pageContext.persOrcid,headComponent:n.createElement(l.Z,{orcidRoot:e.pageContext.persOrcid}),nav:n.createElement(i.Z,{orcidRoot:e.pageContext.persOrcid})},n.createElement("h1",null,"Contact"),n.createElement("h2",{className:"h5 mb-4",style:{fontWeight:300,fontSize:"1.35em"}},"Email, twitter, linkedIn etc."),n.createElement("hr",null),n.createElement(a.Z,{orcidURL:e.pageContext.persOrcid["orcid-identifier"].uri,researchURLs:e.pageContext.persOrcid.person["researcher-urls"]["researcher-url"],mail:e.pageContext.persOrcid.person.emails.email[0]&&e.pageContext.persOrcid.person.emails.email[0].email}),n.createElement("br",null),e.pageContext.persOrcid.person.emails.email[0]&&e.pageContext.persOrcid.person.emails.email[0].email&&n.createElement("p",null,n.createElement("b",null,"Contact mail:")," ",e.pageContext.persOrcid.person.emails.email[0].email),n.createElement("p",null,n.createElement("b",null,"ORCID:")," ",e.pageContext.persOrcid["orcid-identifier"].uri),n.createElement("ul",null,e.pageContext.persOrcid.person["researcher-urls"]["researcher-url"].map((function(e){return n.createElement("li",null,n.createElement("a",{target:"_blank",href:e.url.value.toString()},e["url-name"]))}))),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-contact-index-tsx-3d7c00a52d990528510c.js.map