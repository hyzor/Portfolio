(this.webpackJsonp=this.webpackJsonp||[]).push([[7,9],{664:function(e,t,n){"use strict";n.r(t),function(e){var a=n(167),r=n.n(a),i=n(168),l=n.n(i),o=n(89),s=n.n(o),c=n(169),u=n.n(c),m=n(170),p=n.n(m),f=n(120),g=n.n(f),h=n(90),d=n.n(h),y=n(0),v=n.n(y),b=n(5),E=n.n(b),j=n(18),O=n(80),R=n(35),w=n(92);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p()(this,n)}}var C=function(e){u()(n,e);var t=x(n);function n(e){var a;return r()(this,n),a=t.call(this,e),d()(s()(a),"toggle",(function(){return a.setState((function(e){return{toggle:!e.toggle}}))})),a.state={toggle:!1},a}return l()(n,[{key:"componentDidMount",value:function(){setInterval(this.toggle,2e3)}},{key:"render",value:function(){var e=this.props,t=e.emoji1,n=e.emoji2,a=this.state.toggle;return v.a.createElement(j.a,null,v.a.createElement(O.Transition,{items:a,from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}},(function(e){return function(a){return e?v.a.createElement(R.a,{variant:"h2",style:a},v.a.createElement("span",{role:"img","aria-label":"Folder"},t)):v.a.createElement(R.a,{variant:"h2",style:a},v.a.createElement("span",{role:"img","aria-label":"Open folder"},n))}})))}}]),n}(v.a.Component);C.propTypes={emoji1:E.a.string.isRequired,emoji2:E.a.string.isRequired},t.default=Object(w.hot)(e)(C)}.call(this,n(171)(e))},672:function(e,t,n){"use strict";n.r(t),function(e){var a=n(167),r=n.n(a),i=n(168),l=n.n(i),o=n(89),s=n.n(o),c=n(169),u=n.n(c),m=n(170),p=n.n(m),f=n(120),g=n.n(f),h=n(90),d=n.n(h),y=n(0),v=n.n(y),b=n(5),E=n.n(b),j=n(35),O=n(652),R=n(820),w=n(78),x=n(818),C=n(819),L=n(252),N=n(92),P=n(781),S=n(18),I=n(664);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p()(this,n)}}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){u()(n,e);var t=D(n);function n(e){var a;return r()(this,n),a=t.call(this,e),d()(s()(a),"handleChange",(function(e){return function(t){a.setState(d()({},e,t.target.value))}})),d()(s()(a),"handleEmailChange",(function(e){var t=e.target.value;a.setState({email:t,emailIsValid:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)})})),d()(s()(a),"handleClick",(function(){a.setState({sendingMsg:!0}),P.send("gmail","template_BPrxTrft",a.state).then((function(){a.setState(n.initialState)}))})),P.init("user_tIqLzLo7yif17N99xgsT5"),a.state=n.initialState,a}return l()(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.name,a=t.email,r=t.emailIsValid,i=t.message,l=t.sendingMsg;return v.a.createElement(v.a.Fragment,null,v.a.createElement(S.a,{display:"flex",justifyContent:"center"},v.a.createElement(j.a,{style:{marginRight:8},align:"center",color:"textSecondary",variant:"h2",gutterBottom:!0},"Contact"),v.a.createElement(I.default,{emoji1:"💌",emoji2:"📩"})),v.a.createElement(O.a,{elevation:16,className:e.paper},v.a.createElement("div",{className:e.center,style:{width:"80%"}},v.a.createElement(S.a,{display:"flex",flexDirection:"column"},v.a.createElement(R.a,{id:"input-name",label:"Name",className:e.textField,value:n,onChange:this.handleChange("name"),margin:"normal",InputLabelProps:{className:e.inputLabel}}),v.a.createElement(R.a,{required:!0,error:!r,id:"input-email",label:"Email",className:e.textField,value:a,onChange:this.handleEmailChange,margin:"normal",helperText:a?"Invalid email":"Required",InputLabelProps:{className:e.inputLabel}}),v.a.createElement(R.a,{id:"input-message",label:"Message",className:e.textField,value:i,onChange:this.handleChange("message"),margin:"normal",multiline:!0,rows:"10",InputLabelProps:{className:e.inputLabel}})),v.a.createElement("div",{className:e.actions},v.a.createElement("div",{className:e.wrapper},v.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.handleClick,disabled:!r||l},"Send",v.a.createElement(x.a,{className:e.rightIcon},"send")),l&&v.a.createElement(C.a,{size:32,className:e.progress}))))))}}]),n}(v.a.Component);d()(q,"initialState",{name:"",email:"",emailIsValid:!1,message:"",sendingMsg:!1}),q.propTypes={classes:E.a.objectOf(E.a.string).isRequired},t.default=Object(N.hot)(e)(Object(L.a)((function(e){return{textField:{marginLeft:"auto",marginRight:"auto",width:"100%"},paper:k(k({},e.mixins.gutters()),{},{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),width:"21cm",marginLeft:"auto",marginRight:"auto"}),center:{marginLeft:"auto",marginRight:"auto"},actions:{marginTop:24,display:"flex",alignItems:"center"},rightIcon:{marginLeft:e.spacing()},progress:{position:"absolute",top:"50%",left:"50%",marginTop:-15,marginLeft:-15},wrapper:{position:"relative"},inputLabel:{color:"#000"}}}),{withTheme:!0})(q))}.call(this,n(171)(e))}}]);