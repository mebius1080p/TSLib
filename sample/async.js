(()=>{"use strict";var e=function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function u(e){try{s(r.next(e))}catch(e){c(e)}}function i(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,i)}s((r=r.apply(e,n||[])).next())}))},n=function(e,n){var t,r,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=n.call(e,u)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function t(e){if("opaqueredirect"===e.type&&""!==e.url&&(location.href=e.url),e.headers.has("refresh")){var n=e.headers.get("refresh");if(null!==n){var t=/url=(.+)$/;if(t.test(n)){var r=n.match(t);if(null===r)return;location.href=r[1]}}}}function r(r){return e(this,void 0,Promise,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(r)];case 1:if(t(e=n.sent()),!e.ok)throw e;return[4,e.json()];case 2:if("ok"!==(o=n.sent()).status)throw o;return[2,o]}}))}))}var o=function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function u(e){try{s(r.next(e))}catch(e){c(e)}}function i(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,i)}s((r=r.apply(e,n||[])).next())}))},c=function(e,n){var t,r,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=n.call(e,u)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("suc_btn");null!==e&&e.addEventListener("click",(function(){return o(void 0,void 0,void 0,(function(){var e,n;return c(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,r(new Request("./success.json"))];case 1:return e=t.sent(),console.log("success!"),console.dir(e),[3,3];case 2:return n=t.sent(),console.log("error"),console.dir(n),[3,3];case 3:return[2]}}))}))}),!1);var n=document.getElementById("fail_btn_404");null!==n&&n.addEventListener("click",(function(){return o(void 0,void 0,void 0,(function(){var e,n;return c(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,r(new Request("./404.json"))];case 1:return e=t.sent(),console.log("success!"),console.dir(e),[3,3];case 2:return n=t.sent(),console.log("error"),console.dir(n),[3,3];case 3:return[2]}}))}))}),!1);var t=document.getElementById("fail_btn_bad");null!==t&&t.addEventListener("click",(function(){return o(void 0,void 0,void 0,(function(){var e,n;return c(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,r(new Request("./bad.json"))];case 1:return e=t.sent(),console.log("success!"),console.dir(e),[3,3];case 2:return n=t.sent(),console.log("error"),console.dir(n),[3,3];case 3:return[2]}}))}))}),!1)}),!1)})();