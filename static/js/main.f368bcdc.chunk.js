(this["webpackJsonpwebsite-v6"]=this["webpackJsonpwebsite-v6"]||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(14),a=n.n(c),l=n(7),r=n(2),o=n.p+"static/media/resume.9e208a27.pdf",j=(n(21),n(0));function d(){return Object(j.jsxs)("div",{id:"navBox",children:[Object(j.jsx)("a",{href:"/",className:"navlinks",children:Object(j.jsx)("p",{children:"Home"})}),Object(j.jsx)(l.b,{to:"/projects",className:"navlinks",children:Object(j.jsx)("p",{children:"Projects"})}),Object(j.jsx)(l.b,{to:"/work",className:"navlinks",children:Object(j.jsx)("p",{children:"Work"})}),Object(j.jsx)(l.b,{to:"/contact",className:"navlinks",children:Object(j.jsx)("p",{children:"Contact"})}),Object(j.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:"navlinks",children:Object(j.jsx)("p",{children:"Resume"})})]})}var h=n(16);n(31);function b(){return Object(i.useEffect)((function(){!function(){var e,t=document.getElementById("background-canvas"),n=t.width=window.innerWidth,i=t.height=window.innerHeight,s=t.getContext("2d"),c=[],a=0,l=0,r=[[0,1],[1,0],[0,-1],[-1,0],[.7,.7],[.7,-.7],[-.7,.7],[-.7,-.7]],o={x:n/2,y:i/2,vx:0,vy:0,width:10};function j(){c.length=0;for(var e=0;e<4;++e)c.push(new h(o));s.fillStyle="#222",s.fillRect(0,0,n,i)}function d(e){return"hsl( hue, 30%, 30% )".replace("hue",e/n*360+a)}function h(e){this.x=0|e.x,this.y=0|e.y,this.width=e.width/1.25;do{var t=r[Math.random()*r.length|0];this.vx=t[0],this.vy=t[1]}while(this.vx===-e.vx&&this.vy===-e.vy||this.vx===e.vx&&this.vy===e.vy);this.vx*=5,this.vy*=5,this.dist=20*Math.random()+10}e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?20:100,h.prototype.step=function(){var t=!1,a=this.x,l=this.y;if(this.x+=this.vx,this.y+=this.vy,--this.dist,(this.x<0||this.x>n||this.y<0||this.y>i)&&(t=!0),this.dist<=0&&this.width>1&&(this.dist=20*Math.random()+10,c.length<e&&c.push(new h(this)),c.length<e&&Math.random()<.5&&c.push(new h(this)),Math.random()<.2&&(t=!0)),s.strokeStyle=s.shadowColor=d(this.x),s.beginPath(),s.lineWidth=this.width,s.moveTo(this.x,this.y),s.lineTo(a,l),s.stroke(),t)return!0},j(),function t(){window.requestAnimationFrame(t),++a,s.shadowBlur=0,s.fillStyle="rgba(0,0,0,.02)",s.fillRect(0,0,n,i),s.shadowBlur=.5;for(var r=0;r<c.length;++r)c[r].step()&&(c.splice(r,1),--r);++l,c.length<e&&l>10&&Math.random()<.5&&(l=0,c.push(new h(o)),s.fillStyle=s.shadowColor=d(o.x),s.beginPath(),s.arc(o.x,o.y,10,0,2*Math.PI),s.fill())}(),window.addEventListener("resize",(function(){n=t.width=window.innerWidth,i=t.height=window.innerHeight,o.x=n/2,o.y=i/2,j()}))}()}),[]),Object(j.jsx)("canvas",{id:"background-canvas",style:{zIndex:-1}})}function m(){function e(){fetch("/splashes.txt").then((function(e){return e.text()})).then((function(e){var t,n,i=e.split(/\r?\n|\r/),s=i[(t=0,n=i.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];c(s)}))}var t=Object(i.useState)(""),n=Object(h.a)(t,2),s=n[0],c=n[1];return Object(i.useEffect)((function(){return e(),document.body.style.overflowY="hidden",document.body.style.overflowX="hidden",function(){document.body.style.overflowY="scroll",document.body.style.overflowX="scroll"}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("p",{id:"title",children:"Owen Moogk"}),Object(j.jsx)("p",{id:"splash",onClick:function(){return e()},children:s})]}),Object(j.jsx)(b,{})]})}n(32);function p(){return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("p",{className:"title",children:"Work"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{id:"workSubtitle",children:"Coming soon to a website near you :)"})]})})}function x(e){return Object(j.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"contactLink",children:Object(j.jsx)("div",{className:"text",children:e.text})})})}n(33);function u(){return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("p",{className:"title",children:"Contact"}),Object(j.jsxs)("div",{id:"contacts",children:[Object(j.jsx)(x,{link:"mailto:owenmoogk@gmail.com",text:"Personal Email"}),Object(j.jsx)(x,{link:"tel:+1-226-989-0602",text:"Phone"}),Object(j.jsx)(x,{link:"https://linktr.ee/owenmoogk",text:"Social Media"}),Object(j.jsx)(x,{link:"https://github.com/owenmoogk",text:"Github"}),Object(j.jsx)(x,{link:"https://www.thingiverse.com/owen_moogk",text:"Thingiverse"}),Object(j.jsx)(x,{link:"https://repl.it/@owenm21",text:"Repl.it"}),Object(j.jsx)(x,{link:"https://www.linkedin.com/in/owen-moogk-1ab9371b8/",text:"LinkedIn"})]})]})}function O(e){var t="/projects/"+e.name,n=e.type.toLowerCase(),i=!1;e.link&&(i=!0,t=e.link);var s="/img/projects/"+e.name+"/main.png";function c(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"content-overlay "+n}),Object(j.jsx)("img",{className:"content-image",src:s,alt:""}),Object(j.jsxs)("div",{className:"content-details "+n,children:[Object(j.jsx)("h3",{className:"content-title",children:e.title}),Object(j.jsx)("p",{className:"type",children:n.toUpperCase()})]})]})}return Object(j.jsx)("div",{className:"content",children:i?Object(j.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:c()}):Object(j.jsx)(l.b,{to:t,children:c()})})}function g(e){var t=document.getElementsByClassName("active");t[0].className=t[0].className.replace(" active","");var n="sort_"+e;document.getElementsByClassName(n)[0].className+=" active";for(var i=document.getElementsByClassName("content"),s=0;s<i.length;s++){if("all"===e)i[s].style.display="";else i[s].getElementsByClassName("type")[0].innerHTML.toString().toLowerCase()===e?i[s].style.display="":i[s].style.display="none"}}n(34),n(35);function v(){return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("p",{className:"title",children:"Projects"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"sorting",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("span",{className:"sort_all btn active",onClick:function(){return g("all")},children:Object(j.jsx)("p",{children:"All"})}),Object(j.jsx)("span",{className:"sort_cad btn",onClick:function(){return g("cad")},children:Object(j.jsx)("p",{children:"CAD"})}),Object(j.jsx)("span",{className:"sort_coding btn",onClick:function(){return g("coding")},children:Object(j.jsx)("p",{children:"Coding"})}),Object(j.jsx)("span",{className:"sort_mechanical btn",onClick:function(){return g("mechanical")},children:Object(j.jsx)("p",{children:"Mechanical"})}),Object(j.jsx)("span",{className:"sort_web-dev btn",onClick:function(){return g("web-dev")},children:Object(j.jsx)("p",{children:"Web-Dev"})})]}),Object(j.jsx)("div",{className:"sort",children:Object(j.jsx)("input",{type:"text",id:"searchBar",onKeyUp:function(){return function(){for(var e=document.getElementById("searchBar").value.toUpperCase(),t=document.getElementById("projectsGoHere").getElementsByClassName("content"),n=0;n<t.length;n++){var i=t[n].getElementsByClassName("content-title")[0].innerText,s=t[n].getElementsByClassName("type")[0].innerText;i.toUpperCase().indexOf(e)>-1||s.toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none"}}()},placeholder:"Search by Date, Title, or Text",title:"Type to search"})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"projectsGoHere",children:[Object(j.jsx)(O,{title:"Music Bot",name:"music-bot",type:"coding"}),Object(j.jsx)(O,{title:"NHL Fantasy App",name:"nhl-fantasy",type:"coding"}),Object(j.jsx)(O,{title:"Pathfinding Visualizer",name:"pathfinding-visualizer",type:"coding"}),Object(j.jsx)(O,{title:"Sorting Visualizer",name:"sorting-visualizer",type:"coding",link:"https://owenmoogk.github.io/sorting-visualizer/"}),Object(j.jsx)(O,{title:"Firefly Simulator",name:"firefly-simulator",type:"coding"}),Object(j.jsx)(O,{title:"Outbreak Simulator",name:"outbreak-simulator",type:"coding"}),Object(j.jsx)(O,{title:"Pendulum Physics Simulator",name:"pendulum-simulator",type:"coding"}),Object(j.jsx)(O,{title:"Sudoku Bot",name:"sudoku-bot",type:"coding",link:"https://owenmoogk.github.io/sudoku-visualizer"}),Object(j.jsx)(O,{title:"Notes App",name:"notes-app",type:"coding"}),Object(j.jsx)(O,{title:"LAN Messenger",name:"lan-messenger",type:"coding"}),Object(j.jsx)(O,{title:"Grocery List App",name:"grocery-list",type:"coding"}),Object(j.jsx)(O,{title:"Unix Time Converter",name:"unix-time",type:"coding",link:"https://owenmoogk.github.io/unix-time"}),Object(j.jsx)(O,{title:"Password Manager",name:"password-manager",type:"coding",link:"https://owenmoogk.github.io/password-manager/"}),Object(j.jsx)(O,{title:"Color Picker",name:"color-picker",type:"coding"}),Object(j.jsx)(O,{title:"COVID Scraper",name:"covid-scraper",type:"coding"}),Object(j.jsx)(O,{title:"COVID Website",name:"covid-website",type:"web-dev"}),Object(j.jsx)(O,{title:"Dino Game AI",name:"dino-game-ai",type:"coding"}),Object(j.jsx)(O,{title:"Geometry Calculator",name:"geometry-calculator",type:"coding"}),Object(j.jsx)(O,{title:"Simplelib",name:"simplelib",type:"coding",link:"http://simplelib.tk/"}),Object(j.jsx)(O,{title:"Flappy Bird AI",name:"flappy-bird-ai",type:"coding"}),Object(j.jsx)(O,{title:"Email Bot",name:"email-bot",type:"coding"}),Object(j.jsx)(O,{title:"Snake",name:"snake",type:"coding"}),Object(j.jsx)(O,{title:"Model Rocket",name:"model-rocket",type:"mechanical"}),Object(j.jsx)(O,{title:"Hydraulic Arm",name:"hydraulic-arm",type:"mechanical"}),Object(j.jsx)(O,{title:"Space Invaders",name:"space-invaders",type:"coding"}),Object(j.jsx)(O,{title:"The Compiler",name:"the-compiler",type:"web-dev",link:"http://thecompiler.cf/"}),Object(j.jsx)(O,{title:"Website Development",name:"web-development",type:"web-dev"}),Object(j.jsx)(O,{title:"Renders/Graphic Design",name:"renders",type:"CAD"}),Object(j.jsx)(O,{title:"Minecraft Modifications",name:"minecraft-mods",type:"coding"}),Object(j.jsx)(O,{title:"Vortex",name:"vortex",type:"CAD"}),Object(j.jsx)(O,{title:"2702 Rebels 2020 Robot",name:"2702-2020",type:"Mechanical"}),Object(j.jsx)(O,{title:"Engine Assembly",name:"engine",type:"Mechanical"}),Object(j.jsx)(O,{title:"2702 Rebels 2019 Robot",name:"2702-2019",type:"Mechanical"})]})]})})}n(36);function y(){var e=Object(r.f)().name,t="/assets/projects/"+e+".xml";return Object(j.jsx)("div",{className:"body",children:function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e,t){var n=e.responseXML,i="";try{var s=n.getElementsByTagName("page-title")[0].innerHTML}catch(m){return void(document.getElementsByClassName("body")[0].innerHTML="<h2>Page not found</h2>")}var c=n.getElementsByTagName("date")[0].innerHTML;i+='<div class="project-page-title"><p style="line-height: 70px;">'+s+'</p></div><div class="date"><p class="pdate">'+c+"</p></div>";for(var a=n.getElementsByTagName("block"),l=0;l<a.length;l++){var r=a[l].children.length,o=a[l].children;i+='<div class="block">';for(var j=0;j<r;j++){var d=o[j].tagName,h=o[j].innerHTML;if("title"===d)i+='<div class="text"><h1 class="left">'+h+"</h1>";else if("text"===d){for(var b=!1;!1===b;){-1===(h=h.replace("~~","<br>")).search("~~")&&(b=!0)}i+='<p class="left">'+h+"</p></div>"}else"image"===d?i+='<div class="img"><img src="/img/projects/'+t+"/"+h+'" class="img"></div>':"render"===d?i+='<div class="render"><img src="/img/projects/'+t+"/"+h+'" class="img"></div>':console.log("unknown tag name")}i+="</div>"}document.getElementsByClassName("body")[0].innerHTML=i}(this,t)},n.open("GET",e,!0),n.send()}(t,e)?Object(j.jsx)("div",{children:"hi"}):Object(j.jsx)("div",{children:"else"})})}var f=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/projects",children:Object(j.jsx)(v,{})}),Object(j.jsx)(r.a,{path:"/projects/:name",children:Object(j.jsx)(y,{})})]})})};n(37);var w=function(e){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/projects",children:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"/work",children:Object(j.jsx)(p,{})}),Object(j.jsx)(r.a,{path:"/contact",children:Object(j.jsx)(u,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(m,{})})]})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f368bcdc.chunk.js.map