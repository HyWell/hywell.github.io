// build time:Wed Nov 14 2018 10:59:21 GMT+0800 (中国标准时间)
(function(e,t,a){var n=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}();r();function r(){s(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");i();o()}function o(){for(var e=0;e<n.length;e++){if(n[e].alpha<=0){t.body.removeChild(n[e].el);n.splice(e,1);continue}n[e].y--;n[e].scale+=.004;n[e].alpha-=.013;n[e].el.style.cssText="left:"+n[e].x+"px;top:"+n[e].y+"px;opacity:"+n[e].alpha+";transform:scale("+n[e].scale+","+n[e].scale+") rotate(45deg);background:"+n[e].color}requestAnimationFrame(o)}function i(){var t=typeof e.onclick==="function"&&e.onclick;e.onclick=function(e){t&&t();c(e)}}function c(e){var a=t.createElement("div");a.className="heart";n.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:l()});t.body.appendChild(a)}function s(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(n){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function l(){return"rgb("+~~(Math.random()*255)+","+~~(Math.random()*255)+","+~~(Math.random()*255)+")"}})(window,document);
//rebuild by neat 