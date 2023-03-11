"use strict";(self.webpackChunkrick_morty=self.webpackChunkrick_morty||[]).push([[760],{351:function(n,t,e){e.d(t,{Em:function(){return c},ZG:function(){return s},iw:function(){return l}});var r=e(861),i=e(757),a=e.n(i),o=e(243);function c(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/character");case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function s(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("character/".concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("character/?name=".concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://rickandmortyapi.com/api"},760:function(n,t,e){e.r(t),e.d(t,{default:function(){return K}});var r,i,a,o=e(861),c=e(439),p=e(757),s=e.n(p),u=e(87),l=e(356),d=e(168),h=e(444),x=h.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 92px;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 86px;\n    margin-bottom: 16px;\n  }\n"]))),f=h.ZP.img(i||(i=(0,d.Z)(["\n  width: 321px;\n  height: 104px;\n  @media screen and (min-width: 1440px) {\n    width: 600px;\n    height: 200px;\n  }\n"]))),g=e(184),m=function(){return(0,g.jsx)(x,{children:(0,g.jsx)(f,{src:l,alt:"Rick & Morty"})})},w=e(791),v=["title","titleId"];function b(){return b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},b.apply(this,arguments)}function Z(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function y(n,t){var e=n.title,r=n.titleId,i=Z(n,v);return w.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),e?w.createElement("title",{id:r},e):null,a||(a=w.createElement("path",{d:"M15.5 15H14.71L14.43 14.73C15.41 13.59 16 12.11 16 10.5C16 6.91 13.09 4 9.5 4C5.91 4 3 6.91 3 10.5C3 14.09 5.91 17 9.5 17C11.11 17 12.59 16.41 13.73 15.43L14 15.71V16.5L19 21.49L20.49 20L15.5 15ZM9.5 15C7.01 15 5 12.99 5 10.5C5 8.01 7.01 6 9.5 6C11.99 6 14 8.01 14 10.5C14 12.99 11.99 15 9.5 15Z",fill:"black",fillOpacity:.54})))}var j,C,k,P,O,E,L,F,z,R,S=w.forwardRef(y),I=(e.p,h.ZP.div(j||(j=(0,d.Z)(["\n  position: relative;\n  text-align: center;\n"])))),M=h.ZP.input(C||(C=(0,d.Z)(["\n  cursor: pointer;\n\n  font-family: Roboto;\n  padding: 16px;\n  padding-left: 48px;\n  width: 312px;\n  height: 56px;\n\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.5);\n\n  outline: none;\n\n  &::placeholder {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: rgba(0, 0, 0, 0.5);\n  }\n  @media screen and (min-width: 1440px) {\n    width: 1020px;\n    height: 56px;\n  }\n"]))),N=(0,h.ZP)(S)(k||(k=(0,d.Z)(["\n  position: absolute;\n  left: 16px;\n  top: 16px;\n\n  width: 24px;\n  height: 24px;\n"]))),H=function(n){var t=n.value,e=n.onChange;return(0,g.jsxs)(I,{children:[(0,g.jsx)(N,{}),(0,g.jsx)(M,{value:t,onChange:function(n){e(n.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Filter by name..."})]})},U=e(689),_=h.ZP.img(P||(P=(0,d.Z)(["\n  width: 312px;\n  height: 232px;\n  object-fit: cover;\n  @media screen and (min-width: 1440px) {\n    width: 240px;\n  }\n"]))),B=h.ZP.ul(O||(O=(0,d.Z)(["\n  @media screen and (min-width: 1440px) {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 19px;\n    width: 1020px;\n  }\n"]))),G=h.ZP.li(E||(E=(0,d.Z)(["\n  margin-top: 28px;\n  margin-bottom: 4px;\n  width: 312px;\n  min-height: 308px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 0px;\n    width: 240px;\n  }\n\n  transition: all 0.4s ease;\n  &:hover,\n  &:focus {\n    background-color: rgba(146, 232, 159, 1);\n  }\n"]))),T=h.ZP.div(L||(L=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 14px 16px 12px 16px;\n"]))),V=h.ZP.h6(F||(F=(0,d.Z)(["\n  color: rgba(0, 0, 0, 0.87);\n\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.15px;\n  line-height: 1.5;\n"]))),q=h.ZP.p(z||(z=(0,d.Z)(["\n  color: rgba(0, 0, 0, 0.6);\n\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.25px;\n  line-height: 1.5;\n"]))),A=function(n){var t=n.visibleCharacters,e=(0,U.TH)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(B,{children:t.map((function(n){return(0,g.jsx)(G,{children:(0,g.jsxs)(u.rU,{to:"".concat(n.id),state:{from:e},children:[(0,g.jsx)(_,{src:n.image,alt:""}),(0,g.jsxs)(T,{children:[(0,g.jsx)(V,{children:n.name}),(0,g.jsx)(q,{children:n.species})]})]})},n.id)}))})})},D=e(351),J=h.ZP.div(R||(R=(0,d.Z)(["\n  margin: 0 auto;\n  padding-left: 24px;\n  padding-right: 24px;\n  @media screen and (min-width: 360px) {\n    width: 360px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 210px;\n    padding-right: 210px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]))),K=function(){var n,t=(0,w.useState)([]),e=(0,c.Z)(t,2),r=e[0],i=e[1],a=(0,w.useState)(""),p=(0,c.Z)(a,2),l=p[0],d=p[1],h=(0,u.lr)(),x=(0,c.Z)(h,2),f=x[0],v=x[1],b=null!==(n=f.get("name"))&&void 0!==n?n:"";(0,w.useEffect)((function(){if(""===b){var n=function(){var n=(0,o.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,D.Em)().then((function(n){return i(n.results)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("getCharacters",n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}}),[b]),(0,w.useEffect)((function(){function n(){return(n=(0,o.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,D.iw)(b).then((function(n){return i(n.results)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("fetchFilteredCharacter",n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[b]);var Z=l.toLowerCase().trim(),y=r.sort((function(n,t){return n.name.localeCompare(t.name)}));return r.length>0&&(y=r.filter((function(n){return n.name.toLowerCase().includes(Z)}))),(0,g.jsxs)(J,{children:[(0,g.jsx)(m,{}),(0,g.jsx)(H,{value:b,onChange:function(n){v(""!==n?{name:n}:{}),d(n)}}),(0,g.jsx)(A,{visibleCharacters:y})]})}},356:function(n,t,e){n.exports=e.p+"static/media/header.5d713b1e7be9cb53079f.png"}}]);
//# sourceMappingURL=760.bff34eac.chunk.js.map