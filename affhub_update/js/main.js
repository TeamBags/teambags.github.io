(function(){"use strict";function t(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}function e(t,e){return e={exports:{}},t(e,e.exports),e.exports}var i,n,o,s,r,a,l,h,c,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d=e(function(t){(function(e){function i(){if(void 0!==a)return a;var t=document.documentElement,e=document.createElement("div");return e.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),t.appendChild(e),a=e.offsetWidth-e.clientWidth,t.removeChild(e),a}function n(){return document.documentElement.scrollHeight>window.innerHeight}function o(t){if("undefined"!=typeof document&&!h){var e=document.documentElement;l=window.pageYOffset,n()?e.style.width="calc(100% - "+i()+"px)":e.style.width="100%",e.style.position="fixed",e.style.top=-l+"px",e.style.overflow="hidden",h=!0}}function s(){if("undefined"!=typeof document&&h){var t=document.documentElement;t.style.width="",t.style.position="",t.style.top="",t.style.overflow="",window.scroll(0,l),h=!1}}function r(){h?s():o()}var a,l,h=!1,c={on:o,off:s,toggle:r};void 0!==t.exports?t.exports=c:e.noScroll=c})(window)}),m=(i=$(".js-scroll"),n=$(".js-burger"),o=$("#js-mobile-menu"),s=$(".js-hide-content"),{scrollToTarget:function(){i.click(function(t){t.preventDefault();var e=$(this),i=e.attr("href");if(!(i.length<=1)){var r=$(i);if(r.length){var a=r.offset().top;n.removeClass("active"),o.removeClass("active"),s.removeClass("hide"),d.off(),$("html, body").animate({scrollTop:a},800)}}})},showMobileMenu:function(){n.click(function(t){t.preventDefault();var e=$(this);e.toggleClass("active"),o.toggleClass("active"),s.toggleClass("hide"),d.toggle()})},init:function(){m.scrollToTarget(),m.showMobileMenu()}}),f=(r=$(".js-reviews-slider"),{initReviewsSlider:function(){r.slick({dots:!0,infinite:!1,speed:500,variableWidth:!0,cssEase:"linear",swipeToSlide:!0,arrows:!0,responsive:[{breakpoint:1025,settings:{variableWidth:!1,slidesToShow:2,slidesToScroll:1,adaptiveHeight:!0}},{breakpoint:901,settings:{slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,variableWidth:!1}}]})},init:function(){f.initReviewsSlider()}}),p=(a={name:{regExp:/([A-Za-zА-ЯЄІЇа-яєії])+$/,empty:"Имя обязательно",notValid:"Некорректное имя"},phone:{regExp:/[0-9+()-\s]{5,}/,empty:"Номер телефона или телеграм логин обязателен",notValid:"Некорректный номер телефона",group:1},telegram:{regExp:/\@?[\d\w]{5,}/,empty:"Номер телефона или телеграм логин обязателен",notValid:"Некорректный telegram",group:1}},l=$("#registration_form"),h=$("#thanks-form-message"),c=$(".js-input"),{labelFormActive:function(){c.keyup(function(){var t=$(this);t.val()?t.addClass("active"):t.removeClass("active")})},submitHandler:function(){l.submit(function(t){t.preventDefault(),$(".form_error").remove();var e=p.validateForm(l);if(e.length)p.showErrorFields(e);else{for(var i={},n=l.serialize(),o=n.split("&"),s=0;s<o.length;s++){var r=o[s].split("="),a=r[0],c=r[1];i[a]=c}l.hide(),h.show()}})},showErrorFields:function(t){for(var e=0;e<t.length;e++){var i=t[e],n=i.name,o=i.msg,s=$("[name=".concat(n,"]"));s.parents(".input").append('<div class="form_error"> '.concat(o,"</div >"))}},validateInput:function(t){if(!t.length)return!1;var e="",i=t.val(),n=t.attr("name");if(!a[n])return!1;var o=a[n],s=o.regExp,r=o.empty,l=o.notValid;if(i.length<1)e=r;else{var h=s.test(i);h||(e=l)}return e},validateForm:function(t){for(var e=t.find(".js-input"),i=[],n=[],o=0;o<e.length;o++){var s=$(e[o]),r=s.attr("name"),l="";a[r]&&(l=a[r].group);var h=p.validateInput(s);h?l?i.push({name:r,msg:h,group:l}):i.push({name:r,msg:h}):l&&-1===n.indexOf(l)&&n.push(l)}var c=i.filter(function(t){var e=t.group;return e?-1===n.indexOf(e)&&t:t});return c},showRepeatForm:function(){$("#repeat-form").click(function(t){t.preventDefault(),c.val(""),c.removeClass("active"),h.hide(),l.show()})},init:function(){p.labelFormActive(),p.submitHandler(),p.showRepeatForm()}}),v=e(function(e,i){var n;n=function(){return function e(i,n,o){function s(a,l){if(!n[a]){if(!i[a]){var h="function"==typeof t&&t;if(!l&&h)return h(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[a]={exports:{}};i[a][0].call(u.exports,function(t){var e=i[a][1][t];return s(e||t)},u,u.exports,e,i,n,o)}return n[a].exports}for(var r="function"==typeof t&&t,a=0;a<o.length;a++)s(o[a]);return s}({1:[function(t,e,i){function n(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){for(var c in i=Object(arguments[h]),i)s.call(i,c)&&(l[c]=i[c]);if(o){a=o(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(l[a[u]]=i[a[u]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&f&&(v=!1,f.length?p=f.concat(p):w=-1,p.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=p.length;e;){for(f=p,p=[];++w<e;)f&&f[w].run();w=-1,e=p.length}f=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function c(){}var u,d,m=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var f,p=[],v=!1,w=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new h(t,e)),1!==p.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=c,m.addListener=c,m.once=c,m.off=c,m.removeListener=c,m.removeAllListeners=c,m.emit=c,m.prependListener=c,m.prependOnceListener=c,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var c=0,u=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-c));c=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++u,callback:t,cancelled:!1}),u},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,void 0!==u?u:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var c=document.body||document.createElement("body"),u=document.documentElement,d=u.style.overflow,m=!1;document.body||(m=!0,u.style.overflow="hidden",u.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,u.style.overflow=d,c.removeChild(e),m&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)},e.exports=n()}),w=function(){function t(t){for(var e=0;e<t.length;e++){var i=$(t[e]),n=i.data("lazy-src");i.attr("src",n)}}var e=$(".report"),i=$(".wrap-img"),n=$(".js-show-info"),o=$(".js-show-gallery");return{showListPhotos:function(){var e=$("[data-lazy-src]");t(e)},showGallery:function(){o.click(function(t){t.preventDefault();var i=$(this),n=i.attr("href");if(!(n.length<=1)){var o=$(n);if(o.length){var s=o.offset().top;e.removeClass("active"),w.showListPhotos(),o.addClass("active"),o.addClass("show-slider"),w.destroySlick(),w.initSliderGallery(),$("html, body").animate({scrollTop:s},800)}}})},animateGallery:function(){n.click(function(t){t.preventDefault();var i=$(this),n=i.parents(".report");w.showListPhotos(),e.removeClass("active"),n.removeClass("show-slider"),n.addClass("animate"),n.addClass("active"),w.destroySlick(),w.initSliderGallery()}),$(".report__close").click(function(t){t.preventDefault();var e=$(this),i=e.parents(".report");i.removeClass("active"),i.removeClass("show-slider"),i.addClass("animate")}),i.click(function(){var t=$(this),e=t.find("img").data("scr"),i=t.parents(".report");i.removeClass("animate"),i.addClass("show-slider"),setTimeout(function(){$(".slider").fadeIn(500),$(".slider-for").slick("slickGoTo",e)},0)})},initSliderGallery:function(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:13,slidesToScroll:1,asNavFor:".slider-for",dots:!1,arrows:!1,centerMode:!0,focusOnSelect:!0,responsive:[{breakpoint:1681,settings:{slidesToShow:10}},{breakpoint:1281,settings:{slidesToShow:8}},{breakpoint:1025,settings:{slidesToShow:7}},{breakpoint:901,settings:{slidesToShow:6}},{breakpoint:768,settings:{slidesToShow:5}},{breakpoint:641,settings:{slidesToShow:4}},{breakpoint:481,settings:{slidesToShow:3}}]})},destroySlick:function(){$(".slider-for").slick("unslick"),$(".slider-nav").slick("unslick")},initParallax:function(t){var e=document.getElementById(t);new v(e)},init:function(){w.animateGallery(),$(window).width()<900?$(".slider").fadeIn(500):$(".slider").fadeOut(500),w.initSliderGallery(),w.showGallery(),w.initParallax("scene1"),w.initParallax("scene2"),w.initParallax("scene3"),w.initParallax("scene4"),w.initParallax("scene5"),w.initParallax("scene6"),w.initParallax("scene7")}}}();$(document).ready(function(){m.init(),f.init(),p.init(),w.init()}),document.body.onload=function(){setTimeout(function(){var t=document.getElementById("preloader");t.classList.contains("cansel")||t.classList.add("cansel")},500)}})();