!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(r,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,c)}l((a=a.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=a[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function r(e){if("opaqueredirect"===e.type&&""!==e.url&&(location.href=e.url),e.headers.has("refresh")){var t=e.headers.get("refresh"),n=/url=(.+)$/;if(n.test(t)){var a=t.match(n);location.href=a[1]}}}function o(e){return n(this,void 0,void 0,function(){var t,n;return a(this,function(a){switch(a.label){case 0:return[4,fetch(e)];case 1:if(r(t=a.sent()),!t.ok)throw t;return[4,t.json()];case 2:if("ok"!==(n=a.sent()).status)throw n;return[2,n]}})})}function i(e){var t=document.querySelectorAll("."+e);Array.prototype.forEach.call(t,function(e){e.disabled=!0})}function c(e){var t=document.querySelectorAll("."+e);Array.prototype.forEach.call(t,function(e){e.disabled=!1})}Object.defineProperty(t,"__esModule",{value:!0}),t.fireEventById=function(e,t,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(t,!1,!1,n),document.getElementById(e).dispatchEvent(a)},t.fetchUtilJson=function(e){return fetch(e).then(function(e){return r(e),new Promise(function(t,n){e.ok?t(e.json()):n(e.statusText)})}).then(function(e){return new Promise(function(t,n){"ok"===e.status?t(e):n(e)})})},t.fetchUtilJsonAsync=o,t.ajaxFormAsync=function(e,t,r){return n(this,void 0,void 0,function(){var n,l,u,s;return a(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),n=new FormData(e),l=new Request(t,{body:n,credentials:"include",method:"POST",redirect:"manual"}),i(r),[4,o(l)];case 1:return u=a.sent(),c(r),[2,u];case 2:throw s=a.sent(),c(r),s;case 3:return[2]}})})},t.disableButtonByClassName=i,t.enableButtonByClassName=c},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=function(){function e(e){this.current=1,this.totalPage=1,this.idObj=e;var t=document.getElementById(this.idObj.pagingTemplate).content,n=document.importNode(t,!0);this.pagingBase=n.querySelector("ul");var a=document.getElementById(this.idObj.pagingTemplateOpen).content,r=document.importNode(a,!0);this.pagingOpen=r.querySelectorAll("li");var o=document.getElementById(this.idObj.pagingTemplateClose).content,i=document.importNode(o,!0);this.pagingClose=i.querySelectorAll("li");var c=document.getElementById(this.idObj.pagingFragmentTemplate).content,l=document.importNode(c,!0);this.pagingFragment=l.querySelector("li"),this.setEvent()}return e.calcPagingNumber=function(e,t){var n={close:1,hasNext:!1,hasPrev:!1,open:1},a=e%10;return n.open=0===a?e-9:e-a+1,0===a?n.close=e:(n.close=e+(10-a),n.close>t&&(n.close=t)),n.open>=11&&(n.hasPrev=!0),0===n.close%10?n.close+1<=t&&(n.hasNext=!0):n.close+1<t&&(n.hasNext=!0),n},e.calcPrevNextPage=function(e,t,n){var a=1;return(a=e+n)<=0&&(a=1),a>t&&(a=t),a},e.prototype.setEvent=function(){var t=this;document.getElementById(this.idObj.paging).addEventListener("onsearch",function(e){var n=e.detail;console.dir(n),t.current=n.page,t.totalPage=n.totalpage,t.buildPaging(n),t.buildMisc(n)},!1),document.getElementById(this.idObj.paging).addEventListener("click",function(n){n.preventDefault();var r=n.target;if(r.classList.contains("page-link")){var o={page:1};if(r.classList.contains("isnum"))o.page=Number(r.textContent);else{var i=Number(r.getAttribute("data-add"));o.page=e.calcPrevNextPage(t.current,t.totalPage,i)}a.fireEventById(t.idObj.form,"searchrequest",o)}},!1)},e.prototype.buildPaging=function(t){for(var n=this,a=document.getElementById(this.idObj.pagingWrap);a.lastChild;)a.removeChild(a.lastChild);var r=document.createDocumentFragment();this.pagingNumberObj=e.calcPagingNumber(t.page,t.totalpage),Array.prototype.forEach.call(this.pagingOpen,function(e){var t=e.cloneNode(!0);n.pagingNumberObj.hasPrev||t.classList.add("disabled"),r.appendChild(t)});for(var o=this.pagingNumberObj.open;o<=this.pagingNumberObj.close;o++){var i=this.pagingFragment.cloneNode(!0);i.querySelector("a").textContent=o.toString(),o===t.page&&i.classList.add("active"),r.appendChild(i.cloneNode(!0))}Array.prototype.forEach.call(this.pagingClose,function(e){var t=e.cloneNode(!0);n.pagingNumberObj.hasNext||t.classList.add("disabled"),r.appendChild(t)});var c=this.pagingBase.cloneNode(!0);c.appendChild(r),a.appendChild(c)},e.prototype.buildMisc=function(e){var t="全 "+e.total+" 件 ("+e.page+" / "+e.totalpage+" ページ) "+e.perpage+" 件ずつ表示";document.getElementById(this.idObj.pagingMisc).textContent=t},e}();t.PagingManager=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n(0);document.addEventListener("DOMContentLoaded",function(){var e={data:[],page:1,perpage:10,total:3,totalpage:1},t=document.querySelectorAll(".buttons button");Array.prototype.forEach.call(t,function(t){t.addEventListener("click",function(t){var n=t.target,a=n.getAttribute("data-page"),o=n.getAttribute("data-total");e.totalpage=Number(o),e.page=Number(a),r.fireEventById("paging","onsearch",e)},!1)}),document.getElementById("searchform").addEventListener("searchrequest",function(e){var t=e.detail;e.target.querySelector("input").value=t.page.toString()},!1);new a.PagingManager({form:"searchform",paging:"paging",pagingFragmentTemplate:"paging_fragment",pagingMisc:"paging_misc",pagingTemplate:"paging_template",pagingTemplateClose:"paging_template_close",pagingTemplateOpen:"paging_template_open",pagingWrap:"paging_wrap",reset:"xxxxxxxxx",search:"xxxxxxxxx",table:"xxxxxxxxx",template:"xxxxx"})},!1)}]);