
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.className="container",e.appendChild(t);const n=document.createElement("div");n.className="row mt-4",t.appendChild(n);const a=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div");n.append(a,c,l,o,d,r),a.className="col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2",c.className="col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2",l.className="col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2",o.className="col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2",d.className="col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2",r.className="col-xs-12 clo-sm-12 col-md-6 col-lg-4 text-primary text-center select neu p-2";const s=document.querySelectorAll(".select"),m=["res","res1","res2","re1","res4","re1","re2"],i=["Jollof Rice","Banku and Okro","Akple and Fetri detsi","Beef Balls","Goat Soup","Salad"],p=[20,44,33,23,12,56,100,54];for(let e=0;e<6;e+=1){const t=`${`${i[e]} `.concat(`$${p[e]}`)}`,n=document.createElement("div");n.className="product",s[e].appendChild(n);const a=new Image;a.setAttribute("src",`https://addod19.github.io/Restaurant-Page/images/${m[e]}.jpg`),a.className="img img-rounded",n.appendChild(a);const c=document.createElement("p");c.className="description bg-icon font-weight-bold",c.textContent=t,n.appendChild(c)}};var c=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.className="container main1",e.appendChild(t);const n=document.createElement("div");n.className="main row pt-2 mt-2",t.appendChild(n);const a=document.createElement("div");a.className="container";const c=document.createElement("div");c.className="row mt-4";const l=document.createElement("div");l.className="col-xs-12 col-sm-12 col-md-5 col-lg-4 cb";const o=document.createElement("aside");o.className="jumbotron custom neu";const d=document.createElement("div");d.className="col-xs-12 col-sm-12 col-md-7 col-lg-8 mb-3 bgm",d.backgroundImage="url('https://addod19.github.io/Restaurant-Page/images/re.jpg')";const r=document.createElement("main");r.className="main-bg",a.appendChild(c),c.append(l,d),l.appendChild(o),d.appendChild(r);const s=document.createElement("h2");s.innerHTML='\n  <i class="fa fa-cutlery mt-3 mr-2" aria-hidden="true"></i><span class="mt-2">YOU ARE WELCOME !!!</span><i class="fa fa-btc mt-3 ml-2"></i>',s.className="heading text-center",n.appendChild(s);const m=["We have a variety of local and continental dishes you can choose from","Free delivery within Accra and Tema","+233207312909"];for(let e=0;e<m.length;e+=1){const t=document.createElement("p");t.innerHTML=m[e],o.appendChild(t)}n.appendChild(a)};var l=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.className="container",e.appendChild(t);const n=document.createElement("div");t.appendChild(n);const a=document.createElement("div");t.appendChild(a);const c=document.createElement("form");n.appendChild(c);const l=document.createElement("div");c.appendChild(l);const o=document.createElement("textarea");l.appendChild(o);const d=document.createElement("button");d.className="btn btn-primary form-control mt-1 custom font-weight-bold hover",d.innerHTML="Feedback",o.setAttribute("type","email"),o.className="form-control mt-4",o.setAttribute("placeholder","Enter message here"),o.setAttribute("required","");const r=document.createElement("span");r.className="form-text text-muted",r.setAttribute("id","emailHelp"),r.innerHTML="We will never share your info with anyone",l.appendChild(r),l.appendChild(d);const s=document.createElement("div");s.className="container";const m=document.createElement("div");m.className="row mt-4 d-flex justify-content-center",s.appendChild(m);const i=document.createElement("a");i.setAttribute("href","https://web.facebook.com/daniel.addo.75873/");const p=document.createElement("a");p.setAttribute("href","https://twitter.com/DanielLarbiAdd1");const u=document.createElement("a");u.setAttribute("href","https://web.whatsapp.com/");const h=document.createElement("a");h.setAttribute("href","https://www.linkedin.com/in/daniel-larbi-addo/"),i.className="fa fa-facebook-square fa-2x p-4 bg-icon",p.className="fa fa-twitter fa-2x p-4 bg-icon",u.className="fa fa-whatsapp fa-2x p-4 bg-icon",h.className="fa fa-linkedin fa-2x p-4 bg-icon",m.append(i,p,u,h),t.appendChild(s)};const o=()=>{const e=document.getElementById("content"),t=document.createElement("nav");t.className="navbar navbar-expand-lg navbar-light custom",e.appendChild(t);const n=document.createElement("button");n.setAttribute("type","button"),n.setAttribute("data-toggle","collapse"),n.setAttribute("data-target","#toggleNav"),n.className="navbar-toggler sec";const d=document.createElement("span");d.className="navbar-toggler-icon",t.appendChild(n),n.appendChild(d);const r=document.createElement("div");r.className="collapse navbar-collapse",r.setAttribute("id","toggleNav"),t.appendChild(r);const s=document.createElement("ul");s.className="navbar-nav p-2 mt-lg-0",r.appendChild(s);const m=document.createElement("li");m.className="nav-item mr-4 font-weight-bold",s.appendChild(m);const i=document.createElement("a");m.appendChild(i),i.innerHTML="HOME",i.addEventListener("click",()=>{e.innerHTML="",o(),c()}),s.appendChild(m),m.appendChild(i);const p=document.createElement("li");p.className="nav-item mr-4 font-weight-bold";const u=document.createElement("a");u.innerHTML="CONTACT US",u.addEventListener("click",()=>{e.innerHTML="",o(),l()}),s.appendChild(p),p.appendChild(u);const h=document.createElement("li");h.className="nav-item font-weight-bold";const f=document.createElement("a");return f.innerHTML="MENU",f.addEventListener("click",()=>{e.innerHTML="",o(),a()}),s.appendChild(h),h.appendChild(f),t};t.default=o;o(),c()}]);
