(this["webpackJsonpwebsite-v6"]=this["webpackJsonpwebsite-v6"]||[]).push([[0],{14:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(15),a=n.n(i),l=n(6),r=n(2),o=(n(14),n.p+"static/media/resume.9e208a27.pdf"),j=n(0);function d(e){return Object(j.jsxs)("div",{id:"navBox",children:[Object(j.jsx)(l.b,{to:"/",className:"navlinks",children:Object(j.jsx)("p",{children:"Home"})}),Object(j.jsx)(l.b,{to:"/projects",className:"navlinks",children:Object(j.jsx)("p",{children:"Projects"})}),Object(j.jsx)(l.b,{to:"/work",className:"navlinks",children:Object(j.jsx)("p",{children:"Work"})}),Object(j.jsx)(l.b,{to:"/contact",className:"navlinks",children:Object(j.jsx)("p",{children:"Contact"})}),Object(j.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:"navlinks",children:Object(j.jsx)("p",{children:"Resume"})})]})}n(30);function b(e){function t(){fetch("/splashes.txt").then((function(e){return e.text()})).then((function(e){var t,n,c=e.split(/\r?\n|\r/),s=c[(t=0,n=c.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];document.getElementById("subtitle").innerText=s}))}return t(),Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("p",{id:"title",onClick:function(){return console.log("hi there friend!")},children:"Owen Moogk"}),Object(j.jsx)("p",{id:"subtitle",onClick:function(){return t()}})]})}function m(e){return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("p",{className:"title",children:"Work"}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{id:"subtitle",children:"Coming soon to a website near you :)"})]})})}function h(e){return Object(j.jsx)("div",{className:"link primary",children:Object(j.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"text",children:e.text})})})}n(31);function p(e){return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("p",{className:"title",children:"Contact"}),Object(j.jsx)("div",{className:"contact",children:Object(j.jsxs)("div",{id:"main",children:[Object(j.jsx)(h,{link:"mailto:owenmoogk@gmail.com",text:"Personal Email"}),Object(j.jsx)(h,{link:"tel:+1-226-989-0602",text:"Phone"}),Object(j.jsx)(h,{link:"https://linktr.ee/owenmoogk",text:"Social Media"}),Object(j.jsx)(h,{link:"https://github.com/owenmoogk",text:"Github"}),Object(j.jsx)(h,{link:"https://www.thingiverse.com/owen_moogk",text:"Thingiverse"}),Object(j.jsx)(h,{link:"https://repl.it/@owenm21",text:"Repl.it"}),Object(j.jsx)(h,{link:"https://www.linkedin.com/in/owen-moogk-1ab9371b8/",text:"LinkedIn"})]})})]})}n(32),n(33);function x(e){var t={cad:"#0abde3",coding:"#a6c44e",mechanical:"#ff9f43","web-dev":"#d65858"}[e.type.toLowerCase()],n="/projects/"+e.name,c=!1;e.link&&(c=!0,n=e.link);var s="/img/projects/"+e.name+"/main.png";function i(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"content-overlay",style:{backgroundColor:t}}),Object(j.jsx)("img",{className:"content-image",src:s,alt:""}),Object(j.jsxs)("div",{className:"content-details",style:{backgroundColor:t},children:[Object(j.jsx)("h3",{className:"content-title",children:e.title}),Object(j.jsx)("p",{className:"type",children:e.type.toUpperCase()})]})]})}return Object(j.jsx)("div",{className:"content",children:c?Object(j.jsx)("a",{href:n,target:"_blank",children:i()}):Object(j.jsx)(l.b,{to:n,children:i()})})}function O(e){var t=document.getElementsByClassName("active");t[0].className=t[0].className.replace(" active","");var n="sort_"+e;document.getElementsByClassName(n)[0].className+=" active";for(var c=document.getElementsByClassName("content"),s=0;s<c.length;s++){if("all"===e)c[s].style.display="";else c[s].getElementsByClassName("type")[0].innerHTML.toString().toLowerCase()===e?c[s].style.display="":c[s].style.display="none"}}function u(e){return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("p",{className:"title",children:"Projects"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"sorting",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("span",{className:"sort_all btn active",onClick:function(){return O("all")},children:Object(j.jsx)("p",{children:"All"})}),Object(j.jsx)("span",{className:"sort_cad btn",onClick:function(){return O("cad")},children:Object(j.jsx)("p",{children:"CAD"})}),Object(j.jsx)("span",{className:"sort_coding btn",onClick:function(){return O("coding")},children:Object(j.jsx)("p",{children:"Coding"})}),Object(j.jsx)("span",{className:"sort_mechanical btn",onClick:function(){return O("mechanical")},children:Object(j.jsx)("p",{children:"Mechanical"})}),Object(j.jsx)("span",{className:"sort_web-dev btn",onClick:function(){return O("web-dev")},children:Object(j.jsx)("p",{children:"Web-Dev"})})]}),Object(j.jsxs)("div",{className:"sort",children:[Object(j.jsx)("label",{children:"Sort by: \xa0 "}),Object(j.jsxs)("select",{id:"mySort",onChange:function(){return function(){var e,t,n=document.getElementById("mySort").value;"alpha-desc"===n?(e="alpha",t="asc"):"alpha-asc"===n&&(e="alpha",t="desc");for(var c,s,i,a,l=document.getElementsByClassName("content"),r=!0;r;){for(r=!1,s=0;s<l.length-1;s++){if(c=!1,"alpha"!==e&&"alpha"!==e||(i=l[s].getElementsByClassName("content-title")[0].innerHTML,a=l[s+1].getElementsByClassName("content-title")[0].innerHTML),"asc"===t&&i>a){c=!0;break}if("desc"===t&&i<a){c=!0;break}}c&&(l[s].parentNode.insertBefore(l[s+1],l[s]),r=!0)}}()},children:[Object(j.jsx)("option",{value:"",children:"--"}),Object(j.jsx)("option",{value:"alpha-desc",children:"A-Z"}),Object(j.jsx)("option",{value:"alpha-asc",children:"Z-A"})]})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{id:"projectsGoHere",children:[Object(j.jsx)(x,{title:"COVID Scraper",name:"covid-scraper",type:"coding"}),Object(j.jsx)(x,{title:"Sorting Visualizer",name:"sorting-visualizer",type:"coding",link:"https://owenmoogk.github.io/sorting-visualizer/"}),Object(j.jsx)(x,{title:"COVID Website",name:"covid-website",type:"web-dev"}),Object(j.jsx)(x,{title:"Dino Game AI",name:"dino-game-ai",type:"coding"}),Object(j.jsx)(x,{title:"Geometry Calculator",name:"geometry-calculator",type:"coding"}),Object(j.jsx)(x,{title:"Simplelib",name:"simplelib",type:"coding",link:"http://simplelib.tk/"}),Object(j.jsx)(x,{title:"Flappy Bird AI",name:"flappy-bird-ai",type:"coding"}),Object(j.jsx)(x,{title:"Email Bot",name:"email-bot",type:"coding"}),Object(j.jsx)(x,{title:"Snake",name:"snake",type:"coding"}),Object(j.jsx)(x,{title:"Model Rocket",name:"model-rocket",type:"mechanical"}),Object(j.jsx)(x,{title:"Hydraulic Arm",name:"hydraulic-arm",type:"mechanical"}),Object(j.jsx)(x,{title:"Space Invaders",name:"space-invaders",type:"coding"}),Object(j.jsx)(x,{title:"The Compiler",name:"the-compiler",type:"web-dev",link:"http://thecompiler.cf/"}),Object(j.jsx)(x,{title:"Website Development",name:"web-development",type:"web-dev"}),Object(j.jsx)(x,{title:"Renders/Graphic Design",name:"renders",type:"CAD"}),Object(j.jsx)(x,{title:"Minecraft Modifications",name:"minecraft-mods",type:"coding"}),Object(j.jsx)(x,{title:"Vortex",name:"vortex",type:"CAD"}),Object(j.jsx)(x,{title:"2702 Rebels 2020 Robot",name:"2702-2020",type:"Mechanical"}),Object(j.jsx)(x,{title:"Engine Assembly",name:"engine",type:"Mechanical"}),Object(j.jsx)(x,{title:"2702 Rebels 2019 Robot",name:"2702-2019",type:"Mechanical"})]})]})})}n(34);function g(e){var t=Object(r.f)().name,n="/assets/projects/"+t+".xml";return Object(j.jsx)("div",{className:"body",children:function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e,t){var n=e.responseXML,c="",s=n.getElementsByTagName("page-title")[0].innerHTML,i=n.getElementsByTagName("date")[0].innerHTML;c+='<div class="project-page-title"><p style="line-height: 70px;">'+s+'</p></div><div class="date"><p class="pdate">'+i+"</p></div>";for(var a=n.getElementsByTagName("block"),l=0;l<a.length;l++){var r=a[l].children.length,o=a[l].children;c+='<div class="block">';for(var j=0;j<r;j++){var d=o[j].tagName,b=o[j].innerHTML;if("title"===d)c+='<div class="text"><h1 class="left">'+b+"</h1>";else if("text"===d){for(var m=!1;!1===m;){-1===(b=b.replace("~~","<br>")).search("~~")&&(m=!0)}c+='<p class="left">'+b+"</p></div>"}else"image"===d?c+='<div class="img"><img src="/img/projects/'+t+"/"+b+'" class="img"></div>':"render"===d?c+='<div class="render"><img src="/img/projects/'+t+"/"+b+'" class="img"></div>':console.log("unknown tag name")}c+="</div>"}document.getElementsByClassName("body")[0].innerHTML=c}(this,t)},n.open("GET",e,!0),n.send()}(n,t)})}var v=function(e){return Object(j.jsx)(l.a,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/projects",children:Object(j.jsx)(u,{})}),Object(j.jsx)(r.a,{path:"/projects/:name",children:Object(j.jsx)(g,{})})]})})};var f=function(e){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/projects",children:Object(j.jsx)(v,{})}),Object(j.jsx)(r.a,{path:"/work",children:Object(j.jsx)(m,{})}),Object(j.jsx)(r.a,{path:"/contact",children:Object(j.jsx)(p,{})}),Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})})]})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c6bd205f.chunk.js.map