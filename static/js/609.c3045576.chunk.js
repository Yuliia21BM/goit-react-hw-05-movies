"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[609],{5351:function(n,e,t){t.d(e,{QB:function(){return u},g8:function(){return x},t_:function(){return d},tb:function(){return g},w7:function(){return f}});var r=t(5861),i=t(7757),a=t.n(i),c=t(1912),o="8b3f9f93b217543bb23268b1f13b0854",s="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function n(){var e,t,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,n.prev=1,n.next=4,c.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o,"&page=").concat(e));case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(1),console.error("Something is wrong with the search"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),p.apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function n(e){var t,r,i=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,n.prev=1,n.next=4,c.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.error("Something is wrong with the search"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),l.apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 3:if(200===(t=n.sent).status){n.next=6;break}return n.abrupt("return");case 6:return n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),console.error("Something is wrong with the search"+n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 3:if(200===(t=n.sent).status){n.next=6;break}return n.abrupt("return");case 6:return n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),console.error("Something is wrong with the search"+n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 3:if(200===(t=n.sent).status){n.next=6;break}return n.abrupt("return");case 6:return n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),console.error("Something is wrong with the search"+n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}},2609:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,a,c,o,s,u,p,d,l,f=t(5861),h=t(9439),x=t(7757),m=t.n(x),g=t(168),v=t(6444),w=v.ZP.div(r||(r=(0,g.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  /* outline: red 1px solid; */\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n  }\n"]))),b=t(2791),j=t(7689),Z=t(5351),y=t(8617),k=t(1087),_=(0,v.ZP)(k.rU)(i||(i=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n\n  :hover {\n    color: #ff0d00;\n  }\n"]))),P=t(184),z=function(n){var e=n.to,t=n.children;return(0,P.jsxs)(_,{to:e,children:[(0,P.jsx)(y.jTe,{size:"24"}),t]})},S=v.ZP.div(a||(a=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-size: 22;\n  gap: 30px;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1280px) {\n    align-items: start;\n    justify-content: start;\n  }\n"]))),F=v.ZP.img(c||(c=(0,g.Z)(["\n  width: 350px;\n"]))),U=v.ZP.div(o||(o=(0,g.Z)(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  text-align: center;\n  margin-bottom: 30px;\n\n  @media screen and (min-width: 768px) {\n    width: 60%;\n    align-items: start;\n    text-align: start;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-top: 30px;\n  }\n"]))),C=v.ZP.h1(s||(s=(0,g.Z)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n"]))),B=v.ZP.span(u||(u=(0,g.Z)(["\n  position: absolute;\n  right: 10px;\n  top: 15px;\n  padding: 15px 10px;\n  color: ",";\n  font-weight: 600;\n  font-size: 18;\n  background-color: ",";\n  border-radius: 50%;\n\n  @media screen and (min-width: 440px) {\n    right: 70px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 20px 15px;\n    right: 50px;\n    font-size: 28;\n  }\n  @media screen and (min-width: 1280px) {\n    right: 100px;\n  }\n"])),(function(n){var e=n.children,t=parseFloat(e);return t<=100&&t>=75?"#fff":t<75&&t>=45?"#000":"#fff"}),(function(n){var e=n.children,t=parseFloat(e);return t<=100&&t>=75?"green":t<75&&t>=45?"#f5f526":"red"})),L=v.ZP.h3(p||(p=(0,g.Z)(["\n  color: #ffffffae;\n  margin-bottom: 15px;\n"]))),O=v.ZP.ul(d||(d=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  @media screen and (min-width: 768px) {\n    justify-content: start;\n  }\n"]))),T=(0,v.ZP)(k.OL)(l||(l=(0,g.Z)(["\n  color: #fff;\n  transform: scale(1);\n  text-decoration: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    text-decoration 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n  &.active {\n    text-decoration: underline 3px solid #fff;\n  }\n"]))),q=t(4387),A=function(n){var e=n.data;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(S,{children:[(0,P.jsx)(F,{src:e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:q,alt:e.title?e.title:"Unknown",loading:"lazy"}),(0,P.jsxs)(U,{children:[(0,P.jsxs)(C,{children:[e.title?e.title:"Unknown title"," ("," ",e.release_date?e.release_date.slice(0,4):"n/a",")"]}),(0,P.jsx)(B,{children:e.vote_average?10*e.vote_average.toFixed(1)+"%":"n/a"}),(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{children:"Genres: "}),(0,P.jsx)("p",{children:e.genres?e.genres.map((function(n){return n.name})).join(", "):"no genres"})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{children:"Description:"}),(0,P.jsx)("p",{children:e.overview?e.overview:"No description"})]}),(0,P.jsx)(L,{children:"Additional information:"}),(0,P.jsxs)(O,{children:[(0,P.jsx)("li",{children:(0,P.jsx)(T,{to:"cast",children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(T,{to:"reviews",children:"Reviews"})})]})]})]}),(0,P.jsx)(b.Suspense,{fallback:(0,P.jsx)("div",{children:"Loading subpage..."}),children:(0,P.jsx)(j.j3,{})})]})},D=function(){var n=(0,f.Z)(m().mark((function n(e){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.w7)(e);case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),E=function(){var n,e,t=(0,b.useState)({}),r=(0,h.Z)(t,2),i=r[0],a=r[1],c=(0,j.TH)(),o=(0,j.UO)().id,s=null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,b.useEffect)((function(){o&&D(o).then((function(n){return a(n)}))}),[o]),(0,P.jsxs)(w,{children:[(0,P.jsx)(z,{to:s,children:"Back to movies"}),i!=={}&&(0,P.jsx)(A,{data:i})]})}},4387:function(n,e,t){n.exports=t.p+"static/media/default-poster.4813115e447e186cb14c.jpg"}}]);
//# sourceMappingURL=609.c3045576.chunk.js.map