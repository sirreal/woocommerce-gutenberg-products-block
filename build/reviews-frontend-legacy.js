!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=31)}([function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){e.exports=r(23)()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(21);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(22),o=r(4);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){function r(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}}},function(e,t){!function(){e.exports=this.wp.a11y}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.ReactDOM}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,r){function n(e){for(var t,r,n=[],o=0;o<rowCut.length;o++)(t=rowCut.substring(o).match(/^&[a-z0-9#]+;/))?(r=t[0],n.push(r),o+=r.length-1):n.push(rowCut[o]);return n}e.exports&&(e.exports=function(e,t){for(var r,o,i,a,c,s=(t=t||{}).limit||100,l=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,p=t.suffix||"...",f=t.moreLink||"",d=t.moreText||"»",v=t.preserveWhiteSpace||!1,g=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),b=0,h=[],m=!1,w=0;w<g.length;w++)if(r=g[w],rowCut=v?r:r.replace(/[ ]+/g," "),r.length){var y=n(rowCut);if("<"!==r[0])if(b>=s)r="";else if(b+y.length>=s){if(" "===y[(o=s-b)-1])for(;o&&" "===y[(o-=1)-1];);else i=y.slice(o).indexOf(" "),u||(-1!==i?o+=i:o=r.length);r=y.slice(0,o).join("")+p,f&&(r+='<a href="'+f+'" style="display:inline">'+d+"</a>"),b=s,m=!0}else b+=y.length;else if(l){if(b>=s)if(c=(a=r.match(/[a-zA-Z]+/))?a[0]:"")if("</"!==r.substring(0,2))h.push(c),r="";else{for(;h[h.length-1]!==c&&h.length;)h.pop();h.length&&(r=""),h.pop()}else r=""}else r="";g[w]=r}return{html:g.join("\n").replace(/\n/g,""),more:m}})},function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t,r){"use strict";var n=r(24);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,r){"use strict";r.r(t);var n=r(13),o=r.n(n),i=r(3),a=r.n(i),c=r(17),s=r(7),l=r.n(s),u=r(8),p=r.n(u),f=r(4),d=r.n(f),v=r(9),g=r.n(v),b=r(10),h=r.n(b),m=r(6),w=r.n(m),y=(r(5),r(2)),O=r.n(y),R=r(1),_=r(0),j=(Object(_.getSetting)("currentUserIsAdmin",!1),Object(_.getSetting)("reviewRatingsEnabled",!0)),k=Object(_.getSetting)("showAvatars",!0),E=(Object(_.getSetting)("max_columns",6),Object(_.getSetting)("min_columns",1),Object(_.getSetting)("default_columns",3),Object(_.getSetting)("max_rows",6),Object(_.getSetting)("min_rows",1),Object(_.getSetting)("default_rows",3),Object(_.getSetting)("min_height",500),Object(_.getSetting)("default_height",500),Object(_.getSetting)("placeholderImgSrc",""),Object(_.getSetting)("thumbnail_size",300),Object(_.getSetting)("isLargeCatalog"),Object(_.getSetting)("limitTags"),Object(_.getSetting)("hasProducts",!0),Object(_.getSetting)("hasTags",!0),Object(_.getSetting)("homeUrl",""),Object(_.getSetting)("couponsEnabled",!0),Object(_.getSetting)("shippingEnabled",!0),Object(_.getSetting)("taxesEnabled",!0),Object(_.getSetting)("displayItemizedTaxes",!1),Object(_.getSetting)("displayShopPricesIncludingTax",!1),Object(_.getSetting)("displayCartPricesIncludingTax",!1),Object(_.getSetting)("productCount",0),Object(_.getSetting)("attributes",[]),Object(_.getSetting)("isShippingCalculatorEnabled",!0),Object(_.getSetting)("isShippingCostHidden",!1),Object(_.getSetting)("woocommerceBlocksPhase",1),Object(_.getSetting)("wcBlocksAssetUrl","")),S=(Object(_.getSetting)("shippingCountries",{}),Object(_.getSetting)("allowedCountries",{}),Object(_.getSetting)("shippingStates",{}),Object(_.getSetting)("allowedStates",{}),Object(_.getSetting)("shippingMethodsExist",!1),Object(_.getSetting)("checkoutShowLoginReminder",!0),{id:0,title:"",permalink:""}),x=Object(_.getSetting)("storePages",{shop:S,cart:S,checkout:S,privacy:S,terms:S}),P=(x.shop.permalink,x.checkout.id,x.checkout.permalink,x.privacy.permalink,x.privacy.title,x.terms.permalink,x.terms.title,x.cart.id,x.cart.permalink,Object(_.getSetting)("checkoutAllowsGuest",!1),Object(_.getSetting)("checkoutAllowsSignup",!1),r(16),function(e){var t=e.imageUrl,r=void 0===t?"".concat(E,"img/block-error.svg"):t,n=e.header,o=void 0===n?Object(R.__)("Oops!","woo-gutenberg-products-block"):n,i=e.text,a=void 0===i?Object(R.__)("There was an error loading the content.","woo-gutenberg-products-block"):i,c=e.errorMessage,s=e.errorMessagePrefix,l=void 0===s?Object(R.__)("Error:","woo-gutenberg-products-block"):s;return React.createElement("div",{className:"wc-block-error"},r&&React.createElement("img",{className:"wc-block-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content"},o&&React.createElement("p",{className:"wc-block-error__header"},o),a&&React.createElement("p",{className:"wc-block-error__text"},a),c&&React.createElement("p",{className:"wc-block-error__message"},l?l+" ":"",c)))});r(25);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w()(e);if(t){var o=w()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}var C=function(e){g()(r,e);var t=T(r);function r(){var e;l()(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),a()(d()(e),"state",{errorMessage:"",hasError:!1}),e}return p()(r,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,i=e.errorMessagePrefix,a=this.state,c=a.errorMessage;return a.hasError?React.createElement(P,{errorMessage:n?c:null,header:t,imageUrl:r,text:o,errorMessagePrefix:i}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:React.createElement(y.Fragment,null,React.createElement("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),r}(y.Component);C.defaultProps={showErrorMessage:!0};var N=C;function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.Block,r=e.selector,n=e.getProps,i=void 0===n?function(){}:n,a=e.getErrorBoundaryProps,s=void 0===a?function(){}:a,l=document.querySelectorAll(r);l.length&&Array.prototype.forEach.call(l,(function(e,r){var n=i(e,r),a=s(e,r),l=D(D({},e.dataset),n.attributes);e.classList.remove("is-loading"),Object(c.render)(React.createElement(N,a,React.createElement(t,o()({},n,{attributes:l}))),e)}))},I=r(15),M=r(18),B=r.n(M),H=r(11),F=r.n(H),U=function(e){return B()({path:"/wc/store/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,i=e.wrapperProps,a=null!=r,c=null!=n;return!a&&c?(t=o||"span",i=W(W({},i),{},{className:F()(i.className,"screen-reader-text")}),React.createElement(t,i,n)):(t=o||y.Fragment,a&&c&&r!==n?React.createElement(t,i,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,i,r))};z.defaultProps={wrapperProps:{}};var q=z,G=(r(30),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return React.createElement("div",{className:"wp-block-button wc-block-load-more"},React.createElement("button",{className:"wp-block-button__link",onClick:t},React.createElement(q,{label:r,screenReaderLabel:n})))});G.defaultProps={label:Object(R.__)("Load more","woo-gutenberg-products-block")};var Y=G,Z=r(35),$=(r(27),Object(Z.withInstanceId)((function(e){var t=e.className,r=e.instanceId,n=e.defaultValue,o=e.label,i=e.onChange,a=e.options,c=e.screenReaderLabel,s=e.readOnly,l=e.value,u="wc-block-sort-select__select-".concat(r);return React.createElement("div",{className:F()("wc-block-sort-select",t)},React.createElement(q,{label:o,screenReaderLabel:c,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label",htmlFor:u}}),React.createElement("select",{id:u,className:"wc-block-sort-select__select",defaultValue:n,onChange:i,readOnly:s,value:l},a.map((function(e){return React.createElement("option",{key:e.key,value:e.key},e.label)}))))}))),J=(r(26),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return React.createElement($,{className:"wc-block-review-sort-select",defaultValue:t,label:Object(R.__)("Order by","woo-gutenberg-products-block"),onChange:r,options:[{key:"most-recent",label:Object(R.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(R.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(R.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:n,screenReaderLabel:Object(R.__)("Order reviews by","woo-gutenberg-products-block"),value:o})}),K=r(19),Q=r.n(K),X=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=Q()(e,{suffix:r,limit:t});return n.html},ee=function(e,t,r,n){var o=te(e,t,r);return X(e,o-n.length,n)},te=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=X(e,n.middle),n=re(n,t.clientHeight,r);return n.middle},re=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e};function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w()(e);if(t){var o=w()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}var oe=function(e){g()(r,e);var t=ne(r);function r(e){var n;return l()(this,r),(n=t.apply(this,arguments)).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},n.reviewSummary=Object(y.createRef)(),n.reviewContent=Object(y.createRef)(),n.getButton=n.getButton.bind(d()(n)),n.onClick=n.onClick.bind(d()(n)),n}return p()(r,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:ee(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,i=e?n:o;if(i)return O.a.createElement("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},i)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,i=t.isExpanded;return r?!1===o?O.a.createElement("div",{className:e},O.a.createElement("div",{ref:this.reviewContent},r)):O.a.createElement("div",{className:e},(!i||null===o)&&O.a.createElement("div",{ref:this.reviewSummary,"aria-hidden":i,dangerouslySetInnerHTML:{__html:n}}),(i||null===o)&&O.a.createElement("div",{ref:this.reviewContent,"aria-hidden":!i},r),this.getButton()):null}}]),r}(y.Component);oe.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(R.__)("Read more","woo-gutenberg-products-block"),lessText:Object(R.__)("Read less","woo-gutenberg-products-block"),className:"read-more-content"};var ie=oe;r(29);var ae=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,i=t.showReviewDate,a=t.showReviewerName,c=t.showReviewImage,s=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,p=n.rating,f=!Object.keys(n).length>0,d=Number.isFinite(p)&&s;return React.createElement("li",{className:F()("wc-block-review-list-item__item",{"is-loading":f}),"aria-hidden":f},(u||i||a||c||d)&&React.createElement("div",{className:"wc-block-review-list-item__info"},c&&function(e,t,r){var n,o;return r||!e?React.createElement("div",{className:"wc-block-review-list-item__image",width:"48",height:"48"}):React.createElement("div",{className:"wc-block-review-list-item__image"},"product"===t?React.createElement("img",{"aria-hidden":"true",alt:(null===(n=e.product_image)||void 0===n?void 0:n.alt)||"",src:(null===(o=e.product_image)||void 0===o?void 0:o.src)||"",className:"wc-block-review-list-item__image",width:"48",height:"48"}):React.createElement("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x",className:"wc-block-review-list-item__image",width:"48",height:"48"}),e.verified&&React.createElement("div",{className:"wc-block-review-list-item__verified",title:Object(R.__)("Verified buyer","woo-gutenberg-products-block")},Object(R.__)("Verified buyer","woo-gutenberg-products-block")))}(n,o,f),(u||a||d||i)&&React.createElement("div",{className:"wc-block-review-list-item__meta"},d&&function(e){var t=e.rating,r={width:t/5*100+"%"};return React.createElement("div",{className:"wc-block-review-list-item__rating"},React.createElement("div",{className:"wc-block-review-list-item__rating__stars",role:"img"},React.createElement("span",{style:r},Object(R.sprintf)(Object(R.__)("Rated %f out of 5","woo-gutenberg-products-block"),t))))}(n),u&&function(e){return React.createElement("div",{className:"wc-block-review-list-item__product"},React.createElement("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),a&&function(e){var t=e.reviewer,r=void 0===t?"":t;return React.createElement("div",{className:"wc-block-review-list-item__author"},r)}(n),i&&function(e){var t=e.date_created,r=e.formatted_date_created;return React.createElement("time",{className:"wc-block-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return React.createElement(ie,{maxLines:10,moreText:Object(R.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(R.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text"},React.createElement("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(28);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=function(e){var t=e.attributes,r=e.reviews,n=(k||"product"===t.imageType)&&t.showReviewImage,o=j&&t.showReviewRating,i=se(se({},t),{},{showReviewImage:n,showReviewRating:o});return React.createElement("ul",{className:"wc-block-review-list"},0===r.length?React.createElement(ae,{attributes:i}):r.map((function(e,t){return React.createElement(ae,{key:e.id||t,attributes:i,review:e})})))},ue=r(12),pe=r.n(ue),fe=r(14),de=r.n(fe),ve=r(20),ge=r.n(ve),be=function(){var e=de()(pe.a.mark((function e(t){var r;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w()(e);if(t){var o=w()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}var me=function(e){var t=function(t){g()(n,t);var r=he(n);function n(){var e;l()(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e=r.call.apply(r,[this].concat(o)),a()(d()(e),"isPreview",!!e.props.attributes.previewReviews),a()(d()(e),"delayedAppendReviews",e.props.delayFunction(e.appendReviews)),a()(d()(e),"state",{error:null,loading:!0,reviews:e.isPreview?e.props.attributes.previewReviews:[],totalReviews:e.isPreview?e.props.attributes.previewReviews.length:0}),a()(d()(e),"setError",function(){var t=de()(pe.a.mark((function t(r){var n,o;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.onReviewsLoadError,t.next=3,be(r);case 3:o=t.sent,e.setState({reviews:[],loading:!1,error:o}),n(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return p()(n,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!ge()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,i=t.productId,a={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(a.category_id=Array.isArray(r)?r.join(","):r),i&&(a.product_id=i),a}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),U(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,i=r.loading,a=r.reviews,c=r.totalReviews;return React.createElement(e,o()({},this.props,{error:n,isLoading:i,reviews:a.slice(0,t),totalReviews:c}))}}]),n}(y.Component);a()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}((function(e){var t=e.attributes,r=e.onAppendReviews,n=e.onChangeOrderby,o=e.reviews,i=e.totalReviews,a=t.orderby;return 0===o.length?null:React.createElement(y.Fragment,null,"false"!==t.showOrderby&&j&&React.createElement(J,{defaultValue:a,onChange:n}),React.createElement(le,{attributes:t,reviews:o}),"false"!==t.showLoadMore&&i>o.length&&React.createElement(Y,{onClick:r,screenReaderLabel:Object(R.__)("Load more reviews","woo-gutenberg-products-block")}))}));function we(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w()(e);if(t){var o=w()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}A({selector:"\n\t.wp-block-woocommerce-all-reviews,\n\t.wp-block-woocommerce-reviews-by-product,\n\t.wp-block-woocommerce-reviews-by-category\n",Block:function(e){g()(r,e);var t=we(r);function r(){var e;l()(this,r);var n=(e=t.apply(this,arguments)).props.attributes;return e.state={orderby:n.orderby,reviewsToDisplay:parseInt(n.reviewsOnPageLoad,10)},e.onAppendReviews=e.onAppendReviews.bind(d()(e)),e.onChangeOrderby=e.onChangeOrderby.bind(d()(e)),e}return p()(r,[{key:"onAppendReviews",value:function(){var e=this.props.attributes,t=this.state.reviewsToDisplay;this.setState({reviewsToDisplay:t+parseInt(e.reviewsOnLoadMore,10)})}},{key:"onChangeOrderby",value:function(e){var t=this.props.attributes;this.setState({orderby:e.target.value,reviewsToDisplay:parseInt(t.reviewsOnPageLoad,10)})}},{key:"onReviewsAppended",value:function(e){var t=e.newReviews;Object(I.speak)(Object(R.sprintf)(Object(R._n)("%d review loaded.","%d reviews loaded.",t.length,"woo-gutenberg-products-block"),t.length))}},{key:"onReviewsReplaced",value:function(){Object(I.speak)(Object(R.__)("Reviews list updated.","woo-gutenberg-products-block"))}},{key:"onReviewsLoadError",value:function(){Object(I.speak)(Object(R.__)("There was an error loading the reviews.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var e=this.props.attributes,t=e.categoryIds,r=e.productId,n=this.state.reviewsToDisplay,o=function(e){if(j){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}}(this.state.orderby),i=o.order,a=o.orderby;return React.createElement(me,{attributes:e,categoryIds:t,onAppendReviews:this.onAppendReviews,onChangeOrderby:this.onChangeOrderby,onReviewsAppended:this.onReviewsAppended,onReviewsLoadError:this.onReviewsLoadError,onReviewsReplaced:this.onReviewsReplaced,order:i,orderby:a,productId:r,reviewsToDisplay:n})}}]),r}(y.Component),getProps:function(e){return{attributes:{showReviewDate:e.classList.contains("has-date"),showReviewerName:e.classList.contains("has-name"),showReviewImage:e.classList.contains("has-image"),showReviewRating:e.classList.contains("has-rating"),showReviewContent:e.classList.contains("has-content"),showProductName:e.classList.contains("has-product-name")}}}})},,,,function(e,t){!function(){e.exports=this.wp.compose}()}]);