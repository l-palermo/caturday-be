(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{294:function(e,t,a){e.exports={text:"collections-page-module__text____13AYG",layout:"collections-page-module__layout____w0GRw",textSpacing:"collections-page-module__textSpacing____1MRZj"}},295:function(e,t,a){e.exports={collectionsHeader:"collections-header-module__collectionsHeader____XWx-a",textSpacing:"collections-header-module__textSpacing____3u3Wa"}},296:function(e,t,a){e.exports={link:"collection-card-module__link____1dTZA",headerContent:"collection-card-module__headerContent____3H2Mc",name:"collection-card-module__name____XCkpD"}},297:function(e,t,a){e.exports={confirmationContainer:"confirmation-module__confirmationContainer____vQLQG",confirmationButton:"confirmation-module__confirmationButton____HIymT",confirm:"confirmation-module__confirm____32X2j",deny:"confirmation-module__deny____1rp3K"}},301:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(14),c=a.n(o),i=a(9),l=a.n(i),u=a(1),d=a.n(u),s=a(294),m=a.n(s),f=a(56),p=a(67),v=a(127),h=a(246),_=a(90),g=a(72),b=function(){var e=c()(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.graphql(Object(h.b)(_.a));case 2:return t=e.sent,a=t.data.listCollections.items,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=c()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.graphql(Object(h.b)(g.c,{input:{id:t}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=c()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.graphql(Object(h.b)(g.a,{input:{name:t}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=a(2),w=a.n(C),k=a(295),x=a.n(k);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var q=u.createElement("path",{d:"M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h5v-1H4a1 1 0 01-1-1V3a1 1 0 011-1h5v2.5A1.5 1.5 0 0010.5 6H13v2h1V6L9 1z"}),I=u.createElement("path",{fillRule:"evenodd",d:"M13.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13v-1.5a.5.5 0 01.5-.5z"}),O=u.createElement("path",{fillRule:"evenodd",d:"M13 12.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"});var j=function(e){return u.createElement("svg",R({viewBox:"0 0 16 16",width:"1em",height:"1em"},e),q,I,O)};function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var A=u.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z"});var N=function(e){return u.createElement("svg",H({viewBox:"0 0 16 16",width:"1em",height:"1em"},e),A)},L=a(24),M=a(129),S=function(e){var t=e.onCreateCollection,a=Object(u.useState)(!1),n=l()(a,2),r=n[0],o=n[1],c=Object(u.useState)(""),i=l()(c,2),s=i[0],m=i[1];return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:x.a.textSpacing},d.a.createElement(p.a,{dataId:"collections-header-title",tag:p.a.tags.H1},"Add a new collection..")),d.a.createElement("div",{className:x.a.collectionsHeader},d.a.createElement(L.a,{dataId:"add-collection-button",name:r?"Close":"add collection",Icon:j,isAlignedLeft:!0,hasPaddingRight:!0,onClick:function(){return o(!r)}}),r&&d.a.createElement(M.a,{placeholder:"Collection name...",value:s,onChange:function(e){return m(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&t(s)&&m("")},ButtonIcon:d.a.createElement(L.a,{dataId:"add-button",Icon:N,name:"Add",onClick:function(){t(s),m("")}})})))};S.propTypes={onCreateCollection:w.a.func.isRequired};var B=S,P=a(49),z=a(296),D=a.n(z),T=function(e){var t=e.dataId,a=e.onClick,n=e.path,r=e.name,o=e.children;return d.a.createElement("div",{"data-qa":"collection-card","data-id":t},d.a.createElement("div",{"data-qa":"collection-card-header",className:D.a.headerContent},o),d.a.createElement(P.b,{className:D.a.link,to:n,onClick:a},d.a.createElement("div",{className:D.a.name},r)))};T.propTypes={dataId:w.a.string,children:w.a.node,name:w.a.string.isRequired,onClick:w.a.func,path:w.a.string.isRequired},T.defaultProps={dataId:"",children:void 0};var V=T,G=a(96),X=a(297),J=a.n(X);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Q=u.createElement("path",{fillRule:"evenodd",d:"M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"});var W=function(e){return u.createElement("svg",K({viewBox:"0 0 16 16",width:"1em",height:"1em"},e),Q)};function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Z=u.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"}),F=u.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"});var U=function(e){return u.createElement("svg",Y({width:"1em",height:"1em",viewBox:"0 0 16 16"},e),Z,F)},$=function(e){var t=e.onConfirmClick,a=e.onDenyClick,n=e.dataId,r=e.confirmAriaLabel,o=e.denyAriaLabel;return d.a.createElement("div",{className:J.a.confirmationContainer,"data-qa":"confirmation","data-id":n,"aria-label":"group, yes or no confirmation"},d.a.createElement("button",{"data-qa":"confirm-button",className:J.a.confirmationButton,type:"button","aria-label":r,onClick:t},d.a.createElement(W,{className:J.a.confirm})),d.a.createElement("button",{"data-qa":"deny-button",className:J.a.confirmationButton,type:"button","aria-label":o,onClick:a},d.a.createElement(U,{className:J.a.deny})))};$.propTypes={dataId:w.a.string,confirmAriaLabel:w.a.string.isRequired,denyAriaLabel:w.a.string.isRequired,onDenyClick:w.a.func.isRequired,onConfirmClick:w.a.func.isRequired},$.defaultProps={dataId:""};var ee=$,te=function(e){var t=e.id,a=e.path,n=e.name,r=e.onDelete,o=Object(u.useState)(!1),c=l()(o,2),i=c[0],s=c[1];return d.a.createElement(V,{path:a,collectionId:t,name:n},d.a.createElement(L.a,{dataId:"delete-button",Icon:G.a,name:"Delete",isHeaderItem:!0,hasPaddingRight:!0,isInverted:!0,onClick:function(){s(!i)}}),i&&d.a.createElement(ee,{confirmAriaLabel:"Yes",denyAriaLabel:"No",onConfirmClick:function(){r(t),s(!1)},onDenyClick:function(){s(!1)}}))};te.propTypes={id:w.a.string.isRequired,name:w.a.string.isRequired,onDelete:w.a.func.isRequired,path:w.a.string.isRequired};var ae=te;t.default=function(){var e=Object(u.useState)([]),t=l()(e,2),a=t[0],n=t[1],o=function(){var e=c()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:b().then((function(e){return n(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=c()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:b().then((function(e){return n(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){b().then((function(e){return n(e)}))}),[]),d.a.createElement(f.a,{dataId:"collections-page"},d.a.createElement(B,{onCreateCollection:o}),d.a.createElement("div",{className:m.a.textSpacing},d.a.createElement(p.a,{dataId:"collections-page-title",tag:p.a.tags.H1},"Collections...")),d.a.createElement("div",{className:m.a.layout,"data-qa":"collections-page-cards-layout","aria-label":"group, collection links"},a.map((function(e){var t=e.id,a=e.name,n="/collections/".concat(t,"/").concat(a);return d.a.createElement(ae,{key:t,id:t,name:a,path:n,onDelete:i})}))))}}}]);