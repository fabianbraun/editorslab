/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
if(typeof jwplayer=="undefined"){var jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="5.7.1896";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(b){b.utils=function(){};b.utils.typeOf=function(d){var c=typeof d;if(c==="object"){if(d){if(d instanceof Array){c="array"}}else{c="null"}}return c};b.utils.extend=function(){var c=b.utils.extend["arguments"];if(c.length>1){for(var e=1;e<c.length;e++){for(var d in c[e]){c[0][d]=c[e][d]}}return c[0]}return null};b.utils.clone=function(f){var c;var d=b.utils.clone["arguments"];if(d.length==1){switch(b.utils.typeOf(d[0])){case"object":c={};for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;case"array":c=[];for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;default:return d[0];break}}return c};b.utils.extension=function(c){if(!c){return""}c=c.substring(c.lastIndexOf("/")+1,c.length);c=c.split("?")[0];if(c.lastIndexOf(".")>-1){return c.substr(c.lastIndexOf(".")+1,c.length).toLowerCase()}return};b.utils.html=function(c,d){c.innerHTML=d};b.utils.wrap=function(c,d){if(c.parentNode){c.parentNode.replaceChild(d,c)}d.appendChild(c)};b.utils.ajax=function(g,f,c){var e;if(window.XMLHttpRequest){e=new XMLHttpRequest()}else{e=new ActiveXObject("Microsoft.XMLHTTP")}e.onreadystatechange=function(){if(e.readyState===4){if(e.status===200){if(f){f(e)}}else{if(c){c(g)}}}};try{e.open("GET",g,true);e.send(null)}catch(d){if(c){c(g)}}return e};b.utils.load=function(d,e,c){d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){if(e){e()}}else{if(c){c()}}}}};b.utils.find=function(d,c){return d.getElementsByTagName(c)};b.utils.append=function(c,d){c.appendChild(d)};b.utils.isIE=function(){return((!+"\v1")||(typeof window.ActiveXObject!="undefined"))};b.utils.isLegacyAndroid=function(){var c=navigator.userAgent.toLowerCase();return(c.match(/android 2.[012]/i)!==null)};b.utils.isIOS=function(d){if(typeof d=="undefined"){d=/iP(hone|ad|od)/i}var c=navigator.userAgent.toLowerCase();return(c.match(d)!==null)};b.utils.isIPad=function(){return b.utils.isIOS(/iPad/i)};b.utils.isIPod=function(){return b.utils.isIOS(/iP(hone|od)/i)};b.utils.getFirstPlaylistItemFromConfig=function(c){var d={};var e;if(c.playlist&&c.playlist.length){e=c.playlist[0]}else{e=c}d.file=e.file;d.levels=e.levels;d.streamer=e.streamer;d.playlistfile=e.playlistfile;d.provider=e.provider;if(!d.provider){if(d.file&&(d.file.toLowerCase().indexOf("youtube.com")>-1||d.file.toLowerCase().indexOf("youtu.be")>-1)){d.provider="youtube"}if(d.streamer&&d.streamer.toLowerCase().indexOf("rtmp://")==0){d.provider="rtmp"}if(e.type){d.provider=e.type.toLowerCase()}}if(d.provider=="audio"){d.provider="sound"}return d};b.utils.getOuterHTML=function(c){if(c.outerHTML){return c.outerHTML}else{try{return new XMLSerializer().serializeToString(c)}catch(d){return""}}};b.utils.setOuterHTML=function(f,e){if(f.outerHTML){f.outerHTML=e}else{var g=document.createElement("div");g.innerHTML=e;var c=document.createRange();c.selectNodeContents(g);var d=c.extractContents();f.parentNode.insertBefore(d,f);f.parentNode.removeChild(f)}};b.utils.hasFlash=function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined"){return true}if(typeof window.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(c){}}return false};b.utils.getPluginName=function(c){if(c.lastIndexOf("/")>=0){c=c.substring(c.lastIndexOf("/")+1,c.length)}if(c.lastIndexOf("-")>=0){c=c.substring(0,c.lastIndexOf("-"))}if(c.lastIndexOf(".swf")>=0){c=c.substring(0,c.lastIndexOf(".swf"))}if(c.lastIndexOf(".js")>=0){c=c.substring(0,c.lastIndexOf(".js"))}return c};b.utils.getPluginVersion=function(c){if(c.lastIndexOf("-")>=0){if(c.lastIndexOf(".js")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".js"))}else{if(c.lastIndexOf(".swf")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".swf"))}else{return c.substring(c.lastIndexOf("-")+1)}}}return""};b.utils.getAbsolutePath=function(j,h){if(!b.utils.exists(h)){h=document.location.href}if(!b.utils.exists(j)){return undefined}if(a(j)){return j}var k=h.substring(0,h.indexOf("://")+3);var g=h.substring(k.length,h.indexOf("/",k.length+1));var d;if(j.indexOf("/")===0){d=j.split("/")}else{var e=h.split("?")[0];e=e.substring(k.length+g.length+1,e.lastIndexOf("/"));d=e.split("/").concat(j.split("/"))}var c=[];for(var f=0;f<d.length;f++){if(!d[f]||!b.utils.exists(d[f])||d[f]=="."){continue}else{if(d[f]==".."){c.pop()}else{c.push(d[f])}}}return k+g+"/"+c.join("/")};function a(d){if(!b.utils.exists(d)){return}var e=d.indexOf("://");var c=d.indexOf("?");return(e>0&&(c<0||(c>e)))}b.utils.pluginPathType={ABSOLUTE:"ABSOLUTE",RELATIVE:"RELATIVE",CDN:"CDN"};b.utils.getPluginPathType=function(d){if(typeof d!="string"){return}d=d.split("?")[0];var e=d.indexOf("://");if(e>0){return b.utils.pluginPathType.ABSOLUTE}var c=d.indexOf("/");var f=b.utils.extension(d);if(e<0&&c<0&&(!f||!isNaN(f))){return b.utils.pluginPathType.CDN}return b.utils.pluginPathType.RELATIVE};b.utils.mapEmpty=function(c){for(var d in c){return false}return true};b.utils.mapLength=function(d){var c=0;for(var e in d){c++}return c};b.utils.log=function(d,c){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(c){console.log(d,c)}else{console.log(d)}}};b.utils.css=function(d,g,c){if(b.utils.exists(d)){for(var e in g){try{if(typeof g[e]==="undefined"){continue}else{if(typeof g[e]=="number"&&!(e=="zIndex"||e=="opacity")){if(isNaN(g[e])){continue}if(e.match(/color/i)){g[e]="#"+b.utils.strings.pad(g[e].toString(16),6)}else{g[e]=Math.ceil(g[e])+"px"}}}d.style[e]=g[e]}catch(f){}}}};b.utils.isYouTube=function(c){return(c.indexOf("youtube.com")>-1||c.indexOf("youtu.be")>-1)};b.utils.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d};b.utils.stretch=function(h,n,m,f,l,g){if(typeof m=="undefined"||typeof f=="undefined"||typeof l=="undefined"||typeof g=="undefined"){return}var d=m/l;var e=f/g;var k=0;var j=0;n.style.overflow="hidden";b.utils.transform(n,"");var c={};switch(h.toUpperCase()){case b.utils.stretching.NONE:c.width=l;c.height=g;break;case b.utils.stretching.UNIFORM:if(d>e){c.width=l*e;c.height=g*e}else{c.width=l*d;c.height=g*d}break;case b.utils.stretching.FILL:if(d>e){c.width=l*d;c.height=g*d}else{c.width=l*e;c.height=g*e}break;case b.utils.stretching.EXACTFIT:b.utils.transform(n,["scale(",d,",",e,")"," translate(0px,0px)"].join(""));c.width=l;c.height=g;break;default:break}c.top=(f-c.height)/2;c.left=(m-c.width)/2;b.utils.css(n,c)};b.utils.stretching={NONE:"NONE",FILL:"FILL",UNIFORM:"UNIFORM",EXACTFIT:"EXACTFIT"};b.utils.deepReplaceKeyName=function(h,e,c){switch(b.utils.typeOf(h)){case"array":for(var g=0;g<h.length;g++){h[g]=b.utils.deepReplaceKeyName(h[g],e,c)}break;case"object":for(var f in h){var d=f.replace(new RegExp(e,"g"),c);h[d]=b.utils.deepReplaceKeyName(h[f],e,c);if(f!=d){delete h[f]}}break}return h};b.utils.isInArray=function(e,d){if(!(e)||!(e instanceof Array)){return false}for(var c=0;c<e.length;c++){if(d===e[c]){return true}}return false};b.utils.exists=function(c){switch(typeof(c)){case"string":return(c.length>0);break;case"object":return(c!==null);case"undefined":return false}return true};b.utils.empty=function(c){if(typeof c.hasChildNodes=="function"){while(c.hasChildNodes()){c.removeChild(c.firstChild)}}};b.utils.parseDimension=function(c){if(typeof c=="string"){if(c===""){return 0}else{if(c.lastIndexOf("%")>-1){return c}else{return parseInt(c.replace("px",""),10)}}}return c};b.utils.getDimensions=function(c){if(c&&c.style){return{x:b.utils.parseDimension(c.style.left),y:b.utils.parseDimension(c.style.top),width:b.utils.parseDimension(c.style.width),height:b.utils.parseDimension(c.style.height)}}else{return{}}};b.utils.timeFormat=function(c){str="00:00";if(c>0){str=Math.floor(c/60)<10?"0"+Math.floor(c/60)+":":Math.floor(c/60)+":";str+=Math.floor(c%60)<10?"0"+Math.floor(c%60):Math.floor(c%60)}return str}})(jwplayer);(function(a){a.events=function(){};a.events.COMPLETE="COMPLETE";a.events.ERROR="ERROR"})(jwplayer);(function(jwplayer){jwplayer.events.eventdispatcher=function(debug){var _debug=debug;var _listeners;var _globallisteners;this.resetEventListeners=function(){_listeners={};_globallisteners=[]};this.resetEventListeners();this.addEventListener=function(type,listener,count){try{if(!jwplayer.utils.exists(_listeners[type])){_listeners[type]=[]}if(typeof(listener)=="string"){eval("listener = "+listener)}_listeners[type].push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeEventListener=function(type,listener){if(!_listeners[type]){return}try{for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){if(_listeners[type][listenerIndex].listener.toString()==listener.toString()){_listeners[type].splice(listenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.addGlobalListener=function(listener,count){try{if(typeof(listener)=="string"){eval("listener = "+listener)}_globallisteners.push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeGlobalListener=function(listener){if(!_globallisteners[type]){return}try{for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){if(_globallisteners[globalListenerIndex].listener.toString()==listener.toString()){_globallisteners.splice(globalListenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.sendEvent=function(type,data){if(!jwplayer.utils.exists(data)){data={}}if(_debug){jwplayer.utils.log(type,data)}if(typeof _listeners[type]!="undefined"){for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){try{_listeners[type][listenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_listeners[type][listenerIndex].listener)}if(_listeners[type][listenerIndex]){if(_listeners[type][listenerIndex].count===1){delete _listeners[type][listenerIndex]}else{if(_listeners[type][listenerIndex].count>0){_listeners[type][listenerIndex].count=_listeners[type][listenerIndex].count-1}}}}}for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){try{_globallisteners[globalListenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_globallisteners[globalListenerIndex].listener)}if(_globallisteners[globalListenerIndex]){if(_globallisteners[globalListenerIndex].count===1){delete _globallisteners[globalListenerIndex]}else{if(_globallisteners[globalListenerIndex].count>0){_globallisteners[globalListenerIndex].count=_globallisteners[globalListenerIndex].count-1}}}}}}})(jwplayer);(function(a){var b={};a.utils.animations=function(){};a.utils.animations.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d;c.style.msTransform=d};a.utils.animations.transformOrigin=function(c,d){c.style.webkitTransformOrigin=d;c.style.MozTransformOrigin=d;c.style.OTransformOrigin=d;c.style.msTransformOrigin=d};a.utils.animations.rotate=function(c,d){a.utils.animations.transform(c,["rotate(",d,"deg)"].join(""))};a.utils.cancelAnimation=function(c){delete b[c.id]};a.utils.fadeTo=function(m,f,e,j,h,d){if(b[m.id]!=d&&a.utils.exists(d)){return}if(m.style.opacity==f){return}var c=new Date().getTime();if(d>c){setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},d-c)}if(m.style.display=="none"){m.style.display="block"}if(!a.utils.exists(j)){j=m.style.opacity===""?1:m.style.opacity}if(m.style.opacity==f&&m.style.opacity!==""&&a.utils.exists(d)){if(f===0){m.style.display="none"}return}if(!a.utils.exists(d)){d=c;b[m.id]=d}if(!a.utils.exists(h)){h=0}var k=(e>0)?((c-d)/(e*1000)):0;k=k>1?1:k;var l=f-j;var g=j+(k*l);if(g>1){g=1}else{if(g<0){g=0}}m.style.opacity=g;if(h>0){b[m.id]=d+h*1000;a.utils.fadeTo(m,f,e,j,0,b[m.id]);return}setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},10)}})(jwplayer);(function(a){a.utils.arrays=function(){};a.utils.arrays.indexOf=function(c,d){for(var b=0;b<c.length;b++){if(c[b]==d){return b}}return -1};a.utils.arrays.remove=function(c,d){var b=a.utils.arrays.indexOf(c,d);if(b>-1){c.splice(b,1)}}})(jwplayer);(function(a){a.utils.extensionmap={"3gp":{html5:"video/3gpp",flash:"video"},"3gpp":{html5:"video/3gpp"},"3g2":{html5:"video/3gpp2",flash:"video"},"3gpp2":{html5:"video/3gpp2"},flv:{flash:"video"},f4a:{html5:"audio/mp4"},f4b:{html5:"audio/mp4",flash:"video"},f4v:{html5:"video/mp4",flash:"video"},mov:{html5:"video/quicktime",flash:"video"},m4a:{html5:"audio/mp4",flash:"video"},m4b:{html5:"audio/mp4"},m4p:{html5:"audio/mp4"},m4v:{html5:"video/mp4",flash:"video"},mp4:{html5:"video/mp4",flash:"video"},rbs:{flash:"sound"},aac:{html5:"audio/aac",flash:"video"},mp3:{html5:"audio/mp3",flash:"sound"},ogg:{html5:"audio/ogg"},oga:{html5:"audio/ogg"},ogv:{html5:"video/ogg"},webm:{html5:"video/webm"},m3u8:{html5:"audio/x-mpegurl"},gif:{flash:"image"},jpeg:{flash:"image"},jpg:{flash:"image"},swf:{flash:"image"},png:{flash:"image"},wav:{html5:"audio/x-wav"}}})(jwplayer);(function(e){e.utils.mediaparser=function(){};var g={element:{width:"width",height:"height",id:"id","class":"className",name:"name"},media:{src:"file",preload:"preload",autoplay:"autostart",loop:"repeat",controls:"controls"},source:{src:"file",type:"type",media:"media","data-jw-width":"width","data-jw-bitrate":"bitrate"},video:{poster:"image"}};var f={};e.utils.mediaparser.parseMedia=function(j){return d(j)};function c(k,j){if(!e.utils.exists(j)){j=g[k]}else{e.utils.extend(j,g[k])}return j}function d(n,j){if(f[n.tagName.toLowerCase()]&&!e.utils.exists(j)){return f[n.tagName.toLowerCase()](n)}else{j=c("element",j);var o={};for(var k in j){if(k!="length"){var m=n.getAttribute(k);if(e.utils.exists(m)){o[j[k]]=m}}}var l=n.style["#background-color"];if(l&&!(l=="transparent"||l=="rgba(0, 0, 0, 0)")){o.screencolor=l}return o}}function h(n,k){k=c("media",k);var l=[];var j=e.utils.selectors("source",n);for(var m in j){if(!isNaN(m)){l.push(a(j[m]))}}var o=d(n,k);if(e.utils.exists(o.file)){l[0]={file:o.file}}o.levels=l;return o}function a(l,k){k=c("source",k);var j=d(l,k);j.width=j.width?j.width:0;j.bitrate=j.bitrate?j.bitrate:0;return j}function b(l,k){k=c("video",k);var j=h(l,k);return j}f.media=h;f.audio=h;f.source=a;f.video=b})(jwplayer);(function(a){a.utils.loaderstatus={NEW:"NEW",LOADING:"LOADING",ERROR:"ERROR",COMPLETE:"COMPLETE"};a.utils.scriptloader=function(c){var d=a.utils.loaderstatus.NEW;var b=new a.events.eventdispatcher();a.utils.extend(this,b);this.load=function(){if(d==a.utils.loaderstatus.NEW){d=a.utils.loaderstatus.LOADING;var e=document.createElement("script");e.onload=function(f){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)};e.onerror=function(f){d=a.utils.loaderstatus.ERROR;b.sendEvent(a.events.ERROR)};e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)}};document.getElementsByTagName("head")[0].appendChild(e);e.src=c}};this.getStatus=function(){return d}}})(jwplayer);(function(a){a.utils.selectors=function(b,e){if(!a.utils.exists(e)){e=document}b=a.utils.strings.trim(b);var c=b.charAt(0);if(c=="#"){return e.getElementById(b.substr(1))}else{if(c=="."){if(e.getElementsByClassName){return e.getElementsByClassName(b.substr(1))}else{return a.utils.selectors.getElementsByTagAndClass("*",b.substr(1))}}else{if(b.indexOf(".")>0){var d=b.split(".");return a.utils.selectors.getElementsByTagAndClass(d[0],d[1])}else{return e.getElementsByTagName(b)}}}return null};a.utils.selectors.getElementsByTagAndClass=function(e,h,g){var j=[];if(!a.utils.exists(g)){g=document}var f=g.getElementsByTagName(e);for(var d=0;d<f.length;d++){if(a.utils.exists(f[d].className)){var c=f[d].className.split(" ");for(var b=0;b<c.length;b++){if(c[b]==h){j.push(f[d])}}}}return j}})(jwplayer);(function(a){a.utils.strings=function(){};a.utils.strings.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.utils.strings.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.utils.strings.serialize=function(b){if(b==null){return null}else{if(b=="true"){return true}else{if(b=="false"){return false}else{if(isNaN(Number(b))||b.length>5||b.length==0){return b}else{return Number(b)}}}}};a.utils.strings.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.utils.strings.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.utils.strings.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e+'"';break;case"object":if(a.utils.exists(e)){e=a.utils.strings.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}}})(jwplayer);(function(c){var d=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);c.utils.typechecker=function(g,f){f=!c.utils.exists(f)?b(g):f;return e(g,f)};function b(f){var g=["true","false","t","f"];if(g.toString().indexOf(f.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(d.test(f)){return"color"}else{if(!isNaN(parseInt(f,10))&&parseInt(f,10).toString().length==f.length){return"integer"}else{if(!isNaN(parseFloat(f))&&parseFloat(f).toString().length==f.length){return"float"}}}}return"string"}function e(g,f){if(!c.utils.exists(f)){return g}switch(f){case"color":if(g.length>0){return a(g)}return null;case"integer":return parseInt(g,10);case"float":return parseFloat(g);case"boolean":if(g.toLowerCase()=="true"){return true}else{if(g=="1"){return true}}return false}return g}function a(f){switch(f.toLowerCase()){case"blue":return parseInt("0000FF",16);case"green":return parseInt("00FF00",16);case"red":return parseInt("FF0000",16);case"cyan":return parseInt("00FFFF",16);case"magenta":return parseInt("FF00FF",16);case"yellow":return parseInt("FFFF00",16);case"black":return parseInt("000000",16);case"white":return parseInt("FFFFFF",16);default:f=f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(f.length==3){f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)}return parseInt(f,16)}return parseInt("000000",16)}})(jwplayer);(function(a){a.utils.parsers=function(){};a.utils.parsers.localName=function(b){if(!b){return""}else{if(b.localName){return b.localName}else{if(b.baseName){return b.baseName}else{return""}}}};a.utils.parsers.textContent=function(b){if(!b){return""}else{if(b.textContent){return b.textContent}else{if(b.text){return b.text}else{return""}}}}})(jwplayer);(function(a){a.utils.parsers.jwparser=function(){};a.utils.parsers.jwparser.PREFIX="jwplayer";a.utils.parsers.jwparser.parseEntry=function(c,d){for(var b=0;b<c.childNodes.length;b++){if(c.childNodes[b].prefix==a.utils.parsers.jwparser.PREFIX){d[a.utils.parsers.localName(c.childNodes[b])]=a.utils.strings.serialize(a.utils.parsers.textContent(c.childNodes[b]))}if(!d.file&&String(d.link).toLowerCase().indexOf("youtube")>-1){d.file=d.link}}return d};a.utils.parsers.jwparser.getProvider=function(c){if(c.type){return c.type}else{if(c.file.indexOf("youtube.com/w")>-1||c.file.indexOf("youtube.com/v")>-1||c.file.indexOf("youtu.be/")>-1){return"youtube"}else{if(c.streamer&&c.streamer.indexOf("rtmp")==0){return"rtmp"}else{if(c.streamer&&c.streamer.indexOf("http")==0){return"http"}else{var b=a.utils.strings.extension(c.file);if(extensions.hasOwnProperty(b)){return extensions[b]}}}}}return""}})(jwplayer);(function(a){a.utils.parsers.mediaparser=function(){};a.utils.parsers.mediaparser.PREFIX="media";a.utils.parsers.mediaparser.parseGroup=function(d,f){var e=false;for(var c=0;c<d.childNodes.length;c++){if(d.childNodes[c].prefix==a.utils.parsers.mediaparser.PREFIX){if(!a.utils.parsers.localName(d.childNodes[c])){continue}switch(a.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"content":if(!e){f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}if(a.utils.strings.xmlAttribute(d.childNodes[c],"duration")){f.duration=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"duration"))}if(a.utils.strings.xmlAttribute(d.childNodes[c],"start")){f.start=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"start"))}if(d.childNodes[c].childNodes&&d.childNodes[c].childNodes.length>0){f=a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f)}if(a.utils.strings.xmlAttribute(d.childNodes[c],"width")||a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate")||a.utils.strings.xmlAttribute(d.childNodes[c],"url")){if(!f.levels){f.levels=[]}f.levels.push({width:a.utils.strings.xmlAttribute(d.childNodes[c],"width"),bitrate:a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate"),file:a.utils.strings.xmlAttribute(d.childNodes[c],"url")})}break;case"title":f.title=a.utils.parsers.textContent(d.childNodes[c]);break;case"description":f.description=a.utils.parsers.textContent(d.childNodes[c]);break;case"keywords":f.tags=a.utils.parsers.textContent(d.childNodes[c]);break;case"thumbnail":f.image=a.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"credit":f.author=a.utils.parsers.textContent(d.childNodes[c]);break;case"player":var b=d.childNodes[c].url;if(b.indexOf("youtube.com")>=0||b.indexOf("youtu.be")>=0){e=true;f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}break;case"group":a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f);break}}}return f}})(jwplayer);(function(b){b.utils.parsers.rssparser=function(){};b.utils.parsers.rssparser.parse=function(f){var c=[];for(var e=0;e<f.childNodes.length;e++){if(b.utils.parsers.localName(f.childNodes[e]).toLowerCase()=="channel"){for(var d=0;d<f.childNodes[e].childNodes.length;d++){if(b.utils.parsers.localName(f.childNodes[e].childNodes[d]).toLowerCase()=="item"){c.push(a(f.childNodes[e].childNodes[d]))}}}}return c};function a(d){var e={};for(var c=0;c<d.childNodes.length;c++){if(!b.utils.parsers.localName(d.childNodes[c])){continue}switch(b.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"enclosure":e.file=b.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"title":e.title=b.utils.parsers.textContent(d.childNodes[c]);break;case"pubdate":e.date=b.utils.parsers.textContent(d.childNodes[c]);break;case"description":e.description=b.utils.parsers.textContent(d.childNodes[c]);break;case"link":e.link=b.utils.parsers.textContent(d.childNodes[c]);break;case"category":if(e.tags){e.tags+=b.utils.parsers.textContent(d.childNodes[c])}else{e.tags=b.utils.parsers.textContent(d.childNodes[c])}break}}e=b.utils.parsers.mediaparser.parseGroup(d,e);e=b.utils.parsers.jwparser.parseEntry(d,e);return new b.html5.playlistitem(e)}})(jwplayer);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin ("+h+") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(a){a.plugins.pluginmodes={FLASH:"FLASH",JAVASCRIPT:"JAVASCRIPT",HYBRID:"HYBRID"};a.plugins.plugin=function(b){var d="http://plugins.longtailvideo.com";var j=a.utils.loaderstatus.NEW;var k;var h;var l;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function e(){switch(a.utils.getPluginPathType(b)){case a.utils.pluginPathType.ABSOLUTE:return b;case a.utils.pluginPathType.RELATIVE:return a.utils.getAbsolutePath(b,window.location.href);case a.utils.pluginPathType.CDN:var n=a.utils.getPluginName(b);var m=a.utils.getPluginVersion(b);return d+"/"+a.version.split(".")[0]+"/"+n+"/"+n+(m!==""?("-"+m):"")+".js"}}function g(m){l=setTimeout(function(){j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)},1000)}function f(m){j=a.utils.loaderstatus.ERROR;c.sendEvent(a.events.ERROR)}this.load=function(){if(j==a.utils.loaderstatus.NEW){if(b.lastIndexOf(".swf")>0){k=b;j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE);return}j=a.utils.loaderstatus.LOADING;var m=new a.utils.scriptloader(e());m.addEventListener(a.events.COMPLETE,g);m.addEventListener(a.events.ERROR,f);m.load()}};this.registerPlugin=function(o,n,m){if(l){clearTimeout(l);l=undefined}if(n&&m){k=m;h=n}else{if(typeof n=="string"){k=n}else{if(typeof n=="function"){h=n}else{if(!n&&!m){k=o}}}}j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)};this.getStatus=function(){return j};this.getPluginName=function(){return a.utils.getPluginName(b)};this.getFlashPath=function(){if(k){switch(a.utils.getPluginPathType(k)){case a.utils.pluginPathType.ABSOLUTE:return k;case a.utils.pluginPathType.RELATIVE:if(b.lastIndexOf(".swf")>0){return a.utils.getAbsolutePath(k,window.location.href)}return a.utils.getAbsolutePath(k,e());case a.utils.pluginPathType.CDN:if(k.indexOf("-")>-1){return k+"h"}return k+"-h"}}return null};this.getJS=function(){return h};this.getPluginmode=function(){if(typeof k!="undefined"&&typeof h!="undefined"){return a.plugins.pluginmodes.HYBRID}else{if(typeof k!="undefined"){return a.plugins.pluginmodes.FLASH}else{if(typeof h!="undefined"){return a.plugins.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(n,m,o){return new h(n,m,o)};this.getURL=function(){return b}}})(jwplayer);(function(a){a.plugins.pluginloader=function(h,e){var g={};var k=a.utils.loaderstatus.NEW;var d=false;var b=false;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function f(){if(!b){b=true;k=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)}}function j(){if(!b){var m=0;for(plugin in g){var l=g[plugin].getStatus();if(l==a.utils.loaderstatus.LOADING||l==a.utils.loaderstatus.NEW){m++}}if(m==0){f()}}}this.setupPlugins=function(n,l,s){var m={length:0,plugins:{}};var p={length:0,plugins:{}};for(var o in g){var q=g[o].getPluginName();if(g[o].getFlashPath()){m.plugins[g[o].getFlashPath()]=l.plugins[o];m.plugins[g[o].getFlashPath()].pluginmode=g[o].getPluginmode();m.length++}if(g[o].getJS()){var r=document.createElement("div");r.id=n.id+"_"+q;r.style.position="absolute";r.style.zIndex=p.length+10;p.plugins[q]=g[o].getNewInstance(n,l.plugins[o],r);p.length++;if(typeof p.plugins[q].resize!="undefined"){n.onReady(s(p.plugins[q],r,true));n.onResize(s(p.plugins[q],r))}}}n.plugins=p.plugins;return m};this.load=function(){k=a.utils.loaderstatus.LOADING;d=true;for(var l in e){if(a.utils.exists(l)){g[l]=h.addPlugin(l);g[l].addEventListener(a.events.COMPLETE,j);g[l].addEventListener(a.events.ERROR,j)}}for(l in g){g[l].load()}d=false;j()};this.pluginFailed=function(){f()};this.getStatus=function(){return k}}})(jwplayer);(function(b){var a=[];b.api=function(d){this.container=d;this.id=d.id;var n={};var s={};var q={};var c=[];var h=undefined;var l=false;var j=[];var p=b.utils.getOuterHTML(d);var r={};var k={};this.getBuffer=function(){return this.callInternal("jwGetBuffer")};this.getContainer=function(){return this.container};function e(u,t){return function(z,v,w,x){if(u.renderingMode=="flash"||u.renderingMode=="html5"){var y;if(v){k[z]=v;y="jwplayer('"+u.id+"').callback('"+z+"')"}else{if(!v&&k[z]){delete k[z]}}h.jwDockSetButton(z,y,w,x)}return t}}this.getPlugin=function(t){var v=this;var u={};if(t=="dock"){return b.utils.extend(u,{setButton:e(v,u),show:function(){v.callInternal("jwDockShow");return u},hide:function(){v.callInternal("jwDockHide");return u},onShow:function(w){v.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{if(t=="controlbar"){return b.utils.extend(u,{show:function(){v.callInternal("jwControlbarShow");return u},hide:function(){v.callInternal("jwControlbarHide");return u},onShow:function(w){v.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{if(t=="display"){return b.utils.extend(u,{show:function(){v.callInternal("jwDisplayShow");return u},hide:function(){v.callInternal("jwDisplayHide");return u},onShow:function(w){v.componentListener("display",b.api.events.JWPLAYER_COMPONENT_SHOW,w);return u},onHide:function(w){v.componentListener("display",b.api.events.JWPLAYER_COMPONENT_HIDE,w);return u}})}else{return this.plugins[t]}}}};this.callback=function(t){if(k[t]){return k[t]()}};this.getDuration=function(){return this.callInternal("jwGetDuration")};this.getFullscreen=function(){return this.callInternal("jwGetFullscreen")};this.getHeight=function(){return this.callInternal("jwGetHeight")};this.getLockState=function(){return this.callInternal("jwGetLockState")};this.getMeta=function(){return this.getItemMeta()};this.getMute=function(){return this.callInternal("jwGetMute")};this.getPlaylist=function(){var u=this.callInternal("jwGetPlaylist");if(this.renderingMode=="flash"){b.utils.deepReplaceKeyName(u,"__dot__",".")}for(var t=0;t<u.length;t++){if(!b.utils.exists(u[t].index)){u[t].index=t}}return u};this.getPlaylistItem=function(t){if(!b.utils.exists(t)){t=this.getCurrentItem()}return this.getPlaylist()[t]};this.getPosition=function(){return this.callInternal("jwGetPosition")};this.getRenderingMode=function(){return this.renderingMode};this.getState=function(){return this.callInternal("jwGetState")};this.getVolume=function(){return this.callInternal("jwGetVolume")};this.getWidth=function(){return this.callInternal("jwGetWidth")};this.setFullscreen=function(t){if(!b.utils.exists(t)){this.callInternal("jwSetFullscreen",!this.callInternal("jwGetFullscreen"))}else{this.callInternal("jwSetFullscreen",t)}return this};this.setMute=function(t){if(!b.utils.exists(t)){this.callInternal("jwSetMute",!this.callInternal("jwGetMute"))}else{this.callInternal("jwSetMute",t)}return this};this.lock=function(){return this};this.unlock=function(){return this};this.load=function(t){this.callInternal("jwLoad",t);return this};this.playlistItem=function(t){this.callInternal("jwPlaylistItem",t);return this};this.playlistPrev=function(){this.callInternal("jwPlaylistPrev");return this};this.playlistNext=function(){this.callInternal("jwPlaylistNext");return this};this.resize=function(u,t){if(this.renderingMode=="html5"){h.jwResize(u,t)}else{this.container.width=u;this.container.height=t}return this};this.play=function(t){if(typeof t=="undefined"){t=this.getState();if(t==b.api.events.state.PLAYING||t==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPlay",t)}return this};this.pause=function(t){if(typeof t=="undefined"){t=this.getState();if(t==b.api.events.state.PLAYING||t==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPause",t)}return this};this.stop=function(){this.callInternal("jwStop");return this};this.seek=function(t){this.callInternal("jwSeek",t);return this};this.setVolume=function(t){this.callInternal("jwSetVolume",t);return this};this.onBufferChange=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER,t)};this.onBufferFull=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,t)};this.onError=function(t){return this.eventListener(b.api.events.JWPLAYER_ERROR,t)};this.onFullscreen=function(t){return this.eventListener(b.api.events.JWPLAYER_FULLSCREEN,t)};this.onMeta=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_META,t)};this.onMute=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_MUTE,t)};this.onPlaylist=function(t){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,t)};this.onPlaylistItem=function(t){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,t)};this.onReady=function(t){return this.eventListener(b.api.events.API_READY,t)};this.onResize=function(t){return this.eventListener(b.api.events.JWPLAYER_RESIZE,t)};this.onComplete=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,t)};this.onSeek=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_SEEK,t)};this.onTime=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_TIME,t)};this.onVolume=function(t){return this.eventListener(b.api.events.JWPLAYER_MEDIA_VOLUME,t)};this.onBuffer=function(t){return this.stateListener(b.api.events.state.BUFFERING,t)};this.onPause=function(t){return this.stateListener(b.api.events.state.PAUSED,t)};this.onPlay=function(t){return this.stateListener(b.api.events.state.PLAYING,t)};this.onIdle=function(t){return this.stateListener(b.api.events.state.IDLE,t)};this.remove=function(){n={};j=[];if(b.utils.getOuterHTML(this.container)!=p){b.api.destroyPlayer(this.id,p)}};this.setup=function(u){if(b.embed){var t=this.id;this.remove();var v=b(t);v.config=u;return new b.embed(v)}return this};this.registerPlugin=function(v,u,t){b.plugins.registerPlugin(v,u,t)};this.setPlayer=function(t,u){h=t;this.renderingMode=u};this.stateListener=function(t,u){if(!s[t]){s[t]=[];this.eventListener(b.api.events.JWPLAYER_PLAYER_STATE,g(t))}s[t].push(u);return this};function g(t){return function(v){var u=v.newstate,x=v.oldstate;if(u==t){var w=s[u];if(w){for(var y=0;y<w.length;y++){if(typeof w[y]=="function"){w[y].call(this,{oldstate:x,newstate:u})}}}}}}this.componentListener=function(t,u,v){if(!q[t]){q[t]={}}if(!q[t][u]){q[t][u]=[];this.eventListener(u,m(t,u))}q[t][u].push(v);return this};function m(t,u){return function(w){if(t==w.component){var v=q[t][u];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,w)}}}}}}this.addInternalListener=function(t,u){t.jwAddEventListener(u,'function(dat) { jwplayer("'+this.id+'").dispatchEvent("'+u+'", dat); }')};this.eventListener=function(t,u){if(!n[t]){n[t]=[];if(h&&l){this.addInternalListener(h,t)}}n[t].push(u);return this};this.dispatchEvent=function(v){if(n[v]){var u=f(v,arguments[1]);for(var t=0;t<n[v].length;t++){if(typeof n[v][t]=="function"){n[v][t].call(this,u)}}}};function f(v,t){var x=b.utils.extend({},t);if(v==b.api.events.JWPLAYER_FULLSCREEN&&!x.fullscreen){x.fullscreen=x.message=="true"?true:false;delete x.message}else{if(typeof x.data=="object"){x=b.utils.extend(x,x.data);delete x.data}}var u=["position","duration","offset"];for(var w in u){if(x[u[w]]){x[u[w]]=Math.round(x[u[w]]*1000)/1000}}return x}this.callInternal=function(u,t){if(l){if(typeof h!="undefined"&&typeof h[u]=="function"){if(b.utils.exists(t)){return(h[u])(t)}else{return(h[u])()}}return null}else{j.push({method:u,parameters:t})}};this.playerReady=function(v){l=true;if(!h){this.setPlayer(document.getElementById(v.id))}this.container=document.getElementById(this.id);for(var t in n){this.addInternalListener(h,t)}this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,function(w){r={}});this.eventListener(b.api.events.JWPLAYER_MEDIA_META,function(w){b.utils.extend(r,w.metadata)});this.dispatchEvent(b.api.events.API_READY);while(j.length>0){var u=j.shift();this.callInternal(u.method,u.parameters)}};this.getItemMeta=function(){return r};this.getCurrentItem=function(){return this.callInternal("jwGetPlaylistIndex")};function o(v,x,w){var t=[];if(!x){x=0}if(!w){w=v.length-1}for(var u=x;u<=w;u++){t.push(v[u])}return t}return this};b.api.selectPlayer=function(d){var c;if(!b.utils.exists(d)){d=0}if(d.nodeType){c=d}else{if(typeof d=="string"){c=document.getElementById(d)}}if(c){var e=b.api.playerById(c.id);if(e){return e}else{return b.api.addPlayer(new b.api(c))}}else{if(typeof d=="number"){return b.getPlayers()[d]}}return null};b.api.events={API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem"};b.api.events.state={BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"};b.api.playerById=function(d){for(var c=0;c<a.length;c++){if(a[c].id==d){return a[c]}}return null};b.api.addPlayer=function(c){for(var d=0;d<a.length;d++){if(a[d]==c){return c}}a.push(c);return c};b.api.destroyPlayer=function(g,d){var f=-1;for(var j=0;j<a.length;j++){if(a[j].id==g){f=j;continue}}if(f>=0){var c=document.getElementById(a[f].id);if(document.getElementById(a[f].id+"_wrapper")){c=document.getElementById(a[f].id+"_wrapper")}if(c){if(d){b.utils.setOuterHTML(c,d)}else{var h=document.createElement("div");var e=c.id;if(c.id.indexOf("_wrapper")==c.id.length-8){newID=c.id.substring(0,c.id.length-8)}h.setAttribute("id",e);c.parentNode.replaceChild(h,c)}}a.splice(f,1)}return null};b.getPlayers=function(){return a.slice(0)}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}else{jwplayer.api.selectPlayer(b.id).playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(a){a.embed=function(g){var j={width:400,height:300,components:{controlbar:{position:"over"}}};var f=a.utils.mediaparser.parseMedia(g.container);var e=new a.embed.config(a.utils.extend(j,f,g.config),this);var h=a.plugins.loadPlugins(g.id,e.plugins);function c(m,l){for(var k in l){if(typeof m[k]=="function"){(m[k]).call(m,l[k])}}}function d(){if(h.getStatus()==a.utils.loaderstatus.COMPLETE){for(var m=0;m<e.modes.length;m++){if(e.modes[m].type&&a.embed[e.modes[m].type]){var k=e;if(e.modes[m].config){k=a.utils.extend(a.utils.clone(e),e.modes[m].config)}var l=new a.embed[e.modes[m].type](document.getElementById(g.id),e.modes[m],k,h,g);if(l.supportsConfig()){l.embed();c(g,e.events);return g}}}a.utils.log("No suitable players found");new a.embed.logo(a.utils.extend({hide:true},e.components.logo),"none",g.id)}}h.addEventListener(a.events.COMPLETE,d);h.addEventListener(a.events.ERROR,d);h.load();return g};function b(){if(!document.body){return setTimeout(b,15)}var c=a.utils.selectors.getElementsByTagAndClass("video","jwplayer");for(var d=0;d<c.length;d++){var e=c[d];a(e.id).setup({})}}b()})(jwplayer);(function(e){function h(){return[{type:"flash",src:"/jwplayer/player.swf"},{type:"html5"},{type:"download"}]}var a={players:"modes",autoplay:"autostart"};function b(n){var m=n.toLowerCase();var l=["left","right","top","bottom"];for(var k=0;k<l.length;k++){if(m==l[k]){return true}}return false}function c(l){var k=false;k=(l instanceof Array)||(typeof l=="object"&&!l.position&&!l.size);return k}function j(k){if(typeof k=="string"){if(parseInt(k).toString()==k||k.toLowerCase().indexOf("px")>-1){return parseInt(k)}}return k}var g=["playlist","dock","controlbar","logo","display"];function f(k){var n={};switch(e.utils.typeOf(k.plugins)){case"object":for(var m in k.plugins){n[e.utils.getPluginName(m)]=m}break;case"string":var o=k.plugins.split(",");for(var l=0;l<o.length;l++){n[e.utils.getPluginName(o[l])]=o[l]}break}return n}function d(o,n,m,k){if(e.utils.typeOf(o[n])!="object"){o[n]={}}var l=o[n][m];if(e.utils.typeOf(l)!="object"){o[n][m]=l={}}if(k){if(n=="plugins"){var p=e.utils.getPluginName(m);l[k]=o[p+"."+k];delete o[p+"."+k]}else{l[k]=o[m+"."+k];delete o[m+"."+k]}}}e.embed.deserialize=function(l){var m=f(l);for(var k in m){d(l,"plugins",m[k])}for(var p in l){if(p.indexOf(".")>-1){var o=p.split(".");var n=o[0];var p=o[1];if(e.utils.isInArray(g,n)){d(l,"components",n,p)}else{if(m[n]){d(l,"plugins",m[n],p)}}}}return l};e.embed.config=function(k,u){var t=e.utils.extend({},k);var r;if(c(t.playlist)){r=t.playlist;delete t.playlist}t=e.embed.deserialize(t);t.height=j(t.height);t.width=j(t.width);if(typeof t.plugins=="string"){var l=t.plugins.split(",");if(typeof t.plugins!="object"){t.plugins={}}for(var p=0;p<l.length;p++){var q=e.utils.getPluginName(l[p]);if(typeof t[q]=="object"){t.plugins[l[p]]=t[q];delete t[q]}else{t.plugins[l[p]]={}}}}for(var s=0;s<g.length;s++){var o=g[s];if(e.utils.exists(t[o])){if(typeof t[o]!="object"){if(!t.components[o]){t.components[o]={}}if(o=="logo"){t.components[o].file=t[o]}else{t.components[o].position=t[o]}delete t[o]}else{if(!t.components[o]){t.components[o]={}}e.utils.extend(t.components[o],t[o]);delete t[o]}}if(typeof t[o+"size"]!="undefined"){if(!t.components[o]){t.components[o]={}}t.components[o].size=t[o+"size"];delete t[o+"size"]}}if(typeof t.icons!="undefined"){if(!t.components.display){t.components.display={}}t.components.display.icons=t.icons;delete t.icons}for(var n in a){if(t[n]){if(!t[a[n]]){t[a[n]]=t[n]}delete t[n]}}var m;if(t.flashplayer&&!t.modes){m=h();m[0].src=t.flashplayer;delete t.flashplayer}else{if(t.modes){if(typeof t.modes=="string"){m=h();m[0].src=t.modes}else{if(t.modes instanceof Array){m=t.modes}else{if(typeof t.modes=="object"&&t.modes.type){m=[t.modes]}}}delete t.modes}else{m=h()}}t.modes=m;if(r){t.playlist=r}return t}})(jwplayer);(function(a){a.embed.download=function(c,g,b,d,f){this.embed=function(){var k=a.utils.extend({},b);var q={};var j=b.width?b.width:480;if(typeof j!="number"){j=parseInt(j,10)}var m=b.height?b.height:320;if(typeof m!="number"){m=parseInt(m,10)}var u,o,n;var s={};if(b.playlist&&b.playlist.length){s.file=b.playlist[0].file;o=b.playlist[0].image;s.levels=b.playlist[0].levels}else{s.file=b.file;o=b.image;s.levels=b.levels}if(s.file){u=s.file}else{if(s.levels&&s.levels.length){u=s.levels[0].file}}n=u?"pointer":"auto";var l={display:{style:{cursor:n,width:j,height:m,backgroundColor:"#000",position:"relative",textDecoration:"none",border:"none",display:"block"}},display_icon:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:0,left:0,border:0,margin:0,padding:0,zIndex:3,width:50,height:50,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"}},display_iconBackground:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:((m-50)/2),left:((j-50)/2),border:0,width:50,height:50,margin:0,padding:0,zIndex:2,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"}},display_image:{style:{width:j,height:m,display:o?"block":"none",position:"absolute",cursor:n,left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1,border:"none"}}};var h=function(v,x,y){var w=document.createElement(v);if(y){w.id=y}else{w.id=c.id+"_jwplayer_"+x}a.utils.css(w,l[x].style);return w};q.display=h("a","display",c.id);if(u){q.display.setAttribute("href",a.utils.getAbsolutePath(u))}q.display_image=h("img","display_image");q.display_image.setAttribute("alt","Click to download...");if(o){q.display_image.setAttribute("src",a.utils.getAbsolutePath(o))}if(true){q.display_icon=h("div","display_icon");q.display_iconBackground=h("div","display_iconBackground");q.display.appendChild(q.display_image);q.display_iconBackground.appendChild(q.display_icon);q.display.appendChild(q.display_iconBackground)}_css=a.utils.css;_hide=function(v){_css(v,{display:"none"})};function r(v){_imageWidth=q.display_image.naturalWidth;_imageHeight=q.display_image.naturalHeight;t()}function t(){a.utils.stretch(a.utils.stretching.UNIFORM,q.display_image,j,m,_imageWidth,_imageHeight)}q.display_image.onerror=function(v){_hide(q.display_image)};q.display_image.onload=r;c.parentNode.replaceChild(q.display,c);var p=(b.plugins&&b.plugins.logo)?b.plugins.logo:{};q.display.appendChild(new a.embed.logo(b.components.logo,"download",c.id));f.container=document.getElementById(f.id);f.setPlayer(q.display,"download")};this.supportsConfig=function(){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return e(j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&e(j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}};function e(j,l,h){if(h){return false}var k=["image","sound","youtube","http"];if(l&&(k.toString().indexOf(l)>-1)){return true}if(!l||(l&&l=="video")){var m=a.utils.extension(j);if(m&&a.utils.extensionmap[m]){return true}}return false}}})(jwplayer);(function(a){a.embed.flash=function(f,g,l,e,j){function m(o,n,p){var q=document.createElement("param");q.setAttribute("name",n);q.setAttribute("value",p);o.appendChild(q)}function k(o,p,n){return function(q){if(n){document.getElementById(j.id+"_wrapper").appendChild(p)}var s=document.getElementById(j.id).getPluginConfig("display");o.resize(s.width,s.height);var r={left:s.x,top:s.y};a.utils.css(p,r)}}function d(p){if(!p){return{}}var r={};for(var o in p){var n=p[o];for(var q in n){r[o+"."+q]=n[q]}}return r}function h(q,p){if(q[p]){var s=q[p];for(var o in s){var n=s[o];if(typeof n=="string"){if(!q[o]){q[o]=n}}else{for(var r in n){if(!q[o+"."+r]){q[o+"."+r]=n[r]}}}}delete q[p]}}function b(q){if(!q){return{}}var t={},s=[];for(var n in q){var p=a.utils.getPluginName(n);var o=q[n];s.push(n);for(var r in o){t[p+"."+r]=o[r]}}t.plugins=s.join(",");return t}function c(p){var n=p.netstreambasepath?"":"netstreambasepath="+encodeURIComponent(window.location.href.split("#")[0])+"&";for(var o in p){if(typeof(p[o])=="object"){n+=o+"="+encodeURIComponent("[[JSON]]"+a.utils.strings.jsonToString(p[o]))+"&"}else{n+=o+"="+encodeURIComponent(p[o])+"&"}}return n.substring(0,n.length-1)}this.embed=function(){l.id=j.id;var y;var q=a.utils.extend({},l);var n=q.width;var w=q.height;if(f.id+"_wrapper"==f.parentNode.id){y=document.getElementById(f.id+"_wrapper")}else{y=document.createElement("div");y.id=f.id+"_wrapper";a.utils.wrap(f,y);a.utils.css(y,{position:"relative",width:n,height:w})}var o=e.setupPlugins(j,q,k);if(o.length>0){a.utils.extend(q,b(o.plugins))}else{delete q.plugins}var r=["height","width","modes","events"];for(var u=0;u<r.length;u++){delete q[r[u]]}var p="opaque";if(q.wmode){p=q.wmode}h(q,"components");h(q,"providers");if(typeof q["dock.position"]!="undefined"){if(q["dock.position"].toString().toLowerCase()=="false"){q.dock=q["dock.position"];delete q["dock.position"]}}var x="#000000";var t;if(a.utils.isIE()){var v='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+x+'" width="100%" height="100%" id="'+f.id+'" name="'+f.id+'" tabindex=0"">';v+='<param name="movie" value="'+g.src+'">';v+='<param name="allowfullscreen" value="true">';v+='<param name="allowscriptaccess" value="always">';v+='<param name="seamlesstabbing" value="true">';v+='<param name="wmode" value="'+p+'">';v+='<param name="flashvars" value="'+c(q)+'">';v+="</object>";a.utils.setOuterHTML(f,v);t=document.getElementById(f.id)}else{var s=document.createElement("object");s.setAttribute("type","application/x-shockwave-flash");s.setAttribute("data",g.src);s.setAttribute("width","100%");s.setAttribute("height","100%");s.setAttribute("bgcolor","#000000");s.setAttribute("id",f.id);s.setAttribute("name",f.id);s.setAttribute("tabindex",0);m(s,"allowfullscreen","true");m(s,"allowscriptaccess","always");m(s,"seamlesstabbing","true");m(s,"wmode",p);m(s,"flashvars",c(q));f.parentNode.replaceChild(s,f);t=s}j.container=t;j.setPlayer(t,"flash")};this.supportsConfig=function(){if(a.utils.hasFlash()){if(l){var o=a.utils.getFirstPlaylistItemFromConfig(l);if(typeof o.file=="undefined"&&typeof o.levels=="undefined"){return true}else{if(o.file){return flashCanPlay(o.file,o.provider)}else{if(o.levels&&o.levels.length){for(var n=0;n<o.levels.length;n++){if(o.levels[n].file&&flashCanPlay(o.levels[n].file,o.provider)){return true}}}}}}else{return true}}return false};flashCanPlay=function(n,p){var o=["video","http","sound","image"];if(p&&(o.toString().indexOf(p<0))){return true}var q=a.utils.extension(n);if(!q){return true}if(a.utils.exists(a.utils.extensionmap[q])&&!a.utils.exists(a.utils.extensionmap[q].flash)){return false}return true}}})(jwplayer);(function(a){a.embed.html5=function(c,g,b,d,f){function e(j,k,h){return function(l){var m=document.getElementById(c.id+"_displayarea");if(h){m.appendChild(k)}var n=m.style;j.resize(parseInt(n.width.replace("px","")),parseInt(n.height.replace("px","")));k.left=n.left;k.top=n.top}}this.embed=function(){if(a.html5){d.setupPlugins(f,b,e);c.innerHTML="";var j=a.utils.extend({screencolor:"0x000000"},b);var h=["plugins","modes","events"];for(var k=0;k<h.length;k++){delete j[h[k]]}if(j.levels&&!j.sources){j.sources=b.levels}if(j.skin&&j.skin.toLowerCase().indexOf(".zip")>0){j.skin=j.skin.replace(/\.zip/i,".xml")}var l=new (a.html5(c)).setup(j);f.container=document.getElementById(f.id);f.setPlayer(l,"html5")}else{return null}};this.supportsConfig=function(){if(!!a.vid.canPlayType){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return html5CanPlay(a.vid,j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&html5CanPlay(a.vid,j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}}return false};html5CanPlay=function(k,j,l,h){if(h){return false}if(l&&l=="youtube"){return true}if(l&&l!="video"&&l!="http"&&l!="sound"){return false}var m=a.utils.extension(j);if(!a.utils.exists(m)||!a.utils.exists(a.utils.extensionmap[m])){return true}if(!a.utils.exists(a.utils.extensionmap[m].html5)){return false}if(a.utils.isLegacyAndroid()&&m.match(/m4v|mp4/)){return true}return browserCanPlay(k,a.utils.extensionmap[m].html5)};browserCanPlay=function(j,h){if(!h){return true}if(j.canPlayType(h)){return true}else{if(h=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return j.canPlayType("audio/mpeg")}else{return false}}}}})(jwplayer);(function(a){a.embed.logo=function(m,l,d){var j={prefix:"http://l.longtailvideo.com/"+l+"/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:5,hide:false,position:"bottom-left"};_css=a.utils.css;var b;var h;k();function k(){o();c();f()}function o(){if(j.prefix){var q=a.version.split(/\W/).splice(0,2).join("/");if(j.prefix.indexOf(q)<0){j.prefix+=q+"/"}}h=a.utils.extend({},j)}function p(){var s={border:"none",textDecoration:"none",position:"absolute",cursor:"pointer",zIndex:10};s.display=h.hide?"none":"block";var r=h.position.toLowerCase().split("-");for(var q in r){s[r[q]]=h.margin}return s}function c(){b=document.createElement("img");b.id=d+"_jwplayer_logo";b.style.display="none";b.onload=function(q){_css(b,p());e()};if(!h.file){return}if(h.file.indexOf("http://")===0){b.src=h.file}else{b.src=h.prefix+h.file}}if(!h.file){return}function f(){if(h.link){b.onmouseover=g;b.onmouseout=e;b.onclick=n}else{this.mouseEnabled=false}}function n(q){if(typeof q!="undefined"){q.preventDefault();q.stopPropagation()}if(h.link){window.open(h.link,"_blank")}return}function e(q){if(h.link){b.style.opacity=h.out}return}function g(q){if(h.hide){b.style.opacity=h.over}return}return b}})(jwplayer);(function(a){a.html5=function(b){var c=b;this.setup=function(d){a.utils.extend(this,new a.html5.api(c,d));return this};return this}})(jwplayer);(function(b){var d=b.utils;var c=d.css;b.html5.view=function(r,q,f){var u=r;var n=q;var x=f;var w;var g;var C;var s;var D;var p;var A;function z(){w=document.createElement("div");w.id=n.id;w.className=n.className;_videowrapper=document.createElement("div");_videowrapper.id=w.id+"_video_wrapper";n.id=w.id+"_video";c(w,{position:"relative",height:x.height,width:x.width,padding:0,backgroundColor:E(),zIndex:0});function E(){if(u.skin.getComponentSettings("display")&&u.skin.getComponentSettings("display").backgroundcolor){return u.skin.getComponentSettings("display").backgroundcolor}return parseInt("000000",16)}c(n,{width:x.width,height:x.height,top:0,left:0,zIndex:1,margin:"auto",display:"block"});c(_videowrapper,{overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0});d.wrap(n,w);d.wrap(n,_videowrapper);s=document.createElement("div");s.id=w.id+"_displayarea";w.appendChild(s)}function k(){for(var E=0;E<x.plugins.order.length;E++){var F=x.plugins.order[E];if(d.exists(x.plugins.object[F].getDisplayElement)){x.plugins.object[F].height=d.parseDimension(x.plugins.object[F].getDisplayElement().style.height);x.plugins.object[F].width=d.parseDimension(x.plugins.object[F].getDisplayElement().style.width);x.plugins.config[F].currentPosition=x.plugins.config[F].position}}v()}function m(E){c(s,{display:x.getMedia().hasChrome()?"none":"block"})}function v(F){var H=x.getMedia()?x.getMedia().getDisplayElement():null;if(d.exists(H)){if(A!=H){if(A&&A.parentNode){A.parentNode.replaceChild(H,A)}A=H}for(var E=0;E<x.plugins.order.length;E++){var G=x.plugins.order[E];if(d.exists(x.plugins.object[G].getDisplayElement)){x.plugins.config[G].currentPosition=x.plugins.config[G].position}}}j(x.width,x.height)}this.setup=function(){if(x&&x.getMedia()){n=x.getMedia().getDisplayElement()}z();k();u.jwAddEventListener(b.api.events.JWPLAYER_PLAYER_STATE,m);u.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_LOADED,v);u.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_META,function(){y()});var E;if(d.exists(window.onresize)){E=window.onresize}window.onresize=function(F){if(d.exists(E)){try{E(F)}catch(H){}}if(u.jwGetFullscreen()){var G=document.body.getBoundingClientRect();x.width=Math.abs(G.left)+Math.abs(G.right);x.height=window.innerHeight}j(x.width,x.height)}};function h(E){switch(E.keyCode){case 27:if(u.jwGetFullscreen()){u.jwSetFullscreen(false)}break;case 32:if(u.jwGetState()!=b.api.events.state.IDLE&&u.jwGetState()!=b.api.events.state.PAUSED){u.jwPause()}else{u.jwPlay()}break}}function j(H,E){if(w.style.display=="none"){return}var G=[].concat(x.plugins.order);G.reverse();D=G.length+2;if(!x.fullscreen){x.width=H;x.height=E;g=H;C=E;c(s,{top:0,bottom:0,left:0,right:0,width:H,height:E,position:"relative"});c(w,{height:C,width:g});var F=o(t,G);if(F.length>0){D+=F.length;var J=F.indexOf("playlist"),I=F.indexOf("controlbar");if(J>=0&&I>=0){F[J]=F.splice(I,1,F[J])[0]}o(l,F,true)}}else{if(!(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")==0)){o(B,G,true)}}y()}function o(J,G,H){var F=[];for(var E=0;E<G.length;E++){var K=G[E];if(d.exists(x.plugins.object[K].getDisplayElement)){if(x.plugins.config[K].currentPosition!=b.html5.view.positions.NONE){var I=J(K,D--);if(!I){F.push(K)}else{x.plugins.object[K].resize(I.width,I.height);if(H){delete I.width;delete I.height}c(x.plugins.object[K].getDisplayElement(),I)}}else{c(x.plugins.object[K].getDisplayElement(),{display:"none"})}}}return F}function t(F,G){if(d.exists(x.plugins.object[F].getDisplayElement)){if(x.plugins.config[F].position&&a(x.plugins.config[F].position)){if(!d.exists(x.plugins.object[F].getDisplayElement().parentNode)){w.appendChild(x.plugins.object[F].getDisplayElement())}var E=e(F);E.zIndex=G;return E}}return false}function l(G,H){if(!d.exists(x.plugins.object[G].getDisplayElement().parentNode)){s.appendChild(x.plugins.object[G].getDisplayElement())}var E=x.width,F=x.height;if(typeof x.width=="string"&&x.width.lastIndexOf("%")>-1){percentage=parseFloat(x.width.substring(0,x.width.lastIndexOf("%")))/100;E=Math.round(window.innerWidth*percentage)}if(typeof x.height=="string"&&x.height.lastIndexOf("%")>-1){percentage=parseFloat(x.height.substring(0,x.height.lastIndexOf("%")))/100;F=Math.round(window.innerHeight*percentage)}return{position:"absolute",width:(E-d.parseDimension(s.style.left)-d.parseDimension(s.style.right)),height:(F-d.parseDimension(s.style.top)-d.parseDimension(s.style.bottom)),zIndex:H}}function B(E,F){return{position:"fixed",width:x.width,height:x.height,zIndex:F}}function y(){if(!d.exists(x.getMedia())){return}s.style.position="absolute";var H=x.getMedia().getDisplayElement();if(H&&H.tagName.toLowerCase()=="video"){H.style.position="absolute";var E,I;if(s.style.width.toString().lastIndexOf("%")>-1||s.style.width.toString().lastIndexOf("%")>-1){var F=s.getBoundingClientRect();E=Math.abs(F.left)+Math.abs(F.right);I=Math.abs(F.top)+Math.abs(F.bottom)}else{E=d.parseDimension(s.style.width);I=d.parseDimension(s.style.height)}if(H.parentNode){H.parentNode.style.left=s.style.left;H.parentNode.style.top=s.style.top}d.stretch(u.jwGetStretching(),H,E,I,H.videoWidth?H.videoWidth:400,H.videoHeight?H.videoHeight:300)}else{var G=x.plugins.object.display.getDisplayElement();if(G){x.getMedia().resize(d.parseDimension(G.style.width),d.parseDimension(G.style.height))}else{x.getMedia().resize(d.parseDimension(s.style.width),d.parseDimension(s.style.height))}}}function e(F){var G={position:"absolute",margin:0,padding:0,top:null};var E=x.plugins.config[F].currentPosition.toLowerCase();switch(E.toUpperCase()){case b.html5.view.positions.TOP:G.top=d.parseDimension(s.style.top);G.left=d.parseDimension(s.style.left);G.width=g-d.parseDimension(s.style.left)-d.parseDimension(s.style.right);G.height=x.plugins.object[F].height;s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].height+"px";s.style.height=d.parseDimension(s.style.height)-G.height+"px";break;case b.html5.view.positions.RIGHT:G.top=d.parseDimension(s.style.top);G.right=d.parseDimension(s.style.right);G.width=x.plugins.object[F].width;G.height=C-d.parseDimension(s.style.top)-d.parseDimension(s.style.bottom);s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].width+"px";s.style.width=d.parseDimension(s.style.width)-G.width+"px";break;case b.html5.view.positions.BOTTOM:G.bottom=d.parseDimension(s.style.bottom);G.left=d.parseDimension(s.style.left);G.width=g-d.parseDimension(s.style.left)-d.parseDimension(s.style.right);G.height=x.plugins.object[F].height;s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].height+"px";s.style.height=d.parseDimension(s.style.height)-G.height+"px";break;case b.html5.view.positions.LEFT:G.top=d.parseDimension(s.style.top);G.left=d.parseDimension(s.style.left);G.width=x.plugins.object[F].width;G.height=C-d.parseDimension(s.style.top)-d.parseDimension(s.style.bottom);s.style[E]=d.parseDimension(s.style[E])+x.plugins.object[F].width+"px";s.style.width=d.parseDimension(s.style.width)-G.width+"px";break;default:break}return G}this.resize=j;this.fullscreen=function(H){if(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")===0){if(x.getMedia().getDisplayElement().webkitSupportsFullscreen){if(H){try{x.getMedia().getDisplayElement().webkitEnterFullscreen()}catch(G){}}else{try{x.getMedia().getDisplayElement().webkitExitFullscreen()}catch(G){}}}}else{if(H){document.onkeydown=h;clearInterval(p);var F=document.body.getBoundingClientRect();x.width=Math.abs(F.left)+Math.abs(F.right);x.height=window.innerHeight;var E={position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:2147483000};c(w,E);E.zIndex=1;if(x.getMedia()&&x.getMedia().getDisplayElement()){c(x.getMedia().getDisplayElement(),E)}E.zIndex=2;c(s,E)}else{document.onkeydown="";x.width=g;x.height=C;c(w,{position:"relative",height:x.height,width:x.width,zIndex:0})}j(x.width,x.height)}}};function a(e){return([b.html5.view.positions.TOP,b.html5.view.positions.RIGHT,b.html5.view.positions.BOTTOM,b.html5.view.positions.LEFT].toString().indexOf(e.toUpperCase())>-1)}b.html5.view.positions={TOP:"TOP",RIGHT:"RIGHT",BOTTOM:"BOTTOM",LEFT:"LEFT",OVER:"OVER",NONE:"NONE"}})(jwplayer);(function(a){var b={backgroundcolor:"",margin:10,font:"Arial,sans-serif",fontsize:10,fontcolor:parseInt("000000",16),fontstyle:"normal",fontweight:"bold",buttoncolor:parseInt("ffffff",16),position:a.html5.view.positions.BOTTOM,idlehide:false,layout:{left:{position:"left",elements:[{name:"play",type:"button"},{name:"divider",type:"divider"},{name:"prev",type:"button"},{name:"divider",type:"divider"},{name:"next",type:"button"},{name:"divider",type:"divider"},{name:"elapsed",type:"text"}]},center:{position:"center",elements:[{name:"time",type:"slider"}]},right:{position:"right",elements:[{name:"duration",type:"text"},{name:"blank",type:"button"},{name:"divider",type:"divider"},{name:"mute",type:"button"},{name:"volume",type:"slider"},{name:"divider",type:"divider"},{name:"fullscreen",type:"button"}]}}};_utils=a.utils;_css=_utils.css;_hide=function(c){_css(c,{display:"none"})};_show=function(c){_css(c,{display:"block"})};a.html5.controlbar=function(l,V){var k=l;var D=_utils.extend({},b,k.skin.getComponentSettings("controlbar"),V);if(D.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[D.position]=="undefined"){return}if(_utils.mapLength(k.skin.getComponentLayout("controlbar"))>0){D.layout=k.skin.getComponentLayout("controlbar")}var ac;var P;var ab;var E;var v="none";var g;var j;var ad;var f;var e;var y;var Q={};var p=false;var c={};var Y;var h=false;var o;var d;var S=false;var G=false;var W=new a.html5.eventdispatcher();_utils.extend(this,W);function J(){if(!Y){Y=k.skin.getSkinElement("controlbar","background");if(!Y){Y={width:0,height:0,src:null}}}return Y}function N(){ab=0;E=0;P=0;if(!p){var ak={height:J().height,backgroundColor:D.backgroundcolor};ac=document.createElement("div");ac.id=k.id+"_jwplayer_controlbar";_css(ac,ak)}var aj=(k.skin.getSkinElement("controlbar","capLeft"));var ai=(k.skin.getSkinElement("controlbar","capRight"));if(aj){x("capLeft","left",false,ac)}var al={position:"absolute",height:J().height,left:(aj?aj.width:0),zIndex:0};Z("background",ac,al,"img");if(J().src){Q.background.src=J().src}al.zIndex=1;Z("elements",ac,al);if(ai){x("capRight","right",false,ac)}}this.getDisplayElement=function(){return ac};this.resize=function(ak,ai){_utils.cancelAnimation(ac);document.getElementById(k.id).onmousemove=A;e=ak;y=ai;if(G!=k.jwGetFullscreen()){G=k.jwGetFullscreen();d=undefined}var aj=w();A();I({id:k.id,duration:ad,position:j});u({id:k.id,bufferPercent:f});return aj};this.show=function(){if(h){h=false;_show(ac);T()}};this.hide=function(){if(!h){h=true;_hide(ac);aa()}};function q(){var aj=["timeSlider","volumeSlider","timeSliderRail","volumeSliderRail"];for(var ak in aj){var ai=aj[ak];if(typeof Q[ai]!="undefined"){c[ai]=Q[ai].getBoundingClientRect()}}}function A(ai){if(h){return}if(D.position==a.html5.view.positions.OVER||k.jwGetFullscreen()){clearTimeout(o);switch(k.jwGetState()){case a.api.events.state.PAUSED:case a.api.events.state.IDLE:if(!D.idlehide||_utils.exists(ai)){U()}if(D.idlehide){o=setTimeout(function(){z()},2000)}break;default:if(ai){U()}o=setTimeout(function(){z()},2000);break}}}function z(ai){aa();_utils.cancelAnimation(ac);_utils.fadeTo(ac,0,0.1,1,0)}function U(){T();_utils.cancelAnimation(ac);_utils.fadeTo(ac,1,0,1,0)}function H(ai){return function(){if(S&&d!=ai){d=ai;W.sendEvent(ai,{component:"controlbar",boundingRect:O()})}}}var T=H(a.api.events.JWPLAYER_COMPONENT_SHOW);var aa=H(a.api.events.JWPLAYER_COMPONENT_HIDE);function O(){if(D.position==a.html5.view.positions.OVER||k.jwGetFullscreen()){return _utils.getDimensions(ac)}else{return{x:0,y:0,width:0,height:0}}}function Z(am,al,ak,ai){var aj;if(!p){if(!ai){ai="div"}aj=document.createElement(ai);Q[am]=aj;aj.id=ac.id+"_"+am;al.appendChild(aj)}else{aj=document.getElementById(ac.id+"_"+am)}if(_utils.exists(ak)){_css(aj,ak)}return aj}function M(){ah(D.layout.left);ah(D.layout.right,-1);ah(D.layout.center)}function ah(al,ai){var am=al.position=="right"?"right":"left";var ak=_utils.extend([],al.elements);if(_utils.exists(ai)){ak.reverse()}for(var aj=0;aj<ak.length;aj++){C(ak[aj],am)}}function K(){return P++}function C(am,ao){var al,aj,ak,ai,aq;if(am.type=="divider"){x("divider"+K(),ao,true,undefined,undefined,am.width,am.element);return}switch(am.name){case"play":x("playButton",ao,false);x("pauseButton",ao,true);R("playButton","jwPlay");R("pauseButton","jwPause");break;case"prev":x("prevButton",ao,true);R("prevButton","jwPlaylistPrev");break;case"stop":x("stopButton",ao,true);R("stopButton","jwStop");break;case"next":x("nextButton",ao,true);R("nextButton","jwPlaylistNext");break;case"elapsed":x("elapsedText",ao,true);break;case"time":aj=!_utils.exists(k.skin.getSkinElement("controlbar","timeSliderCapLeft"))?0:k.skin.getSkinElement("controlbar","timeSliderCapLeft").width;ak=!_utils.exists(k.skin.getSkinElement("controlbar","timeSliderCapRight"))?0:k.skin.getSkinElement("controlbar","timeSliderCapRight").width;al=ao=="left"?aj:ak;ai=k.skin.getSkinElement("controlbar","timeSliderRail").width+aj+ak;aq={height:J().height,position:"absolute",top:0,width:ai};aq[ao]=ao=="left"?ab:E;var an=Z("timeSlider",Q.elements,aq);x("timeSliderCapLeft",ao,true,an,ao=="left"?0:al);x("timeSliderRail",ao,false,an,al);x("timeSliderBuffer",ao,false,an,al);x("timeSliderProgress",ao,false,an,al);x("timeSliderThumb",ao,false,an,al);x("timeSliderCapRight",ao,true,an,ao=="right"?0:al);X("time");break;case"fullscreen":x("fullscreenButton",ao,false);x("normalscreenButton",ao,true);R("fullscreenButton","jwSetFullscreen",true);R("normalscreenButton","jwSetFullscreen",false);break;case"volume":aj=!_utils.exists(k.skin.getSkinElement("controlbar","volumeSliderCapLeft"))?0:k.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;ak=!_utils.exists(k.skin.getSkinElement("controlbar","volumeSliderCapRight"))?0:k.skin.getSkinElement("controlbar","volumeSliderCapRight").width;al=ao=="left"?aj:ak;ai=k.skin.getSkinElement("controlbar","volumeSliderRail").width+aj+ak;aq={height:J().height,position:"absolute",top:0,width:ai};aq[ao]=ao=="left"?ab:E;var ap=Z("volumeSlider",Q.elements,aq);x("volumeSliderCapLeft",ao,true,ap,ao=="left"?0:al);x("volumeSliderRail",ao,true,ap,al);x("volumeSliderProgress",ao,false,ap,al);x("volumeSliderCapRight",ao,true,ap,ao=="right"?0:al);X("volume");break;case"mute":x("muteButton",ao,false);x("unmuteButton",ao,true);R("muteButton","jwSetMute",true);R("unmuteButton","jwSetMute",false);break;case"duration":x("durationText",ao,true);break}}function x(al,ao,aj,ar,am,ai,ak){if(_utils.exists(k.skin.getSkinElement("controlbar",al))||al.indexOf("Text")>0||al.indexOf("divider")===0){var an={height:J().height,position:"absolute",display:"block",top:0};if((al.indexOf("next")===0||al.indexOf("prev")===0)&&k.jwGetPlaylist().length<2){aj=false;an.display="none"}var at;if(al.indexOf("Text")>0){al.innerhtml="00:00";an.font=D.fontsize+"px/"+(J().height+1)+"px "+D.font;an.color=D.fontcolor;an.textAlign="center";an.fontWeight=D.fontweight;an.fontStyle=D.fontstyle;an.cursor="default";at=14+3*D.fontsize}else{if(al.indexOf("divider")===0){if(ai){if(!isNaN(parseInt(ai))){at=parseInt(ai)}}else{if(ak){var ap=k.skin.getSkinElement("controlbar",ak);if(ap){an.background="url("+ap.src+") repeat-x center left";at=ap.width}}else{an.background="url("+k.skin.getSkinElement("controlbar","divider").src+") repeat-x center left";at=k.skin.getSkinElement("controlbar","divider").width}}}else{an.background="url("+k.skin.getSkinElement("controlbar",al).src+") repeat-x center left";at=k.skin.getSkinElement("controlbar",al).width}}if(ao=="left"){an.left=isNaN(am)?ab:am;if(aj){ab+=at}}else{if(ao=="right"){an.right=isNaN(am)?E:am;if(aj){E+=at}}}if(_utils.typeOf(ar)=="undefined"){ar=Q.elements}an.width=at;if(p){_css(Q[al],an)}else{var aq=Z(al,ar,an);if(_utils.exists(k.skin.getSkinElement("controlbar",al+"Over"))){aq.onmouseover=function(au){aq.style.backgroundImage=["url(",k.skin.getSkinElement("controlbar",al+"Over").src,")"].join("")};aq.onmouseout=function(au){aq.style.backgroundImage=["url(",k.skin.getSkinElement("controlbar",al).src,")"].join("")}}}}}function F(){k.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,B);k.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,s);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER,u);k.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,r);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_TIME,I);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,ag);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_VOLUME,m);k.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE,L)}function B(){N();M();w();ae()}function s(ai){ad=k.jwGetPlaylist()[ai.index].duration;I({id:k.id,duration:ad,position:0});u({id:k.id,bufferProgress:0})}function ae(){I({id:k.id,duration:k.jwGetDuration(),position:0});u({id:k.id,bufferProgress:0});ag({id:k.id,mute:k.jwGetMute()});r({id:k.id,newstate:a.api.events.state.IDLE});m({id:k.id,volume:k.jwGetVolume()})}function R(ak,al,aj){if(p){return}if(_utils.exists(k.skin.getSkinElement("controlbar",ak))){var ai=Q[ak];if(_utils.exists(ai)){_css(ai,{cursor:"pointer"});if(al=="fullscreen"){ai.onmouseup=function(am){am.stopPropagation();k.jwSetFullscreen(!k.jwGetFullscreen())}}else{ai.onmouseup=function(am){am.stopPropagation();if(_utils.exists(aj)){k[al](aj)}else{k[al]()}}}}}}function X(ai){if(p){return}var aj=Q[ai+"Slider"];_css(Q.elements,{cursor:"pointer"});_css(aj,{cursor:"pointer"});aj.onmousedown=function(ak){v=ai};aj.onmouseup=function(ak){ak.stopPropagation();af(ak.pageX)};aj.onmousemove=function(ak){if(v=="time"){g=true;var al=ak.pageX-c[ai+"Slider"].left-window.pageXOffset;_css(Q.timeSliderThumb,{left:al})}}}function af(aj){g=false;var ai;if(v=="time"){ai=aj-c.timeSliderRail.left+window.pageXOffset;var al=ai/c.timeSliderRail.width*ad;if(al<0){al=0}else{if(al>ad){al=ad-3}}if(k.jwGetState()==a.api.events.state.PAUSED||k.jwGetState()==a.api.events.state.IDLE){k.jwPlay()}k.jwSeek(al)}else{if(v=="volume"){ai=aj-c.volumeSliderRail.left-window.pageXOffset;var ak=Math.round(ai/c.volumeSliderRail.width*100);if(ak<0){ak=0}else{if(ak>100){ak=100}}if(k.jwGetMute()){k.jwSetMute(false)}k.jwSetVolume(ak)}}v="none"}function u(aj){if(_utils.exists(aj.bufferPercent)){f=aj.bufferPercent}if(c.timeSliderRail){var ak=c.timeSliderRail.width;var ai=isNaN(Math.round(ak*f/100))?0:Math.round(ak*f/100);_css(Q.timeSliderBuffer,{width:ai})}}function ag(ai){if(ai.mute){_hide(Q.muteButton);_show(Q.unmuteButton);_hide(Q.volumeSliderProgress)}else{_show(Q.muteButton);_hide(Q.unmuteButton);_show(Q.volumeSliderProgress)}}function r(ai){if(ai.newstate==a.api.events.state.BUFFERING||ai.newstate==a.api.events.state.PLAYING){_show(Q.pauseButton);_hide(Q.playButton)}else{_hide(Q.pauseButton);_show(Q.playButton)}A();if(ai.newstate==a.api.events.state.IDLE){_hide(Q.timeSliderBuffer);_hide(Q.timeSliderProgress);_hide(Q.timeSliderThumb);I({id:k.id,duration:k.jwGetDuration(),position:0})}else{_show(Q.timeSliderBuffer);if(ai.newstate!=a.api.events.state.BUFFERING){_show(Q.timeSliderProgress);_show(Q.timeSliderThumb)}}}function L(ai){u({bufferPercent:0});I(_utils.extend(ai,{position:0,duration:ad}))}function I(al){if(_utils.exists(al.position)){j=al.position}if(_utils.exists(al.duration)){ad=al.duration}var aj=(j===ad===0)?0:j/ad;var am=c.timeSliderRail;if(am){var ai=isNaN(Math.round(am.width*aj))?0:Math.round(am.width*aj);var ak=ai;if(Q.timeSliderProgress){Q.timeSliderProgress.style.width=ai+"px";if(!g){if(Q.timeSliderThumb){Q.timeSliderThumb.style.left=ak+"px"}}}}if(Q.durationText){Q.durationText.innerHTML=_utils.timeFormat(ad)}if(Q.elapsedText){Q.elapsedText.innerHTML=_utils.timeFormat(j)}}function n(){var am,aj;var ak=document.getElementById(ac.id+"_elements");if(!ak){return}var al=ak.childNodes;for(var ai in ak.childNodes){if(isNaN(parseInt(ai,10))){continue}if(al[ai].id.indexOf(ac.id+"_divider")===0&&aj&&aj.id.indexOf(ac.id+"_divider")===0&&al[ai].style.backgroundImage==aj.style.backgroundImage){al[ai].style.display="none"}else{if(al[ai].id.indexOf(ac.id+"_divider")===0&&am&&am.style.display!="none"){al[ai].style.display="block"}}if(al[ai].style.display!="none"){aj=al[ai]}am=al[ai]}}function w(){n();if(k.jwGetFullscreen()){_show(Q.normalscreenButton);_hide(Q.fullscreenButton)}else{_hide(Q.normalscreenButton);_show(Q.fullscreenButton)}var aj={width:e};var ai={};if(D.position==a.html5.view.positions.OVER||k.jwGetFullscreen()){aj.left=D.margin;aj.width-=2*D.margin;aj.top=y-J().height-D.margin;aj.height=J().height}var al=k.skin.getSkinElement("controlbar","capLeft");var ak=k.skin.getSkinElement("controlbar","capRight");ai.left=al?al.width:0;ai.width=aj.width-ai.left-(ak?ak.width:0);var am=!_utils.exists(k.skin.getSkinElement("controlbar","timeSliderCapLeft"))?0:k.skin.getSkinElement("controlbar","timeSliderCapLeft").width;_css(Q.timeSliderRail,{width:(ai.width-ab-E),left:am});if(_utils.exists(Q.timeSliderCapRight)){_css(Q.timeSliderCapRight,{left:am+(ai.width-ab-E)})}_css(ac,aj);_css(Q.elements,ai);_css(Q.background,ai);q();return aj}function m(am){if(_utils.exists(Q.volumeSliderRail)){var ak=isNaN(am.volume/100)?1:am.volume/100;var al=_utils.parseDimension(Q.volumeSliderRail.style.width);var ai=isNaN(Math.round(al*ak))?0:Math.round(al*ak);var an=_utils.parseDimension(Q.volumeSliderRail.style.right);var aj=(!_utils.exists(k.skin.getSkinElement("controlbar","volumeSliderCapLeft")))?0:k.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;_css(Q.volumeSliderProgress,{width:ai,left:aj});if(_utils.exists(Q.volumeSliderCapLeft)){_css(Q.volumeSliderCapLeft,{left:0})}}}function t(){N();M();q();p=true;F();D.idlehide=(D.idlehide.toString().toLowerCase()=="true");if(D.position==a.html5.view.positions.OVER&&D.idlehide){ac.style.opacity=0;S=true}else{setTimeout((function(){S=true;T()}),1)}ae()}t();return this}})(jwplayer);(function(b){var a=["width","height","state","playlist","item","position","buffer","duration","volume","mute","fullscreen"];var c=b.utils;b.html5.controller=function(z,w,h,v){var C=z;var G=h;var g=v;var o=w;var J=true;var e=-1;var A=c.exists(G.config.debug)&&(G.config.debug.toString().toLowerCase()=="console");var m=new b.html5.eventdispatcher(o.id,A);c.extend(this,m);var E=[];var d=false;function r(M){if(d){m.sendEvent(M.type,M)}else{E.push(M)}}function K(M){if(!d){m.sendEvent(b.api.events.JWPLAYER_READY,M);if(b.utils.exists(window.playerReady)){playerReady(M)}if(b.utils.exists(window[h.config.playerReady])){window[h.config.playerReady](M)}while(E.length>0){var O=E.shift();m.sendEvent(O.type,O)}if(h.config.autostart&&!b.utils.isIOS()){t(G.item)}while(p.length>0){var N=p.shift();x(N.method,N.arguments)}d=true}}G.addGlobalListener(r);G.addEventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,function(){G.getMedia().play()});G.addEventListener(b.api.events.JWPLAYER_MEDIA_TIME,function(M){if(M.position>=G.playlist[G.item].start&&e>=0){G.playlist[G.item].start=e;e=-1}});G.addEventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,function(M){setTimeout(s,25)});function u(){try{f(G.item);if(G.playlist[G.item].levels[0].file.length>0){if(J||G.state==b.api.events.state.IDLE){G.getMedia().load(G.playlist[G.item]);J=false}else{if(G.state==b.api.events.state.PAUSED){G.getMedia().play()}}}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function I(){try{if(G.playlist[G.item].levels[0].file.length>0){switch(G.state){case b.api.events.state.PLAYING:case b.api.events.state.BUFFERING:G.getMedia().pause();break}}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function D(M){try{if(G.playlist[G.item].levels[0].file.length>0){if(typeof M!="number"){M=parseFloat(M)}switch(G.state){case b.api.events.state.IDLE:if(e<0){e=G.playlist[G.item].start;G.playlist[G.item].start=M}u();break;case b.api.events.state.PLAYING:case b.api.events.state.PAUSED:case b.api.events.state.BUFFERING:G.seek(M);break}}return true}catch(N){m.sendEvent(b.api.events.JWPLAYER_ERROR,N)}return false}function n(M){if(!c.exists(M)){M=true}try{G.getMedia().stop(M);return true}catch(N){m.sendEvent(b.api.events.JWPLAYER_ERROR,N)}return false}function k(){try{if(G.playlist[G.item].levels[0].file.length>0){if(G.config.shuffle){f(y())}else{if(G.item+1==G.playlist.length){f(0)}else{f(G.item+1)}}}if(G.state!=b.api.events.state.IDLE){var N=G.state;G.state=b.api.events.state.IDLE;m.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:N,newstate:b.api.events.state.IDLE})}u();return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function j(){try{if(G.playlist[G.item].levels[0].file.length>0){if(G.config.shuffle){f(y())}else{if(G.item===0){f(G.playlist.length-1)}else{f(G.item-1)}}}if(G.state!=b.api.events.state.IDLE){var N=G.state;G.state=b.api.events.state.IDLE;m.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:N,newstate:b.api.events.state.IDLE})}u();return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function y(){var M=null;if(G.playlist.length>1){while(!c.exists(M)){M=Math.floor(Math.random()*G.playlist.length);if(M==G.item){M=null}}}else{M=0}return M}function t(N){if(!G.playlist||!G.playlist[N]){return false}try{if(G.playlist[N].levels[0].file.length>0){var O=G.state;if(O!==b.api.events.state.IDLE){if(G.playlist[G.item].provider==G.playlist[N].provider){n(false)}else{n()}}f(N);u()}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function f(M){if(!G.playlist[M]){return}G.setActiveMediaProvider(G.playlist[M]);if(G.item!=M){G.item=M;J=true;m.sendEvent(b.api.events.JWPLAYER_PLAYLIST_ITEM,{index:M})}}function H(N){try{f(G.item);var O=G.getMedia();switch(typeof(N)){case"number":O.volume(N);break;case"string":O.volume(parseInt(N,10));break}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function q(N){try{f(G.item);var O=G.getMedia();if(typeof N=="undefined"){O.mute(!G.mute)}else{if(N.toString().toLowerCase()=="true"){O.mute(true)}else{O.mute(false)}}return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function l(N,M){try{G.width=N;G.height=M;g.resize(N,M);m.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:G.width,height:G.height});return true}catch(O){m.sendEvent(b.api.events.JWPLAYER_ERROR,O)}return false}function B(N){try{if(typeof N=="undefined"){G.fullscreen=!G.fullscreen;g.fullscreen(!G.fullscreen)}else{if(N.toString().toLowerCase()=="true"){G.fullscreen=true;g.fullscreen(true)}else{G.fullscreen=false;g.fullscreen(false)}}m.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:G.width,height:G.height});m.sendEvent(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:N});return true}catch(M){m.sendEvent(b.api.events.JWPLAYER_ERROR,M)}return false}function L(M){try{n();G.loadPlaylist(M);f(G.item);return true}catch(N){m.sendEvent(b.api.events.JWPLAYER_ERROR,N)}return false}b.html5.controller.repeatoptions={LIST:"LIST",ALWAYS:"ALWAYS",SINGLE:"SINGLE",NONE:"NONE"};function s(){switch(G.config.repeat.toUpperCase()){case b.html5.controller.repeatoptions.SINGLE:u();break;case b.html5.controller.repeatoptions.ALWAYS:if(G.item==G.playlist.length-1&&!G.config.shuffle){t(0)}else{k()}break;case b.html5.controller.repeatoptions.LIST:if(G.item==G.playlist.length-1&&!G.config.shuffle){n();f(0)}else{k()}break;default:n();break}}var p=[];function F(M){return function(){if(d){x(M,arguments)}else{p.push({method:M,arguments:arguments})}}}function x(O,N){var M=[];for(i=0;i<N.length;i++){M.push(N[i])}O.apply(this,M)}this.play=F(u);this.pause=F(I);this.seek=F(D);this.stop=F(n);this.next=F(k);this.prev=F(j);this.item=F(t);this.setVolume=F(H);this.setMute=F(q);this.resize=F(l);this.setFullscreen=F(B);this.load=F(L);this.playerReady=K}})(jwplayer);(function(a){a.html5.defaultSkin=function(){this.text='<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.0"><settings><setting name="backcolor" value="0xFFFFFF"/><setting name="frontcolor" value="0x000000"/><setting name="lightcolor" value="0x000000"/><setting name="screencolor" value="0x000000"/></settings><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/></settings><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFJJREFUeNrslLENwAAIwxLU/09j5AiOgD5hVQzNAVY8JK4qEfHMIKBnd2+BQlBINaiRtL/aV2rdzYBsM6CIONbI1NZENTr3RwdB2PlnJgJ6BRgA4hwu5Qg5iswAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEhJREFUeNpiYqABYBo1dNRQ+hr6H4jvA3E8NS39j4SpZvh/LJig4YxEGEqy3kET+w+AOGFQRhTJhrEQkGcczfujhg4CQwECDADpTRWU/B3wHQAAAABJRU5ErkJggg=="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiYBgFo2DwA0YC8v/R1P4nRu+ooaOGUtnQUTAKhgIACDAAFCwQCfAJ4gwAAAAASUVORK5CYII="/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEtJREFUeNpiYBgFo2Dog/9QDAPyQHweTYwiQ/2B+D0Wi8g2tB+JTdBQRiIMJVkvEy0iglhDF9Aq9uOpHVEwoE+NJDUKRsFgAAABBgDe2hqZcNNL0AAAAABJRU5ErkJggg=="/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUeNpiYBgFo2Dog/9AfB6I5dHE/lNqKAi/B2J/ahsKw/3EGMpIhKEk66WJoaR6fz61IyqemhEFSlL61ExSo2AUDAYAEGAAiG4hj+5t7M8AAAAASUVORK5CYII="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeNpiYBgFo2AU0Bwwzluw+D8tLWARFhKiqQ9YuLg4aWsBGxs7bS1gZ6e5BWyjSX0UjIKhDgACDABlYQOGh5pYywAAAABJRU5ErkJggg=="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFo2AU0Bww1jc0/aelBSz8/Pw09QELOzs7bS1gY2OjrQWsrKy09gHraFIfBaNgqAOAAAMAvy0DChXHsZMAAAAASUVORK5CYII="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAClJREFUeNpiYBgFo2AU0BwwAvF/WlrARGsfjFow8BaMglEwCugAAAIMAOHfAQunR+XzAAAAAElFTkSuQmCC"/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiZICA/yCCiQEJUJcDEGAAY0gBD1/m7Q0AAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiYBgFIw3MB+L/5Gj8j6yRiRTFyICJXHfTXyMLAXlGati4YDRFDj8AEGAABk8GSqqS4CoAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFgxz8p7bm+cQa+h8LHy7GhEcjIz4bmAjYykiun/8j0fakGPIfTfPgiSr6aB4FVAcAAQYAWdwR1G1Wd2gAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGpJREFUeNpi/P//PwM9ABMDncCoRYPfIqqDZcuW1UPp/6AUDcNM1DQYKtRAlaAj1mCSLSLXYIIWUctgDItoZfDA5aOoqKhGEANIM9LVR7SymGDQUctikuOIXkFNdhHEOFrDjlpEd4sAAgwAriRMub95fu8AAAAASUVORK5CYII="/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFtJREFUeNpi/P//PwM9ABMDncCoRYPfIlqAeij9H5SiYZiqBqPTlFqE02BKLSLaYFItIttgQhZRzWB8FjENiuRJ7aAbsMQwYMl7wDIsWUUQ42gNO2oR3S0CCDAAKhKq6MLLn8oAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUeNpiYBgFo2DQA0YC8v/xqP1PjDlMRDrEgUgxkgHIlfZoriVGjmzLsLFHAW2D6D8eA/9Tw7L/BAwgJE90PvhPpNgoGAVDEQAEGAAMdhTyXcPKcAAAAABJRU5ErkJggg=="/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEZJREFUeNpiYBgFo2DIg/9UUkOUAf8JiFFsyX88fJyAkcQgYMQjNkzBoAgiezyRbE+tFGSPxQJ7auYBmma0UTAKBhgABBgAJAEY6zON61sAAAAASUVORK5CYII="/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC"/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg=="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNrs1jEOgCAMBVAg7t5/8qaoIy4uoobyXsLCxA+0NCUAAADGUWvdQoQ41x4ixNBB2hBvBskdD3w5ZCkl3+33VqI0kjBBlh9rp+uTcyOP33TnolfsU85XX3yIRpQph8ZQY3wTZtU5AACASA4BBgDHoVuY1/fvOQAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWlJREFUeNrsl+1twjAQhsHq/7BBYQLYIBmBDcoGMAIjtBPQTcII2SDtBDBBwrU6pGsUO7YbO470PtKJkz9iH++d4ywWAAAAAABgljRNsyWr2bZzDuJG1rLdZhcMbTjrBCGDyUKsqQLFciJb9bSvuG/WagRVRUVUI6gqy5HVeKWfSgRyJruKIU//TrZTSn2nmlaXThrloi/v9F2STC1W4+Aw5cBzkquRc09bofFNc6YLxEON0VUZS5FPTftO49vMjRsIF3RhOGr7/D/pJw+FKU+q0vDyq8W42jCunDqI3LC5XxNj2wHLU1XjaRnb0Lhykhqhhd8MtSF5J9tbjCv4mXGvKJz/65FF/qJryyaaIvzP2QRxZTX2nTuXjvV/VPFSwyLnW7mpH99yTh1FEVro6JBSd40/pMrRdV8vPtcKl28T2pT8TnFZ4yNosct3Q0io6JfBiz1FlGdqVQH3VHnepAEAAAAAADDzEGAAcTwB10jWgxcAAAAASUVORK5CYII="/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuhJREFUeNrsWr9rU1EUznuNGqvFQh1ULOhiBx0KDtIuioO4pJuik3FxFfUPaAV1FTdx0Q5d2g4FFxehTnEpZHFoBy20tCIWtGq0TZP4HfkeHB5N8m6Sl/sa74XDybvv3vvOd8/Pe4lXrVZT3dD8VJc0B8QBcUAcEAfESktHGeR5XtMfqFQq/f92zPe/NbtGlKTdCY30kuxrpMGO94BlQCXs+rbh3ONgA6BlzP1p20d80gEI5hmA2A92Qua1Q2PtAFISM+bvjMG8U+Q7oA3rQGASwrYCU6WpNdLGYbA+Pq5jjXIiwi8EEa2UDbQSaKOIuV+SlkcCrfjY8XTI9EpKGwP0C2kru2hLtHqa4zoXtZRWyvi4CLwv9Opr6Hkn6A9HKgEANsQ1iqC3Ub/vRUk2JgmRkatK36kVrnt0qObunwUdUUMXMWYpakJsO5Am8tAw2GBIgwWA+G2S2dMpiw0gDioQRQJoKhRb1QiDwlHZUABYbaXWsm5ae6loTE4ZDxN4CZar8foVzOJ2iyZ2kWF3t7YIevffaMT5yJ70kQb2fQ1sE5SHr2wazs2wgMxgbsEKEAgxAvZUJbQLBGTSBMgNrncJbA6AljtS/eKDJ0Ez+DmrQEzXS2h1Ck25kAg0IZcUOaydCy4sYnN2fOA+2AP16gNoHALlQ+fwH7XO4CxLenUpgj4xr6ugY2roPMbMx+Xs18m/E8CVEIhxsNeg83XWOAN6grG3lGbk8uE5fr4B/WH3cJw+co/l9nTYsSGYCJ/lY5/qv0thn6nrIWmjeJcPSnWOeY++AkF8tpJHIMAUs/MaBBpj3znZfQo5psY+ZrG4gv5HickjEOymKjEeRpgyST6IuZcTcWbnjcgdPi5ghxciRKsl1lDSsgwA1i8fssonJgzmTSqfGUkCENndNdAL7PS6QQ7ZYISTo+1qq0LEWjTWcvY4isa4z+yfQB+7ooyHVg5RI7/i1Ijn/vnggDggDogD4oC00P4KMACd/juEHOrS4AAAAABJRU5ErkJggg=="/></elements></component><component name="dock"><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFBJREFUeNrs0cEJACAQA8Eofu0fu/W6EM5ZSAFDRpKTBs00CQQEBAQEBAQEBAQEBAQEBATkK8iqbY+AgICAgICAgICAgICAgICAgIC86QowAG5PAQzEJ0lKAAAAAElFTkSuQmCC"/></elements></component><component name="playlist"><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNrs2NEJwCAMBcBYuv/CFuIE9VN47WWCR7iocXR3pdWdGPqqwIoMjYfQeAiNh9B4JHc6MHQVHnjggQceeOCBBx77TifyeOY0iHi8DqIdEY8dD5cL094eePzINB5CO/LwcOTptNB4CP25L4TIbZzpU7UEGAA5wz1uF5rF9AAAAABJRU5ErkJggg=="/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUeNrsy6ENACAMAMHClp2wYxZLAg5Fcu9e3OjuOKqqfTMzbs14CIZhGIZhGIZhGP4VLwEGAK/BBnVFpB0oAAAAAElFTkSuQmCC"/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNrsy7ENACAMBLE8++8caFFKKiRffU53112SGs3ttOohGIZhGIZhGIZh+Fe8BRgAiaUGde6NOSEAAAAASUVORK5CYII="/></elements></component></components></skin>';this.xml=null;if(window.DOMParser){parser=new DOMParser();this.xml=parser.parseFromString(this.text,"text/xml")}else{this.xml=new ActiveXObject("Microsoft.XMLDOM");this.xml.async="false";this.xml.loadXML(this.text)}return this}})(jwplayer);(function(a){_utils=a.utils;_css=_utils.css;_hide=function(b){_css(b,{display:"none"})};_show=function(b){_css(b,{display:"block"})};a.html5.display=function(k,G){var j={icons:true,showmute:false};var Q=_utils.extend({},j,G);var h=k;var P={};var e;var u;var w;var N;var s;var I;var A;var J=!_utils.exists(h.skin.getComponentSettings("display").bufferrotation)?15:parseInt(h.skin.getComponentSettings("display").bufferrotation,10);var q=!_utils.exists(h.skin.getComponentSettings("display").bufferinterval)?100:parseInt(h.skin.getComponentSettings("display").bufferinterval,10);var z=-1;var t="";var K=true;var d;var g=false;var n=false;var H=new a.html5.eventdispatcher();_utils.extend(this,H);var D={display:{style:{cursor:"pointer",top:0,left:0,overflow:"hidden"},click:m},display_icon:{style:{cursor:"pointer",position:"absolute",top:((h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display","playIcon").height)/2),left:((h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display","playIcon").width)/2),border:0,margin:0,padding:0,zIndex:3,display:"none"}},display_iconBackground:{style:{cursor:"pointer",position:"absolute",top:((u-h.skin.getSkinElement("display","background").height)/2),left:((e-h.skin.getSkinElement("display","background").width)/2),border:0,backgroundImage:(["url(",h.skin.getSkinElement("display","background").src,")"]).join(""),width:h.skin.getSkinElement("display","background").width,height:h.skin.getSkinElement("display","background").height,margin:0,padding:0,zIndex:2,display:"none"}},display_image:{style:{display:"none",width:e,height:u,position:"absolute",cursor:"pointer",left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1}},display_text:{style:{zIndex:4,position:"relative",opacity:0.8,backgroundColor:parseInt("000000",16),color:parseInt("ffffff",16),textAlign:"center",fontFamily:"Arial,sans-serif",padding:"0 5px",fontSize:14}}};h.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,p);h.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,p);h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,p);h.jwAddEventListener(a.api.events.JWPLAYER_ERROR,o);L();function L(){P.display=C("div","display");P.display_text=C("div","display_text");P.display.appendChild(P.display_text);P.display_image=C("img","display_image");P.display_image.onerror=function(R){_hide(P.display_image)};P.display_image.onload=y;P.display_icon=C("div","display_icon");P.display_iconBackground=C("div","display_iconBackground");P.display.appendChild(P.display_image);P.display_iconBackground.appendChild(P.display_icon);P.display.appendChild(P.display_iconBackground);f();setTimeout((function(){n=true;if(Q.icons.toString()=="true"){F()}}),1)}this.getDisplayElement=function(){return P.display};this.resize=function(S,R){_css(P.display,{width:S,height:R});_css(P.display_text,{width:(S-10),top:((R-P.display_text.getBoundingClientRect().height)/2)});_css(P.display_iconBackground,{top:((R-h.skin.getSkinElement("display","background").height)/2),left:((S-h.skin.getSkinElement("display","background").width)/2)});if(e!=S||u!=R){e=S;u=R;d=undefined;F()}c();p({})};this.show=function(){if(g){g=false;r(h.jwGetState())}};this.hide=function(){if(!g){B();g=true}};function y(R){w=P.display_image.naturalWidth;N=P.display_image.naturalHeight;c()}function c(){_utils.stretch(h.jwGetStretching(),P.display_image,e,u,w,N)}function C(R,T){var S=document.createElement(R);S.id=h.id+"_jwplayer_"+T;_css(S,D[T].style);return S}function f(){for(var R in P){if(_utils.exists(D[R].click)){P[R].onclick=D[R].click}}}function m(R){if(typeof R.preventDefault!="undefined"){R.preventDefault()}else{R.returnValue=false}if(h.jwGetState()!=a.api.events.state.PLAYING){h.jwPlay()}else{h.jwPause()}}function O(R){if(A){B();return}P.display_icon.style.backgroundImage=(["url(",h.skin.getSkinElement("display",R).src,")"]).join("");_css(P.display_icon,{width:h.skin.getSkinElement("display",R).width,height:h.skin.getSkinElement("display",R).height,top:(h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display",R).height)/2,left:(h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display",R).width)/2});b();if(_utils.exists(h.skin.getSkinElement("display",R+"Over"))){P.display_icon.onmouseover=function(S){P.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",R+"Over").src,")"].join("")};P.display_icon.onmouseout=function(S){P.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",R).src,")"].join("")}}else{P.display_icon.onmouseover=null;P.display_icon.onmouseout=null}}function B(){if(Q.icons.toString()=="true"){_hide(P.display_icon);_hide(P.display_iconBackground);M()}}function b(){if(!g&&Q.icons.toString()=="true"){_show(P.display_icon);_show(P.display_iconBackground);F()}}function o(R){A=true;B();P.display_text.innerHTML=R.error;_show(P.display_text);P.display_text.style.top=((u-P.display_text.getBoundingClientRect().height)/2)+"px"}function E(){P.display_image.style.display="none"}function p(R){if((R.type==a.api.events.JWPLAYER_PLAYER_STATE||R.type==a.api.events.JWPLAYER_PLAYLIST_ITEM)&&A){A=false;_hide(P.display_text)}var S=h.jwGetState();if(S==t){return}t=S;if(z>=0){clearTimeout(z)}if(K||h.jwGetState()==a.api.events.state.PLAYING||h.jwGetState()==a.api.events.state.PAUSED){r(h.jwGetState())}else{z=setTimeout(l(h.jwGetState()),500)}}function l(R){return(function(){r(R)})}function r(R){if(_utils.exists(I)){clearInterval(I);I=null;_utils.animations.rotate(P.display_icon,0)}switch(R){case a.api.events.state.BUFFERING:if(_utils.isIOS()){E();B()}else{if(h.jwGetPlaylist()[h.jwGetItem()].provider=="sound"){v()}s=0;I=setInterval(function(){s+=J;_utils.animations.rotate(P.display_icon,s%360)},q);O("bufferIcon");K=true}break;case a.api.events.state.PAUSED:if(!_utils.isIOS()){if(h.jwGetPlaylist()[h.jwGetItem()].provider!="sound"){_css(P.display_image,{background:"transparent no-repeat center center"})}O("playIcon");K=true}break;case a.api.events.state.IDLE:if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].image){v()}else{E()}O("playIcon");K=true;break;default:if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].provider=="sound"){if(_utils.isIOS()){E();K=false}else{v()}}else{E();K=false}if(h.jwGetMute()&&Q.showmute){O("muteIcon")}else{B()}break}z=-1}function v(){if(h.jwGetPlaylist()[h.jwGetItem()]&&h.jwGetPlaylist()[h.jwGetItem()].image){_css(P.display_image,{display:"block"});P.display_image.src=_utils.getAbsolutePath(h.jwGetPlaylist()[h.jwGetItem()].image)}}function x(R){return function(){if(!n){return}if(!g&&d!=R){d=R;H.sendEvent(R,{component:"display",boundingRect:_utils.getDimensions(P.display_iconBackground)})}}}var F=x(a.api.events.JWPLAYER_COMPONENT_SHOW);var M=x(a.api.events.JWPLAYER_COMPONENT_HIDE);return this}})(jwplayer);(function(a){_css=a.utils.css;a.html5.dock=function(p,u){function q(){return{align:a.html5.view.positions.RIGHT}}var k=a.utils.extend({},q(),u);if(k.align=="FALSE"){return}var f={};var s=[];var g;var v;var d=false;var t=false;var e={x:0,y:0,width:0,height:0};var r;var j=new a.html5.eventdispatcher();_utils.extend(this,j);var m=document.createElement("div");m.id=p.id+"_jwplayer_dock";p.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,l);this.getDisplayElement=function(){return m};this.setButton=function(A,x,y,z){if(!x&&f[A]){a.utils.arrays.remove(s,A);m.removeChild(f[A].div);delete f[A]}else{if(x){if(!f[A]){f[A]={}}f[A].handler=x;f[A].outGraphic=y;f[A].overGraphic=z;if(!f[A].div){s.push(A);f[A].div=document.createElement("div");f[A].div.style.position="relative";m.appendChild(f[A].div);f[A].div.appendChild(document.createElement("img"));f[A].div.childNodes[0].style.position="absolute";f[A].div.childNodes[0].style.left=0;f[A].div.childNodes[0].style.top=0;f[A].div.childNodes[0].style.zIndex=10;f[A].div.childNodes[0].style.cursor="pointer";f[A].div.appendChild(document.createElement("img"));f[A].div.childNodes[1].style.position="absolute";f[A].div.childNodes[1].style.left=0;f[A].div.childNodes[1].style.top=0;if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}f[A].div.childNodes[1].style.zIndex=9;f[A].div.childNodes[1].style.cursor="pointer";f[A].div.onmouseover=function(){if(f[A].overGraphic){f[A].div.childNodes[0].src=f[A].overGraphic}if(p.skin.getSkinElement("dock","buttonOver")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","buttonOver").src}};f[A].div.onmouseout=function(){if(f[A].outGraphic){f[A].div.childNodes[0].src=f[A].outGraphic}if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}};if(f[A].overGraphic){f[A].div.childNodes[0].src=f[A].overGraphic}if(f[A].outGraphic){f[A].div.childNodes[0].src=f[A].outGraphic}if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}}if(x){f[A].div.onclick=function(B){B.preventDefault();a(p.id).callback(A);if(f[A].overGraphic){f[A].div.childNodes[0].src=f[A].overGraphic}if(p.skin.getSkinElement("dock","button")){f[A].div.childNodes[1].src=p.skin.getSkinElement("dock","button").src}}}}}h(g,v)};function h(x,J){if(s.length>0){var y=10;var I=y;var F=-1;var G=p.skin.getSkinElement("dock","button").height;var E=p.skin.getSkinElement("dock","button").width;var C=x-E-y;var H,B;if(k.align==a.html5.view.positions.LEFT){F=1;C=y}for(var z=0;z<s.length;z++){var K=Math.floor(I/J);if((I+G+y)>((K+1)*J)){I=((K+1)*J)+y;K=Math.floor(I/J)}var A=f[s[z]].div;A.style.top=(I%J)+"px";A.style.left=(C+(p.skin.getSkinElement("dock","button").width+y)*K*F)+"px";var D={x:a.utils.parseDimension(A.style.left),y:a.utils.parseDimension(A.style.top),width:E,height:G};if(!H||(D.x<=H.x&&D.y<=H.y)){H=D}if(!B||(D.x>=B.x&&D.y>=B.y)){B=D}I+=p.skin.getSkinElement("dock","button").height+y}e={x:H.x,y:H.y,width:B.x-H.x+B.width,height:H.y-B.y+B.height}}if(t!=p.jwGetFullscreen()||g!=x||v!=J){g=x;v=J;t=p.jwGetFullscreen();r=undefined;setTimeout(n,1)}}function b(x){return function(){if(!d&&r!=x&&s.length>0){r=x;j.sendEvent(x,{component:"dock",boundingRect:e})}}}function l(x){if(a.utils.isIOS()){switch(x.newstate){case a.api.events.state.IDLE:o();break;default:c();break}}}var n=b(a.api.events.JWPLAYER_COMPONENT_SHOW);var w=b(a.api.events.JWPLAYER_COMPONENT_HIDE);this.resize=h;var o=function(){_css(m,{display:"block"});if(d){d=false;n()}};var c=function(){_css(m,{display:"none"});if(!d){w();d=true}};this.hide=c;this.show=o;return this}})(jwplayer);(function(a){a.html5.eventdispatcher=function(d,b){var c=new a.events.eventdispatcher(b);a.utils.extend(this,c);this.sendEvent=function(e,f){if(!a.utils.exists(f)){f={}}a.utils.extend(f,{id:d,version:a.version,type:e});c.sendEvent(e,f)}}})(jwplayer);(function(a){var b={prefix:"http://l.longtailvideo.com/html5/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:5,hide:true,position:"bottom-left"};_css=a.utils.css;a.html5.logo=function(n,r){var q=n;var u;var d;var t;var h=false;g();function g(){o();c();l()}function o(){if(b.prefix){var v=n.version.split(/\W/).splice(0,2).join("/");if(b.prefix.indexOf(v)<0){b.prefix+=v+"/"}}if(r.position==a.html5.view.positions.OVER){r.position=b.position}d=a.utils.extend({},b)}function c(){t=document.createElement("img");t.id=q.id+"_jwplayer_logo";t.style.display="none";t.onload=function(v){_css(t,k());q.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,j);p()};if(!d.file){return}if(d.file.indexOf("http://")===0){t.src=d.file}else{t.src=d.prefix+d.file}}if(!d.file){return}this.resize=function(w,v){};this.getDisplayElement=function(){return t};function l(){if(d.link){t.onmouseover=f;t.onmouseout=p;t.onclick=s}else{this.mouseEnabled=false}}function s(v){if(typeof v!="undefined"){v.stopPropagation()}if(!h){return}q.jwPause();q.jwSetFullscreen(false);if(d.link){window.open(d.link,"_top")}return}function p(v){if(d.link&&h){t.style.opacity=d.out}return}function f(v){if(d.hide.toString()=="true"&&h){t.style.opacity=d.over}return}function k(){var x={textDecoration:"none",position:"absolute",cursor:"pointer"};x.display=(d.hide.toString()=="true")?"none":"block";var w=d.position.toLowerCase().split("-");for(var v in w){x[w[v]]=d.margin}return x}function m(){if(d.hide.toString()=="true"){t.style.display="block";t.style.opacity=0;a.utils.fadeTo(t,d.out,0.1,parseFloat(t.style.opacity));u=setTimeout(function(){e()},d.timeout*1000)}h=true}function e(){h=false;if(d.hide.toString()=="true"){a.utils.fadeTo(t,0,0.1,parseFloat(t.style.opacity))}}function j(v){if(v.newstate==a.api.events.state.BUFFERING){clearTimeout(u);m()}}return this}})(jwplayer);(function(a){var c={ended:a.api.events.state.IDLE,playing:a.api.events.state.PLAYING,pause:a.api.events.state.PAUSED,buffering:a.api.events.state.BUFFERING};var e=a.utils;var b=e.css;var d=e.isIOS();a.html5.mediavideo=function(h,s){var r={abort:n,canplay:k,canplaythrough:k,durationchange:G,emptied:n,ended:k,error:u,loadeddata:G,loadedmetadata:G,loadstart:k,pause:k,play:n,playing:k,progress:v,ratechange:n,seeked:k,seeking:k,stalled:k,suspend:k,timeupdate:D,volumechange:n,waiting:k,canshowcurrentframe:n,dataunavailable:n,empty:n,load:z,loadedfirstframe:n};var j=new a.html5.eventdispatcher();e.extend(this,j);var y=h,l=s,m,B,A,x,f,H=false,C,p,q;o();this.load=function(J,K){if(typeof K=="undefined"){K=true}x=J;e.empty(m);q=0;if(J.levels&&J.levels.length>0){if(J.levels.length==1){m.src=J.levels[0].file}else{if(m.src){m.removeAttribute("src")}for(var I=0;I<J.levels.length;I++){var L=m.ownerDocument.createElement("source");L.src=J.levels[I].file;m.appendChild(L);q++}}}else{m.src=J.file}if(d){if(J.image){m.poster=J.image}m.controls="controls";m.style.display="block"}C=p=A=false;y.buffer=0;if(!e.exists(J.start)){J.start=0}y.duration=J.duration;j.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);if((!d&&J.levels.length==1)||!H){m.load()}H=false;if(K){E(a.api.events.state.BUFFERING);j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});this.play()}};this.play=function(){if(B!=a.api.events.state.PLAYING){t();if(p){E(a.api.events.state.PLAYING)}else{E(a.api.events.state.BUFFERING)}m.play()}};this.pause=function(){m.pause();E(a.api.events.state.PAUSED)};this.seek=function(I){if(!(y.duration<=0||isNaN(y.duration))&&!(y.position<=0||isNaN(y.position))){m.currentTime=I;m.play()}};_stop=this.stop=function(I){if(!e.exists(I)){I=true}g();if(I){m.style.display="none";p=false;var J=navigator.userAgent;if(J.match(/chrome/i)){m.src=undefined}else{if(J.match(/safari/i)){m.removeAttribute("src")}else{m.src=""}}m.removeAttribute("controls");m.removeAttribute("poster");e.empty(m);m.load();H=true;if(m.webkitSupportsFullscreen){try{m.webkitExitFullscreen()}catch(K){}}}E(a.api.events.state.IDLE)};this.fullscreen=function(I){if(I===true){this.resize("100%","100%")}else{this.resize(y.config.width,y.config.height)}};this.resize=function(J,I){if(false){b(l,{width:J,height:I})}j.sendEvent(a.api.events.JWPLAYER_MEDIA_RESIZE,{fullscreen:y.fullscreen,width:J,hieght:I})};this.volume=function(I){if(!d){m.volume=I/100;y.volume=I;j.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(I)})}};this.mute=function(I){if(!d){m.muted=I;y.mute=I;j.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE,{mute:I})}};this.getDisplayElement=function(){return m};this.hasChrome=function(){return false};function o(){m=document.createElement("video");B=a.api.events.state.IDLE;for(var I in r){m.addEventListener(I,function(J){if(e.exists(J.target.parentNode)){r[J.type](J)}},true)}m.setAttribute("x-webkit-airplay","allow");if(l.parentNode){l.parentNode.replaceChild(m,l)}if(!m.id){m.id=l.id}}function E(I){if(I==a.api.events.state.PAUSED&&B==a.api.events.state.IDLE){return}if(B!=I){var J=B;y.state=B=I;j.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE,{oldstate:J,newstate:I})}}function n(I){}function v(K){var J;if(e.exists(K)&&K.lengthComputable&&K.total){J=K.loaded/K.total*100}else{if(e.exists(m.buffered)&&(m.buffered.length>0)){var I=m.buffered.length-1;if(I>=0){J=m.buffered.end(I)/m.duration*100}}}if(p===false&&B==a.api.events.state.BUFFERING){j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);p=true}if(!C){if(J==100){C=true}if(e.exists(J)&&(J>y.buffer)){y.buffer=Math.round(J);j.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(J)})}}}function D(J){if(e.exists(J)&&e.exists(J.target)){if(!isNaN(J.target.duration)&&(isNaN(y.duration)||y.duration<1)){if(J.target.duration==Infinity){y.duration=0}else{y.duration=Math.round(J.target.duration*10)/10}}if(!A&&m.readyState>0){m.style.display="block";E(a.api.events.state.PLAYING)}if(B==a.api.events.state.PLAYING){if(!A&&m.readyState>0){A=true;try{if(m.currentTime<x.start){m.currentTime=x.start}}catch(I){}m.volume=y.volume/100;m.muted=y.mute}y.position=y.duration>0?(Math.round(J.target.currentTime*10)/10):0;j.sendEvent(a.api.events.JWPLAYER_MEDIA_TIME,{position:y.position,duration:y.duration});if(y.position>=y.duration&&(y.position>0||y.duration>0)){w()}}}v(J)}function z(I){}function k(I){if(c[I.type]){if(I.type=="ended"){w()}else{E(c[I.type])}}}function G(I){var J={height:I.target.videoHeight,width:I.target.videoWidth,duration:Math.round(I.target.duration*10)/10};if((y.duration===0||isNaN(y.duration))&&I.target.duration!=Infinity){y.duration=Math.round(I.target.duration*10)/10}j.sendEvent(a.api.events.JWPLAYER_MEDIA_META,{metadata:J})}function u(K){if(B==a.api.events.state.IDLE){return}var J="There was an error: ";if((K.target.error&&K.target.tagName.toLowerCase()=="video")||K.target.parentNode.error&&K.target.parentNode.tagName.toLowerCase()=="video"){var I=!e.exists(K.target.error)?K.target.parentNode.error:K.target.error;switch(I.code){case I.MEDIA_ERR_ABORTED:J="You aborted the video playback: ";break;case I.MEDIA_ERR_NETWORK:J="A network error caused the video download to fail part-way: ";break;case I.MEDIA_ERR_DECODE:J="The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";break;case I.MEDIA_ERR_SRC_NOT_SUPPORTED:J="The video could not be loaded, either because the server or network failed or because the format is not supported: ";break;default:J="An unknown error occurred: ";break}}else{if(K.target.tagName.toLowerCase()=="source"){q--;if(q>0){return}J="The video could not be loaded, either because the server or network failed or because the format is not supported: "}else{e.log("An unknown error occurred.  Continuing...");return}}_stop(false);J+=F();_error=true;j.sendEvent(a.api.events.JWPLAYER_ERROR,{error:J});return}function F(){var K="";for(var J in x.levels){var I=x.levels[J];var L=l.ownerDocument.createElement("source");K+=a.utils.getAbsolutePath(I.file);if(J<(x.levels.length-1)){K+=", "}}return K}function t(){if(!e.exists(f)){f=setInterval(function(){v()},100)}}function g(){clearInterval(f);f=null}function w(){if(B!=a.api.events.state.IDLE){_stop(false);j.sendEvent(a.api.events.JWPLAYER_MEDIA_COMPLETE)}}}})(jwplayer);(function(a){var c={ended:a.api.events.state.IDLE,playing:a.api.events.state.PLAYING,pause:a.api.events.state.PAUSED,buffering:a.api.events.state.BUFFERING};var b=a.utils.css;a.html5.mediayoutube=function(j,e){var f=new a.html5.eventdispatcher();a.utils.extend(this,f);var l=j;var h=document.getElementById(e.id);var g=a.api.events.state.IDLE;var n,m;function k(p){if(g!=p){var q=g;l.state=p;g=p;f.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE,{oldstate:q,newstate:p})}}this.getDisplayElement=function(){return h};this.play=function(){if(g==a.api.events.state.IDLE){f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100});f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);k(a.api.events.state.PLAYING)}else{if(g==a.api.events.state.PAUSED){k(a.api.events.state.PLAYING)}}};this.pause=function(){k(a.api.events.state.PAUSED)};this.seek=function(p){};this.stop=function(p){if(!_utils.exists(p)){p=true}l.position=0;k(a.api.events.state.IDLE);if(p){b(h,{display:"none"})}};this.volume=function(p){l.volume=p;f.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(p)})};this.mute=function(p){h.muted=p;l.mute=p;f.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE,{mute:p})};this.resize=function(q,p){if(q*p>0&&n){n.width=m.width=q;n.height=m.height=p}f.sendEvent(a.api.events.JWPLAYER_MEDIA_RESIZE,{fullscreen:l.fullscreen,width:q,height:p})};this.fullscreen=function(p){if(p===true){this.resize("100%","100%")}else{this.resize(l.config.width,l.config.height)}};this.load=function(p){o(p);b(n,{display:"block"});k(a.api.events.state.BUFFERING);f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});f.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);this.play()};this.hasChrome=function(){return(g!=a.api.events.state.IDLE)};function o(v){var s=v.levels[0].file;s=["http://www.youtube.com/v/",d(s),"&amp;hl=en_US&amp;fs=1&autoplay=1"].join("");n=document.createElement("object");n.id=h.id;n.style.position="absolute";var u={movie:s,allowfullscreen:"true",allowscriptaccess:"always"};for(var p in u){var t=document.createElement("param");t.name=p;t.value=u[p];n.appendChild(t)}m=document.createElement("embed");n.appendChild(m);var q={src:s,type:"application/x-shockwave-flash",allowfullscreen:"true",allowscriptaccess:"always",width:n.width,height:n.height};for(var r in q){m.setAttribute(r,q[r])}n.appendChild(m);n.style.zIndex=2147483000;if(h!=n&&h.parentNode){h.parentNode.replaceChild(n,h)}h=n}function d(q){var p=q.split(/\?|\#\!/);var s="";for(var r=0;r<p.length;r++){if(p[r].substr(0,2)=="v="){s=p[r].substr(2)}}if(s==""){if(q.indexOf("/v/")>=0){s=q.substr(q.indexOf("/v/")+3)}else{if(q.indexOf("youtu.be")>=0){s=q.substr(q.indexOf("youtu.be/")+9)}else{s=q}}}if(s.indexOf("?")>-1){s=s.substr(0,s.indexOf("?"))}if(s.indexOf("&")>-1){s=s.substr(0,s.indexOf("&"))}return s}this.embed=m;return this}})(jwplayer);(function(jwplayer){var _configurableStateVariables=["width","height","start","duration","volume","mute","fullscreen","item","plugins","stretching"];jwplayer.html5.model=function(api,container,options){var _api=api;var _container=container;var _model={id:_container.id,playlist:[],state:jwplayer.api.events.state.IDLE,position:0,buffer:0,config:{width:480,height:320,item:-1,skin:undefined,file:undefined,image:undefined,start:0,duration:0,bufferlength:5,volume:90,mute:false,fullscreen:false,repeat:"",stretching:jwplayer.utils.stretching.UNIFORM,autostart:false,debug:undefined,screencolor:undefined}};var _media;var _eventDispatcher=new jwplayer.html5.eventdispatcher();var _components=["display","logo","controlbar","playlist","dock"];jwplayer.utils.extend(_model,_eventDispatcher);for(var option in options){if(typeof options[option]=="string"){var type=/color$/.test(option)?"color":null;options[option]=jwplayer.utils.typechecker(options[option],type)}var config=_model.config;var path=option.split(".");for(var edge in path){if(edge==path.length-1){config[path[edge]]=options[option]}else{if(!jwplayer.utils.exists(config[path[edge]])){config[path[edge]]={}}config=config[path[edge]]}}}for(var index in _configurableStateVariables){var configurableStateVariable=_configurableStateVariables[index];_model[configurableStateVariable]=_model.config[configurableStateVariable]}var pluginorder=_components.concat([]);if(jwplayer.utils.exists(_model.plugins)){if(typeof _model.plugins=="string"){var userplugins=_model.plugins.split(",");for(var userplugin in userplugins){if(typeof userplugins[userplugin]=="string"){pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g,""))}}}}if(jwplayer.utils.isIOS()){pluginorder=["display","logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}else{if(_model.config.chromeless){pluginorder=["logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}}_model.plugins={order:pluginorder,config:{},object:{}};if(typeof _model.config.components!="undefined"){for(var component in _model.config.components){_model.plugins.config[component]=_model.config.components[component]}}for(var pluginIndex in _model.plugins.order){var pluginName=_model.plugins.order[pluginIndex];var pluginConfig=!jwplayer.utils.exists(_model.plugins.config[pluginName])?{}:_model.plugins.config[pluginName];_model.plugins.config[pluginName]=!jwplayer.utils.exists(_model.plugins.config[pluginName])?pluginConfig:jwplayer.utils.extend(_model.plugins.config[pluginName],pluginConfig);if(!jwplayer.utils.exists(_model.plugins.config[pluginName].position)){if(pluginName=="playlist"){_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.NONE}else{_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.OVER}}else{_model.plugins.config[pluginName].position=_model.plugins.config[pluginName].position.toString().toUpperCase()}}if(typeof _model.plugins.config.dock!="undefined"){if(typeof _model.plugins.config.dock!="object"){var position=_model.plugins.config.dock.toString().toUpperCase();_model.plugins.config.dock={position:position}}if(typeof _model.plugins.config.dock.position!="undefined"){_model.plugins.config.dock.align=_model.plugins.config.dock.position;_model.plugins.config.dock.position=jwplayer.html5.view.positions.OVER}}function _loadExternal(playlistfile){var loader=new jwplayer.html5.playlistloader();loader.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,function(evt){_model.playlist=new jwplayer.html5.playlist(evt);_loadComplete(true)});loader.addEventListener(jwplayer.api.events.JWPLAYER_ERROR,function(evt){_model.playlist=new jwplayer.html5.playlist({playlist:[]});_loadComplete(false)});loader.load(playlistfile)}function _loadComplete(){if(_model.config.shuffle){_model.item=_getShuffleItem()}else{if(_model.config.item>=_model.playlist.length){_model.config.item=_model.playlist.length-1}else{if(_model.config.item<0){_model.config.item=0}}_model.item=_model.config.item}_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:_model.playlist});_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM,{index:_model.item})}_model.loadPlaylist=function(arg){var input;if(typeof arg=="string"){if(arg.indexOf("[")==0||arg.indexOf("{")=="0"){try{input=eval(arg)}catch(err){input=arg}}else{input=arg}}else{input=arg}var config;switch(jwplayer.utils.typeOf(input)){case"object":config=input;break;case"array":config={playlist:input};break;default:_loadExternal(input);return;break}_model.playlist=new jwplayer.html5.playlist(config);if(jwplayer.utils.extension(_model.playlist[0].file)=="xml"){_loadExternal(_model.playlist[0].file)}else{_loadComplete()}};function _getShuffleItem(){var result=null;if(_model.playlist.length>1){while(!jwplayer.utils.exists(result)){result=Math.floor(Math.random()*_model.playlist.length);if(result==_model.item){result=null}}}else{result=0}return result}function forward(evt){if(evt.type==jwplayer.api.events.JWPLAYER_MEDIA_LOADED){_container=_media.getDisplayElement()}_eventDispatcher.sendEvent(evt.type,evt)}var _mediaProviders={};_model.setActiveMediaProvider=function(playlistItem){if(playlistItem.provider=="audio"){playlistItem.provider="sound"}var provider=playlistItem.provider;var current=_media?_media.getDisplayElement():null;if(provider=="sound"||provider=="http"||provider==""){provider="video"}if(!jwplayer.utils.exists(_mediaProviders[provider])){switch(provider){case"video":_media=new jwplayer.html5.mediavideo(_model,current?current:_container);break;case"youtube":_media=new jwplayer.html5.mediayoutube(_model,current?current:_container);break}if(!jwplayer.utils.exists(_media)){return false}_media.addGlobalListener(forward);_mediaProviders[provider]=_media}else{if(_media!=_mediaProviders[provider]){if(_media){_media.stop()}_media=_mediaProviders[provider]}}return true};_model.getMedia=function(){return _media};_model.seek=function(pos){_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK,{position:_model.position,offset:pos});return _media.seek(pos)};_model.setupPlugins=function(){if(!jwplayer.utils.exists(_model.plugins)||!jwplayer.utils.exists(_model.plugins.order)||_model.plugins.order.length==0){jwplayer.utils.log("No plugins to set up");return _model}for(var i=0;i<_model.plugins.order.length;i++){try{var pluginName=_model.plugins.order[i];if(jwplayer.utils.exists(jwplayer.html5[pluginName])){if(pluginName=="playlist"){_model.plugins.object[pluginName]=new jwplayer.html5.playlistcomponent(_api,_model.plugins.config[pluginName])}else{_model.plugins.object[pluginName]=new jwplayer.html5[pluginName](_api,_model.plugins.config[pluginName])}}else{_model.plugins.order.splice(plugin,plugin+1)}if(typeof _model.plugins.object[pluginName].addGlobalListener=="function"){_model.plugins.object[pluginName].addGlobalListener(forward)}}catch(err){jwplayer.utils.log("Could not setup "+pluginName)}}};return _model}})(jwplayer);(function(a){a.html5.playlist=function(b){var d=[];if(b.playlist&&b.playlist instanceof Array&&b.playlist.length>0){for(var c in b.playlist){if(!isNaN(parseInt(c))){d.push(new a.html5.playlistitem(b.playlist[c]))}}}else{d.push(new a.html5.playlistitem(b))}return d}})(jwplayer);(function(a){var c={size:180,position:a.html5.view.positions.NONE,itemheight:60,thumbs:true,fontcolor:"#000000",overcolor:"",activecolor:"",backgroundcolor:"#f8f8f8",font:"_sans",fontsize:"",fontstyle:"",fontweight:""};var b={_sans:"Arial, Helvetica, sans-serif",_serif:"Times, Times New Roman, serif",_typewriter:"Courier New, Courier, monospace"};_utils=a.utils;_css=_utils.css;_hide=function(d){_css(d,{display:"none"})};_show=function(d){_css(d,{display:"block"})};a.html5.playlistcomponent=function(r,B){var w=r;var e=a.utils.extend({},c,w.skin.getComponentSettings("playlist"),B);if(e.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[e.position]=="undefined"){return}var x;var l;var C;var d;var g;var f;var k=-1;var h={background:undefined,item:undefined,itemOver:undefined,itemImage:undefined,itemActive:undefined};this.getDisplayElement=function(){return x};this.resize=function(F,D){l=F;C=D;if(w.jwGetFullscreen()){_hide(x)}else{var E={display:"block",width:l,height:C};_css(x,E)}};this.show=function(){_show(x)};this.hide=function(){_hide(x)};function j(){x=document.createElement("div");x.id=w.id+"_jwplayer_playlistcomponent";switch(e.position){case a.html5.view.positions.RIGHT:case a.html5.view.positions.LEFT:x.style.width=e.size+"px";break;case a.html5.view.positions.TOP:case a.html5.view.positions.BOTTOM:x.style.height=e.size+"px";break}A();if(h.item){e.itemheight=h.item.height}x.style.backgroundColor="#C6C6C6";w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,s);w.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,u);w.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,m)}function p(){var D=document.createElement("ul");_css(D,{width:x.style.width,minWidth:x.style.width,height:x.style.height,backgroundColor:e.backgroundcolor,backgroundImage:h.background?"url("+h.background.src+")":"",color:e.fontcolor,listStyle:"none",margin:0,padding:0,fontFamily:b[e.font]?b[e.font]:b._sans,fontSize:(e.fontsize?e.fontsize:11)+"px",fontStyle:e.fontstyle,fontWeight:e.fontweight,overflowY:"auto"});return D}function y(D){return function(){var E=f.getElementsByClassName("item")[D];var F=e.fontcolor;var G=h.item?"url("+h.item.src+")":"";if(D==w.jwGetPlaylistIndex()){if(e.activecolor!==""){F=e.activecolor}if(h.itemActive){G="url("+h.itemActive.src+")"}}_css(E,{color:e.overcolor!==""?e.overcolor:F,backgroundImage:h.itemOver?"url("+h.itemOver.src+")":G})}}function o(D){return function(){var E=f.getElementsByClassName("item")[D];var F=e.fontcolor;var G=h.item?"url("+h.item.src+")":"";if(D==w.jwGetPlaylistIndex()){if(e.activecolor!==""){F=e.activecolor}if(h.itemActive){G="url("+h.itemActive.src+")"}}_css(E,{color:F,backgroundImage:G})}}function q(I){var P=d[I];var O=document.createElement("li");O.className="item";_css(O,{height:e.itemheight,display:"block",cursor:"pointer",backgroundImage:h.item?"url("+h.item.src+")":"",backgroundSize:"100% "+e.itemheight+"px"});O.onmouseover=y(I);O.onmouseout=o(I);var J=document.createElement("div");var F=new Image();var K=0;var L=0;var M=0;if(v()&&(P.image||P["playlist.image"]||h.itemImage)){F.className="image";if(h.itemImage){K=(e.itemheight-h.itemImage.height)/2;L=h.itemImage.width;M=h.itemImage.height}else{L=e.itemheight*4/3;M=e.itemheight}_css(J,{height:M,width:L,"float":"left",styleFloat:"left",cssFloat:"left",margin:"0 5px 0 0",background:"black",overflow:"hidden",margin:K+"px",position:"relative"});_css(F,{position:"relative"});J.appendChild(F);F.onload=function(){a.utils.stretch(a.utils.stretching.FILL,F,L,M,this.naturalWidth,this.naturalHeight)};if(P["playlist.image"]){F.src=P["playlist.image"]}else{if(P.image){F.src=P.image}else{if(h.itemImage){F.src=h.itemImage.src}}}O.appendChild(J)}var E=l-L-K*2;if(C<e.itemheight*d.length){E-=15}var D=document.createElement("div");_css(D,{position:"relative",height:"100%",overflow:"hidden"});var G=document.createElement("span");if(P.duration>0){G.className="duration";_css(G,{fontSize:(e.fontsize?e.fontsize:11)+"px",fontWeight:(e.fontweight?e.fontweight:"bold"),width:"40px",height:e.fontsize?e.fontsize+10:20,lineHeight:24,"float":"right",styleFloat:"right",cssFloat:"right"});G.innerHTML=_utils.timeFormat(P.duration);D.appendChild(G)}var N=document.createElement("span");N.className="title";_css(N,{padding:"5px 5px 0 "+(K?0:"5px"),height:e.fontsize?e.fontsize+10:20,lineHeight:e.fontsize?e.fontsize+10:20,overflow:"hidden","float":"left",styleFloat:"left",cssFloat:"left",width:((P.duration>0)?E-50:E)-10+"px",fontSize:(e.fontsize?e.fontsize:13)+"px",fontWeight:(e.fontweight?e.fontweight:"bold")});N.innerHTML=P?P.title:"";D.appendChild(N);if(P.description){var H=document.createElement("span");H.className="description";_css(H,{display:"block","float":"left",styleFloat:"left",cssFloat:"left",margin:0,paddingLeft:N.style.paddingLeft,paddingRight:N.style.paddingRight,lineHeight:(e.fontsize?e.fontsize+4:16)+"px",overflow:"hidden",position:"relative"});H.innerHTML=P.description;D.appendChild(H)}O.appendChild(D);return O}function s(E){x.innerHTML="";d=w.jwGetPlaylist();if(!d){return}items=[];f=p();for(var F=0;F<d.length;F++){var D=q(F);D.onclick=z(F);f.appendChild(D);items.push(D)}k=w.jwGetPlaylistIndex();o(k)();x.appendChild(f);if(_utils.isIOS()&&window.iScroll){f.style.height=e.itemheight*d.length+"px";var G=new iScroll(x.id)}}function z(D){return function(){w.jwPlaylistItem(D);w.jwPlay(true)}}function n(){f.scrollTop=w.jwGetPlaylistIndex()*e.itemheight}function v(){return e.thumbs.toString().toLowerCase()=="true"}function u(D){if(k>=0){o(k)();k=D.index}o(D.index)();n()}function m(){if(e.position==a.html5.view.positions.OVER){switch(w.jwGetState()){case a.api.events.state.IDLE:_show(x);break;default:_hide(x);break}}}function A(){for(var D in h){h[D]=t(D)}}function t(D){return w.skin.getSkinElement("playlist",D)}j();return this}})(jwplayer);(function(b){b.html5.playlistitem=function(d){var e={author:"",date:"",description:"",image:"",link:"",mediaid:"",tags:"",title:"",provider:"",file:"",streamer:"",duration:-1,start:0,currentLevel:-1,levels:[]};var c=b.utils.extend({},e,d);if(c.type){c.provider=c.type;delete c.type}if(c.levels.length===0){c.levels[0]=new b.html5.playlistitemlevel(c)}if(!c.provider){c.provider=a(c.levels[0])}else{c.provider=c.provider.toLowerCase()}return c};function a(e){if(b.utils.isYouTube(e.file)){return"youtube"}else{var f=b.utils.extension(e.file);var c;if(f&&b.utils.extensionmap[f]){if(f=="m3u8"){return"video"}c=b.utils.extensionmap[f].html5}else{if(e.type){c=e.type}}if(c){var d=c.split("/")[0];if(d=="audio"){return"sound"}else{if(d=="video"){return d}}}}return""}})(jwplayer);(function(a){a.html5.playlistitemlevel=function(b){var d={file:"",streamer:"",bitrate:0,width:0};for(var c in d){if(a.utils.exists(b[c])){d[c]=b[c]}}return d}})(jwplayer);(function(a){a.html5.playlistloader=function(){var c=new a.html5.eventdispatcher();a.utils.extend(this,c);this.load=function(e){a.utils.ajax(e,d,b)};function d(g){var f=[];try{var f=a.utils.parsers.rssparser.parse(g.responseXML.firstChild);c.sendEvent(a.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:new a.html5.playlist({playlist:f})})}catch(h){b("Could not parse the playlist")}}function b(e){c.sendEvent(a.api.events.JWPLAYER_ERROR,{error:e?e:"could not load playlist for whatever reason.  too bad"})}}})(jwplayer);(function(a){a.html5.skin=function(){var b={};var c=false;this.load=function(d,e){new a.html5.skinloader(d,function(f){c=true;b=f;e()},function(){new a.html5.skinloader("",function(f){c=true;b=f;e()})})};this.getSkinElement=function(d,e){if(c){try{return b[d].elements[e]}catch(f){a.utils.log("No such skin component / element: ",[d,e])}}return null};this.getComponentSettings=function(d){if(c){return b[d].settings}return null};this.getComponentLayout=function(d){if(c){return b[d].layout}return null}}})(jwplayer);(function(a){a.html5.skinloader=function(f,p,k){var o={};var c=p;var l=k;var e=true;var j;var n=f;var s=false;function m(){if(typeof n!="string"||n===""){d(a.html5.defaultSkin().xml)}else{a.utils.ajax(a.utils.getAbsolutePath(n),function(t){try{if(a.utils.exists(t.responseXML)){d(t.responseXML);return}}catch(u){h()}d(a.html5.defaultSkin().xml)},function(t){d(a.html5.defaultSkin().xml)})}}function d(y){var E=y.getElementsByTagName("component");if(E.length===0){return}for(var H=0;H<E.length;H++){var C=E[H].getAttribute("name");var B={settings:{},elements:{},layout:{}};o[C]=B;var G=E[H].getElementsByTagName("elements")[0].getElementsByTagName("element");for(var F=0;F<G.length;F++){b(G[F],C)}var z=E[H].getElementsByTagName("settings")[0];if(z&&z.childNodes.length>0){var K=z.getElementsByTagName("setting");for(var P=0;P<K.length;P++){var Q=K[P].getAttribute("name");var I=K[P].getAttribute("value");var x=/color$/.test(Q)?"color":null;o[C].settings[Q]=a.utils.typechecker(I,x)}}var L=E[H].getElementsByTagName("layout")[0];if(L&&L.childNodes.length>0){var M=L.getElementsByTagName("group");for(var w=0;w<M.length;w++){var A=M[w];o[C].layout[A.getAttribute("position")]={elements:[]};for(var O=0;O<A.attributes.length;O++){var D=A.attributes[O];o[C].layout[A.getAttribute("position")][D.name]=D.value}var N=A.getElementsByTagName("*");for(var v=0;v<N.length;v++){var t=N[v];o[C].layout[A.getAttribute("position")].elements.push({type:t.tagName});for(var u=0;u<t.attributes.length;u++){var J=t.attributes[u];o[C].layout[A.getAttribute("position")].elements[v][J.name]=J.value}if(!a.utils.exists(o[C].layout[A.getAttribute("position")].elements[v].name)){o[C].layout[A.getAttribute("position")].elements[v].name=t.tagName}}}}e=false;r()}}function r(){clearInterval(j);if(!s){j=setInterval(function(){q()},100)}}function b(y,x){var w=new Image();var t=y.getAttribute("name");var v=y.getAttribute("src");var A;if(v.indexOf("data:image/png;base64,")===0){A=v}else{var u=a.utils.getAbsolutePath(n);var z=u.substr(0,u.lastIndexOf("/"));A=[z,x,v].join("/")}o[x].elements[t]={height:0,width:0,src:"",ready:false,image:w};w.onload=function(B){g(w,t,x)};w.onerror=function(B){s=true;r();l()};w.src=A}function h(){for(var u in o){var w=o[u];for(var t in w.elements){var x=w.elements[t];var v=x.image;v.onload=null;v.onerror=null;delete x.image;delete w.elements[t]}delete o[u]}}function q(){for(var t in o){if(t!="properties"){for(var u in o[t].elements){if(!o[t].elements[u].ready){return}}}}if(e===false){clearInterval(j);c(o)}}function g(t,v,u){if(o[u]&&o[u].elements[v]){o[u].elements[v].height=t.height;o[u].elements[v].width=t.width;o[u].elements[v].src=t.src;o[u].elements[v].ready=true;r()}else{a.utils.log("Loaded an image for a missing element: "+u+"."+v)}}m()}})(jwplayer);(function(a){a.html5.api=function(c,n){var m={};var f=document.createElement("div");c.parentNode.replaceChild(f,c);f.id=c.id;m.version=a.version;m.id=f.id;var l=new a.html5.model(m,f,n);var j=new a.html5.view(m,f,l);var k=new a.html5.controller(m,f,l,j);m.skin=new a.html5.skin();m.jwPlay=function(o){if(typeof o=="undefined"){e()}else{if(o.toString().toLowerCase()=="true"){k.play()}else{k.pause()}}};m.jwPause=function(o){if(typeof o=="undefined"){e()}else{if(o.toString().toLowerCase()=="true"){k.pause()}else{k.play()}}};function e(){if(l.state==a.api.events.state.PLAYING||l.state==a.api.events.state.BUFFERING){k.pause()}else{k.play()}}m.jwStop=k.stop;m.jwSeek=k.seek;m.jwPlaylistItem=k.item;m.jwPlaylistNext=k.next;m.jwPlaylistPrev=k.prev;m.jwResize=k.resize;m.jwLoad=k.load;function h(o){return function(){return l[o]}}function d(o,q,p){return function(){var r=l.plugins.object[o];if(r&&r[q]&&typeof r[q]=="function"){r[q].apply(r,p)}}}m.jwGetItem=h("item");m.jwGetPosition=h("position");m.jwGetDuration=h("duration");m.jwGetBuffer=h("buffer");m.jwGetWidth=h("width");m.jwGetHeight=h("height");m.jwGetFullscreen=h("fullscreen");m.jwSetFullscreen=k.setFullscreen;m.jwGetVolume=h("volume");m.jwSetVolume=k.setVolume;m.jwGetMute=h("mute");m.jwSetMute=k.setMute;m.jwGetStretching=h("stretching");m.jwGetState=h("state");m.jwGetVersion=function(){return m.version};m.jwGetPlaylist=function(){return l.playlist};m.jwGetPlaylistIndex=m.jwGetItem;m.jwAddEventListener=k.addEventListener;m.jwRemoveEventListener=k.removeEventListener;m.jwSendEvent=k.sendEvent;m.jwDockSetButton=function(r,o,p,q){if(l.plugins.object.dock&&l.plugins.object.dock.setButton){l.plugins.object.dock.setButton(r,o,p,q)}};m.jwControlbarShow=d("controlbar","show");m.jwControlbarHide=d("controlbar","hide");m.jwDockShow=d("dock","show");m.jwDockHide=d("dock","hide");m.jwDisplayShow=d("display","show");m.jwDisplayHide=d("display","hide");m.jwGetLevel=function(){};m.jwGetBandwidth=function(){};m.jwGetLockState=function(){};m.jwLock=function(){};m.jwUnlock=function(){};function b(){if(l.config.playlistfile){l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.loadPlaylist(l.config.playlistfile)}else{if(typeof l.config.playlist=="string"){l.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.loadPlaylist(l.config.playlist)}else{l.loadPlaylist(l.config);setTimeout(g,25)}}}function g(o){l.removeEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,g);l.setupPlugins();j.setup();var o={id:m.id,version:m.version};k.playerReady(o)}if(l.config.chromeless&&!a.utils.isIOS()){b()}else{m.skin.load(l.config.skin,b)}return m}})(jwplayer)};
(function($){
/*----------------------------------------------------------------------------------
Class: FloatObject
-------------------------------------------------------------------------------------*/
	function FloatObject(jqObj, params)
	{
		this.jqObj = jqObj;
		
		switch(params.speed)
		{
      case 1: this.steps = 1; break;
			case 'fast': this.steps = 5; break;
			case 'normal': this.steps = 10; break;
			case 'slow': this.steps = 20; break;
			default: this.steps = 10;
		};
		
		var offset = this.jqObj.offset();
		this.currentX = offset.left;
		this.currentY = offset.top;
		this.width = this.jqObj.width();
		this.height = this.jqObj.height();
		this.alwaysVisible = params.alwaysVisible;
		this.alwaysTop = params.alwaysTop;
		
		
		this.origX = typeof(params.x) == "string" ?  this.currentX : params.x;
		this.origY = typeof(params.y) == "string" ?  this.currentY : params.y;
				
		
		//now we make sure the object is in absolute positions.
		this.jqObj.css({'position':'absolute' , 'top':this.currentY ,'left':this.currentX});
	}
	
	FloatObject.prototype.updateLocation = function()
	{
		this.updatedX = $(window).scrollLeft() + this.origX;
		
		if( this.alwaysTop == false ){
			this.updatedY = $(window).scrollTop()+ this.origY;
			
			if( this.alwaysVisible ){
				if( this.origX + this.width > this.windowWidth() ) 
					this.updatedX = this.windowWidth() - this.width + $(window).scrollLeft();
				if( this.origY + this.height > this.windowHeight() ) 
				{
					this.updatedY = $(window).scrollTop() + this.windowHeight() - this.height;
					if( this.updatedY < this.origY ) this.updatedY = this.origY;
				}				
			}
		}
		else
		{

			if( $(window).scrollTop() > this.origY )
			{
				this.updatedY = $(window).scrollTop() + 5;
			}
			else
			{
				this.updatedY = this.origY + 5;
			}
		}
		this.dx = Math.abs(this.updatedX - this.currentX );
		this.dy = Math.abs(this.updatedY - this.currentY );
		
		return this.dx || this.dy;
	}
	
	FloatObject.prototype.windowHeight = function()
	{
		var de = document.documentElement;
		
		return self.innerHeight ||
			(de && de.clientHeight) ||
			document.body.clientHeight;
	}
	
	FloatObject.prototype.windowWidth = function()
	{
		var de = document.documentElement;
		
		return self.innerWidth ||
			(de && de.clientWidth) ||
			document.body.clientWidth;
	}
	
	
	FloatObject.prototype.move = function()
	{
		if( this.jqObj.css("position") != "absolute" ) return;
		var cx = 0;
		var cy = 0;
		
		if( this.dx > 0 )
		{			
			if( this.dx < this.steps / 2 )
				cx = (this.dx >= 1) ? 1 : 0;
			else
				cx = Math.round(this.dx/this.steps);
			
			if( this.currentX < this.updatedX )
				this.currentX += cx;
			else
				this.currentX -= cx;
		}
		
		if( this.dy > 0 )
		{
			if( this.dy < this.steps / 2 )
				cy = (this.dy >= 1) ? 1 : 0;
			else
				cy = Math.round(this.dy/this.steps);
			
			if( this.currentY < this.updatedY )
				this.currentY += cy;
			else
				this.currentY -= cy;
		}
		
		this.jqObj.css({'left':this.currentX, 'top': this.currentY });			
	}

	
	
/*----------------------------------------------------------------------------------
Object: floatMgr
-------------------------------------------------------------------------------------*/		
	$.floatMgr = {
		
		FOArray: new Array() ,
		
		timer: null ,
		
		initializeFO: function(jqObj,params) 
		{
			var settings =  $.extend({
				x: 0 ,
				y: 0 ,
				speed: 'normal'	,
				alwaysVisible: false ,
				alwaysTop: false},params||{});
			var newFO = new FloatObject(jqObj,settings);
			
			$.floatMgr.FOArray.push(newFO);
			
			if( !$.floatMgr.timer ) $.floatMgr.adjustFO();
			
			//now making sure we are registered to all required window events
			if( !$.floatMgr.registeredEvents ) 
			{
					$(window).bind("resize", $.floatMgr.onChange);
					$(window).bind("scroll", $.floatMgr.onChange);
					$.floatMgr.registeredEvents = true;
			}		
		} , 
		
		adjustFO: function() 
		{
			$.floatMgr.timer = null;
			
			var moveFO = false;
			
			for( var i = 0 ; i < $.floatMgr.FOArray.length ; i++ )
			{
				 FO = $.floatMgr.FOArray[i];
				 if( FO.updateLocation() )  moveFO = true;
			}
			
			if( moveFO )
			{
				for( var i = 0 ; i < $.floatMgr.FOArray.length ; i++ )
				{
					FO = $.floatMgr.FOArray[i];
					FO.move();
				}
				
				if( !$.floatMgr.timer ) $.floatMgr.timer = setTimeout($.floatMgr.adjustFO,50);
			}
		}	,
		
		stopFloatChk: false ,
		
		onChange: function()
		{
			if( !$.floatMgr.timer && !$.floatMgr.stopFloatChk ) $.floatMgr.adjustFO();
		} 		
	};
	
/*----------------------------------------------------------------------------------
Function: makeFloat
-------------------------------------------------------------------------------------*/		
	$.fn.makeFloat = function(params) {
		var obj = this.eq(0); //we only operate on the first selected object;
		$.floatMgr.initializeFO(obj,params); 
		if( $.floatMgr.timer == null ) $.floatMgr.adjustFO();
		return obj;
	};
	$.fn.stopFloat = function(params) {
		$.floatMgr.stopFloatChk = true;
	};
	
	$.fn.restartFloat = function(params) {
		$.floatMgr.stopFloatChk = false;
	};
})(jQuery);
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
/**
 * jQuery Masonry v2.1.05
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
(function(a,b,c){"use strict";var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,c){var d=this,f=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){b.event.handle.apply(d,f)},c==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()},b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[];var d=this.element[0].style;this.originalStyle={height:d.height||""};var e=this.options.containerStyle;for(var f in e)this.originalStyle[f]=d[f]||"";this.element.css(e),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var g=this;setTimeout(function(){g.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){g.resize()}),this.reloadItems()},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0;c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var f=function(b){a.console&&a.console.error(b)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d){f("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(d[a])||a.charAt(0)==="_"){f("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
/*
 *   @author Marvin Kerkhoff
 *   @email kerkhoff@novanet-solutions.ch
 *   @version 0.1
 *
 *   $.carrousel jQuery extension
 */
  
(function ( $ ){
    
    var methods = {
        resize: function () {
            if ($(window).width() < 1300) {
                this.removeClass("highResolution");
            } else {
                this.addClass("highResolution");
            }
        },

        init: function () {
            this.parent(".overflow").prev("a.arrow.left").click(function () {
                var listItemWidth = $(this).next(".overflow").find("li").width(),
                    scrollDiv = $(this).nextAll("div.overflow");
                scrollDiv.find("ul").prepend(scrollDiv.find("li:last-child"));
                scrollDiv.scrollTo(listItemWidth,0);
                scrollDiv.stop().scrollTo("-="+listItemWidth+"px",0, {duration:500});
                return false;
            });

            this.parent(".overflow").next("a.arrow.right").click(function () {
                var listItemWidth = $(this).prev(".overflow").find("li").width(),
                    scrollDiv = $(this).prevAll("div.overflow");
                scrollDiv.stop().scrollTo(listItemWidth, 0, {
                    duration:500,
                    onAfter:function () {
                        scrollDiv.find("ul").append(scrollDiv.find("li:first-child"));
                        scrollDiv.scrollTo(0,0);
                    }
                });
                return false;
            });

        }
    };

    $.fn.carrousel = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.carrousel' );
        }
    };
})( jQuery );
/*
 *   @author Yuriy Piskun
 *   @email yuriy.piskun@nzz.ch
 *   @version 0.1
 *
 *   $.sfHover jQuery extension
*/

(function ( $ ) {

    var config = {
        submenuClass: '.menu_level_2',
        submenuActiveItemClass: 'sfhover'
    };

    var methods = {
        init: function () {
            var $subnavParents = $(this).find(config.submenuClass).parent();

            $subnavParents.hover(function () {
                $(this).toggleClass(config.submenuActiveItemClass);
            });

            if ('ontouchstart' in window) {
                $subnavParents.click(function (e) {
                    e.stopPropagation();
                    $subnavParents.removeClass(config.submenuActiveItemClass);
                    $(this).addClass(config.submenuActiveItemClass);
                })
                .children('a').click(function (e) {
                    e.preventDefault();
                });
                $('html, body, body > div').click(function () {
                    $subnavParents.removeClass(config.submenuActiveItemClass);
                });
                $subnavParents.children(config.submenuClass).click(function (e) {
                    e.stopPropagation();
                });
            }
        }
    };

    $.fn.sfHover = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.sfHover' );
        }
    };

})(jQuery);
/*
 *   @author Yuriy Piskun
 *   @email yuriy.piskun@nzz.ch
 *   @version 0.1
 *
 *   $.flyoutsHover jQuery extension
*/

(function ( $ ) {

    var config = {
        flyoutClass: '.overlay',
        flyoutActiveItemClass: 'selected'
    };

    var methods = {
        init: function () {
            var $flyoutParents = $(this).find(config.flyoutClass).parent();

            $flyoutParents.click(function (e) {
                e.stopPropagation();
                $flyoutParents.removeClass(config.flyoutActiveItemClass);
                $(this).addClass(config.flyoutActiveItemClass);
                $.counters.update();
            })
            .children('a').click(function (e) {
                e.preventDefault();
            });

            $flyoutParents.mouseleave(function () {
                $flyoutParents.removeClass(config.flyoutActiveItemClass);
            });

            if ('ontouchstart' in window) {
                $flyoutParents.children(config.flyoutClass).click(function (e) {
                    e.stopPropagation();
                });
                $('html, body, body > div').click(function () {
                    $flyoutParents.removeClass(config.flyoutActiveItemClass);
                });
            }
        }
    };

    $.fn.flyoutsHover = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.sfHover' );
        }
    };

})(jQuery);
/*
 *   @author Marvin Kerkhoff
 *   @email kerkhoff@novanet-solutions.ch
 *   @version 0.1
 *
 *   $.floaternavi jQuery extension
 */

(function ($) {

    var methods = {
        resize: function () {
            if ($(window).width() < 1566) {
                this.addClass("smallResolution").removeClass("highResolution");
            } else {
                this.addClass("highResolution").removeClass("smallResolution");
            }
        },

        init: function () {
            if ($(".majorEvent").length > 0) {
                majorEventOffset = $(".majorEvent").offset().top;
            } else {
                majorEventOffset = 10000000;
            }

            if (($(window).scrollTop() > $("#main").offset().top && this.hasClass("highResolution")) || ($(window).scrollTop() > majorEventOffset && this.hasClass("highResolution"))) {

                if ($(window).scrollTop() < $('#products').offset().top - this.find("div.sm-scrolling").height()) {
                    this.find("div.sm-scrolling").addClass("inScrollMode").css("top", $(window).scrollTop() - $("body>#header").outerHeight());
                } else {
                    this.find("div.sm-scrolling").removeClass("inScrollMode").css("top", $("#products").offset().top - $("#main").offset().top - $(this).find("div.sm-scrolling").outerHeight() - 30);
                }
            } else {
                if ($('.majorEvent').length > 0) {
                    heightMajorEvent = $('.majorEvent').height() * -1;
                    this.find("div.sm-scrolling").removeClass("inScrollMode").css("top", heightMajorEvent);
                } else {
                    this.find("div.sm-scrolling").removeClass("inScrollMode").css("top", '');
                }
            }
        }
    }


    $.fn.floaternavi = function (method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.floaternavi');
        }
    };

})(jQuery);
/*
 *   @author Marvin Kerkhoff
 *   @email kerkhoff@novanet-solutions.ch
 *   @version 0.1
 *
 *   $.floatersky jQuery extension
*/

(function ( $ ) {

    var methods = {
            
        init: function () {

            if($(".majorEvent").length > 0) {
                majorEventOffset = $(".majorEvent").offset().top;
            } else {
                majorEventOffset = 10000000;
            }

            var bannerHeight = $(this).find('img, object').height(),
                topMaxPosition = $("#header").outerHeight() - 53,
                bottomMaxPosition = $('body > .head-centering').outerHeight() + $('#main').outerHeight() - bannerHeight;

            if (($(window).scrollTop() < majorEventOffset) && (window.innerHeight > this.height()) ) {
                if ($(window).scrollTop() < $('#header').outerHeight() + bottomMaxPosition) {
                    this.addClass("inScrollMode").css("top", $(window).scrollTop() - $("#header").outerHeight() + 53);
                }
                if ($(window).scrollTop() > $('#header').outerHeight() + bottomMaxPosition - 30) {
                    this.removeClass("inScrollMode").css("top", bottomMaxPosition);
                }
                if ($(window).scrollTop() < topMaxPosition) {
                    this.removeClass("inScrollMode").css("top","");
                }
            } else {
                
                if ($('.majorEvent').length > 0) {
                    heightMajorEvent = $('.majorEvent').height() * -1;
                    this.removeClass("inScrollMode").css("top", heightMajorEvent);
                }

            }

        }
        
    }

    $.fn.floatersky = function(method) {
        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.floatersky');
        }
    };

})(jQuery);
/*
 *   @author Marvin Kerkhoff
 *   @email kerkhoff@novanet-solutions.ch
 *   @version 0.1
 *
 *   $.placeholder jQuery extension
*/
(function ( $ ) {
    var supported = !!("placeholder" in document.createElement( "input" ));
    $.placeholder = function() {
        return supported ? this :
        $("[placeholder]").focus(function() {
          var input = $(this);
          if (input.val() == input.attr("placeholder")) {
            input.val("");
            input.removeClass("placeholder");
          }
        }).blur(function() {
          var input = $(this);
          if (input.val() == "" || input.val() == input.attr("placeholder")) {
            input.addClass("placeholder");
            input.val(input.attr("placeholder"));
          }
        }).blur();
    };

    $("[placeholder]").parents("form").submit(function() {
        $(this).find("[placeholder]").each(function() {
            var input = $(this);
            if (input.val() == input.attr("placeholder")) {
                input.val("");
            }
        })
    });
})(jQuery);
/*
 * jquery.socialshareprivacy.js
 *
 * Copyright (c) 2011 Hilko Holweg, Sebastian Hilbig, Nicolas Heiringhoff, Juergen Schmidt,
 * Heise Zeitschriften Verlag GmbH & Co. KG, http://www.heise.de
 *
 * is released under the MIT License http://www.opensource.org/licenses/mit-license.php
 *
 * Spread the word, link to us if you can.
 */

(function ($) {

    "use strict";

	/*
	 * helper functions
	 */ 

    // abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
    function abbreviateText(text, length) {
        var abbreviated = decodeURIComponent(text);
        if (abbreviated.length <= length) {
            return text;
        }

        var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ');
        abbreviated = encodeURIComponent(abbreviated.substring(0, lastWhitespaceIndex)) + "\u2026";

        return abbreviated;
    }

    // returns content of <meta name="" content=""> tags or '' if empty/non existant
    function getMeta(name) {
        var metaContent = $('meta[name="' + name + '"]').attr('content');
        return metaContent || '';
    }
    
    // create tweet text from content of <meta name="DC.title"> and <meta name="DC.creator">
    // fallback to content of <title> tag
    function getTweetText() {
        var title = getMeta('DC.title');
        var creator = getMeta('DC.creator');

        if (title.length > 0 && creator.length > 0) {
            title += ' - ' + creator;
        } else {
            title = $('title').text();
        }

        return encodeURIComponent(title);
    }

    // build URI from rel="canonical" or document.location
    function getURI() {
        var uri = document.location.href;
        var canonical = $("link[rel=canonical]").attr("href");

        if (canonical && canonical.length > 0) {
            if (canonical.indexOf("http") < 0) {
                canonical = document.location.protocol + "//" + document.location.host + canonical;
            }
            uri = canonical;
        }

        return uri;
    }

    function cookieSet(name, value, days, path, domain) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + '=' + value + '; expires=' + expires.toUTCString() + '; path=' + path + '; domain=' + domain;
    }
    function cookieDel(name, value, path, domain) {
        var expires = new Date();
        expires.setTime(expires.getTime() - 100);
        document.cookie = name + '=' + value + '; expires=' + expires.toUTCString() + '; path=' + path + '; domain=' + domain;
    }

    // extend jquery with our plugin function
    $.fn.socialSharePrivacy = function (settings) {
        var defaults = {
            'services' : {
                'facebook' : {
                    'status'            : 'on',
                    'dummy_img'         : 'socialshareprivacy/images/dummy_facebook.png',
                    'txt_info'          : '2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Facebook senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
                    'txt_fb_off'        : 'nicht mit Facebook verbunden',
                    'txt_fb_on'         : 'mit Facebook verbunden',
                    'perma_option'      : 'on',
                    'display_name'      : 'Facebook',
                    'referrer_track'    : '',
                    'language'          : 'de_DE',
                    'action'            : 'recommend'
                }, 
                'twitter' : {
                    'status'            : 'on', 
                    'dummy_img'         : 'socialshareprivacy/images/dummy_twitter.png',
                    'txt_info'          : '2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Twitter senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
                    'txt_twitter_off'   : 'nicht mit Twitter verbunden',
                    'txt_twitter_on'    : 'mit Twitter verbunden',
                    'perma_option'      : 'on',
                    'display_name'      : 'Twitter',
                    'referrer_track'    : '', 
                    'tweet_text'        : getTweetText,
                    'language'          : 'de',
                    'action'            : 'tweet',
                    'user'              : 'nzz',
                    'count_followers'   : 'false'
                },
                'gplus' : {
                    'status'            : 'on',
                    'dummy_img'         : 'socialshareprivacy/images/dummy_gplus.png',
                    'txt_info'          : '2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Google+ senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.',
                    'txt_gplus_off'     : 'nicht mit Google+ verbunden',
                    'txt_gplus_on'      : 'mit Google+ verbunden',
                    'perma_option'      : 'on',
                    'display_name'      : 'Google+',
                    'referrer_track'    : '',
                    'language'          : 'de'
                }
            },
            'info_link'         : 'http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html',
            'txt_help'          : 'Wenn Sie diese Felder durch einen Klick aktivieren, werden Informationen an Facebook, Twitter oder Google in die USA &uuml;bertragen und unter Umst&auml;nden auch dort gespeichert. N&auml;heres erfahren Sie durch einen Klick auf das <em>i</em>.',
            'settings_perma'    : 'Dauerhaft aktivieren und Daten&uuml;ber&shy;tragung zustimmen:',
            'cookie_path'       : '/',
            'cookie_domain'     : document.location.host,
            'cookie_expires'    : '365',
            'uri'               : getURI,
            'show_info'         : 'on'
        };

        // Standardwerte des Plug-Ings mit den vom User angegebenen Optionen ueberschreiben
        var options = $.extend(true, defaults, settings);
        var facebook_on = true;
        var twitter_on  = true;
        var gplus_on    = true;
        if (options.services.twitter.status === "off") {
            twitter_on = false;
        }
        if (options.services.facebook.status === "off") {
            facebook_on = false;
        }
        if (options.services.gplus.status === "off") {
            gplus_on = false;
        }

        return this.each(function () {

            $(this).prepend('<ul class="social_share_privacy_area group"></ul>');
            var context = $('.social_share_privacy_area', this);

            // canonical uri that will be shared
            var uri = options.uri;
            if (typeof uri === 'function') {
                uri = uri(context);
            }

            //
            // Facebook
            //
            if (facebook_on) {

                if (typeof options.services.facebook.uri == 'undefined') {
                    var fb_enc_uri = encodeURIComponent(uri + options.services.facebook.referrer_track);
                    var fb_html = '<div style="height:30px;width:145px;float:left;"><fb:like width="145" height="30" layout="button_count" show_faces="false" action="' + options.services.facebook.action + '" href="' + fb_enc_uri + '"></fb:like></div>';
                } else {
                    var fb_enc_uri = options.services.facebook.uri;
                    var fb_html = '<style type="text/css">.fb_edge_widget_with_comment>span,.fb_edge_widget_with_comment>span>iframe { width:145px !important; height:24px !important; float:left;}</style><fb:like width="145" height="30" layout="button_count" show_faces="false" action="' + options.services.facebook.action + '" href="' + fb_enc_uri + '"></fb:like>';
                }

                context.append(fb_html);

                window.fbAsyncInit = function() {
                    FB.init({
                        appId: $('meta[property="fb:app_id"]').attr('content'),
                        xfbml: true
                    });
                };
                (function() {
                    var e = document.createElement('script');
                    e.async = true;
                    e.src = document.location.protocol + '//connect.facebook.net/' + options.services.facebook.language + '/all.js';
                    context.append(e);
                }());
            }

            //
            // Twitter
            //
            if (twitter_on) {
                var text = options.services.twitter.tweet_text;
                if (typeof text === 'function') {
                    text = text();
                }
                // 120 is the max character count left after twitters automatic url shortening with t.co
                text = abbreviateText(text, '120');

                var twitter_enc_uri = encodeURIComponent(uri + options.services.twitter.referrer_track);
                var twitter_count_url = encodeURIComponent(uri);
                var twittr_li_class ='';
                var twitter_src_url;
                if (options.services.twitter.action.toLowerCase() == 'tweet') {
                    twitter_src_url = 'url=' + twitter_enc_uri + '&amp;counturl=' + twitter_count_url + '&amp;text=' + text + '&amp;count=horizontal&amp;lang=' + options.services.twitter.language;
                    twittr_li_class = '<li class="twitter help_info">';
                } else if (options.services.twitter.action == 'follow') {
                    twitter_src_url = 'screen_name=' + encodeURIComponent(options.services.twitter.user) + '&amp;show_count=' + options.services.twitter.count_followers + '&amp;lang=' + options.services.twitter.language;
                    twittr_li_class = '<li class="twitter follownzz help_info">';
                }

                twitter_src_url = 'http://platform.twitter.com/widgets/' + options.services.twitter.action.toLowerCase() + '_button.html?' + twitter_src_url;

                var twitter_code = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="' + twitter_src_url + '" style="width:110px; height:25px;"></iframe>';

                context.append(twittr_li_class + twitter_code + '</li>');
            }

            //
            // Google+
            //
            if (gplus_on) {

                var gplus_uri = (typeof options.services.gplus.uri == 'undefined') ? uri + options.services.gplus.referrer_track : options.services.gplus.uri;

                // we use the Google+ "asynchronous" code, standard code is flaky if inserted into dom after load
                var gplus_code = '<div class="g-plusone" data-href="' + gplus_uri + '" data-height=30 data-theme="light"></div><script type="text/javascript">window.___gcfg = {lang: "' + options.services.gplus.language + '"}; (function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })(); </script>';
                context.append('<li class="gplus help_info">' + gplus_code + '</li>');
            }
        });
    };
}(jQuery));
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);
/*
 *   @author Marvin Kerkhoff
 *   @email kerkhoff@novanet-solutions.ch
 *   @version 0.1
 *
 *   $.liveticker jQuery extension
 */
(function ( $ ){
    var methods = {
        init: function () {
            this.find("a").click(function() {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                } else {
                    $(this).addClass("active");
                }
                return false;
            });

        }
    };

    $.fn.liveticker = function(method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.liveticker' );
        }
    };
})( jQuery );
/*
 jQuery get element from point
 Plugin adapted from: http://www.zehnet.de/2010/11/19/document-elementfrompoint-a-jquery-solution/
 More info: http://www.quirksmode.org/dom/w3c_cssom.html
 */
(function ($) {
    $.elementFromPoint = function (x, y) {
        var check = false;
        isRelative = true;
        if (!document.elementFromPoint) return null;
        if (!check) {
            var sl;
            if ((sl = $(document).scrollTop()) > 0) {
                isRelative = (document.elementFromPoint(0, sl + $(window).height() - 1) == null);
            }
            else if ((sl = $(document).scrollLeft()) > 0) {
                isRelative = (document.elementFromPoint(sl + $(window).width() - 1, 0) == null);
            }
            check = (sl > 0);
        }

        if (!isRelative) {
            x += $(document).scrollLeft();
            y += $(document).scrollTop();
        }

        return document.elementFromPoint(x, y);
    };

})(jQuery);
(function ($) {
    var triggerCloseCallback = function () {};
    var clickOverlay = null;
    var overlayId = 'clickOverlay';

    $.touchOverlay = function () {
        if (!('ontouchstart' in window)) {
            return false
        }

        var div = $("<div></div>");
        div.attr('id', overlayId);
        div.attr('style', 'display: none; position: fixed; top: 0px; left: 0px; width: 100%;');
        $('body').append(div);  

        clickOverlay = $('#' + overlayId);
        clickOverlay.click(function (e) {
            // close invisible overlay
            clickOverlay.hide();
            // close opened menus, if any
            triggerCloseCallback();
            // re-trigger click to be able to "click-trough" the invisible layer
            var clickElement = $($.elementFromPoint(e.clientX, e.clientY));
            // links would not be triggered by .trigger('click'), so we treat them separately
            if (clickElement.attr('href')) {
                window.location.href = clickElement.attr('href');
            }
            // trigger click
            $(clickElement).trigger('click');
        });
        setTimeout(function () {
            clickOverlay.hide();
        }, 100);
    }
    $.touchOverlay.show = function (zindex, closeCallback) {
        if (clickOverlay) {
            if (isNaN(zindex)) {
                zindex = 1;
            }
            clickOverlay.css('height', $(window).height());
            clickOverlay.css('z-index', zindex);
            clickOverlay.show();
            // register callback-function to do all needed closing actions for menus or reset it if not given
            if (typeof closeCallback === 'function') {
                triggerCloseCallback = closeCallback;
            } else {
                triggerCloseCallback = function () {
                };
            }
        }
    }
    $.touchOverlay.hide = function () {
        if (clickOverlay) {
            clickOverlay.hide();
            setTimeout(function () {
                /* let the browser handle any links before closing the menu (iPad) */
                triggerCloseCallback();
            }, 50)
        }
    }

})(jQuery);
/*
 *   @author Marvin Kerkhoff
 *   @email kerkhoff@novanet-solutions.ch
 *   @version 0.1
 *
 *   $.footerad jQuery extension
*/

(function ( $ ) {
    var methods = {
        init: function (footerRef) {
            var footerBox = this,
            offset = $(footerRef).offset();

            $(footerBox).data('state',0);
            $(footerBox).find('img:eq(0)').click(function () {
                $(this).parents('div').footerad('hide',3);
            });

            if ($(window).scrollTop()+$(window).height()>offset.top) {
                $(footerBox).footerad('show');
            }

            $(window).scroll(function () {
                if (($(window).scrollTop()+$(window).height())>offset.top) {
                    if ($(footerBox).data('state') === 0) {
                        $(footerBox).footerad('show');
                    }
                } else if ($(footerBox).data('state') === 1) {
                    $(footerBox).footerad('hide',0);
                }
            });
        },

        hide: function (state) {
            $(this).animate({
                marginTop:($(this).height() + $(window).height()),
                opacity:0
            }, 400);
            $(this).data('state',state);
        },

        show: function () {
            $(this).css({
                display:'block',
                opacity:0,
                marginTop:($(this).height() + $(window).height())
            });

            $(this).animate({
                marginTop: 0,
                opacity:1
            }, 400);

            $(this).data('state',1);
        }
    };

    $.fn.footerad = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else if ( typeof method === 'string' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.footerad' );
        }
    };

})(jQuery);


/*
 * jQuery beforeafter plugin
 * @author admin@catchmyfame.com - http://www.catchmyfame.com
 * @version 1.4
 * @date September 19, 2011
 * @category jQuery plugin
 * @copyright (c) 2009 admin@catchmyfame.com (www.catchmyfame.com)
 * @license CC Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0) - http://creativecommons.org/licenses/by-nc-sa/3.0/
 */
(function($){
	$.fn.extend({ 
		beforeAfter: function(options)
		{
			var defaults = 
			{
				animateIntro : false,
				introDelay : 1000,
				introDuration : 1000,
				introPosition : .5,
				showFullLinks : true,
				beforeLinkText: 'Show only before',
				afterLinkText: 'Show only after',
				imagePath : './js/',
				cursor: 'pointer',
				clickSpeed: 600,
				linkDisplaySpeed: 200,
				dividerColor: '#888',
				enableKeyboard: false,
				keypressAmount: 20,
				onReady: function(){}
			};
		var options = $.extend(defaults, options);

		var randID =  Math.round(Math.random()*100000000);

    		return this.each(function() {
			var o=options;
			var obj = $(this);

			var imgWidth = $('img:first', obj).width();
			var imgHeight = $('img:first', obj).height();
			
			if( $('div',obj).length != 2 ) $('img',obj).wrap('<div>'); // For backwards compatability. Used to require images to be wrapped in div tags.

			$(obj)
			.width(imgWidth)
			.height(imgHeight)
			.css({'overflow':'hidden','position':'relative','padding':'0'});

			var bef = $('img:first', obj).attr('src');
			var aft = $('img:last', obj).attr('src');
			
			$('img:first', obj).attr('id','beforeimage'+randID);
			$('img:last', obj).attr('id','afterimage'+randID);
		
			// Create an inner div wrapper (dragwrapper) to hold the images.
			$(obj).prepend('<div id="dragwrapper'+randID+'"><div id="drag'+randID+'"><img width="8" height="56" alt="handle" src="'+o.imagePath+'handle.gif" id="handle'+randID+'" /></div></div>'); // Create drag handle
			$('#dragwrapper'+randID).css({'opacity':.25,'position':'absolute','padding':'0','left':(imgWidth*o.introPosition)-($('#handle'+randID).width()/2)+'px','z-index':'20'}).width($('#handle'+randID).width()).height(imgHeight);

			$('div:eq(2)', obj).height(imgHeight).width(imgWidth*o.introPosition).css({'position':'absolute','overflow':'hidden','left':'0px','z-index':'10'}); // Set CSS properties of the before image div
			$('div:eq(3)', obj).height(imgHeight).width(imgWidth).css({'position':'absolute','overflow':'hidden','right':'0px'});	// Set CSS properties of the after image div
			$('#drag'+randID).width(2).height(imgHeight).css({'background':o.dividerColor,'position':'absolute','left':'3px'});	// Set drag handle CSS properties
			$('#beforeimage'+randID).css({'position':'absolute','top':'0px','left':'0px'});
			$('#afterimage'+randID).css({'position':'absolute','top':'0px','right':'0px'});
			$('#handle'+randID).css({'z-index':'100','position':'relative','cursor':o.cursor,'top':(imgHeight/2)-($('#handle'+randID).height()/2)+'px','left':'-3px'})

			$(obj).append('<img src="'+o.imagePath+'lt-small.png" width="7" height="15" id="lt-arrow'+randID+'"><img src="'+o.imagePath+'rt-small.png" width="7" height="15" id="rt-arrow'+randID+'">');

			if(o.showFullLinks)
			{	
				$(obj).after('<div class="balinks" id="links'+randID+'" style="position:relative"><span class="balinks"><a id="showleft'+randID+'" href="javascript:void(0)">'+o.beforeLinkText+'</a></span><span class="balinks"><a id="showright'+randID+'" href="javascript:void(0)">'+o.afterLinkText+'</a></span></div>');
				$('#links'+randID).width(imgWidth);
				$('#showleft'+randID).css({'position':'relative','left':'0px'}).click(function(){
					$('div:eq(2)', obj).animate({width:imgWidth},o.linkDisplaySpeed);
					$('#dragwrapper'+randID).animate({left:imgWidth-$('#dragwrapper'+randID).width()+'px'},o.linkDisplaySpeed);
				});
				$('#showright'+randID).css({'position':'absolute','right':'0px'}).click(function(){
					$('div:eq(2)', obj).animate({width:0},o.linkDisplaySpeed);
					$('#dragwrapper'+randID).animate({left:'0px'},o.linkDisplaySpeed);
				});
			}

			if(o.enableKeyboard)
			{
				$(document).keydown(function(event){
					if(event.keyCode == 39)
					{
						if( (parseInt($('#dragwrapper'+randID).css('left'))+parseInt($('#dragwrapper'+randID).width()) + o.keypressAmount) <= imgWidth )
						{
							$('#dragwrapper'+randID).css('left', parseInt( $('#dragwrapper'+randID).css('left') ) + o.keypressAmount + 'px');
							$('div:eq(2)', obj).width( parseInt( $('div:eq(2)', obj).width() ) + o.keypressAmount + 'px' );
						}
						else
						{
							$('#dragwrapper'+randID).css('left', imgWidth - parseInt( $('#dragwrapper'+randID).width() ) + 'px');
							$('div:eq(2)', obj).width( imgWidth - parseInt( $('#dragwrapper'+randID).width() )/2 + 'px' );
						}
					}
					if(event.keyCode == 37)
					{
						if( (parseInt($('#dragwrapper'+randID).css('left')) - o.keypressAmount) >= 0 )
						{
							$('#dragwrapper'+randID).css('left', parseInt( $('#dragwrapper'+randID).css('left') ) - o.keypressAmount + 'px');
							$('div:eq(2)', obj).width( parseInt( $('div:eq(2)', obj).width() ) - o.keypressAmount + 'px' );
						}
						else
						{
							$('#dragwrapper'+randID).css('left', '0px');
							$('div:eq(2)', obj).width($('#dragwrapper'+randID).width()/2);
						}
					}
				});
			}

			$('#dragwrapper'+randID).draggable( { containment:obj,drag:drag,stop:drag });

			function drag()
			{
				$('#lt-arrow'+randID+', #rt-arrow'+randID).stop().css('opacity',0);
				$('div:eq(2)', obj).width( parseInt( $(this).css('left') ) + 4 );
			}

			if(o.animateIntro)
			{
				$('div:eq(2)', obj).width(imgWidth);
				$('#dragwrapper'+randID).css('left',imgWidth-($('#dragwrapper'+randID).width()/2)+'px');
				setTimeout(function(){
					$('#dragwrapper'+randID).css({'opacity':1}).animate({'left':(imgWidth*o.introPosition)-($('#dragwrapper'+randID).width()/2)+'px'},o.introDuration,function(){$('#dragwrapper'+randID).animate({'opacity':.25},1000)});
					$('div:eq(2)', obj).width(imgWidth).animate({'width':imgWidth*o.introPosition+'px'},o.introDuration,function(){clickit();o.onReady.call(this);});
				},o.introDelay);
			}
			else
			{
				clickit();
				o.onReady.call(this);
			}

			function clickit()
			{
				$(obj).hover(function(){
						$('#lt-arrow'+randID).stop().css({'z-index':'20','position':'absolute','top':imgHeight/2-$('#lt-arrow'+randID).height()/2+'px','left':parseInt($('#dragwrapper'+randID).css('left'))-10+'px'}).animate({opacity:1,left:parseInt($('#lt-arrow'+randID).css('left'))-6+'px'},200);
						$('#rt-arrow'+randID).stop().css({'position':'absolute','top':imgHeight/2-$('#lt-arrow'+randID).height()/2+'px','left':parseInt($('#dragwrapper'+randID).css('left'))+10+'px'}).animate({opacity:1,left:parseInt($('#rt-arrow'+randID).css('left'))+6+'px'},200);
						$('#dragwrapper'+randID).animate({'opacity':1},200);
					},function(){
						$('#lt-arrow'+randID).animate({opacity:0,left:parseInt($('#lt-arrow'+randID).css('left'))-6+'px'},350);
						$('#rt-arrow'+randID).animate({opacity:0,left:parseInt($('#rt-arrow'+randID).css('left'))+6+'px'},350);
						$('#dragwrapper'+randID).animate({'opacity':.25},350);
					}
				);

				// When clicking in the container, move the bar and imageholder divs
				$(obj).click(function(e){
					var clickX = e.pageX - $(this).offset().left;
					$('#dragwrapper'+randID).stop().animate({'left':clickX-($('#dragwrapper'+randID).width()/2)+'px'},o.clickSpeed);
					$('div:eq(2)', obj).stop().animate({'width':clickX+'px'},o.clickSpeed);
					$('#lt-arrow'+randID+',#rt-arrow'+randID).stop().animate({opacity:0},50);
				});
				$(obj).one('mousemove', function(){$('#dragwrapper'+randID).stop().animate({'opacity':1},500);}); // If the mouse is over the container and we animate the intro, we run this to change the opacity when the mouse moves since the hover event doesnt get triggered yet
			}
  		});
    	}
	});
})(jQuery);
var NZZ = NZZ || {};

NZZ.weather = {
    config: {
        inputFieldSelector: '#q',
        overlaySelector: '#mainnav .overlay',
        overlayItemsSelector: '#mainnav .overlay li',
        weatherSelector: '#mainnav .weather',
        weatherLink: '#mainnav .pulldown'
    },
    isOverOverlay: false,

    init: function () {
        var self = this;

        /* Only for estetic */
        $(this.config.overlayItemsSelector).css('height', $(this.config.overlaySelector).height());

        $(this.config.weatherLink).bind('click', function (e) {
            e.preventDefault();
        });

        $(this.config.weatherSelector).bind('mousedown', function (e) {
            e.preventDefault();
            $.counters.update();
            if (!$(self.config.weatherSelector).hasClass('hover')) {
                $(self.config.weatherSelector).addClass('hover');
                $(self.config.inputFieldSelector).blur();
                $(self.config.overlaySelector).show();
                $.touchOverlay.show(
                    $(self.config.overlaySelector).first().css('z-index') - 1,
                    function () {
                        self._hideOverlay();
                    }
                );
            } else {
                self._hideOverlay();
            }
        });

        $(this.config.weatherSelector).bind('mouseleave', function () {
            setTimeout(function () {
                if (!self.isOverOverlay) {
                    self._hideOverlay();
                }
                $.touchOverlay.hide();
            }, 100);
        });

        $(this.config.overlaySelector).bind('mouseenter', function () {
            self.isOverOverlay = true;
        });

        $(this.config.overlaySelector).bind('mouseleave', function () {
            self.isOverOverlay = false;
            self._hideOverlay();
            $.touchOverlay.hide();
        });
    },

    _hideOverlay: function () {
        $(this.config.weatherSelector).removeClass("hover");
        $(this.config.overlaySelector).hide();
        this.isOverOverlay = false;
    }
};
/**
 * Galleria v 1.2.7 2012-04-04
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */

(function( $ ) {

/*global jQuery, navigator, Galleria:true, Image */

// some references
var undef,
    window = this,
    doc    = window.document,
    $doc   = $( doc ),
    $win   = $( window ),

// native prototypes
    protoArray = Array.prototype,

// internal constants
    VERSION = 1.27,
    DEBUG = true,
    TIMEOUT = 30000,
    DUMMY = false,
    NAV = navigator.userAgent.toLowerCase(),
    HASH = window.location.hash.replace(/#\//, ''),
    F = function(){},
    FALSE = function() { return false; },
    IE = (function() {

        var v = 3,
            div = doc.createElement( 'div' ),
            all = div.getElementsByTagName( 'i' );

        do {
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->';
        } while ( all[0] );

        return v > 4 ? v : undef;

    }() ),
    DOM = function() {
        return {
            html:  doc.documentElement,
            body:  doc.body,
            head:  doc.getElementsByTagName('head')[0],
            title: doc.title
        };
    },

    // list of Galleria events
    _eventlist = 'data ready thumbnail loadstart loadfinish image play pause progress ' +
                 'fullscreen_enter fullscreen_exit idle_enter idle_exit rescale ' +
                 'lightbox_open lightbox_close lightbox_image',

    _events = (function() {

        var evs = [];

        $.each( _eventlist.split(' '), function( i, ev ) {
            evs.push( ev );

            // legacy events
            if ( /_/.test( ev ) ) {
                evs.push( ev.replace( /_/g, '' ) );
            }
        });

        return evs;

    }()),

    // legacy options
    // allows the old my_setting syntax and converts it to camel case

    _legacyOptions = function( options ) {

        var n;

        if ( typeof options !== 'object' ) {

            // return whatever it was...
            return options;
        }

        $.each( options, function( key, value ) {
            if ( /^[a-z]+_/.test( key ) ) {
                n = '';
                $.each( key.split('_'), function( i, k ) {
                    n += i > 0 ? k.substr( 0, 1 ).toUpperCase() + k.substr( 1 ) : k;
                });
                options[ n ] = value;
                delete options[ key ];
            }
        });

        return options;
    },

    _patchEvent = function( type ) {

        // allow 'image' instead of Galleria.IMAGE
        if ( $.inArray( type, _events ) > -1 ) {
            return Galleria[ type.toUpperCase() ];
        }

        return type;
    },

    // video providers
    _video = {
        youtube: {
            reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,
            embed: function(id) {
                return 'http://www.youtube.com/embed/'+id;
            },
            getThumb: function( id, success, fail ) {
                fail = fail || F;
                $.getJSON('http://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json-in-script&callback=?', function(data) {
                    try {
                        success( data.entry.media$group.media$thumbnail[0].url );
                    } catch(e) {
                        fail();
                    }
                }).error(fail);
            }
        },
        vimeo: {
            reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,
            embed: function(id) {
                return 'http://player.vimeo.com/video/'+id;
            },
            getThumb: function( id, success, fail ) {
                fail = fail || F;
                $.getJSON('http://vimeo.com/api/v2/video/' + id + '.json?callback=?', function(data) {
                    try {
                        success( data[0].thumbnail_medium );
                    } catch(e) {
                        fail();
                    }
                }).error(fail);
            }
        },
        dailymotion: {
            reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
            embed: function(id) {
                return 'http://www.dailymotion.com/embed/video/'+id;
            },
            getThumb: function( id, success, fail ) {
                fail = fail || F;
                $.getJSON('https://api.dailymotion.com/video/'+id+'?fields=thumbnail_medium_url&callback=?', function(data) {
                    try {
                        success( data.thumbnail_medium_url );
                    } catch(e) {
                        fail();
                    }
                }).error(fail);
            }
        }
    },

    // utility for testing the video URL and getting the video ID
    _videoTest = function( url ) {
        var match;
        for ( var v in _video ) {
            match = url && url.match( _video[v].reg );
            if( match && match.length ) {
                return {
                    id: match[2],
                    provider: v
                };
            }
        }
        return false;
    },

    // the internal timeouts object
    // provides helper methods for controlling timeouts
    _timeouts = {

        trunk: {},

        add: function( id, fn, delay, loop ) {
            id = id || new Date().getTime();
            loop = loop || false;
            this.clear( id );
            if ( loop ) {
                var old = fn;
                fn = function() {
                    old();
                    _timeouts.add( id, fn, delay );
                };
            }
            this.trunk[ id ] = window.setTimeout( fn, delay );
        },

        clear: function( id ) {

            var del = function( i ) {
                window.clearTimeout( this.trunk[ i ] );
                delete this.trunk[ i ];
            }, i;

            if ( !!id && id in this.trunk ) {
                del.call( _timeouts, id );

            } else if ( typeof id === 'undefined' ) {
                for ( i in this.trunk ) {
                    if ( this.trunk.hasOwnProperty( i ) ) {
                        del.call( _timeouts, i );
                    }
                }
            }
        }
    },

    // the internal gallery holder
    _galleries = [],

    // the internal instance holder
    _instances = [],

    // flag for errors
    _hasError = false,

    // canvas holder
    _canvas = false,

    // instance pool, holds the galleries until themeLoad is triggered
    _pool = [],

    // themeLoad trigger
    _themeLoad = function( theme ) {
        Galleria.theme = theme;

        // run the instances we have in the pool
        $.each( _pool, function( i, instance ) {
            if ( !instance._initialized ) {
                instance._init.call( instance );
            }
        });
    },

    // the Utils singleton
    Utils = (function() {

        return {

            array : function( obj ) {
                return protoArray.slice.call(obj, 0);
            },

            create : function( className, nodeName ) {
                nodeName = nodeName || 'div';
                var elem = doc.createElement( nodeName );
                elem.className = className;
                return elem;
            },

            getScriptPath : function( src ) {

                // the currently executing script is always the last
                src = src || $('script:last').attr('src');
                var slices = src.split('/');

                if (slices.length == 1) {
                    return '';
                }

                slices.pop();

                return slices.join('/') + '/';
            },

            // CSS3 transitions, added in 1.2.4
            animate : (function() {

                // detect transition
                var transition = (function( style ) {
                    var props = 'transition WebkitTransition MozTransition OTransition'.split(' '),
                        i;

                    // disable css3 animations in opera until stable
                    if ( window.opera ) {
                        return false;
                    }

                    for ( i = 0; props[i]; i++ ) {
                        if ( typeof style[ props[ i ] ] !== 'undefined' ) {
                            return props[ i ];
                        }
                    }
                    return false;
                }(( doc.body || doc.documentElement).style ));

                // map transitionend event
                var endEvent = {
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    WebkitTransition: 'webkitTransitionEnd',
                    transition: 'transitionend'
                }[ transition ];

                // map bezier easing conversions
                var easings = {
                    _default: [0.25, 0.1, 0.25, 1],
                    galleria: [0.645, 0.045, 0.355, 1],
                    galleriaIn: [0.55, 0.085, 0.68, 0.53],
                    galleriaOut: [0.25, 0.46, 0.45, 0.94],
                    ease: [0.25, 0, 0.25, 1],
                    linear: [0.25, 0.25, 0.75, 0.75],
                    'ease-in': [0.42, 0, 1, 1],
                    'ease-out': [0, 0, 0.58, 1],
                    'ease-in-out': [0.42, 0, 0.58, 1]
                };

                // function for setting transition css for all browsers
                var setStyle = function( elem, value, suffix ) {
                    var css = {};
                    suffix = suffix || 'transition';
                    $.each( 'webkit moz ms o'.split(' '), function() {
                        css[ '-' + this + '-' + suffix ] = value;
                    });
                    elem.css( css );
                };

                // clear styles
                var clearStyle = function( elem ) {
                    setStyle( elem, 'none', 'transition' );
                    if ( Galleria.WEBKIT && Galleria.TOUCH ) {
                        setStyle( elem, 'translate3d(0,0,0)', 'transform' );
                        if ( elem.data('revert') ) {
                            elem.css( elem.data('revert') );
                            elem.data('revert', null);
                        }
                    }
                };

                // various variables
                var change, strings, easing, syntax, revert, form, css;

                // the actual animation method
                return function( elem, to, options ) {

                    // extend defaults
                    options = $.extend({
                        duration: 400,
                        complete: F,
                        stop: false
                    }, options);

                    // cache jQuery instance
                    elem = $( elem );

                    if ( !options.duration ) {
                        elem.css( to );
                        options.complete.call( elem[0] );
                        return;
                    }

                    // fallback to jQuery's animate if transition is not supported
                    if ( !transition ) {
                        elem.animate(to, options);
                        return;
                    }

                    // stop
                    if ( options.stop ) {
                        // clear the animation
                        elem.unbind( endEvent );
                        clearStyle( elem );
                    }

                    // see if there is a change
                    change = false;
                    $.each( to, function( key, val ) {
                        css = elem.css( key );
                        if ( Utils.parseValue( css ) != Utils.parseValue( val ) ) {
                            change = true;
                        }
                        // also add computed styles for FF
                        elem.css( key, css );
                    });
                    if ( !change ) {
                        window.setTimeout( function() {
                            options.complete.call( elem[0] );
                        }, options.duration );
                        return;
                    }

                    // the css strings to be applied
                    strings = [];

                    // the easing bezier
                    easing = options.easing in easings ? easings[ options.easing ] : easings._default;

                    // the syntax
                    syntax = ' ' + options.duration + 'ms' + ' cubic-bezier('  + easing.join(',') + ')';

                    // add a tiny timeout so that the browsers catches any css changes before animating
                    window.setTimeout( (function(elem, endEvent, to, syntax) {
                        return function() {

                            // attach the end event
                            elem.one(endEvent, (function( elem ) {
                                return function() {
                                    // clear the animation
                                    clearStyle(elem);

                                    // run the complete method
                                    options.complete.call(elem[0]);
                                };
                            }( elem )));

                            // do the webkit translate3d for better performance on iOS
                            if( Galleria.WEBKIT && Galleria.TOUCH ) {

                                revert = {};
                                form = [0,0,0];

                                $.each( ['left', 'top'], function(i, m) {
                                    if ( m in to ) {
                                        form[ i ] = ( Utils.parseValue( to[ m ] ) - Utils.parseValue(elem.css( m )) ) + 'px';
                                        revert[ m ] = to[ m ];
                                        delete to[ m ];
                                    }
                                });

                                if ( form[0] || form[1]) {

                                    elem.data('revert', revert);

                                    strings.push('-webkit-transform' + syntax);

                                    // 3d animate
                                    setStyle( elem, 'translate3d(' + form.join(',') + ')', 'transform');
                                }
                            }

                            // push the animation props
                            $.each(to, function( p, val ) {
                                strings.push(p + syntax);
                            });

                            // set the animation styles
                            setStyle( elem, strings.join(',') );

                            // animate
                            elem.css( to );

                        };
                    }(elem, endEvent, to, syntax)), 2);
                };
            }()),

            removeAlpha : function( elem ) {
                if ( IE < 9 && elem ) {

                    var style = elem.style,
                        currentStyle = elem.currentStyle,
                        filter = currentStyle && currentStyle.filter || style.filter || "";

                    if ( /alpha/.test( filter ) ) {
                        style.filter = filter.replace( /alpha\([^)]*\)/i, '' );
                    }
                }
            },

            forceStyles : function( elem, styles ) {
                elem = $(elem);
                if ( elem.attr( 'style' ) ) {
                    elem.data( 'styles', elem.attr( 'style' ) ).removeAttr( 'style' );
                }
                elem.css( styles );
            },

            revertStyles : function() {
                $.each( Utils.array( arguments ), function( i, elem ) {

                    elem = $( elem );
                    elem.removeAttr( 'style' );

                    elem.attr('style',''); // "fixes" webkit bug

                    if ( elem.data( 'styles' ) ) {
                        elem.attr( 'style', elem.data('styles') ).data( 'styles', null );
                    }
                });
            },

            moveOut : function( elem ) {
                Utils.forceStyles( elem, {
                    position: 'absolute',
                    left: -10000
                });
            },

            moveIn : function() {
                Utils.revertStyles.apply( Utils, Utils.array( arguments ) );
            },

            elem : function( elem ) {
                if (elem instanceof $) {
                    return {
                        $: elem,
                        dom: elem[0]
                    };
                } else {
                    return {
                        $: $(elem),
                        dom: elem
                    };
                }
            },

            hide : function( elem, speed, callback ) {

                callback = callback || F;

                var el = Utils.elem( elem ),
                    $elem = el.$;

                elem = el.dom;

                // save the value if not exist
                if (! $elem.data('opacity') ) {
                    $elem.data('opacity', $elem.css('opacity') );
                }

                // always hide
                var style = { opacity: 0 };

                if (speed) {

                    var complete = IE < 9 && elem ? function() {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'hidden';
                        callback.call( elem );
                    } : callback;

                    Utils.animate( elem, style, {
                        duration: speed,
                        complete: complete,
                        stop: true
                    });
                } else {
                    if ( IE < 9 && elem ) {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'hidden';
                    } else {
                        $elem.css( style );
                    }
                }
            },

            show : function( elem, speed, callback ) {

                callback = callback || F;

                var el = Utils.elem( elem ),
                    $elem = el.$;

                elem = el.dom;

                // bring back saved opacity
                var saved = parseFloat( $elem.data('opacity') ) || 1,
                    style = { opacity: saved };

                // animate or toggle
                if (speed) {

                    if ( IE < 9 ) {
                        $elem.css('opacity', 0);
                        elem.style.visibility = 'visible';
                    }

                    var complete = IE < 9 && elem ? function() {
                        if ( style.opacity == 1 ) {
                            Utils.removeAlpha( elem );
                        }
                        callback.call( elem );
                    } : callback;

                    Utils.animate( elem, style, {
                        duration: speed,
                        complete: complete,
                        stop: true
                    });
                } else {
                    if ( IE < 9 && style.opacity == 1 && elem ) {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'visible';
                    } else {
                        $elem.css( style );
                    }
                }
            },


            // enhanced click for mobile devices
            // we bind a touchend and hijack any click event in the bubble
            // then we execute the click directly and save it in a separate data object for later
            optimizeTouch: (function() {

                var node,
                    evs,
                    fakes,
                    travel,
                    evt = {},
                    handler = function( e ) {
                        e.preventDefault();
                        evt = $.extend({}, e, true);
                    },
                    attach = function() {
                        this.evt = evt;
                    },
                    fake = function() {
                        this.handler.call(node, this.evt);
                    };

                return function( elem ) {

                    $(elem).bind('touchend', function( e ) {

                        node = e.target;
                        travel = true;

                        while( node.parentNode && node != e.currentTarget && travel ) {

                            evs =   $(node).data('events');
                            fakes = $(node).data('fakes');

                            if (evs && 'click' in evs) {

                                travel = false;
                                e.preventDefault();

                                // fake the click and save the event object
                                $(node).click(handler).click();

                                // remove the faked click
                                evs.click.pop();

                                // attach the faked event
                                $.each( evs.click, attach);

                                // save the faked clicks in a new data object
                                $(node).data('fakes', evs.click);

                                // remove all clicks
                                delete evs.click;

                            } else if ( fakes ) {

                                travel = false;
                                e.preventDefault();

                                // fake all clicks
                                $.each( fakes, fake );
                            }

                            // bubble
                            node = node.parentNode;
                        }
                    });
                };
            }()),

            addTimer : function() {
                _timeouts.add.apply( _timeouts, Utils.array( arguments ) );
                return this;
            },

            clearTimer : function() {
                _timeouts.clear.apply( _timeouts, Utils.array( arguments ) );
                return this;
            },

            wait : function(options) {
                options = $.extend({
                    until : FALSE,
                    success : F,
                    error : function() { Galleria.raise('Could not complete wait function.'); },
                    timeout: 3000
                }, options);

                var start = Utils.timestamp(),
                    elapsed,
                    now,
                    fn = function() {
                        now = Utils.timestamp();
                        elapsed = now - start;
                        if ( options.until( elapsed ) ) {
                            options.success();
                            return false;
                        }

                        if (typeof options.timeout == 'number' && now >= start + options.timeout) {
                            options.error();
                            return false;
                        }
                        window.setTimeout(fn, 10);
                    };

                window.setTimeout(fn, 10);
            },

            toggleQuality : function( img, force ) {

                if ( ( IE !== 7 && IE !== 8 ) || !img || img.nodeName.toUpperCase() != 'IMG' ) {
                    return;
                }

                if ( typeof force === 'undefined' ) {
                    force = img.style.msInterpolationMode === 'nearest-neighbor';
                }

                img.style.msInterpolationMode = force ? 'bicubic' : 'nearest-neighbor';
            },

            insertStyleTag : function( styles ) {
                var style = doc.createElement( 'style' );
                DOM().head.appendChild( style );

                if ( style.styleSheet ) { // IE
                    style.styleSheet.cssText = styles;
                } else {
                    var cssText = doc.createTextNode( styles );
                    style.appendChild( cssText );
                }
            },

            // a loadscript method that works for local scripts
            loadScript: function( url, callback ) {

                var done = false,
                    script = $('<scr'+'ipt>').attr({
                        src: url,
                        async: true
                    }).get(0);

               // Attach handlers for all browsers
               script.onload = script.onreadystatechange = function() {
                   if ( !done && (!this.readyState ||
                       this.readyState === 'loaded' || this.readyState === 'complete') ) {

                       done = true;

                       // Handle memory leak in IE
                       script.onload = script.onreadystatechange = null;

                       if (typeof callback === 'function') {
                           callback.call( this, this );
                       }
                   }
               };

               DOM().head.appendChild( script );
            },

            // parse anything into a number
            parseValue: function( val ) {
                if (typeof val === 'number') {
                    return val;
                } else if (typeof val === 'string') {
                    var arr = val.match(/\-?\d|\./g);
                    return arr && arr.constructor === Array ? arr.join('')*1 : 0;
                } else {
                    return 0;
                }
            },

            // timestamp abstraction
            timestamp: function() {
                return new Date().getTime();
            },

            // this is pretty crap, but works for now
            // it will add a callback, but it can't guarantee that the styles can be fetched
            // using getComputedStyle further checking needed, possibly a dummy element
            loadCSS : function( href, id, callback ) {

                var link,
                    ready = false,
                    length,
                    lastChance = function() {
                        var fake = new Image();
                        fake.onload = fake.onerror = function(e) {
                            fake = null;
                            ready = true;
                        };
                        fake.src = href;
                    };

                // look for manual css
                $('link[rel=stylesheet]').each(function() {
                    if ( new RegExp( href ).test( this.href ) ) {
                        link = this;
                        return false;
                    }
                });

                if ( typeof id === 'function' ) {
                    callback = id;
                    id = undef;
                }

                callback = callback || F; // dirty

                // if already present, return
                if ( link ) {
                    callback.call( link, link );
                    return link;
                }

                // save the length of stylesheets to check against
                length = doc.styleSheets.length;

                // check for existing id
                if( $('#'+id).length ) {
                    $('#'+id).attr('href', href);
                    length--;
                    ready = true;
                } else {
                    link = $( '<link>' ).attr({
                        rel: 'stylesheet',
                        href: href,
                        id: id
                    }).get(0);

                    window.setTimeout(function() {
                        var styles = $('link[rel="stylesheet"], style');
                        if ( styles.length ) {
                            styles.get(0).parentNode.insertBefore( link, styles[0] );
                        } else {
                            DOM().head.appendChild( link );
                        }

                        if ( IE ) {

                            // IE has a limit of 31 stylesheets in one document
                            if( length >= 31 ) {
                                Galleria.raise( 'You have reached the browser stylesheet limit (31)', true );
                                return;
                            }

                            link.onreadystatechange = function(e) {
                                if ( !ready && (!this.readyState ||
                                    this.readyState === 'loaded' || this.readyState === 'complete') ) {
                                    ready = true;
                                }
                            };

                        } else {

                            // final test via ajax
                            var dum = doc.createElement('a'),
                                loc = window.location;

                            dum.href = href;

                            if ( !( /file/.test( loc.protocol ) ) &&
                                 loc.hostname == dum.hostname &&
                                 loc.port == dum.port &&
                                 loc.protocol == dum.protocol ) {

                                // Same origin policy should apply
                                $.ajax({
                                    url: href,
                                    success: function() {
                                        ready = true;
                                    },
                                    error: lastChance
                                });

                            } else {
                                lastChance();
                            }
                        }
                    }, 10);
                }

                if ( typeof callback === 'function' ) {

                    Utils.wait({
                        until: function() {
                            return ready && doc.styleSheets.length > length;
                        },
                        success: function() {
                            window.setTimeout( function() {
                                callback.call( link, link );
                            }, 100);
                        },
                        error: function() {
                            Galleria.raise( 'Theme CSS could not load', true );
                        },
                        timeout: 10000
                    });
                }
                return link;
            }
        };
    }()),

    // the transitions holder
    _transitions = (function() {

        var _slide = function(params, complete, fade, door) {

            var easing = this.getOptions('easing'),
                distance = this.getStageWidth(),
                from = { left: distance * ( params.rewind ? -1 : 1 ) },
                to = { left: 0 };

            if ( fade ) {
                from.opacity = 0;
                to.opacity = 1;
            } else {
                from.opacity = 1;
            }

            $(params.next).css(from);

            Utils.animate(params.next, to, {
                duration: params.speed,
                complete: (function( elems ) {
                    return function() {
                        complete();
                        elems.css({
                            left: 0
                        });
                    };
                }( $( params.next ).add( params.prev ) )),
                queue: false,
                easing: easing
            });

            if (door) {
                params.rewind = !params.rewind;
            }

            if (params.prev) {

                from = { left: 0 };
                to = { left: distance * ( params.rewind ? 1 : -1 ) };

                if ( fade ) {
                    from.opacity = 1;
                    to.opacity = 0;
                }

                $(params.prev).css(from);
                Utils.animate(params.prev, to, {
                    duration: params.speed,
                    queue: false,
                    easing: easing,
                    complete: function() {
                        $(this).css('opacity', 0);
                    }
                });
            }
        };

        return {

            fade: function(params, complete) {
                $(params.next).css({
                    opacity: 0,
                    left: 0
                }).show();
                Utils.animate(params.next, {
                    opacity: 1
                },{
                    duration: params.speed,
                    complete: complete
                });
                if (params.prev) {
                    $(params.prev).css('opacity',1).show();
                    Utils.animate(params.prev, {
                        opacity: 0
                    },{
                        duration: params.speed
                    });
                }
            },

            flash: function(params, complete) {
                $(params.next).css({
                    opacity: 0,
                    left: 0
                });
                if (params.prev) {
                    Utils.animate( params.prev, {
                        opacity: 0
                    },{
                        duration: params.speed/2,
                        complete: function() {
                            Utils.animate( params.next, {
                                opacity:1
                            },{
                                duration: params.speed,
                                complete: complete
                            });
                        }
                    });
                } else {
                    Utils.animate( params.next, {
                        opacity: 1
                    },{
                        duration: params.speed,
                        complete: complete
                    });
                }
            },

            pulse: function(params, complete) {
                if (params.prev) {
                    $(params.prev).hide();
                }
                $(params.next).css({
                    opacity: 0,
                    left: 0
                }).show();
                Utils.animate(params.next, {
                    opacity:1
                },{
                    duration: params.speed,
                    complete: complete
                });
            },

            slide: function(params, complete) {
                _slide.apply( this, Utils.array( arguments ) );
            },

            fadeslide: function(params, complete) {
                _slide.apply( this, Utils.array( arguments ).concat( [true] ) );
            },

            doorslide: function(params, complete) {
                _slide.apply( this, Utils.array( arguments ).concat( [false, true] ) );
            }
        };
    }());

/**
    The main Galleria class

    @class
    @constructor

    @example var gallery = new Galleria();

    @author http://aino.se

    @requires jQuery

*/

Galleria = function() {

    var self = this;

    // internal options
    this._options = {};

    // flag for controlling play/pause
    this._playing = false;

    // internal interval for slideshow
    this._playtime = 5000;

    // internal variable for the currently active image
    this._active = null;

    // the internal queue, arrayified
    this._queue = { length: 0 };

    // the internal data array
    this._data = [];

    // the internal dom collection
    this._dom = {};

    // the internal thumbnails array
    this._thumbnails = [];

    // the internal layers array
    this._layers = [];

    // internal init flag
    this._initialized = false;

    // internal firstrun flag
    this._firstrun = false;

    // global stagewidth/height
    this._stageWidth = 0;
    this._stageHeight = 0;

    // target holder
    this._target = undef;

    // instance id
    this._id = parseInt(Math.random()*10000, 10);

    // add some elements
    var divs =  'container stage images image-nav image-nav-left image-nav-right ' +
                'info info-text info-title info-description ' +
                'thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right ' +
                'loader counter tooltip',
        spans = 'current total';

    $.each( divs.split(' '), function( i, elemId ) {
        self._dom[ elemId ] = Utils.create( 'galleria-' + elemId );
    });

    $.each( spans.split(' '), function( i, elemId ) {
        self._dom[ elemId ] = Utils.create( 'galleria-' + elemId, 'span' );
    });

    // the internal keyboard object
    // keeps reference of the keybinds and provides helper methods for binding keys
    var keyboard = this._keyboard = {

        keys : {
            'UP': 38,
            'DOWN': 40,
            'LEFT': 37,
            'RIGHT': 39,
            'RETURN': 13,
            'ESCAPE': 27,
            'BACKSPACE': 8,
            'SPACE': 32
        },

        map : {},

        bound: false,

        press: function(e) {
            var key = e.keyCode || e.which;
            if ( key in keyboard.map && typeof keyboard.map[key] === 'function' ) {
                keyboard.map[key].call(self, e);
            }
        },

        attach: function(map) {

            var key, up;

            for( key in map ) {
                if ( map.hasOwnProperty( key ) ) {
                    up = key.toUpperCase();
                    if ( up in keyboard.keys ) {
                        keyboard.map[ keyboard.keys[up] ] = map[key];
                    } else {
                        keyboard.map[ up ] = map[key];
                    }
                }
            }
            if ( !keyboard.bound ) {
                keyboard.bound = true;
                $doc.bind('keydown', keyboard.press);
            }
        },

        detach: function() {
            keyboard.bound = false;
            keyboard.map = {};
            $doc.unbind('keydown', keyboard.press);
        }
    };

    // internal controls for keeping track of active / inactive images
    var controls = this._controls = {

        0: undef,

        1: undef,

        active : 0,

        swap : function() {
            controls.active = controls.active ? 0 : 1;
        },

        getActive : function() {
            return controls[ controls.active ];
        },

        getNext : function() {
            return controls[ 1 - controls.active ];
        }
    };

    // internal carousel object
    var carousel = this._carousel = {

        // shortcuts
        next: self.$('thumb-nav-right'),
        prev: self.$('thumb-nav-left'),

        // cache the width
        width: 0,

        // track the current position
        current: 0,

        // cache max value
        max: 0,

        // save all hooks for each width in an array
        hooks: [],

        // update the carousel
        // you can run this method anytime, f.ex on window.resize
        update: function() {
            var w = 0,
                h = 0,
                hooks = [0];

            $.each( self._thumbnails, function( i, thumb ) {
                if ( thumb.ready ) {
                    w += thumb.outerWidth || $( thumb.container ).outerWidth( true );
                    hooks[ i+1 ] = w;
                    h = Math.max( h, thumb.outerHeight || $( thumb.container).outerHeight( true ) );
                }
            });

            self.$( 'thumbnails' ).css({
                width: w,
                height: h
            });

            carousel.max = w;
            carousel.hooks = hooks;
            carousel.width = self.$( 'thumbnails-list' ).width();
            carousel.setClasses();

            self.$( 'thumbnails-container' ).toggleClass( 'galleria-carousel', w > carousel.width );

            // one extra calculation
            carousel.width = self.$( 'thumbnails-list' ).width();

            // todo: fix so the carousel moves to the left
        },

        bindControls: function() {

            var i;

            carousel.next.bind( 'click', function(e) {
                e.preventDefault();

                if ( self._options.carouselSteps === 'auto' ) {

                    for ( i = carousel.current; i < carousel.hooks.length; i++ ) {
                        if ( carousel.hooks[i] - carousel.hooks[ carousel.current ] > carousel.width ) {
                            carousel.set(i - 2);
                            break;
                        }
                    }

                } else {
                    carousel.set( carousel.current + self._options.carouselSteps);
                }
            });

            carousel.prev.bind( 'click', function(e) {
                e.preventDefault();

                if ( self._options.carouselSteps === 'auto' ) {

                    for ( i = carousel.current; i >= 0; i-- ) {
                        if ( carousel.hooks[ carousel.current ] - carousel.hooks[i] > carousel.width ) {
                            carousel.set( i + 2 );
                            break;
                        } else if ( i === 0 ) {
                            carousel.set( 0 );
                            break;
                        }
                    }
                } else {
                    carousel.set( carousel.current - self._options.carouselSteps );
                }
            });
        },

        // calculate and set positions
        set: function( i ) {
            i = Math.max( i, 0 );
            while ( carousel.hooks[i - 1] + carousel.width >= carousel.max && i >= 0 ) {
                i--;
            }
            carousel.current = i;
            carousel.animate();
        },

        // get the last position
        getLast: function(i) {
            return ( i || carousel.current ) - 1;
        },

        // follow the active image
        follow: function(i) {

            //don't follow if position fits
            if ( i === 0 || i === carousel.hooks.length - 2 ) {
                carousel.set( i );
                return;
            }

            // calculate last position
            var last = carousel.current;
            while( carousel.hooks[last] - carousel.hooks[ carousel.current ] <
                   carousel.width && last <= carousel.hooks.length ) {
                last ++;
            }

            // set position
            if ( i - 1 < carousel.current ) {
                carousel.set( i - 1 );
            } else if ( i + 2 > last) {
                carousel.set( i - last + carousel.current + 2 );
            }
        },

        // helper for setting disabled classes
        setClasses: function() {
            carousel.prev.toggleClass( 'disabled', !carousel.current );
            carousel.next.toggleClass( 'disabled', carousel.hooks[ carousel.current ] + carousel.width >= carousel.max );
        },

        // the animation method
        animate: function(to) {
            carousel.setClasses();
            var num = carousel.hooks[ carousel.current ] * -1;

            if ( isNaN( num ) ) {
                return;
            }

            Utils.animate(self.get( 'thumbnails' ), {
                left: num
            },{
                duration: self._options.carouselSpeed,
                easing: self._options.easing,
                queue: false
            });
        }
    };

    // tooltip control
    // added in 1.2
    var tooltip = this._tooltip = {

        initialized : false,

        open: false,

        timer: 'tooltip' + self._id,

        swapTimer: 'swap' + self._id,

        init: function() {

            tooltip.initialized = true;

            var css = '.galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3' +
                      'opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}';

            Utils.insertStyleTag(css);

            self.$( 'tooltip' ).css('opacity', 0.8);
            Utils.hide( self.get('tooltip') );

        },

        // move handler
        move: function( e ) {
            var mouseX = self.getMousePosition(e).x,
                mouseY = self.getMousePosition(e).y,
                $elem = self.$( 'tooltip' ),
                x = mouseX,
                y = mouseY,
                height = $elem.outerHeight( true ) + 1,
                width = $elem.outerWidth( true ),
                limitY = height + 15;

            var maxX = self.$( 'container').width() - width - 2,
                maxY = self.$( 'container').height() - height - 2;

            if ( !isNaN(x) && !isNaN(y) ) {

                x += 10;
                y -= 30;

                x = Math.max( 0, Math.min( maxX, x ) );
                y = Math.max( 0, Math.min( maxY, y ) );

                if( mouseY < limitY ) {
                    y = limitY;
                }

                $elem.css({ left: x, top: y });
            }
        },

        // bind elements to the tooltip
        // you can bind multiple elementIDs using { elemID : function } or { elemID : string }
        // you can also bind single DOM elements using bind(elem, string)
        bind: function( elem, value ) {

            // todo: revise if alternative tooltip is needed for mobile devices
            if (Galleria.TOUCH) {
                return;
            }

            if (! tooltip.initialized ) {
                tooltip.init();
            }

            var hover = function( elem, value) {

                tooltip.define( elem, value );

                $( elem ).hover(function() {

                    Utils.clearTimer( tooltip.swapTimer );
                    self.$('container').unbind( 'mousemove', tooltip.move ).bind( 'mousemove', tooltip.move ).trigger( 'mousemove' );
                    tooltip.show( elem );

                    Utils.addTimer( tooltip.timer, function() {
                        self.$( 'tooltip' ).stop().show().animate({
                            opacity:1
                        });
                        tooltip.open = true;

                    }, tooltip.open ? 0 : 500);

                }, function() {

                    self.$( 'container' ).unbind( 'mousemove', tooltip.move );
                    Utils.clearTimer( tooltip.timer );

                    self.$( 'tooltip' ).stop().animate({
                        opacity: 0
                    }, 200, function() {

                        self.$( 'tooltip' ).hide();

                        Utils.addTimer( tooltip.swapTimer, function() {
                            tooltip.open = false;
                        }, 1000);
                    });
                }).click(function() {
                    $( this ).trigger( 'mouseout' );
                });
            };

            if ( typeof value === 'string' ) {
                hover( ( elem in self._dom ? self.get( elem ) : elem ), value );
            } else {
                // asume elemID here
                $.each( elem, function( elemID, val ) {
                    hover( self.get(elemID), val );
                });
            }
        },

        show: function( elem ) {

            elem = $( elem in self._dom ? self.get(elem) : elem );

            var text = elem.data( 'tt' ),
                mouseup = function( e ) {

                    // attach a tiny settimeout to make sure the new tooltip is filled
                    window.setTimeout( (function( ev ) {
                        return function() {
                            tooltip.move( ev );
                        };
                    }( e )), 10);

                    elem.unbind( 'mouseup', mouseup );

                };

            text = typeof text === 'function' ? text() : text;

            if ( ! text ) {
                return;
            }

            self.$( 'tooltip' ).html( text.replace(/\s/, '&nbsp;') );

            // trigger mousemove on mouseup in case of click
            elem.bind( 'mouseup', mouseup );
        },

        define: function( elem, value ) {

            // we store functions, not strings
            if (typeof value !== 'function') {
                var s = value;
                value = function() {
                    return s;
                };
            }

            elem = $( elem in self._dom ? self.get(elem) : elem ).data('tt', value);

            tooltip.show( elem );

        }
    };

    // internal fullscreen control
    var fullscreen = this._fullscreen = {

        scrolled: 0,

        crop: undef,

        transition: undef,

        active: false,

        keymap: self._keyboard.map,

        // The native fullscreen handler
        os: {

            callback: F,

            support: (function() {
                var html = DOM().html;
                return html.requestFullscreen || html.mozRequestFullScreen || html.webkitRequestFullScreen;
            }()),

            enter: function( callback ) {
                fullscreen.os.callback = callback || F;
                var html = DOM().html;
                if ( html.requestFullscreen ) {
                    html.requestFullscreen();
                }
                else if ( html.mozRequestFullScreen ) {
                    html.mozRequestFullScreen();
                }
                else if ( html.webkitRequestFullScreen ) {
                    html.webkitRequestFullScreen();
                }
            },

            exit: function( callback ) {
                fullscreen.os.callback = callback || F;
                if ( doc.exitFullscreen ) {
                    doc.exitFullscreen();
                }
                else if ( doc.mozCancelFullScreen ) {
                    doc.mozCancelFullScreen();
                }
                else if ( doc.webkitCancelFullScreen ) {
                    doc.webkitCancelFullScreen();
                }
            },

            listen: function() {
                if ( !fullscreen.os.support ) {
                    return;
                }
                var handler = function() {
                    if ( doc.fullscreen || doc.mozFullScreen || doc.webkitIsFullScreen ) {
                        fullscreen._enter( fullscreen.os.callback );
                    } else {
                        fullscreen._exit( fullscreen.os.callback );
                    }
                };
                doc.addEventListener( 'fullscreenchange', handler, false );
                doc.addEventListener( 'mozfullscreenchange', handler, false );
                doc.addEventListener( 'webkitfullscreenchange', handler, false );
            }
        },

        enter: function( callback ) {
            if ( self._options.trueFullscreen && fullscreen.os.support ) {
                fullscreen.os.enter( callback );
            } else {
                fullscreen._enter( callback );
            }
        },

        _enter: function( callback ) {

            fullscreen.active = true;

            // hide the image until rescale is complete
            Utils.hide( self.getActiveImage() );

            self.$( 'container' ).addClass( 'fullscreen' );

            fullscreen.scrolled = $win.scrollTop();

            // begin styleforce
            Utils.forceStyles(self.get('container'), {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10000
            });

            var htmlbody = {
                    height: '100%',
                    overflow: 'hidden',
                    margin:0,
                    padding:0
                },

                data = self.getData(),

                options = self._options;

            Utils.forceStyles( DOM().html, htmlbody );
            Utils.forceStyles( DOM().body, htmlbody );

            // temporarily attach some keys
            // save the old ones first in a cloned object
            fullscreen.keymap = $.extend({}, self._keyboard.map);

            self.attachKeyboard({
                escape: self.exitFullscreen,
                right: self.next,
                left: self.prev
            });

            // temporarily save the crop
            fullscreen.crop = options.imageCrop;

            // set fullscreen options
            if ( options.fullscreenCrop != undef ) {
                options.imageCrop = options.fullscreenCrop;
            }

            // swap to big image if it's different from the display image
            if ( data && data.big && data.image !== data.big ) {
                var big    = new Galleria.Picture(),
                    cached = big.isCached( data.big ),
                    index  = self.getIndex(),
                    thumb  = self._thumbnails[ index ];

                self.trigger( {
                    type: Galleria.LOADSTART,
                    cached: cached,
                    rewind: false,
                    index: index,
                    imageTarget: self.getActiveImage(),
                    thumbTarget: thumb,
                    galleriaData: data
                });

                big.load( data.big, function( big ) {
                    self._scaleImage( big, {
                        complete: function( big ) {
                            self.trigger({
                                type: Galleria.LOADFINISH,
                                cached: cached,
                                index: index,
                                rewind: false,
                                imageTarget: big.image,
                                thumbTarget: thumb
                            });
                            var image = self._controls.getActive().image;
                            if ( image ) {
                                $( image ).width( big.image.width ).height( big.image.height )
                                    .attr( 'style', $( big.image ).attr('style') )
                                    .attr( 'src', big.image.src );
                            }
                        }
                    });
                });
            }

            // init the first rescale and attach callbacks
            self.rescale(function() {

                Utils.addTimer(false, function() {
                    // show the image after 50 ms
                    Utils.show( self.getActiveImage() );

                    if (typeof callback === 'function') {
                        callback.call( self );
                    }

                }, 100);

                self.trigger( Galleria.FULLSCREEN_ENTER );
            });

            // bind the scaling to the resize event
            $win.resize( function() {
                fullscreen.scale();
            } );
        },

        scale : function() {
            self.rescale();
        },

        exit: function( callback ) {
            if ( self._options.trueFullscreen && fullscreen.os.support ) {
                fullscreen.os.exit( callback );
            } else {
                fullscreen._exit( callback );
            }
        },

        _exit: function( callback ) {

            fullscreen.active = false;

            Utils.hide( self.getActiveImage() );

            self.$('container').removeClass( 'fullscreen' );

            // revert all styles
            Utils.revertStyles( self.get('container'), DOM().html, DOM().body );

            // scroll back
            window.scrollTo(0, fullscreen.scrolled);

            // detach all keyboard events and apply the old keymap
            self.detachKeyboard();
            self.attachKeyboard( fullscreen.keymap );

            // bring back cached options
            self._options.imageCrop = fullscreen.crop;
            //self._options.transition = fullscreen.transition;

            // return to original image
            var big = self.getData().big,
                image = self._controls.getActive().image;

            if ( !self.getData().iframe && image && big && big == image.src ) {

                window.setTimeout(function(src) {
                    return function() {
                        image.src = src;
                    };
                }( self.getData().image ), 1 );

            }

            self.rescale(function() {
                Utils.addTimer(false, function() {

                    // show the image after 50 ms
                    Utils.show( self.getActiveImage() );

                    if ( typeof callback === 'function' ) {
                        callback.call( self );
                    }

                    $win.trigger( 'resize' );

                }, 50);
                self.trigger( Galleria.FULLSCREEN_EXIT );
            });


            $win.unbind('resize', fullscreen.scale);
        }
    };

    // invoke the native listeners
    fullscreen.os.listen();

    // the internal idle object for controlling idle states
    var idle = this._idle = {

        timer: 'idle' + self._id,

        trunk: [],

        bound: false,

        add: function(elem, to) {
            if (!elem) {
                return;
            }
            if (!idle.bound) {
                idle.addEvent();
            }
            elem = $(elem);

            var from = {},
                style;

            for ( style in to ) {
                if ( to.hasOwnProperty( style ) ) {
                    from[ style ] = elem.css( style );
                }
            }
            elem.data('idle', {
                from: from,
                to: to,
                complete: true,
                busy: false
            });
            idle.addTimer();
            idle.trunk.push(elem);
        },

        remove: function(elem) {

            elem = jQuery(elem);

            $.each(idle.trunk, function(i, el) {
                if ( el && el.length && !el.not(elem).length ) {
                    self._idle.show(elem);
                    self._idle.trunk.splice(i, 1);
                }
            });

            if (!idle.trunk.length) {
                idle.removeEvent();
                Utils.clearTimer( idle.timer );
            }
        },

        addEvent : function() {
            idle.bound = true;
            self.$('container').bind('mousemove click', idle.showAll );
        },

        removeEvent : function() {
            idle.bound = false;
            self.$('container').unbind('mousemove click', idle.showAll );
        },

        addTimer : function() {
            Utils.addTimer( idle.timer, function() {
                idle.hide();
            }, self._options.idleTime );
        },

        hide : function() {

            if ( !self._options.idleMode || self.getIndex() === false || self.getData().iframe ) {
                return;
            }

            self.trigger( Galleria.IDLE_ENTER );

            $.each( idle.trunk, function(i, elem) {

                var data = elem.data('idle');

                if (! data) {
                    return;
                }

                elem.data('idle').complete = false;

                Utils.animate( elem, data.to, {
                    duration: self._options.idleSpeed
                });
            });
        },

        showAll : function() {

            Utils.clearTimer( idle.timer );

            $.each( idle.trunk, function( i, elem ) {
                idle.show( elem );
            });
        },

        show: function(elem) {

            var data = elem.data('idle');

            if (!data.busy && !data.complete) {

                data.busy = true;

                self.trigger( Galleria.IDLE_EXIT );

                Utils.clearTimer( idle.timer );

                Utils.animate( elem, data.from, {
                    duration: self._options.idleSpeed/2,
                    complete: function() {
                        $(this).data('idle').busy = false;
                        $(this).data('idle').complete = true;
                    }
                });

            }
            idle.addTimer();
        }
    };

    // internal lightbox object
    // creates a predesigned lightbox for simple popups of images in galleria
    var lightbox = this._lightbox = {

        width : 0,

        height : 0,

        initialized : false,

        active : null,

        image : null,

        elems : {},

        keymap: false,

        init : function() {

            // trigger the event
            self.trigger( Galleria.LIGHTBOX_OPEN );

            if ( lightbox.initialized ) {
                return;
            }
            lightbox.initialized = true;

            // create some elements to work with
            var elems = 'overlay box content shadow title info close prevholder prev nextholder next counter image',
                el = {},
                op = self._options,
                css = '',
                abs = 'position:absolute;',
                prefix = 'lightbox-',
                cssMap = {
                    overlay:    'position:fixed;display:none;opacity:'+op.overlayOpacity+';filter:alpha(opacity='+(op.overlayOpacity*100)+
                                ');top:0;left:0;width:100%;height:100%;background:'+op.overlayBackground+';z-index:99990',
                    box:        'position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991',
                    shadow:     abs+'background:#000;width:100%;height:100%;',
                    content:    abs+'background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden',
                    info:       abs+'bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px',
                    close:      abs+'top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999',
                    image:      abs+'top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;',
                    prevholder: abs+'width:50%;top:0;bottom:40px;cursor:pointer;',
                    nextholder: abs+'width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;',
                    prev:       abs+'top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif',
                    next:       abs+'top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000',
                    title:      'float:left',
                    counter:    'float:right;margin-left:8px;'
                },
                hover = function(elem) {
                    return elem.hover(
                        function() { $(this).css( 'color', '#bbb' ); },
                        function() { $(this).css( 'color', '#444' ); }
                    );
                },
                appends = {};

            // IE8 fix for IE's transparent background event "feature"
            if ( IE && IE > 7 ) {
                cssMap.nextholder += 'background:#000;filter:alpha(opacity=0);';
                cssMap.prevholder += 'background:#000;filter:alpha(opacity=0);';
            }

            // create and insert CSS
            $.each(cssMap, function( key, value ) {
                css += '.galleria-'+prefix+key+'{'+value+'}';
            });

            css += '.galleria-'+prefix+'box.iframe .galleria-'+prefix+'prevholder,'+
                   '.galleria-'+prefix+'box.iframe .galleria-'+prefix+'nextholder{'+
                   'width:100px;height:100px;top:50%;margin-top:-70px}';

            Utils.insertStyleTag( css );

            // create the elements
            $.each(elems.split(' '), function( i, elemId ) {
                self.addElement( 'lightbox-' + elemId );
                el[ elemId ] = lightbox.elems[ elemId ] = self.get( 'lightbox-' + elemId );
            });

            // initiate the image
            lightbox.image = new Galleria.Picture();

            // append the elements
            $.each({
                    box: 'shadow content close prevholder nextholder',
                    info: 'title counter',
                    content: 'info image',
                    prevholder: 'prev',
                    nextholder: 'next'
                }, function( key, val ) {
                    var arr = [];
                    $.each( val.split(' '), function( i, prop ) {
                        arr.push( prefix + prop );
                    });
                    appends[ prefix+key ] = arr;
            });

            self.append( appends );

            $( el.image ).append( lightbox.image.container );

            $( DOM().body ).append( el.overlay, el.box );

            Utils.optimizeTouch( el.box );

            // add the prev/next nav and bind some controls

            hover( $( el.close ).bind( 'click', lightbox.hide ).html('&#215;') );

            $.each( ['Prev','Next'], function(i, dir) {

                var $d = $( el[ dir.toLowerCase() ] ).html( /v/.test( dir ) ? '&#8249;&nbsp;' : '&nbsp;&#8250;' ),
                    $e = $( el[ dir.toLowerCase()+'holder'] );

                $e.bind( 'click', function() {
                    lightbox[ 'show' + dir ]();
                });

                // IE7 and touch devices will simply show the nav
                if ( IE < 8 || Galleria.TOUCH ) {
                    $d.show();
                    return;
                }

                $e.hover( function() {
                    $d.show();
                }, function(e) {
                    $d.stop().fadeOut( 200 );
                });

            });
            $( el.overlay ).bind( 'click', lightbox.hide );

            // the lightbox animation is slow on ipad
            if ( Galleria.IPAD ) {
                self._options.lightboxTransitionSpeed = 0;
            }

        },

        rescale: function(event) {

            // calculate
             var width = Math.min( $win.width()-40, lightbox.width ),
                height = Math.min( $win.height()-60, lightbox.height ),
                ratio = Math.min( width / lightbox.width, height / lightbox.height ),
                destWidth = Math.round( lightbox.width * ratio ) + 40,
                destHeight = Math.round( lightbox.height * ratio ) + 60,
                to = {
                    width: destWidth,
                    height: destHeight,
                    'margin-top': Math.ceil( destHeight / 2 ) *- 1,
                    'margin-left': Math.ceil( destWidth / 2 ) *- 1
                };

            // if rescale event, don't animate
            if ( event ) {
                $( lightbox.elems.box ).css( to );
            } else {
                $( lightbox.elems.box ).animate( to, {
                    duration: self._options.lightboxTransitionSpeed,
                    easing: self._options.easing,
                    complete: function() {
                        var image = lightbox.image,
                            speed = self._options.lightboxFadeSpeed;

                        self.trigger({
                            type: Galleria.LIGHTBOX_IMAGE,
                            imageTarget: image.image
                        });

                        $( image.container ).show();

                        $( image.image ).animate({ opacity: 1 }, speed);
                        Utils.show( lightbox.elems.info, speed );
                    }
                });
            }
        },

        hide: function() {

            // remove the image
            lightbox.image.image = null;

            $win.unbind('resize', lightbox.rescale);

            $( lightbox.elems.box ).hide();

            Utils.hide( lightbox.elems.info );

            self.detachKeyboard();
            self.attachKeyboard( lightbox.keymap );

            lightbox.keymap = false;

            Utils.hide( lightbox.elems.overlay, 200, function() {
                $( this ).hide().css( 'opacity', self._options.overlayOpacity );
                self.trigger( Galleria.LIGHTBOX_CLOSE );
            });
        },

        showNext: function() {
            lightbox.show( self.getNext( lightbox.active ) );
        },

        showPrev: function() {
            lightbox.show( self.getPrev( lightbox.active ) );
        },

        show: function(index) {

            lightbox.active = index = typeof index === 'number' ? index : self.getIndex() || 0;

            if ( !lightbox.initialized ) {
                lightbox.init();
            }

            // temporarily attach some keys
            // save the old ones first in a cloned object
            if ( !lightbox.keymap ) {

                lightbox.keymap = $.extend({}, self._keyboard.map);

                self.attachKeyboard({
                    escape: lightbox.hide,
                    right: lightbox.showNext,
                    left: lightbox.showPrev
                });
            }

            $win.unbind('resize', lightbox.rescale );

            var data = self.getData(index),
                total = self.getDataLength(),
                n = self.getNext( index ),
                ndata, p, i;

            Utils.hide( lightbox.elems.info );

            try {
                for ( i = self._options.preload; i > 0; i-- ) {
                    p = new Galleria.Picture();
                    ndata = self.getData( n );
                    p.preload( 'big' in ndata ? ndata.big : ndata.image );
                    n = self.getNext( n );
                }
            } catch(e) {}

            lightbox.image.isIframe = !!data.iframe;

            $(lightbox.elems.box).toggleClass( 'iframe', !!data.iframe );

            lightbox.image.load( data.iframe || data.big || data.image, function( image ) {

                lightbox.width = image.isIframe ? $(window).width() : image.original.width;
                lightbox.height = image.isIframe ? $(window).height() : image.original.height;

                $( image.image ).css({
                    width: image.isIframe ? '100%' : '100.1%',
                    height: image.isIframe ? '100%' : '100.1%',
                    top: 0,
                    zIndex: 99998,
                    opacity: 0,
                    visibility: 'visible'
                });

                lightbox.elems.title.innerHTML = data.title || '';
                lightbox.elems.counter.innerHTML = (index + 1) + ' / ' + total;
                $win.resize( lightbox.rescale );
                lightbox.rescale();
            });

            $( lightbox.elems.overlay ).show().css( 'visibility', 'visible' );
            $( lightbox.elems.box ).show();
        }
    };

    return this;
};

// end Galleria constructor

Galleria.prototype = {

    // bring back the constructor reference

    constructor: Galleria,

    /**
        Use this function to initialize the gallery and start loading.
        Should only be called once per instance.

        @param {HTMLElement} target The target element
        @param {Object} options The gallery options

        @returns Instance
    */

    init: function( target, options ) {

        var self = this;

        options = _legacyOptions( options );

        // save the original ingredients
        this._original = {
            target: target,
            options: options,
            data: null
        };

        // save the target here
        this._target = this._dom.target = target.nodeName ? target : $( target ).get(0);

        // save the original content for destruction
        this._original.html = this._target.innerHTML;

        // push the instance
        _instances.push( this );

        // raise error if no target is detected
        if ( !this._target ) {
             Galleria.raise('Target not found', true);
             return;
        }

        // apply options
        this._options = {
            autoplay: false,
            carousel: true,
            carouselFollow: true,
            carouselSpeed: 400,
            carouselSteps: 'auto',
            clicknext: false,
            dailymotion: {
                foreground: '%23EEEEEE',
                highlight: '%235BCEC5',
                background: '%23222222',
                logo: 0,
                hideInfos: 1
            },
            dataConfig : function( elem ) { return {}; },
            dataSelector: 'img',
            dataSource: this._target,
            debug: undef,
            dummy: undef, // 1.2.5
            easing: 'galleria',
            extend: function(options) {},
            fullscreenCrop: undef, // 1.2.5
            fullscreenDoubleTap: true, // 1.2.4 toggles fullscreen on double-tap for touch devices
            fullscreenTransition: undef, // 1.2.6
            height: 0,
            idleMode: true, // 1.2.4 toggles idleMode
            idleTime: 3000,
            idleSpeed: 200,
            imageCrop: false,
            imageMargin: 0,
            imagePan: false,
            imagePanSmoothness: 12,
            imagePosition: '50%',
            imageTimeout: undef, // 1.2.5
            initialTransition: undef, // 1.2.4, replaces transitionInitial
            keepSource: false,
            layerFollow: true, // 1.2.5
            lightbox: false, // 1.2.3
            lightboxFadeSpeed: 200,
            lightboxTransitionSpeed: 200,
            linkSourceImages: true,
            maxScaleRatio: undef,
            minScaleRatio: undef,
            overlayOpacity: 0.85,
            overlayBackground: '#0b0b0b',
            pauseOnInteraction: true,
            popupLinks: false,
            preload: 2,
            queue: true,
            responsive: false,
            show: 0,
            showInfo: true,
            showCounter: true,
            showImagenav: true,
            swipe: true, // 1.2.4
            thumbCrop: true,
            thumbEventType: 'click',
            thumbFit: true,
            thumbMargin: 0,
            thumbQuality: 'auto',
            thumbnails: true,
            touchTransition: undef, // 1.2.6
            transition: 'fade',
            transitionInitial: undef, // legacy, deprecate in 1.3. Use initialTransition instead.
            transitionSpeed: 400,
            trueFullscreen: true, // 1.2.7
            useCanvas: false, // 1.2.4
            vimeo: {
                title: 0,
                byline: 0,
                portrait: 0,
                color: 'aaaaaa'
            },
            wait: 5000, // 1.2.7
            width: 'auto',
            youtube: {
                modestbranding: 1,
                autohide: 1,
                color: 'white',
                hd: 1,
                rel: 0,
                showinfo: 0
            }
        };

        // legacy support for transitionInitial
        this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial;

        // turn off debug
        if ( options && options.debug === false ) {
            DEBUG = false;
        }

        // set timeout
        if ( options && typeof options.imageTimeout === 'number' ) {
            TIMEOUT = options.imageTimeout;
        }

        // set dummy
        if ( options && typeof options.dummy === 'string' ) {
            DUMMY = options.dummy;
        }

        // hide all content
        $( this._target ).children().hide();

        // now we just have to wait for the theme...
        if ( typeof Galleria.theme === 'object' ) {
            this._init();
        } else {
            // push the instance into the pool and run it when the theme is ready
            _pool.push( this );
        }

        return this;
    },

    // this method should only be called once per instance
    // for manipulation of data, use the .load method

    _init: function() {

        var self = this,
            options = this._options;

        if ( this._initialized ) {
            Galleria.raise( 'Init failed: Gallery instance already initialized.' );
            return this;
        }

        this._initialized = true;

        if ( !Galleria.theme ) {
            Galleria.raise( 'Init failed: No theme found.', true );
            return this;
        }

        // merge the theme & caller options
        $.extend( true, options, Galleria.theme.defaults, this._original.options, Galleria.configure.options );

        // check for canvas support
        (function( can ) {

            if ( !( 'getContext' in can ) ) {
                can = null;
                return;
            }

            _canvas = _canvas || {
                elem: can,
                context: can.getContext( '2d' ),
                cache: {},
                length: 0
            };

        }( doc.createElement( 'canvas' ) ) );

        // bind the gallery to run when data is ready
        this.bind( Galleria.DATA, function() {

            // Warn for quirks mode
            if ( Galleria.QUIRK ) {
                Galleria.raise('Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML.');
            }

            // save the new data
            this._original.data = this._data;

            // lets show the counter here
            this.get('total').innerHTML = this.getDataLength();

            // cache the container
            var $container = this.$( 'container' );

            // the gallery is ready, let's just wait for the css
            var num = { width: 0, height: 0 };
            var testHeight = function() {
                return self.$( 'stage' ).height();
            };

            // check container and thumbnail height
            Utils.wait({
                until: function() {

                    // keep trying to get the value
                    num = self._getWH();
                    $container.width( num.width ).height( num.height );
                    return testHeight() && num.width && num.height > 50;

                },
                success: function() {

                    self._width = num.width;
                    self._height = num.height;

                    // for some strange reason, webkit needs a single setTimeout to play ball
                    if ( Galleria.WEBKIT ) {
                        window.setTimeout( function() {
                            self._run();
                        }, 1);
                    } else {
                        self._run();
                    }
                },
                error: function() {

                    // Height was probably not set, raise hard errors

                    if ( testHeight() ) {
                        Galleria.raise('Could not extract sufficient width/height of the gallery container. Traced measures: width:' + num.width + 'px, height: ' + num.height + 'px.', true);
                    } else {
                        Galleria.raise('Could not extract a stage height from the CSS. Traced height: ' + testHeight() + 'px.', true);
                    }
                },
                timeout: typeof this._options.wait == 'number' ? this._options.wait : false
            });
        });

        // build the gallery frame
        this.append({
            'info-text' :
                ['info-title', 'info-description'],
            'info' :
                ['info-text'],
            'image-nav' :
                ['image-nav-right', 'image-nav-left'],
            'stage' :
                ['images', 'loader', 'counter', 'image-nav'],
            'thumbnails-list' :
                ['thumbnails'],
            'thumbnails-container' :
                ['thumb-nav-left', 'thumbnails-list', 'thumb-nav-right'],
            'container' :
                ['stage', 'thumbnails-container', 'info', 'tooltip']
        });

        Utils.hide( this.$( 'counter' ).append(
            this.get( 'current' ),
            doc.createTextNode(' / '),
            this.get( 'total' )
        ) );

        this.setCounter('&#8211;');

        Utils.hide( self.get('tooltip') );

        // add a notouch class on the container to prevent unwanted :hovers on touch devices
        this.$( 'container' ).addClass( Galleria.TOUCH ? 'touch' : 'notouch' );

        // add images to the controls
        $.each( new Array(2), function( i ) {

            // create a new Picture instance
            var image = new Galleria.Picture();

            // apply some styles, create & prepend overlay
            $( image.container ).css({
                position: 'absolute',
                top: 0,
                left: 0
            }).prepend( self._layers[i] = $( Utils.create('galleria-layer') ).css({
                position: 'absolute',
                top:0, left:0, right:0, bottom:0,
                zIndex:2
            })[0] );

            // append the image
            self.$( 'images' ).append( image.container );

            // reload the controls
            self._controls[i] = image;

        });

        // some forced generic styling
        this.$( 'images' ).css({
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        });

        this.$( 'thumbnails, thumbnails-list' ).css({
            overflow: 'hidden',
            position: 'relative'
        });

        // bind image navigation arrows
        this.$( 'image-nav-right, image-nav-left' ).bind( 'click', function(e) {

            // tune the clicknext option
            if ( options.clicknext ) {
                e.stopPropagation();
            }

            // pause if options is set
            if ( options.pauseOnInteraction ) {
                self.pause();
            }

            // navigate
            var fn = /right/.test( this.className ) ? 'next' : 'prev';
            self[ fn ]();

        });

        // hide controls if chosen to
        $.each( ['info','counter','image-nav'], function( i, el ) {
            if ( options[ 'show' + el.substr(0,1).toUpperCase() + el.substr(1).replace(/-/,'') ] === false ) {
                Utils.moveOut( self.get( el.toLowerCase() ) );
            }
        });

        // load up target content
        this.load();

        // now it's usually safe to remove the content
        // IE will never stop loading if we remove it, so let's keep it hidden for IE (it's usually fast enough anyway)
        if ( !options.keepSource && !IE ) {
            this._target.innerHTML = '';
        }

        // re-append the errors, if they happened before clearing
        if ( this.get( 'errors' ) ) {
            this.appendChild( 'target', 'errors' );
        }

        // append the gallery frame
        this.appendChild( 'target', 'container' );

        // parse the carousel on each thumb load
        if ( options.carousel ) {
            var count = 0,
                show = options.show;
            this.bind( Galleria.THUMBNAIL, function() {
                this.updateCarousel();
                if ( ++count == this.getDataLength() && typeof show == 'number' && show > 0 ) {
                    this._carousel.follow( show );
                }
            });
        }

        // bind window resize for responsiveness
        if ( options.responsive ) {
            $win.bind( 'resize', function() {
                if ( !self.isFullscreen() ) {
                    self.resize();
                }
            });
        }

        // bind swipe gesture
        if ( options.swipe ) {

            (function( images ) {

                var swipeStart = [0,0],
                    swipeStop = [0,0],
                    limitX = 30,
                    limitY = 100,
                    multi = false,
                    tid = 0,
                    data,
                    ev = {
                        start: 'touchstart',
                        move: 'touchmove',
                        stop: 'touchend'
                    },
                    getData = function(e) {
                        return e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                    },
                    moveHandler = function( e ) {

                        if ( e.originalEvent.touches && e.originalEvent.touches.length > 1 ) {
                            return;
                        }

                        data = getData( e );
                        swipeStop = [ data.pageX, data.pageY ];

                        if ( !swipeStart[0] ) {
                            swipeStart = swipeStop;
                        }

                        if ( Math.abs( swipeStart[0] - swipeStop[0] ) > 10 ) {
                            e.preventDefault();
                        }
                    },
                    upHandler = function( e ) {

                        images.unbind( ev.move, moveHandler );

                        // if multitouch (possibly zooming), abort
                        if ( ( e.originalEvent.touches && e.originalEvent.touches.length ) || multi ) {
                            multi = !multi;
                            return;
                        }

                        if ( Utils.timestamp() - tid < 1000 &&
                             Math.abs( swipeStart[0] - swipeStop[0] ) > limitX &&
                             Math.abs( swipeStart[1] - swipeStop[1] ) < limitY ) {

                            e.preventDefault();
                            self[ swipeStart[0] > swipeStop[0] ? 'next' : 'prev' ]();
                        }

                        swipeStart = swipeStop = [0,0];
                    };

                images.bind(ev.start, function(e) {

                    if ( e.originalEvent.touches && e.originalEvent.touches.length > 1 ) {
                        return;
                    }

                    data = getData(e);
                    tid = Utils.timestamp();
                    swipeStart = swipeStop = [ data.pageX, data.pageY ];
                    images.bind(ev.move, moveHandler ).one(ev.stop, upHandler);

                });

            }( self.$( 'images' ) ));

            // double-tap/click fullscreen toggle

            if ( options.fullscreenDoubleTap ) {

                this.$( 'stage' ).bind( 'touchstart', (function() {
                    var last, cx, cy, lx, ly, now,
                        getData = function(e) {
                            return e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                        };
                    return function(e) {
                        now = Galleria.utils.timestamp();
                        cx = getData(e).pageX;
                        cy = getData(e).pageY;
                        if ( ( now - last < 500 ) && ( cx - lx < 20) && ( cy - ly < 20) ) {
                            self.toggleFullscreen();
                            e.preventDefault();
                            self.$( 'stage' ).unbind( 'touchend', arguments.callee );
                            return;
                        }
                        last = now;
                        lx = cx;
                        ly = cy;
                    };
                }()));
            }

        }

        // optimize touch for container
        Utils.optimizeTouch( this.get( 'container' ) );

        // bind the ons
        $.each( Galleria.on.binds, function(i, bind) {
            self.bind( bind.type, bind.callback );
        });

        return this;
    },

    // parse width & height from CSS or options

    _getWH : function() {

        var $container = this.$( 'container' ),
            $target = this.$( 'target' ),
            self = this,
            num = {},
            arr;

        $.each(['width', 'height'], function( i, m ) {

            // first check if options is set
            if ( self._options[ m ] && typeof self._options[ m ] === 'number') {
                num[ m ] = self._options[ m ];
            } else {

                arr = [
                    Utils.parseValue( $container.css( m ) ),         // the container css height
                    Utils.parseValue( $target.css( m ) ),            // the target css height
                    $container[ m ](),                               // the container jQuery method
                    $target[ m ]()                                   // the target jQuery method
                ];

                // if first time, include the min-width & min-height
                if ( !self[ '_'+m ] ) {
                    arr.splice(arr.length,
                        Utils.parseValue( $container.css( 'min-'+m ) ),
                        Utils.parseValue( $target.css( 'min-'+m ) )
                    );
                }

                // else extract the measures from different sources and grab the highest value
                num[ m ] = Math.max.apply( Math, arr );
            }
        });

        // allow setting a height ratio instead of exact value
        // useful when doing responsive galleries
        if ( self._options.height && self._options.height < 2 ) {
            num.height = num.width * self._options.height;
        }

        return num;
    },

    // Creates the thumbnails and carousel
    // can be used at any time, f.ex when the data object is manipulated

    _createThumbnails : function() {

        this.get( 'total' ).innerHTML = this.getDataLength();

        var i,
            src,
            thumb,
            data,
            special,

            $container,

            self = this,
            o = this._options,

            // get previously active thumbnail, if exists
            active = (function() {
                var a = self.$('thumbnails').find('.active');
                if ( !a.length ) {
                    return false;
                }
                return a.find('img').attr('src');
            }()),

            // cache the thumbnail option
            optval = typeof o.thumbnails === 'string' ? o.thumbnails.toLowerCase() : null,

            // move some data into the instance
            // for some reason, jQuery cant handle css(property) when zooming in FF, breaking the gallery
            // so we resort to getComputedStyle for browsers who support it
            getStyle = function( prop ) {
                return doc.defaultView && doc.defaultView.getComputedStyle ?
                    doc.defaultView.getComputedStyle( thumb.container, null )[ prop ] :
                    $container.css( prop );
            },

            fake = function(image, index, container) {
                return function() {
                    $( container ).append( image );
                    self.trigger({
                        type: Galleria.THUMBNAIL,
                        thumbTarget: image,
                        index: index,
                        galleriaData: self.getData( index )
                    });
                };
            },

            onThumbEvent = function( e ) {

                // pause if option is set
                if ( o.pauseOnInteraction ) {
                    self.pause();
                }

                // extract the index from the data
                var index = $( e.currentTarget ).data( 'index' );
                if ( self.getIndex() !== index ) {
                    self.show( index );
                }

                e.preventDefault();
            },

            onThumbLoad = function( thumb ) {

                // scale when ready
                thumb.scale({
                    width:    thumb.data.width,
                    height:   thumb.data.height,
                    crop:     o.thumbCrop,
                    margin:   o.thumbMargin,
                    canvas:   o.useCanvas,
                    complete: function( thumb ) {

                        // shrink thumbnails to fit
                        var top = ['left', 'top'],
                            arr = ['Width', 'Height'],
                            m,
                            css,
                            data = self.getData( thumb.index ),
                            special = data.thumb.split(':');

                        // calculate shrinked positions
                        $.each(arr, function( i, measure ) {
                            m = measure.toLowerCase();
                            if ( (o.thumbCrop !== true || o.thumbCrop === m ) && o.thumbFit ) {
                                css = {};
                                css[ m ] = thumb[ m ];
                                $( thumb.container ).css( css );
                                css = {};
                                css[ top[ i ] ] = 0;
                                $( thumb.image ).css( css );
                            }

                            // cache outer measures
                            thumb[ 'outer' + measure ] = $( thumb.container )[ 'outer' + measure ]( true );
                        });

                        // set high quality if downscale is moderate
                        Utils.toggleQuality( thumb.image,
                            o.thumbQuality === true ||
                            ( o.thumbQuality === 'auto' && thumb.original.width < thumb.width * 3 )
                        );

                        // get "special" thumbs from provider
                        if( data.iframe && special.length == 2 && special[0] in _video ) {
                            _video[ special[0] ].getThumb( special[1], (function(img) {
                                return function(src) {
                                    img.src = src;
                                };
                            }( thumb.image ) ));
                        }

                        // trigger the THUMBNAIL event
                        self.trigger({
                            type: Galleria.THUMBNAIL,
                            thumbTarget: thumb.image,
                            index: thumb.data.order,
                            galleriaData: self.getData( thumb.data.order )
                        });
                    }
                });
            };

        this._thumbnails = [];

        this.$( 'thumbnails' ).empty();

        // loop through data and create thumbnails
        for( i = 0; this._data[ i ]; i++ ) {

            data = this._data[ i ];

            if ( o.thumbnails === true && (data.thumb || data.image) ) {

                // add a new Picture instance
                thumb = new Galleria.Picture(i);

                // save the index
                thumb.index = i;

                // get source from thumb or image
                src = data.thumb || data.image;

                // append the thumbnail
                this.$( 'thumbnails' ).append( thumb.container );

                // cache the container
                $container = $( thumb.container );

                thumb.data = {
                    width  : Utils.parseValue( getStyle( 'width' ) ),
                    height : Utils.parseValue( getStyle( 'height' ) ),
                    order  : i
                };

                // grab & reset size for smoother thumbnail loads
                if ( o.thumbFit && o.thumbCrop !== true ) {
                    $container.css( { width: 'auto', height: 'auto' } );
                } else {
                    $container.css( { width: thumb.data.width, height: thumb.data.height } );
                }

                // load the thumbnail
                special = src.split(':');
                if ( special.length == 2 && special[0] in _video ) {
                    thumb.load('data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D', {
                        height: thumb.data.height,
                        width: thumb.data.height*1.25
                    }, onThumbLoad);
                } else {
                    thumb.load( src, onThumbLoad );
                }

                // preload all images here
                if ( o.preload === 'all' ) {
                    thumb.preload( data.image );
                }

            // create empty spans if thumbnails is set to 'empty'
            } else if ( data.iframe || optval === 'empty' || optval === 'numbers' ) {

                thumb = {
                    container:  Utils.create( 'galleria-image' ),
                    image: Utils.create( 'img', 'span' ),
                    ready: true
                };


                // create numbered thumbnails
                if ( optval === 'numbers' ) {
                    $( thumb.image ).text( i + 1 );
                }

                if( data.iframe ) {
                    $( thumb.image ).addClass('iframe');
                }

                this.$( 'thumbnails' ).append( thumb.container );

                // we need to "fake" a loading delay before we append and trigger
                // 50+ should be enough

                window.setTimeout( ( fake )( thumb.image, i, thumb.container ), 50 + ( i*20 ) );

            // create null object to silent errors
            } else {
                thumb = {
                    container: null,
                    image: null
                };
            }

            // add events for thumbnails
            // you can control the event type using thumb_event_type
            // we'll add the same event to the source if it's kept

            $( thumb.container ).add( o.keepSource && o.linkSourceImages ? data.original : null )
                .data('index', i).bind( o.thumbEventType, onThumbEvent );

            if (active === src) {
                $( thumb.container ).addClass( 'active' );
            }

            this._thumbnails.push( thumb );
        }
    },

    // the internal _run method should be called after loading data into galleria
    // makes sure the gallery has proper measurements before postrun & ready
    _run : function() {

        var self = this;

        self._createThumbnails();

        // make sure we have a stageHeight && stageWidth

        Utils.wait({

            timeout: 10000,

            until: function() {

                // Opera crap
                if ( Galleria.OPERA ) {
                    self.$( 'stage' ).css( 'display', 'inline-block' );
                }

                self._stageWidth  = self.$( 'stage' ).width();
                self._stageHeight = self.$( 'stage' ).height();

                return( self._stageWidth &&
                        self._stageHeight > 50 ); // what is an acceptable height?
            },

            success: function() {

                // save the instance
                _galleries.push( self );

                // postrun some stuff after the gallery is ready

                // show counter
                Utils.show( self.get('counter') );

                // bind carousel nav
                if ( self._options.carousel ) {
                    self._carousel.bindControls();
                }

                // start autoplay
                if ( self._options.autoplay ) {

                    self.pause();

                    if ( typeof self._options.autoplay === 'number' ) {
                        self._playtime = self._options.autoplay;
                    }

                    self.trigger( Galleria.PLAY );
                    self._playing = true;
                }
                // if second load, just do the show and return
                if ( self._firstrun ) {
                    if ( typeof self._options.show === 'number' ) {
                        self.show( self._options.show );
                    }
                    return;
                }

                self._firstrun = true;

                // initialize the History plugin
                if ( Galleria.History ) {

                    // bind the show method
                    Galleria.History.change(function( value ) {

                        // if ID is NaN, the user pressed back from the first image
                        // return to previous address
                        if ( isNaN( value ) ) {
                            window.history.go(-1);

                        // else show the image
                        } else {
                            self.show( value, undef, true );
                        }
                    });
                }

                self.trigger( Galleria.READY );

                // call the theme init method
                Galleria.theme.init.call( self, self._options );

                // Trigger Galleria.ready
                $.each( Galleria.ready.callbacks, function() {
                    this.call( self, self._options );
                });

                // call the extend option
                self._options.extend.call( self, self._options );

                // show the initial image
                // first test for permalinks in history
                if ( /^[0-9]{1,4}$/.test( HASH ) && Galleria.History ) {
                    self.show( HASH, undef, true );

                } else if( self._data[ self._options.show ] ) {
                    self.show( self._options.show );
                }
            },

            error: function() {
                Galleria.raise('Stage width or height is too small to show the gallery. Traced measures: width:' + self._stageWidth + 'px, height: ' + self._stageHeight + 'px.', true);
            }

        });
    },

    /**
        Loads data into the gallery.
        You can call this method on an existing gallery to reload the gallery with new data.

        @param {Array|string} [source] Optional JSON array of data or selector of where to find data in the document.
        Defaults to the Galleria target or dataSource option.

        @param {string} [selector] Optional element selector of what elements to parse.
        Defaults to 'img'.

        @param {Function} [config] Optional function to modify the data extraction proceedure from the selector.
        See the dataConfig option for more information.

        @returns Instance
    */

    load : function( source, selector, config ) {

        var self = this;

        // empty the data array
        this._data = [];

        // empty the thumbnails
        this._thumbnails = [];
        this.$('thumbnails').empty();

        // shorten the arguments
        if ( typeof selector === 'function' ) {
            config = selector;
            selector = null;
        }

        // use the source set by target
        source = source || this._options.dataSource;

        // use selector set by option
        selector = selector || this._options.dataSelector;

        // use the dataConfig set by option
        config = config || this._options.dataConfig;

        // if source is a true object, make it into an array
        if( /^function Object/.test( source.constructor ) ) {
            source = [source];
        }

        // check if the data is an array already
        if ( source.constructor === Array ) {
            if ( this.validate( source ) ) {

                this._data = source;
                this._parseData().trigger( Galleria.DATA );

            } else {
                Galleria.raise( 'Load failed: JSON Array not valid.' );
            }
            return this;
        }

        // add .video and .iframe to the selector (1.2.7)
        selector += ',.video,.iframe';

        // loop through images and set data
        $( source ).find( selector ).each( function( i, elem ) {

            elem = $( elem );
            var data = {},
                parent = elem.parent(),
                href = parent.attr( 'href' ),
                rel  = parent.attr( 'rel' );

            if( href && ( elem[0].nodeName == 'IMG' || elem.hasClass('video') ) && _videoTest( href ) ) {
                data.video = href;
            } else if( href && elem.hasClass('iframe') ) {
                data.iframe = href;
            } else {
                data.image = data.big = href;
            }

            if ( rel ) {
                data.big = rel;
            }

            // alternative extraction from HTML5 data attribute, added in 1.2.7
            $.each( 'big title description link layer'.split(' '), function( i, val ) {
                if ( elem.data(val) ) {
                    data[ val ] = elem.data(val);
                }
            });

            // mix default extractions with the hrefs and config
            // and push it into the data array
            self._data.push( $.extend({

                title:       elem.attr('title') || '',
                thumb:       elem.attr('src'),
                image:       elem.attr('src'),
                big:         elem.attr('src'),
                description: elem.attr('alt') || '',
                link:        elem.attr('longdesc'),
                original:    elem.get(0) // saved as a reference

            }, data, config( elem ) ) );

        });
        // trigger the DATA event and return
        if ( this.getDataLength() ) {
            this._parseData().trigger( Galleria.DATA );
        } else {
            Galleria.raise('Load failed: no data found.');
        }
        return this;

    },

    // make sure the data works properly
    _parseData : function() {

        var self = this,
            current;

        $.each( this._data, function( i, data ) {

            current = self._data[ i ];

            // copy image as thumb if no thumb exists
            if ( 'thumb' in data === false ) {
                current.thumb = data.image;
            }
            // copy image as big image if no biggie exists
            if ( !'big' in data ) {
                current.big = data.image;
            }
            // parse video
            if ( 'video' in data ) {
                var result = _videoTest( data.video );

                if ( result ) {
                    current.iframe = _video[ result.provider ].embed( result.id ) + (function() {

                        // add options
                        if ( typeof self._options[ result.provider ] == 'object' ) {
                            var str = '?', arr = [];
                            $.each( self._options[ result.provider ], function( key, val ) {
                                arr.push( key + '=' + val );
                            });

                            // small youtube specifics, perhaps move to _video later
                            if ( result.provider == 'youtube' ) {
                                arr = ['wmode=opaque'].concat(arr);
                            }
                            return str + arr.join('&');
                        }
                        return '';
                    }());
                    delete current.video;
                    if( !('thumb' in current) || !current.thumb ) {
                        current.thumb = result.provider+':'+result.id;
                    }
                }
            }
        });

        return this;
    },

    /**
        Destroy the Galleria instance and recover the original content

        @example this.destroy();

        @returns Instance
    */

    destroy: function() {
        this.get('target').innerHTML = this._original.html;
        return this;
    },

    /**
        Adds and/or removes images from the gallery
        Works just like Array.splice
        https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice

        @example this.splice( 2, 4 ); // removes 4 images after the second image

        @returns Instance
    */

    splice: function() {
        var self = this,
            args = Utils.array( arguments );
        window.setTimeout(function() {
            protoArray.splice.apply( self._data, args );
            self._parseData()._createThumbnails();
        },2);
        return self;
    },

    /**
        Append images to the gallery
        Works just like Array.push
        https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push

        @example this.push({ image: 'image1.jpg' }); // appends the image to the gallery

        @returns Instance
    */

    push: function() {
        var self = this,
            args = Utils.array( arguments );
        window.setTimeout(function() {
            protoArray.push.apply( self._data, args );
            self._parseData()._createThumbnails();
        },2);
        return self;
    },

    _getActive: function() {
        return this._controls.getActive();
    },

    validate : function( data ) {
        // todo: validate a custom data array
        return true;
    },

    /**
        Bind any event to Galleria

        @param {string} type The Event type to listen for
        @param {Function} fn The function to execute when the event is triggered

        @example this.bind( 'image', function() { Galleria.log('image shown') });

        @returns Instance
    */

    bind : function(type, fn) {

        // allow 'image' instead of Galleria.IMAGE
        type = _patchEvent( type );

        this.$( 'container' ).bind( type, this.proxy(fn) );
        return this;
    },

    /**
        Unbind any event to Galleria

        @param {string} type The Event type to forget

        @returns Instance
    */

    unbind : function(type) {

        type = _patchEvent( type );

        this.$( 'container' ).unbind( type );
        return this;
    },

    /**
        Manually trigger a Galleria event

        @param {string} type The Event to trigger

        @returns Instance
    */

    trigger : function( type ) {

        type = typeof type === 'object' ?
            $.extend( type, { scope: this } ) :
            { type: _patchEvent( type ), scope: this };

        this.$( 'container' ).trigger( type );

        return this;
    },

    /**
        Assign an "idle state" to any element.
        The idle state will be applied after a certain amount of idle time
        Useful to hide f.ex navigation when the gallery is inactive

        @param {HTMLElement|string} elem The Dom node or selector to apply the idle state to
        @param {Object} styles the CSS styles to apply

        @example addIdleState( this.get('image-nav'), { opacity: 0 });
        @example addIdleState( '.galleria-image-nav', { top: -200 });

        @returns Instance
    */

    addIdleState: function( elem, styles ) {
        this._idle.add.apply( this._idle, Utils.array( arguments ) );
        return this;
    },

    /**
        Removes any idle state previously set using addIdleState()

        @param {HTMLElement|string} elem The Dom node or selector to remove the idle state from.

        @returns Instance
    */

    removeIdleState: function( elem ) {
        this._idle.remove.apply( this._idle, Utils.array( arguments ) );
        return this;
    },

    /**
        Force Galleria to enter idle mode.

        @returns Instance
    */

    enterIdleMode: function() {
        this._idle.hide();
        return this;
    },

    /**
        Force Galleria to exit idle mode.

        @returns Instance
    */

    exitIdleMode: function() {
        this._idle.showAll();
        return this;
    },

    /**
        Enter FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied.

        @returns Instance
    */

    enterFullscreen: function( callback ) {
        this._fullscreen.enter.apply( this, Utils.array( arguments ) );
        return this;
    },

    /**
        Exits FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied.

        @returns Instance
    */

    exitFullscreen: function( callback ) {
        this._fullscreen.exit.apply( this, Utils.array( arguments ) );
        return this;
    },

    /**
        Toggle FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied or removed.

        @returns Instance
    */

    toggleFullscreen: function( callback ) {
        this._fullscreen[ this.isFullscreen() ? 'exit' : 'enter'].apply( this, Utils.array( arguments ) );
        return this;
    },

    /**
        Adds a tooltip to any element.
        You can also call this method with an object as argument with elemID:value pairs to apply tooltips to (see examples)

        @param {HTMLElement} elem The DOM Node to attach the event to
        @param {string|Function} value The tooltip message. Can also be a function that returns a string.

        @example this.bindTooltip( this.get('thumbnails'), 'My thumbnails');
        @example this.bindTooltip( this.get('thumbnails'), function() { return 'My thumbs' });
        @example this.bindTooltip( { image_nav: 'Navigation' });

        @returns Instance
    */

    bindTooltip: function( elem, value ) {
        this._tooltip.bind.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Note: this method is deprecated. Use refreshTooltip() instead.

        Redefine a tooltip.
        Use this if you want to re-apply a tooltip value to an already bound tooltip element.

        @param {HTMLElement} elem The DOM Node to attach the event to
        @param {string|Function} value The tooltip message. Can also be a function that returns a string.

        @returns Instance
    */

    defineTooltip: function( elem, value ) {
        this._tooltip.define.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Refresh a tooltip value.
        Use this if you want to change the tooltip value at runtime, f.ex if you have a play/pause toggle.

        @param {HTMLElement} elem The DOM Node that has a tooltip that should be refreshed

        @returns Instance
    */

    refreshTooltip: function( elem ) {
        this._tooltip.show.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Open a pre-designed lightbox with the currently active image.
        You can control some visuals using gallery options.

        @returns Instance
    */

    openLightbox: function() {
        this._lightbox.show.apply( this._lightbox, Utils.array( arguments ) );
        return this;
    },

    /**
        Close the lightbox.

        @returns Instance
    */

    closeLightbox: function() {
        this._lightbox.hide.apply( this._lightbox, Utils.array( arguments ) );
        return this;
    },

    /**
        Get the currently active image element.

        @returns {HTMLElement} The image element
    */

    getActiveImage: function() {
        return this._getActive().image || undef;
    },

    /**
        Get the currently active thumbnail element.

        @returns {HTMLElement} The thumbnail element
    */

    getActiveThumb: function() {
        return this._thumbnails[ this._active ].image || undef;
    },

    /**
        Get the mouse position relative to the gallery container

        @param e The mouse event

        @example

var gallery = this;
$(document).mousemove(function(e) {
    console.log( gallery.getMousePosition(e).x );
});

        @returns {Object} Object with x & y of the relative mouse postion
    */

    getMousePosition : function(e) {
        return {
            x: e.pageX - this.$( 'container' ).offset().left,
            y: e.pageY - this.$( 'container' ).offset().top
        };
    },

    /**
        Adds a panning effect to the image

        @param [img] The optional image element. If not specified it takes the currently active image

        @returns Instance
    */

    addPan : function( img ) {

        if ( this._options.imageCrop === false ) {
            return;
        }

        img = $( img || this.getActiveImage() );

        // define some variables and methods
        var self   = this,
            x      = img.width() / 2,
            y      = img.height() / 2,
            destX  = parseInt( img.css( 'left' ), 10 ),
            destY  = parseInt( img.css( 'top' ), 10 ),
            curX   = destX || 0,
            curY   = destY || 0,
            distX  = 0,
            distY  = 0,
            active = false,
            ts     = Utils.timestamp(),
            cache  = 0,
            move   = 0,

            // positions the image
            position = function( dist, cur, pos ) {
                if ( dist > 0 ) {
                    move = Math.round( Math.max( dist * -1, Math.min( 0, cur ) ) );
                    if ( cache !== move ) {

                        cache = move;

                        if ( IE === 8 ) { // scroll is faster for IE
                            img.parent()[ 'scroll' + pos ]( move * -1 );
                        } else {
                            var css = {};
                            css[ pos.toLowerCase() ] = move;
                            img.css(css);
                        }
                    }
                }
            },

            // calculates mouse position after 50ms
            calculate = function(e) {
                if (Utils.timestamp() - ts < 50) {
                    return;
                }
                active = true;
                x = self.getMousePosition(e).x;
                y = self.getMousePosition(e).y;
            },

            // the main loop to check
            loop = function(e) {

                if (!active) {
                    return;
                }

                distX = img.width() - self._stageWidth;
                distY = img.height() - self._stageHeight;
                destX = x / self._stageWidth * distX * -1;
                destY = y / self._stageHeight * distY * -1;
                curX += ( destX - curX ) / self._options.imagePanSmoothness;
                curY += ( destY - curY ) / self._options.imagePanSmoothness;

                position( distY, curY, 'Top' );
                position( distX, curX, 'Left' );

            };

        // we need to use scroll in IE8 to speed things up
        if ( IE === 8 ) {

            img.parent().scrollTop( curY * -1 ).scrollLeft( curX * -1 );
            img.css({
                top: 0,
                left: 0
            });

        }

        // unbind and bind event
        this.$( 'stage' ).unbind( 'mousemove', calculate ).bind( 'mousemove', calculate );

        // loop the loop
        Utils.addTimer( 'pan' + self._id, loop, 50, true);

        return this;
    },

    /**
        Brings the scope into any callback

        @param fn The callback to bring the scope into
        @param [scope] Optional scope to bring

        @example $('#fullscreen').click( this.proxy(function() { this.enterFullscreen(); }) )

        @returns {Function} Return the callback with the gallery scope
    */

    proxy : function( fn, scope ) {
        if ( typeof fn !== 'function' ) {
            return F;
        }
        scope = scope || this;
        return function() {
            return fn.apply( scope, Utils.array( arguments ) );
        };
    },

    /**
        Removes the panning effect set by addPan()

        @returns Instance
    */

    removePan: function() {

        // todo: doublecheck IE8

        this.$( 'stage' ).unbind( 'mousemove' );

        Utils.clearTimer( 'pan' + this._id );

        return this;
    },

    /**
        Adds an element to the Galleria DOM array.
        When you add an element here, you can access it using element ID in many API calls

        @param {string} id The element ID you wish to use. You can add many elements by adding more arguments.

        @example addElement('mybutton');
        @example addElement('mybutton','mylink');

        @returns Instance
    */

    addElement : function( id ) {

        var dom = this._dom;

        $.each( Utils.array(arguments), function( i, blueprint ) {
           dom[ blueprint ] = Utils.create( 'galleria-' + blueprint );
        });

        return this;
    },

    /**
        Attach keyboard events to Galleria

        @param {Object} map The map object of events.
        Possible keys are 'UP', 'DOWN', 'LEFT', 'RIGHT', 'RETURN', 'ESCAPE', 'BACKSPACE', and 'SPACE'.

        @example

this.attachKeyboard({
    right: this.next,
    left: this.prev,
    up: function() {
        console.log( 'up key pressed' )
    }
});

        @returns Instance
    */

    attachKeyboard : function( map ) {
        this._keyboard.attach.apply( this._keyboard, Utils.array( arguments ) );
        return this;
    },

    /**
        Detach all keyboard events to Galleria

        @returns Instance
    */

    detachKeyboard : function() {
        this._keyboard.detach.apply( this._keyboard, Utils.array( arguments ) );
        return this;
    },

    /**
        Fast helper for appending galleria elements that you added using addElement()

        @param {string} parentID The parent element ID where the element will be appended
        @param {string} childID the element ID that should be appended

        @example this.addElement('myElement');
        this.appendChild( 'info', 'myElement' );

        @returns Instance
    */

    appendChild : function( parentID, childID ) {
        this.$( parentID ).append( this.get( childID ) || childID );
        return this;
    },

    /**
        Fast helper for prepending galleria elements that you added using addElement()

        @param {string} parentID The parent element ID where the element will be prepended
        @param {string} childID the element ID that should be prepended

        @example

this.addElement('myElement');
this.prependChild( 'info', 'myElement' );

        @returns Instance
    */

    prependChild : function( parentID, childID ) {
        this.$( parentID ).prepend( this.get( childID ) || childID );
        return this;
    },

    /**
        Remove an element by blueprint

        @param {string} elemID The element to be removed.
        You can remove multiple elements by adding arguments.

        @returns Instance
    */

    remove : function( elemID ) {
        this.$( Utils.array( arguments ).join(',') ).remove();
        return this;
    },

    // a fast helper for building dom structures
    // leave this out of the API for now

    append : function( data ) {
        var i, j;
        for( i in data ) {
            if ( data.hasOwnProperty( i ) ) {
                if ( data[i].constructor === Array ) {
                    for( j = 0; data[i][j]; j++ ) {
                        this.appendChild( i, data[i][j] );
                    }
                } else {
                    this.appendChild( i, data[i] );
                }
            }
        }
        return this;
    },

    // an internal helper for scaling according to options
    _scaleImage : function( image, options ) {

        image = image || this._controls.getActive();

        // janpub (JH) fix:
        // image might be unselected yet
        // e.g. when external logics rescales the gallery on window resize events
        if( !image ) {
            return;
        }

        var self = this,

            complete,

            scaleLayer = function( img ) {
                $( img.container ).children(':first').css({
                    top: Math.max(0, Utils.parseValue( img.image.style.top )),
                    left: Math.max(0, Utils.parseValue( img.image.style.left )),
                    width: Utils.parseValue( img.image.width ),
                    height: Utils.parseValue( img.image.height )
                });
            };

        options = $.extend({
            width:    this._stageWidth,
            height:   this._stageHeight,
            crop:     this._options.imageCrop,
            max:      this._options.maxScaleRatio,
            min:      this._options.minScaleRatio,
            margin:   this._options.imageMargin,
            position: this._options.imagePosition
        }, options );

        if ( this._options.layerFollow && this._options.imageCrop !== true ) {

            if ( typeof options.complete == 'function' ) {
                complete = options.complete;
                options.complete = function() {
                    complete.call( image, image );
                    scaleLayer( image );
                };
            } else {
                options.complete = scaleLayer;
            }

        } else {
            $( image.container ).children(':first').css({ top: 0, left: 0 });
        }

        image.scale( options );
        return this;
    },

    /**
        Updates the carousel,
        useful if you resize the gallery and want to re-check if the carousel nav is needed.

        @returns Instance
    */

    updateCarousel : function() {
        this._carousel.update();
        return this;
    },

    /**
        Resize the entire gallery container

        @param {Object} [measures] Optional object with width/height specified
        @param {Function} [complete] The callback to be called when the scaling is complete

        @returns Instance
    */

    resize : function( measures, complete ) {

        if ( typeof measures == 'function' ) {
            complete = measures;
            measures = undef;
        }

        measures = $.extend( { width:0, height:0 }, measures );

        var self = this,
            $container = this.$( 'container' ),
            aspect = this._options.responsive == 'aspect' && ( !measures.width || !measures.height ),
            ratio;

        $.each( measures, function( m, val ) {
            if ( !val ) {
                $container[ m ]( 'auto' );
                measures[ m ] = self._getWH()[ m ];
            }
        });

        // experimental aspect option, not documented yet. Use ratio-based height instead!
        if ( aspect ) {
            ratio = Math.min( measures.width/this._width, measures.height/this._height );
        }

        $.each( measures, function( m, val ) {
            $container[ m ]( ratio ? ratio * self[ '_' + m ] : val );
        });

        return this.rescale( complete );

    },

    /**
        Rescales the gallery

        @param {number} width The target width
        @param {number} height The target height
        @param {Function} complete The callback to be called when the scaling is complete

        @returns Instance
    */

    rescale : function( width, height, complete ) {

        var self = this;

        // allow rescale(fn)
        if ( typeof width === 'function' ) {
            complete = width;
            width = undef;
        }

        var scale = function() {

            // set stagewidth
            self._stageWidth = width || self.$( 'stage' ).width();
            self._stageHeight = height || self.$( 'stage' ).height();

            // scale the active image
            self._scaleImage();

            if ( self._options.carousel ) {
                self.updateCarousel();
            }

            self.trigger( Galleria.RESCALE );

            if ( typeof complete === 'function' ) {
                complete.call( self );
            }
        };


        if ( Galleria.WEBKIT && !Galleria.TOUCH && !width && !height ) {
            Utils.addTimer( false, scale, 10 );// webkit is too fast
        } else {
            scale.call( self );
        }

        return this;
    },

    /**
        Refreshes the gallery.
        Useful if you change image options at runtime and want to apply the changes to the active image.

        @returns Instance
    */

    refreshImage : function() {
        this._scaleImage();
        if ( this._options.imagePan ) {
            this.addPan();
        }
        return this;
    },

    /**
        Shows an image by index

        @param {number|boolean} index The index to show
        @param {Boolean} rewind A boolean that should be true if you want the transition to go back

        @returns Instance
    */

    show : function( index, rewind, _history ) {

        // do nothing if index is false or queue is false and transition is in progress
        if ( index === false || ( !this._options.queue && this._queue.stalled ) ) {
            return;
        }

        index = Math.max( 0, Math.min( parseInt( index, 10 ), this.getDataLength() - 1 ) );

        rewind = typeof rewind !== 'undefined' ? !!rewind : index < this.getIndex();

        _history = _history || false;

        // do the history thing and return
        if ( !_history && Galleria.History ) {
            Galleria.History.set( index.toString() );
            return;
        }

        this._active = index;

        protoArray.push.call( this._queue, {
            index : index,
            rewind : rewind
        });
        if ( !this._queue.stalled ) {
            this._show();
        }

        return this;
    },

    // the internal _show method does the actual showing
    _show : function() {

        // shortcuts
        var self = this,
            queue = this._queue[ 0 ],
            data = this.getData( queue.index );

        if ( !data ) {
            return;
        }

        var src = data.iframe || ( this.isFullscreen() && 'big' in data ? data.big : data.image ), // use big image if fullscreen mode
            active = this._controls.getActive(),
            next = this._controls.getNext(),
            cached = next.isCached( src ),
            thumb = this._thumbnails[ queue.index ],
            mousetrigger = function() {
                $( next.image ).trigger( 'mouseup' );
            };

        // to be fired when loading & transition is complete:
        var complete = (function( data, next, active, queue, thumb ) {

            return function() {

                var win;

                // remove stalled
                self._queue.stalled = false;

                // optimize quality
                Utils.toggleQuality( next.image, self._options.imageQuality );

                // remove old layer
                self._layers[ self._controls.active ].innerHTML = '';

                // swap
                $( active.container ).css({
                    zIndex: 0,
                    opacity: 0
                }).show();

                if( active.isIframe ) {
                    $( active.container ).find( 'iframe' ).remove();
                }

                self.$('container').toggleClass('iframe', !!data.iframe);

                $( next.container ).css({
                    zIndex: 1,
                    left: 0,
                    top: 0
                }).show();

                self._controls.swap();

                // add pan according to option
                if ( self._options.imagePan ) {
                    self.addPan( next.image );
                }

                // make the image link or add lightbox
                // link takes precedence over lightbox if both are detected
                if ( data.link || self._options.lightbox || self._options.clicknext ) {

                    $( next.image ).css({
                        cursor: 'pointer'
                    }).bind( 'mouseup', function() {

                        // clicknext
                        if ( self._options.clicknext && !Galleria.TOUCH ) {
                            if ( self._options.pauseOnInteraction ) {
                                self.pause();
                            }
                            self.next();
                            return;
                        }

                        // popup link
                        if ( data.link ) {
                            if ( self._options.popupLinks ) {
                                win = window.open( data.link, '_blank' );
                            } else {
                                window.location.href = data.link;
                            }
                            return;
                        }

                        if ( self._options.lightbox ) {
                            self.openLightbox();
                        }

                    });
                }

                // remove the queued image
                protoArray.shift.call( self._queue );

                // if we still have images in the queue, show it
                if ( self._queue.length ) {
                    self._show();
                }

                // check if we are playing
                self._playCheck();

                // trigger IMAGE event
                self.trigger({
                    type: Galleria.IMAGE,
                    index: queue.index,
                    imageTarget: next.image,
                    thumbTarget: thumb.image,
                    galleriaData: data
                });
            };
        }( data, next, active, queue, thumb ));

        // let the carousel follow
        if ( this._options.carousel && this._options.carouselFollow ) {
            this._carousel.follow( queue.index );
        }

        // preload images
        if ( this._options.preload ) {

            var p, i,
                n = this.getNext(),
                ndata;

            try {
                for ( i = this._options.preload; i > 0; i-- ) {
                    p = new Galleria.Picture();
                    ndata = self.getData( n );
                    p.preload( this.isFullscreen() && 'big' in ndata ? ndata.big : ndata.image );
                    n = self.getNext( n );
                }
            } catch(e) {}
        }

        // show the next image, just in case
        Utils.show( next.container );

        next.isIframe = !!data.iframe;

        // add active classes
        $( self._thumbnails[ queue.index ].container )
            .addClass( 'active' )
            .siblings( '.active' )
            .removeClass( 'active' );

        // trigger the LOADSTART event
        self.trigger( {
            type: Galleria.LOADSTART,
            cached: cached,
            index: queue.index,
            rewind: queue.rewind,
            imageTarget: next.image,
            thumbTarget: thumb.image,
            galleriaData: data
        });

        // begin loading the next image
        next.load( src, function( next ) {

            // add layer HTML
            var layer = $( self._layers[ 1-self._controls.active ] ).html( data.layer || '' ).hide();

            self._scaleImage( next, {

                complete: function( next ) {

                    // toggle low quality for IE
                    if ( 'image' in active ) {
                        Utils.toggleQuality( active.image, false );
                    }
                    Utils.toggleQuality( next.image, false );

                    // stall the queue
                    self._queue.stalled = true;

                    // remove the image panning, if applied
                    // TODO: rethink if this is necessary
                    self.removePan();

                    // set the captions and counter
                    self.setInfo( queue.index );
                    self.setCounter( queue.index );

                    // show the layer now
                    if ( data.layer ) {
                        layer.show();
                        // inherit click events set on image
                        if ( data.link || self._options.lightbox || self._options.clicknext ) {
                            layer.css( 'cursor', 'pointer' ).unbind( 'mouseup' ).mouseup( mousetrigger );
                        }
                    }

                    // trigger the LOADFINISH event
                    self.trigger({
                        type: Galleria.LOADFINISH,
                        cached: cached,
                        index: queue.index,
                        rewind: queue.rewind,
                        imageTarget: next.image,
                        thumbTarget: self._thumbnails[ queue.index ].image,
                        galleriaData: self.getData( queue.index )
                    });

                    var transition = self._options.transition;

                    // can JavaScript loop through objects in order? yes.
                    $.each({
                        initial: active.image === null,
                        touch: Galleria.TOUCH,
                        fullscreen: self.isFullscreen()
                    }, function( type, arg ) {
                        if ( arg && self._options[ type + 'Transition' ] !== undef ) {
                            transition = self._options[ type + 'Transition' ];
                            return false;
                        }
                    });

                    // validate the transition
                    if ( transition in _transitions === false ) {
                        complete();
                    } else {
                        var params = {
                            prev: active.container,
                            next: next.container,
                            rewind: queue.rewind,
                            speed: self._options.transitionSpeed || 400
                        };

                        // call the transition function and send some stuff
                        _transitions[ transition ].call(self, params, complete );

                    }
                }
            });
        });
    },

    /**
        Gets the next index

        @param {number} [base] Optional starting point

        @returns {number} the next index, or the first if you are at the first (looping)
    */

    getNext : function( base ) {
        base = typeof base === 'number' ? base : this.getIndex();
        return base === this.getDataLength() - 1 ? 0 : base + 1;
    },

    /**
        Gets the previous index

        @param {number} [base] Optional starting point

        @returns {number} the previous index, or the last if you are at the first (looping)
    */

    getPrev : function( base ) {
        base = typeof base === 'number' ? base : this.getIndex();
        return base === 0 ? this.getDataLength() - 1 : base - 1;
    },

    /**
        Shows the next image in line

        @returns Instance
    */

    next : function() {
        if ( this.getDataLength() > 1 ) {
            this.show( this.getNext(), false );
        }
        return this;
    },

    /**
        Shows the previous image in line

        @returns Instance
    */

    prev : function() {
        if ( this.getDataLength() > 1 ) {
            this.show( this.getPrev(), true );
        }
        return this;
    },

    /**
        Retrieve a DOM element by element ID

        @param {string} elemId The delement ID to fetch

        @returns {HTMLElement} The elements DOM node or null if not found.
    */

    get : function( elemId ) {
        return elemId in this._dom ? this._dom[ elemId ] : null;
    },

    /**
        Retrieve a data object

        @param {number} index The data index to retrieve.
        If no index specified it will take the currently active image

        @returns {Object} The data object
    */

    getData : function( index ) {
        return index in this._data ?
            this._data[ index ] : this._data[ this._active ];
    },

    /**
        Retrieve the number of data items

        @returns {number} The data length
    */
    getDataLength : function() {
        return this._data.length;
    },

    /**
        Retrieve the currently active index

        @returns {number|boolean} The active index or false if none found
    */

    getIndex : function() {
        return typeof this._active === 'number' ? this._active : false;
    },

    /**
        Retrieve the stage height

        @returns {number} The stage height
    */

    getStageHeight : function() {
        return this._stageHeight;
    },

    /**
        Retrieve the stage width

        @returns {number} The stage width
    */

    getStageWidth : function() {
        return this._stageWidth;
    },

    /**
        Retrieve the option

        @param {string} key The option key to retrieve. If no key specified it will return all options in an object.

        @returns option or options
    */

    getOptions : function( key ) {
        return typeof key === 'undefined' ? this._options : this._options[ key ];
    },

    /**
        Set options to the instance.
        You can set options using a key & value argument or a single object argument (see examples)

        @param {string} key The option key
        @param {string} value the the options value

        @example setOptions( 'autoplay', true )
        @example setOptions({ autoplay: true });

        @returns Instance
    */

    setOptions : function( key, value ) {
        if ( typeof key === 'object' ) {
            $.extend( this._options, key );
        } else {
            this._options[ key ] = value;
        }
        return this;
    },

    /**
        Starts playing the slideshow

        @param {number} delay Sets the slideshow interval in milliseconds.
        If you set it once, you can just call play() and get the same interval the next time.

        @returns Instance
    */

    play : function( delay ) {

        this._playing = true;

        this._playtime = delay || this._playtime;

        this._playCheck();

        this.trigger( Galleria.PLAY );

        return this;
    },

    /**
        Stops the slideshow if currently playing

        @returns Instance
    */

    pause : function() {

        this._playing = false;

        this.trigger( Galleria.PAUSE );

        return this;
    },

    /**
        Toggle between play and pause events.

        @param {number} delay Sets the slideshow interval in milliseconds.

        @returns Instance
    */

    playToggle : function( delay ) {
        return ( this._playing ) ? this.pause() : this.play( delay );
    },

    /**
        Checks if the gallery is currently playing

        @returns {Boolean}
    */

    isPlaying : function() {
        return this._playing;
    },

    /**
        Checks if the gallery is currently in fullscreen mode

        @returns {Boolean}
    */

    isFullscreen : function() {
        return this._fullscreen.active;
    },

    _playCheck : function() {
        var self = this,
            played = 0,
            interval = 20,
            now = Utils.timestamp(),
            timer_id = 'play' + this._id;

        if ( this._playing ) {

            Utils.clearTimer( timer_id );

            var fn = function() {

                played = Utils.timestamp() - now;
                if ( played >= self._playtime && self._playing ) {
                    Utils.clearTimer( timer_id );
                    self.next();
                    return;
                }
                if ( self._playing ) {

                    // trigger the PROGRESS event
                    self.trigger({
                        type:         Galleria.PROGRESS,
                        percent:      Math.ceil( played / self._playtime * 100 ),
                        seconds:      Math.floor( played / 1000 ),
                        milliseconds: played
                    });

                    Utils.addTimer( timer_id, fn, interval );
                }
            };
            Utils.addTimer( timer_id, fn, interval );
        }
    },

    /**
        Modify the slideshow delay

        @param {number} delay the number of milliseconds between slides,

        @returns Instance
    */

    setPlaytime: function( delay ) {
        this._playtime = delay;
        return this;
    },

    setIndex: function( val ) {
        this._active = val;
        return this;
    },

    /**
        Manually modify the counter

        @param {number} [index] Optional data index to fectch,
        if no index found it assumes the currently active index

        @returns Instance
    */

    setCounter: function( index ) {

        if ( typeof index === 'number' ) {
            index++;
        } else if ( typeof index === 'undefined' ) {
            index = this.getIndex()+1;
        }

        this.get( 'current' ).innerHTML = index;

        if ( IE ) { // weird IE bug

            var count = this.$( 'counter' ),
                opacity = count.css( 'opacity' );

            if ( parseInt( opacity, 10 ) === 1) {
                Utils.removeAlpha( count[0] );
            } else {
                this.$( 'counter' ).css( 'opacity', opacity );
            }

        }

        return this;
    },

    /**
        Manually set captions

        @param {number} [index] Optional data index to fectch and apply as caption,
        if no index found it assumes the currently active index

        @returns Instance
    */

    setInfo : function( index ) {

        var self = this,
            data = this.getData( index );

        $.each( ['title','description'], function( i, type ) {

            var elem = self.$( 'info-' + type );

            if ( !!data[type] ) {
                elem[ data[ type ].length ? 'show' : 'hide' ]().html( data[ type ] );
            } else {
               elem.empty().hide();
            }
        });

        return this;
    },

    /**
        Checks if the data contains any captions

        @param {number} [index] Optional data index to fectch,
        if no index found it assumes the currently active index.

        @returns {boolean}
    */

    hasInfo : function( index ) {

        var check = 'title description'.split(' '),
            i;

        for ( i = 0; check[i]; i++ ) {
            if ( !!this.getData( index )[ check[i] ] ) {
                return true;
            }
        }
        return false;

    },

    jQuery : function( str ) {

        var self = this,
            ret = [];

        $.each( str.split(','), function( i, elemId ) {
            elemId = $.trim( elemId );

            if ( self.get( elemId ) ) {
                ret.push( elemId );
            }
        });

        var jQ = $( self.get( ret.shift() ) );

        $.each( ret, function( i, elemId ) {
            jQ = jQ.add( self.get( elemId ) );
        });

        return jQ;

    },

    /**
        Converts element IDs into a jQuery collection
        You can call for multiple IDs separated with commas.

        @param {string} str One or more element IDs (comma-separated)

        @returns jQuery

        @example this.$('info,container').hide();
    */

    $ : function( str ) {
        return this.jQuery.apply( this, Utils.array( arguments ) );
    }

};

// End of Galleria prototype

// Add events as static variables
$.each( _events, function( i, ev ) {

    // legacy events
    var type = /_/.test( ev ) ? ev.replace( /_/g, '' ) : ev;

    Galleria[ ev.toUpperCase() ] = 'galleria.'+type;

} );

$.extend( Galleria, {

    // Browser helpers
    IE9:     IE === 9,
    IE8:     IE === 8,
    IE7:     IE === 7,
    IE6:     IE === 6,
    IE:      IE,
    WEBKIT:  /webkit/.test( NAV ),
    CHROME:  /chrome/.test( NAV ),
    SAFARI:  /safari/.test( NAV ) && !(/chrome/.test( NAV )),
    QUIRK:   ( IE && doc.compatMode && doc.compatMode === "BackCompat" ),
    MAC:     /mac/.test( navigator.platform.toLowerCase() ),
    OPERA:   !!window.opera,
    IPHONE:  /iphone/.test( NAV ),
    IPAD:    /ipad/.test( NAV ),
    ANDROID: /android/.test( NAV ),
    TOUCH:   ('ontouchstart' in doc)

});

// Galleria static methods

/**
    Adds a theme that you can use for your Gallery

    @param {Object} theme Object that should contain all your theme settings.
    <ul>
        <li>name - name of the theme</li>
        <li>author - name of the author</li>
        <li>css - css file name (not path)</li>
        <li>defaults - default options to apply, including theme-specific options</li>
        <li>init - the init function</li>
    </ul>

    @returns {Object} theme
*/

Galleria.addTheme = function( theme ) {

    // make sure we have a name
    if ( !theme.name ) {
        Galleria.raise('No theme name specified');
    }

    if ( typeof theme.defaults !== 'object' ) {
        theme.defaults = {};
    } else {
        theme.defaults = _legacyOptions( theme.defaults );
    }

    var css = false,
        reg;

    if ( typeof theme.css === 'string' ) {

        // look for manually added CSS
        $('link').each(function( i, link ) {
            reg = new RegExp( theme.css );
            if ( reg.test( link.href ) ) {

                // we found the css
                css = true;

                // the themeload trigger
                _themeLoad( theme );

                return false;
            }
        });

        // else look for the absolute path and load the CSS dynamic
        if ( !css ) {

            $('script').each(function( i, script ) {

                // look for the theme script
                reg = new RegExp( 'galleria\\.' + theme.name.toLowerCase() + '\\.' );
                if( reg.test( script.src )) {

                    // we have a match
                    css = script.src.replace(/[^\/]*$/, '') + theme.css;

                    Utils.addTimer( "css", function() {
                        Utils.loadCSS( css, 'galleria-theme', function() {

                            // the themeload trigger
                            _themeLoad( theme );

                        });
                    }, 1);

                }
            });
        }

        if ( !css ) {
            Galleria.raise('No theme CSS loaded');
        }
    } else {

        // pass
        _themeLoad( theme );
    }
    return theme;
};

/**
    loadTheme loads a theme js file and attaches a load event to Galleria

    @param {string} src The relative path to the theme source file

    @param {Object} [options] Optional options you want to apply

    @returns Galleria
*/

Galleria.loadTheme = function( src, options ) {

    var loaded = false,
        length = _galleries.length,
        err = window.setTimeout( function() {
            Galleria.raise( "Theme at " + src + " could not load, check theme path.", true );
        }, 5000 );

    // first clear the current theme, if exists
    Galleria.theme = undef;

    // load the theme
    Utils.loadScript( src, function() {

        window.clearTimeout( err );

        // check for existing galleries and reload them with the new theme
        if ( length ) {

            // temporary save the new galleries
            var refreshed = [];

            // refresh all instances
            // when adding a new theme to an existing gallery, all options will be resetted but the data will be kept
            // you can apply new options as a second argument
            $.each( Galleria.get(), function(i, instance) {

                // mix the old data and options into the new instance
                var op = $.extend( instance._original.options, {
                    data_source: instance._data
                }, options);

                // remove the old container
                instance.$('container').remove();

                // create a new instance
                var g = new Galleria();

                // move the id
                g._id = instance._id;

                // initialize the new instance
                g.init( instance._original.target, op );

                // push the new instance
                refreshed.push( g );
            });

            // now overwrite the old holder with the new instances
            _galleries = refreshed;
        }

    });

    return Galleria;
};

/**
    Retrieves a Galleria instance.

    @param {number} [index] Optional index to retrieve.
    If no index is supplied, the method will return all instances in an array.

    @returns Instance or Array of instances
*/

Galleria.get = function( index ) {
    if ( !!_instances[ index ] ) {
        return _instances[ index ];
    } else if ( typeof index !== 'number' ) {
        return _instances;
    } else {
        Galleria.raise('Gallery index ' + index + ' not found');
    }
};

/**

    Configure Galleria options via a static function.
    The options will be applied to all instances

    @param {string|object} key The options to apply or a key

    @param [value] If key is a string, this is the value

    @returns Galleria

*/

Galleria.configure = function( key, value ) {

    var opts = {};

    if( typeof key == 'string' && value ) {
        opts[key] = value;
        key = opts;
    } else {
        $.extend( opts, key );
    }

    Galleria.configure.options = opts;

    $.each( Galleria.get(), function(i, instance) {
        instance.setOptions( opts );
    });

    return Galleria;
};

Galleria.configure.options = {};

/**

    Bind a Galleria event to the gallery

    @param {string} type A string representing the galleria event

    @param {function} callback The function that should run when the event is triggered

    @returns Galleria

*/

Galleria.on = function( type, callback ) {
    if ( !type ) {
        return;
    }
    Galleria.on.binds.push({
        type: type,
        callback: callback || F
    });
    $.each( Galleria.get(), function(i, instance) {
        instance.bind( type, callback );
    });
    return Galleria;
};

Galleria.on.binds = [];

/**

    Run Galleria
    Alias for $(selector).galleria(options)

    @param {string} selector A selector of element(s) to intialize galleria to

    @param {object} options The options to apply

    @returns Galleria

*/

Galleria.run = function( selector, options ) {
    $( selector || '#galleria' ).galleria( options );
    return Galleria;
};

/**
    Creates a transition to be used in your gallery

    @param {string} name The name of the transition that you will use as an option

    @param {Function} fn The function to be executed in the transition.
    The function contains two arguments, params and complete.
    Use the params Object to integrate the transition, and then call complete when you are done.

    @returns Galleria

*/

Galleria.addTransition = function( name, fn ) {
    _transitions[name] = fn;
    return Galleria;
};

/**
    The Galleria utilites
*/

Galleria.utils = Utils;

/**
    A helper metod for cross-browser logging.
    It uses the console log if available otherwise it falls back to alert

    @example Galleria.log("hello", document.body, [1,2,3]);
*/

Galleria.log = (function() {
    if( 'console' in window && 'log' in window.console ) {
        return window.console.log;
    } else {
        return function() {
            window.alert( Utils.array( arguments ).join(', ') );
        };
    }
}());

/**
    A ready method for adding callbacks when a gallery is ready
    Each method is call before the extend option for every instance

    @param {function} callback The function to call

    @returns Galleria
*/

Galleria.ready = function( fn ) {
    $.each( _galleries, function( i, gallery ) {
        fn.call( gallery, gallery._options );
    });
    Galleria.ready.callbacks.push( fn );
    return Galleria;
};

Galleria.ready.callbacks = [];

/**
    Method for raising errors

    @param {string} msg The message to throw

    @param {boolean} [fatal] Set this to true to override debug settings and display a fatal error
*/

Galleria.raise = function( msg, fatal ) {

    var type = fatal ? 'Fatal error' : 'Error',

        self = this,

        css = {
            color: '#fff',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100000
        },

        echo = function( msg ) {

            var html = '<div style="padding:4px;margin:0 0 2px;background:#' +
                ( fatal ? '811' : '222' ) + '";>' +
                ( fatal ? '<strong>' + type + ': </strong>' : '' ) +
                msg + '</div>';

            $.each( _instances, function() {

                var cont = this.$( 'errors' ),
                    target = this.$( 'target' );

                if ( !cont.length ) {

                    target.css( 'position', 'relative' );

                    cont = this.addElement( 'errors' ).appendChild( 'target', 'errors' ).$( 'errors' ).css(css);
                }
                cont.append( html );

            });

            if ( !_instances.length ) {
                $('<div>').css( $.extend( css, { position: 'fixed' } ) ).append( html ).appendTo( DOM().body );
            }
        };

    // if debug is on, display errors and throw exception if fatal
    if ( DEBUG ) {
        echo( msg );
        if ( fatal ) {
            throw new Error(type + ': ' + msg);
        }

    // else just echo a silent generic error if fatal
    } else if ( fatal ) {
        if ( _hasError ) {
            return;
        }
        _hasError = true;
        fatal = false;
        echo( 'Gallery could not load.' );
    }
};

// Add the version
Galleria.version = VERSION;

/**
    A method for checking what version of Galleria the user has installed and throws a readable error if the user needs to upgrade.
    Useful when building plugins that requires a certain version to function.

    @param {number} version The minimum version required

    @param {string} [msg] Optional message to display. If not specified, Galleria will throw a generic error.

    @returns Galleria
*/

Galleria.requires = function( version, msg ) {
    msg = msg || 'You need to upgrade Galleria to version ' + version + ' to use one or more components.';
    if ( Galleria.version < version ) {
        Galleria.raise(msg, true);
    }
    return Galleria;
};

/**
    Adds preload, cache, scale and crop functionality

    @constructor

    @requires jQuery

    @param {number} [id] Optional id to keep track of instances
*/

Galleria.Picture = function( id ) {

    // save the id
    this.id = id || null;

    // the image should be null until loaded
    this.image = null;

    // Create a new container
    this.container = Utils.create('galleria-image');

    // add container styles
    $( this.container ).css({
        overflow: 'hidden',
        position: 'relative' // for IE Standards mode
    });

    // saves the original measurements
    this.original = {
        width: 0,
        height: 0
    };

    // flag when the image is ready
    this.ready = false;

    // flag for iframe Picture
    this.isIframe = false;

};

Galleria.Picture.prototype = {

    // the inherited cache object
    cache: {},

    // show the image on stage
    show: function() {
        Utils.show( this.image );
    },

    // hide the image
    hide: function() {
        Utils.moveOut( this.image );
    },

    clear: function() {
        this.image = null;
    },

    /**
        Checks if an image is in cache

        @param {string} src The image source path, ex '/path/to/img.jpg'

        @returns {boolean}
    */

    isCached: function( src ) {
        return !!this.cache[src];
    },

    /**
        Preloads an image into the cache

        @param {string} src The image source path, ex '/path/to/img.jpg'

        @returns Galleria.Picture
    */

    preload: function( src ) {
        $( new Image() ).load((function(src, cache) {
            return function() {
                cache[ src ] = src;
            };
        }( src, this.cache ))).attr( 'src', src );
    },

    /**
        Loads an image and call the callback when ready.
        Will also add the image to cache.

        @param {string} src The image source path, ex '/path/to/img.jpg'
        @param {Object} [size] The forced size of the image, defined as an object { width: xx, height:xx }
        @param {Function} callback The function to be executed when the image is loaded & scaled

        @returns The image container (jQuery object)
    */

    load: function(src, size, callback) {

        if ( typeof size == 'function' ) {
            callback = size;
            size = null;
        }

        if( this.isIframe ) {
            var id = 'if'+new Date().getTime();

            this.image = $('<iframe>', {
                src: src,
                frameborder: 0,
                id: id,
                allowfullscreen: true,
                css: { visibility: 'hidden' }
            })[0];

            $( this.container ).find( 'iframe,img' ).remove();

            this.container.appendChild( this.image );

            $('#'+id).load( (function( self, callback ) {
                return function() {
                    window.setTimeout(function() {
                        $( self.image ).css( 'visibility', 'visible' );
                        if( typeof callback == 'function' ) {
                            callback.call( self, self );
                        }
                    }, 10);
                };
            }( this, callback )));

            return this.container;
        }

        this.image = new Image();

        var i = 0,
            reload = false,
            resort = false,

            // some jquery cache
            $container = $( this.container ),
            $image = $( this.image ),

            // the onload method
            onload = (function( self, callback, src ) {

                return function() {

                    var complete = function() {

                        $( this ).unbind( 'load' );

                        // save the original size
                        self.original = size || {
                            height: this.height,
                            width: this.width
                        };

                        self.container.appendChild( this );

                        self.cache[ src ] = src; // will override old cache

                        if (typeof callback == 'function' ) {
                            window.setTimeout(function() {
                                callback.call( self, self );
                            },1);
                        }
                    };

                    // Delay the callback to "fix" the Adblock Bug
                    // http://code.google.com/p/adblockforchrome/issues/detail?id=3701
                    if ( ( !this.width || !this.height ) ) {
                        window.setTimeout( (function( img ) {
                            return function() {
                                if ( img.width && img.height ) {
                                    complete.call( img );
                                } else {
                                    // last resort, this should never happen but just in case it does...
                                    if ( !resort ) {
                                        $(new Image()).load( onload ).attr( 'src', img.src );
                                        resort = true;
                                    } else {
                                        Galleria.raise('Could not extract width/height from image: ' + img.src +
                                            '. Traced measures: width:' + img.width + 'px, height: ' + img.height + 'px.');
                                    }
                                }
                            };
                        }( this )), 2);
                    } else {
                        complete.call( this );
                    }
                };
            }( this, callback, src ));

        // remove any previous images
        $container.find( 'iframe,img' ).remove();

        // append the image
        $image.css( 'display', 'block');

        // hide it for now
        Utils.hide( this.image );

        // remove any max/min scaling
        $.each('minWidth minHeight maxWidth maxHeight'.split(' '), function(i, prop) {
            $image.css(prop, (/min/.test(prop) ? '0' : 'none'));
        });

        if ( this.cache[ src ] ) {

            // quick load on cache
            $image.load( onload ).attr( 'src', src );

            return this.container;
        }

        // begin load and insert in cache when done
        $image.load( onload ).error( function() {
            if ( !reload ) {
                reload = true;
                // reload the image with a timestamp
                window.setTimeout((function(image, src) {
                    return function() {
                        image.attr('src', src + '?' + Utils.timestamp() );
                    };
                }( $(this), src )), 50);
            } else {
                // apply the dummy image if it exists
                if ( DUMMY ) {
                    $( this ).attr( 'src', DUMMY );
                } else {
                    Galleria.raise('Image not found: ' + src);
                }
            }
        }).attr( 'src', src );

        // return the container
        return this.container;
    },

    /**
        Scales and crops the image

        @param {Object} options The method takes an object with a number of options:

        <ul>
            <li>width - width of the container</li>
            <li>height - height of the container</li>
            <li>min - minimum scale ratio</li>
            <li>max - maximum scale ratio</li>
            <li>margin - distance in pixels from the image border to the container</li>
            <li>complete - a callback that fires when scaling is complete</li>
            <li>position - positions the image, works like the css background-image property.</li>
            <li>crop - defines how to crop. Can be true, false, 'width' or 'height'</li>
            <li>canvas - set to true to try a canvas-based rescale</li>
        </ul>

        @returns The image container object (jQuery)
    */

    scale: function( options ) {

        var self = this;

        // extend some defaults
        options = $.extend({
            width: 0,
            height: 0,
            min: undef,
            max: undef,
            margin: 0,
            complete: F,
            position: 'center',
            crop: false,
            canvas: false
        }, options);

        if( this.isIframe ) {
            $( this.image ).width( options.width ).height( options.height ).removeAttr( 'width' ).removeAttr( 'height' );
            $( this.container ).width( options.width ).height( options.height) ;
            options.complete.call(self, self);
            try {
                if( this.image.contentWindow ) {
                    $( this.image.contentWindow ).trigger('resize');
                }
            } catch(e) {}
            return this.container;
        }

        // return the element if no image found
        if (!this.image) {
            return this.container;
        }

        // store locale variables
        var width,
            height,
            $container = $( self.container ),
            data;

        // wait for the width/height
        Utils.wait({
            until: function() {
                width  = options.width ||
                         $container.width() ||
                         Utils.parseValue( $container.css('width') );

                height = options.height ||
                         $container.height() ||
                         Utils.parseValue( $container.css('height') );

                return width && height;
            },
            success: function() {

                // calculate some cropping
                var newWidth = ( width - options.margin * 2 ) / self.original.width,
                    newHeight = ( height - options.margin * 2 ) / self.original.height,
                    min = Math.min( newWidth, newHeight ),
                    max = Math.max( newWidth, newHeight ),
                    cropMap = {
                        'true'  : max,
                        'width' : newWidth,
                        'height': newHeight,
                        'false' : min,
                        'landscape': self.original.width > self.original.height ? max : min,
                        'portrait': self.original.width < self.original.height ? max : min
                    },
                    ratio = cropMap[ options.crop.toString() ],
                    canvasKey = '';

                // allow max_scale_ratio
                if ( options.max ) {
                    ratio = Math.min( options.max, ratio );
                }

                // allow min_scale_ratio
                if ( options.min ) {
                    ratio = Math.max( options.min, ratio );
                }

                $.each( ['width','height'], function( i, m ) {
                    $( self.image )[ m ]( self[ m ] = self.image[ m ] = Math.round( self.original[ m ] * ratio ) );
                });

                $( self.container ).width( width ).height( height );

                if ( options.canvas && _canvas ) {

                    _canvas.elem.width = self.width;
                    _canvas.elem.height = self.height;

                    canvasKey = self.image.src + ':' + self.width + 'x' + self.height;

                    self.image.src = _canvas.cache[ canvasKey ] || (function( key ) {

                        _canvas.context.drawImage(self.image, 0, 0, self.original.width*ratio, self.original.height*ratio);

                        try {

                            data = _canvas.elem.toDataURL();
                            _canvas.length += data.length;
                            _canvas.cache[ key ] = data;
                            return data;

                        } catch( e ) {
                            return self.image.src;
                        }

                    }( canvasKey ) );

                }

                // calculate image_position
                var pos = {},
                    mix = {},
                    getPosition = function(value, measure, margin) {
                        var result = 0;
                        if (/\%/.test(value)) {
                            var flt = parseInt( value, 10 ) / 100,
                                m = self.image[ measure ] || $( self.image )[ measure ]();

                            result = Math.ceil( m * -1 * flt + margin * flt );
                        } else {
                            result = Utils.parseValue( value );
                        }
                        return result;
                    },
                    positionMap = {
                        'top': { top: 0 },
                        'left': { left: 0 },
                        'right': { left: '100%' },
                        'bottom': { top: '100%' }
                    };

                $.each( options.position.toLowerCase().split(' '), function( i, value ) {
                    if ( value === 'center' ) {
                        value = '50%';
                    }
                    pos[i ? 'top' : 'left'] = value;
                });

                $.each( pos, function( i, value ) {
                    if ( positionMap.hasOwnProperty( value ) ) {
                        $.extend( mix, positionMap[ value ] );
                    }
                });

                pos = pos.top ? $.extend( pos, mix ) : mix;

                pos = $.extend({
                    top: '50%',
                    left: '50%'
                }, pos);

                // apply position
                $( self.image ).css({
                    position : 'absolute',
                    top :  getPosition(pos.top, 'height', height),
                    left : getPosition(pos.left, 'width', width)
                });

                // show the image
                self.show();

                // flag ready and call the callback
                self.ready = true;
                options.complete.call( self, self );

            },
            error: function() {
                Galleria.raise('Could not scale image: '+self.image.src);
            },
            timeout: 1000
        });
        return this;
    }
};

// our own easings
$.extend( $.easing, {

    galleria: function (_, t, b, c, d) {
        if ((t/=d/2) < 1) {
            return c/2*t*t*t + b;
        }
        return c/2*((t-=2)*t*t + 2) + b;
    },

    galleriaIn: function (_, t, b, c, d) {
        return c*(t/=d)*t + b;
    },

    galleriaOut: function (_, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    }

});

// the plugin initializer
$.fn.galleria = function( options ) {

    var selector = this.selector;

    // try domReady if element not found
    if ( !$(this).length ) {

        $(function() {
            if ( $( selector ).length ) {

                // if found on domReady, go ahead
                $( selector ).galleria( options );

            } else {

                // if not, try fetching the element for 5 secs, then raise a warning.
                Galleria.utils.wait({
                    until: function() {
                        return $( selector ).length;
                    },
                    success: function() {
                        $( selector ).galleria( options );
                    },
                    error: function() {
                        Galleria.raise('Init failed: Galleria could not find the element "'+selector+'".');
                    },
                    timeout: 5000
                });

            }
        });
        return this;
    }

    return this.each(function() {

        // fail silent if already run
        if ( !$.data(this, 'galleria') ) {
            $.data( this, 'galleria', new Galleria().init( this, options ) );
        }
    });

};

// phew

}( jQuery ) );

/*
    SearchPage is a logical abstraction of search page.
 */
var NZZ = NZZ || {};


NZZ.search = {
    searchRecount: '',
    searchArticles: '',
    searchUrl: '/search/more',

    query: {
        offset: 0,
        form: {}
    },

    config: {
        inputFieldSelector: '#q',
        buttonSelector : '#search-more button',
        resultListSelector: '#search-results-list',
        tabCountTotal: '#tabCountTotal',
        tabCountArticle: '#tabCountArticle',
        tabCountVideo: '#tabCountVideo',
        tabCountGallery: '#tabCountGallery',
        tabCountFinance: '#tabCountFinance',
        tabCountDossier: '#tabCountDossier',
        totalCounter: '#totalCounter',
        publishedBefore: '#publishedBefore',
        defaultOffset: 10
    },

    init: function() {
        var self = this;
        $(this.config.buttonSelector).bind('click', function () {
            self.getMoreSearchResults();
        });
    },

    getMoreSearchResults: function() {
        var self = this,
            url = $(this.config.buttonSelector).attr('data-ajax-url');

        this.disableSearchButton();
        this._setSearchQueryParameters();

        $.get(
            url,
            this.query,
            function (data, status, response) {
                self.enableSearchButton();
                self.searchArticles = data.searchArticles;
                self._appendSearchResults();
                if (!data.displayButton ) {
                    self.hideSearchButton();
                }
            }
        );
    },

    hideSearchButton: function() {
        $(this.config.buttonSelector).css('display', 'none');
    },

    enableSearchButton: function() {
        $(this.config.buttonSelector).attr('disabled', false);
        $(this.config.buttonSelector).fadeTo(0, 1);
    },

    disableSearchButton: function() {
        $(this.config.buttonSelector).attr('disabled', true);
        $(this.config.buttonSelector).fadeTo(0, 0.2);
    },

    getQueryParameter: function(parameterKey, url) {
        var queryParameters = this._unserializeUrlString(url);

        return (queryParameters[parameterKey] !== undefined) ? (queryParameters[parameterKey]) : ('');
    },

    _setSearchQueryParameters: function() {
        this.query.form['q'] = $(this.config.inputFieldSelector).val();
        this.query.offset = parseInt(this.query.offset, 10) + this.config.defaultOffset;
        this.query.form['filter'] = this.getQueryParameter('form%5Bfilter%5D');
        if (this.getQueryParameter('form%5BpublishedBefore%5D') !== ''){
            this.query.form['publishedBefore'] = decodeURIComponent(this.getQueryParameter('form%5BpublishedBefore%5D'));
        } else {
            this.query.form['publishedBefore'] = $(this.config.publishedBefore).val();
        }
        if (this.getQueryParameter('form%5BorderBy%5D') !== ''){
            this.query.form['orderBy'] = this.getQueryParameter('form%5BorderBy%5D');
        }
    },

    _unserializeUrlString: function(urlString) {
        var searchQueryString = urlString || window.location.search.replace('?', ''),
            splitedQueryParameters = searchQueryString.split('&'),
            queryParametersLength = splitedQueryParameters.length,
            queryParameters = {},
            tmpArray = [],
            i;

        if (searchQueryString === '')
            return queryParameters;

        for (i = 0; i < queryParametersLength; i++) {
            tmpArray = splitedQueryParameters[i].split('=');
            if (tmpArray.length !== 2)
                continue;
            queryParameters[tmpArray[0]] = tmpArray[1];
        }
        return queryParameters;
    },

    _appendSearchResults: function() {
        var preparedData;

        $(this.config.resultListSelector).append(this.searchArticles);

        if (NZZ.markArticle != undefined) {
            NZZ.markArticle.init();
            NZZ.markArticle.markMarkedArticles();
        }
    },

    _appendSearchRecount: function() {
        $(this.config.totalCounter).html(parseInt($(this.config.totalCounter).text())+this.searchRecount.total);

        $(this.config.tabCountArticle).html(parseInt($(this.config.tabCountArticle).text())+this.searchRecount.article);
        $(this.config.tabCountDossier).html(parseInt($(this.config.tabCountDossier).text())+this.searchRecount.dossier);
        $(this.config.tabCountFinance).html(parseInt($(this.config.tabCountFinance).text())+this.searchRecount.finance);
        $(this.config.tabCountGallery).html(parseInt($(this.config.tabCountGallery).text())+this.searchRecount.gallery);
        $(this.config.tabCountTotal).html(parseInt($(this.config.tabCountTotal).text())+this.searchRecount.total);
        $(this.config.tabCountVideo).html(parseInt($(this.config.tabCountVideo).text())+this.searchRecount.video);
    }
};

/*
    MarkArticle is a logical abstraction of mark articles.
 */
var NZZ = NZZ || {};

NZZ.markArticle = {
    config: {
        markArticleSelector: '.notify',
        tooltipSelector: '.tooltip.mark',
        activeClassName: 'active',
        markPrefix: '#markCount',
        attrForMarking: 'publication',
        flyoutMarkedArticlesListSelector: '#flyout-marked-articles-list',
        ulTabsCountSelector: '#nzzCountTabs span',
        allMarkedArticlesTabSelector: '#markCountAll',
        nzzMarkedArticlesTabSelector: '#markCountNzz',
        nzzoMarkedArticlesTabSelector: '#markCountNzzo',
        nzzasMarkedArticlesTabSelector: '#markCountNzzas',
        markedArticlesListSelector: '#marked-articles-list',
        markedArticlesCountSelector: '.marked-articles-count',
        unmarkAllButtonSelector: '#unmark-all-articles',
        unmarkAllButtonLabelSelector: '#unmark-all-articles span',
        activeTooltipMessage: 'Von der Merkliste entfernen',
        inactiveTooltipMessage: 'Merken',
        authenticateMessage: 'Bitte melden Sie sich an'
    },
    isAuthorised: false,
    $markedArticle: null,

    init: function () {
        var self = this;

        this._bindMarkArticleEvent();
        $(this.config.unmarkAllButtonSelector).bind('click', function (e) {
            e.preventDefault();
            self._unmarkAllArticles();
        });
    },

    markMarkedArticles: function () {
        var url = $(this.config.flyoutMarkedArticlesListSelector).attr('ajax-url'),
            self = this;

        if (url === undefined) {
            return;
        }
        this.isAuthorised = true;

        $.get(url, {}, function (data) {
            var i = 0,
                idsCount = parseInt(data.length, 10);

            if (isNaN(idsCount))
                return;

            for (i = 0; i < idsCount; i++) {
                var $articleToMark = $('.notify.guid-' + data[i].replace('.', '\\.'));
                $articleToMark.addClass(self.config.activeClassName);
                $articleToMark.find(self.config.tooltipSelector).html(self.config.activeTooltipMessage);
            }
        });
    },

    _unmarkAllArticles: function () {
        var self = this,
            url = $(this.config.unmarkAllButtonSelector).attr('data-ajax-url');

        if (!NZZ.user.authorizedLocally()) {
            this._handleAuthError(NZZ.user.notAuthenticatedResponse || {});
            return;
        }

        $.post(
            url,
            {},
            function (data, status, response) {
                $(self.config.markedArticlesListSelector).find('.' + self.config.activeClassName).removeClass(self.config.activeClassName);
                self._setToZero();
                $(self.config.flyoutMarkedArticlesListSelector).html('');
            }
        )
    },

    markArticle: function ($markedArticle) {
        var self = this,
            params = {},
            url = $markedArticle.attr('href');

        if (!NZZ.user.authorizedLocally()) {
            this._handleAuthError(NZZ.user.notAuthenticatedResponse || {});
            return;
        }

        this.$markedArticle = $markedArticle;
        // article is marked, request unmarking
        if ($markedArticle.hasClass(this.config.activeClassName)) {
            params.unmark = 1;
        }

        $.post(
            url,
            params,
            function (data, status, response) {
                if(self.$markedArticle === null) {
                    return;
                }
                
                self._toggleMarker();
                self._updateFlyoutMarkedArticlesList(data.flyoutMarkedArticles);
                self._recalculateMarkedArticlesCount(data.markedArticlesCount);
            }
        )
        .complete(function (response, textStatus) {
            self._clearMarkArticleProperties();
        });
    },

    _updateFlyoutMarkedArticlesList: function(flyoutMarkedArticles) {
        $(this.config.flyoutMarkedArticlesListSelector).replaceWith(flyoutMarkedArticles);
        this._bindMarkArticleEvent();
    },

    _toggleMarker: function () {
        if (this.$markedArticle.hasClass(this.config.activeClassName)) {
            this._disableMarker();
        } else {
            this._enableMarker();
        }
    },

    _enableMarker: function () {
        var $markedArticles = this._calculateMarker();
        $markedArticles.addClass(this.config.activeClassName);
        $markedArticles.find(this.config.tooltipSelector).html(this.config.activeTooltipMessage);
    },

    _disableMarker: function () {
        var $markedArticles = this._calculateMarker();
        $markedArticles.removeClass(this.config.activeClassName);
        $markedArticles.find(this.config.tooltipSelector).html(this.config.inactiveTooltipMessage);
    },

    _calculateMarker: function() {
        var className = $("[href='" + this.$markedArticle.attr('href') + "']").attr('class').replace('.', '\\.');
        var calculatedMarker = '.' + className.replace(/ /g, '.');

        return $("'" + calculatedMarker + "'");
    },

    _setMarkedArticlesCount: function(articlesCount) {
        $(this.config.markedArticlesCountSelector).html(articlesCount);
        $(this.config.allMarkedArticlesTabSelector).html('(' + articlesCount +')');
    },

    _capitaliseFirstLetter: function(lowStr) {
        if (lowStr) {
            return lowStr.charAt(0).toUpperCase() + lowStr.slice(1);
        }
    },

    _setToZero: function() {
        this._setMarkedArticlesCount(0);
        $(this.config.ulTabsCountSelector).html(0);
    },

    _recalculateMarkedArticlesCount: function (markedArticlesCount) {
        nzz = markedArticlesCount.nzz;
        nzzas = markedArticlesCount.nzzas;
        nzzo = markedArticlesCount.nzzo;
        total = markedArticlesCount.total;

        $(this.config.allMarkedArticlesTabSelector).html('('+ total +')');
        $(this.config.markedArticlesCountSelector).html(total);
        $(this.config.nzzMarkedArticlesTabSelector).html('('+ nzz +')');
        $(this.config.nzzoMarkedArticlesTabSelector).html('('+ nzzo +')');
        $(this.config.nzzasMarkedArticlesTabSelector).html('('+ nzzas +')');
    },

    _bindMarkArticleEvent: function() {
        var self = this;

        $(this.config.markArticleSelector).unbind().bind('click', function (e) {
            e.preventDefault();
            self.markArticle($(this));
        });
    },

    _clearMarkArticleProperties: function () {
        this.$markedArticle = null;
    },

    _handleAuthError: function (response) {
        var error = (response.responseText) ? (response.responseText.error) : ('');

        if (response.status && 400 === response.status) {
            if ('not_authenticated' === error) {
                $(this.config.tooltipSelector).html(this.config.authenticateMessage);
            }
        }
    }
};
var NZZ = NZZ || {};

NZZ.user = {
    config: {
        loginIframe: '#loginCheck',
        loginForm: '#flyoutLoginForm',
        loginErrorMessageDiv: '.loginErrorMessage',
        loginUrl: "",
        cookiesEnabledMessageDiv: '#cookie-enabled'
    },
    notAuthenticatedResponse: {
        status: 400,
        responseText: {
            error: 'not_authenticated'
        }
    },
    activeTickers: {},

    init: function () {
        this.config.loginUrl = $(this.config.loginIframe).attr('data-check-url');

        if (NZZ.cookies.enabled()) {
            $('#flyoutLoginForm, #fancyForm, #cacLoginForm').live(
                'submit',
                function () {
                    NZZ.cookies.erase('d00JzQuNGI0LDQtdCx0LDQvdGL0LnQvNGD0LTQsNC6');
                    $(NZZ.user.config.loginIframe).unbind('load').load($.proxy(NZZ.user.authorizeOnCAS, NZZ.user));
                }
            );
        } else {
            $(this.config.cookiesEnabledMessageDiv).show();
        }
    },

    getReferer: function () {
        var authUrl = $(this.config.loginIframe).get(0).contentWindow.location.href;
        if (typeof authUrl === 'string') {
            var referer = authUrl.match(/referer=(.*)&/i);
            if (referer !== null && typeof referer[1] == 'string') {
                return referer[1];
            }
        }

        return window.location.href;
    },

    getCASTicket: function () {
        var authUrl = $(this.config.loginIframe).get(0).contentWindow.location.href;
        if (typeof authUrl === 'string') {
            var ticket = authUrl.match(/ticket=(.*)$/i);
            if (ticket !== null && typeof ticket[1] === 'string') {

                return ticket[1];
            }
        }

        return false;
    },

    authorizeOnCAS: function (displayErrors) {
        var ticket = this.getCASTicket();
        var params = {};

        if (ticket !== false && location.href.search("ticket=") === -1) {
            params.ticket = ticket;
            params.referer = this.getReferer();
            this.config.loginUrl += '?' + $.param(params);
            location.href = this.config.loginUrl;
        } else if ($(this.config.loginIframe).get(0).contentWindow.location.href.search("failed=true") !== -1) {
            if (displayErrors !== undefined && displayErrors !== false) {
                $(this.config.loginErrorMessageDiv)
                    .html('<span class="overlayTextRegistration">Ihre Anmeldung ist fehlgeschlagen. Bitte überprüfen Sie Ihre Eingabe. Neuregistrationen müssen erst aktiviert werden.</span>')
                    .css({'color':'red', 'display':'block'});
            }
        } else if ($(this.config.loginIframe).get(0).contentWindow.location.href.search("logouted=true") !== -1) {
            $(this.config.loginForm).submit();
        } else {
            params.service = $(this.config.loginForm + ' input[name=service]').val() + '?' + 'logouted=true';
            params.gateway = true;
            var logoutUrl = $(this.config.loginForm).attr('action').replace("login", "logout") + '?' + $.param(params);
            $(this.config.loginIframe).attr('src', logoutUrl);
        }
    },

    authorizedLocally: function () {
        if ('true' === NZZ.cookies.read('authorized')) {
            return true;
        }

        return false;
    }
};
var NZZ = NZZ || {};

NZZ.dossier = {
    config: {
        showMoreButtonSelector: '.button.chapter',
        dossierArticlesSelector: '#dossiers-articles-',
        offsetByDefault: 3
    },

    init: function () {
        var self = this;

        $(this.config.showMoreButtonSelector).each(function () {
            $(this).bind('click', function (e) {
                e.preventDefault();
                self.getDossierChapterArticles($(this));
            });
        });
    },

    getDossierChapterArticles: function ($button) {
        var self = this,
            $ulElement = $(this.config.dossierArticlesSelector + $button.attr('id')),
            offset = $ulElement.find('li').length || 0,
            url = $button.attr('data-url') || '',
            totalCountArticles = parseInt($ulElement.attr('total'), 10);

        this._customizeShowMoreButton($button, {
            disableFlag: true,
            fadeToValue: 0.2
        });

        $.get(
            url,
            {offset: offset},
            function (data, status, response) {
                if (data.chapterArticles) {
                    $ulElement.append(data.chapterArticles);
                }

                self._customizeShowMoreButton($button, {
                    disableFlag: false,
                    fadeToValue: 1,
                    totalCount: totalCountArticles,
                    offset: offset
                });
            }
        );
    },

    _customizeShowMoreButton: function ($button, parameters) {
        $button.attr('disabled', parameters.disableFlag);
        $button.fadeTo(0, parameters.fadeToValue);

        if (parameters.totalCount && !isNaN(parameters.totalCount)) {
            if (!!((parameters.totalCount - parameters.offset) <= this.config.offsetByDefault)) {
                $button.hide();
            }
        }
    }
};
var NZZ = NZZ || {};

NZZ.liveticker = {
    config: {
        timeOut: 1,
        activeClassName: 'active',
        liveTickerSelector: '.liveticker',
        articleSelectors: {
            content: '.article-full',
            header: 'header',
            leadImage: 'figure:first',
            leadText: 'p',
            address: 'address:first',
            body: 'div#articleBodyText'
        }
    },
    $liveTickerElement: null,

    init: function (config) {
        var self = this;
        $.extend(this.config, config);
        this.$liveTickerElement = $(this.config.liveTickerSelector).find('a');

        this.initLiveTickerButton();
        if (null !== NZZ.cookies.read(this.$liveTickerElement.attr('id'))) {
            this.activate();
        }
    },

    initLiveTickerButton: function () {
        var self = this;

        this.$liveTickerElement.bind('click', function (e) {
            e.preventDefault();
            if (self.$liveTickerElement.hasClass(self.config.activeClassName)) {
                self.deactivate();
            } else {
                self.activate();
            }
        });
    },

    activate: function () {
        var intervalId = 0,
            tickerId = this.$liveTickerElement.attr('id'),
            self = this;

        this.$liveTickerElement.addClass(this.config.activeClassName);
        NZZ.cookies.create(tickerId, "true", 3600 * 24);
        if (!NZZ.user.activeTickers[tickerId]) {
            intervalId = window.setInterval(function () {
                self.reloadArticle();
            }, this.config.timeOut * 1000);
            NZZ.user.activeTickers[tickerId] = intervalId;
        }
    },

    deactivate: function () {
        var tickerId = this.$liveTickerElement.attr('id');

        this.$liveTickerElement.removeClass(this.config.activeClassName);
        NZZ.cookies.erase(tickerId);
        window.clearInterval(NZZ.user.activeTickers[tickerId]);
        delete(NZZ.user.activeTickers[tickerId]);
    },

    reloadArticle: function () {
        var self = this,
            tickerId = this.$liveTickerElement.attr('id'),
            url = this.$liveTickerElement.attr('ajax-url');

        if (NZZ.user.activeTickers[tickerId] === undefined) {
            return;
        }

        $.get(
            url,
            {},
            function (data) {
                if ($(data)[0] === undefined) {
                    return;
                }
                var $article = $(data),
                    articleSelectors = self.config.articleSelectors,
                    $articleHeader = $article.find(articleSelectors.header),
                    $articleLeadImage = $article.find(articleSelectors.leadImage),
                    $articleLeadText = $article.find(articleSelectors.leadText),
                    $articleAddress = $article.find(articleSelectors.address),
                    $articleBodyText = $article.find(articleSelectors.body);

                if ($articleHeader[0] !== undefined) {
                    $(articleSelectors.content).find(articleSelectors.header).html($articleHeader.html());
                }
                if ($articleLeadImage[0] !== undefined) {
                    $(articleSelectors.content).find(articleSelectors.leadImage).html($articleLeadImage.html());
                }
                if ($articleLeadText[0] !== undefined) {
                    $(articleSelectors.content).find(articleSelectors.leadText).html($articleLeadText.html());
                }
                if ($articleAddress[0] !== undefined) {
                    $(articleSelectors.content).find(articleSelectors.address).html($articleAddress.html());
                }
                if ($articleBodyText[0] !== undefined) {
                    $(articleSelectors.content).find(articleSelectors.body).html($articleBodyText.html());
                }
            }
        );
    }
};
var NZZ = NZZ || {};

NZZ.gallery = {
    config: {
        targetDivId: 'imagegallery',
        defaultRoute: '/gallery/'
    },
    tracking: {
        galleryEvent: 'event7',
        prevEvent: null
    },

    init: function (options) {
        if (options && options.targetDivId) {
            this.config.targetDivId = options.targetDivId.replace('#', '');
        }
        return this;
    },

    load: function (galleryGuid, options) {
        if (options && options.defaultRoute) {
            this.config.defaultRoute = options.defaultRoute;
        }
        var targetDiv = $('#' + this.config.targetDivId),
            self = this;

        if (targetDiv && galleryGuid) {
            if (targetDiv.length <= 0) {
                targetDiv = $('<div id="' + this.config.targetDivId + '" />');
                $("body").append(targetDiv);
            }

            targetDiv.load(
                this.config.defaultRoute + galleryGuid.replace('-', '.'),
                function () {
                    if (typeof s !== 'undefined') {
                        if (self.tracking.galleryEvent != self.tracking.prevEvent) {
                            self.tracking.prevEvent = s.events;
                            s.events = self.tracking.galleryEvent;
                        }
                    }
                }
            );
        }
    },

    cleanup: function() {
        $('#' + this.config.targetDivId).remove();
        if (typeof s !== 'undefined') {
            s.events = this.tracking.prevEvent;
        }
        $('#' + this.config.targetDivId).remove();
    },

    closeAndCleanup: function(gallery) {
        if (0 === $('#' + this.config.targetDivId).length)
            return;

        gallery.exitFullscreen();
        gallery.destroy();
        this.cleanup();
        var url=document.URL.split('#')[0]; // hack
        window.location.href = url + '#'; // hack
    },

    appendClose: function (gallery) {
        var self = this;
        gallery.addElement('close');
        gallery.append({
            'container': ['close']
        });
        gallery.$("close").click(function (e) {
            self.closeAndCleanup(gallery);
        });
        NZZ.loadedGallery = gallery;
    },

    appendRelatedGalleries: function (gallery) {
        gallery.addElement('relatedGalleries');
        gallery.addElement('relatedGalleries-Tab');
        gallery.addElement('galleries');

        gallery.append({
            'container': ['relatedGalleries']
        });

        str= '<section class="teaser">';
        str+= '<article class="group">';
        str+= '   <div>';
        str+= '    <header>';
        str+= '      <hgroup>';
        str+= '        <h4>'+gallery.getData(0).title+'</h4>';
        str+= '      </hgroup>';
        str+= '      <p><a class="caption" href="'+gallery.getData(0).ressortURL+'">'+gallery.getData(0).caption+'</a> <time datetime="'+gallery.getData(0).datetime+'">'+gallery.getData(0).time+'</time></p>';
        str+= '    </header>';
        str+= '    <p>'+gallery.getData(0).description+'</p>';
        str+= '  </div>';
        str+= '</article>';
        str+= '</section>';
        if (gallery.getData(0).relatedContents !== undefined) {
            strRelatedGallery = '<h4>'+gallery.getData(0).relatedText+'</h4>';
            strRelatedGallery+= '<a class="arrow left"></a><div class="overflow"><ul>';
            $.each(gallery.getData(0).relatedContents, function() {
                strRelatedGallery+= '<li><a href="'+this.url+'" rel="#imagegallery"><img height="82" src="'+this.image+'" alt="'+this.name+'"/>'+this.name+'</a></li>';
            });

            strRelatedGallery+= '</ul></div><a class="arrow right"></a>';

            gallery.append({
                'galleries': [strRelatedGallery]
            });
        }

        gallery.append({
            'relatedGalleries': ['relatedGalleries-Tab', str, 'galleries']
        });

        gallery.$("galleries").addClass("group");

        var f = gallery.$("thumbnails-container"),
            l = gallery.$("info-text"),
            j = gallery.$("info"),
            r = gallery.$("relatedGalleries"),
            rt = gallery.$("relatedGalleries-Tab"),
            rg = gallery.$("galleries"),
            rgtext = gallery.$("relatedGalleries").find(".teaser div > p"),
            g = 0;

        var k = gallery.proxy(function (a) {
            if (a || a.width) a = Math.min(a.width, $(window).width()), l.width(a - 40), Galleria.IE && this.getOptions("showInfo") && this.$("iefix").width(j.outerWidth()).height(j.outerHeight())
        });

        gallery.bind("rescale", function () {
            g = this.getStageHeight()-rgtext.outerHeight();
            f.css("top", g - (f.height()+r.height()-rg.height()-rgtext.outerHeight()-23) );
            if(rt.hasClass("active")) {
                r.css("top", g - r.height() );
            } else {
                r.css("top", g - (r.height()-rg.height()-rgtext.outerHeight()-23) );
            }

            var a = this.getActiveImage();
            a && k(a)
        });

        rt.click(function () {
            if(!rt.hasClass("active")) {
                rt.addClass("active");
                g = gallery.getStageHeight() - r.height();
                r.animate({ top: g+"px" });
            } else {
                rt.removeClass("active");
                g = gallery.getStageHeight() - (r.height()-rg.height()-23);
                r.animate({ top: g+"px" });
            }
            $.counters.update();
        });

        $('.overflow ul').carrousel();

        $('a.arrow.right, a.arrow.left').click(function (e) {
            e.preventDefault();
            $.counters.update();
        });

        gallery.trigger("rescale");

    },

    navigationClick: function(e, gallery) {
        var clickTarget = e.currentTarget;
        if (!$(clickTarget).hasClass('clicked')) {
            var className = clickTarget.className;
            $(clickTarget).addClass('clicked');
            var fn = /left/.test( className ) ? 'prev' : 'next';
            gallery[ fn ]();
        }
    },

    initTheme: function (gallery, theme) {
        if (theme) {
            var self = this;
            if (theme == "overlay") {
                var rgtext = gallery.$("relatedGalleries").find(".teaser div > p");
                gallery.setOptions({
                    imageMargin: (rgtext.outerHeight() < 50) ? rgtext.outerHeight() + 110 : ((rgtext.outerHeight() < 120) ? rgtext.outerHeight() + 90 : rgtext.outerHeight() + 60)
                }).refreshImage();
                gallery.$("image-nav-left, image-nav-right, images").unbind('click').click(function (e) {
                    self.navigationClick(e, gallery);
                });
                gallery.$("image-nav-left, image-nav-right, images").addClass('clicked');
            } else if (theme == "zoom") {
                gallery.$("images").click(function (e) {
                    self.closeAndCleanup(gallery);
                });
            }
            if (Galleria.TOUCH) {
                $(window).bind('orientationchange', function() {
                    gallery.enterFullscreen();
                });
            }
        }
    }
};
var NZZ = NZZ || {};

NZZ.formatDate = {
    config: {
        dateTimeFormats: {
            time: 'hh:mm',
            notCurrentYear: 'd. MM yy, hh:mm',
            currentYear: 'DD, d. MM yy, hh:mm',
            today: 'Heute, hh:mm',
            yesterday: 'Gestern, hh:mm',
            minutes: 'Vor mm Minuten'
        },
        datePickerConfig: {
            monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
        },
        disqusDateSelector: '.dsq-comment-meta'
    },

    init: function() {
        $.datepicker.setDefaults(this.config.datePickerConfig);
        this.reformatDate();
    },

    reformatDate: function () {
        var dateString = '',
            self = this;

        $(this.config.disqusDateSelector).each(function () {
            dateString = $(this).html();
            dateString = self.getDateTimeString(new Date(dateString));
            if (dateString)
                $(this).html(dateString);
        });
    },

    getDateTimeString: function (dateObject) {
        var today = new Date(),
            dateTimeFormats = this.config.dateTimeFormats,
            commentTime = '',
            dateTimeString = '';

        if (!this._isValidDateObject(dateObject)) {
            return dateTimeString;
        }
        commentTime = this.getTimeString(dateObject);

        if (this.isToday(dateObject)) {
            dateTimeString = dateTimeFormats.today.replace(dateTimeFormats.time, commentTime);
        } else if (this.isEqualDates(dateObject, this.getYesterday())) {
            dateTimeString = dateTimeFormats.yesterday.replace(dateTimeFormats.time, commentTime);
        } else if (dateObject.getFullYear() === today.getFullYear()) {
            dateTimeString = $.datepicker.formatDate(dateTimeFormats.currentYear.replace(dateTimeFormats.time, commentTime), dateObject);
        } else if (dateObject.getFullYear() !== today.getFullYear()) {
            dateTimeString = $.datepicker.formatDate(dateTimeFormats.notCurrentYear.replace(dateTimeFormats.time, commentTime), dateObject);
        }

        return dateTimeString;
    },

    isToday: function (dateObject) {
        var today = new Date(),
            dateFormat = 'd.m.y';

        if (!this._isValidDateObject(dateObject)) {
            return false;
        }

        return ($.datepicker.formatDate(dateFormat, dateObject) === $.datepicker.formatDate(dateFormat, today));
    },

    isEqualDates: function(dateObject1, dateObject2) {
        var dateFormat = 'd.m.y';

        if (!this._isValidDateObject(dateObject1) || !this._isValidDateObject(dateObject2)) {
            return false;
        }

        return ($.datepicker.formatDate(dateFormat, dateObject1) === $.datepicker.formatDate(dateFormat, dateObject2));
    },

    getTimeString: function (dateObject) {
        var hours = 0,
            minutes = 0,
            timeString = '';

        if (!this._isValidDateObject(dateObject)) {
            return timeString;
        }

        hours = dateObject.getHours();
        minutes = dateObject.getMinutes();
        timeString = ((hours < 10) ? ('0' + hours) : (hours)) + ':' + ((minutes < 10) ? ('0' + minutes) : (minutes));

        return timeString;
    },

    getYesterday: function () {
        var today = new Date();

        return new Date(today.setDate(today.getDate() - 1));
    },

    _isValidDateObject: function (dateObject) {
        return (dateObject instanceof Date === true && typeof dateObject.getFullYear === 'function' && isNaN(dateObject.getFullYear()) === false);
    }
};
    var NZZ = NZZ || {};
    NZZ.loginOverlay = NZZ.loginOverlay || {};

    NZZ.loginOverlay.reloadPageSettings = function (data) {
        $('#fancybox').html(data);
        $('input').checkBox();
        $.fancybox({
            'href': '#fancybox',
            onClosed: function () {
                $('#fancybox').empty();
            }
        });
    };

    NZZ.loginOverlay.authorisationLoginForm = function (e) {
        var loginFormUrl = $('#fancybox').attr('ajax-url') || '';
        var ajaxObject = {
            url: loginFormUrl,
            data: {
                message: $(self).parents("form").find("textarea").val()
            },
            success: function (data) {
                NZZ.loginOverlay.reloadPageSettings(data);
            }
        };

        e.preventDefault();
        $.fancybox.showActivity();
        $.ajax(ajaxObject);
    };
(function () {
    var newsTicker = $('#newsTicker');
    if (newsTicker.length) {
        var fadeinTime = parseInt(newsTicker.attr('fadeinTime'), 10);
        var fadeoutTime = parseInt(newsTicker.attr('fadeoutTime'), 10);
        var displayTime = parseInt(newsTicker.attr('displayTime'), 10) + fadeinTime + fadeoutTime;
        var currentNr = 0;
        var newsTickerLines = newsTicker.find('h1');

        var fadeOutIn = function (items) {
            var nextNr = currentNr + 1;
            if (items.length <= nextNr) {
                nextNr = 0;
            }
            $(items[currentNr]).fadeOut(fadeoutTime, 'swing', function () {
                $(items[nextNr]).fadeIn(fadeinTime, 'swing', function () {
                    currentNr = nextNr;
                });
            });
        };

        var fader = window.setInterval(function () {
            fadeOutIn(newsTickerLines)
        }, displayTime);

        newsTicker.on('mouseover', function () {
            window.clearInterval(fader);
        });

        newsTicker.on('mouseout', function () {
            fader = window.setInterval(function () {
                fadeOutIn(newsTickerLines)
            }, displayTime);
        });
    }
})();

var NZZ = NZZ || {};

NZZ.newsticker = {
    setPagingLinks : function(newstickerList, pageNumber){
        if (isNaN(pageNumber)){
            pageNumber = $('.pagination-list-item.selected').index();
        }
        var pages = newstickerList.length;
        var prev = parseInt(pageNumber, 10) - 1;
        var next = parseInt(pageNumber, 10) + 1;

        if (prev == 0) {
            prev = pages;
        }

        if (pages > 1 && next > pages) {
            next = 1;
        }

        $('#pagination-controls-prev').attr('href', '#ticker-page:' + prev);
        $('#pagination-controls-next').attr('href', '#ticker-page:' + next);
    },
    changePage : function(newstickerList, pageNumber){
        newstickerList.hide();
        $('.pagination-list-item').removeClass('selected');
        $('#ticker-page' + '-' + pageNumber).show();
        $('#pagination-list-item' + '-' + pageNumber).addClass('selected');
        $.counters.update();
    }
}
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var a=m.shift();v(a.href,function(b){p(b,a.href,a.media),h[a.href]=!0,setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(a){var b="clientWidth",h=d[b],k="CSS1Compat"===c.compatMode&&h||c.body[b]||h,m={},n=l[l.length-1],o=(new Date).getTime();if(a&&q&&i>o-q)return clearTimeout(r),r=setTimeout(u,i),void 0;q=o;for(var p in e)if(e.hasOwnProperty(p)){var v=e[p],w=v.minw,x=v.maxw,y=null===w,z=null===x,A="em";w&&(w=parseFloat(w)*(w.indexOf(A)>-1?t||s():1)),x&&(x=parseFloat(x)*(x.indexOf(A)>-1?t||s():1)),v.hasquery&&(y&&z||!(y||k>=w)||!(z||x>=k))||(m[v.media]||(m[v.media]=[]),m[v.media].push(f[v.rules]))}for(var B in g)g.hasOwnProperty(B)&&g[B]&&g[B].parentNode===j&&j.removeChild(g[B]);for(var C in m)if(m.hasOwnProperty(C)){var D=c.createElement("style"),E=m[C].join("\n");D.type="text/css",D.media=C,j.insertBefore(D,n.nextSibling),D.styleSheet?D.styleSheet.cssText=E:D.appendChild(c.createTextNode(E)),g.push(D)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);

$(document).ready(function () {

    /* M&D teaser */
    $(".mndteaser").jCarouselLite({
        beforeStart: function(a) {
            $.counters.update();
        },
        btnNext: ".mndteaser-controls-next",
        btnPrev: ".mndteaser-controls-prev",
        visible: 1
    });

    $("#cac-message").on('click', 'a[href=#login]', function(e) {
        e.preventDefault();
        $(this).parent().slideUp('slow', function() {
            NZZ.loginOverlay.authorisationLoginForm(e);
        });
    });

    var removeOutLineFrameAroundLink = function ($element) {
        if ($.browser.msie && $.browser.version <= 7) {
            $element.attr("hideFocus", true).css("outline", "none");
        }
    };

    window.formatDisqusDate = function (callbackName) {
        NZZ.formatDate.init();
        if (callbackName !== 'onready') {
            return;
        }

        $('#ajaxLoader').remove();
    };

    /* Opacity fix for touch devices */
    if ('ontouchstart' in window) {
        $('.notify').css("opacity", "1");
    }

    $(window).resize(function () {
        $('#products aside').carrousel('resize');
        $('footer #social-media-floater').floaternavi('resize');
        $('#social-media-floater').floaternavi('resize');
        $('footer #social-media-floater').floaternavi();
        $('#social-media-floater').floaternavi();
    });

    $(window).scroll(function () {
        $('footer #social-media-floater').floaternavi();
        $('#social-media-floater').floaternavi();
    });

    /* Search page */
    NZZ.search.init();
    /* Check, if cookies are enabled */
    NZZ.user.init();
    /* Weather block */
    NZZ.weather.init();
    /* Dossier block */
    NZZ.dossier.init();
    /* Marking of articles */
    NZZ.markArticle.init();

    $('select').selectmenu();
    $('input').checkBox();
    $('.carrousel').carrousel();
    $('footer #social-media-floater').floaternavi('resize');
    $('#social-media-floater').floaternavi('resize');
    $('#products aside').carrousel('resize');
    $('#articleMore').footerad('footer');
    $('#subnav').sfHover();
    $('.metanav').flyoutsHover();
    $.placeholder();

    /* Social Media Floater -> Print article detail view */
    $("#social-media-floater a.print").click(function (e) {
        e.preventDefault();
        window.print();
    });

    /* System message */
    $('.message img').click(function () {
        $(this).parent().hide('slide', {direction: "up"}, 1000);
    });

    $("a.fancy_commentPreview").live("click", function (e) {
        e.preventDefault();

        $.fancybox.showActivity();

        var self = this;

        $.ajax({
            url: "fancyboxes/" + $(this).attr("href"),
            data: {
                message: $(self).parents("form").find("textarea").val()
            },
            success: function (data) {
                $('#fancybox').html(data);
                $.fancybox({'href': '#fancybox'});
                $('.close').click(function () {
                    $.fancybox.close();
                });
            }
        });
    });

    /* Products carrousel tabs */
    $('#products aside').carrousel('resize');
    $('a.arrow.right, a.arrow.left').click(function (e) {
        e.preventDefault();
        $.counters.update();
    });


    $("a[rel*=fancybox], a.fancy_inline").fancybox({
        autoDimensions: true,
        'onComplete': function () {
            $('input').checkBox();
            $('.close').bind('click', function (e) {
                e.preventDefault();
                $.fancybox.close();
            });
        }
    });

    /* Gallery auto-load */
    (function () {
        NZZ.loadedGallery = null;
        var gallery = NZZ.gallery.init();

        $(window).hashchange(
            function () {
                var hash = document.location.hash,
                    hashParts = (hash) ? hash.split(':') : [];

                var newstickerList = $('.newsticker-list');
                if (newstickerList.length) {
                    NZZ.newsticker.setPagingLinks(newstickerList, hashParts[1]);
                }

                if (hashParts[0] == '#ticker-page' && newstickerList.length) {
                    NZZ.newsticker.changePage(newstickerList, hashParts[1]);
                } else {
                    if (hashParts.length == 2 && hashParts[0] == '#gallery' && hashParts[1].length > 0) {
                        NZZ.gallery.load(hashParts[1], {defaultRoute: '/gallery/'});

                        if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
                            setTimeout(function () {
                                $('.galleria-images').hover(function () {
                                    $(".galleria-image-nav-left, .galleria-image-nav-right").trigger('mouseenter');
                                }, function () {
                                    $(".galleria-image-nav-left, .galleria-image-nav-right").trigger('mouseleave');
                                });
                            }, 1000);
                        }
                    } else if (hashParts.length == 2 && hashParts[0] == '#image' && hashParts[1].length > 0) {
                        NZZ.gallery.load(hashParts[1], {defaultRoute: '/image/'});
                    } else {
                        gallery.closeAndCleanup(NZZ.loadedGallery);
                        NZZ.loadedGallery = null;
                    }
                }
            }
        );

        $(window).hashchange();

    })();

    $(".accordionfaq").accordion({
        header: 'h3',
        active: 'none',
        create: function (event, ui) {
            removeOutLineFrameAroundLink($('.accordionfaq a'));
        },
        changestart: function (event, ui) {
            var newstate = $(this).find("li:eq(" + ui.index + ") h3 a").attr('href');

            if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
                return;
            }
            window.History.pushState({state: "tab"}, newstate, newstate);
        },
        navigation: true,
        collapsible: true
    });

    /* Leser Trend box */
    (function () {
        var tabs_offset = [],
            tabs_link_more = [],
            tabs_selected_panel = null,
            i = 0;

        var $accordion = $(".accordion");
        var $accordionConfig = {
            event: 'mouseover',
            header: 'h4',
            autoHeight: false,
            create: function (event, ui) {
                removeOutLineFrameAroundLink($('.accordion a'));
            }
        }
        if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
            $accordionConfig.change = function(event, ui) {
                $accordion.accordion("resize");
            }
        }
        $accordion.accordion($accordionConfig);

        $('.trends').tabs({
            select: function (event, ui) {
                window.location.hash = ui.tab.hash;
                $.counters.update();
            },
            show: function (event, ui) {
                tabs_selected_panel = ui.panel;
                tabs_link_more[ui.index] = $(ui.panel).attr('rel');
                if ($(tabs_selected_panel).find('li:hidden').length > 0) {
                    $('.trends a.expand').show();
                } else {
                    $('.trends a.expand').hide();
                }
            }
        });

        for (i = 0; i < $('.trends').tabs("length"); i++) {
            tabs_offset[i] = 0;
        }

        $('.trends a.expand').bind('click', function (e) {
            var uri,
                tab_index = $('.trends').tabs('option', 'selected');

            e.preventDefault();
            if (typeof tabs_link_more[tab_index] != 'undefined') {
                tabs_offset[tab_index] += 5;
                uri = tabs_link_more[tab_index] + '/' + tabs_offset[tab_index] + '.html';
                uri = uri.replace("\/\/", "\/");
                $.get(uri, function (response) {
                    if (response.length) {
                        $(tabs_selected_panel).append(response);
                    }
                }, "html");
            } else {
                $(tabs_selected_panel).find('li:hidden').show();
                $(this).hide();
            }
        });
    })();

    /* Form submitting */
    $('form#emailArticle').live('submit', function (e) {
        e.preventDefault();

        var form = this;
        if ($(form).attr("inporgress") !== 'true') {
            $(form).attr("inporgress", "true");
            $.ajax({
                url: $(form).attr('action'),
                type: $(form).attr('method') || 'POST',
                data: $(form).serialize(),
                dataType: 'html',
                success: function () {
                    $.fancybox.close();
                    $(form).removeAttr("inporgress");
                },
                error: function (xhr) {
                    if (xhr.status == 400 && xhr.responseText) {
                        $(form).replaceWith($(xhr.responseText).find("form"));
                        $('input').checkBox();
                    }
                    $(form).removeAttr("inporgress");
                }
            });
        }
    });

    $('#fancybox .close').live('click', function (e) {
        $.fancybox.close();
    });
    var tabs_offset = [],
        tabs_link_more = [],
        tabs_selected_panel = null,
        i = 0;

    for (i = 0; i < $('.trends').tabs("length"); i++) {
        tabs_offset[i] = 0;
    }

    /* Update tracking counters on gallery image change */
    if (typeof Galleria === 'function') {
        Galleria.on('loadstart', function(e) {
            $.counters.update();
        });
    }

    /* Update tracking counters on paging in comments */
    $("#nzz-comments-wrapper").on('click', '.dsq-numbered-pagination a', function() {
        $.counters.update();
    });

    removeOutLineFrameAroundLink($('a'));

    /* Init before-after jquery plugin */
    $('.before-after').beforeAfter({
        imagePath: $('#header').data('path') || '/bundles/website/img/beforeafter/',
        animateIntro: true,
        showFullLinks: false,
        enableKeyboard: true
    });

    /* Init news boxes (masonry jquery plugin) */
    $('#box-list').masonry({
        itemSelector : '.box-item',
        columnWidth : 240
    });

});
