"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{848:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,a,c,o,i,u=t(689),s=t(168),p=t(924),l=t(87),f=(0,p.ZP)(l.rU)(r||(r=(0,s.Z)(["\n  text-decoration: none;\n"]))),d=p.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: -10px;\n  padding: 20px;\n"]))),g=p.ZP.li(c||(c=(0,s.Z)(["\n  margin: 10px;\n  // width: 150px;\n  flex-basis: calc((100% - 10 * 15px) / 5);\n  padding: 5px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),x=p.ZP.p(o||(o=(0,s.Z)(["\n  font-weight: 700;\n  color: #000;\n  margin-bottom: 5px;\n  padding: 5px;\n"]))),h=p.ZP.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  display: block;\n\n  object-fit: contain;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),m=t(184),v=function(n){var e=n.movie,t=n.link,r=n.currentPage,a=(0,u.TH)();return console.log(r),(0,m.jsx)(g,{children:(0,m.jsxs)(f,{to:"/".concat(t),state:{from:a.pathname+a.search,page:r},children:[(0,m.jsx)(h,{src:null===e.poster_path?"".concat("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"):"https://image.tmdb.org/t/p/w400/".concat(e.poster_path),alt:e.title,width:"150"}),(0,m.jsx)(x,{children:e.title})]})})},Z=function(n){var e=n.moviesList,t=n.currentPage;return(0,m.jsx)(d,{children:e.map((function(n){return(0,m.jsx)(v,{movie:n,link:"movies/".concat(n.id),currentPage:t},n.id)}))})}},557:function(n,e,t){t.d(e,{Z:function(){return f}});var r,a,c,o=t(168),i=t(924),u=i.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  gap: 5px;\n"]))),s=i.ZP.button(a||(a=(0,o.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  &:hover {\n    background-color: #4490da;\n    color: #fff;\n  }\n"]))),p=(i.ZP.button(c||(c=(0,o.Z)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n"]))),t(629)),l=t(184),f=function(n){var e,t,r=n.currentPage,a=n.totalPages,c=n.onPageChange,o=[];if(a<=10)e=1,t=a;else{var i=Math.floor(5),f=Math.ceil(5)-1;r<=i?(e=1,t=10):r+f>=a?(e=a-10+1,t=a):(e=r-i,t=r+f)}for(var d=e;d<=t;d++)o.push(d);return(0,l.jsxs)(u,{children:[r>1&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{onClick:function(){return c(1)},children:(0,l.jsx)(p.G7k,{})}),(0,l.jsx)(s,{onClick:function(){return c(r-1)},children:(0,l.jsx)(p.Ugn,{})})]}),o.map((function(n){return(0,l.jsx)(s,{disabled:n===r,className:"page-item ".concat(n===r?"active":""),onClick:function(){return c(n)},children:n},n)})),r<a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{onClick:function(){return c(r+1)},children:(0,l.jsx)(p.ULj,{})}),(0,l.jsx)(s,{onClick:function(){return c(a)},children:(0,l.jsx)(p.vb9,{})})]})]})}},221:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a=t(433),c=t(861),o=t(439),i=t(757),u=t.n(i),s=t(791),p=t(689),l=t(694),f=t.n(l),d=t(390),g=t(848),x=t(557),h=t(168),m=t(924).ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),v=t(184),Z=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,s.useState)(1),l=(0,o.Z)(i,2),h=l[0],Z=l[1],b=(0,s.useState)(0),k=(0,o.Z)(b,2),w=k[0],y=k[1],j=(0,p.TH)(),P=(0,p.s0)(),_=new URLSearchParams(j.search),S=parseInt(_.get("page")||"1",10);(0,s.useEffect)((function(){Z(S)}),[S]),(0,s.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.vw)(S);case 3:e=n.sent,console.log(e),t=e.results,r((0,a.Z)(t)),500,y(Math.min(e.total_pages,500)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),f().Notify.failure("Something went wrong please try again later");case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[S]);return(0,v.jsxs)(m,{children:[(0,v.jsx)(g.Z,{moviesList:t,currentPage:h}),(0,v.jsx)(x.Z,{currentPage:h,totalPages:w,onPageChange:function(n){Z(n),P("/?page=".concat(n))}})]})}},390:function(n,e,t){t.d(e,{Hx:function(){return g},LI:function(){return h},Mc:function(){return p},uV:function(){return f},vw:function(){return u}});var r=t(861),a=t(757),c=t.n(a),o=t(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="aac30baed40e4ccb559433e8c8c31d6c";function u(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?query=".concat(e,"&api_key=").concat(i,"&language=en-US&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=221.96e548a4.chunk.js.map