const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null,r=!1;t.addEventListener("click",(function(){if(r)return;r=!0,o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),r=!1}));
//# sourceMappingURL=01-color-switcher.cc189e11.js.map