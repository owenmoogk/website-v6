(this["webpackJsonpwebsite-v6"]=this["webpackJsonpwebsite-v6"]||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(15),i=n.n(a),l=(n(21),n(9)),r=n(2),j=(n(14),n.p+"static/media/resume.9be56fe4.pdf"),o=n(0);function d(e){return Object(o.jsxs)("div",{id:"navBox",children:[Object(o.jsx)("a",{href:"/",className:"navlinks",children:Object(o.jsx)("p",{children:"Home"})}),Object(o.jsx)("a",{href:"/projects",className:"navlinks",children:Object(o.jsx)("p",{children:"Projects"})}),Object(o.jsx)("a",{href:"/work",className:"navlinks",children:Object(o.jsx)("p",{children:"Work"})}),Object(o.jsx)("a",{href:"/contact",className:"navlinks",children:Object(o.jsx)("p",{children:"Contact"})}),Object(o.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",className:"navlinks",children:Object(o.jsx)("p",{children:"Resume"})})]})}n(23);function b(e){function t(){fetch("/website-v6/splashes.txt").then((function(e){return e.text()})).then((function(e){var t,n,c=e.split(/\r?\n|\r/),s=c[(t=0,n=c.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];document.getElementById("subtitle").innerText=s}))}return t(),Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("p",{id:"title",onClick:function(){return console.log("hi there friend!")},children:"Owen Moogk"}),Object(o.jsx)("p",{id:"subtitle",onClick:function(){return t()}})]})}function m(e){return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("p",{className:"title",children:"Work"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{id:"subtitle",children:"Coming soon to a website near you :)"})]})})}function h(e){return Object(o.jsx)("div",{className:"link primary",children:Object(o.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("div",{className:"text",children:e.text})})})}n(24);function x(e){return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("p",{className:"title",children:"Contact"}),Object(o.jsx)("div",{className:"contact",children:Object(o.jsxs)("div",{id:"main",children:[Object(o.jsx)(h,{link:"mailto:owenmoogk@gmail.com",text:"Personal Email"}),Object(o.jsx)(h,{link:"tel:+1-226-989-0602",text:"Phone"}),Object(o.jsx)(h,{link:"https://linktr.ee/owenmoogk",text:"Social Media"}),Object(o.jsx)(h,{link:"https://github.com/owenmoogk",text:"Github"}),Object(o.jsx)(h,{link:"https://www.thingiverse.com/owen_moogk",text:"Thingiverse"}),Object(o.jsx)(h,{link:"https://repl.it/@owenm21",text:"Repl.it"}),Object(o.jsx)(h,{link:"https://www.linkedin.com/in/owen-moogk-1ab9371b8/",text:"LinkedIn"})]})})]})}n(25),n(26);function p(e){var t={cad:"#0abde3",coding:"#a6c44e",mechanical:"#ff9f43","web-dev":"#d65858"}[e.type.toLowerCase()],n="/projects/"+e.name,c="/website-v6/img/projects/"+e.name+"/main.png";return Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("a",{href:n,children:[Object(o.jsx)("div",{className:"content-overlay",style:{backgroundColor:t}}),Object(o.jsx)("img",{className:"content-image",src:c,alt:""}),Object(o.jsxs)("div",{className:"content-details",style:{backgroundColor:t},children:[Object(o.jsx)("h3",{className:"content-title",children:e.title}),Object(o.jsx)("p",{className:"type",children:e.type.toUpperCase()})]})]})})}function O(e){var t=document.getElementsByClassName("active");t[0].className=t[0].className.replace(" active","");var n="sort_"+e;document.getElementsByClassName(n)[0].className+=" active";for(var c=document.getElementsByClassName("content"),s=0;s<c.length;s++){if("all"===e)c[s].style.display="";else c[s].getElementsByClassName("type")[0].innerHTML.toString().toLowerCase()===e?c[s].style.display="":c[s].style.display="none"}}function u(e){return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("p",{className:"title",children:"Projects"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"sorting",children:[Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("span",{className:"sort_all btn active",onClick:function(){return O("all")},children:Object(o.jsx)("p",{children:"All"})}),Object(o.jsx)("span",{className:"sort_cad btn",onClick:function(){return O("cad")},children:Object(o.jsx)("p",{children:"CAD"})}),Object(o.jsx)("span",{className:"sort_coding btn",onClick:function(){return O("coding")},children:Object(o.jsx)("p",{children:"Coding"})}),Object(o.jsx)("span",{className:"sort_mechanical btn",onClick:function(){return O("mechanical")},children:Object(o.jsx)("p",{children:"Mechanical"})}),Object(o.jsx)("span",{className:"sort_web-dev btn",onClick:function(){return O("web-dev")},children:Object(o.jsx)("p",{children:"Web-Dev"})})]}),Object(o.jsxs)("div",{className:"sort",children:[Object(o.jsx)("label",{children:"Sort by: \xa0 "}),Object(o.jsxs)("select",{id:"mySort",onChange:function(){return function(){var e,t,n=document.getElementById("mySort").value;"alpha-desc"===n?(e="alpha",t="asc"):"alpha-asc"===n&&(e="alpha",t="desc");for(var c,s,a,i,l=document.getElementsByClassName("content"),r=!0;r;){for(r=!1,s=0;s<l.length-1;s++){if(c=!1,"alpha"!==e&&"alpha"!==e||(a=l[s].getElementsByClassName("content-title")[0].innerHTML,i=l[s+1].getElementsByClassName("content-title")[0].innerHTML),"asc"===t&&a>i){c=!0;break}if("desc"===t&&a<i){c=!0;break}}c&&(l[s].parentNode.insertBefore(l[s+1],l[s]),r=!0)}}()},children:[Object(o.jsx)("option",{value:"",children:"--"}),Object(o.jsx)("option",{value:"alpha-desc",children:"A-Z"}),Object(o.jsx)("option",{value:"alpha-asc",children:"Z-A"})]})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{id:"projectsGoHere",children:[Object(o.jsx)(p,{title:"COVID Scraper",name:"covid-scraper",type:"coding"}),Object(o.jsx)(p,{title:"Sorting Visualizer",name:"sorting-visualizer",type:"coding"}),Object(o.jsx)(p,{title:"COVID Website",name:"covid-website",type:"web-dev"}),Object(o.jsx)(p,{title:"Dino Game AI",name:"dino-game-ai",type:"coding"}),Object(o.jsx)(p,{title:"Geometry Calculator",name:"geometry-calculator",type:"coding"}),Object(o.jsx)(p,{title:"Simplelib",name:"simplelib",type:"coding"}),Object(o.jsx)(p,{title:"Flappy Bird AI",name:"flappy-bird-ai",type:"coding"}),Object(o.jsx)(p,{title:"Email Bot",name:"email-bot",type:"coding"}),Object(o.jsx)(p,{title:"Snake",name:"snake",type:"coding"}),Object(o.jsx)(p,{title:"Model Rocket",name:"model-rocket",type:"mechanical"}),Object(o.jsx)(p,{title:"Hydraulic Arm",name:"hydraulic-arm",type:"mechanical"}),Object(o.jsx)(p,{title:"Space Invaders",name:"space-invaders",type:"coding"}),Object(o.jsx)(p,{title:"The Compiler",name:"the-compiler",type:"web-dev"}),Object(o.jsx)(p,{title:"Website Development",name:"web-development",type:"web-dev"}),Object(o.jsx)(p,{title:"Renders/Graphic Design",name:"renders",type:"CAD"}),Object(o.jsx)(p,{title:"Minecraft Modifications",name:"minecraft-mods",type:"coding"}),Object(o.jsx)(p,{title:"Vortex",name:"vortex",type:"CAD"}),Object(o.jsx)(p,{title:"2702 Rebels 2020 Robot",name:"2702-2020",type:"Mechanical"}),Object(o.jsx)(p,{title:"Engine Assembly",name:"engine",type:"Mechanical"}),Object(o.jsx)(p,{title:"2702 Rebels 2019 Robot",name:"2702-2019",type:"Mechanical"})]})]})})}n(27);function v(e){var t="/website-v6/assets/projects/"+Object(r.f)().id+".xml";return Object(o.jsx)("div",{className:"body",children:function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e){var t=e.responseXML,n="",c=t.getElementsByTagName("page-title")[0].innerHTML,s=t.getElementsByTagName("date")[0].innerHTML;n+='<div className="page-title"><p style="line-height: 70px;">'+c+'</p></div><div className="date"><p className="pdate">'+s+"</p></div>";for(var a=t.getElementsByTagName("block"),i=0;i<a.length;i++){var l=a[i].children.length,r=a[i].children;n+='<div className="block">';for(var j=0;j<l;j++){var o=r[j].tagName,d=r[j].innerHTML;if("title"===o)n+='<div className="text"><h1>'+d+"</h1>";else if("text"===o){for(var b=!1;!1===b;){-1===(d=d.replace("~~","<br>")).search("~~")&&(b=!0)}n+="<p>"+d+"</p></div>"}else"image"===o?n+='<div className="img"><img src="'+d+'" className="img"></div>':"render"===o?n+='<div className="render"><img src="'+d+'" className="img"></div>':console.log("unknown tag name")}n+="</div>"}document.getElementsByClassName("body")[0].innerHTML=n}(this)},t.open("GET",e,!0),t.send()}(t)})}var g=function(e){return Object(o.jsx)(l.a,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/projects",children:Object(o.jsx)(u,{})}),Object(o.jsx)(r.a,{path:"/projects/:id",children:Object(o.jsx)(v,{})})]})})};var f=function(e){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/projects",children:Object(o.jsx)(g,{})}),Object(o.jsx)(r.a,{path:"/work",children:Object(o.jsx)(m,{})}),Object(o.jsx)(r.a,{path:"/contact",children:Object(o.jsx)(x,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/",children:Object(o.jsx)(b,{})})]})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7103f3f7.chunk.js.map