(this["webpackJsonpadm-challenge"]=this["webpackJsonpadm-challenge"]||[]).push([[0],{104:function(e,a,t){e.exports=t(136)},116:function(e,a,t){},136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),i=t(17),l=t(42),s=t(86),u=t(188),p=t(28),m=t(69),d=t(87),b=t.n(d),h=t(19),f=t(88),E=t.n(f),v={isSidebarOpen:!1,shipmentData:void 0,selectedCompany:void 0,shouldFetch:!0};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0,t=a.payload,n=a.type;switch(n){case"SET_IS_OPEN":return Object(h.a)(Object(h.a)({},e),{},{isSidebarOpen:t});case"SET_SHIPMENT_DATA":return Object(h.a)(Object(h.a)({},e),{},{shipmentData:t});case"SET_SHOULD_FETCH":return Object(h.a)(Object(h.a)({},e),{},{shouldFetch:t});case"MODIFY_BOXES":var r=t;return Object(h.a)(Object(h.a)({},e),{},{selectedCompany:Object(h.a)(Object(h.a)({},e.selectedCompany),{},{boxes:r})});case"SAVE_SHIPMENT_DATA":var c=E.a.clone(e.shipmentData),o=c.findIndex((function(a){return a.id===e.selectedCompany.id}));return c[o]=e.selectedCompany,Object(h.a)(Object(h.a)({},e),{},{shipmentData:c});case"SET_SELECTED_COMPANY":return Object(h.a)(Object(h.a)({},e),{},{selectedCompany:t});default:return e}},g=Object(p.b)({App:O}),j={key:"root",storage:b.a},y=Object(m.a)(j,g),w=Object(p.c)(y),S=Object(m.b)(w),x=(t(116),t(95)),C=Object(x.a)({palette:{primary:{main:"#00897B"},secondary:{main:"#01579B",light:"rgba(255, 255, 255, 0.5)"},text:{primary:"#1C2126",secondary:"#727981"}}}),k=t(66),N=t.n(k),T=t(92),D=t(45),_=function(e){return{type:"SET_IS_OPEN",payload:e}},A=function(e){return{type:"SET_SHOULD_FETCH",payload:e}},I=function(e){return e.App.isSidebarOpen},M=function(e){return e.App.shipmentData},P=function(e){return e.App.selectedCompany},F=function(e){return e.App.shouldFetch},B=t(12),L=t(16),H=t(52),R=t(175),U=t(189),W=t(178),Y=t(21),G=t(172),z=Object(G.a)((function(e){return{main:Object(Y.a)({flexGrow:"1",textAlign:"left",marginTop:"15px",marginLeft:"30px"},e.breakpoints.up("sm"),{flexShrink:0}),details:{marginTop:"20px"},spinner:{textAlign:"center"},input:{minWidth:"300px"},toolbar:e.mixins.toolbar}}));var J=function(){var e=Object(B.f)(),a=Object(i.b)(),t=e.pathname.substring(15),c=Object(n.useState)(void 0),o=Object(D.a)(c,2),l=o[0],s=o[1],u=Object(i.c)(F),p=Object(i.c)(M),m=Object(i.c)(I),d=Object(i.c)(P),b=Object(L.a)(),h=z(b,m);return Object(n.useEffect)((function(){p&&p.forEach((function(e){return e.name===t&&a({type:"SET_SELECTED_COMPANY",payload:e})}))}),[t,a,p,u]),Object(n.useEffect)((function(){if(d){var e,a=null===d||void 0===d||null===(e=d.boxes)||void 0===e?void 0:e.split(",").map((function(e){return+e})),t=null===a||void 0===a?void 0:a.reduce((function(e,a){return e+a}));t<0&&(t=0),s(10*Math.ceil(t/10)/10)}}),[d]),r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/ADM-challenge/".concat(d.name)},r.a.createElement("main",{className:h.main},r.a.createElement("div",{className:h.toolbar}),u?r.a.createElement("div",{className:h.spinner},r.a.createElement(W.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{variant:"h4"},null===d||void 0===d?void 0:d.name),r.a.createElement(R.a,{variant:"body1",href:"mailto:".concat(null===d||void 0===d?void 0:d.email)},null===d||void 0===d?void 0:d.email),r.a.createElement("div",{className:h.details},r.a.createElement(H.a,{gutterBottom:!0,variant:"body1"},"Number of required cargo bays: ",r.a.createElement("strong",null," ",l||"0"," ")),r.a.createElement(H.a,{gutterBottom:!0,variant:"body1"},"Cargo boxes"),r.a.createElement(U.a,{onChange:function(e){return a({type:"MODIFY_BOXES",payload:e.target.value})},className:h.input,value:(null===d||void 0===d?void 0:d.boxes)||""}))))))},V=t(180),X=t(181),q=t(179),$=t(195),K=t(184),Q=t(194),Z=t(190),ee=t(182),ae=t(183),te=t(15),ne=Object(G.a)((function(e){var a,t;return{header:{zIndex:"99",width:"100%",display:"flex",flexGrow:1,"& .headerTitle":(a={},Object(Y.a)(a,e.breakpoints.down("md"),{display:"none"}),Object(Y.a)(a,e.breakpoints.up("sm"),{display:"block"}),a),"& .leftContainer, & .rightContainer":{display:"flex",alignItems:"center","& button":{marginLeft:"10px"}}},toolbar:{justifyContent:"space-between"},menuButton:Object(Y.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),search:(t={display:"block",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(te.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(te.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(Y.a)(t,e.breakpoints.down("md"),{display:"none"}),Object(Y.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto",display:"block"}),t),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Y.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var re=function(e){var a=e.searchFilter,t=e.setSearchFilter,n=Object(i.c)(I),c=r.a.useState(!1),o=Object(D.a)(c,2),l=o[0],s=o[1],u=Object(L.a)(),p=ne(u,n),m=Object(i.b)(),d=function(e,a){"clickaway"!==a&&s(!1)};function b(e){return r.a.createElement(Z.a,Object.assign({elevation:6,variant:"filled"},e))}return r.a.createElement(V.a,{position:"fixed",className:p.header},r.a.createElement(X.a,{className:p.toolbar},r.a.createElement("div",{className:"leftContainer"},r.a.createElement(q.a,{onClick:function(){m(_(!n))},className:p.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(ee.a,null)),r.a.createElement(H.a,{className:"headerTitle",variant:"h6",noWrap:!0},"Cargo planner")),r.a.createElement("div",{className:"rightContainer"},r.a.createElement("div",{className:p.search},r.a.createElement("div",{className:p.searchIcon},r.a.createElement(ae.a,null)),r.a.createElement($.a,{placeholder:"Search\u2026",classes:{root:p.inputRoot,input:p.inputInput},value:a||"",onChange:function(e){return t(e.target.value)},inputProps:{"aria-label":"search"}})),r.a.createElement(K.a,{onClick:function(){s(!0),m({type:"SAVE_SHIPMENT_DATA"})},color:"secondary",variant:"contained"},"Save"),r.a.createElement(K.a,{onClick:function(){return m(A(!0))},color:"secondary",variant:"contained"},"Load"))),r.a.createElement(Q.a,{open:l,autoHideDuration:3e3,onClose:d},r.a.createElement(b,{onClose:d,severity:"success"},"Saved!")))},ce=t(185),oe=t(177),ie=t(186),le=t(187),se=t(192),ue=t(193),pe=Object(G.a)((function(e){return{root:{display:"flex"},drawer:Object(Y.a)({zIndex:"90"},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(Y.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));var me=function(e){var a=e.shipmentData,t=Object(i.c)(I),n=pe(t),c=Object(i.b)(),o=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:n.toolbar}),r.a.createElement(ce.a,null),r.a.createElement(oe.a,null,a.map((function(e){var a=e.id,t=e.name;return r.a.createElement(ie.a,{component:l.b,button:!0,key:a,to:"/ADM-challenge/".concat(t)},r.a.createElement(le.a,{primary:t}))}))))};return a?r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(se.a,{smUp:!0,implementation:"css"},r.a.createElement(ue.a,{variant:"temporary",anchor:"left",open:t,onClose:function(){return c(_(!t))},classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},o())),r.a.createElement(se.a,{xsDown:!0,implementation:"css"},r.a.createElement(ue.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},o()))):null},de=t(94),be=t.n(de),he={getShipments:function(){return be.a.get("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json")}},fe=Object(G.a)((function(){return{app:{display:"flex"}}}));var Ee=function(){var e=fe(),a=Object(i.b)(),t=Object(i.c)(M),c=Object(i.c)(F),o=Object(n.useState)(void 0),l=Object(D.a)(o,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){Object(T.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return e.next=3,he.getShipments();case 3:t=e.sent,(n=t.data).sort((function(e,a){var t=e.name.toUpperCase(),n=a.name.toUpperCase();return t.localeCompare(n)})),n&&(a(A(!1)),a({type:"SET_SHIPMENT_DATA",payload:n}));case 7:case"end":return e.stop()}}),e)})))()}),[a,t,c]),t?r.a.createElement("div",{className:e.app},r.a.createElement(re,{searchFilter:s,setSearchFilter:function(e){return u(e)}}),r.a.createElement(me,{shipmentData:s?null===t||void 0===t?void 0:t.filter((function(e){var a;return null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.toLowerCase().includes(s)})):t}),r.a.createElement(J,{shipmentData:t})):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:w},r.a.createElement(s.a,{loading:null,persistor:S},r.a.createElement(u.a,{theme:C},r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.aed154f0.chunk.js.map