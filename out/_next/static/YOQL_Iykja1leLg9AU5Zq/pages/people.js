(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CxEz:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people",function(){var e=r("gefR");return{page:e.default||e}}])},gefR:function(e,t,r){"use strict";r.r(t);var a=r("ln6h"),n=r.n(a),u=r("eVuF"),s=r.n(u),c=r("O40h"),l=r("q1tI"),m=r.n(l),i=r("oY9k"),o=r.n(i),p=r("GvxY"),d=r.n(p);function f(e){var t=e.members,r=e.error;return r?m.a.createElement("div",null,r):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{id:"title",className:d.a.title},"Our Team"),m.a.createElement("div",{id:"content",className:d.a.bg},m.a.createElement("div",{id:"members",className:d.a.members},t.map(function(e){var t=e.id,r=e.html_url,a=e.avatar_url,n=e.name;return m.a.createElement("div",{id:"member",className:d.a.member,key:t},m.a.createElement("a",{href:r},m.a.createElement("img",{src:a,alt:"avatar",className:d.a.avatar})),m.a.createElement("span",null,n))}))))}f.getInitialProps=Object(c.default)(n.a.mark(function e(){var t,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()("https://api.github.com/orgs/WW-tech/public_members");case 2:return t=e.sent,e.next=5,t.json();case 5:if(!(r=e.sent).message){e.next=8;break}return e.abrupt("return",{members:null,error:r.message});case 8:return e.next=10,s.a.all(r.map(function(){var e=Object(c.default)(n.a.mark(function e(t){var r,a,u,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,a=t.html_url,u=t.avatar_url,s=t.url,e.t0=r,e.t1=a,e.t2=u,e.next=6,o()(s);case 6:return e.next=8,e.sent.json();case 8:return e.t3=e.sent.name,e.abrupt("return",{id:e.t0,html_url:e.t1,avatar_url:e.t2,name:e.t3});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 10:return r=e.sent,e.abrupt("return",{members:r,error:null});case 12:case"end":return e.stop()}},e)})),t.default=f}},[["CxEz",1,0,2]]]);