/**
 * Warning : This file is deprecated
 */

/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

/*! jQuery UI - v1.10.3 - 2013-05-28
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);

/* 

Metro UI CSS V2.0

The MIT License (MIT)

Copyright (c) 2012-2013 Sergey Pimenov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var METRO_AUTO_REINIT,METRO_LOCALE,METRO_WEEK_START,METRO_DIALOG=!1;(function(c){c.Metro=function(a){c.extend({},a)};c.Metro.getDeviceSize=function(){return{width:0<window.innerWidth?window.innerWidth:screen.width,height:0<window.innerHeight?window.innerHeight:screen.height}}})(jQuery);$(function(){$("html").on("click",function(c){$(".dropdown-menu").each(function(a,b){$(b).hasClass("keep-open")||"block"!=$(b).css("display")||$(b).hide()})})});
$(function(){$(window).on("resize",function(){if(METRO_DIALOG){var c=($(window).height()-METRO_DIALOG.outerHeight())/2,a=($(window).width()-METRO_DIALOG.outerWidth())/2;METRO_DIALOG.css({top:c,left:a})}})});(function(c){c.Metro.currentLocale="en";c.Metro.currentLocale=void 0!=METRO_LOCALE?METRO_LOCALE:"en";c.Metro.Locale={en:{months:"January February March April May June July August September October November December Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday Su Mo Tu We Th Fr Sa".split(" "),buttons:"Today Clear Cancel Help Prior Next Finish".split(" ")},fr:{months:"Janvier F\u00e9vrier Mars Avril Mai Juin Juillet Ao\u00fbt Septembre Octobre Novembre D\u00e9cembre Jan F\u00e9v Mars Avr Mai Juin Juil Ao\u00fbt Sept Oct Nov D\u00e9c".split(" "),
days:"Dimanche Lundi Mardi Mercredi Jeudi Vendredi Samedi Di Lu Ma Me Je Ve Sa".split(" "),buttons:"Aujourd'hui Effacer Annuler Aide Pr\u00e9cedent Suivant Fin".split(" ")},nl:{months:"Januari Februari Maart April Mei Juni Juli Augustus September Oktober November December Jan Feb Mrt Apr Mei Jun Jul Aug Sep Okt Nov Dec".split(" "),days:"Zondag Maandag Dinsdag Woensdag Donderdag Vrijdag Zaterdag Zo Ma Di Wo Do Vr Za".split(" "),buttons:"Vandaag Verwijderen Annuleren Hulp Vorige Volgende Einde".split(" ")},
ua:{months:"\u0421\u0456\u0447\u0435\u043d\u044c \u041b\u044e\u0442\u0438\u0439 \u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c \u041a\u0432\u0456\u0442\u0435\u043d\u044c \u0422\u0440\u0430\u0432\u0435\u043d\u044c \u0427\u0435\u0440\u0432\u0435\u043d\u044c \u041b\u0438\u043f\u0435\u043d\u044c \u0421\u0435\u0440\u043f\u0435\u043d\u044c \u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c \u0416\u043e\u0432\u0442\u0435\u043d\u044c \u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434 \u0413\u0440\u0443\u0434\u0435\u043d\u044c \u0421\u0456\u0447 \u041b\u044e\u0442 \u0411\u0435\u0440 \u041a\u0432\u0456 \u0422\u0440\u0430 \u0427\u0435\u0440 \u041b\u0438\u043f \u0421\u0435\u0440 \u0412\u0435\u0440 \u0416\u043e\u0432 \u041b\u0438\u0441 \u0413\u0440\u0443".split(" "),
days:"\u041d\u0435\u0434\u0456\u043b\u044f \u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0421\u0435\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440 \u041f\u2019\u044f\u0442\u043d\u0438\u0446\u044f \u0421\u0443\u0431\u043e\u0442\u0430 \u041d\u0434 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),buttons:"\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0414\u043e\u043f\u043e\u043c\u043e\u0433\u0430 \u041d\u0430\u0437\u0430\u0434 \u0412\u043f\u0435\u0440\u0435\u0434 \u0413\u043e\u0442\u043e\u0432\u043e".split(" ")},
ru:{months:"\u042f\u043d\u0432\u0430\u0440\u044c \u0424\u0435\u0432\u0440\u0430\u043b\u044c \u041c\u0430\u0440\u0442 \u0410\u043f\u0440\u0435\u043b\u044c \u041c\u0430\u0439 \u0418\u044e\u043d\u044c \u0418\u044e\u043b\u044c \u0410\u0432\u0433\u0443\u0441\u0442 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u041e\u043a\u0442\u044f\u0431\u0440\u044c \u041d\u043e\u044f\u0431\u0440\u044c \u0414\u0435\u043a\u0430\u0431\u0440\u044c \u042f\u043d\u0432 \u0424\u0435\u0432 \u041c\u0430\u0440 \u0410\u043f\u0440 \u041c\u0430\u0439 \u0418\u044e\u043d \u0418\u044e\u043b \u0410\u0432\u0433 \u0421\u0435\u043d \u041e\u043a\u0442 \u041d\u043e\u044f \u0414\u0435\u043a".split(" "),
days:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043e\u0442\u0430 \u0412\u0441 \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" "),buttons:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u041f\u043e\u043c\u043e\u0449\u044c \u041d\u0430\u0437\u0430\u0434 \u0412\u043f\u0435\u0440\u0435\u0434 \u0413\u043e\u0442\u043e\u0432\u043e".split(" ")},
zhCN:{months:"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708 \u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),days:"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d \u65e5 \u4e00 \u4e8c \u4e09 \u56db \u4e94 \u516d".split(" "),
buttons:"\u4eca\u65e5 \u6e05\u9664 Cancel Help Prior Next Finish".split(" ")},it:{months:"Gennaio;Febbraio;Marzo;Aprile;Maggio;Giugno;Luglio;Agosto;Settembre;Ottobre;Novembre;Dicembre;Gen; Feb;Mar;Apr;Mag;Giu;Lug;Ago;Set;Ott;Nov;Dic".split(";"),days:"Luned\u00ec Marted\u00ec Mercoled\u00ec Gioved\u00ec Venerd\u00ec Sabato Domenica Lun Mar Mer Gio Ven Sab Dom".split(" "),buttons:"Oggi Cancella Cancel Help Prior Next Finish".split(" ")},de:{months:"Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember Jan Feb Mrz Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),
days:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag So Mo Di Mi Do Fr Sa".split(" "),buttons:"Heute Zur\u00fccksetzen Abbrechen Hilfe Fr\u00fcher Sp\u00e4ter Fertig".split(" ")},es:{months:"Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre Ene Feb Mar Abr May Jun Jul Ago Sept Oct Nov Dic".split(" "),days:"Domingo Lunes Martes Mi\u00e9rcoles Jueves Viernes S\u00e1bado Do Lu Mar Mi\u00e9 Jue Vi S\u00e1b".split(" "),buttons:"Hoy Limpiar Cancel Help Prior Next Finish".split(" ")}};
c.Metro.setLocale=function(a,b){c.Metro.Locale[a]=b}})(jQuery);var hasTouch="ontouchend"in window,eventTimer,moveDirection="undefined",startX,startY,deltaX,deltaY,mouseDown=!1;function addTouchEvents(c){hasTouch&&(c.addEventListener("touchstart",touch2Mouse,!0),c.addEventListener("touchmove",touch2Mouse,!0),c.addEventListener("touchend",touch2Mouse,!0))}
function touch2Mouse(c){var a=c.changedTouches[0],b;switch(c.type){case "touchstart":b="mousedown";break;case "touchend":b="mouseup";break;case "touchmove":b="mousemove";break;default:return}"mousedown"==b&&(eventTimer=(new Date).getTime(),startX=a.clientX,startY=a.clientY,mouseDown=!0);"mouseup"==b&&(500>=(new Date).getTime()-eventTimer?b="click":1E3<(new Date).getTime()-eventTimer&&(b="longclick"),eventTimer=0,mouseDown=!1);"mousemove"==b&&mouseDown&&(deltaX=a.clientX-startX,deltaY=a.clientY-startY,
moveDirection=deltaX>deltaY?"horizontal":"vertical");var d=document.createEvent("MouseEvent");d.initMouseEvent(b,!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(d);c.preventDefault()};(function(c){c.widget("metro.accordion",{version:"1.0.0",options:{closeAny:!0,open:function(a){},action:function(a){}},_frames:{},_create:function(){var a=this.element;void 0!=a.data("closeany")&&(this.options.closeAny=a.data("closeany"));this._frames=a.children(".accordion-frame");this.init()},init:function(){var a=this;this._frames.each(function(){var b=this,d=c(this).children(".heading"),e=c(this).children(".content");c(d).hasClass("active")&&!c(d).attr("disabled")&&"none"!=c(d).data("action")?
(c(e).show(),c(d).removeClass("collapsed")):c(d).addClass("collapsed");d.on("click",function(d){d.preventDefault();c(this).attr("disabled")||"none"==c(this).data("action")||(a.options.closeAny&&a._closeFrames(),c(e).is(":hidden")?(c(e).slideDown(),c(this).removeClass("collapsed"),a._trigger("frame",d,{frame:b}),a.options.open(b)):(c(e).slideUp(),c(this).addClass("collapsed")),a.options.action(b))})})},_closeFrames:function(){this._frames.children(".content").slideUp().parent().children(".heading").addClass("collapsed")},
_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.buttonset",{version:"1.0.0",options:{click:function(a,b){}},_buttons:{},_create:function(){this._buttons=this.element.find("button, .button");this.init()},init:function(){var a=this;this._buttons.each(function(){var b=c(this);b.on("click",function(d){d.preventDefault();b.toggleClass("active");a.options.click(b,b.hasClass("active"));a._trigger("click",null,{button:b,on:b.hasClass("active")})})})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,
b)}})})(jQuery);
(function(c){c.widget("metro.buttongroup",{version:"1.0.0",options:{click:function(a,b){}},_buttons:{},_create:function(){this._buttons=this.element.find("button, .button");this.init()},init:function(){var a=this;this._buttons.each(function(){var b=c(this);b.on("click",function(d){d.preventDefault();a._buttons.removeClass("active");b.addClass("active");a.options.click(b,b.hasClass("active"));a._trigger("click",null,{button:b,on:b.hasClass("active")})})})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)}})})(jQuery);var dateFormat=function(){var c=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,a=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,b=/[^-+\dA-Z]/g,d=function(a,b){a=String(a);for(b=b||2;a.length<b;)a="0"+a;return a};return function(e,f,g){var h=dateFormat;1!=arguments.length||("[object String]"!=Object.prototype.toString.call(e)||/\d/.test(e))||(f=e,e=void 0);e=e?new Date(e):new Date;f=String(h.masks[f]||
f||h.masks["default"]);"UTC:"==f.slice(0,4)&&(f=f.slice(4),g=!0);locale=$.Metro.currentLocale;var k=g?"getUTC":"get",h=e[k+"Date"](),l=e[k+"Day"](),n=e[k+"Month"](),p=e[k+"FullYear"](),m=e[k+"Hours"](),q=e[k+"Minutes"](),u=e[k+"Seconds"](),k=e[k+"Milliseconds"](),r=g?0:e.getTimezoneOffset(),s={d:h,dd:d(h),ddd:$.Metro.Locale[locale].days[l],dddd:$.Metro.Locale[locale].days[l+7],m:n+1,mm:d(n+1),mmm:$.Metro.Locale[locale].months[n],mmmm:$.Metro.Locale[locale].months[n+12],yy:String(p).slice(2),yyyy:p,
h:m%12||12,hh:d(m%12||12),H:m,HH:d(m),M:q,MM:d(q),s:u,ss:d(u),l:d(k,3),L:d(99<k?Math.round(k/10):k),t:12>m?"a":"p",tt:12>m?"am":"pm",T:12>m?"A":"P",TT:12>m?"AM":"PM",Z:g?"UTC":(String(e).match(a)||[""]).pop().replace(b,""),o:(0<r?"-":"+")+d(100*Math.floor(Math.abs(r)/60)+Math.abs(r)%60,4),S:["th","st","nd","rd"][3<h%10?0:(10!=h%100-h%10)*h%10]};return f.replace(c,function(a){return a in s?s[a]:a.slice(1,a.length-1)})}}();
dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};dateFormat.i18n={dayNames:"Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),monthNames:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")};
Date.prototype.format=function(c,a){return dateFormat(this,c,a)};(function(c){c.widget("metro.calendar",{version:"1.0.0",options:{format:"yyyy-mm-dd",multiSelect:!1,startMode:"day",weekStart:void 0!=METRO_WEEK_START?METRO_WEEK_START:0,otherDays:!1,date:new Date,buttons:!0,locale:c.Metro.currentLocale,getDates:function(a){},click:function(a,b){},_storage:[]},_year:0,_month:0,_day:0,_today:new Date,_event:"",_mode:"day",_distance:0,_events:[],_create:function(){var a=this.element;void 0!=a.data("multiSelect")&&(this.options.multiSelect=a.data("multiSelect"));void 0!=
a.data("format")&&(this.options.format=a.data("format"));void 0!=a.data("date")&&(this.options.date=new Date(a.data("date")));void 0!=a.data("locale")&&(this.options.locale=a.data("locale"));void 0!=a.data("startMode")&&(this.options.startMode=a.data("startMode"));void 0!=a.data("weekStart")&&(this.options.weekStart=a.data("weekStart"));void 0!=a.data("otherDays")&&(this.options.otherDays=a.data("otherDays"));this._year=this.options.date.getFullYear();this._distance=parseInt(this.options.date.getFullYear())-
4;this._month=this.options.date.getMonth();this._day=this.options.date.getDate();this._mode=this.options.startMode;a.data("_storage",[]);this._renderCalendar()},_renderMonth:function(){var a=this._year,b=this._month,d=28;1==b&&(0!=a%100&&0==a%4||0==a%400)&&(d=29);var e=["31",""+d+"","31","30","31","30","31","31","30","31","30","31"],f=e[b],g=(new Date(a,b,1)).getDay(),h,k;this.element.html("");d=c("<table/>").addClass("bordered");h=c("<tr/>");c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-previous'></i></a>").appendTo(h);
c("<td/>").addClass("text-center").html("<a class='btn-previous-month' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(h);c("<td/>").attr("colspan",3).addClass("text-center").html("<a class='btn-select-month' href='#'>"+c.Metro.Locale[this.options.locale].months[b]+" "+a+"</a>").appendTo(h);c("<td/>").addClass("text-center").html("<a class='btn-next-month' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(h);c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-next'></i></a>").appendTo(h);
h.addClass("calendar-header").appendTo(d);var l;h=c("<tr/>");for(k=0;7>k;k++)this.options.weekStart?(l=k+1,7==l&&(l=0),c("<td/>").addClass("text-center day-of-week").html(c.Metro.Locale[this.options.locale].days[l+7]).appendTo(h)):c("<td/>").addClass("text-center day-of-week").html(c.Metro.Locale[this.options.locale].days[k+7]).appendTo(h);h.addClass("calendar-subheader").appendTo(d);h=this._month-1;0>h&&(h=11);e=e[h];l=(this.options.weekStart?g+6:g)%7;var n="";h=c("<tr/>");for(k=0;k<l;k++)this.options.otherDays&&
(n=e-(l-k-1)),c("<td/>").addClass("empty").html("<small class='other-day'>"+n+"</small>").appendTo(h);g=(this.options.weekStart?g+6:g)%7;for(k=1;k<=f;k++)g%=7,0==g&&(h.appendTo(d),h=c("<tr/>")),e=c("<td/>").addClass("text-center day").html("<a href='#'>"+k+"</a>"),a==this._today.getFullYear()&&(b==this._today.getMonth()&&this._today.getDate()==k)&&e.addClass("today"),l=(new Date(this._year,this._month,k)).format("yyyy-mm-dd"),0<=this.element.data("_storage").indexOf(l)&&e.find("a").addClass("selected"),
e.appendTo(h),g++;a="";for(k=g+1;7>=k;k++)this.options.otherDays&&(a=k-g),c("<td/>").addClass("empty").html("<small class='other-day'>"+a+"</small>").appendTo(h);h.appendTo(d);this.options.buttons&&(h=c("<tr/>").addClass("calendar-actions"),e=c("<td/>").attr("colspan",7).addClass("text-left").html("<button class='button calendar-btn-today small success'>"+c.Metro.Locale[this.options.locale].buttons[0]+"</button>&nbsp;<button class='button calendar-btn-clear small warning'>"+c.Metro.Locale[this.options.locale].buttons[1]+
"</button>"),e.appendTo(h),h.appendTo(d));d.appendTo(this.element);this.options.getDates(this.element.data("_storage"))},_renderMonths:function(){var a,b,d,e,f;this.element.html("");a=c("<table/>").addClass("bordered");b=c("<tr/>");c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(b);c("<td/>").attr("colspan",2).addClass("text-center").html("<a class='btn-select-year' href='#'>"+this._year+"</a>").appendTo(b);c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(b);
b.addClass("calendar-header").appendTo(a);b=c("<tr/>");for(e=f=0;12>e;e++)d=c("<td/>").addClass("text-center month").html("<a href='#' data-month='"+e+"'>"+c.Metro.Locale[this.options.locale].months[e+12]+"</a>"),this._month==e&&(new Date).getFullYear()==this._year&&d.addClass("today"),d.appendTo(b),0==(f+1)%4&&(b.appendTo(a),b=c("<tr/>")),f+=1;a.appendTo(this.element)},_renderYears:function(){var a,b,d,e,f;this.element.html("");a=c("<table/>").addClass("bordered");b=c("<tr/>");c("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(b);
c("<td/>").attr("colspan",2).addClass("text-center").html(this._distance+"-"+(this._distance+11)).appendTo(b);c("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(b);b.addClass("calendar-header").appendTo(a);b=c("<tr/>");f=0;for(e=this._distance;e<this._distance+12;e++)d=c("<td/>").addClass("text-center year").html("<a href='#' data-year='"+e+"'>"+e+"</a>"),(new Date).getFullYear()==e&&d.addClass("today"),d.appendTo(b),0==(f+
1)%4&&(b.appendTo(a),b=c("<tr/>")),f+=1;a.appendTo(this.element)},_renderCalendar:function(){switch(this._mode){case "year":this._renderYears();break;case "month":this._renderMonths();break;default:this._renderMonth()}this._initButtons()},_initButtons:function(){var a=this,b=this.element.find("table");"day"==this._mode?(b.find(".btn-select-month").on("click",function(b){b.preventDefault();b.stopPropagation();a._mode="month";a._renderCalendar()}),b.find(".btn-previous-month").on("click",function(b){a._event=
"eventPrevious";b.preventDefault();b.stopPropagation();a._month-=1;0>a._month&&(a._year-=1,a._month=11);a._renderCalendar()}),b.find(".btn-next-month").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._month+=1;12==a._month&&(a._year+=1,a._month=0);a._renderCalendar()}),b.find(".btn-previous-year").on("click",function(b){a._event="eventPrevious";b.preventDefault();b.stopPropagation();a._year-=1;a._renderCalendar()}),b.find(".btn-next-year").on("click",function(b){a._event=
"eventNext";b.preventDefault();b.stopPropagation();a._year+=1;a._renderCalendar()}),b.find(".calendar-btn-today").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a.options.date=new Date;a._year=a.options.date.getFullYear();a._month=a.options.date.getMonth();a._day=a.options.date.getDate();a._renderCalendar()}),b.find(".calendar-btn-clear").on("click",function(b){b.preventDefault();b.stopPropagation();a.options.date=new Date;a._year=a.options.date.getFullYear();a._month=
a.options.date.getMonth();a._day=a.options.date.getDate();a.element.data("_storage",[]);a._renderCalendar()}),b.find(".day a").on("click",function(d){d.preventDefault();d.stopPropagation();d=(new Date(a._year,a._month,parseInt(c(this).html()))).format(a.options.format,null);var e=new Date(a._year,a._month,parseInt(c(this).html()));a.options.multiSelect?(c(this).toggleClass("selected"),c(this).hasClass("selected")?a._addDate(d):a._removeDate(d)):(b.find(".day a").removeClass("selected"),c(this).addClass("selected"),
a.element.data("_storage",[]),a._addDate(d));a.options.getDates(a.element.data("_storage"));a.options.click(d,e)})):"month"==this._mode?(b.find(".month a").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._month=parseInt(c(this).data("month"));a._mode="day";a._renderCalendar()}),b.find(".btn-previous-year").on("click",function(b){a._event="eventPrevious";b.preventDefault();b.stopPropagation();a._year-=1;a._renderCalendar()}),b.find(".btn-next-year").on("click",
function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._year+=1;a._renderCalendar()}),b.find(".btn-select-year").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._mode="year";a._renderCalendar()})):(b.find(".year a").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._year=parseInt(c(this).data("year"));a._mode="month";a._renderCalendar()}),b.find(".btn-previous-year").on("click",function(b){a._event="eventPrevious";
b.preventDefault();b.stopPropagation();a._distance-=10;a._renderCalendar()}),b.find(".btn-next-year").on("click",function(b){a._event="eventNext";b.preventDefault();b.stopPropagation();a._distance+=10;a._renderCalendar()}))},_addDate:function(a){0>this.element.data("_storage").indexOf(a)&&this.element.data("_storage").push(a)},_removeDate:function(a){a=this.element.data("_storage").indexOf(a);this.element.data("_storage").splice(a,1)},setDate:function(a){a=new Date(a);a=(new Date(a.getFullYear()+
"/"+(a.getMonth()+1)+"/"+a.getDate())).format("yyyy-mm-dd");this._addDate(a);this._renderCalendar()},getDate:function(a){return(new Date(void 0!=a?this.element.data("_storage")[a]:this.element.data("_storage")[0])).format(this.options.format)},getDates:function(){return this.element.data("_storage")},unsetDate:function(a){a=new Date(a);a=(new Date(a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate())).format("yyyy-mm-dd");this._removeDate(a);this._renderCalendar()},_destroy:function(){},_setOption:function(a,
b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.datepicker",{version:"1.0.0",options:{format:"dd.mm.yyyy",date:void 0,effect:"none",position:"bottom",locale:c.Metro.currentLocale,weekStart:void 0!=METRO_WEEK_START?METRO_WEEK_START:0,otherDays:!1,selected:function(a,b){},_calendar:void 0},_create:function(){var a=this,b=this.element,d=b.children("input"),e=b.children("button.btn-date");void 0!=b.data("date")&&(this.options.date=b.data("date"));void 0!=b.data("format")&&(this.options.format=b.data("format"));void 0!=
b.data("effect")&&(this.options.effect=b.data("effect"));void 0!=b.data("position")&&(this.options.position=b.data("position"));void 0!=b.data("locale")&&(this.options.locale=b.data("locale"));void 0!=b.data("weekStart")&&(this.options.weekStart=b.data("weekStart"));void 0!=b.data("otherDays")&&(this.options.otherDays=b.data("otherDays"));this._createCalendar(b,this.options.date);d.attr("readonly",!0);e.on("click",function(b){b.stopPropagation();"none"==a.options._calendar.css("display")?a._show():
a._hide()});b.on("click",function(b){b.stopPropagation();"none"==a.options._calendar.css("display")?a._show():a._hide()});c("html").on("click",function(a){c(".calendar-dropdown").hide()})},_createCalendar:function(a,b){var d,e=this;d=c("<div/>").css({position:"absolute",display:"none","max-width":260,"z-index":1E3}).addClass("calendar calendar-dropdown").appendTo(a);void 0!=e.options.date&&d.data("date",e.options.date);d.calendar({multiSelect:!1,format:e.options.format,buttons:!1,locale:e.options.locale,
otherDays:e.options.otherDays,weekStart:e.options.weekStart,click:function(b,c){d.calendar("setDate",c);a.children("input[type=text]").val(b);e.options.selected(b,c);e._hide()}});void 0!=b&&(d.calendar("setDate",b),a.children("input[type=text]").val(d.calendar("getDate")));switch(this.options.position){case "top":d.css({top:0-d.height(),left:0});break;default:d.css({top:"100%",left:0})}this.options._calendar=d},_show:function(){"slide"==this.options.effect?(c(".calendar-dropdown").slideUp("fast"),
this.options._calendar.slideDown("fast")):"fade"==this.options.effect?(c(".calendar-dropdown").fadeOut("fast"),this.options._calendar.fadeIn("fast")):(c(".calendar-dropdown").hide(),this.options._calendar.show())},_hide:function(){"slide"==this.options.effect?this.options._calendar.slideUp("fast"):"fade"==this.options.effect?this.options._calendar.fadeOut("fast"):this.options._calendar.hide()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.carousel",{version:"1.0.0",options:{auto:!0,period:2E3,duration:500,effect:"slowdown",direction:"left",markers:{show:!0,type:"default",position:"left"},controls:!0,stop:!0,width:"100%",height:300},_slides:{},_currentIndex:0,_interval:0,_outPosition:0,_create:function(){var a=this,b=this.options,c=carousel=this.element,e=carousel.find(".controls");void 0!=c.data("auto")&&(b.auto=c.data("auto"));void 0!=c.data("period")&&(b.period=c.data("period"));void 0!=c.data("duration")&&
(b.duration=c.data("duration"));void 0!=c.data("effect")&&(b.effect=c.data("effect"));void 0!=c.data("direction")&&(b.direction=c.data("direction"));void 0!=c.data("width")&&(b.width=c.data("width"));void 0!=c.data("height")&&(b.height=c.data("height"));void 0!=c.data("stop")&&(b.stop=c.data("stop"));void 0!=c.data("controls")&&(b.controls=c.data("controls"));void 0!=c.data("markersShow")&&(b.markers.show=c.data("markersShow"));void 0!=c.data("markersType")&&(b.markers.type=c.data("markersType"));
void 0!=c.data("markersPosition")&&(b.markers.position=c.data("markersPosition"));carousel.css({width:this.options.width,height:this.options.height});this._slides=carousel.find(".slide");if(!(1>=this._slides.length)){!1!==this.options.markers&&(this.options.markers.show&&1<this._slides.length)&&this._markers(a);this.options.controls&&1<this._slides.length?(carousel.find(".controls.left").on("click",function(){a._slideTo("prior")}),carousel.find(".controls.right").on("click",function(){a._slideTo("next")})):
e.hide();if(this.options.stop)carousel.on("mouseenter",function(){clearInterval(a._interval)}).on("mouseleave",function(){a.options.auto&&(a._autoStart(),a.options.period)});this.options.auto&&this._autoStart()}},_autoStart:function(){var a=this;this._interval=setInterval(function(){"left"==a.options.direction?a._slideTo("next"):a._slideTo("prior")},this.options.period)},_slideTo:function(a){var b=this._slides[this._currentIndex];void 0==a&&(a="next");"prior"===a?(this._currentIndex-=1,0>this._currentIndex&&
(this._currentIndex=this._slides.length-1),this._outPosition=this.element.width()):"next"===a&&(this._currentIndex+=1,this._currentIndex>=this._slides.length&&(this._currentIndex=0),this._outPosition=-this.element.width());a=this._slides[this._currentIndex];switch(this.options.effect){case "switch":this._effectSwitch(b,a);break;case "slowdown":this._effectSlowdown(b,a,this.options.duration);break;case "fade":this._effectFade(b,a,this.options.duration);break;default:this._effectSlide(b,a,this.options.duration)}var d=
this;this.element.find(".markers ul li a").each(function(){c(this).data("num")===d._currentIndex?c(this).parent().addClass("active"):c(this).parent().removeClass("active")})},_slideToSlide:function(a){var b=this._slides[this._currentIndex],c=this._slides[a];this._outPosition=a>this._currentIndex?-this.element.width():this.element.width();switch(this.options.effect){case "switch":this._effectSwitch(b,c);break;case "slowdown":this._effectSlowdown(b,c,this.options.duration);break;case "fade":this._effectFade(b,
c,this.options.duration);break;default:this._effectSlide(b,c,this.options.duration)}this._currentIndex=a},_markers:function(a){var b,d,e,f;b=c('<div class="markers '+this.options.markers.type+'" />');d=c("<ul></ul>").appendTo(b);for(f=0;f<this._slides.length;f++)e=c('<li><a href="javascript:void(0)" data-num="'+f+'"></a></li>'),0===f&&e.addClass("active"),e.appendTo(d);d.find("li a").removeClass("active").on("click",function(){var b=c(this),e=b.data("num");d.find("li").removeClass("active");b.parent().addClass("active");
if(e==a._currentIndex)return!0;a._slideToSlide(e);return!0});b.appendTo(this.element);switch(this.options.markers.position){case "top-left":b.css({left:"10px",right:"auto",bottom:"auto",top:"10px"});break;case "top-right":b.css({left:"auto",right:"10px",bottom:"auto",top:"0px"});break;case "top-center":b.css({left:this.element.width()/2-b.width()/2,right:"auto",bottom:"auto",top:"0px"});break;case "bottom-left":b.css({left:"10px",right:"auto"});break;case "bottom-right":b.css({right:"10px",left:"auto"});
break;case "bottom-center":b.css({left:this.element.width()/2-b.width()/2,right:"auto"})}},_effectSwitch:function(a,b){c(a).hide();c(b).css({left:0}).show()},_effectSlide:function(a,b,d){c(a).animate({left:this._outPosition},d);c(b).css("left",-1*this._outPosition).show().animate({left:0},d)},_effectSlowdown:function(a,b,d){d={duration:d,easing:"doubleSqrt"};c.easing.doubleSqrt=function(a){return Math.sqrt(Math.sqrt(a))};c(a).animate({left:this._outPosition},d);c(b).css("left",-1*this._outPosition).show().animate({left:0},
d)},_effectFade:function(a,b,d){c(a).fadeOut(d);c(b).css({left:0}).fadeIn(d)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.countdown",{version:"1.0.0",options:{style:{background:"bg-dark",foreground:"fg-white",divider:"fg-dark"},blink:!0,days:1,stoptimer:0,ontick:function(a,b,c,e){},onstop:function(){}},wrappers:{},_interval:0,_create:function(){var a=this,b=this.element;c.each(["Days","Hours","Minutes","Seconds"],function(){c('<span class="count'+this+'">').html('<span class="digit-wrapper">                        <span class="digit">0</span>                    </span>                    <span class="digit-wrapper">                        <span class="digit">0</span>                    </span>').appendTo(b);
"Seconds"!=this&&b.append('<span class="divider"></span>')});this.wrappers=this.element.find(".digit-wrapper");void 0!=b.data("blink")&&(this.options.blink=b.data("blick"));void 0!=b.data("styleBackground")&&(this.options.style.background=b.data("styleBackground"));void 0!=b.data("styleForeground")&&(this.options.style.foreground=b.data("styleForeground"));void 0!=b.data("styleDivider")&&(this.options.style.divider=b.data("styleDivider"));"default"!=this.options.style.background&&this.element.find(".digit").addClass(this.options.style.background);
"default"!=this.options.style.foreground&&this.element.find(".digit").addClass(this.options.style.foreground);"default"!=this.options.style.divider&&this.element.find(".divider").addClass(this.options.style.divider);void 0!=b.data("stoptimer")&&(this.options.stoptimer=new Date(b.data("stoptimer")));0==this.options.stoptimer&&(this.options.stoptimer=(new Date).getTime()+864E5*this.options.days);setTimeout(function(){a.tick()},1E3)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)},tick:function(){var a=this;this._interval=setInterval(function(){var b,c,e,f;b=Math.floor((a.options.stoptimer-new Date)/1E3);0>b&&(b=0);c=Math.floor(b/86400);a.updateDuo(0,1,c);b-=86400*c;e=Math.floor(b/3600);a.updateDuo(2,3,e);b-=3600*e;f=Math.floor(b/60);a.updateDuo(4,5,f);b-=60*f;a.updateDuo(6,7,b);a.options.ontick(c,e,f,b);a.blinkDivider();0===c&&(0===e&&0===f&&0===b)&&(a.options.onstop(),a.stopDigit(),a._trigger("alarm"),clearInterval(a._interval))},1E3)},blinkDivider:function(){this.options.blink&&
this.element.find(".divider").toggleClass("no-visible")},stopDigit:function(){this.wrappers.each(function(){c(this).children(".digit").addClass("stop")})},updateDuo:function(a,b,c){this.switchDigit(this.wrappers.eq(a),Math.floor(c/10)%10);this.switchDigit(this.wrappers.eq(b),c%10)},switchDigit:function(a,b){var d=a.find(".digit");if(d.is(":animated")||a.data("digit")==b)return!1;a.data("digit",b);var e=c("<span>",{"class":"digit",css:{top:"-2.1em",opacity:0},html:b});e.addClass(this.options.style.background);
e.addClass(this.options.style.foreground);d.before(e).removeClass("static").animate({top:"2.5em"},"fast",function(){d.remove()});e.delay(100).animate({top:0,opacity:1},"fast");return!0}})})(jQuery);(function(c){c.widget("metro.dropdown",{version:"1.0.1",options:{effect:"slide",toggleElement:!1},_create:function(){var a=this,b=this.element,d=this.name,e=this.element.parent(),e=this.options.toggleElement||e.children(".dropdown-toggle");void 0!=b.data("effect")&&(this.options.effect=b.data("effect"));e.on("click."+d,function(d){d.preventDefault();d.stopPropagation();"block"!=b.css("display")||b.hasClass("keep-open")?(c(".dropdown-menu").each(function(d,e){b.parents(".dropdown-menu").is(e)||(c(e).hasClass("keep-open")||
"block"!=c(e).css("display"))||a._close(e)}),a._open(b)):a._close(b)});c(b).find("li.disabled a").on("click",function(a){a.preventDefault()})},_open:function(a){switch(this.options.effect){case "fade":c(a).fadeIn("fast");break;case "slide":c(a).slideDown("fast");break;default:c(a).hide()}this._trigger("onOpen",null,a)},_close:function(a){switch(this.options.effect){case "fade":c(a).fadeOut("fast");break;case "slide":c(a).slideUp("fast");break;default:c(a).hide()}this._trigger("onClose",null,a)},_destroy:function(){},
_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.inputControl",{version:"1.0.0",options:{},_create:function(){var a=this.element;a.hasClass("text")?this.initTextInput(a,this):a.hasClass("password")?this.initPasswordInput(a,this):a.hasClass("checkbox")||a.hasClass("radio")||a.hasClass("switch")?this.initCheckboxInput(a,this):a.hasClass("file")&&this.initFileInput(a,this)},initCheckboxInput:function(a,b){},initFileInput:function(a,b){var d,e,f;f=c("<input type='text' id='__input_file_wrapper__' readonly style='z-index: 1; cursor: default;'>");
d=a.children(".btn-file");e=a.children('input[type="file"]');e.css("z-index",0);f.insertAfter(e);e.attr("tabindex","-1");d.attr("type","button");e.on("change",function(){var a=c(this).val();""!=a&&f.val(a)});d.on("click",function(){e.trigger("click")})},initTextInput:function(a,b){var d=a.children(".btn-clear"),e=a.children("input[type=text]");if(0!=d.length&&(d.attr("tabindex","-1"),d.attr("type","button"),d.on("click",function(){e=a.children("input");e.prop("readonly")||(e.val(""),e.focus(),b._trigger("onClear",
null,a))}),!e.attr("disabled")))e.on("click",function(){c(this).focus()})},initPasswordInput:function(a,b){var d=a.children(".btn-reveal"),e=a.children("input[type=password]");if(0!=d.length&&(d.attr("tabindex","-1"),d.attr("type","button"),d.on("mousedown",function(a){e.attr("type","text")}),d.on("mouseup, mouseleave, blur",function(a){e.attr("type","password").focus()}),!e.attr("disabled")))e.on("click",function(){c(this).focus()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)}})})(jQuery);
(function(c){c.widget("metro.inputTransform",{version:"1.0.0",options:{transformType:"text"},_create:function(){var a=this.element,b;if(!a.parent().hasClass("input-control")){b=a.get(0).tagName.toLowerCase();"textarea"==b?this.options.transformType="textarea":"select"==b?this.options.transformType="select":void 0!=a.data("transformType")?this.options.transformType=a.data("transformType"):this.options.transformType=a.attr("type");a=void 0;switch(this.options.transformType){case "password":a=this._createInputPassword();
break;case "file":a=this._createInputFile();break;case "checkbox":a=this._createInputCheckbox();break;case "radio":a=this._createInputRadio();break;case "switch":a=this._createInputSwitch();break;case "select":a=this._createInputSelect();break;case "textarea":a=this._createInputTextarea();break;case "search":a=this._createInputSearch();break;case "email":a=this._createInputEmail();break;case "tel":a=this._createInputTel();break;case "number":a=this._createInputNum();break;default:a=this._createInputText()}a.inputControl()}},
_createInputTextarea:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("textarea"),d=a.clone(!0);a.parent();d.appendTo(b);b.insertBefore(a);a.remove();return b},_createInputSelect:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("select"),d=a.clone(!0);a.parent();d.val(a.val()).appendTo(b);b.insertBefore(a);a.remove();return b},_createInputSwitch:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("switch"),d=c("<label/>"),
e=c("<span/>").addClass("check"),f=a.clone(!0);a.parent();var g=c("<span/>").addClass("caption").html(void 0!=a.data("caption")?a.data("caption"):"");d.appendTo(b);f.appendTo(d);e.appendTo(d);g.appendTo(d);b.insertBefore(a);a.remove();return b},_createInputCheckbox:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("checkbox"),d=c("<label/>"),e=c("<span/>").addClass("check"),f=a.clone(!0);a.parent();var g=c("<span/>").addClass("caption").html(void 0!=a.data("caption")?
a.data("caption"):"");d.appendTo(b);f.appendTo(d);e.appendTo(d);g.appendTo(d);b.insertBefore(a);a.remove();return b},_createInputRadio:function(){var a=this.element,b=c("<div/>").addClass("input-control").addClass("radio"),d=c("<label/>"),e=c("<span/>").addClass("check"),f=a.clone(!0);a.parent();var g=c("<span/>").addClass("caption").html(void 0!=a.data("caption")?a.data("caption"):"");d.appendTo(b);f.appendTo(d);e.appendTo(d);g.appendTo(d);b.insertBefore(a);a.remove();return b},_createInputSearch:function(){return this._createInputVal("text",
"btn-search")},_createInputNum:function(){return this._createInputVal("number","btn-clear")},_createInputTel:function(){return this._createInputVal("tel","btn-clear")},_createInputEmail:function(){return this._createInputVal("email","btn-clear")},_createInputText:function(){return this._createInputVal("text","btn-clear")},_createInputPassword:function(){return this._createInputVal("password","btn-reveal")},_createInputFile:function(){return this._createInputVal("file","btn-file")},_createInputVal:function(a,
b){var d=this.element,e=c("<div/>").addClass("input-control").addClass(a),f=c("<button/>").addClass(b),g=d.clone(!0);d.parent();g.appendTo(e);f.appendTo(e);e.insertBefore(d);d.remove();return e},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.livetile",{version:"1.0.0",options:{effect:"slideLeft",period:4E3,duration:700,easing:"doubleSqrt"},_frames:{},_currentIndex:0,_interval:0,_outPosition:0,_size:{},_create:function(){var a=this,b=this.element;void 0!=b.data("effect")&&(this.options.effect=b.data("effect"));void 0!=b.data("direction")&&(this.options.direction=b.data("direction"));void 0!=b.data("period")&&(this.options.period=b.data("period"));void 0!=b.data("duration")&&(this.options.duration=b.data("duration"));
void 0!=b.data("easing")&&(this.options.easing=b.data("easing"));this._frames=b.children("[class*='-content']");1>=this._frames.length||(c.easing.doubleSqrt=function(a){return Math.sqrt(Math.sqrt(a))},this._size={width:b.width(),height:b.height()},b.on("mouseenter",function(){a.stop()}),b.on("mouseleave",function(){a.start()}),this.start())},start:function(){var a=this;this._interval=setInterval(function(){a._animate()},this.options.period)},stop:function(){clearInterval(this._interval)},_animate:function(){var a=
this._frames[this._currentIndex],b;this._currentIndex+=1;this._currentIndex>=this._frames.length&&(this._currentIndex=0);b=this._frames[this._currentIndex];switch(this.options.effect){case "slideLeft":this._effectSlideLeft(a,b);break;case "slideRight":this._effectSlideRight(a,b);break;case "slideDown":this._effectSlideDown(a,b);break;case "slideUpDown":this._effectSlideUpDown(a,b);break;case "slideLeftRight":this._effectSlideLeftRight(a,b);break;default:this._effectSlideUp(a,b)}},_effectSlideLeftRight:function(a,
b){0==this._currentIndex%2?this._effectSlideLeft(a,b):this._effectSlideRight(a,b)},_effectSlideUpDown:function(a,b){0==this._currentIndex%2?this._effectSlideUp(a,b):this._effectSlideDown(a,b)},_effectSlideUp:function(a,b){var d=this._size.height,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({top:-d},e);c(b).css({top:d}).show().animate({top:0},e)},_effectSlideDown:function(a,b){var d=this._size.height,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({top:d},
e);c(b).css({top:-d}).show().animate({top:0},e)},_effectSlideLeft:function(a,b){var d=this._size.width,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({left:-1*d},e);c(b).css({left:d}).show().animate({left:0},e)},_effectSlideRight:function(a,b){var d=this._size.width,e={duration:this.options.duration,easing:this.options.easing};c(a).animate({left:d},e);c(b).css({left:-d}).show().animate({left:0},e)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)}})})(jQuery);(function(c){c.widget("metro.dragtile",{version:"1.0.0",options:{},_create:function(){var a=(tile=this.element).parents(".tile-area");a.find(".tile");a.find(".tile-group");tile.attr("draggable","true");addTouchEvents(tile[0]);tile[0].addEventListener("dragstart",this._dragStart,!1);tile[0].addEventListener("dragend",this._dragEnd,!1);tile.on("mousedown",function(a){});tile.on("mouseup",function(a){})},_dragStart:function(a){c(this).css("opacity",0.4)},_dragEnd:function(a){c(this).css("opacity",1)},
_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.progressbar",{version:"1.0.1",options:{value:0,color:"bg-cyan",animate:!1,max:100,onchange:function(a){}},_create:function(){var a=this.element,b=this.options;void 0!=a.data("value")&&this.value(a.data("value")+"%");void 0!=a.data("color")&&(b.color=a.data("color"));void 0!=a.data("animate")&&(b.animate=a.data("animate"));void 0!=a.data("max")&&(b.max=a.data("max"));b.max=0>b.max?0:b.max;b.max=100<b.max?100:b.max;this._showBar()},_showBar:function(a){a=a||this.options.value;
var b=this.element;b.html("");var d=c("<div />");d.addClass("bar");this.options.color.indexOf("bg-")+1?d.addClass(this.options.color):d.css("background",this.options.color);d.appendTo(b);this.options.animate?d.css("width",this.value()+"%").animate({width:a+"%"}):d.css("width",a+"%");this.options.onchange(this.value())},value:function(a){if(void 0!=a)a=parseInt(a),a=a>this.max?this.max:a,a=0>a?0:a,this._showBar(a),this.options.value=a;else return parseInt(this.options.value)},color:function(a){this.options.color=
a;this.options.color.indexOf("bg-")+1?this.element.find(".bar").addClass(this.options.color):this.element.find(".bar").css("background",this.options.color);this._showBar()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.rating",{version:"1.0.0",options:{score:0,half:!1,stars:5,"static":!0,hints:["bad","poor","regular","good","gorgeous"],showHint:!1,showScore:!1,scoreHint:"Current score: ",click:function(a,b){}},_create:function(){var a=this.element;void 0!=a.data("score")&&(this.options.score=a.data("score"));void 0!=a.data("half")&&(this.options.half=a.data("half"));void 0!=a.data("stars")&&(this.options.stars=a.data("stars"));void 0!=a.data("showHint")&&(this.options.showHint=a.data("showHint"));
void 0!=a.data("static")&&(this.options.static=a.data("static"));void 0!=a.data("showScore")&&(this.options.showScore=a.data("showScore"));void 0!=a.data("scoreHint")&&(this.options.scoreHint=a.data("scoreHint"));this._showRating()},rate:function(a){this.options.score=a;this._showRating()},_showRating:function(){var a=this,b=this.element,d=this.options,e,f;b.addClass("rating");b.html("");e=c("<ul/>");d.static||b.addClass("active");for(var g=0;g<d.stars;g++)f=c("<li/>"),f.data("value",g+1),d.showHint&&
f.attr("title",d.hints[g]),g<=d.score-1&&f.addClass("rated"),f.on("click",function(){d.click(c(this).data("value"),a)}),f.appendTo(e);e.appendTo(b);d.showScore?(c("<span/>").addClass("score-hint").html(d.scoreHint+d.score).appendTo(b),b.css("height","auto")):b.find("ul").css("margin-bottom",0)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.slider",{version:"1.0.2",options:{position:0,accuracy:0,color:"default",completeColor:"default",markerColor:"default",colors:[],showHint:!1,change:function(a,b){},changed:function(a,b){},min:0,max:100,animate:!0,_slider:{vertical:!1,offset:0,length:0,marker:0,ppp:0,start:0,stop:0}},_create:function(){var a=this,b=this.element,c=this.options,e=this.options._slider;void 0!=b.data("accuracy")&&(c.accuracy=0<b.data("accuracy")?b.data("accuracy"):0);void 0!=b.data("animate")&&
(c.animate=b.data("animate"));void 0!=b.data("min")&&(c.min=b.data("min"));c.min=0>c.min?0:c.min;c.min=c.min>c.max?c.max:c.min;void 0!=b.data("max")&&(c.max=b.data("max"));c.max=100<c.max?100:c.max;c.max=c.max<c.min?c.min:c.max;void 0!=b.data("position")&&(c.position=this._correctValue(b.data("position")>this.options.min?b.data("position")>this.options.max?this.options.max:b.data("position"):this.options.min));void 0!=b.data("color")&&(c.color=b.data("color"));void 0!=b.data("completeColor")&&(c.completeColor=
b.data("completeColor"));void 0!=b.data("markerColor")&&(c.markerColor=b.data("markerColor"));void 0!=b.data("colors")&&(c.colors=b.data("colors").split(","));void 0!=b.data("showHint")&&(c.showHint=b.data("showHint"));e.vertical=b.hasClass("vertical");this._createSlider();this._initPoints();this._placeMarker(c.position);addTouchEvents(b[0]);b.children(".marker").on("mousedown",function(b){b.preventDefault();a._startMoveMarker(b)});b.on("mousedown",function(b){b.preventDefault();a._startMoveMarker(b)})},
_startMoveMarker:function(a){var b=this.element,d=this.options,e=this,f=b.children(".hint");c(document).mousemove(function(a){e._movingMarker(a);b.hasClass("permanent-hint")||f.css("display","block")});c(document).mouseup(function(){c(document).off("mousemove");c(document).off("mouseup");b.data("value",e.options.position);b.trigger("changed",e.options.position);d.changed(e.options.position,b);b.hasClass("permanent-hint")||f.css("display","none")});this._initPoints();this._movingMarker(a)},_movingMarker:function(a){var b;
b=this.options._slider.vertical;var c=this.options._slider.offset,e=this.options._slider.start,f=this.options._slider.stop,g=this.options._slider.length,h=this.options._slider.marker;a=b?a.pageY-c:a.pageX-c;a<e?a=e:a>f&&(a=f);b=this._pixToPerc(b?g-a-h/2:a-h/2);this._placeMarker(b);this.options.position=b;this.options.change(Math.round(b),this.element)},_placeMarker:function(a){var b,c,e=this.options,f=0,g=f=0,h=this.element.children(".marker"),k=this.element.children(".complete"),l=this.element.children(".hint");
c=this._percToPix(this.options.position);f=e.colors.length;g=e._slider.length/f;if(this.options._slider.vertical){var n=this._percToPix(this.options.position)+this.options._slider.marker,p=this.options._slider.length-n;b=this._percToPix(a)+this.options._slider.marker;c=this.options._slider.length-b;this._animate(h.css("top",p),{top:c});this._animate(k.css("height",n),{height:b});f&&(f=Math.round(b/g)-1,k.css("background-color",e.colors[0>f?0:f]));e.showHint&&l.html(Math.round(a)).css("top",c-l.height()/
2)}else b=this._percToPix(a),this._animate(h.css("left",c),{left:b}),this._animate(k.css("width",c),{width:b}),f&&(f=Math.round(b/g)-1,k.css("background-color",e.colors[0>f?0:f])),e.showHint&&this._animate(l.html(Math.round(a)).css("left",c-l.width()/2),{left:b-l.width()/2})},_animate:function(a,b){this.options.animate?a.stop(!0).animate(b):a.css(b)},_pixToPerc:function(a){return this._correctValue(a*this.options._slider.ppp)},_percToPix:function(a){return 0===this.options._slider.ppp?0:a/this.options._slider.ppp},
_correctValue:function(a){var b=this.options.accuracy,c=this.options.max,e=this.options.min;if(0===b)return a;if(a===c)return c;if(a===e)return e;a=Math.floor(a/b)*b+Math.round(a%b/b)*b;return a>c?c:a<e?e:a},_initPoints:function(){var a=this.options._slider,b=this.element;a.vertical?(a.offset=b.offset().top,a.length=b.height(),a.marker=b.children(".marker").height()):(a.offset=b.offset().left,a.length=b.width(),a.marker=b.children(".marker").width());a.ppp=this.options.max/(a.length-a.marker);a.start=
a.marker/2;a.stop=a.length-a.marker/2},_createSlider:function(){var a=this.element,b=this.options,d,e;a.html("");d=c("<div/>").addClass("complete").appendTo(a);e=c("<a/>").addClass("marker").appendTo(a);b.showHint&&c("<span/>").addClass("hint").appendTo(a);"default"!=b.color&&a.css("background-color",b.color);"default"!=b.completeColor&&d.css("background-color",b.completeColor);"default"!=b.markerColor&&e.css("background-color",b.markerColor)},value:function(a){a=a>this.options.max?this.options.max:
a;a=a<this.options.min?this.options.min:a;return"undefined"!==typeof a?(this._placeMarker(parseInt(a)),this.options.position=parseInt(a),this.options.change(Math.round(parseInt(a)),this.element),this):Math.round(this.options.position)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.tabcontrol",{version:"1.0.0",options:{effect:"none",activateStoredTab:!1,tabclick:function(a){},tabchange:function(a){}},_create:function(){var a=this,b=this.element,d=c(b.children(".tabs")).children("li"),e=c(b.children(".frames")).children(".frame"),f=b.attr("id");void 0!=b.data("effect")&&(this.options.effect=b.data("effect"));this.init(d,e);d.each(function(){var b=c(this).children("a");b.on("click",function(h){h.preventDefault();a.options.tabclick(this);if(c(this).parent().hasClass("disabled"))return!1;
d.removeClass("active");b.parent("li").addClass("active");e.hide();h=c(b.attr("href"));switch(a.options.effect){case "slide":h.slideDown();break;case "fade":h.fadeIn();break;default:h.show()}a._trigger("change",null,h);a.options.tabchange(this);void 0!=f&&window.localStorage.setItem(f+"-current-tab",c(this).attr("href"))})});this.options.activateStoredTab&&this._activateStoredTab(d)},init:function(a,b){var d=this;a.each(function(){if(c(this).hasClass("active")){var a=c(c(c(this).children("a")).attr("href"));
b.hide();a.show();d._trigger("change",null,a)}})},_activateStoredTab:function(a){var b=window.localStorage.getItem(this.element.attr("id")+"-current-tab");void 0!=b&&a.each(function(){var a=c(this).children("a");a.attr("href")==b&&a.click()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.tablecontrol",{version:"1.0.0",options:{width:"100%",height:"auto",cls:"table",checkRow:!1,colModel:[],data:[]},_create:function(){var a=this.element;a.css({width:this.options.width,height:this.options.height});a=this.createTable(a);this.addHeader(a,this.options.colModel);this.addTableData(a,this.options.data);a.addClass(this.options.cls)},addHeader:function(a,b){var d=c("<thead/>").appendTo(a),e=c("<tr/>").appendTo(d);c.each(b,function(a,b){c("<th/>").addClass(b.hcls).html(b.caption).appendTo(e)})},
createTable:function(a){return c("<table/>").appendTo(a)},addTableData:function(a,b){var d=this,e=c("<tbody/>").appendTo(a);c.each(b,function(a,b){d.addRowData(e,b)})},addRowData:function(a,b){var d=c("<tr/>").appendTo(a);void 0!=b.__row_class&&d.addClass(b.__row_class);c.each(this.options.colModel,function(a,f){c("<td/>").css("width",f.width).addClass(f.cls).html(b[f.field]).appendTo(d)})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);$(function(){$("[data-role=table]").tablecontrol()});(function(c){c.widget("metro.times",{version:"1.0.0",options:{style:{background:"bg-dark",foreground:"fg-white",divider:"fg-dark"},blink:!0,alarm:{h:0,m:0,s:0},ontick:function(a,b,c){},onalarm:function(){}},wrappers:{},_interval:0,_create:function(){var a=this,b=this.element;c.each(["Hours","Minutes","Seconds"],function(){c('<span class="count'+this+'">').html('<span class="digit-wrapper">                        <span class="digit">0</span>                    </span>                    <span class="digit-wrapper">                        <span class="digit">0</span>                    </span>').appendTo(b);
"Seconds"!=this&&b.append('<span class="divider"></span>')});this.wrappers=this.element.find(".digit-wrapper");void 0!=b.data("blink")&&(this.options.blink=b.data("blick"));void 0!=b.data("styleBackground")&&(this.options.style.background=b.data("styleBackground"));void 0!=b.data("styleForeground")&&(this.options.style.foreground=b.data("styleForeground"));void 0!=b.data("styleDivider")&&(this.options.style.divider=b.data("styleDivider"));"default"!=this.options.style.background&&this.element.find(".digit").addClass(this.options.style.background);
"default"!=this.options.style.foreground&&this.element.find(".digit").addClass(this.options.style.foreground);"default"!=this.options.style.divider&&this.element.find(".divider").addClass(this.options.style.divider);if(void 0!=b.data("alarm")){var d=b.data("alarm").split(":");this.options.alarm.h=void 0!=d[0]?d[0]:0;this.options.alarm.m=void 0!=d[1]?d[1]:0;this.options.alarm.s=void 0!=d[2]?d[2]:0}b.data("onalarm");setTimeout(function(){a.tick()},1E3)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",
a,b)},tick:function(){var a=this;this._interval=setInterval(function(){var b=new Date,c,e;c=b.getHours();a.updateDuo(0,1,c);e=b.getMinutes();a.updateDuo(2,3,e);b=b.getSeconds();a.updateDuo(4,5,b);a.options.ontick(c,e,b);a.blinkDivider();var f=a.options.alarm;f&&(void 0!=f.h&&f.h==c&&void 0!=f.m&&f.m==e&&void 0!=f.s&&f.s==b)&&(a.options.onalarm(),a._trigger("alarm"))},1E3)},blinkDivider:function(){this.options.blink&&this.element.find(".divider").toggleClass("no-visible")},updateDuo:function(a,b,c){this.switchDigit(this.wrappers.eq(a),
Math.floor(c/10)%10);this.switchDigit(this.wrappers.eq(b),c%10)},switchDigit:function(a,b){var d=a.find(".digit");if(d.is(":animated")||a.data("digit")==b)return!1;a.data("digit",b);var e=c("<span>",{"class":"digit",css:{top:"-2.1em",opacity:0},html:b});e.addClass(this.options.style.background);e.addClass(this.options.style.foreground);d.before(e).removeClass("static").animate({top:"2.5em",opacity:0},"fast",function(){d.remove()});e.delay(100).animate({top:0,opacity:1},"fast");return!0}})})(jQuery);(function(c){c.Dialog=function(a){if(c.Dialog.opened)return METRO_DIALOG;c.Dialog.opened=!0;c.Dialog.settings=a;a=c.extend({icon:!1,title:"",content:"",flat:!1,shadow:!1,overlay:!1,width:"auto",height:"auto",position:"default",padding:!1,overlayClickClose:!0,sysButtons:{btnClose:!0},onShow:function(a){},sysBtnCloseClick:function(a){},sysBtnMinClick:function(a){},sysBtnMaxClick:function(a){}},a);var b,d,e,f;b=c("<div/>").addClass("metro window-overlay");a.overlay&&b.css({backgroundColor:"rgba(0,0,0,.7)"});
d=c("<div/>").addClass("window");a.flat&&d.addClass("flat");a.shadow&&d.addClass("shadow").css("overflow","hidden");e=c("<div/>").addClass("caption");f=c("<div/>").addClass("content");f.css({paddingTop:32+a.padding,paddingLeft:a.padding,paddingRight:a.padding,paddingBottom:a.padding});a.sysButtons&&(a.sysButtons.btnClose&&c("<button/>").addClass("btn-close").on("click",function(b){b.preventDefault();b.stopPropagation();c.Dialog.close();a.sysBtnCloseClick(b)}).appendTo(e),a.sysButtons.btnMax&&c("<button/>").addClass("btn-max").on("click",
function(b){b.preventDefault();b.stopPropagation();a.sysBtnMaxClick(b)}).appendTo(e),a.sysButtons.btnMin&&c("<button/>").addClass("btn-min").on("click",function(b){b.preventDefault();b.stopPropagation();a.sysBtnMinClick(b)}).appendTo(e));a.icon&&c(a.icon).addClass("icon").appendTo(e);c("<div/>").addClass("title").html(a.title).appendTo(e);f.html(a.content);e.appendTo(d);f.appendTo(d);d.appendTo(b);"auto"!=a.width&&d.css("min-width",a.width);"auto"!=a.height&&d.css("min-height",a.height);b.hide().appendTo("body").fadeIn("fast");
METRO_DIALOG=d;d.css("position","fixed").css("z-index",parseInt(b.css("z-index"))+1).css("top",(c(window).height()-METRO_DIALOG.outerHeight())/2).css("left",(c(window).width()-d.outerWidth())/2);addTouchEvents(d[0]);if(a.draggable)e.on("mousedown",function(a){c.Dialog.drag=!0;e.css("cursor","move");d.css("z-index");var b=d.outerHeight(),f=d.outerWidth(),l=d.offset().top+b-a.pageY,n=d.offset().left+f-a.pageX;d.css("z-index",99999).parents().on("mousemove",function(a){var e=0<a.pageY?a.pageY+l-b:0;
a=0<a.pageX?a.pageX+n-f:0;c.Dialog.drag&&(0<=e&&e<=window.innerHeight-d.outerHeight()&&d.offset({top:e}),0<=a&&a<=window.innerWidth-d.outerWidth()&&d.offset({left:a}))});a.preventDefault()}).on("mouseup",function(){d.removeClass("draggable");c.Dialog.drag=!1;e.css("cursor","default")});d.on("click",function(a){a.stopPropagation()});if(a.overlayClickClose)b.on("click",function(a){a.preventDefault();c.Dialog.close()});a.onShow(METRO_DIALOG);c.Dialog.autoResize();return METRO_DIALOG};c.Dialog.content=
function(a){return c.Dialog.opened&&void 0!=METRO_DIALOG?a?(METRO_DIALOG.children(".content").html(a),c.Dialog.autoResize(),!0):METRO_DIALOG.children(".content").html():!1};c.Dialog.title=function(a){if(!c.Dialog.opened||void 0==METRO_DIALOG)return!1;var b=METRO_DIALOG.children(".caption").children(".title");a?b.html(a):b.html();return!0};c.Dialog.autoResize=function(){if(!c.Dialog.opened||void 0==METRO_DIALOG)return!1;var a=METRO_DIALOG.children(".content"),b=(c(window).height()-METRO_DIALOG.outerHeight())/
2,d=(c(window).width()-METRO_DIALOG.outerWidth())/2;METRO_DIALOG.css({width:a.outerWidth(),height:a.outerHeight(),top:b,left:d});return!0};c.Dialog.close=function(){if(!c.Dialog.opened||void 0==METRO_DIALOG)return!1;c.Dialog.opened=!1;METRO_DIALOG.parent(".window-overlay").fadeOut(function(){c(this).remove()});return!1}})(jQuery);(function(c){var a=!1,b=[],d={_container:null,_notify:null,_timer:null,options:{icon:"",caption:"",content:"",shadow:!0,width:"auto",height:"auto",style:!1,position:"right",timeout:3E3},init:function(a){this.options=c.extend({},this.options,a);this._build();return this},_build:function(){a=this._container=a||c("<div/>").addClass("metro notify-container").appendTo("body");var d=this.options;if(""==d.content||void 0==d.content)return!1;this._notify=c("<div/>").addClass("notify");d.shadow&&this._notify.addClass("shadow");
d.style&&void 0!=d.style.background&&this._notify.css("background-color",d.style.background);d.style&&void 0!=d.style.color&&this._notify.css("color",d.style.color);""!=d.caption&&void 0!=d.caption&&c("<div/>").addClass("caption").html(d.caption).appendTo(this._notify);""!=d.content&&void 0!=d.content&&c("<div/>").addClass("content").html(d.content).appendTo(this._notify);"auto"!=d.width&&this._notify.css("min-width",d.width);"auto"!=d.height&&this._notify.css("min-height",d.height);this._notify.hide().appendTo(this._container).fadeIn("slow");
b.push(this._notify);this.close(d.timeout)},close:function(a){this.clear();if(a==parseInt(a)){var b=this;this._timer=setTimeout(function(){b._timer=null;b._hide()},a)}else if(void 0==a)return this._hide();return this},clear:function(){return null!=this._timer?(clearTimeout(this._timer),this._timer=null,this):!1},_hide:function(){this.clear();return void 0!=this._notify?(this._notify.hide("slow",function(){this.remove();b.splice(b.indexOf(this._notify),1)}),this):!1},closeAll:function(){b.forEach(function(a){a.hide("slow",
function(){a.remove();b.splice(b.indexOf(a),1)})});return this}};c.Notify=function(a){return Object.create(d).init(a)};c.Notify.show=function(a,b){return c.Notify({content:a,caption:b})}})(jQuery);(function(c){c.widget("metro.listview",{version:"1.0.0",options:{onGroupExpand:function(a){},onGroupCollapse:function(a){},onListClick:function(a){}},_create:function(){var a=this,b=this.element;b.children(".collapsed").children(".group-content").hide();b.find(".group-title").on("click",function(b){var e=c(this).parent(".list-group"),f=e.children(".group-content");e.toggleClass("collapsed");e.hasClass("collapsed")?(f.slideUp(),a.options.onGroupCollapse(e)):(f.slideDown(),a.options.onGroupExpand(e));
b.preventDefault()});b.find(".list").on("click",function(d){b.find(".list").removeClass("active");c(this).toggleClass("active");a.options.onListClick(c(this));d.preventDefault()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.treeview",{version:"1.0.0",options:{onNodeClick:function(a){},onNodeCollapsed:function(a){},onNodeExpanded:function(a){}},_create:function(){var a=this,b=this.element;b.find(".node.collapsed").find("ul").hide();b.find(".node-toggle").on("click",function(b){var e=c(this).parent().parent("li");e.hasClass("keep-open")||(e.toggleClass("collapsed"),e.hasClass("collapsed")?(e.children("ul").fadeOut("fast"),a.options.onNodeCollapsed(e)):(e.children("ul").fadeIn("fast"),a.options.onNodeExpanded(e)),
a.options.onNodeClick(e),b.preventDefault(),b.stopPropagation())});b.find("a").each(function(){var a=c(this);a.css({paddingLeft:10*(a.parents("ul").length-1)})});b.find("a").on("click",function(d){var e=c(this),f=e.parent("li");b.find("a").removeClass("active");e.toggleClass("active");a.options.onNodeClick(f);d.preventDefault()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.fluentmenu",{version:"1.0.0",options:{onSpecialClick:function(a,b){},onTabClick:function(a,b){}},_create:function(){var a=this,b=this.element,d=this.options,e=b.find(".tabs-holder > li > a");this._hidePanels();this._showPanel();e.on("click",function(e){if(c(this).parent("li").hasClass("special"))d.onSpecialClick(e,c(this));else{var g=c(c(this).attr("href"));a._hidePanels();a._showPanel(g);b.find(".tabs-holder > li").removeClass("active");c(this).parent("li").addClass("active");
d.onTabClick(e,c(this))}e.preventDefault()})},_hidePanels:function(){this.element.find(".tab-panel").hide()},_showPanel:function(a){void 0==a&&(a=this.element.find(".tabs-holder li.active a").attr("href"));c(a).show()},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.hint",{version:"1.0.0",options:{position:"bottom",background:"#FFFCC0",shadow:!1,border:!1,_hint:void 0},_create:function(){var a=this,b=this.options;this.element.on("mouseenter",function(c){a.createHint();b._hint.stop().fadeIn();c.preventDefault()});this.element.on("mouseleave",function(a){b._hint.stop().fadeOut(function(){b._hint.remove()});a.preventDefault()})},createHint:function(){var a=this.element,b=a.data("hint").split("|"),d=this.options;void 0!=a.data("hintPosition")&&
(d.position=a.data("hintPosition"));void 0!=a.data("hintBackground")&&(d.background=a.data("hintBackground"));void 0!=a.data("hintShadow")&&(d.shadow=a.data("hintShadow"));void 0!=a.data("hintBorder")&&(d.border=a.data("hintBorder"));if("TD"==a[0].tagName||"TH"==a[0].tagName){var e=c("<div/>").css("display","inline-block").html(a.html());a.html(e);a=e}var e=1<b.length?b[0]:!1,f=1<b.length?b[1]:b[0],b=c("<div/>").addClass("hint").appendTo("body");e&&c("<div/>").addClass("hint-title").html(e).appendTo(b);
c("<div/>").addClass("hint-text").html(f).appendTo(b);b.addClass(d.position);d.shadow&&b.addClass("shadow");d.background&&b.css("background-color",d.background);d.border&&b.css("border-color",d.border);"top"==d.position?b.css({top:a.offset().top-c(window).scrollTop()-b.outerHeight()-20,left:a.offset().left-c(window).scrollLeft()}):"bottom"==d.position?b.css({top:a.offset().top-c(window).scrollTop()+a.outerHeight(),left:a.offset().left-c(window).scrollLeft()}):"right"==d.position?b.css({top:a.offset().top-
10-c(window).scrollTop(),left:a.offset().left+a.outerWidth()+10-c(window).scrollLeft()}):"left"==d.position&&b.css({top:a.offset().top-10-c(window).scrollTop(),left:a.offset().left-b.outerWidth()-10-c(window).scrollLeft()});d._hint=b},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.streamer",{version:"1.0.0",options:{scrollBar:!1,meter:{start:9,stop:19,interval:20},slideToGroup:1,slideToTime:"10:20",slideSleep:1E3,slideSpeed:1E3,onClick:function(a){},onLongClick:function(a){}},_create:function(){var a=this,b=this.element,d=this.options,e=b.find(".stream"),f=b.find(".event"),g=b.find(".events"),h=b.find(".events-area"),k=b.find(".event-group"),l=b.find(".event-stream");void 0!=b.data("scrollBar")&&(d.scrollBar=b.data("scrollBar"));void 0!=b.data("meterStart")&&
(d.meter.start=parseInt(b.data("meterStart")));void 0!=b.data("meterStop")&&(d.meter.stop=parseInt(b.data("meterStop")));void 0!=b.data("meterInterval")&&(d.meter.interval=b.data("meterInterval"));void 0!=b.data("slideToGroup")&&(d.slideToGroup=parseInt(b.data("slideToGroup")));void 0!=b.data("slideSleep")&&(d.slideSleep=parseInt(b.data("slideSleep")));void 0!=b.data("slideSpeed")&&(d.slideSpeed=parseInt(b.data("slideSpeed")));b.data("streamSelect",-1);var n=c("<ul/>").addClass("meter"),p,m,q,u=d.meter.stop,
r=d.meter.interval,s=[];for(p=d.meter.start;p<u;p++)for(m=0;60>m;m+=r)q=(10>p?"0"+p:p)+":"+(10>m?"0"+m:m),c("<li/>").addClass("js-interval-"+q.replace(":","-")).html("<em>"+q+"</em>").appendTo(n),s.push(q);b.data("intervals",s);n.insertBefore(b.find(".events-grid"));b.find(".event-stream").each(function(a,b){var d=0,f=c(b).find(".event");f.each(function(a,b){d+=c(b).outerWidth()});c(b).css({width:d+2*(f.length-1)+1});c(b).find(".time").css("background-color",c(e[a]).css("background-color"))});g.css({"overflow-x":d.scrollBar?
"scroll":"hidden"});b.css({height:b.find(".streams").outerHeight()+(d.scrollBar?20:0)});var t=0;k.each(function(a,b){t+=c(b).outerWidth()});t+=2*(k.length-1)+10;h.css("width",t);f.each(function(a,b){addTouchEvents(b)});f.mousedown(function(a){a.altKey&&c(this).toggleClass("selected")});b.mousewheel(function(a,b){var c=50*b;g.scrollLeft(g.scrollLeft()-c);return!1});e.each(function(a,d){c(d).mousedown(function(d){b.data("streamSelect")==a?(f.removeClass("event-disable"),b.data("streamSelect",-1)):(b.data("streamSelect",
a),f.addClass("event-disable"),c(l[a]).find(".event").removeClass("event-disable"))})});f.on("click",function(a){a.preventDefault();d.onClick(c(this))});f.on("longclick",function(a){c(this).toggleClass("selected");a.preventDefault();d.onLongClick(c(this))});b.find(".js-go-previous-time").on("click",function(c){c=b.data("intervals").indexOf(b.data("current-time"));0!=c&&(c--,c=b.data("intervals")[c],a.slideToTime(c,0,d.slideSpeed))});b.find(".js-go-next-time").on("click",function(c){c=b.data("intervals").indexOf(b.data("current-time"));
c!=b.data("intervals").length-1&&(c++,c=b.data("intervals")[c],a.slideToTime(c,0,d.slideSpeed))});b.find(".js-show-all-streams").on("click",function(a){b.find(".event").removeClass("event-disable");b.data("streamSelect",-1);a.preventDefault()});b.find(".js-schedule-mode").on("click",function(a){c(this).toggleClass("inverse");b.data("schedule-mode",c(this).hasClass("inverse"));a.preventDefault()});d.slideToTime?this.slideToTime(d.slideToTime,d.slideSleep,d.slideSpeed):this.slideToGroup(d.slideToGroup,
d.slideSleep,d.slideSpeed)},slideToTime:function(a,b,c){var e=this,f=this.element,g=f.find(".meter li.js-interval-"+a.replace(":","-"))[0],h=f.find(".streams").outerWidth()+2;setTimeout(function(){f.find(".events").animate({scrollLeft:"+="+(g.offsetLeft-h)},c,function(){e._afterSlide()})},b);f.data("current-time",a)},slideToGroup:function(a,b,c){var e=this,f=this.element,g=f.find(".event-group"),h=f.find(".streams").outerWidth()+2;setTimeout(function(){f.find(".events").animate({scrollLeft:"+="+(g[a-
1].offsetLeft-h)},c,function(){e._afterSlide()})},b)},_afterSlide:function(){},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.scrollbar",{version:"1.0.0",options:{height:"100%",width:"100%",axis:["x","y"],wheel:55},startSize:{width:null,height:null},elemPadding:!1,bothScroll:!1,scrollbar:null,contentHeight:0,contentWidth:0,contentMinHeight:0,contentMinWidth:0,dragElem:null,dragStart:!1,startCoords:{x:0,y:0},currCoords:{x:0,y:0},handlers:!1,_create:function(){var a=this.element,b=this;if(void 0!=a.data("scroll")){var d=a.data("scroll");"vertical"==d&&(this.options.axis="y");"horizontal"==d&&(this.options.axis=
"x");"both"==d&&(this.options.axis=["x","y"])}void 0!=a.data("height")&&(this.options.height=a.data("height"));void 0!=a.data("width")&&(this.options.width=a.data("width"));void 0!=a.data("wheel")&&(this.options.wheel=a.data("wheel"));a.css({position:"relative"});var d=a.outerWidth(),e=a.outerHeight();this.contentMinWidth=d;this.contentMinHeight=e;this.startSize.width=this.options.width;this.startSize.height=this.options.height;var f=this.startSize.width==parseInt(this.startSize.width)?this.startSize.width+
"px":this.startSize.width,g=this.startSize.height==parseInt(this.startSize.height)?this.startSize.height+"px":this.startSize.height;a.wrap('<div class="scrollbar" style="width: '+f+"; height: "+g+';"></div>');this.scrollbar=a.parents(".scrollbar").first();this.scrollbar.parents().first().css({overflow:"hidden"});this._build(d,e);c(window).resize(function(){b._resize()})},_resize:function(){var a=this.element;if(!isNaN(parseInt(this.element.css("left")))&&0!=parseInt(this.element.css("left"))||!isNaN(parseInt(this.element.css("top")))&&
parseInt(this.element.css("top"))){var b=Math.abs(parseInt(this.element.css("left"))),c=Math.abs(parseInt(this.element.css("top"))),e=this.scrollbar.width(),f=this.scrollbar.height();this.contentWidth-b<e&&(b-=e-(this.contentWidth-b),0>b&&(b=0),this.element.css("left",-1*b));this.element.css("left",-1*b);this.contentHeight-c<f&&(c-=f-(this.contentHeight-c),0>c&&(c=0),this.element.css("top",-1*c))}this.options.width=this.startSize.width;this.options.height=this.startSize.height;this.scrollbar.css({padding:0});
this.elemPadding&&(this.element.css({paddingRight:"-=5",paddingBottom:"-=5"}),this.elemPadding=!1);0<this.scrollbar.find(".scrollbar-v").length&&this.scrollbar.find(".scrollbar-v").remove();0<this.scrollbar.find(".scrollbar-h").length&&this.scrollbar.find(".scrollbar-h").remove();0<this.scrollbar.find(".scrollbar-both").length&&this.scrollbar.find(".scrollbar-both").remove();b=a.outerWidth();a=a.outerHeight();this.contentWidth=b;this.contentHeight=a;this._removeHandlers();this._build(b,a)},_build:function(a,
b){var c=this.element;this.options.width="100%"==this.options.width?this.scrollbar.outerWidth():this.options.width;this.options.height="100%"==this.options.height?this.scrollbar.outerHeight():this.options.height;this.scrollbar.css({width:this.startSize.width,height:this.startSize.height});this.contentWidth=a;this.contentHeight=b;"y"==this.options.axis?this.contentHeight>this.options.height?(this.scrollbar.css({paddingRight:20,paddingBottom:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=
a,this.contentHeight=b,this._verticalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-v").length&&this.scrollbar.find(".scrollbar-v").hide(),this.scrollbar.css({paddingRight:0,paddingBottom:0})):"x"==this.options.axis?this.contentWidth>this.options.width?("100%"==this.startSize.height&&(this.scrollbar.css({paddingBottom:20,paddingRight:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,this.contentHeight=b),this._horizontalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-h").length&&
this.scrollbar.find(".scrollbar-h").hide(),this.scrollbar.css({paddingBottom:0,paddingRight:0})):this.contentHeight>this.options.height&&this.contentWidth>this.options.width?(this.bothScroll=!0,0<this.scrollbar.find(".scrollbar-both").length?this.scrollbar.find(".scrollbar-both").show():this.scrollbar.append('<div class="scrollbar-both"></div>'),this.elemPadding||(this.element.css({paddingRight:"+=5",paddingBottom:"+=5"}),this.elemPadding=!0),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,
this.contentHeight=b,this._verticalScrollbar(),this._horizontalScrollbar(),this._startHandlers()):(this.bothScroll=!1,0<this.scrollbar.find(".scrollbar-both").length&&this.scrollbar.find(".scrollbar-both").hide(),this.elemPadding&&(this.element.css({paddingRight:"-=5",paddingBottom:"-=5"}),this.elemPadding=!1),this.contentWidth>this.options.width?("100%"==this.startSize.height&&(this.scrollbar.css({paddingBottom:20,paddingRight:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,this.contentHeight=
b),this._horizontalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-h").length&&this.scrollbar.find(".scrollbar-h").hide(),this.scrollbar.css({paddingBottom:0,paddingRight:0})),this.contentHeight>this.options.height?(this.scrollbar.css({paddingRight:20,paddingBottom:0}),a=c.outerWidth(),b=c.outerHeight(),this.contentWidth=a,this.contentHeight=b,this._verticalScrollbar(),this._startHandlers()):(0<this.scrollbar.find(".scrollbar-v").length&&this.scrollbar.find(".scrollbar-v").hide(),
this.scrollbar.css({paddingRight:0,paddingBottom:0})))},_verticalScrollbar:function(){if(1>this.scrollbar.find(".scrollbar-v").length){var a=[];a[a.length]='<div class="scrollbar-v">';a[a.length]='<div class="scrollbar-v-up"></div>';a[a.length]='<div class="scrollbar-v-down"></div>';a[a.length]='<div class="scrollbar-line-v">';a[a.length]='<div class="scrollbar-line-v-btn"></div>';a[a.length]="</div>";a[a.length]="</div>";a=a.join("");this.scrollbar.append(a)}else this.scrollbar.find(".scrollbar-v").show();
var b=this.scrollbar.find(".scrollbar-line-v"),a=this.scrollbar.find(".scrollbar-line-v-btn"),c=this.scrollbar.find(".scrollbar-v");if(this.bothScroll){c.height(this.options.height);var e=c.height()-15;this.options.height=e;c.height(e)}else c.height(this.options.height);c=this.options.height-32;e=c/this.contentHeight;b.height(c);e>=(this.contentHeight-32)/this.contentHeight?a.hide():(b=e*this.options.height,a.show().height(b))},_horizontalScrollbar:function(){if(1>this.scrollbar.find(".scrollbar-h").length){var a=
[];a[a.length]='<div class="scrollbar-h">';a[a.length]='<div class="scrollbar-h-up"></div>';a[a.length]='<div class="scrollbar-h-down"></div>';a[a.length]='<div class="scrollbar-line-h">';a[a.length]='<div class="scrollbar-line-h-btn"></div>';a[a.length]="</div>";a[a.length]="</div>";a=a.join("");this.scrollbar.append(a)}else this.scrollbar.find(".scrollbar-h").show();var a=this.scrollbar.find(".scrollbar-line-h"),b=this.scrollbar.find(".scrollbar-line-h-btn"),c=this.scrollbar.find(".scrollbar-h");
if(this.bothScroll){c.width(this.options.width);var e=c.width()-15;this.options.width=e;c.width(e)}else c.width(this.options.width);var c=this.options.width-32,e=c/this.contentWidth,f=e*this.options.width,g=isNaN(parseInt(this.element.css("left")))?0:parseInt(this.element.css("left")),g=Math.abs(g)*e;a.width(c);e>=(this.contentWidth-32)/this.contentWidth?b.hide():b.show().width(f).css({left:g})},_startHandlers:function(){if(this.handlers)return!1;this.handlers=!0;var a=this;c(document).mousemove(function(b){a._drag(b)});
c(document).mouseup(function(b){a._dragEnd(b)});this.scrollbar.find(".scrollbar-line-v-btn,.scrollbar-line-h-btn").on("mousedown",function(b){a._dragStart(b,c(this))});this.scrollbar.find(".scrollbar-line-v,.scrollbar-line-h").on("click",function(b){a._clickPos(b,c(this))});this.scrollbar.find(".scrollbar-v-up,.scrollbar-h-up").on("click",function(b){a._fixScroll(1,c(this))});this.scrollbar.find(".scrollbar-v-down,.scrollbar-h-down").on("click",function(b){a._fixScroll(-1,c(this))});this.scrollbar.mousewheel(function(b,
c){a._fixScroll(c);return!1})},_removeHandlers:function(){if(!this.handlers)return!1;this.handlers=!1;c(document).mousemove(function(a){return!1});c(document).mouseup(function(a){return!1});this.scrollbar.find(".scrollbar-line-v-btn,.scrollbar-line-h-btn").off("mousedown");this.scrollbar.find(".scrollbar-line-v,.scrollbar-line-h").off("click");this.scrollbar.find(".scrollbar-v-up,.scrollbar-h-up").off("click");this.scrollbar.find(".scrollbar-v-down,.scrollbar-h-down").off("click")},_clickPos:function(a,
b){if("scrollbar-line-v"==c(a.target).attr("class")||"scrollbar-line-h"==c(a.target).attr("class")){var d=b.offset();if("scrollbar-line-v"==c(a.target).attr("class")){var e=a.pageY-d.top,f=b.find(".scrollbar-line-v-btn");this.dragElem={elem:f,width:f.width(),height:f.height(),parent:b,parentWidth:b.width(),parentHeight:b.height(),parentOffset:d};this._scrollTo(0,e,"y")}else e=a.pageX-d.left,f=b.find(".scrollbar-line-h-btn"),this.dragElem={elem:f,width:f.width(),height:f.height(),parent:b,parentWidth:b.width(),
parentHeight:b.height(),parentOffset:d},this._scrollTo(e,0,"x");this.dragElem=null}},_fixScroll:function(a,b){var c,e,f,g=this.options.wheel;if(void 0!==b&&(b.hasClass("scrollbar-h-up")||b.hasClass("scrollbar-h-down"))||"x"==this.options.axis||"x"!=this.options.axis&&"y"!=this.options.axis&&1>this.scrollbar.find(".scrollbar-v").length){var h=100*(g/this.contentWidth);e=(this.options.width-32)/100*h;h=parseInt(this.element.css("left"));f=isNaN(h)?0:Math.abs(h);h=this.scrollbar.find(".scrollbar-line-h-btn");
c=this.scrollbar.find(".scrollbar-line-h");var k=parseFloat(h.css("left")),k=isNaN(k)?0:k;0<a?(g=f-g,f=k-e):(g=f+g,f=k+e);0>g&&(g=0);g>this.contentWidth-this.options.width&&(g=this.contentWidth-this.options.width);e=c.width();c.height();c=h.width();h.height();0>f&&(f=0);f+c>e&&(f=e-c);this.element.css({left:-1*g});h.css({left:f})}else h=100*(g/this.contentHeight),e=(this.options.height-32)/100*h,h=parseInt(this.element.css("top")),f=isNaN(h)?0:Math.abs(h),h=this.scrollbar.find(".scrollbar-line-v-btn"),
c=this.scrollbar.find(".scrollbar-line-v"),k=parseFloat(h.css("top")),k=isNaN(k)?0:k,0<a?(g=f-g,e=k-e):(g=f+g,e=k+e),0>g&&(g=0),g>this.contentHeight-this.options.height&&(g=this.contentHeight-this.options.height),c.width(),f=c.height(),h.width(),c=h.height(),0>e&&(e=0),e+c>f&&(e=f-c),this.element.css({top:-1*g}),h.css({top:e})},_scrollTo:function(a,b,c){"x"==c?(c=(this.options.width-32)/this.contentWidth,b=a/c,0>b&&(b=0),b>this.contentWidth-this.options.width&&(b=this.contentWidth-this.options.width),
0>a&&(a=0),a>this.dragElem.parentWidth-this.dragElem.width&&(a=this.dragElem.parentWidth-this.dragElem.width),this.dragElem.elem.css({left:a}),this.element.css({left:-1*b})):(c=(this.options.height-32)/this.contentHeight,a=b/c,0>a&&(a=0),a>this.contentHeight-this.options.height&&(a=this.contentHeight-this.options.height),0>b&&(b=0),b>this.dragElem.parentHeight-this.dragElem.height&&(b=this.dragElem.parentHeight-this.dragElem.height),this.dragElem.elem.css({top:b}),this.element.css({top:-1*a}))},_scroll:function(){if(this.dragElem.elem.hasClass("scrollbar-line-h-btn")){var a=
(this.options.width-32)/this.contentWidth,b=parseInt(this.dragElem.elem.css("left")),a=(isNaN(b)?0:Math.abs(b))/a;0>a&&(a=0);a>this.contentWidth-this.options.width&&(a=this.contentWidth-this.options.width);this.element.css({left:-1*a})}else a=(this.options.height-32)/this.contentHeight,b=parseInt(this.dragElem.elem.css("top")),a=(isNaN(b)?0:Math.abs(b))/a,0>a&&(a=0),a>this.contentHeight-this.options.height&&(a=this.contentHeight-this.options.height),this.element.css({top:-1*a})},_startCoordsDiff:function(a){var b=
this.dragElem.elem.offset();this.startCoords.x=a.pageX-b.left;this.startCoords.y=a.pageY-b.top},_dragStart:function(a,b){var c=b.parents().first();this.dragElem={elem:b,width:b.width(),height:b.height(),parent:c,parentWidth:c.width(),parentHeight:c.height(),parentOffset:c.offset()};this.dragStart=!0;this.currCoords.x=a.pageX;this.currCoords.y=a.pageY;this._startCoordsDiff(a)},_drag:function(a){if(this.dragStart){this.currCoords.x=a.pageX;this.currCoords.y=a.pageY;a=this.currCoords.x-this.startCoords.x-
this.dragElem.parentOffset.left;var b=this.currCoords.y-this.startCoords.y-this.dragElem.parentOffset.top;0>a&&(a=0);a+this.dragElem.width>=this.dragElem.parentWidth&&(a=this.dragElem.parentWidth-this.dragElem.width);0>b&&(b=0);b+this.dragElem.height>this.dragElem.parentHeight&&(b=this.dragElem.parentHeight-this.dragElem.height);this.dragElem.elem.css({left:a,top:b});this._scroll()}},_dragEnd:function(a){this.dragStart&&(this.dragElem=null,this.dragStart=!1,this.startCoords.x=0,this.startCoords.y=
0,this.currCoords.x=null,this.currCoords.y=null)},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.stepper",{version:"1.0.0",options:{steps:3,start:1,onStep:function(a,b){}},_create:function(){var a=this.element,b=this.options;void 0!=a.data("steps")&&(b.steps=a.data("steps"));void 0!=a.data("start")&&(b.start=a.data("start"));this._createStepper();this._positioningSteps();this._stepTo(b.start)},_createStepper:function(){var a=this.element,b=this.options,d,e;e=c("<ul/>");for(d=0;d<b.steps;d++)c("<li/>").appendTo(e);e.appendTo(a)},_positioningSteps:function(){var a=
this.element,b=a.find("li"),d=a.width(),e=b.length-1,f=c(b[0]).width();c.each(b,function(a,b){var k=0==a?0:(d-f)/e*a;c(b).animate({left:k})})},_stepTo:function(a){var b=this.options,d=this.element.find("li");d.removeClass("current").removeClass("complete");c.each(d,function(d,f){d<a-1&&c(f).addClass("complete");d==a-1&&(c(f).addClass("current"),b.onStep(d+1,f))})},first:function(){var a=this.options;a.start=1;this._stepTo(a.start)},last:function(){var a=this.options,b=this.element.find("li");a.start=
b.length;this._stepTo(a.start)},next:function(){var a=this.options,b=this.element.find("li");a.start+1>b.length||(a.start++,this._stepTo(a.start))},prior:function(){var a=this.options;0!=a.start-1&&(a.start--,this._stepTo(a.start))},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.pullmenu",{version:"1.0.0",options:{},_create:function(){var a=this.element,b=void 0!=a.data("relation")?a.data("relation"):a.parent().children(".element-menu, .horizontal-menu");addTouchEvents(a[0]);a.on("click",function(a){b.slideToggle();a.preventDefault();a.stopPropagation()})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);
$(window).resize(function(){800<(0<window.innerWidth?window.innerWidth:screen.width)?$(".element-menu").show():$(".element-menu").hide()});(function(c){c.widget("metro.wizard",{version:"1.0.0",options:{stepper:!0,stepperType:"default",locale:c.Metro.currentLocale,finishStep:"default",buttons:{cancel:!0,help:!1,prior:!0,next:!0,finish:!0},onCancel:function(a,b){},onHelp:function(a,b){},onPrior:function(a,b){return!0},onNext:function(a,b){return!0},onFinish:function(a,b){},onPage:function(a,b){}},_stepper:void 0,_currentStep:0,_steps:void 0,_create:function(){var a=this.element,b=this.options,c=a.find(".step");this._steps=c;b.stepper&&
(this._stepper=this._createStepper(c.length).insertBefore(a.find(".steps")));void 0!=a.data("locale")&&(b.locale=a.data("locale"));this._createEvents();this.options.onPage(this._currentStep+1,a)},_createStepper:function(a){var b=this.options;a=c("<div/>").addClass("stepper").attr("data-role","stepper").attr("data-steps",a);"default"!=b.stepperType&&a.addClass(b.stepperType);return a},_createEvents:function(){var a=this,b=this.element,d=this.options;if(d.buttons){var e=c("<div/>").addClass("actions").appendTo(b),
f=c("<div/>").addClass("group-left").appendTo(e),e=c("<div/>").addClass("group-right").appendTo(e);if(d.buttons.cancel)c("<button type='button'/>").addClass("btn-cancel").html(c.Metro.Locale[d.locale].buttons[2]).appendTo(f).on("click",function(){d.onCancel(a._currentStep+1,b)});if(d.buttons.help)c("<button type='button'/>").addClass("btn-help").html(c.Metro.Locale[d.locale].buttons[3]).appendTo(e).on("click",function(){d.onHelp(a._currentStep+1,b)});if(d.buttons.prior)c("<button type='button'/>").addClass("btn-prior").html(c.Metro.Locale[d.locale].buttons[4]).appendTo(e).on("click",
function(){d.onPrior(a._currentStep+1,b)&&a.prior()});if(d.buttons.next)c("<button type='button'/>").addClass("btn-next").html(c.Metro.Locale[d.locale].buttons[5]).appendTo(e).on("click",function(){d.onNext(a._currentStep+1,b)&&a.next()});if(d.buttons.finish)c("<button type='button' disabled/>").addClass("btn-finish").html(c.Metro.Locale[d.locale].buttons[6]).appendTo(e).on("click",function(){d.onFinish(a._currentStep+1,b)})}},next:function(){var a=this._currentStep+1;if(a==this._steps.length)return!1;
this._currentStep=a;this._steps.hide();c(this._steps[a]).show();this.options.onPage(this._currentStep+1,this.element);this._stepper.stepper("next");var b=parseInt("default"==this.options.finishStep?this._steps.length-1:this.options.finishStep);a==b?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0);return!0},prior:function(){var a=this._currentStep-1;if(0>a)return!1;this._currentStep=a;this._steps.hide();c(this._steps[a]).show();this.options.onPage(this._currentStep+
1,this.element);this._stepper.stepper("prior");var b=parseInt("default"==this.options.finishStep?this._steps.length-1:this.options.finishStep);a==b?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0);return!0},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.panel",{version:"1.0.0",options:{onCollapse:function(){},onExpand:function(){}},_create:function(){var a=this.element,b=this.options,c=a.children(".panel-header"),e=a.children(".panel-content");c.on("click",function(){e.slideToggle("fast",function(){a.toggleClass("collapsed");if(a.hasClass("collapsed"))b.onCollapse();else b.onExpand()})})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.widget("metro.tileTransform",{version:"1.0.0",options:{},_create:function(){var a=this.element,b=a.width(),d=a.height();a.on("click",function(a){});a.on("mousedown",function(e){var f=e.pageX-c(this).offset().left;e=e.pageY-c(this).offset().top;var g="top";f<1*b/3&&(e<1*d/2||e>1*d/2)?g="left":f>2*b/3&&(e<1*d/2||e>1*d/2)?g="right":f>1*b/3&&(f<2*b/3&&e>d/2)&&(g="bottom");c(this).addClass("tile-transform-"+g);"A"==a[0].tagName&&a.attr("href")&&setTimeout(function(){document.location.href=
a.attr("href")},500)});a.on("mouseup",function(){c(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")});a.on("mouseleave",function(){c(this).removeClass("tile-transform-left").removeClass("tile-transform-right").removeClass("tile-transform-top").removeClass("tile-transform-bottom")})},_destroy:function(){},_setOption:function(a,b){this._super("_setOption",a,b)}})})(jQuery);(function(c){c.Metro.initAccordions=function(a){void 0!=a?c(a).find("[data-role=accordion]").accordion():c("[data-role=accordion]").accordion()};c.Metro.initButtonSets=function(a){void 0!=a?(c(a).find("[data-role=button-set]").buttonset(),c(a).find("[data-role=button-group]").buttongroup()):(c("[data-role=button-set]").buttonset(),c("[data-role=button-group]").buttongroup())};c.Metro.initCalendars=function(a){void 0!=a?c(a).find("[data-role=calendar]").calendar():c("[data-role=calendar]").calendar()};
c.Metro.initCarousels=function(a){void 0!=a?c(a).find("[data-role=carousel]").carousel():c("[data-role=carousel]").carousel()};c.Metro.initCountdowns=function(a){void 0!=a?c(a).find("[data-role=countdown]").countdown():c("[data-role=countdown]").countdown()};c.Metro.initDatepickers=function(a){void 0!=a?c(a).find("[data-role=datepicker]").datepicker():c("[data-role=datepicker]").datepicker()};c.Metro.initDropdowns=function(a){void 0!=a?c(a).find("[data-role=dropdown]").dropdown():c("[data-role=dropdown]").dropdown()};
c.Metro.initFluentMenus=function(a){void 0!=a?c(a).find("[data-role=fluentmenu]").fluentmenu():c("[data-role=fluentmenu]").fluentmenu()};c.Metro.initHints=function(a){void 0!=a?c(a).find("[data-hint]").hint():c("[data-hint]").hint()};c.Metro.initInputs=function(a){void 0!=a?c(a).find("[data-role=input-control], .input-control").inputControl():c("[data-role=input-control], .input-control").inputControl()};c.Metro.transformInputs=function(a){void 0!=a?c(a).find("[data-transform=input-control]").inputTransform():
c("[data-transform=input-control]").inputTransform()};c.Metro.initListViews=function(a){void 0!=a?c(a).find("[data-role=listview]").listview():c("[data-role=listview]").listview()};c.Metro.initLives=function(a){void 0!=a?c(a).find("[data-role=live-tile], [data-role=live]").livetile():c("[data-role=live-tile], [data-role=live]").livetile()};c.Metro.initProgreeBars=function(a){void 0!=a?c(a).find("[data-role=progress-bar]").progressbar():c("[data-role=progress-bar]").progressbar()};c.Metro.initRatings=
function(a){void 0!=a?c(a).find("[data-role=rating]").rating():c("[data-role=rating]").rating()};c.Metro.initScrolls=function(a){void 0!=a?c(a).find("[data-role=scrollbox]").scrollbar():c("[data-role=scrollbox]").scrollbar()};c.Metro.initSliders=function(a){void 0!=a?c(a).find("[data-role=slider]").slider():c("[data-role=slider]").slider()};c.Metro.initTabs=function(a){void 0!=a?c(a).find("[data-role=tab-control]").tabcontrol():c("[data-role=tab-control]").tabcontrol()};c.Metro.initTimes=function(a){void 0!=
a?c(a).find("[data-role=times]").times():c("[data-role=times]").times()};c.Metro.initTrees=function(a){void 0!=a?c(a).find("[data-role=treeview]").treeview():c("[data-role=treeview]").treeview()};c.Metro.initSteppers=function(a){void 0!=a?c(a).find("[data-role=stepper]").stepper():c("[data-role=stepper]").stepper()};c.Metro.initStreamers=function(a){void 0!=a?c(a).find("[data-role=streamer]").streamer():c("[data-role=streamer]").streamer()};c.Metro.initDragTiles=function(a){void 0!=a?c(a).find("[data-role=drag-drop]").dragtile():
c("[data-role=drag-drop]").dragtile()};c.Metro.initPulls=function(a){void 0!=a&&c(a).find("[data-role=pull-menu], .pull-menu").pullmenu();c("[data-role=pull-menu], .pull-menu").pullmenu()};c.Metro.initPanels=function(a){void 0!=a&&c(a).find("[data-role=panel]").panel();c("[data-role=panel]").panel()};c.Metro.initTileTransform=function(a){void 0!=a&&c(a).find("[data-click=transform]").tileTransform();c("[data-click=transform]").tileTransform()};c.Metro.initAll=function(a){c.Metro.initAccordions(a);
c.Metro.initButtonSets(a);c.Metro.initCalendars(a);c.Metro.initCarousels(a);c.Metro.initCountdowns(a);c.Metro.initDatepickers(a);c.Metro.initDropdowns(a);c.Metro.initFluentMenus(a);c.Metro.initHints(a);c.Metro.initInputs(a);c.Metro.transformInputs(a);c.Metro.initListViews(a);c.Metro.initLives(a);c.Metro.initProgreeBars(a);c.Metro.initRatings(a);c.Metro.initScrolls(a);c.Metro.initSliders(a);c.Metro.initTabs(a);c.Metro.initTimes(a);c.Metro.initTrees(a);c.Metro.initSteppers(a);c.Metro.initStreamers(a);
c.Metro.initDragTiles(a);c.Metro.initPulls(a);c.Metro.initPanels(a);c.Metro.initTileTransform(a)}})(jQuery);$(function(){$.Metro.initAll()});$(function(){if(METRO_AUTO_REINIT){var c=$(".metro").html(),a;setInterval(function(){a=$(".metro").html();c!==a&&(c=a,$.Metro.initAll())},500)}});

/*! Countdown for Comunic (c) all rights reserved
	Made in 2015									*/
function launch_countdown(timestamp_end,id){setInterval("count_down("+timestamp_end+", '"+id+"');",1e3);}
function fix_countd(nb){if(nb<10){return"0"+nb}else return nb;}
function count_down(timestamp_end,id){var days=24*60*60,hours=60*60,minutes=60,now,left,d,h,m,s;now=new Date()/1e3;left=Math.floor(timestamp_end-now);if(left<0)left=left*(-1);d=Math.floor(left/days);left-=d*days;h=Math.floor(left/hours);left-=h*hours;m=Math.floor(left/minutes);left-=m*minutes;s=left;d=fix_countd(d);h=fix_countd(h);m=fix_countd(m);s=fix_countd(s);var afficher=d+":"+h+":"+m+":"+s;document.getElementById(id).innerHTML=afficher;}


/* Avertissement dans la console de la protection du code */
console.log("         /\\       Attention : Si vous avez ouvert cette");console.log("        /||\\      console de developpement, c'est que quelqu'un");console.log("       / || \\     vous a demande de le faire ou que vous");console.log("      /  ||  \\    souhaitez analyser et copier le code source de");console.log("     /___()___\\   Comunic. Sachez que la copie ou la reproduction");console.log("du code source de Comunic est formellement interdite, que le code");console.log("est place sous copyright. De plus, en utilisant cette console vous");console.log("risquez de placer votre compte dans un etat d'insecurite.");

//Librairie du Service Pierre
// 2014-2105 Tous droits réservés.
//Version pour Internet Explorer
//Fonction Ajax rapide sans réponse attendue
function ajax_rapide(adresse){
	request = new XMLHttpRequest();
	request.open("GET", adresse);
	request.send(null);
} 

//Fonction de recherche et d'affichage si nécessaire des notifications
//Nécessite: prepare_joue_son
//Nécessite: joue_son
function getpopupnotification(file) {
	
	 var xhr = new XMLHttpRequest();

	// Récupération du contenu du fichier
	xhr.open('GET', file);

	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {

			if(xhr.responseText != "")
			{
				affiche_notification(xhr.responseText, "Notification", 5);
				joue_son("son_notification");
			}
			else
			{
				//Do nothing
			}

		} else if (xhr.readyState == 4 && xhr.status != 200) { 
			//Do nothing
		}

	}

	xhr.send(null);

}

//Fonction de redirection
function redirige(adresse)
{
	//On redirige la page
	document.location.href=adresse;
}

//Préparation d'un contrôleur de son
function prepare_joue_son(adresse_ogg, adresse_mp3, id)
{
	//On ajoute le code HTML
	document.getElementById(id + "_area").innerHTML = "<audio id='" + id + "'><source src='" + adresse_ogg + "'></source><source src='" + adresse_mp3 +"'></source></audio>";
}

function joue_son(id)
{
	//On récupère les informations du son
	var player = document.querySelector('#' + id);
	player.play();

}

//Fonction d'affichage de notification
function affiche_notification(message, titre, temps)
{
	//On calcule de temps (adapté à IE)
	temps = 3*1000;
	
	$(function(){
			$.Notify({
                shadow: true,
                position: 'bottom-right',
                content: message,
				caption: titre,
				timeout: temps
            });
	});
}

//Fonction d'affichage de notification (erreur)
function affiche_notification_erreur(message, titre, temps)
{
	//On calcule de temps (adapté à IE)
	temps = 3*1000;
	
	$(function(){
			$.Notify({
                shadow: true,
                position: 'bottom-right',
                content: message,
				caption: titre,
				timeout: temps,
				style: {background: 'red', color: 'white',},
            });
	});
}

//Fonction d'affichage de notification (succès)
function affiche_notification_succes(message, titre, temps)
{
	//On calcule de temps (adapté à IE)
	temps = 3*1000;
	
	$(function(){
			$.Notify({
                shadow: true,
                position: 'bottom-right',
                content: message,
				caption: titre,
				timeout: temps,
				style: {background: 'green', color: 'white'}
            });
	});
}

//Fonction de validation d'adresse mail
function validermail(mailarea)
{
	var email = document.getElementById(mailarea).value;
	
	if (email.match(/^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]{1,}[.][a-zA-Z]{2,3}$/))
	{
		return true;
	}
	else
	{
		alert('Votre adresse mail est incorrecte!');
		return false;
	}
}

//Fonction pour afficher ou cacher des éléments
function MM_showHideLayers() { //v9.0
	var i,p,v,obj,args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) 
	with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	obj.visibility=v; }
}

//Script de confirmation pour effectuer une opération
function confirmaction(destination, message) {
	if (confirm(message))
	{
		document.location.href=destination;
	}
	else
	{
		affiche_notification("Op&eacute;ration annul&eacute;e.", "Information", 7);
	}
}

//Affiche une fenêtre (code source dans l'appel de la fonction)
function affiche_fenetre(titre, code_source, icone, lock_screen, window_width, window_height)
{
	$(function(){
		$.Dialog({
			shadow: true,
			overlay: lock_screen,
			draggable: true,
			flat: true,
			icon: '<span class="' + icone + '"></span>',
			title: titre,
			width: window_width,
			padding: 10,
			height : window_height,
			content: code_source
		});
	});
}

//Affiche la liste des smiley
function affiche_liste_smile(destination)
{
	var source = "<table class='liste_smile'>";
	var count = 0;
	var liste = liste_smile;
	
	//On parcours la liste
	for (var i = 0; i < liste.length; i++) {
	
		if(count == 0)
		{
			source = source + "<tr>";
		}
		
		source = source + "<td><img class='un_smile_de_liste' onClick='" + 'ajout_source("'+liste[i][0]+'", "'+ destination +'"); ' + "' src='" + liste[i][1] + "' title='" + liste[i][2] + "' /></td>";  //Code retiré : $.Dialog.close();
		
		count = count + 1;
		
		if(count == 7)
		{
			source = source + "</tr>";
			count = 0;
		}
	}
	
	source = source + "</table>";
	
	//Affichage de la fenêtre
	affiche_fenetre("", source, "icon-smiley", true, 130, 100);
}

//Ajout de la source à un champs de texte (ex:Smiley)
function ajout_source(source_ajout, destination)
{
	//On récupère l'ancienne source
	var source_original = document.getElementById(destination).value;
	
	//On ajoute la nouvelle
	document.getElementById(destination).value = source_original + source_ajout;
}

//Affichage des notifications V.2
function affiche_notifications()
{
	//Affichage du panneau des notifications
	document.getElementById('new_notification').style.visibility = "visible";
	
	//Ouverture de la requête
	xhr_notifications = new XMLHttpRequest();
	xhr_notifications.open("GET", "notification.php");
	
	xhr_notifications.onreadystatechange = function() {
		if (xhr_notifications.readyState == 4 && (xhr_notifications.status == 200 || xhr_notifications.status == 0)) {
			document.getElementById('new_iframenotification').innerHTML = xhr_notifications.responseText;
		}
	};
	
	//Envoi de la requête
	xhr_notifications.send(null);
}

//Affichage d'une fenêtre de chat privé
function affiche_chat_prive_old(id)
{
	if(!id)
	{
		id = "";
	}
	else
	{
		id = "?screen=chat&id=" + id;
	}
	
	affiche_fenetre("Chat priv&eacute;", "<iframe src='privatechat.php" + id + "' class='iframenotification'>Votre navigateur n'est pas compatible avec le logiciel de chat priv&eacute;. Veuillez mettre votre navigateur &agrave; jour ou utiliser Mozilla Firefox.</iframe>", "icon-user", true, 415, 170);
}

//Fermer le panneau des amis
function ferme_panneau_amis()
{
	//On masque le panneau
	document.getElementById('listeamis').style.display = "none";
	
	//On enregistre le choix de l'utilisateur par une requête Ajax
	ajax_rapide("index.php?miseajourpanneau=0");
	
	//On affiche un message à l'utilisateur
	affiche_notification("Masquage du panneau des amis termin&eacute;.", "Information", 2);
}

//Fermer le panneau des amis
function affiche_panneau_amis()
{
	//On masque le panneau
	document.getElementById('listeamis').style.display = "block";
	
	//On enregistre le choix de l'utilisateur par une requête Ajax
	ajax_rapide("index.php?miseajourpanneau=1");
	
	//On affiche un message à l'utilisateur
	affiche_notification("Affichage du panneau des amis termin&eacute;.", "Information", 2);
}

//Fonction de post de commentaires
function submitCommentaire(destination, idcommentaireform, iddestination, idtexte, page, iduser)
{
	var commentaire = encodeURIComponent(document.getElementById(idcommentaireform).value);

	//var touscommentaires = document.getElementById(iddestination);
	
	if(page == 0)
	{
		//Préparation de la recherche des nouveaux commentaires
		filegetcommentaire = "commentaire.php?idtexte=" + idtexte + "&id=" + iduser;
	}
	else
	{
		//Préparationn de la recherche des nouveaux ccommentaires
		filegetcommentaire = "commentaire.php?idtexte="+idtexte+"&page="+page+ "&id=" + iduser;
	}
	
	//On vérifie si une image est jointe
	if(document.getElementById('image_' + idtexte).value != "")
	{
		//On effectue le nécessaire
		 var vFD = new FormData(document.getElementById("addcommentaire_" + idtexte)); 

		// create XMLHttpRequest object, adding few event listeners, and POSTing our data
		var oXHR = new XMLHttpRequest();        
		
		oXHR.onreadystatechange = function() {
			if (oXHR.readyState == 4 && (oXHR.status == 200 || oXHR.status == 0)) {
				affiche_notification_succes("Commentaire enregistr&eacute;.", "");
				requeteajaxcommentairesmobiles(filegetcommentaire, iddestination); //Affiche tous les commentaires
			}
		};
		
		oXHR.open('POST', destination);
		oXHR.send(vFD);

	}
	else
	{
		document.getElementById(idcommentaireform).value = ""; //Commentaire (forumlaire) vidé
		
		if(commentaire == "")
		{
			affiche_notification_erreur("L'ajout de commentaires vides est interdit !", "Erreur", 5);
		}
		else
		{
			//Nouvel affichage des commentaires
			//touscommentaires = touscommentaires + "<tr><td>Vous</td><td>" + commentaire + "</td></tr>";
			document.getElementById("addcommentaire_" + idtexte).innerHTML = "<tr><td>Veuillez patienter, chargement en cours...</td></tr>";;
			
			//Requête AJAX
			var xhr = new XMLHttpRequest();
			xhr.open("POST", destination, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send("commentaire="+commentaire+"&idtexte="+idtexte);
			
			xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
						affiche_notification_succes("Commentaire enregistr&eacute;.", "");
						requeteajaxcommentairesmobiles(filegetcommentaire, iddestination); //Affiche tous les commentaires
					}
			};
		}
	}
}

//Fonction de recherche de commentaires (nécessaire pour le post de commentaire
function requeteajaxcommentairesmobiles(file, balisescommentaires) {
				
var xhr = new XMLHttpRequest();

// Récupération du contenu du fichier
 xhr.open('GET', file);

 xhr.onreadystatechange = function() {

 if (xhr.readyState == 4 && xhr.status == 200) {

 document.getElementById(balisescommentaires).innerHTML = xhr.responseText;

 } else if (xhr.readyState == 4 && xhr.status != 200) { 
					
document.getElementById(balisescommentaires).innerHTML =  'Une erreur est survenue. Merci de r&eacute;essayer ult&eacute;rieurment. ';

 }

 }

xhr.send(null);

}

//Fonction de détection de la résolution d'écran
function get_screen_width()
{
	 //Minimum for desktop : 620
	 var viewportwidth;
	 var viewportheight;
	  
	 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
	  
	 if (typeof window.innerWidth != 'undefined')
	 {
		  viewportwidth = window.innerWidth,
		  viewportheight = window.innerHeight
	 }
		  
	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		 
	 else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0)
	 {
		   viewportwidth = document.documentElement.clientWidth,
		   viewportheight = document.documentElement.clientHeight
		 }
	  
		 // older versions of IE
	  
	 else
	 {
		   viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
		   viewportheight = document.getElementsByTagName('body')[0].clientHeight
	 }
	 
	//Renvoi du résultat
	return viewportwidth;
}

//Fonction d'envoi au Serveur la résolution (width) du client
//Nécessite:
//			get_screen_width
//			ajax_rapide
function send_serveur_width()
{
	var width_screen = get_screen_width();
	ajax_rapide("index.php?screen_width=" + width_screen);
}

//Fonction permettant la mise en évidence de la présence de nouveaux messages pour l'utilisateur
function verifie_messages_non_lus(type)
{
	//Détermination du fichier
	if(type == 1)
	{
		//Pour les nouveaux messages
		fichier = 'action.php?actionid=1';
	}
	else
	{
		//Pour les demandes d'amis
		fichier = 'action.php?actionid=7';
	}
	
	// Récupération du contenu du fichier
	var xhr = new XMLHttpRequest();
	xhr.open('GET', fichier);

	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			
			if(xhr.responseText == "1")
			{
				if(type == 1) {
					document.getElementById('new_message').innerHTML = '<a class="element brand" href="messagerie.php" title="Vous avez de nouveaux messages non lus"><span class="icon-mail"></span></a>'; //Pour les nouveaux messages
				}
				else {
					document.getElementById('new_friend').innerHTML = '<a class="element brand" href="amis.php" title="Nouvelles demandes d\'amis"><span class="icon-stats-up"></span></a>'; //Pour les demandes d'amis
				}
			}
			else
			{
				//Do nothing
			}

		}

	}
	
	xhr.send(null);
}
	
	
//Fonction permettant la mise en évidence de la présence de nouvelles notifications pour l'utilisateur
function verifie_notifications_non_vues(debut_URL)
{
	var xhr = new XMLHttpRequest();

	// Récupération du contenu du fichier
	xhr.open('GET', debut_URL + 'action.php?actionid=3');

	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
		
			if(xhr.responseText != "0")
			{
				//source_notification = document.getElementById('nb_notification_area').innerHTML;
				source_notification =  "<b><font class='nb_unread_notification'>" + xhr.responseText + "</font></b>";
				
				//Application des modifications si nécessaire
				if(document.getElementById('nb_notification_area').innerHTML != source_notification)
				{
					//Modification du nombre
					document.getElementById('nb_notification_area').innerHTML = source_notification;
					
					//Actualisation de l'iframe
					//document.getElementById('new_iframenotification').src = 'notification.php';
				}
				
				//Modification (si nécessaire) du titre de la page
				if (~document.title.indexOf('(' + xhr.responseText + ')')) 
				{
					//Ne rien faire
				}
				else
				{
					//On vérifie alors si un autre numéro de notifications a été affiché
					if(/(\d)/.test(document.title))
					{
						//Si un autre nombre de notifications a déjà été affiché, on le modifie
						document.title = document.title.replace(/(\d)/,  xhr.responseText);
					}
					else
					{
						//Modification du titre
						document.title = "(" + xhr.responseText + ") " + document.title;
					}
				}
			}
			else
			{
				document.getElementById('nb_notification_area').innerHTML = "";
				 
				//On s'assure que le nombre de notifications est à 0
				document.title = document.title.replace(/(\d)/,  "");
				document.title = document.title.replace("()",  "");
			}

		} else if (xhr.readyState == 4 && xhr.status != 200) { 
			//Do nothing
		}

	}
	
	xhr.send(null);
}

//Fonction permettant de vider des éléments
function vide_id(id)
{
	document.getElementById(id).innerHTML = "";
}

//Fonction d'édition des commentaires
function editcommentaire (idcommentaire, idtexte, iduser, page)
{
	var new_comment = "";
	new_comment = prompt('Saisissez le nouveau commentaire qui va remplacer l\'ancien :', " ");
	
	if(confirm('Confirmez-vous ce nouveau commentaire ? : ' + new_comment))
	{
		if(new_comment != "" && new_comment != " ")
		{
			//Détermination de la zone d'arrivée des commentaires
			iddestination = "tablecommentaire" + idtexte;
			
			//On vide la zone de commentaires
			document.getElementById(iddestination).innerHTML = "<tr><td>Veuillez patienter, chargement en cours...</td></tr>";
			
			//-------------------------------------------------------------------------------------------//
			// -------------------------------- Modification du commentaire -----------------------------//
			//-------------------------------------------------------------------------------------------//
			//Requête AJAX
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "action.php?actionid=8", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send("commentaire="+new_comment+"&idtexte="+idtexte+"&idcommentaire="+idcommentaire);
			
			xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
						
						//Pour débogage uniquement
						//alert(xhr.responseText);
					
						//Message de succès
						affiche_notification_succes("Modification du commentaire termin&eacute;e.", "");
						
						//-------------------------------------------------------------------------------------------//
						// -------------------------------- Téléchargement des nouveaux commentaires ----------------//
						//-------------------------------------------------------------------------------------------//
						if(page == 0)
						{
							//Préparationn de la recherche des nouveaux commentaires
							filegetcommentaire = "commentaire.php?idtexte=" + idtexte + "&id=" + iduser;
						}
						else
						{
							//Préparationn de la recherche des nouveaux ccommentaires
							filegetcommentaire = "commentaire.php?idtexte="+idtexte+"&page="+page+ "&id=" + iduser;
						}
						
						requeteajaxcommentairesmobiles(filegetcommentaire, iddestination);
						//-------------------------------------------------------------------------------------------//
					}
			};
			xhr.send(null);
			//-------------------------------------------------------------------------------------------//	
		}
		else
		{
			affiche_notification_erreur("Le commentaire est vide !", "Erreur", 3);
		}
	}
	else
	{
		affiche_notification_erreur("Modification du commentaire annul&eacute;e.", "Erreur", 3);
	}
}

//Fonction permettant d'ouvrir une fenêtre d'upload de vidéo
function ouvre_fenetre_upload_video()
{
	window.open("action.php?actionid=10","upload_video","width=730px,height=400")
}

//Fonction permettant de changer le nom d'une vidéo
function change_nom_video(id, adresse_rafraichissement)
{
	var new_video_name = "";
	new_video_name = prompt('Saisissez le nouveau nom pour la video qui va remplacer l\'ancien :', " ");
	
	if(confirm('Confirmez-vous ce nouveau nom ? (OK : oui, Annuler : non) : ' + new_video_name))
	{
		if(new_video_name != "" && new_video_name != " ")
		{
			
			//-------------------------------------------------------------------------------------------//
			// ---------------------------- Modification du nom de la vidéo -----------------------------//
			//-------------------------------------------------------------------------------------------//
			//Requête AJAX
			var xhr = new XMLHttpRequest();
			xhr.open("POST", "action.php?actionid=12", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send("nouveau_nom_video="+new_video_name+"&idvideo="+id);
			
			xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
						
						//Pour débogage uniquement
						//alert(xhr.responseText);
					
						//Message de succès
						affiche_notification_succes("Modification du nom de la vid&eacute;o termin&eacute;e.", "");
						
						//-------------------------------------------------------------------------------------------//
						// -------------------------------- Rafraîchissement de la page web -------------------------//
						//-------------------------------------------------------------------------------------------//
						window.location = adresse_rafraichissement;
						//-------------------------------------------------------------------------------------------//
					}
			};
			xhr.send(null);
			//-------------------------------------------------------------------------------------------//	
		}
		else
		{
			affiche_notification_erreur("Le nom saisi est vide !", "Erreur", 3);
		}
	}
	else
	{
		affiche_notification_erreur("Modification du nom de la vid&eacute;o annul&eacute;e.", "Erreur", 3);
	}
}

//Fonction permettant de demander la confirmation de la suppression d'une vidéo
function confirm_delete_video(URL_if_yes)
{
	if(confirm('Voulez-vous vraiment supprimer cette video ? (OK : oui, Annuler : non) : '))
	{
		//Redirection pour la suppression de la vidéo
		window.location = URL_if_yes;
	}
	else
	{
		affiche_notification("Suppression de la vid&eacute;o annul&eacute;e.");
	}
}

// Fonction permettant d'afficher ou de masquer des éléments
// Service Pierre 2015, tous droits de réutilisation ou de 
// Reproduction réservés.
function show_hide_id(id, visibilite)
{
	document.getElementById(id).style.visibility = visibilite;
}

//Fonction permettant de changer le niveau de visibilité d'un post
function change_niveau_visibilite_post(id_post, niveau)
{
	//Requete de modification
	ajax_rapide("action.php?actionid=14&nouveau_niveau_visibilite=" + niveau + "&idtexte=" + id_post);
	
	//Détermination de l'ID de l'image
	id_image = "change_niveau_visibilite_" + id_post + "_img";
	
	//Modification de l'image
	if(niveau == 1)
	{
		document.getElementById(id_image).src = "img/users_5.png";
	}
	else
	{
		if(niveau == 2)
		{
			document.getElementById(id_image).src = "img/users_3.png";
		}
		else
		{
			document.getElementById(id_image).src = "img/user.png";
		}
	}
	
	//Message de succès
	affiche_notification_succes("Modification du niveau de visibilit&eacute; du post termin&eacute;e.", "");
	
	//Masquage du menu de changement du niveau de visibilté
	show_hide_id("change_niveau_visibilite_" + id_post, 'hidden');
}

//Fonction de suppression de commentaire
function delete_comment(idcommentaire, idtexte, iduser, page)
{

	if(confirm('Voulez-vous vraiment supprimer ce commentaire ? : '))
	{
		//Détermination de la zone d'arrivée des commentaires
		iddestination = "tablecommentaire" + idtexte;
		
		//On vide la zone de commentaires
		document.getElementById(iddestination).innerHTML = "<tr><td>Veuillez patienter, chargement en cours...</td></tr>";
		
		//-------------------------------------------------------------------------------------------//
		// -------------------------------- Suppression du commentaire -----------------------------//
		//-------------------------------------------------------------------------------------------//
	
		//Requête AJAX
		ajax_rapide("action.php?idtexte=" + idtexte + "&idcommentaire=" + idcommentaire + "&actionid=15");
		
		
		//Pour débogage uniquement
		//alert(xhr.responseText);
		
		//Message de succès
		affiche_notification_succes("Suppression du commentaire termin&eacute;e.", "");
						
		//-------------------------------------------------------------------------------------------//
		// -------------------------------- Téléchargement des nouveaux commentaires ----------------//
		//-------------------------------------------------------------------------------------------//
		if(page == 0)
		{
			//Préparationn de la recherche des nouveaux commentaires
			filegetcommentaire = "commentaire.php?idtexte=" + idtexte + "&id=" + iduser;
		}
		else
		{
			//Préparationn de la recherche des nouveaux ccommentaires
			filegetcommentaire = "commentaire.php?idtexte="+idtexte+"&page="+page+ "&id=" + iduser;
		}
		
		//Exécution de la requête
		requeteajaxcommentairesmobiles(filegetcommentaire, iddestination);
		//-------------------------------------------------------------------------------------------//
	}
	else
	{
		affiche_notification_erreur("Suppression du commentaire annul&eacute;e.", "Erreur", 3);
	}
}

//Fonction permettant d'aimer un commentaire
function like_comment(idcommentaire, idtexte, aime_deja)
{
	//On détermine si la personne doit aimer ou pas
	var aime = 0;
	
	if(/aime_vide/i.test(document.getElementById("like_comment_" + idcommentaire).src))
		aime = 1;
	
	//Envoi d'une requête pour aimer
	ajax_rapide("action.php?actionid=16&idcommentaire=" + idcommentaire + "&idtexte=" + idtexte + "&aime=" + aime);
	
	//Modification de l'image
	//Définition de la variable
	var complement_nom_image = "";
	
	//On modifie le complément du nom de l'image si il ne s'agit de ne plus aimer
	if(aime == 0)
		complement_nom_image = "_vide";
	
	//Modification de l'image
	document.getElementById("like_comment_" + idcommentaire).src = "img/aime" + complement_nom_image + ".png";
	
	//Message de succès
	if(aime == 1)
		affiche_notification_succes("Vous aimez d&eacute;sormais ce commentaire.", "");
	else
		affiche_notification_succes("Vous n'aimez d&eacute;sormais plus ce commentaire.", "");
}

//Fonction permettant d'aimer un texte ou une page
function like_text_page(id, type, aime_deja)
{
	//On détermine si il faut aimer ou pas
	if(aime_deja == 1)
		like = 0;
	else
		like = 1;
		
	//On détermine l'ID du conteneur
	if(type == "page")
		id_conteneur = "aime_page";
	else
		id_conteneur = "aime_texte_" + id;
	
	//On envoie une requête AJAX pour récupérer le nouveau code source du conteneur
	var xhr = new XMLHttpRequest();

	// Récupération du contenu du fichier
	xhr.open('GET', "action.php?actionid=21&type=" + type + "&id=" + id + "&aime=" + like);

	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {

			document.getElementById(id_conteneur).innerHTML =  xhr.responseText;

		} else if (xhr.readyState == 4 && xhr.status != 200) { 
			
			//Message d'erreur
			console.log("Il semblerait qu'il y a un problème de connexion Internet. Vérifiez que tous les cables réseau sont branchés ou que le Wi-Fi est activé. Conséquence: Impossible d'aimer ce text ou cette page.");
		}

	}

	xhr.send(null);

	
	//On affiche un message de succès, suivant le type et si l'on aime ou l'on aime plus.
	if(type == "page")
	{
		if(like == 1)
			affiche_notification_succes("Vous aimez d&eacute;sormais cette page.", "");
		else
			affiche_notification_succes("Vous n'aimez d&eacute;sormais plus cette page.", "");
	}
	else
	{
		if(like == 1)
			affiche_notification_succes("Vous aimez d&eacute;sormais ce post.", "");
		else
			affiche_notification_succes("Vous n'aimez d&eacute;sormais plus ce post.", "");
	}
}

//Fonction permettant de faire une recherche AJAX lors de la saisie d'un nom d'utilisateur dans la barre de recherche
function search_user_ajax()
{
	//Récupération du contenu du champs de texte
	var contenu = document.getElementById("search_user_input").value;
	
	//On vide le tableau des précédents affichages
	document.getElementById("result_search").innerHTML = "";
	document.getElementById("list_results").innerHTML = "";
	
	//On vérifie que le champ n'est pas vide
	if(contenu != "")
	{
		//Requête de recherche
		var xhr = new XMLHttpRequest();

		// Récupération du contenu du fichier
		xhr.open('GET', "action.php?actionid=22&search=" + contenu);

		xhr.onreadystatechange = function() {

			if (xhr.readyState == 4 && xhr.status == 200) {
				//Décodage du contenu
				var reponse =  xhr.responseText;
				reponse = reponse.split('<|>'); 
				var longueur_reponse = reponse.length;
				
				//On masque la zone de résultat si il n'y en a pas
				if(xhr.responseText == "")
					document.getElementById("result_search").style.visibility = "hidden";
				
				//Préparation du parcours du tablau
				results = document.getElementById("result_search");
				liste_results = document.getElementById("list_results");
				
				//Parcours du tableau
				for (var i = 0, div ; i < longueur_reponse ; i++) {
					//Décodage du contenu
					analyse = reponse[i].split('*!*');
					
					//On vérifie que le résultat est correct
					if(analyse.length == 3)
					{
						//Afficahge de la zone de résultat
						document.getElementById("result_search").style.visibility = "visible";
						
						//On vérifie que le résultat n'est pas déjà affiché
						contenu_liste = liste_results.innerHTML;
						if((contenu_liste.lastIndexOf("|" + analyse[0] + "|")) == -1)
						{
							//On peut afficher le résultat
							div = results.appendChild(document.createElement('div'));
							
							//On vérifie si on est sur la page d'un utilisateur ou pas
							var vide_form = "document.getElementById(\"search_user_input\").value = \"\"; document.getElementById(\"result_search\").style.visibility = \"hidden\";";
							if(!check_if_we_are_on_user_page())
							{
								//Un rechargement est nécessaire en cas de clic
								var debut_source = "<a href='index.php?id=" + analyse[0] + "' ";
							}
							else
							{
								//Un rechargement rapide peut être effectué
								var debut_source = "<a style='cursor: pointer;' onClick='"+ vide_form +" change_page_personne(" + analyse[0] + ")' "
							}
							
							div.innerHTML = debut_source + ">" + analyse[2] + analyse[1] + "</a>" + '  <a onclick="affiche_chat_prive(' + analyse[0] + ');"><img src="img/prive.png" border="0" height="16" width="16"></a>';
							
							//On enregistre l'affichage du résultat
							liste_results.innerHTML = liste_results.innerHTML + "|" + analyse[0] + "|";
						}
					}
				}
			} else if (xhr.readyState == 4 && xhr.status != 200) { 
				
				//Message d'erreur
				console.log("Il semblerait qu'il y a un problème de connexion Internet. Vérifiez que tous les cables réseau sont branchés ou que le Wi-Fi est activé. Conséquence: Impossible d'aimer ce text ou cette page.");
			}

		}

		xhr.send(null);
	}
	else
	{
		//Sinon on masque la zone de résultat
		document.getElementById("result_search").style.visibility = "hidden";
	}
}

//Fonction permettant de supprimer toute les notifications
function supprime_toute_les_notifications()
{
	if(confirm("Voulez-vous vraiment supprimer toute les notifications ?"))
	{
		//On supprime les notifications
		ajax_rapide('notification.php?all_vu');
		
		//On affiche un message de succès
		affiche_notification_succes('Les notifications ont &eacute;t&eacute; supprim&eacute;es.', '', 3);
		
		//On actualise le panneau des notifications
		affiche_notifications();
	}
}

//Fonction permettant de supprimer les anciennes notififications
function delete_old_notifications()
{
	$.Dialog({
        flat: false,
        shadow: true,
		icon: "<span class='icon-history'></span>",
		overlay: true,
		draggable: true,
        title: 'Supprimer les anciennes notifications',
        content: '<iframe src="action.php?actionid=24" id="delete_old_notifications"></iframe>',
        height: 200,
		width: 350
    });
}

//Fonction permettant de voir, d'ajouter et de supprimer un abonnement
function get_abonnement(id, change)
{
	//On vérifie si il faut changer l'abonnement
	if(change != 0)
		var change = "&change";
	else
		var change = "";
	
	//Définition de l'ID de destination
	var id_destination = 'abonnement_' + id;
	
	//On fait une requête ajax de recherche
	xhr = new XMLHttpRequest();
	xhr.open("GET", "action.php?actionid=25&id=" + id + change);
	
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {

			document.getElementById(id_destination).innerHTML =  xhr.responseText;

		} else if (xhr.readyState == 4 && xhr.status != 200) { 
			
			//Message d'erreur
			document.getElementById(id_destination).innerHTML = "Erreur";
			
			//Message d'erreur (console)
			console.log("Il semblerait qu'il y a un problème de connexion Internet. Vérifiez que tous les cables réseau sont branchés ou que le Wi-Fi est activé.");
		}

	}
	
	xhr.send(null);
}

//Fonction permettant de transférer le contenu du canvas vers un champ de texte (de préférence caché) et d'envoyer le contenu
function send_snapshot_webcam_for_avatar()
{
	//Récupération de la source du canvas
	var source = document.getElementById("target_image_webcam_nouvel_avatar").toDataURL();
	
	//Renvoi de la source du canvas vers le champs de texte
	document.getElementById("data").value = source;
	
	//Envoi du formulaire
	document.getElementById("post_new_image_from_webcam").submit();
}

//Fonction de récupération et d'affichage de textes
function get_show_textes(id, id_destination, page, post)
{
	//On vérifie si il faut recharge tous les textes ou non
	var complement = "";
	
	//On vérifie si il faut chercher un post précis ou non
	if(post != 0)
	{
		complement += "&post=" + post;
	}
	
	//On fait une requête ajax de recherche
	xhr_show_textes = new XMLHttpRequest();
	xhr_show_textes.open("GET", "action.php?actionid=29&id=" + id + "&page=" + page + complement);
	
	xhr_show_textes.onreadystatechange = function() {

		if (xhr_show_textes.readyState == 4 && xhr_show_textes.status == 200) {
			
			//Décodage de la réponse
			var response = xhr_show_textes.responseText;
			/<tr id="view_more">(.+)tr>/.exec(response);
			var valeurs = (RegExp.$1);
			valeurs = valeurs.replace("<", "");
			valeurs = valeurs.split('|');
			
			//On vérifie que les données sont correctes
			complement = "";
			if(valeurs.length == 2)
			{
				if(post == 0)
					complement = "<tr><td colspan='2'><input type='button' value='Afficher plus de textes' onClick=" + '"' + "get_show_textes(" + valeurs[0] + ", 'corpstexte', " + valeurs[1] + ", 0); this.parentNode.parentNode.style.display = 'none'" + '"' + " /></td></tr>";
				
				//On supprime les valeurs du fichier réponse
				response = response.replace(valeurs[0] + "|" + valeurs[1], "");
			}
			
			var new_textes = document.createElement('tbody');
			new_textes.innerHTML = response + complement;
			document.getElementById(id_destination).appendChild(new_textes);
			
			//Chargement du script pour les vidéos
			//var scriptElement = document.createElement('script');
			//scriptElement.src = 'video_js/video.js';
			//document.body.appendChild(scriptElement);
			
			//Affichage des comptes à rebours
			var timers = document.getElementsByTagName('timers'),    
			timersLen = timers.length;
			
			for (var i = 0 ; i < timersLen ; i++) {
				infos = timers[i].innerHTML.split('|');
				/*
				$("#" + infos[0]).countdown({
					blink: true, // blink divider
					stoptimer: infos[1], // the string value of datetime, example '2013-07-05 12:00'
				});*/
				
				//var ts = countdown(infos[1], null, -2018, 11, 0);
				//	document.getElementById(infos[0]).innerHTML = infos[1]+" - " + ts;
				
				launch_countdown(infos[1], infos[0]);
			}
			
			//Affichage des comptes à rebours
			var videos = document.getElementsByTagName('video'),    
			VideosLen = videos.length;
			
			for (var i = 0 ; i < VideosLen ; i++) {
				id = videos[i].id;
				
				videojs(id, {}, function(){
				  // Player (this) is initialized and ready.
				});
			}

		} else if (xhr_show_textes.readyState == 4 && xhr_show_textes.status != 200) { 
			
			//Message d'erreur
			document.getElementById(id_destination).innerHTML += "Erreur, merci de r&eacute;essayer ult&eacute;rieurement.";
			
			//Message d'erreur (console)
			console.log("Il semblerait qu'il y a un problème de connexion Internet. Vérifiez que tous les cables réseau sont branchés ou que le Wi-Fi est activé.");
		}

	}
	
	xhr_show_textes.send(null);
}

//Fonction de récupération et d'affichage de textes
function get_show_header(id, demander_ami)
{
	//Définition des variables
	id_destination_header = 'header_contenu';

	//On détermine si il faut ajouter un complément ou pas
	if(demander_ami == 0)
		complement = "";
	else
		complement = "&demanderamis";
	
	//On fait une requête ajax de recherche
	xhr_show_header = new XMLHttpRequest();
	xhr_show_header.open("GET", "action.php?actionid=31&id=" + id + complement);
	
	xhr_show_header.onreadystatechange = function() {

		if (xhr_show_header.readyState == 4 && xhr_show_header.status == 200) {

			document.getElementById(id_destination_header).innerHTML = xhr_show_header.responseText;
			
			//Chargement de l'abonnement de la personne
			get_abonnement(id, 0);
			
			//Adaptation du titre de la page
			document.title = document.getElementById('nom_personne').innerHTML + " - Comunic";
			

		} else if (xhr_show_header.readyState == 4 && xhr_show_header.status != 200) { 
			
			//Message d'erreur
			document.getElementById(id_destination_header).innerHTML = "Erreur, merci de r&eacute;essayer ult&eacute;rieurement en appuyant sur F5 ou en rechargeant la page.";
			
			//Message d'erreur (console)
			console.log("Il semblerait qu'il y a un problème de connexion Internet. Vérifiez que tous les cables réseau sont branchés ou que le Wi-Fi est activé.");
		}

	}
	
	xhr_show_header.send(null);
}

//Fonction de récupération et d'affichage du formulaire d'envoi de texte
function get_show_form_send_text(id)
{
	//Définition des variables
	id_destination_add_form_texte = 'add_form_texte';
	
	//On fait une requête ajax de recherche
	xhr_show_add_form = new XMLHttpRequest();
	xhr_show_add_form.open("GET", "action.php?actionid=32&id=" + id);
	
	xhr_show_add_form.onreadystatechange = function() {

		if (xhr_show_add_form.readyState == 4 && xhr_show_add_form.status == 200) {

			//Affichage du formulaire
			document.getElementById(id_destination_add_form_texte).innerHTML =  xhr_show_add_form.responseText;
			
			//Chargement de l'éditeur TinyMce pour l'ajout de textes
			var scriptElement = document.createElement('script');
			scriptElement.src = 'js/ajoutsimple.js';
			document.body.appendChild(scriptElement);

		} else if (xhr_show_add_form.readyState == 4 && xhr_show_add_form.status != 200) { 
			
			//Message d'erreur
			document.getElementById(id_destination_add_form_texte).innerHTML = "Erreur, merci de r&eacute;essayer ult&eacute;rieurement en appuyant sur F5 ou en rechargeant la page.";
			
			//Message d'erreur (console)
			console.log("Il semblerait qu'il y a un problème de connexion Internet. Vérifiez que tous les cables réseau sont branchés ou que le Wi-Fi est activé.");
		}

	}
	
	xhr_show_add_form.send(null);
}

//Fonction de changement de personne
function change_page_personne(id, post)
{
	//Définition d'une nouvelle url
	
	//On vérifie si il faut afficher un texte précis
	var complement_url = "";
	var idpost = 0;
	if(post > 0)
	{
		complement_url = "&post=" + post;
		idpost = post;
	}
	
	//On vérifie si on est sur la page de l'utilisateur
	if(/\?/.test(document.URL))
	{
		//Récupération des paramètres de l'URL
		/\?(.+)/.exec(document.URL);
		var parametres_url = RegExp.$1;
		
		var nouvelle_url = document.URL;
		nouvelle_url = nouvelle_url.replace(parametres_url, "id=" + id) + complement_url;
	}
	else
	{
		//Sinon on rajoute directement les bons paramètres
		var nouvelle_url = document.URL + "?id=" + id + complement_url;
	}
	
	//Changement de l'URL
	window.history.pushState(document.title,document.title, nouvelle_url);
	
	//Changement de l'header
	get_show_header(id, 0);
	
	//Définition du champs de destination des textes
	var id_destination_champs_texte = "corpstexte";
	
	//On vide le champs de textes
	document.getElementById(id_destination_champs_texte).innerHTML = "";
	document.getElementById("add_form_texte").innerHTML = "";
	//document.getElementById('backup_content').value = "";
	
	if(idpost == 0)
	{
		//Changement du formulaire d'envoi de texte
		get_show_form_send_text(id);
	}
	
	//On recharge le champs de textes
	get_show_textes(id, id_destination_champs_texte, 0, idpost);
}

//Fonction permettant de vérifier si on est sur la page d'un utilisateur ou pas
function check_if_we_are_on_user_page()
{
	//On vérifie si l'adresse contient un ".php"
	if(/.php/.test(document.URL))
	{
		//On vérifie alors si on est sur la page index.php
		if(/index.php/.test(document.URL))
		{
			//On est sur la page d'un utilisateur
			return true;
		}
		else
		{
			//On n'est pas sur la page d'un utilisateur
			return false;
		}
	}
	else
	{
		//On est sur la page d'acceuil ou sur la page d'un utilisateur
		return true;
	}
}

//Fonction permettant de changer la page de l'utilisateur avec auto adaptation ( en fonction de si on est déjà sur la page d'un utilisateur ou pas )
function open_page_ameliore(id)
{
	//On vérifie si on est sur la page d'un utilisateur
	if(check_if_we_are_on_user_page())
		change_page_personne(id); //Chargement rapide de la page de l'utilisateur
	else
	location.href = "index.php?id=" + id; //Rechargement complet de la page
}

//Fonction permettant d'informer que l'on nécessite un rechargement de tous les posts
function require_reload_all_posts()
{
	//document.getElementById("backup_content").value = "require reload";
}

//Fonction de changement de la page d'une personne pour un post précis
function change_page_personne_with_post(id, idpost)
{
	//On vérifie si on est sur la page d'un utilisateur
	if(check_if_we_are_on_user_page())
		change_page_personne(id, idpost); //Chargement rapide de la page de l'utilisateur
	else
	location.href = "index.php?id=" + id + "&post=" + idpost; //Rechargement complet de la page
}