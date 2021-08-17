(this["webpackJsonpgames-showcase"]=this["webpackJsonpgames-showcase"]||[]).push([[0],{31:function(n,e,t){},39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var c,i,a=t(2),r=t(1),o=t.n(r),s=t(23),b=t.n(s),j=(t(31),t(3)),d=t(10),l=t(0),x=j.b.div(c||(c=Object(a.a)(["\n  flex: 0 0 30%;\n  padding: 10px;\n\n  @media (max-width: 767px) {\n    flex: 0 0 100%;\n  }\n"]))),u=j.b.li(i||(i=Object(a.a)(["\n  & a {\n    width: 100%;\n\n    .link {\n      width: 100%;\n      padding: 10px;\n      margin-bottom: 5px;\n    }\n\n    &:hover {\n      .link {\n        background-color: #eee;\n      }\n    }\n\n    &.active {\n      font-weight: bold;\n      color: red;\n      \n      .link {\n        background-color: #eee;\n      }\n    }\n  }\n"])));var h,p,O,f,g,m,v,k=function(){return Object(l.jsx)(x,{children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"navbar",children:[Object(l.jsx)(u,{className:"nav-link",children:Object(l.jsx)(d.c,{exact:!0,to:"/",children:Object(l.jsx)("div",{className:"link",children:"Home"})})}),Object(l.jsx)(u,{className:"nav-link",children:Object(l.jsx)(d.c,{to:"/catalog",children:Object(l.jsx)("div",{className:"link",children:"Catalog"})})})]})})})},w=t(4),y=j.b.div(h||(h=Object(a.a)(["\n  padding: 10px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center\n\n  }\n  \n"]))),S=j.b.div(p||(p=Object(a.a)(["\n  color: green;\n  flex: 0 0 300px;\n\n  @media (max-width: 767px) {\n    flex: 0 0 50px\n\n  }\n\n"]))),C=j.b.div(O||(O=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  flex: 0 0 300px;\n\n  @media (max-width: 767px) {\n    flex: 0 0 50px\n\n  }\n"]))),E=j.b.div(f||(f=Object(a.a)(["\n  position: absolute;\n  width: 300px;\n  min-height: 400px;\n  background-color: #eee;\n  top: 50px;\n  right: 30px;\n"]))),z=j.b.li(g||(g=Object(a.a)(["\n  padding: 5px 10px;\n"]))),B=j.b.button(m||(m=Object(a.a)(["\n  position: absolute;\n  top: 20%;\n  right: 4px;\n  cursor: pointer;\n"]))),H=j.b.input(v||(v=Object(a.a)(["\n  width: 100%;\n  height: 30px;\n"])));var N,_,F,L,P=function(n){n.history;var e=Object(r.useState)(""),t=Object(w.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)(null),o=Object(w.a)(a,2),s=(o[0],o[1]),b=Object(r.useState)([]),j=Object(w.a)(b,2),x=j[0],u=j[1];Object(r.useEffect)((function(){h()}),[c]);var h=function(){fetch("https://api.rawg.io/api/games?key=ca61123216c44a7e9edc35c07faf7790&search=".concat(c)).then((function(n){return n.json()})).then((function(n){u(n.results)}),(function(n){s(n)}))};return Object(l.jsxs)(y,{children:[Object(l.jsx)(S,{children:"Header logo"}),Object(l.jsxs)(C,{children:[Object(l.jsx)(H,{type:"text",value:c,onChange:function(n){return function(n){i(n.target.value)}(n)}}),c&&Object(l.jsx)(B,{onClick:function(){return i("")},children:"X"})]}),c&&Object(l.jsx)(E,{children:Object(l.jsx)("ul",{children:x.map((function(n){return Object(l.jsx)(z,{children:Object(l.jsx)(d.b,{to:{pathname:"/games/".concat(n.slug),gameProps:{game:n}},children:n.name})},n.id)}))})})]})},T=(t(39),t(5)),D=t(21),I=j.b.div(N||(N=Object(a.a)(["\n  padding: 10px;\n  border: 1px solid #000;\n  border-radius: 5px;\n  margin: 10px;\n  min-height: 200px;\n  flex: 0 0 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),J=j.b.div(_||(_=Object(a.a)(["\n  & img {\n    width: 200px;\n    height: 150px;\n  }\n"]))),R=j.b.button(F||(F=Object(a.a)(["\n  background-color: #000;\n  padding: 10px 20px;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #333;\n  }\n"]))),M=j.b.div(L||(L=Object(a.a)(["\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 5px;\n"])));var X,q,A,G=Object(T.f)((function(n){var e=n.history,t=n.game;return Object(l.jsxs)(I,{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(J,{children:Object(l.jsx)("img",{src:t.background_image,alt:""})}),Object(l.jsx)(M,{children:t.name}),Object(l.jsx)(M,{children:t.rating}),Object(l.jsx)(M,{children:t.released})]}),Object(l.jsx)("div",{children:Object(l.jsx)(R,{onClick:function(){e.push("/games/"+t.slug,{gameProps:{game:t}})},children:"Open"})})]})})),K=j.b.div(X||(X=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  @media (max-width: 767px) {\n    justify-content: center;\n  }\n"]))),Q=j.b.div(q||(q=Object(a.a)(["\n  display: flex;\n"]))),U=j.b.button(A||(A=Object(a.a)(["\n  background-color: #000;\n  padding: 10px 20px;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  margin-right: 10px;\n\n  &:hover {\n    background-color: #333;\n  }\n"])));var V,W,Y,Z,$=function(){var n=Object(r.useState)([]),e=Object(w.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(!0),a=Object(w.a)(i,2),o=a[0],s=a[1],b=Object(r.useState)(null),j=Object(w.a)(b,2),d=j[0],x=j[1],u=Object(r.useState)(1),h=Object(w.a)(u,2),p=h[0],O=h[1],f=Object(r.useState)("released"),g=Object(w.a)(f,2),m=g[0],v=g[1];Object(r.useEffect)((function(){o&&k()}),[o]);var k=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e="https://api.rawg.io/api/games?key=ca61123216c44a7e9edc35c07faf7790&page=".concat(p,"&ordering=-").concat(m);fetch(e).then((function(n){return n.json()})).then((function(e){n?c(e.results):(c([].concat(Object(D.a)(t),Object(D.a)(e.results))),O((function(n){return n+1}))),s(!1)}),(function(n){s(!0),x(n)})).finally((function(){s(!1)}))},y=function(n){n!==m&&(O(1),v(n),k(!0))};Object(r.useEffect)((function(){return document.addEventListener("scroll",S),function(){document.removeEventListener("scroll",S)}}),[]);var S=function(n){n.target.documentElement.scrollHeight-(n.target.documentElement.scrollTop+window.innerHeight)<100&&s(!0)};return d?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",d.message]})}):Object(l.jsxs)("div",{children:[Object(l.jsxs)(Q,{children:[Object(l.jsx)(U,{onClick:function(){return y("released")},children:"released"}),Object(l.jsx)(U,{onClick:function(){return y("rating")},children:"rating"})]}),Object(l.jsx)(K,{children:t.map((function(n){return Object(l.jsx)(G,{game:n},n.id)}))}),o&&Object(l.jsx)("div",{children:"loading..."})]})},nn=j.b.div(V||(V=Object(a.a)(["\n  padding: 10px;\n  border: 1px solid #000;\n  border-radius: 5px;\n  margin: 10px;\n  min-height: 200px;\n  flex: 0 0 200px;\n"]))),en=j.b.div(W||(W=Object(a.a)(["\n  & img {\n    width: 200px;\n    height: 150px;\n  }\n"]))),tn=j.b.button(Y||(Y=Object(a.a)(["\n  background-color: #000;\n  padding: 10px 20px;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #333;\n  }\n"]))),cn=j.b.div(Z||(Z=Object(a.a)(["\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 5px;\n"])));var an,rn=Object(T.f)((function(n){var e=n.category,t=n.history;return Object(l.jsxs)(nn,{children:[Object(l.jsx)(en,{children:Object(l.jsx)("img",{src:e.image_background,alt:""})}),Object(l.jsx)(cn,{children:e.name}),Object(l.jsxs)(cn,{children:["count: ",e.games_count]}),Object(l.jsx)("div",{children:Object(l.jsx)(tn,{onClick:function(){t.push("/catalog/"+e.slug)},children:"Open"})})]})})),on=j.b.div(an||(an=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"])));var sn,bn,jn,dn,ln,xn,un,hn,pn,On,fn,gn,mn=function(){var n=Object(r.useState)([]),e=Object(w.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(!1),a=Object(w.a)(i,2),o=a[0],s=a[1],b=Object(r.useState)(null),j=Object(w.a)(b,2),d=j[0],x=j[1];return Object(r.useEffect)((function(){fetch("https://api.rawg.io/api/genres?key=ca61123216c44a7e9edc35c07faf7790").then((function(n){return n.json()})).then((function(n){c(n.results)}),(function(n){s(!0),x(n)}))}),[o]),d?Object(l.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",d.message]}):o?Object(l.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(l.jsx)("div",{children:Object(l.jsx)(on,{children:t.map((function(n){return Object(l.jsx)(rn,{category:n},n.id)}))})})},vn=j.b.div(sn||(sn=Object(a.a)(["\n  padding: 10px;\n  flex: 1 1 70%\n"]))),kn=j.b.button(bn||(bn=Object(a.a)(["\n  background-color: #000;\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-bottom: 10px;\n  \n  &:hover {\n    background-color: #333;\n  }\n"]))),wn=j.b.div(jn||(jn=Object(a.a)([""]))),yn=j.b.h1(dn||(dn=Object(a.a)(["\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 22px;\n  margin: 20px;\n  text-align: center;\n"]))),Sn=j.b.img(ln||(ln=Object(a.a)(["\n  width: 100%;\n  height: 300px;\n  object-fit: contain;\n  margin-bottom: 30px;\n"]))),Cn=j.b.div(xn||(xn=Object(a.a)(["\n  width: 100%;\n  margin: 20px;\n"]))),En=j.b.div(un||(un=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n"]))),zn=j.b.button(hn||(hn=Object(a.a)(["\n  background-color: #000;\n  padding: 10px 20px;\n  margin: 10px;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  \n  &:hover {\n    background-color: #333;\n  }\n"]))),Bn=j.b.div(pn||(pn=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),Hn=j.b.img(On||(On=Object(a.a)(["\n  width: 100%;\n  height: 200px;\n  object-fit: contain;\n"]))),Nn=j.b.div(fn||(fn=Object(a.a)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 20px;\n"]))),_n=j.b.a(gn||(gn=Object(a.a)(["\n  color: blue;\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 22px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n  &:hover {\n    text-decoration: underline;\n    color: red;\n    margin: 10px 0;\n  }\n"])));var Fn,Ln,Pn=function(n){var e,t=n.match.params.name,c=Object(r.useState)({}),i=Object(w.a)(c,2),a=i[0],o=i[1],s=Object(r.useState)(null),b=Object(w.a)(s,2),j=b[0],d=b[1],x=Object(r.useState)(!1),u=Object(w.a)(x,2),h=u[0],p=u[1],O=Object(r.useState)([]),f=Object(w.a)(O,2),g=f[0],m=f[1],v=Object(r.useState)(0),k=Object(w.a)(v,2),y=k[0],S=k[1];return Object(r.useEffect)((function(){p(!0),fetch("https://api.rawg.io/api/games/".concat(t,"?key=ca61123216c44a7e9edc35c07faf7790")).then((function(n){return n.json()})).then((function(n){o(n),p(!1),console.log({res:n})}),(function(n){d(n)}))}),[t]),Object(r.useEffect)((function(){fetch("https://api.rawg.io/api/games/".concat(a.id,"/screenshots?key=ca61123216c44a7e9edc35c07faf7790")).then((function(n){return n.json()})).then((function(n){console.log(n),m(n.results)}))}),[a]),j?Object(l.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",j.message]}):h?Object(l.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(l.jsxs)(vn,{children:[Object(l.jsx)(kn,{onClick:function(){return n.history.goBack()},children:"Back"}),Object(l.jsxs)(wn,{children:[Object(l.jsx)(yn,{children:a.name}),Object(l.jsx)(Sn,{src:a.background_image,alt:a.slug}),Object(l.jsxs)(Nn,{children:["Date Released: ",a.released]}),Object(l.jsxs)(Nn,{children:["Rating ",a.rating]}),Object(l.jsx)("div",{children:a.description_raw}),Object(l.jsx)(_n,{href:a.website,children:"go to offical game page"}),Object(l.jsxs)(Cn,{children:[Object(l.jsx)(Bn,{children:Object(l.jsx)(Hn,{src:null===(e=g[y])||void 0===e?void 0:e.image,alt:""})}),Object(l.jsxs)(En,{children:[Object(l.jsx)(zn,{onClick:function(){S((function(n){return n<1?g.length-1:n-1}))},children:"prev"}),Object(l.jsx)(zn,{onClick:function(){S((function(n){return n>=g.length-1?0:n+1}))},children:"next"})]})]})]})]})},Tn=j.b.div(Fn||(Fn=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Dn=j.b.button(Ln||(Ln=Object(a.a)(["\n  background-color: #000;\n  padding: 10px 20px;\n  margin: 10px;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #333;\n  }\n"])));var In,Jn,Rn,Mn=function(n){console.log("category",n);var e=n.match.params.name,t=Object(r.useState)([]),c=Object(w.a)(t,2),i=c[0],a=c[1],o=Object(r.useState)(!0),s=Object(w.a)(o,2),b=s[0],j=s[1],d=Object(r.useState)(null),x=Object(w.a)(d,2),u=x[0],h=x[1];return Object(r.useEffect)((function(){fetch("https://api.rawg.io/api/games?key=ca61123216c44a7e9edc35c07faf7790&genres=".concat(e)).then((function(n){return n.json()})).then((function(n){a(n.results),j(!1)}),(function(n){j(!0),h(n)}))}),[b]),u?Object(l.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",u.message]}):b?Object(l.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(l.jsxs)("div",{children:[Object(l.jsx)(Dn,{onClick:function(){return n.history.goBack()},children:"back"}),Object(l.jsx)(Tn,{children:i.map((function(n){return Object(l.jsx)(G,{game:n},n.id)}))})]})},Xn=j.b.div(In||(In=Object(a.a)(["\n  width: 100%;\n  min-height: 100vh;\n"]))),qn=j.b.div(Jn||(Jn=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 30px;\n  @media (max-width: 767px) {\n    flex-direction: column;\n    width: 100%;\n  }\n"]))),An=j.b.div(Rn||(Rn=Object(a.a)(["\n  padding: 10px;\n  flex: 0 0 70%;\n  @media (max-width: 767px) {\n    flex: 0 0 100%;\n\n  }\n\n"])));var Gn,Kn=function(){return Object(l.jsxs)(Xn,{children:[Object(l.jsx)(P,{}),Object(l.jsxs)(qn,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(An,{children:Object(l.jsxs)(T.c,{children:[Object(l.jsx)(T.a,{exact:!0,path:"/",component:$}),Object(l.jsx)(T.a,{path:"/catalog",exact:!0,component:mn}),Object(l.jsx)(T.a,{path:"/catalog/:name",exact:!0,component:Mn}),Object(l.jsx)(T.a,{path:"/games/:name",component:Pn}),Object(l.jsx)(T.a,{render:function(){return Object(l.jsx)("h1",{children:"404!"})}})]})})]})]})},Qn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),c(n),i(n),a(n),r(n)}))},Un=Object(j.a)(Gn||(Gn=Object(a.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Open-Sans, Helvetica, Sans-Serif;\n  }\n"])));b.a.render(Object(l.jsx)(d.a,{children:Object(l.jsxs)(o.a.StrictMode,{children:[Object(l.jsx)(Un,{}),Object(l.jsx)(Kn,{})]})}),document.getElementById("root")),Qn()}},[[40,1,2]]]);
//# sourceMappingURL=main.31104cbc.chunk.js.map