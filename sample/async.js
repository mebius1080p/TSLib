(()=>{"use strict";var l={};function c(r){if(r.type==="opaqueredirect"&&r.url!==""&&(location.href=r.url),!r.headers.has("refresh"))return;const t=r.headers.get("refresh");if(t===null)return;const n=/url=(.+)$/;if(n.test(t)){const e=t.match(n);if(e===null)return;location.href=e[1]}}async function s(r){const t={credentials:"include",method:r.method||"GET",redirect:"manual"};"body"in r&&(t.body=r.body);const n=new Request(r.url,t),e=await fetch(n);if(c(e),!e.ok)throw e;const o=await e.json();if(o.status!=="ok")throw o;return o}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("suc_btn");r!==null&&r.addEventListener("click",async()=>{try{const o=await s({url:"./success.json"});console.log("success!"),console.dir(o)}catch(e){console.log("error"),console.dir(e)}},!1);const t=document.getElementById("fail_btn_404");t!==null&&t.addEventListener("click",async()=>{try{const o=await s({url:"./404.json"});console.log("success!"),console.dir(o)}catch(e){console.log("error"),console.dir(e)}},!1);const n=document.getElementById("fail_btn_bad");n!==null&&n.addEventListener("click",async()=>{try{const o=await s({url:"./bad.json"});console.log("success!"),console.dir(o)}catch(e){console.log("error"),console.dir(e)}},!1)},!1)})();
