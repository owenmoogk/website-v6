(this["webpackJsonpwebsite-v6"]=this["webpackJsonpwebsite-v6"]||[]).push([[0],{14:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(15),a=n.n(i),l=n(7),r=n(2),o=(n(14),n.p+"static/media/resume.9e208a27.pdf"),j=n(0);function d(e){return Object(j.jsxs)("div",{id:"navBox",children:[Object(j.jsx)("a",{href:"/",className:"navlinks",children:Object(j.jsx)("p",{children:"Home"})}),Object(j.jsx)(l.b,{to:"/projects",className:"navlinks",children:Object(j.jsx)("p",{children:"Projects"})}),Object(j.jsx)(l.b,{to:"/work",className:"navlinks",children:Object(j.jsx)("p",{children:"Work"})}),Object(j.jsx)(l.b,{to:"/contact",className:"navlinks",children:Object(j.jsx)("p",{children:"Contact"})}),Object(j.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:"navlinks",children:Object(j.jsx)("p",{children:"Resume"})})]})}var b=n(17);n(31);function m(e){return Object(j.jsx)("canvas",{id:"c",style:{zIndex:-1}})}function p(e){function t(){fetch("/splashes.txt").then((function(e){return e.text()})).then((function(e){var t,n,c=e.split(/\r?\n|\r/),s=c[(t=0,n=c.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];a(s)}))}var n=Object(c.useState)(""),s=Object(b.a)(n,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){t()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("p",{id:"title",onClick:function(){return console.log("hi there friend!")},children:"Owen Moogk"}),Object(j.jsx)("p",{id:"subtitle",onClick:function(){return t()},children:i})]}),Object(j.jsx)(m,{})]})}function x(e){return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("p",{className:"title",children:"Work"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{id:"subtitle",children:"Coming soon to a website near you :)"})]})})}function h(e){return Object(j.jsx)("div",{className:"link primary",children:Object(j.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"text",children:e.text})})})}n(32);function O(e){return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("p",{className:"title",children:"Contact"}),Object(j.jsx)("div",{className:"contact",children:Object(j.jsxs)("div",{id:"main",children:[Object(j.jsx)(h,{link:"mailto:owenmoogk@gmail.com",text:"Personal Email"}),Object(j.jsx)(h,{link:"tel:+1-226-989-0602",text:"Phone"}),Object(j.jsx)(h,{link:"https://linktr.ee/owenmoogk",text:"Social Media"}),Object(j.jsx)(h,{link:"https://github.com/owenmoogk",text:"Github"}),Object(j.jsx)(h,{link:"https://www.thingiverse.com/owen_moogk",text:"Thingiverse"}),Object(j.jsx)(h,{link:"https://repl.it/@owenm21",text:"Repl.it"}),Object(j.jsx)(h,{link:"https://www.linkedin.com/in/owen-moogk-1ab9371b8/",text:"LinkedIn"})]})})]})}n(33),n(34);function u(e){var t="/projects/"+e.name,n=e.type.toLowerCase(),c=!1;e.link&&(c=!0,t=e.link);var s="/img/projects/"+e.name+"/main.png";function i(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"content-overlay "+n}),Object(j.jsx)("img",{className:"content-image",src:s,alt:""}),Object(j.jsxs)("div",{className:"content-details "+n,children:[Object(j.jsx)("h3",{className:"content-title",children:e.title}),Object(j.jsx)("p",{className:"type",children:n.toUpperCase()})]})]})}return Object(j.jsx)("div",{className:"content",children:c?Object(j.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:i()}):Object(j.jsx)(l.b,{to:t,children:i()})})}function g(e){var t=document.getElementsByClassName("active");t[0].className=t[0].className.replace(" active","");var n="sort_"+e;document.getElementsByClassName(n)[0].className+=" active";for(var c=document.getElementsByClassName("content"),s=0;s<c.length;s++){if("all"===e)c[s].style.display="";else c[s].getElementsByClassName("type")[0].innerHTML.toString().toLowerCase()===e?c[s].style.display="":c[s].style.display="none"}}function v(e){return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("p",{className:"title",children:"Projects"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"sorting",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("span",{className:"sort_all btn active",onClick:function(){return g("all")},children:Object(j.jsx)("p",{children:"All"})}),Object(j.jsx)("span",{className:"sort_cad btn",onClick:function(){return g("cad")},children:Object(j.jsx)("p",{children:"CAD"})}),Object(j.jsx)("span",{className:"sort_coding btn",onClick:function(){return g("coding")},children:Object(j.jsx)("p",{children:"Coding"})}),Object(j.jsx)("span",{className:"sort_mechanical btn",onClick:function(){return g("mechanical")},children:Object(j.jsx)("p",{children:"Mechanical"})}),Object(j.jsx)("span",{className:"sort_web-dev btn",onClick:function(){return g("web-dev")},children:Object(j.jsx)("p",{children:"Web-Dev"})})]}),Object(j.jsx)("div",{className:"sort",children:Object(j.jsx)("input",{type:"text",id:"searchBar",onKeyUp:function(){return function(){for(var e=document.getElementById("searchBar").value.toUpperCase(),t=document.getElementById("projectsGoHere").getElementsByClassName("content"),n=0;n<t.length;n++){var c=t[n].getElementsByClassName("content-title")[0].innerText,s=t[n].getElementsByClassName("type")[0].innerText;c.toUpperCase().indexOf(e)>-1||s.toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none"}}()},placeholder:"Search by Date, Title, or Text",title:"Type to search"})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"projectsGoHere",children:[Object(j.jsx)(u,{title:"Music Bot",name:"music-bot",type:"coding"}),Object(j.jsx)(u,{title:"NHL Fantasy App",name:"nhl-fantasy",type:"coding"}),Object(j.jsx)(u,{title:"Pathfinding Visualizer",name:"pathfinding-visualizer",type:"coding"}),Object(j.jsx)(u,{title:"Sorting Visualizer",name:"sorting-visualizer",type:"coding",link:"https://owenmoogk.github.io/sorting-visualizer/"}),Object(j.jsx)(u,{title:"Firefly Simulator",name:"firefly-simulator",type:"coding"}),Object(j.jsx)(u,{title:"Outbreak Simulator",name:"outbreak-simulator",type:"coding"}),Object(j.jsx)(u,{title:"Pendulum Physics Simulator",name:"pendulum-simulator",type:"coding"}),Object(j.jsx)(u,{title:"Sudoku Bot",name:"sudoku-bot",type:"coding",link:"https://owenmoogk.github.io/sudoku-visualizer"}),Object(j.jsx)(u,{title:"Notes App",name:"notes-app",type:"coding"}),Object(j.jsx)(u,{title:"LAN Messenger",name:"lan-messenger",type:"coding"}),Object(j.jsx)(u,{title:"Grocery List App",name:"grocery-list",type:"coding"}),Object(j.jsx)(u,{title:"Unix Time Converter",name:"unix-time",type:"coding",link:"https://owenmoogk.github.io/unix-time"}),Object(j.jsx)(u,{title:"Password Manager",name:"password-manager",type:"coding",link:"https://owenmoogk.github.io/password-manager/"}),Object(j.jsx)(u,{title:"Color Picker",name:"color-picker",type:"coding"}),Object(j.jsx)(u,{title:"COVID Scraper",name:"covid-scraper",type:"coding"}),Object(j.jsx)(u,{title:"COVID Website",name:"covid-website",type:"web-dev"}),Object(j.jsx)(u,{title:"Dino Game AI",name:"dino-game-ai",type:"coding"}),Object(j.jsx)(u,{title:"Geometry Calculator",name:"geometry-calculator",type:"coding"}),Object(j.jsx)(u,{title:"Simplelib",name:"simplelib",type:"coding",link:"http://simplelib.tk/"}),Object(j.jsx)(u,{title:"Flappy Bird AI",name:"flappy-bird-ai",type:"coding"}),Object(j.jsx)(u,{title:"Email Bot",name:"email-bot",type:"coding"}),Object(j.jsx)(u,{title:"Snake",name:"snake",type:"coding"}),Object(j.jsx)(u,{title:"Model Rocket",name:"model-rocket",type:"mechanical"}),Object(j.jsx)(u,{title:"Hydraulic Arm",name:"hydraulic-arm",type:"mechanical"}),Object(j.jsx)(u,{title:"Space Invaders",name:"space-invaders",type:"coding"}),Object(j.jsx)(u,{title:"The Compiler",name:"the-compiler",type:"web-dev",link:"http://thecompiler.cf/"}),Object(j.jsx)(u,{title:"Website Development",name:"web-development",type:"web-dev"}),Object(j.jsx)(u,{title:"Renders/Graphic Design",name:"renders",type:"CAD"}),Object(j.jsx)(u,{title:"Minecraft Modifications",name:"minecraft-mods",type:"coding"}),Object(j.jsx)(u,{title:"Vortex",name:"vortex",type:"CAD"}),Object(j.jsx)(u,{title:"2702 Rebels 2020 Robot",name:"2702-2020",type:"Mechanical"}),Object(j.jsx)(u,{title:"Engine Assembly",name:"engine",type:"Mechanical"}),Object(j.jsx)(u,{title:"2702 Rebels 2019 Robot",name:"2702-2019",type:"Mechanical"})]})]})})}n(35);function y(e){var t=Object(r.f)().name,n="/assets/projects/"+t+".xml";return Object(j.jsx)("div",{className:"body",children:function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e,t){var n=e.responseXML,c="";try{var s=n.getElementsByTagName("page-title")[0].innerHTML}catch(p){return void(document.getElementsByClassName("body")[0].innerHTML="<h2>Page not found</h2>")}var i=n.getElementsByTagName("date")[0].innerHTML;c+='<div class="project-page-title"><p style="line-height: 70px;">'+s+'</p></div><div class="date"><p class="pdate">'+i+"</p></div>";for(var a=n.getElementsByTagName("block"),l=0;l<a.length;l++){var r=a[l].children.length,o=a[l].children;c+='<div class="block">';for(var j=0;j<r;j++){var d=o[j].tagName,b=o[j].innerHTML;if("title"===d)c+='<div class="text"><h1 class="left">'+b+"</h1>";else if("text"===d){for(var m=!1;!1===m;){-1===(b=b.replace("~~","<br>")).search("~~")&&(m=!0)}c+='<p class="left">'+b+"</p></div>"}else"image"===d?c+='<div class="img"><img src="/img/projects/'+t+"/"+b+'" class="img"></div>':"render"===d?c+='<div class="render"><img src="/img/projects/'+t+"/"+b+'" class="img"></div>':console.log("unknown tag name")}c+="</div>"}document.getElementsByClassName("body")[0].innerHTML=c}(this,t)},n.open("GET",e,!0),n.send()}(n,t)?Object(j.jsx)("div",{children:"hi"}):Object(j.jsx)("div",{children:"else"})})}var f=function(e){return Object(j.jsx)(l.a,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/projects",children:Object(j.jsx)(v,{})}),Object(j.jsx)(r.a,{path:"/projects/:name",children:Object(j.jsx)(y,{})})]})})};var k=function(e){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/projects",children:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"/work",children:Object(j.jsx)(x,{})}),Object(j.jsx)(r.a,{path:"/contact",children:Object(j.jsx)(O,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{})})]})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.da605517.chunk.js.map