(this["webpackJsonprandom-user"]=this["webpackJsonprandom-user"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(12),a=n.n(i),o=(n(19),n(20),n(14)),r=(n(21),n(13)),l=n.n(r),d=n.p+"static/media/email.e1f03bb9.svg",j=n.p+"static/media/phone.d017e1ae.svg",m=n.p+"static/media/location.0b7d98ab.svg",b=n(0),u=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=function(){l.a.get("https://randomuser.me/api/").then((function(e){s(e.data.results)}))};return Object(c.useEffect)((function(){i()}),[]),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{id:"container",children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"content1 person pic",children:[Object(b.jsx)("img",{src:e.picture.large,alt:"",srcset:""}),Object(b.jsxs)("span",{className:"content name",children:[e.name.title," ",e.name.first," ",e.name.last]})]}),Object(b.jsxs)("div",{className:"content1 email pic",children:[Object(b.jsx)("img",{src:d,alt:"",srcset:""}),Object(b.jsx)("span",{className:"content emailinfo",children:e.email})]}),Object(b.jsxs)("div",{className:"content1 phone pic",children:[Object(b.jsx)("img",{src:j,alt:"",srcset:""}),Object(b.jsx)("span",{className:"content phoneinfo",children:e.phone})]}),Object(b.jsxs)("div",{className:"content1 location pic",children:[Object(b.jsx)("img",{src:m,alt:"",srcset:""}),Object(b.jsxs)("span",{className:"content locationinfo",children:[e.location.city,"-",e.location.country]})]}),Object(b.jsxs)("div",{className:"content2 ageinfo",children:["Age: ",e.dob.age]}),Object(b.jsxs)("div",{className:"content2 regdate",children:["Register Date: ",e.registered.date.slice(0,10)]})]},t)}))}),Object(b.jsx)("button",{onClick:i,children:"Random User"})]})},h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(u,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.2c123b93.chunk.js.map