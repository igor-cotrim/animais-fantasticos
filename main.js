(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var r=e&&e.prototype instanceof m?e:m,i=Object.create(r.prototype),a=new S(o||[]);return i._invoke=function(t,e,n){var o=h;return function(r,i){if(o===f)throw new Error("Generator is already running");if(o===v){if("throw"===r)throw i;return C()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var c=l(t,e,n);if("normal"===c.type){if(o=n.done?v:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=v,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",v="completed",p={};function m(){}function y(){}function g(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(O([])));L&&L!==n&&o.call(L,i)&&(b=L);var M=g.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(r,i,a,s){var c=l(t[r],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var r;this._invoke=function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}}function k(t,n){var o=t.iterator[n.method];if(o===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=l(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=g,c(M,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(M),t},t.awrap=function(t){return{__await:t}},E(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new x(u(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(M),c(M,s,"Generator"),c(M,i,(function(){return this})),c(M,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(o,r){return s.type="throw",s.arg=t,n.next=o,r&&(n.method="next",n.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:O(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=function(){function e(n,o){var i=this;t(this,e),r(this,"scrollToSection",(function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(i.options)})),this.linksInternos=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}return o(e,[{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),a=function(){function e(n){var o=this;t(this,e),r(this,"toggleAccordion",(function(t){t.classList.toggle(o.activeClass),t.nextElementSibling.classList.toggle(o.activeClass)})),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return o(e,[{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}(),s=function(){function e(n,o){var i=this;t(this,e),r(this,"activeTab",(function(t){i.tabContent.forEach((function(t){t.classList.remove(i.activeClass)}));var e=i.tabContent[t].dataset.anime;i.tabContent[t].classList.add(i.activeClass,e)})),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(o),this.activeClass="ativo"}return o(e,[{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){t.activeTab(n)}))}))}},{key:"init",value:function(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}]),e}(),c=function(){function e(n,o,i){var a=this;t(this,e),r(this,"toggleModal",(function(){a.containerModal.classList.toggle("ativo")})),r(this,"eventToggleModal",(function(t){t.preventDefault(),a.toggleModal()})),r(this,"cliqueForaModal",(function(t){t.target===a.containerModal&&a.toggleModal(t)})),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(o),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}return o(e,[{key:"addModalEvents",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}]),e}(),u=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return o(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.criarTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"addTooltipsEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvent(),this}}]),e}();function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var h=function(){function e(n){var o,i,a,s=this;t(this,e),r(this,"getDistance",(function(){var t;s.distance=(t=s.sections,function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=t.offsetTop;return{element:t,offset:Math.floor(e-s.windowMid)}}))})),r(this,"checkDistance",(function(){s.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))})),this.sections=document.querySelectorAll(n),this.windowMid=.6*window.innerHeight,this.checkDistance=(o=this.checkDistance.bind(this),i=50,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];a&&clearTimeout(a),a=setTimeout((function(){o.apply(void 0,e),a=null}),i)})}return o(e,[{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();const d=function(t,e,n){var o=document.documentElement,r="data-outside",i=function i(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){o.removeEventListener(t,i)})),n())};t.hasAttribute(r)||(t.setAttribute(r,""),e.forEach((function(t){setTimeout((function(){o.addEventListener(t,i)}))})))};var f=function(){function e(n,o){var i=this;t(this,e),r(this,"addDropdownMenuEvent",(function(){i.dropdownMenus.forEach((function(t){i.events.forEach((function(e){t.addEventListener(e,i.activeDropdownMenu)}))}))})),r(this,"init",(function(){return i.dropdownMenus.length&&i.addDropdownMenuEvent(),i})),this.dropdownMenus=document.querySelectorAll(n),this.activeClass="active",this.events=void 0===o?["click","touchstart"]:o,this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}return o(e,[{key:"activeDropdownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),d(n,this.events,(function(){n.classList.remove(e.activeClass)}))}}]),e}(),v=o((function e(n,o,i){var a=this;t(this,e),r(this,"openMenu",(function(){a.menuButton.classList.add(a.activeClass),a.menuList.classList.add(a.activeClass),d(a.menuList,a.events,(function(){a.menuButton.classList.remove(a.activeClass),a.menuList.classList.remove(a.activeClass)}))})),r(this,"addMenuMobileEvents",(function(){a.events.forEach((function(t){a.menuButton.addEventListener(t,a.openMenu)}))})),r(this,"init",(function(){return a.menuButton&&a.menuList&&a.addMenuMobileEvents(),a})),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(o),this.activeClass="active",this.events=void 0===i?["click","touchstart"]:i,this.openMenu=this.openMenu.bind(this)})),p=o((function e(n,o){var i=this;t(this,e),r(this,"dadosFuncionamento",(function(){i.diasSemana=i.funcionamento.dataset.semana.split(",").map(Number),i.horarioSemana=i.funcionamento.dataset.horario.split(",").map(Number)})),r(this,"dadosAgora",(function(){i.dataAgora=new Date,i.diaAgora=i.dataAgora.getDay(),i.horarioAgora=i.dataAgora.getUTCHours()-3})),r(this,"estaAberto",(function(){return i.semanaAberto=-1!==i.diasSemana.indexOf(i.diaAgora),i.horarioAberto=i.horarioAgora>=i.horarioSemana[0]&&i.horarioAgora<i.horarioSemana[1],i.semanaAberto&&i.horarioAberto})),r(this,"ativoAberto",(function(){i.estaAberto()&&i.funcionamento.classList.add(i.activeClass)})),r(this,"init",(function(){return i.funcionamento&&(i.dadosFuncionamento(),i.dadosAgora(),i.ativoAberto()),i})),this.funcionamento=document.querySelector(n),this.activeClass=o}));function m(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}var y=n(757),g=n.n(y),b=function(){function e(n,o,i){var a=this;t(this,e),r(this,"animaNumeros",(function(){a.numeros.forEach((function(t){a.constructor.incrementarNumero(t)}))})),r(this,"handleMutation",(function(t){t[0].target.classList.contains(a.observerClass)&&(a.observer.disconnect(),a.animaNumeros())})),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(o),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}return o(e,[{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return(this.numeros.length||this.observerTarget)&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=0,n=+t.innerText,o=Math.floor(n/100),r=setInterval((function(){e+=o,t.innerText=e,e>n&&(t.innerText=n,clearInterval(r))}),50+Math.random())}}]),e}();var w,L,M,E,x,k;new i('[data-menu="suave"] a[href^="#"]').init(),new a('[data-anime="accordion"] dt').init(),new s('[data-tab="menu"] li','[data-tab="content"] section').init(),new c('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new u("[data-tooltip]").init(),new h('[data-anime="scroll"]').init(),new f("[data-dropdown]").init(),new v('[data-menu="button"]','[data-menu="list"]').init(),new p("[data-semana]","aberto").init(),w="../../animais-api.json",L=".numeros-grid",M=document.querySelector(L),E=function(t){var e=k(t);M.appendChild(e)},x=function(){var t,e=(t=g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w);case 3:return e=t.sent,t.next=6,e.json();case 6:t.sent.forEach((function(t){E(t)})),new b("[data-numero]",".numeros","ativo").init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){m(i,o,r,a,s,"next",t)}function s(t){m(i,o,r,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),k=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3> <span data-numero>").concat(t.total,"</span>"),e},x(),function(t,e){fetch(t).then((function(t){return t.json()})).then((function(t){document.querySelector(e).innerText=(100/t.BRL.sell).toFixed(5)})).catch((function(t){console.log(t)}))}("https://blockchain.info/ticker",".btc-preco")})()})();