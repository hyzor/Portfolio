(this.webpackJsonp=this.webpackJsonp||[]).push([[7,9],{672:function(e,t,n){"use strict";n.r(t),function(e){var a=n(169),r=n.n(a),i=n(170),l=n.n(i),o=n(90),s=n.n(o),c=n(171),u=n.n(c),m=n(172),p=n.n(m),f=n(121),g=n.n(f),h=n(92),d=n.n(h),v=n(0),y=n.n(v),b=n(5),E=n.n(b),O=n(18),j=n(80),R=n(34),w=n(94);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p()(this,n)}}var C=function(e){u()(n,e);var t=x(n);function n(e){var a;return r()(this,n),a=t.call(this,e),d()(s()(a),"toggle",(function(){return a.setState((function(e){return{toggle:!e.toggle}}))})),a.state={toggle:!1},a}return l()(n,[{key:"componentDidMount",value:function(){setInterval(this.toggle,2e3)}},{key:"render",value:function(){var e=this.props,t=e.emoji1,n=e.emoji2,a=this.state.toggle;return y.a.createElement(O.a,null,y.a.createElement(j.Transition,{items:a,from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}},(function(e){return function(a){return e?y.a.createElement(R.a,{variant:"h2",style:a},y.a.createElement("span",{role:"img","aria-label":"Folder"},t)):y.a.createElement(R.a,{variant:"h2",style:a},y.a.createElement("span",{role:"img","aria-label":"Open folder"},n))}})))}}]),n}(y.a.Component);C.propTypes={emoji1:E.a.string.isRequired,emoji2:E.a.string.isRequired},t.default=Object(w.hot)(e)(C)}.call(this,n(173)(e))},680:function(e,t,n){"use strict";n.r(t),function(e){var a=n(169),r=n.n(a),i=n(170),l=n.n(i),o=n(90),s=n.n(o),c=n(171),u=n.n(c),m=n(172),p=n.n(m),f=n(121),g=n.n(f),h=n(92),d=n.n(h),v=n(0),y=n.n(v),b=n(5),E=n.n(b),O=n(34),j=n(660),R=n(841),w=n(79),x=n(839),C=n(840),L=n(256),N=n(94),P=n(802),I=n(18),S=n(672);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p()(this,n)}}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){u()(n,e);var t=T(n);function n(e){var a;return r()(this,n),a=t.call(this,e),d()(s()(a),"handleChange",(function(e){return function(t){a.setState(d()({},e,t.target.value))}})),d()(s()(a),"handleEmailChange",(function(e){var t=e.target.value;a.setState({email:t,emailIsValid:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)})})),d()(s()(a),"handleClick",(function(){a.setState({sendingMsg:!0}),P.send("gmail","template_BPrxTrft",a.state).then((function(){a.setState(n.initialState)}))})),P.init("user_tIqLzLo7yif17N99xgsT5"),a.state=n.initialState,a}return l()(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.name,a=t.email,r=t.emailIsValid,i=t.message,l=t.sendingMsg;return y.a.createElement(y.a.Fragment,null,y.a.createElement(I.a,{display:"flex",justifyContent:"center"},y.a.createElement(O.a,{style:{marginRight:8},align:"center",color:"textSecondary",variant:"h2",gutterBottom:!0},"Contact"),y.a.createElement(S.default,{emoji1:"💌",emoji2:"📩"})),y.a.createElement(j.a,{elevation:16,className:e.paper},y.a.createElement("div",{className:e.center,style:{width:"80%"}},y.a.createElement(I.a,{display:"flex",flexDirection:"column"},y.a.createElement(R.a,{id:"input-name",label:"Name",className:e.textField,value:n,onChange:this.handleChange("name"),margin:"normal",InputLabelProps:{className:e.inputLabel}}),y.a.createElement(R.a,{required:!0,error:!r,id:"input-email",label:"Email",className:e.textField,value:a,onChange:this.handleEmailChange,margin:"normal",helperText:a?"Invalid email":"Required",InputLabelProps:{className:e.inputLabel}}),y.a.createElement(R.a,{id:"input-message",label:"Message",className:e.textField,value:i,onChange:this.handleChange("message"),margin:"normal",multiline:!0,rows:"10",InputLabelProps:{className:e.inputLabel}})),y.a.createElement("div",{className:e.actions},y.a.createElement("div",{className:e.wrapper},y.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.handleClick,disabled:!r||l},"Send",y.a.createElement(x.a,{className:e.rightIcon},"send")),l&&y.a.createElement(C.a,{size:32,className:e.progress}))))))}}]),n}(y.a.Component);d()(q,"initialState",{name:"",email:"",emailIsValid:!1,message:"",sendingMsg:!1}),q.propTypes={classes:E.a.objectOf(E.a.string).isRequired},t.default=Object(N.hot)(e)(Object(L.a)((function(e){return{textField:{marginLeft:"auto",marginRight:"auto",width:"100%"},paper:B(B({},e.mixins.gutters()),{},{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),width:"21cm",marginLeft:"auto",marginRight:"auto"}),center:{marginLeft:"auto",marginRight:"auto"},actions:{marginTop:24,display:"flex",alignItems:"center"},rightIcon:{marginLeft:e.spacing()},progress:{position:"absolute",top:"50%",left:"50%",marginTop:-15,marginLeft:-15},wrapper:{position:"relative"},inputLabel:{color:"#000"}}}),{withTheme:!0})(q))}.call(this,n(173)(e))}}]);