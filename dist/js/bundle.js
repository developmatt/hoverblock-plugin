!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);window.onload=function(){let e=document.createElement("div");e.id="hoverblock-filler",e.className="hoverblock-filler",e.attr="filler",e.innerHTML='<p id="hoverblock-filler-text" class="hoverblock-filler-text" data-hoverblock-filler="text"></p>',e.style="position: absolute;\n    background-color: rgba(0, 0, 0, 0.8);\n    top: -50%;\n    left: 50%;\n    transition: 0.3s;\n    padding: 0 10px;\n    box-sizing: border-box;";let t=document.querySelector("[data-hoverblock=content]");t.appendChild(e),t.style="position: relative; overflow: hidden";let o=document.querySelectorAll("[data-hoverblock=fillable-block]");t.addEventListener("mouseleave",function(){e.style.top="-"+t.offsetHeight+"px"}),o.forEach((t,o)=>{t.addEventListener("mouseover",function(){document.querySelector("[data-hoverblock-filler=text]").innerText=this.getAttribute("data-hoverblock-text"),e.style.top=this.offsetTop+"px",e.style.left=this.offsetLeft+"px",e.style.width=this.offsetWidth+"px",e.style.height=this.offsetHeight+"px"})})}}]);