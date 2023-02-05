"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[502],{502:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c,i,o=e(9439),s=e(2791),u=e(7689),p=e(5351),h=e(168),f=e(6444),l=f.ZP.ul(r||(r=(0,h.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n"]))),d=f.ZP.li(a||(a=(0,h.Z)(["\n  flex-basis: calc((100% - 40px) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 60px) / 3);\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 120px) / 5);\n  }\n"]))),g=f.ZP.h1(c||(c=(0,h.Z)(["\n  font-size: 24px;\n  text-align: center;\n"]))),v=f.ZP.p(i||(i=(0,h.Z)(["\n  text-align: center;\n  padding: 20px;\n"]))),w=e(2083),x=e(184),m=function(){var n=(0,u.UO)().id,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];(0,s.useEffect)((function(){n&&(0,p.g8)(n).then((function(n){var t=n.cast;return a(t)}))}),[n]);return(0,x.jsx)(l,{children:0!==r.length?r.map((function(n){return(0,x.jsxs)(d,{children:[(0,x.jsx)("img",{width:"100%",src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:w,alt:n.name?n.name:"Unknown",loading:"lazy"}),(0,x.jsx)(g,{children:n.name?n.name:"Unknown"}),(0,x.jsx)("p",{children:n.character?n.character:"Uncnown"})]},"".concat(n.id,"12345ab67").concat(Math.random(4)))})):(0,x.jsx)(v,{children:"Sorry, we don`t have cast for thit movie :("})})}},5351:function(n,t,e){e.d(t,{QB:function(){return u},g8:function(){return g},t_:function(){return h},tb:function(){return w},w7:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1912),o="8b3f9f93b217543bb23268b1f13b0854",s="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.prev=1,n.next=4,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t));case 4:return e=n.sent,n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(1),console.error("Something is wrong with the search"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),p.apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,i.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=").concat(e));case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.error("Something is wrong with the search"+n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),f.apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o));case 3:if(200===(e=n.sent).status){n.next=6;break}return n.abrupt("return");case 6:return n.abrupt("return",e.data);case 9:n.prev=9,n.t0=n.catch(0),console.error("Something is wrong with the search"+n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:if(200===(e=n.sent).status){n.next=6;break}return n.abrupt("return");case 6:return n.abrupt("return",e.data);case 9:n.prev=9,n.t0=n.catch(0),console.error("Something is wrong with the search"+n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function w(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:if(200===(e=n.sent).status){n.next=6;break}return n.abrupt("return");case 6:return n.abrupt("return",e.data);case 9:n.prev=9,n.t0=n.catch(0),console.error("Something is wrong with the search"+n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}},2083:function(n,t,e){n.exports=e.p+"static/media/default-img.a9de8aa45d87d1ce429f.jpg"}}]);
//# sourceMappingURL=502.1a30962f.chunk.js.map