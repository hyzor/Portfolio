(this.webpackJsonp=this.webpackJsonp||[]).push([[6,9],{638:function(e,t,n){"use strict";n.r(t),function(e){var r=n(163),a=n.n(r),i=n(164),c=n.n(i),o=n(112),l=n.n(o),s=n(165),u=n.n(s),f=n(166),p=n.n(f),h=n(113),d=n.n(h),m=n(114),g=n.n(m),v=n(0),y=n.n(v),b=n(5),E=n.n(b),j=n(22),x=n(77),R=n(35),C=n(87);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var P=function(e){u()(n,e);var t=k(n);function n(e){var r;return a()(this,n),r=t.call(this,e),g()(l()(r),"toggle",(function(){return r.setState((function(e){return{toggle:!e.toggle}}))})),r.state={toggle:!1},r}return c()(n,[{key:"componentDidMount",value:function(){setInterval(this.toggle,2e3)}},{key:"render",value:function(){var e=this.props,t=e.emoji1,n=e.emoji2,r=this.state.toggle;return y.a.createElement(j.a,null,y.a.createElement(x.Transition,{items:r,from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}},(function(e){return function(r){return e?y.a.createElement(R.a,{variant:"h2",style:r},y.a.createElement("span",{role:"img","aria-label":"Folder"},t)):y.a.createElement(R.a,{variant:"h2",style:r},y.a.createElement("span",{role:"img","aria-label":"Open folder"},n))}})))}}]),n}(y.a.Component);P.propTypes={emoji1:E.a.string.isRequired,emoji2:E.a.string.isRequired},t.default=Object(C.hot)(e)(P)}.call(this,n(167)(e))},643:function(e,t,n){"use strict";n.r(t),function(e){var r=n(163),a=n.n(r),i=n(164),c=n.n(i),o=n(112),l=n.n(o),s=n(165),u=n.n(s),f=n(166),p=n.n(f),h=n(113),d=n.n(h),m=n(114),g=n.n(m),v=n(0),y=n.n(v),b=n(5),E=n.n(b),j=n(787),x=n(789),R=n(791),C=n(790),k=n(788),P=n(35),O=n(701),w=n(246),S=n(87),D=n(675),q=n.n(D),T=n(734),G=n(759),N=n(22),B=n(638);function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var A=Object(T.autoPlay)(q.a),H=function(e){u()(n,e);var t=I(n);function n(e){var r;return a()(this,n),r=t.call(this,e),g()(l()(r),"handleClick",(function(e){return function(){r.setState({openProject:e.id})}})),g()(l()(r),"handleClose",(function(){r.setState({openProject:null})})),g()(l()(r),"handleChangeGrid",(function(e){r.setState({activeGrid:e})})),g()(l()(r),"handleNext",(function(e){return function(){r.setState((function(t){return{activeGrid:t.activeGrid+1<e?t.activeGrid+1:0}}))}})),g()(l()(r),"handleBack",(function(e){return function(){r.setState((function(t){return{activeGrid:t.activeGrid-1>=0?t.activeGrid-1:e-1}}))}})),r.handleClick=r.handleClick.bind(l()(r)),r.state={openProject:null,activeGrid:0},r}return c()(n,[{key:"render",value:function(){for(var e=this,t=this.props,n=t.data,r=t.classes,a=t.theme,i=this.state,c=i.openProject,o=i.activeGrid,l=n.data.projects,s=[],u=0;u<l.length;)s.push(l.slice(u,6+u)),u+=6;var f=s.length;return y.a.createElement(y.a.Fragment,null,y.a.createElement(N.a,{display:"flex",justifyContent:"center"},y.a.createElement(P.a,{style:{marginRight:8},align:"center",color:"textSecondary",variant:"h2",gutterBottom:!0},"Projects"),y.a.createElement(B.default,{emoji1:"📁",emoji2:"📂"})),y.a.createElement(A,{style:{overflow:"hidden"},slideStyle:{overflow:"hidden"},axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:this.handleChangeGrid,interval:1e10},s.map((function(t,n){return y.a.createElement(j.a,{key:n,container:!0,spacing:6,style:{overflow:"hidden"}},t.map((function(t){return y.a.createElement(j.a,{style:{overflow:"hidden"},item:!0,key:t.id,xs:5,sm:4},y.a.createElement(k.a,{className:r.card,onClick:e.handleClick(t)},y.a.createElement(x.a,{style:{height:"100%"}},y.a.createElement(C.a,{style:{height:200},title:t.name},y.a.createElement("picture",null,y.a.createElement("source",{type:"image/webp",srcSet:"".concat(t.thumbnail,".webp")}),y.a.createElement("source",{type:"image/jpeg",srcSet:"".concat(t.thumbnail,".").concat(t.extension)}),y.a.createElement("img",{alt:t.name,className:r.thumbnail,src:"".concat(t.thumbnail,".").concat(t.extension)}))),y.a.createElement(R.a,{className:r.cardContent},y.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),y.a.createElement(P.a,{variant:"body2"},t.desc)))),y.a.createElement(O.a,{project:t,openProject:c,handleClose:e.handleClose}))})))}))),y.a.createElement("div",{style:{marginTop:16,display:"flex",justifyContent:"center"}},y.a.createElement(G.a,{dots:f,index:o,onChangeIndex:this.handleChangeGrid})))}}]),n}(y.a.Component);H.propTypes={classes:E.a.objectOf(E.a.string).isRequired,theme:E.a.oneOfType([E.a.string,E.a.object]).isRequired,data:E.a.objectOf(E.a.object).isRequired},t.default=Object(S.hot)(e)(Object(w.a)((function(){return{card:{height:"100%",width:"100%"},thumbnail:{width:"100%",height:"100%",objectFit:"cover"}}}),{withTheme:!0})(H))}.call(this,n(167)(e))},701:function(e,t,n){"use strict";(function(e){var r=n(163),a=n.n(r),i=n(164),c=n.n(i),o=n(112),l=n.n(o),s=n(165),u=n.n(s),f=n(166),p=n.n(f),h=n(113),d=n.n(h),m=n(114),g=n.n(m),v=n(0),y=n.n(v),b=n(5),E=n.n(b),j=n(35),x=n(85),R=n(672),C=n.n(R),k=n(670),P=n.n(k),O=n(675),w=n.n(O),S=n(797),D=n(246),q=n(87),T=n(786),G=n(796),N=n(718);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var I=function(e){u()(n,e);var t=B(n);function n(e){var r;return a()(this,n),r=t.call(this,e),g()(l()(r),"handleClose",(function(){(0,r.props.handleClose)()})),g()(l()(r),"handleNext",(function(){var e=r.props.project.images.length;r.setState((function(t){return{activePic:t.activePic+1<e?t.activePic+1:0}}))})),g()(l()(r),"handleBack",(function(){var e=r.props.project.images.length;r.setState((function(t){return{activePic:t.activePic-1>=0?t.activePic-1:e-1}}))})),g()(l()(r),"handleChangePic",(function(e){r.setState({activePic:e})})),g()(l()(r),"handleRef",(function(e){r.ref=e})),r.handleClose=r.handleClose.bind(l()(r)),r.state={activePic:0},r}return c()(n,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.classes,r=e.openProject,a=e.theme,i=this.state.activePic,c=t.images.length;return y.a.createElement(G.a,{"aria-labelledby":"simple-dialog-title",open:r===t.id,onClose:this.handleClose,maxWidth:"md",style:{minHeight:768},scroll:"paper"},y.a.createElement(N.Scrollbars,{autoHeight:!0,autoHeightMax:768},y.a.createElement(T.a,{style:{textAlign:"center"},id:"simple-dialog-title"},t.name),y.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%"}},t.fulltext?t.fulltext.map((function(e){return y.a.createElement(j.a,{key:e,variant:"body1",style:{marginTop:10}},e)})):null),y.a.createElement(w.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:i,onChangeIndex:this.handleChangePic,enableMouseEvents:!0,style:{marginTop:16}},t.images.map((function(e){return y.a.createElement("div",{key:e.label,className:n.imgDiv},y.a.createElement("picture",{key:e.label},y.a.createElement("source",{type:"image/webp",srcSet:"".concat(e.path,".webp")}),y.a.createElement("source",{type:"image/jpeg",srcSet:"".concat(e.path,".").concat(e.extension)}),y.a.createElement("img",{alt:e.label,className:n.img,src:"".concat(e.path,".").concat(e.extension)})))}))),y.a.createElement("div",{className:n.caption},y.a.createElement(j.a,{variant:"caption"},t.images[i].label)),y.a.createElement(S.a,{steps:c,position:"static",activeStep:i,className:n.mobileStepper,nextButton:y.a.createElement(x.a,{onClick:this.handleNext},y.a.createElement(P.a,null)),backButton:y.a.createElement(x.a,{onClick:this.handleBack},y.a.createElement(C.a,null))}),t.source&&y.a.createElement(j.a,{variant:"body2",className:n.title,style:{marginTop:15,marginBottom:15}},y.a.createElement("a",{href:t.source},"Source code"))))}}]),n}(y.a.Component);I.defaultProps={openProject:null},I.propTypes={classes:E.a.objectOf(E.a.string).isRequired,theme:E.a.oneOfType([E.a.string,E.a.object]).isRequired,project:E.a.shape({id:E.a.number.isRequired,fulltext:E.a.arrayOf(E.a.string),name:E.a.string.isRequired,images:E.a.arrayOf(E.a.object).isRequired,source:E.a.string}).isRequired,openProject:E.a.number,handleClose:E.a.func},t.a=Object(q.hot)(e)(Object(D.a)((function(){return{img:{maxHeight:640,maxWidth:640,overflow:"auto",display:"block",marginLeft:"auto",marginRight:"auto"},imgDiv:{alignItems:"center",justifyContent:"center",flexDirection:"column",display:"flex",height:"100%"},title:{textAlign:"center"},caption:{textAlign:"center",marginTop:5,marginBottom:10}}}),{withTheme:!0})(I))}).call(this,n(167)(e))},759:function(e,t,n){"use strict";var r=n(163),a=n.n(r),i=n(164),c=n.n(i),o=n(112),l=n.n(o),s=n(165),u=n.n(s),f=n(166),p=n.n(f),h=n(113),d=n.n(h),m=n(114),g=n.n(m),v=n(0),y=n.n(v),b=n(5),E=n.n(b);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var C={root:{height:18,width:18,cursor:"pointer",border:0,background:"none",padding:0},dot:{backgroundColor:"#e4e6e7",height:12,width:12,borderRadius:6,margin:3},active:{backgroundColor:"#319fd6"}},k=function(e){u()(n,e);var t=R(n);function n(){var e;a()(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),g()(l()(e),"handleClick",(function(t){var n=e.props;(0,n.onClick)(t,n.index)})),e}return c()(n,[{key:"render",value:function(){var e;return e=this.props.active?x(x({},C.dot),C.active):C.dot,y.a.createElement("button",{type:"button",style:C.root,onClick:this.handleClick},y.a.createElement("div",{style:e}))}}]),n}(y.a.Component);k.propTypes={active:E.a.bool.isRequired,index:E.a.number.isRequired,onClick:E.a.func.isRequired};var P=k;function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var w={root:{display:"flex",flexDirection:"row"}},S=function(e){u()(n,e);var t=O(n);function n(){var e;a()(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),g()(l()(e),"handleClick",(function(t,n){(0,e.props.onChangeIndex)(n)})),e}return c()(n,[{key:"render",value:function(){for(var e=this.props,t=e.index,n=e.dots,r=[],a=0;a<n;a+=1)r.push(y.a.createElement(P,{key:a,index:a,active:a===t,onClick:this.handleClick}));return y.a.createElement("div",{style:w.root},r)}}]),n}(y.a.Component);S.propTypes={dots:E.a.number.isRequired,index:E.a.number.isRequired,onChangeIndex:E.a.func.isRequired};t.a=S}}]);