"use strict";(self.webpackChunkrick_morty=self.webpackChunkrick_morty||[]).push([[971],{351:function(n,e,t){t.d(e,{Em:function(){return o},ZG:function(){return p},iw:function(){return d}});var r=t(861),i=t(757),a=t.n(i),c=t(243);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/character");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("character/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("character/?name=".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://rickandmortyapi.com/api"},971:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,i=t(861),a=t(439),c=t(757),o=t.n(c),s=t(87),p=t(689),l=t(791),d=t(351),h=t(168),u=t(444),x=["title","titleId"];function f(){return f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},f.apply(this,arguments)}function g(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function m(n,e){var t=n.title,i=n.titleId,a=g(n,x);return l.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},a),t?l.createElement("title",{id:i},t):null,r||(r=l.createElement("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"black"})))}var w,Z,j,v,b,y,k,P,O,E,L,z,S,G=l.forwardRef(m),I=(t.p,u.ZP.div(w||(w=(0,h.Z)(["\n  margin: 0 auto;\n  padding-left: 24px;\n  padding-right: 24px;\n  @media screen and (min-width: 360px) {\n    width: 360px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 210px;\n    padding-right: 210px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"])))),U=u.ZP.div(Z||(Z=(0,h.Z)(["\n  @media screen and (min-width: 1440px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),B=u.ZP.button(j||(j=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 25px;\n  margin-bottom: 78px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n"]))),C=(0,u.ZP)(G)(v||(v=(0,h.Z)(["\n  width: 24px;\n  height: 24px;\n  margin-left: 4px;\n  margin-right: 12px;\n"]))),F=u.ZP.h3(b||(b=(0,h.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  font-family: Karla;\n  line-height: 1.17;\n"]))),H=u.ZP.div(y||(y=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-bottom: 35px;\n"]))),N=u.ZP.img(k||(k=(0,h.Z)(["\n  border-radius: 50%;\n  width: 150px;\n  height: 148px;\n  margin-bottom: 34px;\n\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 48px;\n  }\n"]))),T=(u.ZP.p(P||(P=(0,h.Z)(["\n  font-size: 32px;\n  line-height: 1.17;\n\n  @media screen and (min-width: 1440px) {\n    font-size: 48px;\n  }\n"]))),u.ZP.h6(O||(O=(0,h.Z)(["\n  margin-bottom: 16px;\n\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.2;\n  letter-spacing: 0.15px;\n\n  color: rgba(142, 142, 147, 1);\n\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 48px;\n    text-align: center;\n  }\n"])))),K=u.ZP.div(E||(E=(0,h.Z)(["\n  width: 312px;\n  height: 64px;\n  padding: 9px 16px 12px 16px;\n\n  @media screen and (min-width: 1440px) {\n    width: 413px;\n    height: 64px;\n  }\n"]))),R=u.ZP.div(L||(L=(0,h.Z)(["\n  width: 298px;\n  height: 1px;\n  background-color: rgba(33, 33, 33, 0.08);\n\n  @media screen and (min-width: 1440px) {\n    width: 395px;\n  }\n"]))),_=u.ZP.h3(z||(z=(0,h.Z)(["\n  color: rgba(8, 31, 50, 1);\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  letter-spacing: 0.15;\n"]))),A=u.ZP.p(S||(S=(0,h.Z)(["\n  color: rgba(110, 121, 140, 1);\n\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  letter-spacing: 0.25;\n  margin-bottom: 11px;\n"]))),M=t(184),V=function(){var n,e,t=(0,p.UO)().charactertId,r=(0,l.useState)(""),c=(0,a.Z)(r,2),h=c[0],u=c[1],x=(0,l.useState)(),f=(0,a.Z)(x,2),g=f[0],m=f[1],w=null!==(n=null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.ZG)(t).then((function(n){n?(u(n),m(n.origin.name)):alert("There is no character with such id. Please Go Back and try again")}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,M.jsxs)(I,{children:[(0,M.jsx)(s.rU,{to:w,children:(0,M.jsxs)(B,{children:[(0,M.jsx)(C,{}),(0,M.jsx)(F,{children:"GO BACK"})]})}),(0,M.jsxs)(U,{children:[(0,M.jsxs)(H,{children:[(0,M.jsx)(N,{src:h.image,alt:""}),(0,M.jsx)("h2",{children:h.name})]}),(0,M.jsx)(T,{children:"Informations"}),(0,M.jsxs)(K,{children:[(0,M.jsx)(_,{children:"Gender"}),(0,M.jsx)(A,{children:h.gender}),(0,M.jsx)(R,{})]}),(0,M.jsxs)(K,{children:[(0,M.jsx)(_,{children:"Status"}),(0,M.jsx)(A,{children:h.status}),(0,M.jsx)(R,{})]}),(0,M.jsxs)(K,{children:[(0,M.jsx)(_,{children:"Specie"}),(0,M.jsx)(A,{children:h.species}),(0,M.jsx)(R,{})]}),(0,M.jsxs)(K,{children:[(0,M.jsx)(_,{children:"Origin"}),(0,M.jsx)(A,{children:g}),(0,M.jsx)(R,{})]}),(0,M.jsxs)(K,{children:[(0,M.jsx)(_,{children:"Type"}),(0,M.jsx)(A,{children:h.type?h.type:"Unknown"}),(0,M.jsx)(R,{})]})]})]})}}}]);
//# sourceMappingURL=971.ba2b95b6.chunk.js.map