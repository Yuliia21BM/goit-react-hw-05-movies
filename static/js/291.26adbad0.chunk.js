"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[291],{291:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r,c,a,u=n(439),o=n(791),i=n(351),s=n(689),p=n(168),h=n(444),f=h.ZP.h3(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 3px;\n  margin-bottom: 15px;\n"]))),l=h.ZP.span(c||(c=(0,p.Z)(["\n  color: #ef6210;\n"]))),v=h.ZP.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n"]))),d=n(184),g=function(){var t=(0,s.UO)().id,e=(0,o.useState)([]),n=(0,u.Z)(e,2),r=n[0],c=n[1];return(0,o.useEffect)((function(){t&&(0,i.tb)(t).then((function(t){var e=t.results;e&&e!==[]&&c(e)}))}),[t]),(0,d.jsx)(d.Fragment,{children:r===[]&&r?(0,d.jsx)("p",{children:"Sorry, we don`t have reviews for thit movie"}):(0,d.jsx)(v,{children:r.map((function(t){return(0,d.jsxs)("li",{children:[(0,d.jsxs)(f,{children:["Author:"," ",(0,d.jsxs)(l,{children:[t.author_details.username," "]})]}),(0,d.jsx)("p",{children:t.content})]},t.id)}))})})}},351:function(t,e,n){n.d(e,{QB:function(){return s},g8:function(){return d},t_:function(){return h},tb:function(){return w},w7:function(){return l}});var r=n(861),c=n(757),a=n.n(c),u=n(912),o="8b3f9f93b217543bb23268b1f13b0854",i="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function t(){var e,n,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.prev=1,t.next=4,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o,"&page=").concat(e));case 4:return n=t.sent,t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(1),console.error("Something is wrong with the search"+t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),p.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function t(e){var n,r,c=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,t.prev=1,t.next=4,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=").concat(n));case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(1),console.error("Something is wrong with the search"+t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),f.apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(o));case 3:if(200===(n=t.sent).status){t.next=6;break}return t.abrupt("return");case 6:return t.abrupt("return",n.data);case 9:t.prev=9,t.t0=t.catch(0),console.error("Something is wrong with the search"+t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o));case 3:if(200===(n=t.sent).status){t.next=6;break}return t.abrupt("return");case 6:return t.abrupt("return",n.data);case 9:t.prev=9,t.t0=t.catch(0),console.error("Something is wrong with the search"+t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 3:if(200===(n=t.sent).status){t.next=6;break}return t.abrupt("return");case 6:return t.abrupt("return",n.data);case 9:t.prev=9,t.t0=t.catch(0),console.error("Something is wrong with the search"+t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=291.26adbad0.chunk.js.map