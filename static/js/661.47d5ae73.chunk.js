"use strict";(self.webpackChunkrick_morty=self.webpackChunkrick_morty||[]).push([[661],{351:function(n,e,t){t.d(e,{Em:function(){return c},ZG:function(){return p},iw:function(){return u}});var r=t(861),i=t(757),a=t.n(i),o=t(243);function c(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/character/?page=".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("character/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("character/?name=".concat(e,"&page=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://rickandmortyapi.com/api"},661:function(n,e,t){t.r(e),t.d(e,{default:function(){return yn}});var r,i,a,o=t(861),c=t(439),l=t(757),p=t.n(l),s=t(87),u=t(356),d=t(168),f=t(444),x=f.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n\n  margin-top: 92px;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 86px;\n    margin-bottom: 16px;\n  }\n"]))),h=f.ZP.img(i||(i=(0,d.Z)(["\n  width: 321px;\n  height: 104px;\n  @media screen and (min-width: 1440px) {\n    width: 600px;\n    height: 200px;\n  }\n"]))),g=t(184),m=function(){return(0,g.jsx)(x,{children:(0,g.jsx)(h,{src:u,alt:"Rick & Morty"})})},b=t(791),v=["title","titleId"];function w(){return w=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},w.apply(this,arguments)}function Z(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function y(n,e){var t=n.title,r=n.titleId,i=Z(n,v);return b.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?b.createElement("title",{id:r},t):null,a||(a=b.createElement("path",{d:"M15.5 15H14.71L14.43 14.73C15.41 13.59 16 12.11 16 10.5C16 6.91 13.09 4 9.5 4C5.91 4 3 6.91 3 10.5C3 14.09 5.91 17 9.5 17C11.11 17 12.59 16.41 13.73 15.43L14 15.71V16.5L19 21.49L20.49 20L15.5 15ZM9.5 15C7.01 15 5 12.99 5 10.5C5 8.01 7.01 6 9.5 6C11.99 6 14 8.01 14 10.5C14 12.99 11.99 15 9.5 15Z",fill:"black",fillOpacity:.54})))}var j,k,C,P,E,O,L,S,_,z,F,I,M,N,R,H=b.forwardRef(y),T=(t.p,f.ZP.div(j||(j=(0,d.Z)(["\n  position: relative;\n  text-align: center;\n"])))),A=f.ZP.input(k||(k=(0,d.Z)(["\n  cursor: pointer;\n\n  font-family: Roboto;\n  padding: 16px;\n  padding-left: 48px;\n  width: 312px;\n  height: 56px;\n\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.5);\n\n  outline: none;\n\n  &::placeholder {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: rgba(0, 0, 0, 0.5);\n  }\n  @media screen and (min-width: 1440px) {\n    width: 1020px;\n    height: 56px;\n  }\n"]))),U=(0,f.ZP)(H)(C||(C=(0,d.Z)(["\n  position: absolute;\n  left: 16px;\n  top: 16px;\n\n  width: 24px;\n  height: 24px;\n"]))),B=function(n){var e=n.value,t=n.onChange;return(0,g.jsxs)(T,{children:[(0,g.jsx)(U,{}),(0,g.jsx)(A,{value:e,onChange:function(n){t(n.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Filter by name..."})]})},D=t(689),G=f.ZP.img(P||(P=(0,d.Z)(["\n  width: 312px;\n  height: 232px;\n  object-fit: cover;\n  @media screen and (min-width: 1440px) {\n    width: 240px;\n  }\n"]))),V=f.ZP.ul(E||(E=(0,d.Z)(["\n  @media screen and (min-width: 1440px) {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 19px;\n    width: 1020px;\n  }\n"]))),K=f.ZP.li(O||(O=(0,d.Z)(["\n  margin-top: 28px;\n  margin-bottom: 4px;\n  width: 312px;\n  min-height: 308px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 0px;\n    width: 240px;\n  }\n\n  transition: all 0.4s ease;\n  &:hover,\n  &:focus {\n    background-color: rgba(146, 232, 159, 1);\n  }\n"]))),W=f.ZP.div(L||(L=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 14px 16px 12px 16px;\n"]))),q=f.ZP.h6(S||(S=(0,d.Z)(["\n  color: rgba(0, 0, 0, 0.87);\n\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.15px;\n  line-height: 1.5;\n"]))),X=f.ZP.p(_||(_=(0,d.Z)(["\n  color: rgba(0, 0, 0, 0.6);\n\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.25px;\n  line-height: 1.5;\n"]))),J=function(n){var e=n.visibleCharacters,t=(0,D.TH)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(V,{children:e.map((function(n){return(0,g.jsx)(K,{children:(0,g.jsxs)(s.rU,{to:"".concat(n.id),state:{from:t},children:[(0,g.jsx)(G,{src:n.image,alt:""}),(0,g.jsxs)(W,{children:[(0,g.jsx)(q,{children:n.name}),(0,g.jsx)(X,{children:n.species})]})]})},n.id)}))})})},Q=["title","titleId"];function Y(){return Y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Y.apply(this,arguments)}function $(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function nn(n,e){var t=n.title,r=n.titleId,i=$(n,Q);return b.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,viewBox:"0 0 48 48",ref:e,"aria-labelledby":r},i),t?b.createElement("title",{id:r},t):null,z||(z=b.createElement("defs",null,b.createElement("path",{id:"a",d:"M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"}))),F||(F=b.createElement("clipPath",{id:"b"},b.createElement("use",{xlinkHref:"#a",overflow:"visible"}))),I||(I=b.createElement("path",{clipPath:"url(#b)",fill:"#FBBC05",d:"M0 37V11l17 13z"})),M||(M=b.createElement("path",{clipPath:"url(#b)",fill:"#EA4335",d:"M0 11l17 13 7-6.1L48 14V0H0z"})),N||(N=b.createElement("path",{clipPath:"url(#b)",fill:"#34A853",d:"M0 37l30-23 7.9 1L48 0v48H0z"})),R||(R=b.createElement("path",{clipPath:"url(#b)",fill:"#4285F4",d:"M48 48L17 24l-4-3 35-10z"})))}var en,tn,rn,an,on,cn,ln,pn=b.forwardRef(nn),sn=(t.p,f.ZP.div(en||(en=(0,d.Z)(["\n    margin-top: 20px;\n   \n"])))),un=f.ZP.button(tn||(tn=(0,d.Z)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  background-color: #fff;\n  border: 1px solid rgba(146, 232, 159, 1);\n  border-radius: 10px;\n  width: 200px;\n  height: 50px;\n  font-size: 20px;\n\n  &:hover,\n  &:focus-visible {\n    background-color: #4aa557;\n    border: 1px solid #4aa557;\n  }\n"]))),dn=f.ZP.p(rn||(rn=(0,d.Z)(["\n    margin-bottom: 10px;\n"]))),fn=function(n){var e=n.googleLogin,t=n.user,r=n.setUser;return(0,g.jsxs)(sn,{children:[null===t&&(0,g.jsxs)(un,{onClick:e,children:[(0,g.jsx)(pn,{}),"Google Login"]}),t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(dn,{children:t}),(0,g.jsx)(un,{onClick:function(){return r(null)},children:"LogOut"})]})]})},xn=t(351),hn=f.ZP.div(an||(an=(0,d.Z)(["\n  margin: 0 auto;\n  padding-left: 24px;\n  padding-right: 24px;\n  @media screen and (min-width: 360px) {\n    width: 360px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 210px;\n    padding-right: 210px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]))),gn=(f.ZP.button(on||(on=(0,d.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  background-color: #fff;\n  border: 1px solid rgba(146, 232, 159, 1);\n  border-radius: 10px;\n  width: 200px;\n  height: 50px;\n  font-size: 20px;\n\n  &:hover,\n  &:focus-visible {\n    background-color: #4aa557;\n    border: 1px solid #4aa557;\n  }\n"]))),f.ZP.div(cn||(cn=(0,d.Z)(["\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"])))),mn=f.ZP.button(ln||(ln=(0,d.Z)(["\n  outline: none;\n  background-color: rgba(146, 232, 159, 1);\n  border: 1px solid rgba(146, 232, 159, 1);\n  border-radius: 10px;\n  width: 150px;\n  height: 50px;\n  font-size: 20px;\n\n  &:hover,\n  &:focus-visible {\n    background-color: #4aa557;\n    border: 1px solid #4aa557;\n  }\n"]))),bn=function(n){var e=n.setPage,t=n.page,r=n.numberOfChars;return(0,g.jsxs)(gn,{children:[r>20&&1!==t&&(0,g.jsx)(mn,{onClick:function(){return e(t-1)},children:'"Prev page..."'}),r>20&&(0,g.jsx)(mn,{onClick:function(){return e(t+1)},children:'"Next page..."'})]})},vn=t(827),wn=t(562),Zn=t(243),yn=function(){var n,e=(0,b.useState)(null),t=(0,c.Z)(e,2),r=t[0],i=t[1],a=(0,b.useState)([]),l=(0,c.Z)(a,2),u=l[0],d=l[1],f=(0,b.useState)(""),x=(0,c.Z)(f,2),h=x[0],v=x[1],w=(0,s.lr)(),Z=(0,c.Z)(w,2),y=Z[0],j=Z[1],k=null!==(n=y.get("name"))&&void 0!==n?n:"",C=(0,b.useState)(1),P=(0,c.Z)(C,2),E=P[0],O=P[1],L=(0,b.useState)(null),S=(0,c.Z)(L,2),_=S[0],z=S[1];(0,b.useEffect)((function(){if(""===k){var n=function(){var n=(0,o.Z)(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,xn.Em)(E).then((function(n){d(n.results),z(n.info.count)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("getCharacters",n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}}),[k,E]),(0,b.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,xn.iw)(k,E).then((function(n){d(n.results),d(n.results),z(n.info.count)}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("fetchFilteredCharacter",n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[k,E]);var F=h.toLowerCase().trim(),I=u.sort((function(n,e){return n.name.localeCompare(e.name)}));u.length>0&&(I=u.filter((function(n){return n.name.toLowerCase().includes(F)}))),(0,b.useEffect)((function(){vn.MN.load("client:auth2",(function(){vn.MN.auth2.init({clientId:{NODE_ENV:"production",PUBLIC_URL:"/rick-morty",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GOOGLE_CLIEN_ID,scope:""})}))}),[]);var M=function(){var n=(0,o.Z)(p().mark((function n(e){var t,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Zn.Z.get("https://www.googleapis.com/oauth2/v1/userinfo?access_token=".concat(e.access_token));case 3:t=n.sent,r=t.data.name,i(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),N=(0,wn.Nq)({onSuccess:M,onError:function(n){return console.log(n)}});return(0,g.jsxs)(hn,{children:[(0,g.jsx)(fn,{googleLogin:N,user:r,setUser:i}),(0,g.jsx)(m,{}),(0,g.jsx)(B,{value:k,onChange:function(n){j(""!==n?{name:n}:{}),v(n)}}),(0,g.jsx)(J,{visibleCharacters:I}),(0,g.jsx)(bn,{setPage:O,page:E,numberOfChars:_})]})}},356:function(n,e,t){n.exports=t.p+"static/media/header.5d713b1e7be9cb53079f.png"}}]);
//# sourceMappingURL=661.47d5ae73.chunk.js.map