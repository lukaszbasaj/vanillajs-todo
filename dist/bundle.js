!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}([function(t,e,i){i(1),t.exports=i(3)},function(t,e){},,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(4),d=n(r);new d.default},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=[{id:"1",title:"This is fist task",done:!1,date:new Date},{id:"2",title:"This is second task",done:!1,date:new Date},{id:"3",title:"This is third task",done:!1,date:new Date},{id:"4",title:"This is forth task",done:!1,date:new Date}],d=function(){function t(){i(this,t);var e=this;this.list=document.querySelector(".list-items"),this.render(),document.querySelector(".btn-add-item").addEventListener("click",this.insertItem.bind(this)),document.querySelector(".btn-update").addEventListener("click",this.updateItem.bind(this)),document.addEventListener("click",function(t){t.target&&(t.target.classList.contains("btn-delete")&&e.removeItem(t),t.target.classList.contains("btn-edit")&&e.renderEditForm(t),t.target.classList.contains("btn-complete")&&e.setTaskComplete(t))})}return n(t,[{key:"render",value:function(){var t=this;this.list.innerHTML="",r.forEach(function(e){t.createDomElements(e.id),t.li.insertAdjacentHTML("afterbegin",e.title),e.done&&t.li.classList.add("done"),t.list.appendChild(t.li)})}},{key:"renderEditForm",value:function(t){var e=t.target.getAttribute("data-id");document.querySelector(".edit-popup").classList.remove("hide"),document.querySelector(".edit-popup").classList.add("show"),document.querySelector(".btn-update").setAttribute("data-id",e),r.forEach(function(t){t.id===e&&(document.querySelector(".edit-item").value=t.title)})}},{key:"createDomElements",value:function(t){var e,i,n,r;this.li=document.createElement("li"),this.edit=document.createElement("button"),this.delete=document.createElement("button"),this.complete=document.createElement("button");var d=["li","items","list-group-item"];(e=this.li.classList).add.apply(e,d);var a=["btn-edit","btn","btn-outline-primary","btn-sm"],s=["btn-delete","btn","btn-outline-danger","btn-sm"],o=["btn-complete","btn","btn-outline-success","btn-sm"];(i=this.edit.classList).add.apply(i,a),(n=this.delete.classList).add.apply(n,s),(r=this.complete.classList).add.apply(r,o),this.delete.setAttribute("data-id",t),this.edit.setAttribute("data-id",t),this.complete.setAttribute("data-id",t),this.edit.innerHTML="Edit",this.delete.innerHTML="Delete",this.complete.innerHTML="Complete",this.li.appendChild(this.delete),this.li.appendChild(this.edit),this.li.appendChild(this.complete)}},{key:"insertItem",value:function(){var t=document.querySelector(".item").value,e={id:Date.now().toString(),title:t,done:!1,date:new Date};r.push(e),document.querySelector(".item").value="",this.render()}},{key:"removeItem",value:function(t){var e=t.target.getAttribute("data-id");r=r.filter(function(t){if(t.id!==e)return t}),this.render()}},{key:"updateItem",value:function(t){var e=t.target.getAttribute("data-id"),i=document.querySelector(".edit-item").value;r=r.map(function(t){return t.id===e&&(t.title=i),t}),document.querySelector(".edit-popup").classList.remove("show"),document.querySelector(".edit-popup").classList.add("hide"),this.render()}},{key:"setTaskComplete",value:function(t){var e=t.target.getAttribute("data-id");r=r.map(function(t){return t.id===e&&(t.done=!0),t}),this.render()}}]),t}();e.default=d}]);