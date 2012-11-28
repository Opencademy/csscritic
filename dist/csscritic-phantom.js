/*! PhantomJS regression runner for CSS critic - v0.1.0 - 2012-11-28
* http://www.github.com/cburgmer/csscritic
* Copyright (c) 2012 Christoph Burgmer, Copyright (c) 2012 ThoughtWorks, Inc.; Licensed MIT */
/* Integrated dependencies:
 * jsSHA.js (BSD License),
 * URI.js (MIT License/GPL v3),
 * cssParser.js (MPL 1.1/GPL 2.0/LGPL 2.1),
 * htmlparser.js,
 * imagediff.js (MIT License),
 * rasterizeHTML.js (MIT License) */

(function() {/*
 A JavaScript implementation of the SHA family of hashes, as defined in FIPS
 PUB 180-2 as well as the corresponding HMAC implementation as defined in
 FIPS PUB 198a

 Copyright Brian Turek 2008-2012
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnson
*/
function m(a){throw a;}var p=null;function r(a,b){var c=[],f=(1<<b)-1,d=a.length*b,e;for(e=0;e<d;e+=b)c[e>>>5]|=(a.charCodeAt(e/b)&f)<<32-b-e%32;return{value:c,binLen:d}}function u(a){var b=[],c=a.length,f,d;0!==c%2&&m("String of HEX type must be in byte increments");for(f=0;f<c;f+=2)d=parseInt(a.substr(f,2),16),isNaN(d)&&m("String of HEX type contains invalid characters"),b[f>>>3]|=d<<24-4*(f%8);return{value:b,binLen:4*c}}
function y(a){var b=[],c=0,f,d,e,j,k;-1===a.search(/^[a-zA-Z0-9=+\/]+$/)&&m("Invalid character in base-64 string");f=a.indexOf("=");a=a.replace(/\=/g,"");-1!==f&&f<a.length&&m("Invalid '=' found in base-64 string");for(d=0;d<a.length;d+=4){k=a.substr(d,4);for(e=j=0;e<k.length;e+=1)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(k[e]),j|=f<<18-6*e;for(e=0;e<k.length-1;e+=1)b[c>>2]|=(j>>>16-8*e&255)<<24-8*(c%4),c+=1}return{value:b,binLen:8*c}}
function B(a,b){var c="",f=4*a.length,d,e;for(d=0;d<f;d+=1)e=a[d>>>2]>>>8*(3-d%4),c+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(e&15);return b.outputUpper?c.toUpperCase():c}
function C(a,b){var c="",f=4*a.length,d,e,j;for(d=0;d<f;d+=3){j=(a[d>>>2]>>>8*(3-d%4)&255)<<16|(a[d+1>>>2]>>>8*(3-(d+1)%4)&255)<<8|a[d+2>>>2]>>>8*(3-(d+2)%4)&255;for(e=0;4>e;e+=1)c=8*d+6*e<=32*a.length?c+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(j>>>6*(3-e)&63):c+b.b64Pad}return c}
function D(a){var b={outputUpper:!1,b64Pad:"="};try{a.hasOwnProperty("outputUpper")&&(b.outputUpper=a.outputUpper),a.hasOwnProperty("b64Pad")&&(b.b64Pad=a.b64Pad)}catch(c){}"boolean"!==typeof b.outputUpper&&m("Invalid outputUpper formatting option");"string"!==typeof b.b64Pad&&m("Invalid b64Pad formatting option");return b}function E(a,b){return a>>>b|a<<32-b}function F(a,b,c){return a&b^~a&c}function Q(a,b,c){return a&b^a&c^b&c}function R(a){return E(a,2)^E(a,13)^E(a,22)}
function S(a){return E(a,6)^E(a,11)^E(a,25)}function T(a){return E(a,7)^E(a,18)^a>>>3}function U(a){return E(a,17)^E(a,19)^a>>>10}function V(a,b){var c=(a&65535)+(b&65535);return((a>>>16)+(b>>>16)+(c>>>16)&65535)<<16|c&65535}function W(a,b,c,f){var d=(a&65535)+(b&65535)+(c&65535)+(f&65535);return((a>>>16)+(b>>>16)+(c>>>16)+(f>>>16)+(d>>>16)&65535)<<16|d&65535}
function X(a,b,c,f,d){var e=(a&65535)+(b&65535)+(c&65535)+(f&65535)+(d&65535);return((a>>>16)+(b>>>16)+(c>>>16)+(f>>>16)+(d>>>16)+(e>>>16)&65535)<<16|e&65535}
function Y(a,b,c){var f,d,e,j,k,i,x,z,G,g,H,s,h,l,q,n,v,w,o,I,J,K,L,M,N,O,t=[],P,A;"SHA-224"===c||"SHA-256"===c?(H=64,l=16,q=1,N=Number,n=V,v=W,w=X,o=T,I=U,J=R,K=S,M=Q,L=F,O=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,
338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g="SHA-224"===c?[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]:[1779033703,3144134277,1013904242,2773480762,
1359893119,2600822924,528734635,1541459225]):m("Unexpected error in SHA-2 implementation");a[b>>>5]|=128<<24-b%32;a[(b+65>>>9<<4)+15]=b;P=a.length;for(s=0;s<P;s+=l){b=g[0];f=g[1];d=g[2];e=g[3];j=g[4];k=g[5];i=g[6];x=g[7];for(h=0;h<H;h+=1)t[h]=16>h?new N(a[h*q+s],a[h*q+s+1]):v(I(t[h-2]),t[h-7],o(t[h-15]),t[h-16]),z=w(x,K(j),L(j,k,i),O[h],t[h]),G=n(J(b),M(b,f,d)),x=i,i=k,k=j,j=n(e,z),e=d,d=f,f=b,b=n(z,G);g[0]=n(b,g[0]);g[1]=n(f,g[1]);g[2]=n(d,g[2]);g[3]=n(e,g[3]);g[4]=n(j,g[4]);g[5]=n(k,g[5]);g[6]=
n(i,g[6]);g[7]=n(x,g[7])}"SHA-224"===c?A=[g[0],g[1],g[2],g[3],g[4],g[5],g[6]]:"SHA-256"===c?A=g:m("Unexpected error in SHA-2 implementation");return A}
window.jsSHA=function(a,b,c){var f=p,d=p,e=0,j=[0],k=0,i=p,k="undefined"!==typeof c?c:8;8===k||16===k||m("charSize must be 8 or 16");"HEX"===b?(0!==a.length%2&&m("srcString of HEX type must be in byte increments"),i=u(a),e=i.binLen,j=i.value):"ASCII"===b||"TEXT"===b?(i=r(a,k),e=i.binLen,j=i.value):"B64"===b?(i=y(a),e=i.binLen,j=i.value):m("inputFormat must be HEX, TEXT, ASCII, or B64");this.getHash=function(a,b,c){var g=p,k=j.slice(),i="";switch(b){case "HEX":g=B;break;case "B64":g=C;break;default:m("format must be HEX or B64")}if("SHA-224"===
a){p===f&&(f=Y(k,e,a));i=g(f,D(c))}else if("SHA-256"===a){p===d&&(d=Y(k,e,a));i=g(d,D(c))}else m("Chosen SHA variant is not supported");return i};this.getHMAC=function(a,b,c,d,f){var i,h,l,q,n,v=[],w=[],o=p;switch(d){case "HEX":i=B;break;case "B64":i=C;break;default:m("outputFormat must be HEX or B64")}if("SHA-224"===c){l=64;n=224}else if("SHA-256"===c){l=64;n=256}else m("Chosen SHA variant is not supported");if("HEX"===b){o=u(a);q=o.binLen;h=o.value}else if("ASCII"===b||"TEXT"===b){o=r(a,k);q=o.binLen;
h=o.value}else if("B64"===b){o=y(a);q=o.binLen;h=o.value}else m("inputFormat must be HEX, TEXT, ASCII, or B64");a=l*8;b=l/4-1;if(l<q/8){h=Y(h,q,c);h[b]=h[b]&4294967040}else l>q/8&&(h[b]=h[b]&4294967040);for(l=0;l<=b;l=l+1){v[l]=h[l]^909522486;w[l]=h[l]^1549556828}c=Y(w.concat(Y(v.concat(j),a+e,c)),a+n,c);return i(c,D(f))}};})();

/*! rasterizeHTML.js - v0.1.0 - 2012-11-26
* http://www.github.com/cburgmer/rasterizeHTML.js
* Copyright (c) 2012 Christoph Burgmer;
/* Integrated dependencies:
 * URI.js (MIT License/GPL v3),
 * cssParser.js (MPL 1.1/GPL 2.0/LGPL 2.1),
 * htmlparser.js */
function CSSScanner(e){this.init(e)}function CSSParser(e){this.mToken=null,this.mLookAhead=null,this.mScanner=new CSSScanner(e),this.mPreserveWS=!0,this.mPreserveComments=!0,this.mPreservedTokens=[],this.mError=null}function jscsspToken(e,t,n){this.type=e,this.value=t,this.unit=n}function jscsspStylesheet(){this.cssRules=[],this.variables={}}function jscsspCharsetRule(){this.type=kJscsspCHARSET_RULE,this.encoding=null,this.parsedCssText=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspErrorRule(e){this.error=e?e:"INVALID",this.type=kJscsspUNKNOWN_RULE,this.parsedCssText=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspComment(){this.type=kJscsspCOMMENT,this.parsedCssText=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspWhitespace(){this.type=kJscsspWHITE_SPACE,this.parsedCssText=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspImportRule(){this.type=kJscsspIMPORT_RULE,this.parsedCssText=null,this.href=null,this.media=[],this.parentStyleSheet=null,this.parentRule=null}function jscsspNamespaceRule(){this.type=kJscsspNAMESPACE_RULE,this.parsedCssText=null,this.prefix=null,this.url=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspDeclaration(){this.type=kJscsspSTYLE_DECLARATION,this.property=null,this.values=[],this.valueText=null,this.priority=null,this.parsedCssText=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspFontFaceRule(){this.type=kJscsspFONT_FACE_RULE,this.parsedCssText=null,this.descriptors=[],this.parentStyleSheet=null,this.parentRule=null}function jscsspKeyframesRule(){this.type=kJscsspKEYFRAMES_RULE,this.parsedCssText=null,this.cssRules=[],this.name=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspKeyframeRule(){this.type=kJscsspKEYFRAME_RULE,this.parsedCssText=null,this.declarations=[],this.keyText=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspMediaRule(){this.type=kJscsspMEDIA_RULE,this.parsedCssText=null,this.cssRules=[],this.media=[],this.parentStyleSheet=null,this.parentRule=null}function jscsspStyleRule(){this.type=kJscsspSTYLE_RULE,this.parsedCssText=null,this.declarations=[],this.mSelectorText=null,this.parentStyleSheet=null,this.parentRule=null}function jscsspPageRule(){this.type=kJscsspPAGE_RULE,this.parsedCssText=null,this.pageSelector=null,this.declarations=[],this.parentStyleSheet=null,this.parentRule=null}function jscsspVariablesRule(){this.type=kJscsspVARIABLES_RULE,this.parsedCssText=null,this.declarations=[],this.parentStyleSheet=null,this.parentRule=null,this.media=null}function jscsspVariable(e,t){this.value="",this.type=e,this.name=null,this.parentRule=null,this.parentStyleSheet=t}function ParseURL(e){var t={};t.protocol="",t.user="",t.password="",t.host="",t.port="",t.path="",t.query="";var n="PROTOCOL",r=0,i=!1;while(r<e.length)if(n=="PROTOCOL")e.charAt(r)==":"?(n="AFTER_PROTOCOL",r++):e.charAt(r)=="/"&&t.protocol.length()==0?n=PATH:t.protocol+=e.charAt(r++);else if(n=="AFTER_PROTOCOL"){if(e.charAt(r)!="/")throw new ParseException("Protocol shell be separated with 2 slashes");i?(i=!1,n="USER"):i=!0,r++}else n=="USER"?e.charAt(r)=="/"?(t.host=t.user,t.user="",n="PATH"):e.charAt(r)=="?"?(t.host=t.user,t.user="",n="QUERY",r++):e.charAt(r)==":"?(n="PASSWORD",r++):e.charAt(r)=="@"?(n="HOST",r++):t.user+=e.charAt(r++):n=="PASSWORD"?e.charAt(r)=="/"?(t.host=t.user,t.port=t.password,t.user="",t.password="",n="PATH"):e.charAt(r)=="?"?(t.host=t.user,t.port=t.password,t.user="",t.password="",n="QUERY",r++):e.charAt(r)=="@"?(n="HOST",r++):t.password+=e.charAt(r++):n=="HOST"?e.charAt(r)=="/"?n="PATH":e.charAt(r)==":"?(n="PORT",r++):e.charAt(r)=="?"?(n="QUERY",r++):t.host+=e.charAt(r++):n=="PORT"?e.charAt(r)=="/"?n="PATH":e.charAt(r)=="?"?(n="QUERY",r++):t.port+=e.charAt(r++):n=="PATH"?e.charAt(r)=="?"?(n="QUERY",r++):t.path+=e.charAt(r++):n=="QUERY"&&(t.query+=e.charAt(r++));if(n=="PROTOCOL")t.host=t.protocol,t.protocol="http";else{if(n=="AFTER_PROTOCOL")throw new ParseException("Invalid url");n=="USER"?(t.host=t.user,t.user=""):n=="PASSWORD"&&(t.host=t.user,t.port=t.password,t.user="",t.password="")}return t}function ParseException(e){this.description=e}function CountLF(e){var t=e.match(/\n/g);return t?t.length+1:1}function FilterLinearGradientForOutput(e,t){if(t=="generic")return e.substr(5);if(t=="webkit")return e.replace(/\-moz\-/g,"-webkit-");if(t!="webkit20110101")return"";var n=CssInspector.parseBackgroundImages(e)[0],r=!1,i="-webkit-gradient(linear, ",s="position"in n.value?n.value.position.toLowerCase():"",o="angle"in n.value?n.value.angle.toLowerCase():"";if(o){var u=o.match(/^([0-9\-\.\\+]+)([a-z]*)/),o=parseFloat(u[1]),a=u[2];switch(a){case"grad":o=o*90/100;break;case"rad":o=o*180/Math.PI;break;default:}while(o<0)o+=360;while(o>=360)o-=360}var f=[],l=[];if(s!=""){s=="center"&&(s="center center"),f=s.split(" ");if(o==""&&o!=0){switch(f[0]){case"left":l.push("right");break;case"center":l.push("center");break;case"right":l.push("left");break;default:var u=f[0].match(/^([0-9\-\.\\+]+)([a-z]*)/),c=parseFloat(u[0]),a=u[1];a=="%"?l.push(100-c+"%"):r=!0}if(!r)switch(f[1]){case"top":l.push("bottom");break;case"center":l.push("center");break;case"bottom":l.push("top");break;default:var u=f[1].match(/^([0-9\-\.\\+]+)([a-z]*)/),c=parseFloat(u[0]),a=u[1];a=="%"?l.push(100-c+"%"):r=!0}}else switch(o){case 0:l.push("right"),l.push(f[1]);break;case 90:l.push(f[0]),l.push("top");break;case 180:l.push("left"),l.push(f[1]);break;case 270:l.push(f[0]),l.push("bottom");break;default:r=!0}}else{o==""&&(o=270);switch(o){case 0:f=["left","center"],l=["right","center"];break;case 90:f=["center","bottom"],l=["center","top"];break;case 180:f=["right","center"],l=["left","center"];break;case 270:f=["center","top"],l=["center","bottom"];break;default:r=!0}}if(r)return"";i+=f.join(" ")+", "+l.join(" "),n.value.stops[0].position||(n.value.stops[0].position="0%"),n.value.stops[n.value.stops.length-1].position||(n.value.stops[n.value.stops.length-1].position="100%");var h=0;for(var p=0;p<n.value.stops.length&&!r;p++){var d=n.value.stops[p];if(d.position){if(d.position.indexOf("%")==-1){r=!0;break}}else{var v=p+1;while(v<n.value.stops.length&&!n.value.stops[v].position)v++;var m=parseFloat(n.value.stops[v].position)-h;for(var g=p;g<v;g++)n.value.stops[g].position=h+m*(g-p+1)/(v-p+1)+"%"}h=parseFloat(d.position),i+=", color-stop("+parseFloat(h)/100+", "+d.color+")"}return r?"":i+")"}function FilterRadialGradientForOutput(e,t){if(t=="generic")return e.substr(5);if(t=="webkit")return e.replace(/\-moz\-/g,"-webkit-");if(t!="webkit20110101")return"";var n=CssInspector.parseBackgroundImages(e)[0],r="shape"in n.value?n.value.shape:"",i="size"in n.value?n.value.size:"";if(r!="circle"||i!="farthest-corner"&&i!="cover")return"";if(!(n.value.stops.length<2)&&"position"in n.value.stops[0]&&!!n.value.stops[n.value.stops.length-1].position&&"position"in n.value.stops[0]&&!!n.value.stops[n.value.stops.length-1].position){for(var s=0;s<n.value.stops.length;s++){var o=n.value.stops[s];if("position"in o&&o.position&&o.position.indexOf("px")==-1)return""}var u="-webkit-gradient(radial, ",a="position"in n.value?n.value.position:"center center";u+=a+", "+parseFloat(n.value.stops[0].position)+", ",u+=a+", "+parseFloat(n.value.stops[n.value.stops.length-1].position);var f=parseFloat(n.value.stops[0].position);for(var s=0;s<n.value.stops.length;s++){var o=n.value.stops[s];if(!("position"in o)||!o.position){var l=s+1;while(l<n.value.stops.length&&!n.value.stops[l].position)l++;var c=parseFloat(n.value.stops[l].position)-f;for(var h=s;h<l;h++)n.value.stops[h].position=f+c*(h-s+1)/(l-s+1)+"px"}f=parseFloat(o.position);var p=(f-parseFloat(n.value.stops[0].position))/(parseFloat(n.value.stops[n.value.stops.length-1].position)-parseFloat(n.value.stops[0].position));u+=", color-stop("+p+", "+o.color+")"}return u+=")",u}return""}function FilterRepeatingGradientForOutput(e,t){return t=="generic"?e.substr(5):t=="webkit"?e.replace(/\-moz\-/g,"-webkit-"):""}const kCHARSET_RULE_MISSING_SEMICOLON="Missing semicolon at the end of @charset rule",kCHARSET_RULE_CHARSET_IS_STRING="The charset in the @charset rule should be a string",kCHARSET_RULE_MISSING_WS="Missing mandatory whitespace after @charset",kIMPORT_RULE_MISSING_URL="Missing URL in @import rule",kURL_EOF="Unexpected end of stylesheet",kURL_WS_INSIDE="Multiple tokens inside a url() notation",kVARIABLES_RULE_POSITION="@variables rule invalid at this position in the stylesheet",kIMPORT_RULE_POSITION="@import rule invalid at this position in the stylesheet",kNAMESPACE_RULE_POSITION="@namespace rule invalid at this position in the stylesheet",kCHARSET_RULE_CHARSET_SOF="@charset rule invalid at this position in the stylesheet",kUNKNOWN_AT_RULE="Unknow @-rule",kENGINES=["webkit","presto","trident","generic"],kCSS_VENDOR_VALUES={"-moz-box":{webkit:"-webkit-box",presto:"",trident:"",generic:"box"},"-moz-inline-box":{webkit:"-webkit-inline-box",presto:"",trident:"",generic:"inline-box"},"-moz-initial":{webkit:"",presto:"",trident:"",generic:"initial"},"-moz-linear-gradient":{webkit20110101:FilterLinearGradientForOutput,webkit:FilterLinearGradientForOutput,presto:"",trident:"",generic:FilterLinearGradientForOutput},"-moz-radial-gradient":{webkit20110101:FilterRadialGradientForOutput,webkit:FilterRadialGradientForOutput,presto:"",trident:"",generic:FilterRadialGradientForOutput},"-moz-repeating-linear-gradient":{webkit20110101:"",webkit:FilterRepeatingGradientForOutput,presto:"",trident:"",generic:FilterRepeatingGradientForOutput},"-moz-repeating-radial-gradient":{webkit20110101:"",webkit:FilterRepeatingGradientForOutput,presto:"",trident:"",generic:FilterRepeatingGradientForOutput}},kCSS_VENDOR_PREFIXES={lastUpdate:1304175007,properties:[{gecko:"",webkit:"",presto:"",trident:"-ms-accelerator",status:"P"},{gecko:"",webkit:"",presto:"-wap-accesskey",trident:"",status:""},{gecko:"-moz-animation",webkit:"-webkit-animation",presto:"",trident:"",status:"WD"},{gecko:"-moz-animation-delay",webkit:"-webkit-animation-delay",presto:"",trident:"",status:"WD"},{gecko:"-moz-animation-direction",webkit:"-webkit-animation-direction",presto:"",trident:"",status:"WD"},{gecko:"-moz-animation-duration",webkit:"-webkit-animation-duration",presto:"",trident:"",status:"WD"},{gecko:"-moz-animation-fill-mode",webkit:"-webkit-animation-fill-mode",presto:"",trident:"",status:"ED"},{gecko:"-moz-animation-iteration-count",webkit:"-webkit-animation-iteration-count",presto:"",trident:"",status:"WD"},{gecko:"-moz-animation-name",webkit:"-webkit-animation-name",presto:"",trident:"",status:"WD"},{gecko:"-moz-animation-play-state",webkit:"-webkit-animation-play-state",presto:"",trident:"",status:"WD"},{gecko:"-moz-animation-timing-function",webkit:"-webkit-animation-timing-function",presto:"",trident:"",status:"WD"},{gecko:"-moz-appearance",webkit:"-webkit-appearance",presto:"",trident:"",status:"CR"},{gecko:"",webkit:"-webkit-backface-visibility",presto:"",trident:"",status:"WD"},{gecko:"background-clip",webkit:"-webkit-background-clip",presto:"background-clip",trident:"background-clip",status:"WD"},{gecko:"",webkit:"-webkit-background-composite",presto:"",trident:"",status:""},{gecko:"-moz-background-inline-policy",webkit:"",presto:"",trident:"",status:"P"},{gecko:"background-origin",webkit:"-webkit-background-origin",presto:"background-origin",trident:"background-origin",status:"WD"},{gecko:"",webkit:"background-position-x",presto:"",trident:"-ms-background-position-x",status:""},{gecko:"",webkit:"background-position-y",presto:"",trident:"-ms-background-position-y",status:""},{gecko:"background-size",webkit:"-webkit-background-size",presto:"background-size",trident:"background-size",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-behavior",status:""},{gecko:"-moz-binding",webkit:"",presto:"",trident:"",status:"P"},{gecko:"",webkit:"",presto:"",trident:"-ms-block-progression",status:""},{gecko:"",webkit:"-webkit-border-after",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-after-color",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-after-style",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-after-width",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-before",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-before-color",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-before-style",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-before-width",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-bottom-colors",webkit:"",presto:"",trident:"",status:"P"},{gecko:"border-bottom-left-radius",webkit:"-webkit-border-bottom-left-radius",presto:"border-bottom-left-radius",trident:"border-bottom-left-radius",status:"WD"},{gecko:"",webkit:"-webkit-border-bottom-left-radius = border-bottom-left-radius",presto:"",trident:"",status:""},{gecko:"border-bottom-right-radius",webkit:"-webkit-border-bottom-right-radius",presto:"border-bottom-right-radius",trident:"border-bottom-right-radius",status:"WD"},{gecko:"",webkit:"-webkit-border-bottom-right-radius = border-bottom-right-radius",presto:"",trident:"",status:""},{gecko:"-moz-border-end",webkit:"-webkit-border-end",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-end-color",webkit:"-webkit-border-end-color",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-end-style",webkit:"-webkit-border-end-style",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-end-width",webkit:"-webkit-border-end-width",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-border-fit",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-border-horizontal-spacing",presto:"",trident:"",status:""},{gecko:"-moz-border-image",webkit:"-webkit-border-image",presto:"-o-border-image",trident:"",status:"WD"},{gecko:"-moz-border-left-colors",webkit:"",presto:"",trident:"",status:"P"},{gecko:"border-radius",webkit:"-webkit-border-radius",presto:"border-radius",trident:"border-radius",status:"WD"},{gecko:"-moz-border-right-colors",webkit:"",presto:"",trident:"",status:"P"},{gecko:"-moz-border-start",webkit:"-webkit-border-start",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-start-color",webkit:"-webkit-border-start-color",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-start-style",webkit:"-webkit-border-start-style",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-start-width",webkit:"-webkit-border-start-width",presto:"",trident:"",status:"ED"},{gecko:"-moz-border-top-colors",webkit:"",presto:"",trident:"",status:"P"},{gecko:"border-top-left-radius",webkit:"-webkit-border-top-left-radius",presto:"border-top-left-radius",trident:"border-top-left-radius",status:"WD"},{gecko:"",webkit:"-webkit-border-top-left-radius = border-top-left-radius",presto:"",trident:"",status:""},{gecko:"border-top-right-radius",webkit:"-webkit-border-top-right-radius",presto:"border-top-right-radius",trident:"border-top-right-radius",status:"WD"},{gecko:"",webkit:"-webkit-border-top-right-radius = border-top-right-radius",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-border-vertical-spacing",presto:"",trident:"",status:""},{gecko:"-moz-box-align",webkit:"-webkit-box-align",presto:"",trident:"-ms-box-align",status:"WD"},{gecko:"-moz-box-direction",webkit:"-webkit-box-direction",presto:"",trident:"-ms-box-direction",status:"WD"},{gecko:"-moz-box-flex",webkit:"-webkit-box-flex",presto:"",trident:"-ms-box-flex",status:"WD"},{gecko:"",webkit:"-webkit-box-flex-group",presto:"",trident:"",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-box-line-progression",status:""},{gecko:"",webkit:"-webkit-box-lines",presto:"",trident:"-ms-box-lines",status:"WD"},{gecko:"-moz-box-ordinal-group",webkit:"-webkit-box-ordinal-group",presto:"",trident:"-ms-box-ordinal-group",status:"WD"},{gecko:"-moz-box-orient",webkit:"-webkit-box-orient",presto:"",trident:"-ms-box-orient",status:"WD"},{gecko:"-moz-box-pack",webkit:"-webkit-box-pack",presto:"",trident:"-ms-box-pack",status:"WD"},{gecko:"",webkit:"-webkit-box-reflect",presto:"",trident:"",status:""},{gecko:"box-shadow",webkit:"-webkit-box-shadow",presto:"box-shadow",trident:"box-shadow",status:"WD"},{gecko:"-moz-box-sizing",webkit:"box-sizing",presto:"box-sizing",trident:"",status:"CR"},{gecko:"",webkit:"-webkit-box-sizing = box-sizing",presto:"",trident:"",status:""},{gecko:"",webkit:"-epub-caption-side = caption-side",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-color-correction",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-column-break-after",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-column-break-before",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-column-break-inside",presto:"",trident:"",status:""},{gecko:"-moz-column-count",webkit:"-webkit-column-count",presto:"column-count",trident:"column-count",status:"CR"},{gecko:"-moz-column-gap",webkit:"-webkit-column-gap",presto:"column-gap",trident:"column-gap",status:"CR"},{gecko:"-moz-column-rule",webkit:"-webkit-column-rule",presto:"column-rule",trident:"column-rule",status:"CR"},{gecko:"-moz-column-rule-color",webkit:"-webkit-column-rule-color",presto:"column-rule-color",trident:"column-rule-color",status:"CR"},{gecko:"-moz-column-rule-style",webkit:"-webkit-column-rule-style",presto:"column-rule-style",trident:"column-rule-style",status:"CR"},{gecko:"-moz-column-rule-width",webkit:"-webkit-column-rule-width",presto:"column-rule-width",trident:"column-rule-width",status:"CR"},{gecko:"",webkit:"-webkit-column-span",presto:"column-span",trident:"column-span",status:"CR"},{gecko:"-moz-column-width",webkit:"-webkit-column-width",presto:"column-width",trident:"column-width",status:"CR"},{gecko:"",webkit:"-webkit-columns",presto:"columns",trident:"columns",status:"CR"},{gecko:"",webkit:"-webkit-dashboard-region",presto:"-apple-dashboard-region",trident:"",status:""},{gecko:"filter",webkit:"",presto:"filter",trident:"-ms-filter",status:""},{gecko:"-moz-float-edge",webkit:"",presto:"",trident:"",status:"P"},{gecko:"",webkit:"",presto:"-o-focus-opacity",trident:"",status:""},{gecko:"-moz-font-feature-settings",webkit:"",presto:"",trident:"",status:""},{gecko:"-moz-font-language-override",webkit:"",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-font-size-delta",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-font-smoothing",presto:"",trident:"",status:""},{gecko:"-moz-force-broken-image-icon",webkit:"",presto:"",trident:"",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-column",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-column-align",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-column-span",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-columns",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-layer",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-row",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-row-align",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-row-span",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-grid-rows",status:"WD"},{gecko:"",webkit:"-webkit-highlight",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-hyphenate-character",presto:"",trident:"",status:"WD"},{gecko:"",webkit:"-webkit-hyphenate-limit-after",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-hyphenate-limit-before",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-hyphens",presto:"",trident:"",status:"WD"},{gecko:"",webkit:"-epub-hyphens = -webkit-hyphens",presto:"",trident:"",status:""},{gecko:"-moz-image-region",webkit:"",presto:"",trident:"",status:"P"},{gecko:"ime-mode",webkit:"",presto:"",trident:"-ms-ime-mode",status:""},{gecko:"",webkit:"",presto:"-wap-input-format",trident:"",status:""},{gecko:"",webkit:"",presto:"-wap-input-required",trident:"",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-interpolation-mode",status:""},{gecko:"",webkit:"",presto:"-xv-interpret-as",trident:"",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-layout-flow",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-layout-grid",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-layout-grid-char",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-layout-grid-line",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-layout-grid-mode",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-layout-grid-type",status:""},{gecko:"",webkit:"-webkit-line-box-contain",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-line-break",presto:"",trident:"-ms-line-break",status:""},{gecko:"",webkit:"-webkit-line-clamp",presto:"",trident:"",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-line-grid-mode",status:""},{gecko:"",webkit:"",presto:"-o-link",trident:"",status:""},{gecko:"",webkit:"",presto:"-o-link-source",trident:"",status:""},{gecko:"",webkit:"-webkit-locale",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-logical-height",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-logical-width",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-margin-after",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-margin-after-collapse",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-margin-before",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-margin-before-collapse",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-margin-bottom-collapse",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-margin-collapse",presto:"",trident:"",status:""},{gecko:"-moz-margin-end",webkit:"-webkit-margin-end",presto:"",trident:"",status:"ED"},{gecko:"-moz-margin-start",webkit:"-webkit-margin-start",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-margin-top-collapse",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-marquee",presto:"",trident:"",status:""},{gecko:"",webkit:"",presto:"-wap-marquee-dir",trident:"",status:""},{gecko:"",webkit:"-webkit-marquee-direction",presto:"",trident:"",status:"WD"},{gecko:"",webkit:"-webkit-marquee-increment",presto:"",trident:"",status:""},{gecko:"",webkit:"",presto:"-wap-marquee-loop",trident:"",status:"WD"},{gecko:"",webkit:"-webkit-marquee-repetition",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-marquee-speed",presto:"-wap-marquee-speed",trident:"",status:"WD"},{gecko:"",webkit:"-webkit-marquee-style",presto:"-wap-marquee-style",trident:"",status:"WD"},{gecko:"mask",webkit:"-webkit-mask",presto:"mask",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-attachment",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-box-image",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-clip",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-composite",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-image",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-origin",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-position",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-position-x",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-position-y",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-repeat",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-repeat-x",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-repeat-y",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-mask-size",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-match-nearest-mail-blockquote-color",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-max-logical-height",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-max-logical-width",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-min-logical-height",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-min-logical-width",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"",presto:"-o-mini-fold",trident:"",status:""},{gecko:"",webkit:"-webkit-nbsp-mode",presto:"",trident:"",status:"P"},{gecko:"",webkit:"",presto:"-o-object-fit",trident:"",status:"ED"},{gecko:"",webkit:"",presto:"-o-object-position",trident:"",status:"ED"},{gecko:"opacity",webkit:"-webkit-opacity",presto:"opacity",trident:"opacity",status:"WD"},{gecko:"",webkit:"-webkit-opacity = opacity",presto:"",trident:"",status:""},{gecko:"-moz-outline-radius",webkit:"",presto:"",trident:"",status:"P"},{gecko:"-moz-outline-radius-bottomleft",webkit:"",presto:"",trident:"",status:"P"},{gecko:"-moz-outline-radius-bottomright",webkit:"",presto:"",trident:"",status:"P"},{gecko:"-moz-outline-radius-topleft",webkit:"",presto:"",trident:"",status:"P"},{gecko:"-moz-outline-radius-topright",webkit:"",presto:"",trident:"",status:"P"},{gecko:"overflow-x",webkit:"overflow-x",presto:"overflow-x",trident:"-ms-overflow-x",status:"WD"},{gecko:"overflow-y",webkit:"overflow-y",presto:"overflow-y",trident:"-ms-overflow-y",status:"WD"},{gecko:"",webkit:"-webkit-padding-after",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-padding-before",presto:"",trident:"",status:"ED"},{gecko:"-moz-padding-end",webkit:"-webkit-padding-end",presto:"",trident:"",status:"ED"},{gecko:"-moz-padding-start",webkit:"-webkit-padding-start",presto:"",trident:"",status:"ED"},{gecko:"",webkit:"-webkit-perspective",presto:"",trident:"",status:"WD"},{gecko:"",webkit:"-webkit-perspective-origin",presto:"",trident:"",status:"WD"},{gecko:"",webkit:"-webkit-perspective-origin-x",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-perspective-origin-y",presto:"",trident:"",status:""},{gecko:"",webkit:"",presto:"-xv-phonemes",trident:"",status:""},{gecko:"",webkit:"-webkit-rtl-ordering",presto:"",trident:"",status:"P"},{gecko:"-moz-script-level",webkit:"",presto:"",trident:"",status:""},{gecko:"-moz-script-min-size",webkit:"",presto:"",trident:"",status:""},{gecko:"-moz-script-size-multiplier",webkit:"",presto:"",trident:"",status:""},{gecko:"",webkit:"",presto:"scrollbar-3dlight-color",trident:"-ms-scrollbar-3dlight-color",status:"P"},{gecko:"",webkit:"",presto:"scrollbar-arrow-color",trident:"-ms-scrollbar-arrow-color",status:"P"},{gecko:"",webkit:"",presto:"scrollbar-base-color",trident:"-ms-scrollbar-base-color",status:"P"},{gecko:"",webkit:"",presto:"scrollbar-darkshadow-color",trident:"-ms-scrollbar-darkshadow-color",status:"P"},{gecko:"",webkit:"",presto:"scrollbar-face-color",trident:"-ms-scrollbar-face-color",status:"P"},{gecko:"",webkit:"",presto:"scrollbar-highlight-color",trident:"-ms-scrollbar-highlight-color",status:"P"},{gecko:"",webkit:"",presto:"scrollbar-shadow-color",trident:"-ms-scrollbar-shadow-color",status:"P"},{gecko:"",webkit:"",presto:"scrollbar-track-color",trident:"-ms-scrollbar-track-color",status:"P"},{gecko:"-moz-stack-sizing",webkit:"",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-webkit-svg-shadow",presto:"",trident:"",status:""},{gecko:"-moz-tab-size",webkit:"",presto:"-o-tab-size",trident:"",status:""},{gecko:"",webkit:"",presto:"-o-table-baseline",trident:"",status:""},{gecko:"",webkit:"-webkit-tap-highlight-color",presto:"",trident:"",status:"P"},{gecko:"",webkit:"",presto:"",trident:"-ms-text-align-last",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-text-autospace",status:"WD"},{gecko:"-moz-text-blink",webkit:"",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-text-combine",presto:"",trident:"",status:""},{gecko:"",webkit:"-epub-text-combine = -webkit-text-combine",presto:"",trident:"",status:""},{gecko:"-moz-text-decoration-color",webkit:"",presto:"",trident:"",status:""},{gecko:"-moz-text-decoration-line",webkit:"",presto:"",trident:"",status:""},{gecko:"-moz-text-decoration-style",webkit:"",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-text-decorations-in-effect",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-text-emphasis",presto:"",trident:"",status:""},{gecko:"",webkit:"-epub-text-emphasis = -webkit-text-emphasis",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-text-emphasis-color",presto:"",trident:"",status:""},{gecko:"",webkit:"-epub-text-emphasis-color = -webkit-text-emphasis-color",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-text-emphasis-position",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-text-emphasis-style",presto:"",trident:"",status:""},{gecko:"",webkit:"-epub-text-emphasis-style = -webkit-text-emphasis-style",presto:"",trident:"",status:""},{gecko:"",webkit:"-webkit-text-fill-color",presto:"",trident:"",status:"P"},{gecko:"",webkit:"",presto:"",trident:"-ms-text-justify",status:"WD"},{gecko:"",webkit:"",presto:"",trident:"-ms-text-kashida-space",status:"P"},{gecko:"",webkit:"-webkit-text-orientation",presto:"",trident:"",status:""},{gecko:"",webkit:"-epub-text-orientation = -webkit-text-orientation",presto:"",trident:"",status:""},{gecko:"",webkit:"text-overflow",presto:"text-overflow",trident:"-ms-text-overflow",status:"WD"},{gecko:"",webkit:"-webkit-text-security",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-webkit-text-size-adjust",presto:"",trident:"-ms-text-size-adjust",status:""},{gecko:"",webkit:"-webkit-text-stroke",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-webkit-text-stroke-color",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-webkit-text-stroke-width",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-epub-text-transform = text-transform",presto:"",trident:"",status:""},{gecko:"",webkit:"",presto:"",trident:"-ms-text-underline-position",status:"P"},{gecko:"",webkit:"-webkit-touch-callout",presto:"",trident:"",status:"P"},{gecko:"-moz-transform",webkit:"-webkit-transform",presto:"-o-transform",trident:"-ms-transform",status:"WD"},{gecko:"-moz-transform-origin",webkit:"-webkit-transform-origin",presto:"-o-transform-origin",trident:"-ms-transform-origin",status:"WD"},{gecko:"",webkit:"-webkit-transform-origin-x",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-webkit-transform-origin-y",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-webkit-transform-origin-z",presto:"",trident:"",status:"P"},{gecko:"",webkit:"-webkit-transform-style",presto:"",trident:"",status:"WD"},{gecko:"-moz-transition",webkit:"-webkit-transition",presto:"-o-transition",trident:"",status:"WD"},{gecko:"-moz-transition-delay",webkit:"-webkit-transition-delay",presto:"-o-transition-delay",trident:"",status:"WD"},{gecko:"-moz-transition-duration",webkit:"-webkit-transition-duration",presto:"-o-transition-duration",trident:"",status:"WD"},{gecko:"-moz-transition-property",webkit:"-webkit-transition-property",presto:"-o-transition-property",trident:"",status:"WD"},{gecko:"-moz-transition-timing-function",webkit:"-webkit-transition-timing-function",presto:"-o-transition-timing-function",trident:"",status:"WD"},{gecko:"",webkit:"-webkit-user-drag",presto:"",trident:"",status:"P"},{gecko:"-moz-user-focus",webkit:"",presto:"",trident:"",status:"P"},{gecko:"-moz-user-input",webkit:"",presto:"",trident:"",status:"P"},{gecko:"-moz-user-modify",webkit:"-webkit-user-modify",presto:"",trident:"",status:"P"},{gecko:"-moz-user-select",webkit:"-webkit-user-select",presto:"",trident:"",status:"P"},{gecko:"",webkit:"",presto:"-xv-voice-balance",trident:"",status:""},{gecko:"",webkit:"",presto:"-xv-voice-duration",trident:"",status:""},{gecko:"",webkit:"",presto:"-xv-voice-pitch",trident:"",status:""},{gecko:"",webkit:"",presto:"-xv-voice-pitch-range",trident:"",status:""},{gecko:"",webkit:"",presto:"-xv-voice-rate",trident:"",status:""},{gecko:"",webkit:"",presto:"-xv-voice-stress",trident:"",status:""},{gecko:"",webkit:"",presto:"-xv-voice-volume",trident:"",status:""},{gecko:"-moz-window-shadow",webkit:"",presto:"",trident:"",status:"P"},{gecko:"",webkit:"word-break",presto:"",trident:"-ms-word-break",status:"WD"},{gecko:"",webkit:"-epub-word-break = word-break",presto:"",trident:"",status:""},{gecko:"word-wrap",webkit:"word-wrap",presto:"word-wrap",trident:"-ms-word-wrap",status:"WD"},{gecko:"",webkit:"-webkit-writing-mode",presto:"writing-mode",trident:"-ms-writing-mode",status:"ED"},{gecko:"",webkit:"-epub-writing-mode = -webkit-writing-mode",presto:"",trident:"",status:""},{gecko:"",webkit:"zoom",presto:"",trident:"-ms-zoom",status:""}]},kCSS_PREFIXED_VALUE=[{gecko:"-moz-box",webkit:"-moz-box",presto:"",trident:"",generic:"box"}];var CssInspector={mVENDOR_PREFIXES:null,kEXPORTS_FOR_GECKO:!0,kEXPORTS_FOR_WEBKIT:!0,kEXPORTS_FOR_PRESTO:!0,kEXPORTS_FOR_TRIDENT:!0,cleanPrefixes:function(){this.mVENDOR_PREFIXES=null},prefixesForProperty:function(e){if(!this.mVENDOR_PREFIXES){this.mVENDOR_PREFIXES={};for(var t=0;t<kCSS_VENDOR_PREFIXES.properties.length;t++){var n=kCSS_VENDOR_PREFIXES.properties[t];if(n.gecko&&(n.webkit||n.presto||n.trident)){var r={};this.kEXPORTS_FOR_GECKO&&(r[n.gecko]=!0),this.kEXPORTS_FOR_WEBKIT&&n.webkit&&(r[n.webkit]=!0),this.kEXPORTS_FOR_PRESTO&&n.presto&&(r[n.presto]=!0),this.kEXPORTS_FOR_TRIDENT&&n.trident&&(r[n.trident]=!0),this.mVENDOR_PREFIXES[n.gecko]=[];for(var i in r)this.mVENDOR_PREFIXES[n.gecko].push(i)}}}return e in this.mVENDOR_PREFIXES?this.mVENDOR_PREFIXES[e].sort():null},parseColorStop:function(e,t){var n=e.parseColor(t),r="";if(!n)return null;t=e.getToken(!0,!0);if(t.isPercentage()||t.isDimensionOfUnit("cm")||t.isDimensionOfUnit("mm")||t.isDimensionOfUnit("in")||t.isDimensionOfUnit("pc")||t.isDimensionOfUnit("px")||t.isDimensionOfUnit("em")||t.isDimensionOfUnit("ex")||t.isDimensionOfUnit("pt"))r=t.value,t=e.getToken(!0,!0);return{color:n,position:r}},parseGradient:function(e,t){var n=!1,r={isRepeating:!1};if(t.isNotNull())if(t.isFunction("-moz-linear-gradient(")||t.isFunction("-moz-radial-gradient(")||t.isFunction("-moz-repeating-linear-gradient(")||t.isFunction("-moz-repeating-radial-gradient(")){if(t.isFunction("-moz-radial-gradient(")||t.isFunction("-moz-repeating-radial-gradient("))r.isRadial=!0;if(t.isFunction("-moz-repeating-linear-gradient(")||t.isFunction("-moz-repeating-radial-gradient("))r.isRepeating=!0;t=e.getToken(!0,!0);var i=!1,s=!1,o=!1;t.isAngle()&&(r.angle=t.value,i=!0,o=!0,t=e.getToken(!0,!0));if(t.isLength()||t.isIdent("top")||t.isIdent("center")||t.isIdent("bottom")||t.isIdent("left")||t.isIdent("right")){i=!0;if(t.isLength()||t.isIdent("left")||t.isIdent("right"))s=!0;r.position=t.value,t=e.getToken(!0,!0)}if(i){if(!o&&t.isAngle())r.angle=t.value,o=!0,t=e.getToken(!0,!0);else if(t.isLength()||s&&(t.isIdent("top")||t.isIdent("center")||t.isIdent("bottom"))||!s&&(t.isLength()||t.isIdent("top")||t.isIdent("center")||t.isIdent("bottom")||t.isIdent("left")||t.isIdent("right")))r.position="position"in r?r.position+" ":"",r.position+=t.value,t=e.getToken(!0,!0);!o&&t.isAngle()&&(r.angle=t.value,o=!0,t=e.getToken(!0,!0));if(!t.isSymbol(","))return null;t=e.getToken(!0,!0)}if(r.isRadial){if(t.isIdent("circle")||t.isIdent("ellipse"))r.shape=t.value,t=e.getToken(!0,!0);if(t.isIdent("closest-side")||t.isIdent("closest-corner")||t.isIdent("farthest-side")||t.isIdent("farthest-corner")||t.isIdent("contain")||t.isIdent("cover"))r.size=t.value,t=e.getToken(!0,!0);!("shape"in r)&&(t.isIdent("circle")||t.isIdent("ellipse"))&&(r.shape=t.value,t=e.getToken(!0,!0));if(("shape"in r||"size"in r)&&!t.isSymbol(","))return null;if("shape"in r||"size"in r)t=e.getToken(!0,!0)}var u=this.parseColorStop(e,t);if(!u)return null;t=e.currentToken();if(!t.isSymbol(","))return null;t=e.getToken(!0,!0);var a=this.parseColorStop(e,t);if(!a)return null;t=e.currentToken(),t.isSymbol(",")&&(t=e.getToken(!0,!0)),r.stops=[u,a];while(!t.isSymbol(")")){var f=this.parseColorStop(e,t);if(!f)return null;t=e.currentToken();if(!t.isSymbol(")")&&!t.isSymbol(","))return null;t.isSymbol(",")&&(t=e.getToken(!0,!0)),r.stops.push(f)}return r}return null},parseBoxShadows:function(e){var t=new CSSParser;t._init(),t.mPreserveWS=!1,t.mPreserveComments=!1,t.mPreservedTokens=[],t.mScanner.init(e);var n=[],r=t.getToken(!0,!0),i="",s="0px",o="0px",u="0px",a="0px",f=!1;while(r.isNotNull())if(r.isIdent("none"))n.push({none:!0}),r=t.getToken(!0,!0);else{r.isIdent("inset")&&(f=!0,r=t.getToken(!0,!0));if(!(r.isPercentage()||r.isDimensionOfUnit("cm")||r.isDimensionOfUnit("mm")||r.isDimensionOfUnit("in")||r.isDimensionOfUnit("pc")||r.isDimensionOfUnit("px")||r.isDimensionOfUnit("em")||r.isDimensionOfUnit("ex")||r.isDimensionOfUnit("pt")))return[];var o=r.value;r=t.getToken(!0,!0),!f&&r.isIdent("inset")&&(f=!0,r=t.getToken(!0,!0));if(!(r.isPercentage()||r.isDimensionOfUnit("cm")||r.isDimensionOfUnit("mm")||r.isDimensionOfUnit("in")||r.isDimensionOfUnit("pc")||r.isDimensionOfUnit("px")||r.isDimensionOfUnit("em")||r.isDimensionOfUnit("ex")||r.isDimensionOfUnit("pt")))return[];var o=r.value;r=t.getToken(!0,!0),!f&&r.isIdent("inset")&&(f=!0,r=t.getToken(!0,!0));if(r.isPercentage()||r.isDimensionOfUnit("cm")||r.isDimensionOfUnit("mm")||r.isDimensionOfUnit("in")||r.isDimensionOfUnit("pc")||r.isDimensionOfUnit("px")||r.isDimensionOfUnit("em")||r.isDimensionOfUnit("ex")||r.isDimensionOfUnit("pt")){var s=r.value;r=t.getToken(!0,!0)}!f&&r.isIdent("inset")&&(f=!0,r=t.getToken(!0,!0));if(r.isPercentage()||r.isDimensionOfUnit("cm")||r.isDimensionOfUnit("mm")||r.isDimensionOfUnit("in")||r.isDimensionOfUnit("pc")||r.isDimensionOfUnit("px")||r.isDimensionOfUnit("em")||r.isDimensionOfUnit("ex")||r.isDimensionOfUnit("pt")){var a=r.value;r=t.getToken(!0,!0)}!f&&r.isIdent("inset")&&(f=!0,r=t.getToken(!0,!0));if(r.isFunction("rgb(")||r.isFunction("rgba(")||r.isFunction("hsl(")||r.isFunction("hsla(")||r.isSymbol("#")||r.isIdent()){var i=t.parseColor(r);r=t.getToken(!0,!0)}!f&&r.isIdent("inset")&&(f=!0,r=t.getToken(!0,!0)),n.push({none:!1,color:i,offsetX:o,offsetY:u,blurRadius:s,spreadRadius:a});if(!r.isSymbol(","))return r.isNotNull()?[]:n;f=!1,i="",s="0px",a="0px",o="0px",u="0px",r=t.getToken(!0,!0)}return n},parseTextShadows:function(e){var t=new CSSParser;t._init(),t.mPreserveWS=!1,t.mPreserveComments=!1,t.mPreservedTokens=[],t.mScanner.init(e);var n=[],r=t.getToken(!0,!0),i="",s="0px",o="0px",u="0px";while(r.isNotNull())if(r.isIdent("none"))n.push({none:!0}),r=t.getToken(!0,!0);else{if(r.isFunction("rgb(")||r.isFunction("rgba(")||r.isFunction("hsl(")||r.isFunction("hsla(")||r.isSymbol("#")||r.isIdent()){var i=t.parseColor(r);r=t.getToken(!0,!0)}if(!(r.isPercentage()||r.isDimensionOfUnit("cm")||r.isDimensionOfUnit("mm")||r.isDimensionOfUnit("in")||r.isDimensionOfUnit("pc")||r.isDimensionOfUnit("px")||r.isDimensionOfUnit("em")||r.isDimensionOfUnit("ex")||r.isDimensionOfUnit("pt")))return[];var o=r.value;r=t.getToken(!0,!0);if(!(r.isPercentage()||r.isDimensionOfUnit("cm")||r.isDimensionOfUnit("mm")||r.isDimensionOfUnit("in")||r.isDimensionOfUnit("pc")||r.isDimensionOfUnit("px")||r.isDimensionOfUnit("em")||r.isDimensionOfUnit("ex")||r.isDimensionOfUnit("pt")))return[];var u=r.value;r=t.getToken(!0,!0);if(r.isPercentage()||r.isDimensionOfUnit("cm")||r.isDimensionOfUnit("mm")||r.isDimensionOfUnit("in")||r.isDimensionOfUnit("pc")||r.isDimensionOfUnit("px")||r.isDimensionOfUnit("em")||r.isDimensionOfUnit("ex")||r.isDimensionOfUnit("pt")){var s=r.value;r=t.getToken(!0,!0)}if(!i&&(r.isFunction("rgb(")||r.isFunction("rgba(")||r.isFunction("hsl(")||r.isFunction("hsla(")||r.isSymbol("#")||r.isIdent())){var i=t.parseColor(r);r=t.getToken(!0,!0)}n.push({none:!1,color:i,offsetX:o,offsetY:u,blurRadius:s});if(!r.isSymbol(","))return r.isNotNull()?[]:n;i="",s="0px",o="0px",u="0px",r=t.getToken(!0,!0)}return n},parseBackgroundImages:function(e){var t=new CSSParser;t._init(),t.mPreserveWS=!1,t.mPreserveComments=!1,t.mPreservedTokens=[],t.mScanner.init(e);var n=[],r=t.getToken(!0,!0);while(r.isNotNull()){if(r.isFunction("url(")){r=t.getToken(!0,!0);var i=t.parseURL(r);n.push({type:"image",value:"url("+i}),r=t.getToken(!0,!0)}else{if(!(r.isFunction("-moz-linear-gradient(")||r.isFunction("-moz-radial-gradient(")||r.isFunction("-moz-repeating-linear-gradient(")||r.isFunction("-moz-repeating-radial-gradient(")))return null;var s=this.parseGradient(t,r);n.push({type:s.isRadial?"radial-gradient":"linear-gradient",value:s}),r=t.getToken(!0,!0)}if(r.isSymbol(",")){r=t.getToken(!0,!0);if(!r.isNotNull())return null}}return n},serializeGradient:function(e){var t=e.isRadial?e.isRepeating?"-moz-repeating-radial-gradient(":"-moz-radial-gradient(":e.isRepeating?"-moz-repeating-linear-gradient(":"-moz-linear-gradient(";if(e.angle||e.position)t+=(e.angle?e.angle+" ":"")+(e.position?e.position:"")+", ";e.isRadial&&(e.shape||e.size)&&(t+=(e.shape?e.shape:"")+" "+(e.size?e.size:"")+", ");for(var n=0;n<e.stops.length;n++){var r=e.stops[n];t+=r.color+(r.position?" "+r.position:""),n!=e.stops.length-1&&(t+=", ")}return t+=")",t},parseBorderImage:function(e){var t=new CSSParser;t._init(),t.mPreserveWS=!1,t.mPreserveComments=!1,t.mPreservedTokens=[],t.mScanner.init(e);var n={url:"",offsets:[],widths:[],sizes:[]},r=t.getToken(!0,!0);if(!r.isFunction("url("))return null;r=t.getToken(!0,!0);var i=t.parseURL(r);if(!i)return null;n.url=i.substr(0,i.length-1).trim();if(n.url[0]=='"'&&n.url[n.url.length-1]=='"'||n.url[0]=="'"&&n.url[n.url.length-1]=="'")n.url=n.url.substr(1,n.url.length-2);r=t.getToken(!0,!0);if(!r.isNumber()&&!r.isPercentage())return null;n.offsets.push(r.value);var s;for(s=0;s<3;s++){r=t.getToken(!0,!0);if(!r.isNumber()&&!r.isPercentage())break;n.offsets.push(r.value)}s==3&&(r=t.getToken(!0,!0));if(r.isSymbol("/")){r=t.getToken(!0,!0);if(!(r.isDimension()||r.isNumber("0")||r.isIdent()&&r.value in t.kBORDER_WIDTH_NAMES))return null;n.widths.push(r.value);for(var s=0;s<3;s++){r=t.getToken(!0,!0);if(!(r.isDimension()||r.isNumber("0")||r.isIdent()&&r.value in t.kBORDER_WIDTH_NAMES))break;n.widths.push(r.value)}s==3&&(r=t.getToken(!0,!0))}for(var s=0;s<2;s++){if(!(r.isIdent("stretch")||r.isIdent("repeat")||r.isIdent("round")))return r.isNotNull()?null:n;n.sizes.push(r.value),r=t.getToken(!0,!0)}return r.isNotNull()?null:n},parseMediaQuery:function(e){const t={width:!0,"min-width":!0,"max-width":!0,height:!0,"min-height":!0,"max-height":!0,"device-width":!0,"min-device-width":!0,"max-device-width":!0,"device-height":!0,"min-device-height":!0,"max-device-height":!0,orientation:!0,"aspect-ratio":!0,"min-aspect-ratio":!0,"max-aspect-ratio":!0,"device-aspect-ratio":!0,"min-device-aspect-ratio":!0,"max-device-aspect-ratio":!0,color:!0,"min-color":!0,"max-color":!0,"color-index":!0,"min-color-index":!0,"max-color-index":!0,monochrome:!0,"min-monochrome":!0,"max-monochrome":!0,resolution:!0,"min-resolution":!0,"max-resolution":!0,scan:!0,grid:!0};var n=new CSSParser;n._init(),n.mPreserveWS=!1,n.mPreserveComments=!1,n.mPreservedTokens=[],n.mScanner.init(e);var r={amplifier:"",medium:"",constraints:[]},i=n.getToken(!0,!0);if(i.isIdent("all")||i.isIdent("aural")||i.isIdent("braille")||i.isIdent("handheld")||i.isIdent("print")||i.isIdent("projection")||i.isIdent("screen")||i.isIdent("tty")||i.isIdent("tv"))r.medium=i.value,i=n.getToken(!0,!0);else if(i.isIdent("not")||i.isIdent("only")){r.amplifier=i.value,i=n.getToken(!0,!0);if(!(i.isIdent("all")||i.isIdent("aural")||i.isIdent("braille")||i.isIdent("handheld")||i.isIdent("print")||i.isIdent("projection")||i.isIdent("screen")||i.isIdent("tty")||i.isIdent("tv")))return null;r.medium=i.value,i=n.getToken(!0,!0)}if(r.medium){if(!i.isNotNull())return r;if(!i.isIdent("and"))return null;i=n.getToken(!0,!0)}while(i.isSymbol("(")){i=n.getToken(!0,!0);if(!(i.isIdent()&&i.value in t))return null;var s=i.value;i=n.getToken(!0,!0);if(i.isSymbol(":")){i=n.getToken(!0,!0);var o=[];while(!i.isSymbol(")"))o.push(i.value),i=n.getToken(!0,!0);if(!i.isSymbol(")"))return null;r.constraints.push({constraint:s,value:o}),i=n.getToken(!0,!0);if(!i.isNotNull())return r;if(!i.isIdent("and"))return null;i=n.getToken(!0,!0)}else{if(!i.isSymbol(")"))return null;r.constraints.push({constraint:s,value:null}),i=n.getToken(!0,!0);if(!i.isNotNull())return r;if(!i.isIdent("and"))return null;i=n.getToken(!0,!0)}}return r}},CSS_ESCAPE="\\",IS_HEX_DIGIT=1,START_IDENT=2,IS_IDENT=4,IS_WHITESPACE=8,W=IS_WHITESPACE,I=IS_IDENT,S=START_IDENT,SI=IS_IDENT|START_IDENT,XI=IS_IDENT|IS_HEX_DIGIT,XSI=IS_IDENT|START_IDENT|IS_HEX_DIGIT;CSSScanner.prototype={kLexTable:[0,0,0,0,0,0,0,0,0,W,W,0,W,W,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,W,0,0,0,0,0,0,0,0,0,0,0,0,I,0,0,XI,XI,XI,XI,XI,XI,XI,XI,XI,XI,0,0,0,0,0,0,0,XSI,XSI,XSI,XSI,XSI,XSI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,0,S,0,0,SI,0,XSI,XSI,XSI,XSI,XSI,XSI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI,SI],kHexValues:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,b:11,c:12,d:13,e:14,f:15},mString:"",mPos:0,mPreservedPos:[],init:function(e){this.mString=e,this.mPos=0,this.mPreservedPos=[]},getCurrentPos:function(){return this.mPos},getAlreadyScanned:function(){return this.mString.substr(0,this.mPos)},preserveState:function(){this.mPreservedPos.push(this.mPos)},restoreState:function(){this.mPreservedPos.length&&(this.mPos=this.mPreservedPos.pop())},forgetState:function(){this.mPreservedPos.length&&this.mPreservedPos.pop()},read:function(){return this.mPos<this.mString.length?this.mString.charAt(this.mPos++):-1},peek:function(){return this.mPos<this.mString.length?this.mString.charAt(this.mPos):-1},isHexDigit:function(e){var t=e.charCodeAt(0);return t<256&&(this.kLexTable[t]&IS_HEX_DIGIT)!=0},isIdentStart:function(e){var t=e.charCodeAt(0);return t>=256||(this.kLexTable[t]&START_IDENT)!=0},startsWithIdent:function(e,t){var n=e.charCodeAt(0);return this.isIdentStart(e)||e=="-"&&this.isIdentStart(t)},isIdent:function(e){var t=e.charCodeAt(0);return t>=256||(this.kLexTable[t]&IS_IDENT)!=0},pushback:function(){this.mPos--},nextHexValue:function(){var e=this.read();if(e==-1||!this.isHexDigit(e))return new jscsspToken(jscsspToken.NULL_TYPE,null);var t=e;e=this.read();while(e!=-1&&this.isHexDigit(e))t+=e,e=this.read();return e!=-1&&this.pushback(),new jscsspToken(jscsspToken.HEX_TYPE,t)},gatherEscape:function(){var e=this.peek();if(e==-1)return"";if(this.isHexDigit(e)){var t=0;for(var n=0;n<6;n++){e=this.read();if(!this.isHexDigit(e)){if(!this.isHexDigit(e)&&!this.isWhiteSpace(e)){this.pushback();break}break}t=t*16+this.kHexValues[e.toLowerCase()]}return n==6&&(e=this.peek(),this.isWhiteSpace(e)&&this.read()),String.fromCharCode(t)}return e=this.read(),e!="\n"?e:""},gatherIdent:function(e){var t="";e==CSS_ESCAPE?t+=this.gatherEscape():t+=e,e=this.read();while(e!=-1&&(this.isIdent(e)||e==CSS_ESCAPE))e==CSS_ESCAPE?t+=this.gatherEscape():t+=e,e=this.read();return e!=-1&&this.pushback(),t},parseIdent:function(e){var t=this.gatherIdent(e),n=this.peek();return n=="("?(t+=this.read(),new jscsspToken(jscsspToken.FUNCTION_TYPE,t)):new jscsspToken(jscsspToken.IDENT_TYPE,t)},isDigit:function(e){return e>="0"&&e<="9"},parseComment:function(e){var t=e;while((e=this.read())!=-1){t+=e;if(e=="*"){e=this.read();if(e==-1)break;if(e=="/"){t+=e;break}this.pushback()}}return new jscsspToken(jscsspToken.COMMENT_TYPE,t)},parseNumber:function(e){var t=e,n=!1;while((e=this.read())!=-1)if(e=="."){if(n)break;t+=e,n=!0}else{if(!this.isDigit(e))break;t+=e}if(e!=-1&&this.startsWithIdent(e,this.peek())){var r=this.gatherIdent(e);return t+=r,new jscsspToken(jscsspToken.DIMENSION_TYPE,t,r)}return e=="%"?(t+="%",new jscsspToken(jscsspToken.PERCENTAGE_TYPE,t)):(e!=-1&&this.pushback(),new jscsspToken(jscsspToken.NUMBER_TYPE,t))},parseString:function(e){var t=e,n=e,r;while((r=this.read())!=-1){if(r==e&&n!=CSS_ESCAPE){t+=r;break}if(r==CSS_ESCAPE){r=this.peek();if(r==-1)break;r=="\n"||r=="\r"||r=="\f"?(d=r,r=this.read(),d=="\r"&&(r=this.peek(),r=="\n"&&(r=this.read()))):(t+=this.gatherEscape(),r=this.peek())}else{if(r=="\n"||r=="\r"||r=="\f")break;t+=r}n=r}return new jscsspToken(jscsspToken.STRING_TYPE,t)},isWhiteSpace:function(e){var t=e.charCodeAt(0);return t<256&&(this.kLexTable[t]&IS_WHITESPACE)!=0},eatWhiteSpace:function(e){var t=e;while((e=this.read())!=-1){if(!this.isWhiteSpace(e))break;t+=e}return e!=-1&&this.pushback(),t},parseAtKeyword:function(e){return new jscsspToken(jscsspToken.ATRULE_TYPE,this.gatherIdent(e))},nextToken:function(){var e=this.read();if(e==-1)return new jscsspToken(jscsspToken.NULL_TYPE,null);if(this.startsWithIdent(e,this.peek()))return this.parseIdent(e);if(e=="@"){var t=this.read();if(t!=-1){var n=this.peek();this.pushback();if(this.startsWithIdent(t,n))return this.parseAtKeyword(e)}}if(e=="."||e=="+"||e=="-"){var t=this.peek();if(this.isDigit(t))return this.parseNumber(e);if(t=="."&&e!="."){firstChar=this.read();var r=this.peek();this.pushback();if(this.isDigit(r))return this.parseNumber(e)}}if(this.isDigit(e))return this.parseNumber(e);if(e=="'"||e=='"')return this.parseString(e);if(this.isWhiteSpace(e)){var i=this.eatWhiteSpace(e);return new jscsspToken(jscsspToken.WHITESPACE_TYPE,i)}if(e=="|"||e=="~"||e=="^"||e=="$"||e=="*"){var t=this.read();if(t=="=")switch(e){case"~":return new jscsspToken(jscsspToken.INCLUDES_TYPE,"~=");case"|":return new jscsspToken(jscsspToken.DASHMATCH_TYPE,"|=");case"^":return new jscsspToken(jscsspToken.BEGINSMATCH_TYPE,"^=");case"$":return new jscsspToken(jscsspToken.ENDSMATCH_TYPE,"$=");case"*":return new jscsspToken(jscsspToken.CONTAINSMATCH_TYPE,"*=");default:}else t!=-1&&this.pushback()}return e=="/"&&this.peek()=="*"?this.parseComment(e):new jscsspToken(jscsspToken.SYMBOL_TYPE,e)}},CSSParser.prototype={_init:function(){this.mToken=null,this.mLookAhead=null},kINHERIT:"inherit",kBORDER_WIDTH_NAMES:{thin:!0,medium:!0,thick:!0},kBORDER_STYLE_NAMES:{none:!0,hidden:!0,dotted:!0,dashed:!0,solid:!0,"double":!0,groove:!0,ridge:!0,inset:!0,outset:!0},kCOLOR_NAMES:{transparent:!0,black:!0,silver:!0,gray:!0,white:!0,maroon:!0,red:!0,purple:!0,fuchsia:!0,green:!0,lime:!0,olive:!0,yellow:!0,navy:!0,blue:!0,teal:!0,aqua:!0,aliceblue:!0,antiquewhite:!0,aqua:!0,aquamarine:!0,azure:!0,beige:!0,bisque:!0,black:!0,blanchedalmond:!0,blue:!0,blueviolet:!0,brown:!0,burlywood:!0,cadetblue:!0,chartreuse:!0,chocolate:!0,coral:!0,cornflowerblue:!0,cornsilk:!0,crimson:!0,cyan:!0,darkblue:!0,darkcyan:!0,darkgoldenrod:!0,darkgray:!0,darkgreen:!0,darkgrey:!0,darkkhaki:!0,darkmagenta:!0,darkolivegreen:!0,darkorange:!0,darkorchid:!0,darkred:!0,darksalmon:!0,darkseagreen:!0,darkslateblue:!0,darkslategray:!0,darkslategrey:!0,darkturquoise:!0,darkviolet:!0,deeppink:!0,deepskyblue:!0,dimgray:!0,dimgrey:!0,dodgerblue:!0,firebrick:!0,floralwhite:!0,forestgreen:!0,fuchsia:!0,gainsboro:!0,ghostwhite:!0,gold:!0,goldenrod:!0,gray:!0,green:!0,greenyellow:!0,grey:!0,honeydew:!0,hotpink:!0,indianred:!0,indigo:!0,ivory:!0,khaki:!0,lavender:!0,lavenderblush:!0,lawngreen:!0,lemonchiffon:!0,lightblue:!0,lightcoral:!0,lightcyan:!0,lightgoldenrodyellow:!0,lightgray:!0,lightgreen:!0,lightgrey:!0,lightpink:!0,lightsalmon:!0,lightseagreen:!0,lightskyblue:!0,lightslategray:!0,lightslategrey:!0,lightsteelblue:!0,lightyellow:!0,lime:!0,limegreen:!0,linen:!0,magenta:!0,maroon:!0,mediumaquamarine:!0,mediumblue:!0,mediumorchid:!0,mediumpurple:!0,mediumseagreen:!0,mediumslateblue:!0,mediumspringgreen:!0,mediumturquoise:!0,mediumvioletred:!0,midnightblue:!0,mintcream:!0,mistyrose:!0,moccasin:!0,navajowhite:!0,navy:!0,oldlace:!0,olive:!0,olivedrab:!0,orange:!0,orangered:!0,orchid:!0,palegoldenrod:!0,palegreen:!0,paleturquoise:!0,palevioletred:!0,papayawhip:!0,peachpuff:!0,peru:!0,pink:!0,plum:!0,powderblue:!0,purple:!0,red:!0,rosybrown:!0,royalblue:!0,saddlebrown:!0,salmon:!0,sandybrown:!0,seagreen:!0,seashell:!0,sienna:!0,silver:!0,skyblue:!0,slateblue:!0,slategray:!0,slategrey:!0,snow:!0,springgreen:!0,steelblue:!0,tan:!0,teal:!0,thistle:!0,tomato:!0,turquoise:!0,violet:!0,wheat:!0,white:!0,whitesmoke:!0,yellow:!0,yellowgreen:!0,activeborder:!0,activecaption:!0,appworkspace:!0,background:!0,buttonface:!0,buttonhighlight:!0,buttonshadow:!0,buttontext:!0,captiontext:!0,graytext:!0,highlight:!0,highlighttext:!0,inactiveborder:!0,inactivecaption:!0,inactivecaptiontext:!0,infobackground:!0,infotext:!0,menu:!0,menutext:!0,scrollbar:!0,threeddarkshadow:!0,threedface:!0,threedhighlight:!0,threedlightshadow:!0,threedshadow:!0,window:!0,windowframe:!0,windowtext:!0},kLIST_STYLE_TYPE_NAMES:{decimal:!0,"decimal-leading-zero":!0,"lower-roman":!0,"upper-roman":!0,georgian:!0,armenian:!0,"lower-latin":!0,"lower-alpha":!0,"upper-latin":!0,"upper-alpha":!0,"lower-greek":!0,disc:!0,circle:!0,square:!0,none:!0,box:!0,check:!0,diamond:!0,hyphen:!0,"lower-armenian":!0,"cjk-ideographic":!0,"ethiopic-numeric":!0,hebrew:!0,"japanese-formal":!0,"japanese-informal":!0,"simp-chinese-formal":!0,"simp-chinese-informal":!0,syriac:!0,tamil:!0,"trad-chinese-formal":!0,"trad-chinese-informal":!0,"upper-armenian":!0,"arabic-indic":!0,binary:!0,bengali:!0,cambodian:!0,khmer:!0,devanagari:!0,gujarati:!0,gurmukhi:!0,kannada:!0,"lower-hexadecimal":!0,lao:!0,malayalam:!0,mongolian:!0,myanmar:!0,octal:!0,oriya:!0,persian:!0,urdu:!0,telugu:!0,tibetan:!0,"upper-hexadecimal":!0,afar:!0,"ethiopic-halehame-aa-et":!0,"ethiopic-halehame-am-et":!0,"amharic-abegede":!0,"ehiopic-abegede-am-et":!0,"cjk-earthly-branch":!0,"cjk-heavenly-stem":!0,ethiopic:!0,"ethiopic-abegede":!0,"ethiopic-abegede-gez":!0,"hangul-consonant":!0,hangul:!0,"hiragana-iroha":!0,hiragana:!0,"katakana-iroha":!0,katakana:!0,"lower-norwegian":!0,oromo:!0,"ethiopic-halehame-om-et":!0,sidama:!0,"ethiopic-halehame-sid-et":!0,somali:!0,"ethiopic-halehame-so-et":!0,tigre:!0,"ethiopic-halehame-tig":!0,"tigrinya-er-abegede":!0,"ethiopic-abegede-ti-er":!0,"tigrinya-et":!0,"ethiopic-halehame-ti-et":!0,"upper-greek":!0,asterisks:!0,footnotes:!0,"circled-decimal":!0,"circled-lower-latin":!0,"circled-upper-latin":!0,"dotted-decimal":!0,"double-circled-decimal":!0,"filled-circled-decimal":!0,"parenthesised-decimal":!0,"parenthesised-lower-latin":!0},reportError:function(e){this.mError=e},consumeError:function(){var e=this.mError;return this.mError=null,e},currentToken:function(){return this.mToken},getHexValue:function(){return this.mToken=this.mScanner.nextHexValue(),this.mToken},getToken:function(e,t){if(this.mLookAhead)return this.mToken=this.mLookAhead,this.mLookAhead=null,this.mToken;this.mToken=this.mScanner.nextToken();while(this.mToken&&(e&&this.mToken.isWhiteSpace()||t&&this.mToken.isComment()))this.mToken=this.mScanner.nextToken();return this.mToken},lookAhead:function(e,t){var n=this.mToken;this.mScanner.preserveState();var r=this.getToken(e,t);return this.mScanner.restoreState(),this.mToken=n,r},ungetToken:function(){this.mLookAhead=this.mToken},addUnknownAtRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=[],i=this.getToken(!1,!1);while(i.isNotNull()){t+=i.value;if(i.isSymbol(";")&&!r.length)break;if(i.isSymbol("{")||i.isSymbol("(")||i.isSymbol("[")||i.type=="function")r.push(i.isFunction()?"(":i.value);else if(i.isSymbol("}")||i.isSymbol(")")||i.isSymbol("]"))if(r.length){var s=r[r.length-1];if(i.isSymbol("}")&&s=="{"||i.isSymbol(")")&&s=="("||i.isSymbol("]")&&s=="["){r.pop();if(!r.length&&i.isSymbol("}"))break}}i=this.getToken(!1,!1)}this.addUnknownRule(e,t,n)},addUnknownRule:function(e,t,n){var r=this.consumeError(),i=new jscsspErrorRule(r);i.currentLine=n,i.parsedCssText=t,i.parentStyleSheet=e,e.cssRules.push(i)},addWhitespace:function(e,t){var n=new jscsspWhitespace;n.parsedCssText=t,n.parentStyleSheet=e,e.cssRules.push(n)},addComment:function(e,t){var n=new jscsspComment;n.parsedCssText=t,n.parentStyleSheet=e,e.cssRules.push(n)},parseCharsetRule:function(e,t){var n=e.value,r=this.getToken(!1,!1);n+=r.value;if(r.isWhiteSpace(" ")){r=this.getToken(!1,!1),n+=r.value;if(r.isString()){var i=r.value;r=this.getToken(!1,!1),n+=r.value;if(r.isSymbol(";")){var s=new jscsspCharsetRule;return s.encoding=i,s.parsedCssText=n,s.parentStyleSheet=t,t.cssRules.push(s),!0}this.reportError(kCHARSET_RULE_MISSING_SEMICOLON)}else this.reportError(kCHARSET_RULE_CHARSET_IS_STRING)}else this.reportError(kCHARSET_RULE_MISSING_WS);return this.addUnknownAtRule(t,n),!1},parseImportRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=e.value;this.preserveState();var i=this.getToken(!0,!0),s=[],o="";if(i.isString())o=i.value,r+=" "+o;else if(i.isFunction("url(")){i=this.getToken(!0,!0);var u=this.parseURL(i);u&&(o="url("+u,r+=" "+o)}else this.reportError(kIMPORT_RULE_MISSING_URL);if(o){i=this.getToken(!0,!0);while(i.isIdent()){r+=" "+i.value,s.push(i.value),i=this.getToken(!0,!0);if(!i)break;if(!i.isSymbol(",")){if(i.isSymbol(";"))break;break}r+=",",i=this.getToken(!0,!0)}s.length||s.push("all");if(i.isSymbol(";")){r+=";",this.forgetState();var a=new jscsspImportRule;return a.currentLine=n,a.parsedCssText=r,a.href=o,a.media=s,a.parentStyleSheet=t,t.cssRules.push(a),!0}}return this.restoreState(),this.addUnknownAtRule(t,"@import"),!1},parseVariablesRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=e.value,i=[],s=!1;this.preserveState(),e=this.getToken(!0,!0);var o=[],u=!1;while(e.isNotNull()){if(e.isIdent()){u=!0,r+=" "+e.value,o.push(e.value),e=this.getToken(!0,!0);if(e.isSymbol(","))r+=",";else{if(!e.isSymbol("{")){e.type=jscsspToken.NULL_TYPE;break}this.ungetToken()}}else{if(e.isSymbol("{"))break;if(u){e.type=jscsspToken.NULL_TYPE;break}}e=this.getToken(!0,!0)}if(e.isSymbol("{")){r+=" {",e=this.getToken(!0,!0);for(;;){if(!e.isNotNull()){s=!0;break}if(e.isSymbol("}")){r+="}",s=!0;break}var a=this.parseDeclaration(e,i,!0,!1,t);r+=(a&&i.length?" ":"")+a,e=this.getToken(!0,!1)}}if(s){this.forgetState();var f=new jscsspVariablesRule;return f.currentLine=n,f.parsedCssText=r,f.declarations=i,f.media=o,f.parentStyleSheet=t,t.cssRules.push(f),!0}return this.restoreState(),!1},parseNamespaceRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=e.value,i=!1;this.preserveState();var s=this.getToken(!0,!0);if(s.isNotNull()){var o="",u="";s.isIdent()&&(o=s.value,r+=" "+o,s=this.getToken(!0,!0));if(s){var a=!1;if(s.isString())a=!0,u=s.value,r+=" "+u;else if(s.isFunction("url(")){s=this.getToken(!0,!0);var f=this.parseURL(s);f&&(u+="url("+f,a=!0,r+=" "+f)}}if(a){s=this.getToken(!0,!0);if(s.isSymbol(";")){r+=";",this.forgetState();var l=new jscsspNamespaceRule;return l.currentLine=n,l.parsedCssText=r,l.prefix=o,l.url=u,l.parentStyleSheet=t,t.cssRules.push(l),!0}}}return this.restoreState(),this.addUnknownAtRule(t,"@namespace"),!1},parseFontFaceRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=e.value,i=!1,s=[];this.preserveState();var o=this.getToken(!0,!0);if(o.isNotNull()&&o.isSymbol("{")){r+=" "+o.value;var o=this.getToken(!0,!1);for(;;){if(o.isSymbol("}")){r+="}",i=!0;break}var u=this.parseDeclaration(o,s,!1,!1,t);r+=(u&&s.length?" ":"")+u,o=this.getToken(!0,!1)}}if(i){this.forgetState();var a=new jscsspFontFaceRule;return a.currentLine=n,a.parsedCssText=r,a.descriptors=s,a.parentStyleSheet=t,t.cssRules.push(a),!0}return this.restoreState(),!1},parsePageRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=e.value,i=!1,s=[];this.preserveState();var o=this.getToken(!0,!0),u="";if(o.isSymbol(":")||o.isIdent())o.isSymbol(":")&&(u=":",o=this.getToken(!1,!1)),o.isIdent()&&(u+=o.value,r+=" "+u,o=this.getToken(!0,!0));if(o.isNotNull()&&o.isSymbol("{")){r+=" "+o.value;var o=this.getToken(!0,!1);for(;;){if(o.isSymbol("}")){r+="}",i=!0;break}var a=this.parseDeclaration(o,s,!0,!0,t);r+=(a&&s.length?" ":"")+a,o=this.getToken(!0,!1)}}if(i){this.forgetState();var f=new jscsspPageRule;return f.currentLine=n,f.parsedCssText=r,f.pageSelector=u,f.declarations=s,f.parentStyleSheet=t,t.cssRules.push(f),!0}return this.restoreState(),!1},parseDefaultPropertyValue:function(e,t,n,r,i){var s="",o=[],u=!1,a=[];while(e.isNotNull()){if((e.isSymbol(";")||e.isSymbol("}")||e.isSymbol("!"))&&!o.length){e.isSymbol("}")&&this.ungetToken();break}if(e.isIdent(this.kINHERIT)){if(a.length)return"";s=this.kINHERIT;var f=new jscsspVariable(kJscsspINHERIT_VALUE,i);a.push(f),e=this.getToken(!0,!0);break}if(e.isSymbol("{")||e.isSymbol("(")||e.isSymbol("["))o.push(e.value);else if(e.isSymbol("}")||e.isSymbol("]"))if(o.length){var l=o[o.length-1];(e.isSymbol("}")&&l=="{"||e.isSymbol(")")&&l=="("||e.isSymbol("]")&&l=="[")&&o.pop()}if(e.isFunction())if(e.isFunction("var(")){e=this.getToken(!0,!0);if(!e.isIdent())return"";var c=e.value;e=this.getToken(!0,!0);if(!e.isSymbol(")"))return"";var f=new jscsspVariable(kJscsspVARIABLE_VALUE,i);s+="var("+c+")",f.name=c,a.push(f)}else{var h=e.value;e=this.getToken(!1,!0);var p=this.parseFunctionArgument(e);if(!p)return"";s+=h+p;var f=new jscsspVariable(kJscsspPRIMITIVE_VALUE,i);f.value=h+p,a.push(f)}else if(e.isSymbol("#")){var d=this.parseColor(e);if(!d)return"";s+=d;var f=new jscsspVariable(kJscsspPRIMITIVE_VALUE,i);f.value=d,a.push(f)}else if(!e.isWhiteSpace()&&!e.isSymbol(",")){var f=new jscsspVariable(kJscsspPRIMITIVE_VALUE,i);f.value=e.value,a.push(f),s+=e.value}else s+=e.value;e=this.getToken(!1,!0)}return a.length&&s?(this.forgetState(),t.push(this._createJscsspDeclarationFromValuesArray(r,a,s)),s):""},parseMarginOrPaddingShorthand:function(e,t,n,r){var i=null,s=null,o=null,u=null,a=[];for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!a.length&&e.isIdent(this.kINHERIT)){a.push(e.value),e=this.getToken(!0,!0);break}if(!(e.isDimension()||e.isNumber("0")||e.isPercentage()||e.isIdent("auto")))return"";a.push(e.value),e=this.getToken(!0,!0)}var f=a.length;switch(f){case 1:i=a[0],s=i,o=i,u=i;break;case 2:i=a[0],s=i,o=a[1],u=o;break;case 3:i=a[0],o=a[1],u=o,s=a[2];break;case 4:i=a[0],u=a[1],s=a[2],o=a[3];break;default:return""}return this.forgetState(),t.push(this._createJscsspDeclarationFromValue(r+"-top",i)),t.push(this._createJscsspDeclarationFromValue(r+"-right",u)),t.push(this._createJscsspDeclarationFromValue(r+"-bottom",s)),t.push(this._createJscsspDeclarationFromValue(r+"-left",o)),i+" "+u+" "+s+" "+o},parseBorderColorShorthand:function(e,t,n){var r=null,i=null,s=null,o=null,u=[];for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!u.length&&e.isIdent(this.kINHERIT)){u.push(e.value),e=this.getToken(!0,!0);break}var a=this.parseColor(e);if(!a)return"";u.push(a),e=this.getToken(!0,!0)}var f=u.length;switch(f){case 1:r=u[0],i=r,s=r,o=r;break;case 2:r=u[0],i=r,s=u[1],o=s;break;case 3:r=u[0],s=u[1],o=s,i=u[2];break;case 4:r=u[0],o=u[1],i=u[2],s=u[3];break;default:return""}return this.forgetState(),t.push(this._createJscsspDeclarationFromValue("border-top-color",r)),t.push(this._createJscsspDeclarationFromValue("border-right-color",o)),t.push(this._createJscsspDeclarationFromValue("border-bottom-color",i)),t.push(this._createJscsspDeclarationFromValue("border-left-color",s)),r+" "+o+" "+i+" "+s},parseCueShorthand:function(e,t,n){var r="",i="",s=[],s=[];for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!s.length&&e.isIdent(this.kINHERIT))s.push(e.value);else if(e.isIdent("none"))s.push(e.value);else{if(!e.isFunction("url("))return"";var e=this.getToken(!0,!0),o=this.parseURL(e);if(!o)return"";s.push("url("+o)}e=this.getToken(!0,!0)}var u=s.length;switch(u){case 1:r=s[0],i=r;break;case 2:r=s[0],i=s[1];break;default:return""}return this.forgetState(),aDecl.push(this._createJscsspDeclarationFromValue("cue-before",r)),aDecl.push(this._createJscsspDeclarationFromValue("cue-after",i)),r+" "+i},parsePauseShorthand:function(e,t,n){var r="",i="",s=[],s=[];for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!s.length&&e.isIdent(this.kINHERIT))s.push(e.value);else{if(!(e.isDimensionOfUnit("ms")||e.isDimensionOfUnit("s")||e.isPercentage()||e.isNumber("0")))return"";s.push(e.value)}e=this.getToken(!0,!0)}var o=s.length;switch(o){case 1:r=s[0],i=r;break;case 2:r=s[0],i=s[1];break;default:return""}return this.forgetState(),aDecl.push(this._createJscsspDeclarationFromValue("pause-before",r)),aDecl.push(this._createJscsspDeclarationFromValue("pause-after",i)),r+" "+i},parseBorderWidthShorthand:function(e,t,n){var r=null,i=null,s=null,o=null,u=[];for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!u.length&&e.isIdent(this.kINHERIT))u.push(e.value);else{if(!(e.isDimension()||e.isNumber("0")||e.isIdent()&&e.value in this.kBORDER_WIDTH_NAMES))return"";u.push(e.value)}e=this.getToken(!0,!0)}var a=u.length;switch(a){case 1:r=u[0],i=r,s=r,o=r;break;case 2:r=u[0],i=r,s=u[1],o=s;break;case 3:r=u[0],s=u[1],o=s,i=u[2];break;case 4:r=u[0],o=u[1],i=u[2],s=u[3];break;default:return""}return this.forgetState(),t.push(this._createJscsspDeclarationFromValue("border-top-width",r)),t.push(this._createJscsspDeclarationFromValue("border-right-width",o)),t.push(this._createJscsspDeclarationFromValue("border-bottom-width",i)),t.push(this._createJscsspDeclarationFromValue("border-left-width",s)),r+" "+o+" "+i+" "+s},parseBorderStyleShorthand:function(e,t,n){var r=null,i=null,s=null,o=null,u=[];for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!u.length&&e.isIdent(this.kINHERIT))u.push(e.value);else{if(!(e.isIdent()&&e.value in this.kBORDER_STYLE_NAMES))return"";u.push(e.value)}e=this.getToken(!0,!0)}var a=u.length;switch(a){case 1:r=u[0],i=r,s=r,o=r;break;case 2:r=u[0],i=r,s=u[1],o=s;break;case 3:r=u[0],s=u[1],o=s,i=u[2];break;case 4:r=u[0],o=u[1],i=u[2],s=u[3];break;default:return""}return this.forgetState(),t.push(this._createJscsspDeclarationFromValue("border-top-style",r)),t.push(this._createJscsspDeclarationFromValue("border-right-style",o)),t.push(this._createJscsspDeclarationFromValue("border-bottom-style",i)),t.push(this._createJscsspDeclarationFromValue("border-left-style",s)),r+" "+o+" "+i+" "+s},parseBorderEdgeOrOutlineShorthand:function(e,t,n,r){function a(e,t,n,r,i,s){t.push(e._createJscsspDeclarationFromValue(n+"-width",r)),t.push(e._createJscsspDeclarationFromValue(n+"-style",i)),t.push(e._createJscsspDeclarationFromValue(n+"-color",s))}var i=null,s=null,o=null;for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!i&&!s&&!o&&e.isIdent(this.kINHERIT))i=this.kINHERIT,s=this.kINHERIT,o=this.kINHERIT;else if(!i&&(e.isDimension()||e.isIdent()&&e.value in this.kBORDER_WIDTH_NAMES||e.isNumber("0")))i=e.value;else if(!s&&e.isIdent()&&e.value in this.kBORDER_STYLE_NAMES)s=e.value;else{var u=r=="outline"&&e.isIdent("invert")?"invert":this.parseColor(e);if(!!o||!u)return"";o=u}e=this.getToken(!0,!0)}return this.forgetState(),i=i?i:"medium",s=s?s:"none",o=o?o:"-moz-initial",r=="border"?(a(this,t,"border-top",i,s,o),a(this,t,"border-right",i,s,o),a(this,t,"border-bottom",i,s,o),a(this,t,"border-left",i,s,o)):a(this,t,r,i,s,o),i+" "+s+" "+o},parseBackgroundShorthand:function(e,t,n){var r={left:!0,right:!0},i={top:!0,bottom:!0},s={left:!0,right:!0,top:!0,bottom:!0,center:!0},o=null,u=null,a=null,f=null,l=null;for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!o&&!u&&!a&&!f&&!l&&e.isIdent(this.kINHERIT))o=this.kINHERIT,u=this.kINHERIT,a=this.kINHERIT,f=this.kINHERIT,l=this.kINHERIT;else if(!a&&(e.isIdent("scroll")||e.isIdent("fixed")))a=e.value;else if(!l&&(e.isIdent()&&e.value in s||e.isDimension()||e.isNumber("0")||e.isPercentage())){l=e.value,e=this.getToken(!0,!0);if(e.isDimension()||e.isNumber("0")||e.isPercentage())l+=" "+e.value;else if(e.isIdent()&&e.value in s){if(l in r&&e.value in r||l in i&&e.value in i)return"";l+=" "+e.value}else this.ungetToken(),l+=" center"}else if(!u&&(e.isIdent("repeat")||e.isIdent("repeat-x")||e.isIdent("repeat-y")||e.isIdent("no-repeat")))u=e.value;else if(!f&&(e.isFunction("url(")||e.isIdent("none"))){f=e.value;if(e.isFunction("url(")){e=this.getToken(!0,!0);var c=this.parseURL(e);if(!c)return"";f+=c}}else if(!f&&(e.isFunction("-moz-linear-gradient(")||e.isFunction("-moz-radial-gradient(")||e.isFunction("-moz-repeating-linear-gradient(")||e.isFunction("-moz-repeating-radial-gradient("))){var h=CssInspector.parseGradient(this,e);if(!h)return"";f=CssInspector.serializeGradient(h)}else{var p=this.parseColor(e);if(!!o||!p)return"";o=p}e=this.getToken(!0,!0)}return this.forgetState(),o=o?o:"transparent",f=f?f:"none",u=u?u:"repeat",a=a?a:"scroll",l=l?l:"top left",t.push(this._createJscsspDeclarationFromValue("background-color",o)),t.push(this._createJscsspDeclarationFromValue("background-image",f)),t.push(this._createJscsspDeclarationFromValue("background-repeat",u)),t.push(this._createJscsspDeclarationFromValue("background-attachment",a)),t.push(this._createJscsspDeclarationFromValue("background-position",l)),o+" "+f+" "+u+" "+a+" "+l},parseListStyleShorthand:function(e,t,n){var r={inside:!0,outside:!0},i=null,s=null,o=null;for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!i&&!s&&!o&&e.isIdent(this.kINHERIT))i=this.kINHERIT,s=this.kINHERIT,o=this.kINHERIT;else if(!i&&e.isIdent()&&e.value in this.kLIST_STYLE_TYPE_NAMES)i=e.value;else if(!s&&e.isIdent()&&e.value in r)s=e.value;else if(!o&&e.isFunction("url")){e=this.getToken(!0,!0);var u=this.parseURL(e);if(!u)return"";o="url("+u}else if(!e.isIdent("none"))return"";e=this.getToken(!0,!0)}return this.forgetState(),i=i?i:"none",o=o?o:"none",s=s?s:"outside",t.push(this._createJscsspDeclarationFromValue("list-style-type",i)),t.push(this._createJscsspDeclarationFromValue("list-style-position",s)),t.push(this._createJscsspDeclarationFromValue("list-style-image",o)),i+" "+s+" "+o},parseFontShorthand:function(e,t,n){var r={italic:!0,oblique:!0},i={"small-caps":!0},s={bold:!0,bolder:!0,lighter:!0,100:!0,200:!0,300:!0,400:!0,500:!0,600:!0,700:!0,800:!0,900:!0},o={"xx-small":!0,"x-small":!0,small:!0,medium:!0,large:!0,"x-large":!0,"xx-large":!0,larger:!0,smaller:!0},u={caption:!0,icon:!0,menu:!0,"message-box":!0,"small-caption":!0,"status-bar":!0},a={serif:!0,"sans-serif":!0,cursive:!0,fantasy:!0,monospace:!0},f=null,l=null,c=null,h=null,p=null,d="",v=null,m=[],g=0;for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){e.isSymbol("}")&&this.ungetToken();break}if(!f&&!l&&!c&&!h&&!p&&!d&&!v&&e.isIdent(this.kINHERIT))f=this.kINHERIT,l=this.kINHERIT,c=this.kINHERIT,h=this.kINHERIT,p=this.kINHERIT,d=this.kINHERIT,v=this.kINHERIT;else{if(!v&&e.isIdent()&&e.value in u){v=e.value;break}if(!f&&e.isIdent()&&e.value in r)f=e.value;else if(!l&&e.isIdent()&&e.value in i)l=e.value;else if(!c&&(e.isIdent()||e.isNumber())&&e.value in s)c=e.value;else if(!h&&(e.isIdent()&&e.value in o||e.isDimension()||e.isPercentage())){h=e.value;var e=this.getToken(!1,!1);if(e.isSymbol("/")){e=this.getToken(!1,!1);if(!!p||!(e.isDimension()||e.isNumber()||e.isPercentage()))return"";p=e.value}else this.ungetToken()}else if(e.isIdent("normal")){g++;if(g>3)return""}else{if(!!d||!e.isString()&&!e.isIdent())return"";var y=!1;for(;;){if(!e.isNotNull())break;if(e.isSymbol(";")||n&&e.isSymbol("!")||e.isSymbol("}")){this.ungetToken();break}if(e.isIdent()&&e.value in a){var b=new jscsspVariable(kJscsspPRIMITIVE_VALUE,null);b.value=e.value,m.push(b),d+=e.value;break}if(e.isString()||e.isIdent()){var b=new jscsspVariable(kJscsspPRIMITIVE_VALUE,null);b.value=e.value,m.push(b),d+=e.value,y=!1}else{if(!!y||!e.isSymbol(","))return"";d+=", ",y=!0}e=this.getToken(!0,!0)}}}e=this.getToken(!0,!0)}return this.forgetState(),v?(t.push(this._createJscsspDeclarationFromValue("font",v)),v):(f=f?f:"normal",l=l?l:"normal",c=c?c:"normal",h=h?h:"medium",p=p?p:"normal",d=d?d:"-moz-initial",t.push(this._createJscsspDeclarationFromValue("font-style",f)),t.push(this._createJscsspDeclarationFromValue("font-variant",l)),t.push(this._createJscsspDeclarationFromValue("font-weight",c)),t.push(this._createJscsspDeclarationFromValue("font-size",h)),t.push(this._createJscsspDeclarationFromValue("line-height",p)),t.push(this._createJscsspDeclarationFromValuesArray("font-family",m,d)),f+" "+l+" "+c+" "+h+"/"+p+" "+d)},_createJscsspDeclaration:function(e,t){var n=new jscsspDeclaration;return n.property=e,n.value=this.trim11(t),n.parsedCssText=e+": "+t+";",n},_createJscsspDeclarationFromValue:function(e,t){var n=new jscsspDeclaration;n.property=e;var r=new jscsspVariable(kJscsspPRIMITIVE_VALUE,null);return r.value=t,n.values=[r],n.valueText=t,n.parsedCssText=e+": "+t+";",n},_createJscsspDeclarationFromValuesArray:function(e,t,n){var r=new jscsspDeclaration;return r.property=e,r.values=t,r.valueText=n,r.parsedCssText=e+": "+n+";",r},parseURL:function(e){var t="";if(e.isString())t+=e.value,e=this.getToken(!0,!0);else for(;;){if(!e.isNotNull())return this.reportError(kURL_EOF),"";if(e.isWhiteSpace()){nextToken=this.lookAhead(!0,!0);if(!nextToken.isSymbol(")")){this.reportError(kURL_WS_INSIDE),e=this.currentToken();break}}if(e.isSymbol(")"))break;t+=e.value,e=this.getToken(!1,!1)}return e.isSymbol(")")?t+")":""},parseFunctionArgument:function(e){var t="";if(e.isString())t+=e.value,e=this.getToken(!0,!0);else{var n=1;for(;;){if(!e.isNotNull())return"";(e.isFunction()||e.isSymbol("("))&&n++;if(e.isSymbol(")")){n--;if(!n)break}t+=e.value,e=this.getToken(!1,!1)}}return e.isSymbol(")")?t+")":""},parseColor:function(e){var t="";if(e.isFunction("rgb(")||e.isFunction("rgba(")){t=e.value;var n=e.isFunction("rgba(");e=this.getToken(!0,!0);if(!e.isNumber()&&!e.isPercentage())return"";t+=e.value,e=this.getToken(!0,!0);if(!e.isSymbol(","))return"";t+=", ",e=this.getToken(!0,!0);if(!e.isNumber()&&!e.isPercentage())return"";t+=e.value,e=this.getToken(!0,!0);if(!e.isSymbol(","))return"";t+=", ",e=this.getToken(!0,!0);if(!e.isNumber()&&!e.isPercentage())return"";t+=e.value;if(n){e=this.getToken(!0,!0);if(!e.isSymbol(","))return"";t+=", ",e=this.getToken(!0,!0);if(!e.isNumber())return"";t+=e.value}e=this.getToken(!0,!0);if(!e.isSymbol(")"))return"";t+=e.value}else if(e.isFunction("hsl(")||e.isFunction("hsla(")){t=e.value;var r=e.isFunction("hsla(");e=this.getToken(!0,!0);if(!e.isNumber())return"";t+=e.value,e=this.getToken(!0,!0);if(!e.isSymbol(","))return"";t+=", ",e=this.getToken(!0,!0);if(!e.isPercentage())return"";t+=e.value,e=this.getToken(!0,!0);if(!e.isSymbol(","))return"";t+=", ",e=this.getToken(!0,!0);if(!e.isPercentage())return"";t+=e.value;if(r){e=this.getToken(!0,!0);if(!e.isSymbol(","))return"";t+=", ",e=this.getToken(!0,!0);if(!e.isNumber())return"";t+=e.value}e=this.getToken(!0,!0);if(!e.isSymbol(")"))return"";t+=e.value}else if(e.isIdent()&&e.value in this.kCOLOR_NAMES)t=e.value;else if(e.isSymbol("#")){e=this.getHexValue();if(!e.isHex())return"";var i=e.value.length;if(i!=3&&i!=6)return"";if(e.value.match(/[a-fA-F0-9]/g).length!=i)return"";t="#"+e.value}return t},parseDeclaration:function(e,t,n,r,i){this.preserveState();var s=[];if(e.isIdent()){var o=e.value.toLowerCase(),u=this.getToken(!0,!0);if(u.isSymbol(":")){var u=this.getToken(!0,!0),a="",f=[];if(r)switch(o){case"background":a=this.parseBackgroundShorthand(u,f,n);break;case"margin":case"padding":a=this.parseMarginOrPaddingShorthand(u,f,n,o);break;case"border-color":a=this.parseBorderColorShorthand(u,f,n);break;case"border-style":a=this.parseBorderStyleShorthand(u,f,n);break;case"border-width":a=this.parseBorderWidthShorthand(u,f,n);break;case"border-top":case"border-right":case"border-bottom":case"border-left":case"border":case"outline":a=this.parseBorderEdgeOrOutlineShorthand(u,f,n,o);break;case"cue":a=this.parseCueShorthand(u,f,n);break;case"pause":a=this.parsePauseShorthand(u,f,n);break;case"font":a=this.parseFontShorthand(u,f,n);break;case"list-style":a=this.parseListStyleShorthand(u,f,n);break;default:a=this.parseDefaultPropertyValue(u,f,n,o,i)}else a=this.parseDefaultPropertyValue(u,f,n,o,i);u=this.currentToken();if(a){var l=!1;if(u.isSymbol("!")){u=this.getToken(!0,!0);if(!u.isIdent("important"))return"";l=!0,u=this.getToken(!0,!0);if(!u.isSymbol(";")&&!u.isSymbol("}"))return"";u.isSymbol("}")&&this.ungetToken()}else if(u.isNotNull()&&!u.isSymbol(";")&&!u.isSymbol("}"))return"";for(var c=0;c<f.length;c++)f[c].priority=l,t.push(f[c]);return o+": "+a+";"}}}else if(e.isComment()){if(this.mPreserveComments){this.forgetState();var h=new jscsspComment;h.parsedCssText=e.value,t.push(h)}return e.value}this.restoreState();var p=e.value;s=[];var u=this.getToken(!1,!1);while(u.isNotNull()){p+=u.value;if((u.isSymbol(";")||u.isSymbol("}"))&&!s.length){u.isSymbol("}")&&this.ungetToken();break}if(u.isSymbol("{")||u.isSymbol("(")||u.isSymbol("[")||u.isFunction())s.push(u.isFunction()?"(":u.value);else if(u.isSymbol("}")||u.isSymbol(")")||u.isSymbol("]"))if(s.length){var d=s[s.length-1];(u.isSymbol("}")&&d=="{"||u.isSymbol(")")&&d=="("||u.isSymbol("]")&&d=="[")&&s.pop()}u=this.getToken(!1,!1)}return""},parseKeyframesRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=e.value,i=!1,s=new jscsspKeyframesRule;s.currentLine=n,this.preserveState();var o=this.getToken(!0,!0),u=!1;while(o.isNotNull()){if(!o.isIdent()){if(o.isSymbol("{")){u||(o.type=jscsspToken.NULL_TYPE);break}o.type=jscsspToken.NULL_TYPE;break}u=!0,r+=" "+o.value,s.name=o.value,o=this.getToken(!0,!0);if(!o.isSymbol("{")){o.type=jscsspToken.NULL_TYPE;break}this.ungetToken(),o=this.getToken(!0,!0)}if(o.isSymbol("{")&&s.name){r+=" { ",o=this.getToken(!0,!1);while(o.isNotNull()){if(o.isComment()&&this.mPreserveComments){r+=" "+o.value;var a=new jscsspComment;a.parsedCssText=o.value,s.cssRules.push(a)}else{if(o.isSymbol("}")){i=!0;break}var f=this.parseKeyframeRule(o,s,!0);f&&(r+=f)}o=this.getToken(!0,!1)}}return i?(this.forgetState(),s.currentLine=n,s.parsedCssText=r,t.cssRules.push(s),!0):(this.restoreState(),!1)},parseKeyframeRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned());this.preserveState();var r=e,i="";while(r.isNotNull()){if(!r.isIdent()&&!r.isPercentage()){i="";break}if(r.isIdent()&&!r.isIdent("from")&&!r.isIdent("to")){i="";break}i+=r.value,r=this.getToken(!0,!0);if(r.isSymbol("{")){this.ungetToken();break}if(!r.isSymbol(",")){i="";break}i+=", ",r=this.getToken(!0,!0)}var s=!1,o=[];if(i){var u=i;r=this.getToken(!0,!0);if(r.isSymbol("{")){u+=" { ",r=this.getToken(!0,!1);for(;;){if(!r.isNotNull()){s=!0;break}if(r.isSymbol("}")){u+="}",s=!0;break}var a=this.parseDeclaration(r,o,!0,!0,t);u+=(a&&o.length?" ":"")+a,r=this.getToken(!0,!1)}}}if(s){var f=new jscsspKeyframeRule;return f.currentLine=n,f.parsedCssText=u,f.declarations=o,f.keyText=i,f.parentRule=t,t.cssRules.push(f),u}return this.restoreState(),u=this.currentToken().value,this.addUnknownAtRule(t,u),""},parseMediaRule:function(e,t){var n=CountLF(this.mScanner.getAlreadyScanned()),r=e.value,i=!1,s=new jscsspMediaRule;s.currentLine=n,this.preserveState();var o=this.getToken(!0,!0),u=!1;while(o.isNotNull()){if(o.isIdent()){u=!0,r+=" "+o.value,s.media.push(o.value),o=this.getToken(!0,!0);if(o.isSymbol(","))r+=",";else{if(!o.isSymbol("{")){o.type=jscsspToken.NULL_TYPE;break}this.ungetToken()}}else{if(o.isSymbol("{"))break;if(u){o.type=jscsspToken.NULL_TYPE;break}}o=this.getToken(!0,!0)}if(o.isSymbol("{")&&s.media.length){r+=" { ",o=this.getToken(!0,!1);while(o.isNotNull()){if(o.isComment()&&this.mPreserveComments){r+=" "+o.value;var a=new jscsspComment;a.parsedCssText=o.value,s.cssRules.push(a)}else{if(o.isSymbol("}")){i=!0;break}var f=this.parseStyleRule(o,s,!0);f&&(r+=f)}o=this.getToken(!0,!1)}}return i?(this.forgetState(),s.parsedCssText=r,t.cssRules.push(s),!0):(this.restoreState(),!1)},trim11:function(e){e=e.replace(/^\s+/,"");for(var t=e.length-1;t>=0;t--)if(/\S/.test(e.charAt(t))){e=e.substring(0,t+1);break}return e},parseStyleRule:function(e,t,n){var r=CountLF(this.mScanner.getAlreadyScanned());this.preserveState();var i=this.parseSelector(e,!1),s=!1,o=[];if(i){i=this.trim11(i.selector);var u=i,a=this.getToken(!0,!0);if(a.isSymbol("{")){u+=" { ";var a=this.getToken(!0,!1);for(;;){if(!a.isNotNull()){s=!0;break}if(a.isSymbol("}")){u+="}",s=!0;break}var f=this.parseDeclaration(a,o,!0,!0,t);u+=(f&&o.length?" ":"")+f,a=this.getToken(!0,!1)}}}if(s){var l=new jscsspStyleRule;return l.currentLine=r,l.parsedCssText=u,l.declarations=o,l.mSelectorText=i,n?l.parentRule=t:l.parentStyleSheet=t,t.cssRules.push(l),u}return this.restoreState(),u=this.currentToken().value,this.addUnknownAtRule(t,u),""},parseSelector:function(e,t){var n="",r={a:0,b:0,c:0,d:0},i=!0,s=e,o=!1,u=!1;for(;;){if(!s.isNotNull())return t?{selector:n,specificity:r}:"";if(!t&&s.isSymbol("{")){o=!u,o&&this.ungetToken();break}if(s.isSymbol(",")){n+=s.value,i=!0,u=!1,s=this.getToken(!1,!0);continue}if(!u&&(s.isWhiteSpace()||s.isSymbol(">")||s.isSymbol("+")||s.isSymbol("~"))){if(s.isWhiteSpace()){n+=" ";var a=this.lookAhead(!0,!0);if(!a.isNotNull())return t?{selector:n,specificity:r}:"";if(a.isSymbol(">")||a.isSymbol("+")||a.isSymbol("~"))s=this.getToken(!0,!0),n+=s.value+" ",u=!0}else n+=s.value,u=!0;i=!0,s=this.getToken(!0,!0);continue}var f=this.parseSimpleSelector(s,i,!0);if(!f)break;n+=f.selector,r.b+=f.specificity.b,r.c+=f.specificity.c,r.d+=f.specificity.d,i=!1,u=!1,s=this.getToken(!1,!0)}return o?{selector:n,specificity:r}:""},isPseudoElement:function(e){switch(e){case"first-letter":case"first-line":case"before":case"after":case"marker":return!0;default:return!1}},parseSimpleSelector:function(e,t,n){var r="",i={a:0,b:0,c:0,d:0};if(t&&(e.isSymbol("*")||e.isSymbol("|")||e.isIdent())){if(e.isSymbol("*")||e.isIdent()){r+=e.value;var s=e.isIdent();e=this.getToken(!1,!0);if(e.isSymbol("|")){r+=e.value,e=this.getToken(!1,!0);if(!e.isIdent()&&!e.isSymbol("*"))return null;r+=e.value,e.isIdent()&&i.d++}else this.ungetToken(),s&&i.d++}else if(e.isSymbol("|")){r+=e.value,e=this.getToken(!1,!0);if(!e.isIdent()&&!e.isSymbol("*"))return null;r+=e.value,e.isIdent()&&i.d++}}else if(e.isSymbol(".")||e.isSymbol("#")){var o=e.isSymbol(".");r+=e.value,e=this.getToken(!1,!0);if(!e.isIdent())return null;r+=e.value,o?i.c++:i.b++}else if(e.isSymbol(":")){r+=e.value,e=this.getToken(!1,!0),e.isSymbol(":")&&(r+=e.value,e=this.getToken(!1,!0));if(e.isIdent())r+=e.value,this.isPseudoElement(e.value)?i.d++:i.c++;else{if(!e.isFunction())return null;r+=e.value;if(e.isFunction(":not(")){if(!n)return null;e=this.getToken(!0,!0);var u=this.parseSimpleSelector(e,t,!1);if(!u)return null;r+=u.selector,e=this.getToken(!0,!0);if(!e.isSymbol(")"))return null;r+=")",i.c++}else{for(;;){e=this.getToken(!1,!0);if(e.isSymbol(")")){r+=")";break}r+=e.value}i.c++}}}else if(e.isSymbol("[")){r+="[",e=this.getToken(!0,!0);if(e.isIdent()||e.isSymbol("*")){r+=e.value;var a=this.getToken(!0,!0);if(e.isSymbol("|")){r+="|",e=this.getToken(!0,!0);if(!e.isIdent())return null;r+=e.value}else this.ungetToken()}else{if(!e.isSymbol("|"))return null;r+="|",e=this.getToken(!0,!0);if(!e.isIdent())return null;r+=e.value}e=this.getToken(!0,!0);if(e.isIncludes()||e.isDashmatch()||e.isBeginsmatch()||e.isEndsmatch()||e.isContainsmatch()||e.isSymbol("=")){r+=e.value,e=this.getToken(!0,!0);if(!e.isString()&&!e.isIdent())return null;r+=e.value,e=this.getToken(!0,!0);if(!e.isSymbol("]"))return null;r+=e.value,i.c++}else{if(!e.isSymbol("]"))return null;r+=e.value,i.c++}}else if(e.isWhiteSpace()){var f=this.lookAhead(!0,!0);if(f.isSymbol("{"))return""}return r?{selector:r,specificity:i}:null},preserveState:function(){this.mPreservedTokens.push(this.currentToken()),this.mScanner.preserveState()},restoreState:function(){this.mPreservedTokens.length&&(this.mScanner.restoreState(),this.mToken=this.mPreservedTokens.pop())},forgetState:function(){this.mPreservedTokens.length&&(this.mScanner.forgetState(),this.mPreservedTokens.pop())},parse:function(e,t,n){if(!e)return null;this.mPreserveWS=t,this.mPreserveComments=n,this.mPreservedTokens=[],this.mScanner.init(e);var r=new jscsspStylesheet,i=this.getToken(!1,!1);if(!i.isNotNull())return;i.isAtRule("@charset")&&(this.parseCharsetRule(i,r),i=this.getToken(!1,!1));var s=!1,o=!1,u=!1;for(;;){if(!i.isNotNull())break;if(i.isWhiteSpace())t&&this.addWhitespace(r,i.value);else if(i.isComment())this.mPreserveComments&&this.addComment(r,i.value);else if(i.isAtRule())i.isAtRule("@variables")?!o&&!s?this.parseVariablesRule(i,r):(this.reportError(kVARIABLES_RULE_POSITION),this.addUnknownAtRule(r,i.value)):i.isAtRule("@import")?!s&&!u?o=this.parseImportRule(i,r):(this.reportError(kIMPORT_RULE_POSITION),this.addUnknownAtRule(r,i.value)):i.isAtRule("@namespace")?s?(this.reportError(kNAMESPACE_RULE_POSITION),this.addUnknownAtRule(r,i.value)):u=this.parseNamespaceRule(i,r):i.isAtRule("@font-face")?this.parseFontFaceRule(i,r)?s=!0:this.addUnknownAtRule(r,i.value):i.isAtRule("@page")?this.parsePageRule(i,r)?s=!0:this.addUnknownAtRule(r,i.value):i.isAtRule("@media")?this.parseMediaRule(i,r)?s=!0:this.addUnknownAtRule(r,i.value):i.isAtRule("@keyframes")?this.parseKeyframesRule(i,r)||this.addUnknownAtRule(r,i.value):i.isAtRule("@charset")?(this.reportError(kCHARSET_RULE_CHARSET_SOF),this.addUnknownAtRule(r,i.value)):(this.reportError(kUNKNOWN_AT_RULE),this.addUnknownAtRule(r,i.value));else{var a=this.parseStyleRule(i,r,!1);a&&(s=!0)}i=this.getToken(!1)}return r}},jscsspToken.NULL_TYPE=0,jscsspToken.WHITESPACE_TYPE=1,jscsspToken.STRING_TYPE=2,jscsspToken.COMMENT_TYPE=3,jscsspToken.NUMBER_TYPE=4,jscsspToken.IDENT_TYPE=5,jscsspToken.FUNCTION_TYPE=6,jscsspToken.ATRULE_TYPE=7,jscsspToken.INCLUDES_TYPE=8,jscsspToken.DASHMATCH_TYPE=9,jscsspToken.BEGINSMATCH_TYPE=10,jscsspToken.ENDSMATCH_TYPE=11,jscsspToken.CONTAINSMATCH_TYPE=12,jscsspToken.SYMBOL_TYPE=13,jscsspToken.DIMENSION_TYPE=14,jscsspToken.PERCENTAGE_TYPE=15,jscsspToken.HEX_TYPE=16,jscsspToken.prototype={isNotNull:function(){return this.type},_isOfType:function(e,t){return this.type==e&&(!t||this.value.toLowerCase()==t)},isWhiteSpace:function(e){return this._isOfType(jscsspToken.WHITESPACE_TYPE,e)},isString:function(){return this._isOfType(jscsspToken.STRING_TYPE)},isComment:function(){return this._isOfType(jscsspToken.COMMENT_TYPE)},isNumber:function(e){return this._isOfType(jscsspToken.NUMBER_TYPE,e)},isSymbol:function(e){return this._isOfType(jscsspToken.SYMBOL_TYPE,e)},isIdent:function(e){return this._isOfType(jscsspToken.IDENT_TYPE,e)},isFunction:function(e){return this._isOfType(jscsspToken.FUNCTION_TYPE,e)},isAtRule:function(e){return this._isOfType(jscsspToken.ATRULE_TYPE,e)},isIncludes:function(){return this._isOfType(jscsspToken.INCLUDES_TYPE)},isDashmatch:function(){return this._isOfType(jscsspToken.DASHMATCH_TYPE)},isBeginsmatch:function(){return this._isOfType(jscsspToken.BEGINSMATCH_TYPE)},isEndsmatch:function(){return this._isOfType(jscsspToken.ENDSMATCH_TYPE)},isContainsmatch:function(){return this._isOfType(jscsspToken.CONTAINSMATCH_TYPE)},isSymbol:function(e){return this._isOfType(jscsspToken.SYMBOL_TYPE,e)},isDimension:function(){return this._isOfType(jscsspToken.DIMENSION_TYPE)},isPercentage:function(){return this._isOfType(jscsspToken.PERCENTAGE_TYPE)},isHex:function(){return this._isOfType(jscsspToken.HEX_TYPE)},isDimensionOfUnit:function(e){return this.isDimension()&&this.unit==e},isLength:function(){return this.isPercentage()||this.isDimensionOfUnit("cm")||this.isDimensionOfUnit("mm")||this.isDimensionOfUnit("in")||this.isDimensionOfUnit("pc")||this.isDimensionOfUnit("px")||this.isDimensionOfUnit("em")||this.isDimensionOfUnit("ex")||this.isDimensionOfUnit("pt")},isAngle:function(){return this.isDimensionOfUnit("deg")||this.isDimensionOfUnit("rad")||this.isDimensionOfUnit("grad")}};var kJscsspUNKNOWN_RULE=0,kJscsspSTYLE_RULE=1,kJscsspCHARSET_RULE=2,kJscsspIMPORT_RULE=3,kJscsspMEDIA_RULE=4,kJscsspFONT_FACE_RULE=5,kJscsspPAGE_RULE=6,kJscsspKEYFRAMES_RULE=7,kJscsspKEYFRAME_RULE=8,kJscsspNAMESPACE_RULE=100,kJscsspCOMMENT=101,kJscsspWHITE_SPACE=102,kJscsspVARIABLES_RULE=200,kJscsspSTYLE_DECLARATION=1e3,gTABS="";jscsspStylesheet.prototype={insertRule:function(e,t){try{this.cssRules.splice(t,1,e)}catch(n){}},deleteRule:function(e){try{this.cssRules.splice(e)}catch(t){}},cssText:function(){var e="";for(var t=0;t<this.cssRules.length;t++)e+=this.cssRules[t].cssText()+"\n";return e},resolveVariables:function(e){function t(e,t){for(var n=0;n<e.length;n++)if(t==e[n])return!0;return!1}for(var n=0;n<this.cssRules.length;n++){var r=this.cssRules[n];if(r.type==kJscsspSTYLE_RULE||r.type==kJscsspIMPORT_RULE)break;if(r.type==kJscsspVARIABLES_RULE&&(!r.media.length||t(r.media,e)))for(var i=0;i<r.declarations.length;i++){var s="";for(var o=0;o<r.declarations[i].values.length;o++)s+=(o?" ":"")+r.declarations[i].values[o].value;this.variables[r.declarations[i].property]=s}}}},jscsspCharsetRule.prototype={cssText:function(){return"@charset "+this.encoding+";"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!1,!1);if(r.isAtRule("@charset")&&n.parseCharsetRule(r,t)){var i=t.cssRules[0];this.encoding=i.encoding,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspErrorRule.prototype={cssText:function(){return this.parsedCssText}},jscsspComment.prototype={cssText:function(){return this.parsedCssText},setCssText:function(e){var t=new CSSParser(e),n=t.getToken(!0,!1);if(!n.isComment())throw DOMException.SYNTAX_ERR;this.parsedCssText=n.value}},jscsspWhitespace.prototype={cssText:function(){return this.parsedCssText}},jscsspImportRule.prototype={cssText:function(){var e=this.media.join(", ");return"@import "+this.href+(e&&e!="all"?e+" ":"")+";"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(r.isAtRule("@import")&&n.parseImportRule(r,t)){var i=t.cssRules[0];this.href=i.href,this.media=i.media,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspNamespaceRule.prototype={cssText:function(){return"@namespace "+(this.prefix?this.prefix+" ":"")+this.url+";"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(r.isAtRule("@namespace")&&n.parseNamespaceRule(r,t)){var i=t.cssRules[0];this.url=i.url,this.prefix=i.prefix,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspDeclaration.prototype={kCOMMA_SEPARATED:{cursor:!0,"font-family":!0,"voice-family":!0,"background-image":!0},kUNMODIFIED_COMMA_SEPARATED_PROPERTIES:{"text-shadow":!0,"box-shadow":!0,"-moz-transition":!0,"-moz-transition-property":!0,"-moz-transition-duration":!0,"-moz-transition-timing-function":!0,"-moz-transition-delay":!0},cssText:function(){var e=CssInspector.prefixesForProperty(this.property);if(this.property in this.kUNMODIFIED_COMMA_SEPARATED_PROPERTIES){if(e){var t="";for(var n=0;n<e.length;n++){var r=e[n];t+=(n?gTABS:"")+r+": ",t+=this.valueText+(this.priority?" !important":"")+";",t+=e.length>1&&n!=e.length-1?"\n":""}return t}return this.property+": "+this.valueText+(this.priority?" !important":"")+";"}if(e){var t="";for(var n=0;n<e.length;n++){var r=e[n];t+=(n?gTABS:"")+r+": ";var i=r in this.kCOMMA_SEPARATED?", ":" ";for(var s=0;s<this.values.length;s++){if(this.values[s].cssText()==null)return null;t+=(s?i:"")+this.values[s].cssText()}t+=(this.priority?" !important":"")+";"+(e.length>1&&n!=e.length-1?"\n":"")}return t}var t=this.property+": ",i=this.property in this.kCOMMA_SEPARATED?", ":" ",o={webkit:!1,presto:!1,trident:!1,generic:!1};for(var s=0;s<this.values.length;s++){var u=this.values[s].cssText();if(u==null)return null;var a=u.indexOf("("),f=u;a!=-1&&(f=u.substr(0,a));if(f in kCSS_VENDOR_VALUES)for(var l in kCSS_VENDOR_VALUES[f])o[l]=o[l]||kCSS_VENDOR_VALUES[f][l]!="";t+=(s?i:"")+u}t+=(this.priority?" !important":"")+";";for(var l in o)if(o[l]){var c="\n"+gTABS+this.property+": ";for(var s=0;s<this.values.length;s++){var u=this.values[s].cssText();if(u==null)return null;var a=u.indexOf("("),f=u;a!=-1&&(f=u.substr(0,a));if(f in kCSS_VENDOR_VALUES){functor=kCSS_VENDOR_VALUES[f][l];if(functor){u=typeof functor=="string"?functor:functor(u,l);if(!u){c=null;break}}}c+=(s?i:"")+u}c?t+=c+";":t+="\n"+gTABS+"/* Impossible to translate property "+this.property+" for "+l+" */"}return t},setCssText:function(e){var t=[],n=new CSSParser(e),r=n.getToken(!0,!0);if(n.parseDeclaration(r,t,!0,!0,null)&&t.length&&t[0].type==kJscsspSTYLE_DECLARATION){var i=t.cssRules[0];this.property=i.property,this.value=i.value,this.priority=i.priority,this.parsedCssText=newRule.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspFontFaceRule.prototype={cssText:function(){var e=gTABS+"@font-face {\n",t=gTABS;gTABS+="  ";for(var n=0;n<this.descriptors.length;n++)e+=gTABS+this.descriptors[n].cssText()+"\n";return gTABS=t,e+gTABS+"}"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(r.isAtRule("@font-face")&&n.parseFontFaceRule(r,t)){var i=t.cssRules[0];this.descriptors=i.descriptors,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspKeyframesRule.prototype={cssText:function(){var e=gTABS+"@keyframes "+this.name+" {\n",t=gTABS;gTABS+="  ";for(var n=0;n<this.cssRules.length;n++)e+=gTABS+this.cssRules[n].cssText()+"\n";return gTABS=t,e+=gTABS+"}\n",e},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(r.isAtRule("@keyframes")&&n.parseKeyframesRule(r,t)){var i=t.cssRules[0];this.cssRules=i.cssRules,this.name=i.name,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspKeyframeRule.prototype={cssText:function(){var e=this.keyText+" {\n",t=gTABS;gTABS+="  ";for(var n=0;n<this.declarations.length;n++){var r=this.declarations[n].cssText();r&&(e+=gTABS+this.declarations[n].cssText()+"\n")}return gTABS=t,e+gTABS+"}"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(!r.isNotNull()&&n.parseKeyframeRule(r,t,!1)){var i=t.cssRules[0];this.keyText=i.keyText,this.declarations=i.declarations,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspMediaRule.prototype={cssText:function(){var e=gTABS+"@media "+this.media.join(", ")+" {\n",t=gTABS;gTABS+="  ";for(var n=0;n<this.cssRules.length;n++)e+=gTABS+this.cssRules[n].cssText()+"\n";return gTABS=t,e+gTABS+"}"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(r.isAtRule("@media")&&n.parseMediaRule(r,t)){var i=t.cssRules[0];this.cssRules=i.cssRules,this.media=i.media,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspStyleRule.prototype={cssText:function(){var e=this.mSelectorText+" {\n",t=gTABS;gTABS+="  ";for(var n=0;n<this.declarations.length;n++){var r=this.declarations[n].cssText();r&&(e+=gTABS+this.declarations[n].cssText()+"\n")}return gTABS=t,e+gTABS+"}"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(!r.isNotNull()&&n.parseStyleRule(r,t,!1)){var i=t.cssRules[0];this.mSelectorText=i.mSelectorText,this.declarations=i.declarations,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR},selectorText:function(){return this.mSelectorText},setSelectorText:function(e){var t=new CSSParser(e),n=t.getToken(!0,!0);if(!n.isNotNull()){var r=t.parseSelector(n,!0);if(r){this.mSelectorText=r.selector;return}}throw DOMException.SYNTAX_ERR}},jscsspPageRule.prototype={cssText:function(){var e=gTABS+"@page "+(this.pageSelector?this.pageSelector+" ":"")+"{\n",t=gTABS;gTABS+="  ";for(var n=0;n<this.declarations.length;n++)e+=gTABS+this.declarations[n].cssText()+"\n";return gTABS=t,e+gTABS+"}"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(r.isAtRule("@page")&&n.parsePageRule(r,t)){var i=t.cssRules[0];this.pageSelector=i.pageSelector,this.declarations=i.declarations,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}},jscsspVariablesRule.prototype={cssText:function(){var e=gTABS+"@variables "+(this.media.length?this.media.join(", ")+" ":"")+"{\n",t=gTABS;gTABS+="  ";for(var n=0;n<this.declarations.length;n++)e+=gTABS+this.declarations[n].cssText()+"\n";return gTABS=t,e+gTABS+"}"},setCssText:function(e){var t={cssRules:[]},n=new CSSParser(e),r=n.getToken(!0,!0);if(r.isAtRule("@variables")&&n.parseVariablesRule(r,t)){var i=t.cssRules[0];this.declarations=i.declarations,this.parsedCssText=i.parsedCssText;return}throw DOMException.SYNTAX_ERR}};var kJscsspINHERIT_VALUE=0,kJscsspPRIMITIVE_VALUE=1,kJscsspVARIABLE_VALUE=4;jscsspVariable.prototype={cssText:function(){return this.type==kJscsspVARIABLE_VALUE?this.resolveVariable(this.name,this.parentRule,this.parentStyleSheet):this.value},setCssText:function(e){if(this.type==kJscsspVARIABLE_VALUE)throw DOMException.SYNTAX_ERR;this.value=e},resolveVariable:function(e,t,n){return e.toLowerCase()in n.variables?n.variables[e.toLowerCase()]:null}},function(){function l(e){var t={},n=e.split(",");for(var r=0;r<n.length;r++)t[n[r]]=!0;return t}var e=/^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,t=/^<\/([-A-Za-z0-9_]+)[^>]*>/,n=/([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,r=l("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),i=l("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul"),s=l("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),o=l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),u=l("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),a=l("script,style"),f=this.HTMLParser=function(f,l){function g(e,t,a,f){t=t.toLowerCase();if(i[t])while(d.last()&&s[d.last()])y("",d.last());o[t]&&d.last()==t&&y("",t),f=r[t]||!!f,f||d.push(t);if(l.start){var c=[];a.replace(n,function(e,t){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:u[t]?t:"";c.push({name:t,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})}),l.start&&l.start(t,c,f)}}function y(e,t){if(!t)var n=0;else for(var n=d.length-1;n>=0;n--)if(d[n]==t)break;if(n>=0){for(var r=d.length-1;r>=n;r--)l.end&&l.end(d[r]);d.length=n}}var c,h,p,d=[],v=f;d.last=function(){return this[this.length-1]};while(f){h=!0;if(!d.last()||!a[d.last()]){f.indexOf("<!--")==0?(c=f.indexOf("-->"),c>=0&&(l.comment&&l.comment(f.substring(4,c)),f=f.substring(c+3),h=!1)):f.indexOf("</")==0?(p=f.match(t),p&&(f=f.substring(p[0].length),p[0].replace(t,y),h=!1)):f.indexOf("<")==0&&(p=f.match(e),p&&(f=f.substring(p[0].length),p[0].replace(e,g),h=!1));if(h){c=f.indexOf("<");var m=c<0?f:f.substring(0,c);f=c<0?"":f.substring(c),l.chars&&l.chars(m)}}else f=f.replace(new RegExp("^((?:.|\n)*?)</"+d.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--(.*?)-->/g,"$1").replace(/<!\[CDATA\[(.*?)]]>/g,"$1"),l.chars&&l.chars(t),""}),y("",d.last());if(f==v)throw"Parse Error: "+f;v=f}y()};this.HTMLtoXML=function(e){var t="";return f(e,{start:function(e,n,r){t+="<"+e;for(var i=0;i<n.length;i++)t+=" "+n[i].name+'="'+n[i].escaped+'"';t+=(r?"/":"")+">",a[e]&&(t+="<![CDATA[\n")},end:function(e){a[e]&&(t+="\n]]>"),t+="</"+e+">"},chars:function(e){t+=e},comment:function(e){t+="<!--"+e+"-->"}}),t},this.HTMLtoDOM=function(e,t){var n=l("html,head,body,title"),r={link:"head",base:"head"};t?t=t.ownerDocument||t.getOwnerDocument&&t.getOwnerDocument()||t:typeof DOMDocument!="undefined"?t=new DOMDocument:typeof document!="undefined"&&document.implementation&&document.implementation.createDocument?t=document.implementation.createDocument("","",null):typeof ActiveX!="undefined"&&(t=new ActiveXObject("Msxml.DOMDocument"));var i=[],s=t.documentElement||t.getDocumentElement&&t.getDocumentElement();!s&&t.createElement&&function(){var e=t.createElement("html"),n=t.createElement("head");n.appendChild(t.createElement("title")),e.appendChild(n),e.appendChild(t.createElement("body")),t.appendChild(e)}();if(t.getElementsByTagName)for(var o in n)n[o]=t.getElementsByTagName(o)[0];var u=n.body;return f(e,{start:function(e,s,o){if(n[e]){u=n[e];return}var a=t.createElement(e);for(var f in s)a.setAttribute(s[f].name,s[f].value);r[e]&&typeof n[r[e]]!="boolean"?n[r[e]].appendChild(a):u&&u.appendChild&&u.appendChild(a),o||(i.push(a),u=a)},end:function(e){i.length-=1,u=i[i.length-1]},chars:function(e){u.appendChild(t.createTextNode(e))},comment:function(e){}}),t}}(),function(e){function a(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function f(e){return String(Object.prototype.toString.call(e))==="[object Array]"}function l(t,n){var r={},i,s;if(f(n))for(i=0,s=n.length;i<s;i++)r[n[i]]=!0;else r[n]=!0;for(i=0,s=t.length;i<s;i++)r[t[i]]!==e&&(t.splice(i,1),s--,i--);return t}var t=typeof module!="undefined"&&module.exports,n=function(e){return t?require("./"+e):window[e]},r=n("punycode"),i=n("IPv6"),s=n("SecondLevelDomains"),o=function(t,n){return this instanceof o?(t===e&&(t=location.href+""),this.href(t),n!==e?this.absoluteTo(n):this):new o(t)},u=o.prototype;o.idn_expression=/[^a-z0-9\.-]/i,o.punycode_expression=/(xn--)/i,o.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,o.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig,o.defaultPorts={http:"80",https:"443",ftp:"21"},o.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/,o.encode=encodeURIComponent,o.decode=decodeURIComponent,o.iso8859=function(){o.encode=escape,o.decode=unescape},o.unicode=function(){o.encode=encodeURIComponent,o.decode=decodeURIComponent},o.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}}},o.encodeQuery=function(e){return o.encode(e+"").replace(/%20/g,"+")},o.decodeQuery=function(e){return o.decode((e+"").replace(/\+/g,"%20"))},o.recodePath=function(e){var t=(e+"").split("/");for(var n=0,r=t.length;n<r;n++)t[n]=o.encodePathSegment(o.decode(t[n]));return t.join("/")},o.decodePath=function(e){var t=(e+"").split("/");for(var n=0,r=t.length;n<r;n++)t[n]=o.decodePathSegment(t[n]);return t.join("/")};var c={encode:"encode",decode:"decode"},h,p=function(e){return function(t){return o[e](t+"").replace(o.characters.pathname[e].expression,function(t){return o.characters.pathname[e].map[t]})}};for(h in c)o[h+"PathSegment"]=p(c[h]);o.parse=function(e){var t,n,r={};return t=e.indexOf("#"),t>-1&&(r.fragment=e.substring(t+1)||null,e=e.substring(0,t)),t=e.indexOf("?"),t>-1&&(r.query=e.substring(t+1)||null,e=e.substring(0,t)),e.substring(0,2)==="//"?(r.protocol="",e=e.substring(2),e=o.parseAuthority(e,r)):(t=e.indexOf(":"),t>-1&&(r.protocol=e.substring(0,t),e.substring(t+1,t+3)==="//"?(e=e.substring(t+3),e=o.parseAuthority(e,r)):(e=e.substring(t+1),r.urn=!0))),r.path=e,r},o.parseHost=function(e,t){var n=e.indexOf("/"),r;n===-1&&(n=e.length);if(e[0]==="["){var i=e.indexOf("]");t.hostname=e.substring(1,i)||null,t.port=e.substring(i+2,n)||null}else e.indexOf(":")!==e.lastIndexOf(":")?(t.hostname=e.substring(0,n)||null,t.port=null):(r=e.substring(0,n).split(":"),t.hostname=r[0]||null,t.port=r[1]||null);return t.hostname&&e.substring(n)[0]!=="/"&&(n++,e="/"+e),e.substring(n)||"/"},o.parseAuthority=function(e,t){return e=o.parseUserinfo(e,t),o.parseHost(e,t)},o.parseUserinfo=function(e,t){var n=e.indexOf("@"),r=e.indexOf("/"),i;return n>-1&&(r===-1||n<r)?(i=e.substring(0,n).split(":"),t.username=i[0]?o.decode(i[0]):null,t.password=i[1]?o.decode(i[1]):null,e=e.substring(n+1)):(t.username=null,t.password=null),e},o.parseQuery=function(e){if(!e)return{};e=e.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!e)return{};var t={},n=e.split("&"),r=n.length;for(var i=0;i<r;i++){var s=n[i].split("="),u=o.decodeQuery(s.shift()),a=s.length?o.decodeQuery(s.join("=")):null;t[u]?(typeof t[u]=="string"&&(t[u]=[t[u]]),t[u].push(a)):t[u]=a}return t},o.build=function(e){var t="";return e.protocol&&(t+=e.protocol+":"),!e.urn&&(t||e.hostname)&&(t+="//"),t+=o.buildAuthority(e)||"",typeof e.path=="string"&&(e.path[0]!=="/"&&typeof e.hostname=="string"&&(t+="/"),t+=e.path),typeof e.query=="string"&&(t+="?"+e.query),typeof e.fragment=="string"&&(t+="#"+e.fragment),t},o.buildHost=function(e){var t="";return e.hostname?(o.ip6_expression.test(e.hostname)?e.port?t+="["+e.hostname+"]:"+e.port:t+=e.hostname:(t+=e.hostname,e.port&&(t+=":"+e.port)),t):""},o.buildAuthority=function(e){return o.buildUserinfo(e)+o.buildHost(e)},o.buildUserinfo=function(e){var t="";return e.username&&(t+=o.encode(e.username),e.password&&(t+=":"+o.encode(e.password)),t+="@"),t},o.buildQuery=function(t,n){var r="";for(var i in t)if(Object.hasOwnProperty.call(t,i)&&i)if(f(t[i])){var s={};for(var u=0,a=t[i].length;u<a;u++)t[i][u]!==e&&s[t[i][u]+""]===e&&(r+="&"+o.buildQueryParameter(i,t[i][u]),n!==!0&&(s[t[i][u]+""]=!0))}else t[i]!==e&&(r+="&"+o.buildQueryParameter(i,t[i]));return r.substring(1)},o.buildQueryParameter=function(e,t){return o.encodeQuery(e)+(t!==null?"="+o.encodeQuery(t):"")},o.addQuery=function(t,n,r){if(typeof n=="object")for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&o.addQuery(t,i,n[i]);else{if(typeof n!="string")throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");if(t[n]===e){t[n]=r;return}typeof t[n]=="string"&&(t[n]=[t[n]]),f(r)||(r=[r]),t[n]=t[n].concat(r)}},o.removeQuery=function(t,n,r){if(f(n))for(var i=0,s=n.length;i<s;i++)t[n[i]]=e;else if(typeof n=="object")for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&o.removeQuery(t,u,n[u]);else{if(typeof n!="string")throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");r!==e?t[n]===r?t[n]=e:f(t[n])&&(t[n]=l(t[n],r)):t[n]=e}},o.commonPath=function(e,t){var n=Math.min(e.length,t.length),r;for(r=0;r<n;r++)if(e[r]!==t[r]){r--;break}return r<1?e[0]===t[0]&&e[0]==="/"?"/":"":(e[r]!=="/"&&(r=e.substring(0,r).lastIndexOf("/")),e.substring(0,r+1))},o.withinString=function(e,t){return e.replace(o.find_uri_expression,t)},o.ensureValidHostname=function(e){if(e.match(o.invalid_hostname_characters)){if(!r)throw new TypeError("Hostname '"+e+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(r.toASCII(e).match(o.invalid_hostname_characters))throw new TypeError("Hostname '"+e+"' contains characters other than [A-Z0-9.-]")}},u.build=function(t){if(t===!0)this._deferred_build=!0;else if(t===e||this._deferred_build)this._string=o.build(this._parts),this._deferred_build=!1;return this},u.toString=function(){return this.build(!1)._string},u.valueOf=function(){return this.toString()},c={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"},p=function(t){return function(n,r){return n===e?this._parts[t]||"":(this._parts[t]=n,this.build(!r),this)}};for(h in c)u[h]=p(c[h]);c={query:"?",fragment:"#"},p=function(t,n){return function(r,i){return r===e?this._parts[t]||"":(r!==null&&(r+="",r[0]===n&&(r=r.substring(1))),this._parts[t]=r,this.build(!i),this)}};for(h in c)u[h]=p(h,c[h]);c={search:["?","query"],hash:["#","fragment"]},p=function(e,t){return function(n,r){var i=this[e](n,r);return typeof i=="string"&&i.length?t+i:i}};for(h in c)u[h]=p(c[h][1],c[h][0]);u.pathname=function(t,n){if(t===e||t===!0){var r=this._parts.path||(this._parts.urn?"":"/");return t?o.decodePath(r):r}return this._parts.path=t?o.recodePath(t):"/",this.build(!n),this},u.path=u.pathname,u.href=function(t,n){if(t===e)return this.toString();this._string="",this._parts={protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null};var r=t instanceof o,i=typeof t=="object"&&(t.hostname||t.path),s;if(typeof t=="string")this._parts=o.parse(t);else{if(!r&&!i)throw new TypeError("invalid input");var u=r?t._parts:t;for(s in u)Object.hasOwnProperty.call(this._parts,s)&&(this._parts[s]=u[s])}return this.build(!n),this},u.is=function(e){var t=!1,n=!1,r=!1,i=!1,u=!1,a=!1,f=!1,l=!this._parts.urn;this._parts.hostname&&(l=!1,n=o.ip4_expression.test(this._parts.hostname),r=o.ip6_expression.test(this._parts.hostname),t=n||r,i=!t,u=i&&s&&s.has(this._parts.hostname),a=i&&o.idn_expression.test(this._parts.hostname),f=i&&o.punycode_expression.test(this._parts.hostname));switch(e.toLowerCase()){case"relative":return l;case"absolute":return!l;case"domain":case"name":return i;case"sld":return u;case"ip":return t;case"ip4":case"ipv4":case"inet4":return n;case"ip6":case"ipv6":case"inet6":return r;case"idn":return a;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":return f}return null};var d=u.protocol,v=u.port,m=u.hostname;u.protocol=function(t,n){if(t!==e&&t){t=t.replace(/:(\/\/)?$/,"");if(t.match(/[^a-zA-z0-9\.+-]/))throw new TypeError("Protocol '"+t+"' contains characters other than [A-Z0-9.+-]")}return d.call(this,t,n)},u.scheme=u.protocol,u.port=function(t,n){if(this._parts.urn)return t===e?"":this;if(t!==e){t===0&&(t=null);if(t){t+="",t[0]===":"&&(t=t.substring(1));if(t.match(/[^0-9]/))throw new TypeError("Port '"+t+"' contains characters other than [0-9]")}}return v.call(this,t,n)},u.hostname=function(t,n){if(this._parts.urn)return t===e?"":this;if(t!==e){var r={};o.parseHost(t,r),t=r.hostname}return m.call(this,t,n)},u.host=function(t,n){return this._parts.urn?t===e?"":this:t===e?this._parts.hostname?o.buildHost(this._parts):"":(o.parseHost(t,this._parts),this.build(!n),this)},u.authority=function(t,n){return this._parts.urn?t===e?"":this:t===e?this._parts.hostname?o.buildAuthority(this._parts):"":(o.parseAuthority(t,this._parts),this.build(!n),this)},u.userinfo=function(t,n){if(this._parts.urn)return t===e?"":this;if(t===e){if(!this._parts.username)return"";var r=o.buildUserinfo(this._parts);return r.substring(0,r.length-1)}return t[t.length-1]!=="@"&&(t+="@"),o.parseUserinfo(t,this._parts),this.build(!n),this},u.subdomain=function(t,n){if(this._parts.urn)return t===e?"":this;if(t===e){if(!this._parts.hostname||this.is("IP"))return"";var r=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,r)||""}var i=this._parts.hostname.length-this.domain().length,s=this._parts.hostname.substring(0,i),u=new RegExp("^"+a(s));return t&&t[t.length-1]!=="."&&(t+="."),t&&o.ensureValidHostname(t),this._parts.hostname=this._parts.hostname.replace(u,t),this.build(!n),this},u.domain=function(t,n){if(this._parts.urn)return t===e?"":this;typeof t=="boolean"&&(n=t,t=e);if(t===e){if(!this._parts.hostname||this.is("IP"))return"";var r=this._parts.hostname.match(/\./g);if(r&&r.length<2)return this._parts.hostname;var i=this._parts.hostname.length-this.tld(n).length-1;return i=this._parts.hostname.lastIndexOf(".",i-1)+1,this._parts.hostname.substring(i)||""}if(!t)throw new TypeError("cannot set domain empty");o.ensureValidHostname(t);if(!this._parts.hostname||this.is("IP"))this._parts.hostname=t;else{var s=new RegExp(a(this.domain())+"$");this._parts.hostname=this._parts.hostname.replace(s,t)}return this.build(!n),this},u.tld=function(t,n){if(this._parts.urn)return t===e?"":this;typeof t=="boolean"&&(n=t,t=e);if(t===e){if(!this._parts.hostname||this.is("IP"))return"";var r=this._parts.hostname.lastIndexOf("."),i=this._parts.hostname.substring(r+1);return n!==!0&&s&&s.list[i.toLowerCase()]?s.get(this._parts.hostname)||i:i}var o;if(!t)throw new TypeError("cannot set TLD empty");if(t.match(/[^a-zA-Z0-9-]/)){if(!s||!s.is(t))throw new TypeError("TLD '"+t+"' contains characters other than [A-Z0-9]");o=new RegExp(a(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(o,t)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");o=new RegExp(a(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(o,t)}return this.build(!n),this},u.directory=function(t,n){if(this._parts.urn)return t===e?"":this;if(t===e||t===!0){if(!this._parts.path&&!this._parts.hostname)return"";if(this._parts.path==="/")return"/";var r=this._parts.path.length-this.filename().length-1,i=this._parts.path.substring(0,r)||(this._parts.hostname?"/":"");return t?o.decodePath(i):i}var s=this._parts.path.length-this.filename().length,u=this._parts.path.substring(0,s),f=new RegExp("^"+a(u));return this.is("relative")||(t||(t="/"),t[0]!=="/"&&(t="/"+t)),t&&t[t.length-1]!=="/"&&(t+="/"),t=o.recodePath(t),this._parts.path=this._parts.path.replace(f,t),this.build(!n),this},u.filename=function(t,n){if(this._parts.urn)return t===e?"":this;if(t===e||t===!0){if(!this._parts.path||this._parts.path==="/")return"";var r=this._parts.path.lastIndexOf("/"),i=this._parts.path.substring(r+1);return t?o.decodePathSegment(i):i}var s=!1;t[0]==="/"&&(t=t.substring(1)),t.match(/\.?\//)&&(s=!0);var u=new RegExp(a(this.filename())+"$");return t=o.recodePath(t),this._parts.path=this._parts.path.replace(u,t),s?this.normalizePath(n):this.build(!n),this},u.suffix=function(t,n){if(this._parts.urn)return t===e?"":this;if(t===e||t===!0){if(!this._parts.path||this._parts.path==="/")return"";var r=this.filename(),i=r.lastIndexOf("."),s,u;return i===-1?"":(s=r.substring(i+1),u=/^[a-z0-9%]+$/i.test(s)?s:"",t?o.decodePathSegment(u):u)}t[0]==="."&&(t=t.substring(1));var f=this.suffix(),l;if(!f){if(!t)return this;this._parts.path+="."+o.recodePath(t)}else t?l=new RegExp(a(f)+"$"):l=new RegExp(a("."+f)+"$");return l&&(t=o.recodePath(t),this._parts.path=this._parts.path.replace(l,t)),this.build(!n),this};var g=u.query;u.query=function(t,n){return t===!0?o.parseQuery(this._parts.query):t!==e&&typeof t!="string"?(this._parts.query=o.buildQuery(t),this.build(!n),this):g.call(this,t,n)},u.addQuery=function(e,t,n){var r=o.parseQuery(this._parts.query);return o.addQuery(r,e,t),this._parts.query=o.buildQuery(r),typeof e!="string"&&(n=t),this.build(!n),this},u.removeQuery=function(e,t,n){var r=o.parseQuery(this._parts.query);return o.removeQuery(r,e,t),this._parts.query=o.buildQuery(r),typeof e!="string"&&(n=t),this.build(!n),this},u.addSearch=u.addQuery,u.removeSearch=u.removeQuery,u.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},u.normalizeProtocol=function(e){return typeof this._parts.protocol=="string"&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},u.normalizeHostname=function(e){return this._parts.hostname&&(this.is("IDN")&&r?this._parts.hostname=r.toASCII(this._parts.hostname):this.is("IPv6")&&i&&(this._parts.hostname=i.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!e)),this},u.normalizePort=function(e){return typeof this._parts.protocol=="string"&&this._parts.port===o.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},u.normalizePath=function(e){if(this._parts.urn)return this;if(!this._parts.path||this._parts.path==="/")return this;var t,n,r=this._parts.path,i,s;r[0]!=="/"&&(r[0]==="."&&(n=r.substring(0,r.indexOf("/"))),t=!0,r="/"+r),r=r.replace(/(\/(\.\/)+)|\/{2,}/g,"/");for(;;){i=r.indexOf("/../");if(i===-1)break;if(i===0){r=r.substring(3);break}s=r.substring(0,i).lastIndexOf("/"),s===-1&&(s=i),r=r.substring(0,s)+r.substring(i+3)}return t&&this.is("relative")&&(n?r=n+r:r=r.substring(1)),r=o.recodePath(r),this._parts.path=r,this.build(!e),this},u.normalizePathname=u.normalizePath,u.normalizeQuery=function(e){return typeof this._parts.query=="string"&&(this._parts.query.length?this.query(o.parseQuery(this._parts.query)):this._parts.query=null,this.build(!e)),this},u.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},u.normalizeSearch=u.normalizeQuery,u.normalizeHash=u.normalizeFragment,u.iso8859=function(){var e=o.encode,t=o.decode;return o.encode=escape,o.decode=decodeURIComponent,this.normalize(),o.encode=e,o.decode=t,this},u.unicode=function(){var e=o.encode,t=o.decode;return o.encode=encodeURIComponent,o.decode=unescape,this.normalize(),o.encode=e,o.decode=t,this},u.readable=function(){var t=new o(this);t.username("").password("").normalize();var n="";t._parts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&r?(n+=r.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t._parts.port)):n+=t.host()),t._parts.hostname&&t._parts.path&&t._parts.path[0]!=="/"&&(n+="/"),n+=t.path(!0);if(t._parts.query){var i="";for(var s=0,u=t._parts.query.split("&"),a=u.length;s<a;s++){var f=(u[s]||"").split("=");i+="&"+o.decodeQuery(f[0]).replace(/&/g,"%26"),f[1]!==e&&(i+="="+o.decodeQuery(f[1]).replace(/&/g,"%26"))}n+="?"+i.substring(1)}return n+=t.hash(),n},u.absoluteTo=function(e){if(this._parts.urn)throw new Error("URNs do not have any generally defined hierachical components");e instanceof o||(e=new o(e));var t=new o(this),n=["protocol","username","password","hostname","port"],r;for(var i=0,s;s=n[i];i++)t._parts[s]=e._parts[s];return t.path()[0]!=="/"&&(r=e.directory(),t._parts.path=(r?r+"/":"")+t._parts.path,t.normalizePath()),t.build(),t},u.relativeTo=function(e){if(this._parts.urn)throw new Error("URNs do not have any generally defined hierachical components");e instanceof o||(e=new o(e));if(this.path()[0]!=="/"||e.path()[0]!=="/")throw new Error("Cannot calculate common path from non-relative URLs");var t=new o(this),n=["protocol","username","password","hostname","port"],r=o.commonPath(t.path(),e.path()),i=e.directory();for(var s=0,u;u=n[s];s++)t._parts[u]=null;if(!r||r==="/")return t;if(i+"/"===r)t._parts.path="./"+t.filename();else{var f="../",l=new RegExp("^"+a(r)),c=i.replace(l,"/").match(/\//g).length-1;while(c--)f+="../";t._parts.path=t._parts.path.replace(l,f)}return t.build(),t},u.equals=function(e){var t=new o(this),n=new o(e),r={},i={},s={},u,a,l;t.normalize(),n.normalize();if(t.toString()===n.toString())return!0;u=t.query(),a=n.query(),t.query(""),n.query("");if(t.toString()!==n.toString())return!1;if(u.length!==a.length)return!1;r=o.parseQuery(u),i=o.parseQuery(a);for(l in r)if(Object.prototype.hasOwnProperty.call(r,l)){if(!f(r[l])){if(r[l]!==i[l])return!1}else{if(!f(i[l]))return!1;if(r[l].length!==i[l].length)return!1;r[l].sort(),i[l].sort();for(var c=0,h=r[l].length;c<h;c++)if(r[l][c]!==i[l][c])return!1}s[l]=!0}for(l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&!s[l])return!1;return!0},typeof module!="undefined"&&module.exports?module.exports=o:window.URI=o}(),window.rasterizeHTMLInline=function(e,t,n){"use strict";var r={};r.util={},r.util.cloneArray=function(e){return Array.prototype.slice.apply(e,[0])},r.util.joinUrl=function(e,n){var r=new t(n);return r.is("relative")&&(r=r.absoluteTo(e)),r.toString()},r.util.isDataUri=function(e){return/^data:/.test(e)},r.util.map=function(e,t,n){var i=0,s=r.util.cloneArray(e),o=[],u;s.length===0&&n(o);var a=function(e){function r(t){i+=1,o[e]=t,i===s.length&&n(o)}t(s[e],r)};for(u=0;u<s.length;u++)a(u)};var i=function(e){return e+"?_="+Date.now()};r.util.ajax=function(t,n,r,s){var o=new e.XMLHttpRequest,u;n=n||{},u=n.cache===!1?i(t):t,o.addEventListener("load",function(){o.status===200||o.status===0?r(o.response):s()},!1),o.addEventListener("error",function(){s()},!1),o.open("GET",u,!0),o.overrideMimeType(n.mimeType);try{o.send(null)}catch(a){s()}},r.util.binaryAjax=function(e,t,n,i){var s="";t=t||{},r.util.ajax(e,{mimeType:"text/plain; charset=x-user-defined",cache:t.cache},function(e){for(var t=0;t<e.length;t++)s+=String.fromCharCode(e.charCodeAt(t)&255);n(s)},i)};var s=function(e){var t=/^"(.*)"$/,n=/^'(.*)'$/;return t.test(e)?e.replace(t,"$1"):n.test(e)?e.replace(n,"$1"):e},o=function(e){var t=/^[\t\r\f\n ]*(.+?)[\t\r\f\n ]*$/;return e.replace(t,"$1")};r.util.extractCssUrl=function(e){var t=/^url\(([^\)]+)\)/,n;if(!t.test(e))throw new Error("Invalid url");return n=t.exec(e)[1],s(o(n))},r.util.getDataURIForImageURL=function(e,t,n,i){var s;r.util.binaryAjax(e,t,function(e){s=btoa(e),n("data:image/png;base64,"+s)},function(){i()})};var u=function(e,t){return t&&t!=="about:blank"&&(e=r.util.joinUrl(t,e)),e},a=function(e){var t=new n,r=t.parse(e,!1,!0);return r},f=function(t){var n=[],r,i,s;if(!t)return[];for(r=0;r<t.cssRules.length;r++){s=t.cssRules[r];if(s.type===e.kJscsspSTYLE_RULE)for(i=0;i<s.declarations.length;i++)s.declarations[i].property==="background-image"&&n.push(s.declarations[i])}return n},l=function(t){var n=[],r,i,s;if(!t)return[];for(r=0;r<t.cssRules.length;r++){s=t.cssRules[r];if(s.type===e.kJscsspFONT_FACE_RULE)for(i=0;i<s.descriptors.length;i++)s.descriptors[i].property==="src"&&n.push(s.descriptors[i])}return n},c=function(e){var t={},n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},h=function(e){return typeof e=="function"};r.util.parseOptionalParameters=function(){var e={options:{},callback:null};return h(arguments[0])?e.callback=arguments[0]:(e.options=c(arguments[0]),e.callback=arguments[1]||null),e};var p=function(e,t,n,i,s){var o=e.attributes.src.nodeValue,a=t||e.ownerDocument.baseURI;if(r.util.isDataUri(o)){i();return}o=u(o,a),r.util.getDataURIForImageURL(o,{cache:n},function(t){e.attributes.src.nodeValue=t,i()},function(){s(o)})},d=function(e){var t=[];return Array.prototype.forEach.call(e,function(e){e.type==="image"&&t.push(e)}),t};r.loadAndInlineImages=function(e,t,n){var i=r.util.parseOptionalParameters(t,n),s=e.getElementsByTagName("img"),o=e.getElementsByTagName("input"),u=i.options.baseUrl,a=i.options.cache!==!1,f=[],l=[];f=Array.prototype.slice.call(s),f=f.concat(d(o)),r.util.map(f,function(e,t){p(e,u,a,t,function(e){l.push({resourceType:"image",url:e}),t()})},function(){i.callback&&i.callback(l)})};var v=function(e,t){var n;try{n=r.util.extractCssUrl(t.values[0].cssText())}catch(i){return!1}return r.util.isDataUri(n)?!1:(n=r.util.joinUrl(e,n),t.values[0].setCssText('url("'+n+'")'),!0)},m=function(e,t){var n=a(t),r=[],i=!1,s;r=r.concat(f(n)),r=r.concat(l(n));for(s=0;s<r.length;s++)i=v(e,r[s])||i;return i?n.cssText():t},g=function(e,t){var n=e.parentNode,r;t=t.trim(),t&&(r=e.ownerDocument.createElement("style"),r.type="text/css",r.appendChild(e.ownerDocument.createTextNode(t)),n.insertBefore(r,e)),n.removeChild(e)},y=function(e,t,n,i,s){var o=e.attributes.href.nodeValue,a=t||e.ownerDocument.baseURI,f=u(o,a),l;r.util.ajax(f,{cache:n},function(e){l=m(o,e),i(l)},function(){s(f)})};r.loadAndInlineCSS=function(e,t,n){var i=r.util.parseOptionalParameters(t,n),s=e.getElementsByTagName("link"),o=i.options.baseUrl,u=i.options.cache!==!1,a=[];r.util.map(s,function(e,t){e.attributes.rel&&e.attributes.rel.nodeValue==="stylesheet"&&(!e.attributes.type||e.attributes.type.nodeValue==="text/css")?y(e,o,u,function(n){g(e,n+"\n"),t()},function(e){a.push({resourceType:"stylesheet",url:e}),t()}):t()},function(){i.callback&&i.callback(a)})};var b=function(t){var n=[],r,i;for(r=0;r<t.cssRules.length;r++)i=t.cssRules[r],i.type===e.kJscsspIMPORT_RULE&&n.push(i);return n},w=function(e){return{cssText:function(){return e}}},E=function(e,t,n){var r=m(t,n),i=w(r),s=e.parentStyleSheet,o=s.cssRules.indexOf(e);s.cssRules.splice(o,1,i)},S=function(e){var t=/^"(.*)"$/,n=/^'(.*)'$/;return t.test(e)||n.test(e)},x=function(e,t,n,i,o,a){var f=e.href,l,c;if(S(f))c=s(f);else try{c=r.util.extractCssUrl(f)}catch(h){o(!1);return}l=u(c,t);if(i.indexOf(l)>=0){E(e,c,""),o(!0,[]);return}i.push(l),r.util.ajax(l,{cache:n},function(r){T(r,t,n,i,function(t,n){E(e,c,t),o(!0,n)})},function(){a(l)})},T=function(e,t,n,i,s){var o=a(e),u=[],f;if(!o){s(e,u);return}f=b(o),r.util.map(f,function(e,r){x(e,t,n,i,function(e,t){u=u.concat(t),r(e)},function(e){u.push({resourceType:"stylesheet",url:e}),r()})},function(t){t.indexOf(!0)>=0&&(e=o.cssText().trim()),s(e,u)})},N=function(e,t,n,r,i){T(e.textContent,t,n,r,function(t,n){e.textContent!==t&&(e.childNodes[0].nodeValue=t),i(n)})};r.loadAndInlineCSSImports=function(e,t,n){var i=r.util.parseOptionalParameters(t,n),s=e.getElementsByTagName("style"),o=i.options.baseUrl||e.baseURI,u=i.options.cache!==!1,a=[],f=[];r.util.map(s,function(e,t){e.attributes.type&&e.attributes.type.nodeValue==="text/css"?N(e,o,u,f,function(e){a=a.concat(e),t()}):t()},function(){i.callback(a)})};var C=function(e,t,n,i,s){var o;try{o=r.util.extractCssUrl(e.values[0].cssText())}catch(a){i(!1);return}if(r.util.isDataUri(o)){i(!1);return}o=u(o,t),r.util.getDataURIForImageURL(o,{cache:n},function(t){e.values[0].setCssText('url("'+t+'")'),i(!0)},function(){s(o)})},k=function(e,t,n,i){var s=f(e),o=[],u;r.util.map(s,function(e,r){C(e,t,n,r,function(e){o.push({resourceType:"backgroundImage",url:e}),r()})},function(e){u=e.indexOf(!0)>=0,i(u,o)})},L=function(e,t,n,i,s){var o,a;try{o=r.util.extractCssUrl(e.values[0].cssText())}catch(f){i(!1);return}if(r.util.isDataUri(o)){i(!1);return}o=u(o,t),r.util.binaryAjax(o,{cache:n},function(t){a=btoa(t),e.values[0].setCssText('url("data:font/woff;base64,'+a+'")'),i(!0)},function(){s(o)})},A=function(e,t,n,i){var s=l(e),o=[],u;r.util.map(s,function(e,r){L(e,t,n,r,function(e){o.push({resourceType:"fontFace",url:e}),r()})},function(e){u=e.indexOf(!0)>=0,i(u,o)})},O=function(t,n){var r=f(n).length+l(n).length>0;return r&&e.navigator.userAgent.indexOf("WebKit")>=0?"span {}\n"+t:t},M=function(e,t,n,r){var i=e.textContent,s=t||e.ownerDocument.baseURI,o=a(i);k(o,s,n,function(t,u){A(o,s,n,function(n,s){if(t||n)i=o.cssText();i=O(i,o),e.childNodes[0].nodeValue=i,r(u.concat(s))})})};return r.loadAndInlineCSSReferences=function(e,t,n){var i=r.util.parseOptionalParameters(t,n),s=[],o=i.options.baseUrl,u=i.options.cache!==!1,a=e.getElementsByTagName("style");r.util.map(a,function(e,t){e.attributes.type&&e.attributes.type.nodeValue==="text/css"?M(e,o,u,function(e){s=s.concat(e),t()}):t()},function(){i.callback&&i.callback(s)})},r.inlineReferences=function(e,t,n){var i=[];r.loadAndInlineImages(e,t,function(s){i=i.concat(s),r.loadAndInlineCSS(e,t,function(s){i=i.concat(s),r.loadAndInlineCSSImports(e,t,function(s){i=i.concat(s),r.loadAndInlineCSSReferences(e,t,function(e){i=i.concat(e),n(i)})})})})},r}(window,URI,CSSParser),window.rasterizeHTML=function(e,t){"use strict";var n={},r=[];n.util={},n.util.getConstantUniqueIdFor=function(e){return r.indexOf(e)<0&&r.push(e),r.indexOf(e)},n.util.log=function(e){t.console&&t.console.log&&t.console.log(e)};var i=function(e){var t={},n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},s=function(e){return typeof e=="object"&&e!==null},o=function(e){return s(e)&&Object.prototype.toString.apply(e).match(/\[object (Canvas|HTMLCanvasElement)\]/i)},u=function(e){return typeof e=="function"};n.util.parseOptionalParameters=function(){var e={canvas:null,options:{},callback:null};return u(arguments[0])?e.callback=arguments[0]:arguments[0]==null||o(arguments[0])?(e.canvas=arguments[0]||null,u(arguments[1])?e.callback=arguments[1]:(e.options=i(arguments[1]),e.callback=arguments[2]||null)):(e.options=i(arguments[0]),e.callback=arguments[1]||null),e};var a=function(){return t.navigator.userAgent.indexOf("WebKit")>=0},f=function(e){var r;return e.documentElement.setAttribute("xmlns",e.documentElement.namespaceURI),r=(new t.XMLSerializer).serializeToString(e.documentElement),a()?t.HTMLtoXML?t.HTMLtoXML(r):(n.util.log("Looks like your browser needs htmlparser.js as workaround for writing XML. Please include it."),r):r},l=function(){if(t.navigator.userAgent.indexOf("WebKit")>=0&&t.navigator.userAgent.indexOf("Chrome")<0)return!1;if(t.BlobBuilder||t.MozBlobBuilder||t.WebKitBlobBuilder)return!0;if(t.Blob)try{return new t.Blob("<b></b>",{type:"text/xml"}),!0}catch(e){return!1}return!1},c=function(e){var n="image/svg+xml;charset=utf-8",r=t.BlobBuilder||t.MozBlobBuilder||t.WebKitBlobBuilder,i;return r?(i=new r,i.append(e),i.getBlob(n)):new t.Blob(e,{type:n})},h=function(e){var n=t.URL||t.webkitURL||t;return l()?n.createObjectURL(c(e)):"data:image/svg+xml;charset=utf-8,"+e},p=function(e){var n=t.URL||t.webkitURL||t;l()&&n.revokeObjectURL(e)},d=function(e,t){var n=e.getElementById(t);return n||(n=e.createElement("div"),n.style.visibility="hidden",n.style.width="0px",n.style.height="0px",n.style.position="absolute",n.style.top="-10000px",n.style.left="-10000px",n.id=t,e.getElementsByTagName("body")[0].appendChild(n)),n},v="rasterizeHTML_js_FirefoxWorkaround",m=function(e,r){var i=n.util.getConstantUniqueIdFor(e),s=r?r.ownerDocument:t.document,o=d(s,v+i);o.innerHTML=e,o.className=v},g=function(e,r){var i=n.util.getConstantUniqueIdFor(e),s=r?r.ownerDocument:t.document,o=s.getElementById(v+i);o&&o.parentNode.removeChild(o)};return n.getSvgForDocument=function(e,t,n){var r=f(e);return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+'<foreignObject width="100%" height="100%">'+r+"</foreignObject>"+"</svg>"},n.renderSvg=function(e,n,r,i){var s,o,u=function(){o.onload=null,o.onerror=null},a=function(){s&&p(s),g(e,n)};m(e,n),s=h(e),o=new t.Image,o.onload=function(){u(),a(),r(o)},o.onerror=function(){a(),i()},o.src=s},n.drawImageOnCanvas=function(e,t){try{t.getContext("2d").drawImage(e,0,0)}catch(n){return!1}return!0},n.drawDocument=function(t,r,i,s){var o=n.util.parseOptionalParameters(r,i,s),u=function(e){e.push({resourceType:"document"})},a=o.canvas?o.canvas.width:300,f=o.canvas?o.canvas.height:200,l=o.options.width!==undefined?o.options.width:a,c=o.options.height!==undefined?o.options.height:f;e.inlineReferences(t,o.options,function(e){var r=n.getSvgForDocument(t,l,c),i;n.renderSvg(r,o.canvas,function(t){o.canvas&&(i=n.drawImageOnCanvas(t,o.canvas),i||(u(e),t=null)),o.callback&&o.callback(t,e)},function(){u(e),o.callback&&o.callback(null,e)})})},n.drawHTML=function(e,r,i,s){var o=n.util.parseOptionalParameters(r,i,s),u=t.document.implementation.createHTMLDocument("");u.documentElement.innerHTML=e,n.drawDocument(u,o.canvas,o.options,o.callback)},n.drawURL=function(t,r,i,s){var o=n.util.parseOptionalParameters(r,i,s),u=o.options.cache;o.options.baseUrl=t,e.util.ajax(t,{cache:u},function(e){n.drawHTML(e,o.canvas,o.options,o.callback)},function(){o.callback&&o.callback(null,[{resourceType:"page",url:t}])})},n}(window.rasterizeHTMLInline,window);
(function (name, definition) {
  var root = this;
  if (typeof module !== 'undefined') {
    var Canvas = require('canvas');
    module.exports = definition(root, name, Canvas);
  } else if (typeof define === 'function' && typeof define.amd === 'object') {
    define(definition);
  } else {
    root[name] = definition(root, name);
  }
})('imagediff', function (root, name, Canvas) {

  var
    TYPE_ARRAY        = /\[object Array\]/i,
    TYPE_CANVAS       = /\[object (Canvas|HTMLCanvasElement)\]/i,
    TYPE_CONTEXT      = /\[object CanvasRenderingContext2D\]/i,
    TYPE_IMAGE        = /\[object (Image|HTMLImageElement)\]/i,
    TYPE_IMAGE_DATA   = /\[object ImageData\]/i,

    UNDEFINED         = 'undefined',

    canvas            = getCanvas(),
    context           = canvas.getContext('2d'),
    previous          = root[name],
    imagediff, jasmine;

  // Creation
  function getCanvas (width, height) {
    var
      canvas = Canvas ?
        new Canvas() :
        document.createElement('canvas');
    if (width) canvas.width = width;
    if (height) canvas.height = height;
    return canvas;
  }
  function getImageData (width, height) {
    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, width, height);
    return context.createImageData(width, height);
  }


  // Type Checking
  function isImage (object) {
    return isType(object, TYPE_IMAGE);
  }
  function isCanvas (object) {
    return isType(object, TYPE_CANVAS);
  }
  function isContext (object) {
    return isType(object, TYPE_CONTEXT);
  }
  function isImageData (object) {
    return !!(object &&
      isType(object, TYPE_IMAGE_DATA) &&
      typeof(object.width) !== UNDEFINED &&
      typeof(object.height) !== UNDEFINED &&
      typeof(object.data) !== UNDEFINED);
  }
  function isImageType (object) {
    return (
      isImage(object) ||
      isCanvas(object) ||
      isContext(object) ||
      isImageData(object)
    );
  }
  function isType (object, type) {
    return typeof (object) === 'object' && !!Object.prototype.toString.apply(object).match(type);
  }


  // Type Conversion
  function copyImageData (imageData) {
    var
      height = imageData.height,
      width = imageData.width,
      data = imageData.data,
      newImageData, newData, i;

    canvas.width = width;
    canvas.height = height;
    newImageData = context.getImageData(0, 0, width, height);
    newData = newImageData.data;

    for (i = imageData.data.length; i--;) {
        newData[i] = data[i];
    }

    return newImageData;
  }
  function toImageData (object) {
    if (isImage(object)) { return toImageDataFromImage(object); }
    if (isCanvas(object)) { return toImageDataFromCanvas(object); }
    if (isContext(object)) { return toImageDataFromContext(object); }
    if (isImageData(object)) { return object; }
  }
  function toImageDataFromImage (image) {
    var
      height = image.height,
      width = image.width;
    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, width, height);
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, width, height);
  }
  function toImageDataFromCanvas (canvas) {
    var
      height = canvas.height,
      width = canvas.width,
      context = canvas.getContext('2d');
    return context.getImageData(0, 0, width, height);
  }
  function toImageDataFromContext (context) {
    var
      canvas = context.canvas,
      height = canvas.height,
      width = canvas.width;
    return context.getImageData(0, 0, width, height);
  }
  function toCanvas (object) {
    var
      data = toImageData(object),
      canvas = getCanvas(data.width, data.height),
      context = canvas.getContext('2d');

    context.putImageData(data, 0, 0);
    return canvas;
  }


  // ImageData Equality Operators
  function equalWidth (a, b) {
    return a.width === b.width;
  }
  function equalHeight (a, b) {
    return a.height === b.height;
  }
  function equalDimensions (a, b) {
    return equalHeight(a, b) && equalWidth(a, b);
  }
  function equal (a, b, tolerance) {

    var
      aData     = a.data,
      bData     = b.data,
      length    = aData.length,
      i;

    tolerance = tolerance || 0;

    if (!equalDimensions(a, b)) return false;
    for (i = length; i--;) if (aData[i] !== bData[i] && Math.abs(aData[i] - bData[i]) > tolerance) return false;

    return true;
  }


  // Diff
  function diff (a, b) {
    return (equalDimensions(a, b) ? diffEqual : diffUnequal)(a, b);
  }
  function diffEqual (a, b) {

    var
      height  = a.height,
      width   = a.width,
      c       = getImageData(width, height), // c = a - b
      aData   = a.data,
      bData   = b.data,
      cData   = c.data,
      length  = cData.length,
      row, column,
      i, j, k, v;

    for (i = 0; i < length; i += 4) {
      cData[i] = Math.abs(aData[i] - bData[i]);
      cData[i+1] = Math.abs(aData[i+1] - bData[i+1]);
      cData[i+2] = Math.abs(aData[i+2] - bData[i+2]);
      cData[i+3] = Math.abs(255 - aData[i+3] - bData[i+3]);
    }

    return c;
  }
  function diffUnequal (a, b) {

    var
      height  = Math.max(a.height, b.height),
      width   = Math.max(a.width, b.width),
      c       = getImageData(width, height), // c = a - b
      aData   = a.data,
      bData   = b.data,
      cData   = c.data,
      rowOffset,
      columnOffset,
      row, column,
      i, j, k, v;


    for (i = cData.length - 1; i > 0; i = i - 4) {
      cData[i] = 255;
    }

    // Add First Image
    offsets(a);
    for (row = a.height; row--;){
      for (column = a.width; column--;) {
        i = 4 * ((row + rowOffset) * width + (column + columnOffset));
        j = 4 * (row * a.width + column);
        cData[i+0] = aData[j+0]; // r
        cData[i+1] = aData[j+1]; // g
        cData[i+2] = aData[j+2]; // b
        // cData[i+3] = aData[j+3]; // a
      }
    }

    // Subtract Second Image
    offsets(b);
    for (row = b.height; row--;){
      for (column = b.width; column--;) {
        i = 4 * ((row + rowOffset) * width + (column + columnOffset));
        j = 4 * (row * b.width + column);
        cData[i+0] = Math.abs(cData[i+0] - bData[j+0]); // r
        cData[i+1] = Math.abs(cData[i+1] - bData[j+1]); // g
        cData[i+2] = Math.abs(cData[i+2] - bData[j+2]); // b
      }
    }

    // Helpers
    function offsets (imageData) {
      rowOffset = Math.floor((height - imageData.height) / 2);
      columnOffset = Math.floor((width - imageData.width) / 2);
    }

    return c;
  }


  // Validation
  function checkType () {
    var i;
    for (i = 0; i < arguments.length; i++) {
      if (!isImageType(arguments[i])) {
        throw {
          name : 'ImageTypeError',
          message : 'Submitted object was not an image.'
        };
      }
    }
  }


  // Jasmine Matchers
  function get (element, content) {
    element = document.createElement(element);
    if (element && content) {
      element.innerHTML = content;
    }
    return element;
  }

  jasmine = {

    toBeImageData : function () {
      return imagediff.isImageData(this.actual);
    },

    toImageDiffEqual : function (expected, tolerance) {

      if (typeof (document) !== UNDEFINED) {
        this.message = function () {
          var
            div     = get('div'),
            a       = get('div', '<div>Actual:</div>'),
            b       = get('div', '<div>Expected:</div>'),
            c       = get('div', '<div>Diff:</div>'),
            diff    = imagediff.diff(this.actual, expected),
            canvas  = getCanvas(),
            context;

          canvas.height = diff.height;
          canvas.width  = diff.width;

          context = canvas.getContext('2d');
          context.putImageData(diff, 0, 0);

          a.appendChild(toCanvas(this.actual));
          b.appendChild(toCanvas(expected));
          c.appendChild(canvas);

          div.appendChild(a);
          div.appendChild(b);
          div.appendChild(c);

          return [
            div,
            "Expected not to be equal."
          ];
        };
      }

      return imagediff.equal(this.actual, expected, tolerance);
    }
  };


  // Image Output
  function imageDataToPNG (imageData, outputFile, callback) {

    var
      canvas = toCanvas(imageData),
      base64Data,
      decodedImage;

    callback = callback || Function;

    base64Data = canvas.toDataURL().replace(/^data:image\/\w+;base64,/,"");
    decodedImage = new Buffer(base64Data, 'base64');
    require('fs').writeFile(outputFile, decodedImage, callback);
  }


  // Definition
  imagediff = {

    createCanvas : getCanvas,
    createImageData : getImageData,

    isImage : isImage,
    isCanvas : isCanvas,
    isContext : isContext,
    isImageData : isImageData,
    isImageType : isImageType,

    toImageData : function (object) {
      checkType(object);
      if (isImageData(object)) { return copyImageData(object); }
      return toImageData(object);
    },

    equal : function (a, b, tolerance) {
      checkType(a, b);
      a = toImageData(a);
      b = toImageData(b);
      return equal(a, b, tolerance);
    },
    diff : function (a, b) {
      checkType(a, b);
      a = toImageData(a);
      b = toImageData(b);
      return diff(a, b);
    },

    jasmine : jasmine,

    // Compatibility
    noConflict : function () {
      root[name] = previous;
      return imagediff;
    }
  };

  if (typeof module !== 'undefined') {
    imagediff.imageDataToPNG = imageDataToPNG;
  }

  return imagediff;
});

window.csscritic = (function (module) {
    module.renderer = module.renderer || {};

    var getFileUrl = function (address) {
        var fs = require("fs");

        return address.indexOf("://") === -1 ? "file://" + fs.absolute(address) : address;
    };

    var getDataUriForBase64PNG = function (pngBase64) {
        return "data:image/png;base64," + pngBase64;
    };

    var getImageForUrl = function (url, successCallback, errorCallback) {
        var image = new window.Image();

        image.onload = function () {
            successCallback(image);
        };
        if (errorCallback) {
            image.onerror = errorCallback;
        }
        image.src = url;
    };

    var renderPage = function (page, successCallback, errorCallback) {
        var base64PNG, imgURI;

        base64PNG = page.renderBase64("PNG");
        imgURI = getDataUriForBase64PNG(base64PNG);

        getImageForUrl(imgURI, function (image) {
            successCallback(image);
        }, errorCallback);
    };

    module.renderer.phantomjsRenderer = function (pageUrl, width, height, successCallback, errorCallback) {
        var page = require("webpage").create(),
            errorneousResources = [],
            handleError = function () {
                if (errorCallback) {
                    errorCallback();
                }
            };

        page.onResourceReceived = function (response) {
            var protocol = response.url.substr(0, 7);

            if (response.stage === "end" &&
                ((protocol !== "file://" && response.status >= 400) ||
                    (protocol === "file://" && !response.headers.length))) {
                errorneousResources.push(response.url);
            }
        };

        page.viewportSize = {
            width: width,
            height: height
        };

        page.open(getFileUrl(pageUrl), function (status) {
            if (status === "success") {
                renderPage(page, function (image) {
                    successCallback(image, errorneousResources);
                }, handleError);
            } else {
                handleError();
            }
        });
    };

    module.renderer.getImageForPageUrl = module.renderer.phantomjsRenderer;
    return module;
}(window.csscritic || {}));

window.csscritic = (function (module) {
    module.storage = module.storage || {};
    module.filestorage = {};

    module.filestorage.options = {
        basePath: "./"
    };

    var filePathForKey = function (key) {
        return module.filestorage.options.basePath + key + ".json";
    };

    module.filestorage.storeReferenceImage = function (key, pageImage) {
        var fs = require("fs"),
            uri, dataObj;

        uri = module.util.getDataURIForImage(pageImage);
        dataObj = {
            referenceImageUri: uri
        };

        fs.write(filePathForKey(key), JSON.stringify(dataObj), "w");
    };

    module.filestorage.readReferenceImage = function (key, successCallback, errorCallback) {
        var fs = require("fs"),
            filePath = filePathForKey(key),
            dataObjString, dataObj;

        if (! fs.exists(filePath)) {
            errorCallback();
            return;
        }

        dataObjString = fs.read(filePath);
        try {
            dataObj = JSON.parse(dataObjString);
        } catch (e) {
            errorCallback();
            return;
        }

        if (dataObj.referenceImageUri) {
            module.util.getImageForUrl(dataObj.referenceImageUri, function (img) {
                successCallback(img);
            }, errorCallback);
        } else {
            errorCallback();
            return;
        }
    };

    module.storage.options = module.filestorage.options;
    module.storage.storeReferenceImage = module.filestorage.storeReferenceImage;
    module.storage.readReferenceImage = module.filestorage.readReferenceImage;
    return module;
}(window.csscritic || {}));

window.csscritic = (function (module, renderer, storage, window, imagediff) {
    var reporters = [];

    module.util = {};

    module.util.getDataURIForImage = function (image) {
        var canvas = window.document.createElement("canvas"),
            context = canvas.getContext("2d");

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        return canvas.toDataURL("image/png");
    };

    module.util.getImageForUrl = function (url, successCallback, errorCallback) {
        var image = new window.Image();

        image.onload = function () {
            successCallback(image);
        };
        if (errorCallback) {
            image.onerror = errorCallback;
        }
        image.src = url;
    };

    module.util.workAroundTransparencyIssueInFirefox = function (image, callback) {
        // Work around bug https://bugzilla.mozilla.org/show_bug.cgi?id=790468 where the content of a canvas
        //   drawn to another one will be slightly different if transparency is involved.
        // Here the reference image has been drawn to a canvas once (to serialize it to localStorage), while the
        //   image of the newly rendered page hasn't.  Solution: apply the same transformation to the second image, too.
        var dataUri;
        try {
            dataUri = module.util.getDataURIForImage(image);
        } catch (e) {
            // Fallback for Chrome & Safari
            callback(image);
            return;
        }

        module.util.getImageForUrl(dataUri, function (newImage) {
            callback(newImage);
        });
    };

    var buildReportResult = function (status, pageUrl, pageImage, referenceImage, erroneousPageUrls) {
        var result = {
                status: status,
                pageUrl: pageUrl,
                pageImage: pageImage
            };

        if (pageImage) {
            result.resizePageImage = function (width, height, callback) {
                renderer.getImageForPageUrl(pageUrl, width, height, function (image) {
                    result.pageImage = image;
                    callback(image);
                });
            };
            result.acceptPage = function () {
                storage.storeReferenceImage(pageUrl, result.pageImage);
            };
        }

        if (referenceImage) {
            result.referenceImage = referenceImage;
        }

        if (erroneousPageUrls && erroneousPageUrls.length) {
            result.erroneousPageUrls = erroneousPageUrls;
        }

        return result;
    };

    var report = function (status, pageUrl, pageImage, referenceImage, erroneousUrls) {
        var i, result;

        if (!reporters.length) {
            return;
        }

        result = buildReportResult(status, pageUrl, pageImage, referenceImage, erroneousUrls);

        for (i = 0; i < reporters.length; i++) {
            reporters[i].reportComparison(result);
        }
    };

    module.addReporter = function (reporter) {
        reporters.push(reporter);
    };

    module.clearReporters = function () {
        reporters = [];
    };

    var workaroundFirefoxResourcesSporadicallyMissing = function (htmlImage, referenceImage) {
        if (referenceImage) {
            // This does nothing meaningful for us, but seems to trigger Firefox to load any missing resources.
            imagediff.diff(htmlImage, referenceImage);
        }
    };

    var loadPageAndReportResult = function (pageUrl, pageWidth, pageHeight, referenceImage, callback) {

        renderer.getImageForPageUrl(pageUrl, pageWidth, pageHeight, function (htmlImage, erroneousUrls) {
            var isEqual, textualStatus;

            workaroundFirefoxResourcesSporadicallyMissing(htmlImage, referenceImage);

            module.util.workAroundTransparencyIssueInFirefox(htmlImage, function (adaptedHtmlImage) {
                if (referenceImage) {
                    isEqual = imagediff.equal(adaptedHtmlImage, referenceImage);
                    textualStatus = isEqual ? "passed" : "failed";
                } else {
                    textualStatus = "referenceMissing";
                }

                report(textualStatus, pageUrl, htmlImage, referenceImage, erroneousUrls);

                if (callback) {
                    callback(textualStatus);
                }
            });
        }, function () {
            var textualStatus = "error";

            report(textualStatus, pageUrl, null);

            if (callback) {
                callback(textualStatus);
            }
        });
    };

    module.compare = function (pageUrl, callback) {
        storage.readReferenceImage(pageUrl, function (referenceImage) {
            loadPageAndReportResult(pageUrl, referenceImage.width, referenceImage.height, referenceImage, callback);
        }, function () {
            loadPageAndReportResult(pageUrl, 800, 600, null, callback);
        });
    };

    return module;
}(window.csscritic || {}, window.csscritic.renderer, window.csscritic.storage, window, imagediff));

window.csscritic = (function (module, rasterizeHTMLInline, JsSHA) {

    module.signOffReporterUtil = {};

    var getFileUrl = function (address) {
        var fs;

        if (window.require) {
            fs = require("fs");

            return address.indexOf("://") === -1 ? "file://" + fs.absolute(address) : address;
        } else {
            return address;
        }
    };

    module.signOffReporterUtil.loadFullDocument = function (pageUrl, callback) {
        var absolutePageUrl = getFileUrl(pageUrl),
            doc = window.document.implementation.createHTMLDocument("");

        // TODO remove reference to rasterizeHTMLInline.util
        rasterizeHTMLInline.util.ajax(absolutePageUrl, {cache: false}, function (content) {
            doc.documentElement.innerHTML = content;

            rasterizeHTMLInline.inlineReferences(doc, {baseUrl: absolutePageUrl, cache: false}, function () {
                callback('<html>' +
                    doc.documentElement.innerHTML +
                    '</html>');
            });
        });
    };

    module.signOffReporterUtil.loadFingerprintJson = function (url, callback) {
        var absoluteUrl = getFileUrl(url);

        rasterizeHTMLInline.util.ajax(absoluteUrl, {cache: false}, function (content) {
            callback(JSON.parse(content));
        });
    };

    module.signOffReporterUtil.calculateFingerprint = function (content) {
        var shaObj = new JsSHA(content, "TEXT");

        return shaObj.getHash("SHA-224", "HEX");
    };

    var findPage = function (pageUrl, signedOffPages) {
        var signedOffPage = null;

        signedOffPages.forEach(function (entry) {
            if (entry.pageUrl === pageUrl) {
                signedOffPage = entry;
            }
        });

        return signedOffPage;
    };

    var acceptSignedOffPage = function (result, signedOffPages) {
        var signedOffPageEntry, actualFingerprint;

        if (result.status === "failed" || result.status === "referenceMissing") {
            signedOffPageEntry = findPage(result.pageUrl, signedOffPages);

            module.signOffReporterUtil.loadFullDocument(result.pageUrl, function (content) {
                actualFingerprint = module.signOffReporterUtil.calculateFingerprint(content);

                if (signedOffPageEntry) {
                    if (actualFingerprint === signedOffPageEntry.fingerprint) {
                        result.acceptPage();
                    } else {
                        console.log("Fingerprint does not match for " + result.pageUrl + ", current fingerprint " + actualFingerprint);
                    }
                } else {
                    console.log("No sign-off for " + result.pageUrl + ", current fingerprint " + actualFingerprint);
                }
            });
        }
    };

    module.SignOffReporter = function (signedOffPages) {
        return {
            reportComparison: function (result) {
                if (! Array.isArray(signedOffPages)) {
                    module.signOffReporterUtil.loadFingerprintJson(signedOffPages, function (json) {
                        acceptSignedOffPage(result, json);
                    });
                } else {
                    acceptSignedOffPage(result, signedOffPages);
                }
            }
        };
    };

    return module;
}(window.csscritic || {}, rasterizeHTMLInline, jsSHA));

window.csscritic = (function (module, window) {

    var ATTRIBUTES_TO_ANSI = {
            "off": 0,
            "bold": 1,
            "red": 31,
            "green": 32
        };

    var inColor = function (string, color) {
        var color_attributes = color && color.split("+"),
            ansi_string = "";

        if (!color_attributes) {
            return string;
        }

        color_attributes.forEach(function (colorAttr) {
            ansi_string += "\033[" + ATTRIBUTES_TO_ANSI[colorAttr] + "m";
        });
        ansi_string += string + "\033[" + ATTRIBUTES_TO_ANSI['off'] + "m";

        return ansi_string;
    };

    var statusColor = {
            passed: "green+bold",
            failed: "red+bold",
            error: "red+bold",
            referenceMissing: "red+bold"
        };

    var reportComparison = function (result) {
        var color = statusColor[result.status] || "",
            statusStr = inColor(result.status, color);

        window.console.log("Testing " + result.pageUrl + "... " + statusStr);
    };

    module.TerminalReporter = function () {
        return {
            reportComparison: reportComparison
        };
    };

    return module;
}(window.csscritic || {}, window));

window.csscritic = (function (module) {

    var reportComparison = function (result, basePath) {
        var targetImageFileName = getTargetName(result.pageUrl),
            targetImagePath = basePath + targetImageFileName,
            image = result.pageImage;

        renderUrlToFile(image.src, targetImagePath, image.width, image.height);
    };

    var getTargetName = function (filePath) {
        var fileName = filePath.substr(filePath.lastIndexOf("/")+1),
            stripEnding = ".html";

        if (fileName.substr(fileName.length - stripEnding.length) === stripEnding) {
            fileName = fileName.substr(0, fileName.length - stripEnding.length);
        }
        return fileName + ".png";
    };

    var renderUrlToFile = function (url, filePath, width, height) {
        var page = require("webpage").create();

        page.viewportSize = {
            width: width,
            height: height
        };

        page.open(url, function () {
            page.render(filePath);
        });
    };

    module.HtmlFileReporter = function (basePath) {
        basePath = basePath || "./";

        return {
            reportComparison: function (result) {
                return reportComparison(result, basePath);
            }
        };
    };

    return module;
}(window.csscritic || {}));

window.csscritic = (function (module) {
    var system = require("system");

    module.phantomjsRunner = {};

    var parseArguments = function (args) {
        var i = 0,
            arg, value,
            parsedArguments = {
                opts: {},
                args: []
            };

        while(i < args.length) {
            if (args[i][0] === "-") {
                arg = args[i];
                value = args[i+1];
                parsedArguments.opts[arg] = value;
                if (i + 1 < args.length) {
                    i += 1;
                } else {
                    throw new Error("Invalid arguments");
                }
            } else {
                arg = args[i];
                parsedArguments.args.push(arg);
            }
            i += 1;
        }

        return parsedArguments;
    };

    var runCompare = function (testDocuments, signedOffPages, doneHandler) {
        var finishedCount = 0;

        signedOffPages = signedOffPages || [];

        csscritic.addReporter(csscritic.SignOffReporter(signedOffPages));
        csscritic.addReporter(csscritic.TerminalReporter());
        csscritic.addReporter(csscritic.HtmlFileReporter());

        testDocuments.forEach(function (testDocument) {
            var passed = true;

            csscritic.compare(testDocument, function (status) {
                finishedCount += 1;
                passed = passed && (status === "passed");

                if (finishedCount === testDocuments.length) {
                    doneHandler(passed);
                }
            });
        });
    };

    module.phantomjsRunner.main = function () {
        var parsedArguments = parseArguments(system.args.slice(1)),
            signedOffPages = parsedArguments.opts['-f'];

        if (parsedArguments.args.length < 1) {
            console.log("CSS critic regression runner for PhantomJS");
            console.log("Usage: phantomjs-regressionrunner.js [-f SIGNED_OFF.json] A_DOCUMENT.html [ANOTHER_DOCUMENT.html ...]");
            phantom.exit(2);
        } else {
            runCompare(parsedArguments.args, signedOffPages, function (passed) {
                var ret = passed ? 0 : 1;

                // TODO wait for all reporters to finish their work
                setTimeout(function () {
                phantom.exit(ret);
                }, 1000);
            });
        }
    };

    return module;
}(window.csscritic || {}));

csscritic.phantomjsRunner.main();
