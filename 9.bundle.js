(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{685:function(t,e,n){"use strict";n.r(e),function(t){var r=n(169),a=n.n(r),o=n(170),i=n.n(o),c=n(117),u=n.n(c),l=n(171),s=n.n(l),f=n(172),p=n.n(f),g=n(118),h=n.n(g),m=n(120),v=n.n(m),y=n(0),d=n.n(y),R=n(4),b=n.n(R),E=n(27),j=n(80),k=n(37),D=n(91);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var w=function(t){s()(n,t);var e=q(n);function n(t){var r;return a()(this,n),r=e.call(this,t),v()(u()(r),"toggle",(function(){return r.setState((function(t){return{toggle:!t.toggle}}))})),r.state={toggle:!1},r}return i()(n,[{key:"componentDidMount",value:function(){setInterval(this.toggle,2e3)}},{key:"render",value:function(){var t=this.props,e=t.emoji1,n=t.emoji2,r=this.state.toggle;return d.a.createElement(E.a,null,d.a.createElement(j.Transition,{items:r,from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}},(function(t){return function(r){return t?d.a.createElement(k.a,{variant:"h2",style:r},d.a.createElement("span",{role:"img","aria-label":"Folder"},e)):d.a.createElement(k.a,{variant:"h2",style:r},d.a.createElement("span",{role:"img","aria-label":"Open folder"},n))}})))}}]),n}(d.a.Component);w.propTypes={emoji1:b.a.string.isRequired,emoji2:b.a.string.isRequired},e.default=Object(D.hot)(t)(w)}.call(this,n(119)(t))}}]);