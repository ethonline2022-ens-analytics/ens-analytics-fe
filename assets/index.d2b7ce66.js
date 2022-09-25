import{bw as dn}from"./index.080263fe.js";import{d as kr,e as Tr,f as Sr,h as Nr,c as Ir,j as Rr,i as Fr,k as Lr,l as Mr,n as Ur,o as Pr,p as Dr,q as Or,t as $r,g as zr,u as Hr,v as Wr,w as qr,x as Yr,b as Vr,y as Kr,z as Qr,s as Jr,a as Gr,r as jr,m as Xr,A as Zr,B as eo,C as to,D as no}from"./mobile.79f552a1.js";function ro(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const pn="https://registry.walletconnect.com";function oo(){return pn+"/api/v2/wallets"}function io(){return pn+"/api/v2/dapps"}function _n(e,t="mobile"){var n;return{name:e.name||"",shortName:e.metadata.shortName||"",color:e.metadata.colors.primary||"",logo:(n=e.image_url.sm)!==null&&n!==void 0?n:"",universalLink:e[t].universal||"",deepLink:e[t].native||""}}function ao(e,t="mobile"){return Object.values(e).filter(n=>!!n[t].universal||!!n[t].native).map(n=>_n(n,t))}const lo=Object.freeze(Object.defineProperty({__proto__:null,detectEnv:kr,detectOS:Tr,isAndroid:Sr,isIOS:Nr,isMobile:Ir,isNode:Rr,isBrowser:Fr,getFromWindow:Lr,getFromWindowOrThrow:Mr,getDocumentOrThrow:Ur,getDocument:Pr,getNavigatorOrThrow:Dr,getNavigator:Or,getLocationOrThrow:$r,getLocation:zr,getCryptoOrThrow:Hr,getCrypto:Wr,getLocalStorageOrThrow:qr,getLocalStorage:Yr,getClientMeta:Vr,safeJsonParse:Kr,safeJsonStringify:Qr,setLocal:Jr,getLocal:Gr,removeLocal:jr,mobileLinkChoiceKey:Xr,formatIOSMobile:Zr,saveMobileLinkInfo:eo,getMobileRegistryEntry:to,getMobileLinkRegistry:no,getWalletRegistryUrl:oo,getDappRegistryUrl:io,formatMobileRegistryEntry:_n,formatMobileRegistry:ao},Symbol.toStringTag,{value:"Module"})),co=dn(lo);var Be={},uo=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},gn={},le={},fo={}.toString,mt=Array.isArray||function(e){return fo.call(e)=="[object Array]"},so=mt;function ho(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},e.foo()===42}catch{return!1}}I.TYPED_ARRAY_SUPPORT=ho();var $t=I.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function I(e,t,n){return!I.TYPED_ARRAY_SUPPORT&&!(this instanceof I)?new I(e,t,n):typeof e=="number"?mn(this,e):yo(this,e,t,n)}I.TYPED_ARRAY_SUPPORT&&(I.prototype.__proto__=Uint8Array.prototype,I.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&I[Symbol.species]===I&&Object.defineProperty(I,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}));function vt(e){if(e>=$t)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+$t.toString(16)+" bytes");return e|0}function po(e){return e!==e}function de(e,t){var n;return I.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(t),n.__proto__=I.prototype):(n=e,n===null&&(n=new I(t)),n.length=t),n}function mn(e,t){var n=de(e,t<0?0:vt(t)|0);if(!I.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)n[r]=0;return n}function _o(e,t){var n=wn(t)|0,r=de(e,n),a=r.write(t);return a!==n&&(r=r.slice(0,a)),r}function lt(e,t){for(var n=t.length<0?0:vt(t.length)|0,r=de(e,n),a=0;a<n;a+=1)r[a]=t[a]&255;return r}function go(e,t,n,r){if(n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");var a;return n===void 0&&r===void 0?a=new Uint8Array(t):r===void 0?a=new Uint8Array(t,n):a=new Uint8Array(t,n,r),I.TYPED_ARRAY_SUPPORT?a.__proto__=I.prototype:a=lt(e,a),a}function mo(e,t){if(I.isBuffer(t)){var n=vt(t.length)|0,r=de(e,n);return r.length===0||t.copy(r,0,0,n),r}if(t){if(typeof ArrayBuffer<"u"&&t.buffer instanceof ArrayBuffer||"length"in t)return typeof t.length!="number"||po(t.length)?de(e,0):lt(e,t);if(t.type==="Buffer"&&Array.isArray(t.data))return lt(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function vn(e,t){t=t||1/0;for(var n,r=e.length,a=null,l=[],u=0;u<r;++u){if(n=e.charCodeAt(u),n>55295&&n<57344){if(!a){if(n>56319){(t-=3)>-1&&l.push(239,191,189);continue}else if(u+1===r){(t-=3)>-1&&l.push(239,191,189);continue}a=n;continue}if(n<56320){(t-=3)>-1&&l.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(t-=3)>-1&&l.push(239,191,189);if(a=null,n<128){if((t-=1)<0)break;l.push(n)}else if(n<2048){if((t-=2)<0)break;l.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;l.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;l.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return l}function wn(e){if(I.isBuffer(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var t=e.length;return t===0?0:vn(e).length}function vo(e,t,n,r){for(var a=0;a<r&&!(a+n>=t.length||a>=e.length);++a)t[a+n]=e[a];return a}function wo(e,t,n,r){return vo(vn(t,e.length-n),e,n,r)}function yo(e,t,n,r){if(typeof t=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer?go(e,t,n,r):typeof t=="string"?_o(e,t):mo(e,t)}I.prototype.write=function(t,n,r){n===void 0?(r=this.length,n=0):r===void 0&&typeof n=="string"?(r=this.length,n=0):isFinite(n)&&(n=n|0,isFinite(r)?r=r|0:r=void 0);var a=this.length-n;if((r===void 0||r>a)&&(r=a),t.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");return wo(this,t,n,r)};I.prototype.slice=function(t,n){var r=this.length;t=~~t,n=n===void 0?r:~~n,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<t&&(n=t);var a;if(I.TYPED_ARRAY_SUPPORT)a=this.subarray(t,n),a.__proto__=I.prototype;else{var l=n-t;a=new I(l,void 0);for(var u=0;u<l;++u)a[u]=this[u+t]}return a};I.prototype.copy=function(t,n,r,a){if(r||(r=0),!a&&a!==0&&(a=this.length),n>=t.length&&(n=t.length),n||(n=0),a>0&&a<r&&(a=r),a===r||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),t.length-n<a-r&&(a=t.length-n+r);var l=a-r,u;if(this===t&&r<n&&n<a)for(u=l-1;u>=0;--u)t[u+n]=this[u+r];else if(l<1e3||!I.TYPED_ARRAY_SUPPORT)for(u=0;u<l;++u)t[u+n]=this[u+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+l),n);return l};I.prototype.fill=function(t,n,r){if(typeof t=="string"){if(typeof n=="string"?(n=0,r=this.length):typeof r=="string"&&(r=this.length),t.length===1){var a=t.charCodeAt(0);a<256&&(t=a)}}else typeof t=="number"&&(t=t&255);if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);var l;if(typeof t=="number")for(l=n;l<r;++l)this[l]=t;else{var u=I.isBuffer(t)?t:new I(t),c=u.length;for(l=0;l<r-n;++l)this[l+n]=u[l%c]}return this};I.concat=function(t,n){if(!so(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return de(null,0);var r;if(n===void 0)for(n=0,r=0;r<t.length;++r)n+=t[r].length;var a=mn(null,n),l=0;for(r=0;r<t.length;++r){var u=t[r];if(!I.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(a,l),l+=u.length}return a};I.byteLength=wn;I.prototype._isBuffer=!0;I.isBuffer=function(t){return!!(t!=null&&t._isBuffer)};le.alloc=function(e){var t=new I(e);return t.fill(0),t};le.from=function(e){return new I(e)};var K={},wt,bo=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];K.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};K.getSymbolTotalCodewords=function(t){return bo[t]};K.getBCHDigit=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t};K.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');wt=t};K.isKanjiModeEnabled=function(){return typeof wt<"u"};K.toSJIS=function(t){return wt(t)};var ze={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");var r=n.toLowerCase();switch(r){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,a){if(e.isValid(r))return r;try{return t(r)}catch{return a}}})(ze);function yn(){this.buffer=[],this.length=0}yn.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var xo=yn,zt=le;function ke(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=zt.alloc(e*e),this.reservedBit=zt.alloc(e*e)}ke.prototype.set=function(e,t,n,r){var a=e*this.size+t;this.data[a]=n,r&&(this.reservedBit[a]=!0)};ke.prototype.get=function(e,t){return this.data[e*this.size+t]};ke.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};ke.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Eo=ke,bn={};(function(e){var t=K.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];for(var a=Math.floor(r/7)+2,l=t(r),u=l===145?26:Math.ceil((l-13)/(2*a-2))*2,c=[l-7],h=1;h<a-1;h++)c[h]=c[h-1]-u;return c.push(6),c.reverse()},e.getPositions=function(r){for(var a=[],l=e.getRowColCoords(r),u=l.length,c=0;c<u;c++)for(var h=0;h<u;h++)c===0&&h===0||c===0&&h===u-1||c===u-1&&h===0||a.push([l[c],l[h]]);return a}})(bn);var xn={},Co=K.getSymbolSize,Ht=7;xn.getPositions=function(t){var n=Co(t);return[[0,0],[n-Ht,0],[0,n-Ht]]};var En={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(a){return a!=null&&a!==""&&!isNaN(a)&&a>=0&&a<=7},e.from=function(a){return e.isValid(a)?parseInt(a,10):void 0},e.getPenaltyN1=function(a){for(var l=a.size,u=0,c=0,h=0,_=null,d=null,m=0;m<l;m++){c=h=0,_=d=null;for(var y=0;y<l;y++){var E=a.get(m,y);E===_?c++:(c>=5&&(u+=t.N1+(c-5)),_=E,c=1),E=a.get(y,m),E===d?h++:(h>=5&&(u+=t.N1+(h-5)),d=E,h=1)}c>=5&&(u+=t.N1+(c-5)),h>=5&&(u+=t.N1+(h-5))}return u},e.getPenaltyN2=function(a){for(var l=a.size,u=0,c=0;c<l-1;c++)for(var h=0;h<l-1;h++){var _=a.get(c,h)+a.get(c,h+1)+a.get(c+1,h)+a.get(c+1,h+1);(_===4||_===0)&&u++}return u*t.N2},e.getPenaltyN3=function(a){for(var l=a.size,u=0,c=0,h=0,_=0;_<l;_++){c=h=0;for(var d=0;d<l;d++)c=c<<1&2047|a.get(_,d),d>=10&&(c===1488||c===93)&&u++,h=h<<1&2047|a.get(d,_),d>=10&&(h===1488||h===93)&&u++}return u*t.N3},e.getPenaltyN4=function(a){for(var l=0,u=a.data.length,c=0;c<u;c++)l+=a.data[c];var h=Math.abs(Math.ceil(l*100/u/5)-10);return h*t.N4};function n(r,a,l){switch(r){case e.Patterns.PATTERN000:return(a+l)%2===0;case e.Patterns.PATTERN001:return a%2===0;case e.Patterns.PATTERN010:return l%3===0;case e.Patterns.PATTERN011:return(a+l)%3===0;case e.Patterns.PATTERN100:return(Math.floor(a/2)+Math.floor(l/3))%2===0;case e.Patterns.PATTERN101:return a*l%2+a*l%3===0;case e.Patterns.PATTERN110:return(a*l%2+a*l%3)%2===0;case e.Patterns.PATTERN111:return(a*l%3+(a+l)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(a,l){for(var u=l.size,c=0;c<u;c++)for(var h=0;h<u;h++)l.isReserved(h,c)||l.xor(h,c,n(a,h,c))},e.getBestMask=function(a,l){for(var u=Object.keys(e.Patterns).length,c=0,h=1/0,_=0;_<u;_++){l(_),e.applyMask(_,a);var d=e.getPenaltyN1(a)+e.getPenaltyN2(a)+e.getPenaltyN3(a)+e.getPenaltyN4(a);e.applyMask(_,a),d<h&&(h=d,c=_)}return c}})(En);var He={},ie=ze,Fe=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Le=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];He.getBlocksCount=function(t,n){switch(n){case ie.L:return Fe[(t-1)*4+0];case ie.M:return Fe[(t-1)*4+1];case ie.Q:return Fe[(t-1)*4+2];case ie.H:return Fe[(t-1)*4+3];default:return}};He.getTotalCodewordsCount=function(t,n){switch(n){case ie.L:return Le[(t-1)*4+0];case ie.M:return Le[(t-1)*4+1];case ie.Q:return Le[(t-1)*4+2];case ie.H:return Le[(t-1)*4+3];default:return}};var Cn={},We={},An=le,ye=An.alloc(512),Ue=An.alloc(256);(function(){for(var t=1,n=0;n<255;n++)ye[n]=t,Ue[t]=n,t<<=1,t&256&&(t^=285);for(n=255;n<512;n++)ye[n]=ye[n-255]})();We.log=function(t){if(t<1)throw new Error("log("+t+")");return Ue[t]};We.exp=function(t){return ye[t]};We.mul=function(t,n){return t===0||n===0?0:ye[Ue[t]+Ue[n]]};(function(e){var t=le,n=We;e.mul=function(a,l){for(var u=t.alloc(a.length+l.length-1),c=0;c<a.length;c++)for(var h=0;h<l.length;h++)u[c+h]^=n.mul(a[c],l[h]);return u},e.mod=function(a,l){for(var u=t.from(a);u.length-l.length>=0;){for(var c=u[0],h=0;h<l.length;h++)u[h]^=n.mul(l[h],c);for(var _=0;_<u.length&&u[_]===0;)_++;u=u.slice(_)}return u},e.generateECPolynomial=function(a){for(var l=t.from([1]),u=0;u<a;u++)l=e.mul(l,[1,n.exp(u)]);return l}})(Cn);var Bn={},qe={};qe.byteLength=ko;qe.toByteArray=So;qe.fromByteArray=Ro;var X=[],Q=[],Ao=typeof Uint8Array<"u"?Uint8Array:Array,Ze="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var se=0,Bo=Ze.length;se<Bo;++se)X[se]=Ze[se],Q[Ze.charCodeAt(se)]=se;Q["-".charCodeAt(0)]=62;Q["_".charCodeAt(0)]=63;function kn(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function ko(e){var t=kn(e),n=t[0],r=t[1];return(n+r)*3/4-r}function To(e,t,n){return(t+n)*3/4-n}function So(e){var t,n=kn(e),r=n[0],a=n[1],l=new Ao(To(e,r,a)),u=0,c=a>0?r-4:r,h;for(h=0;h<c;h+=4)t=Q[e.charCodeAt(h)]<<18|Q[e.charCodeAt(h+1)]<<12|Q[e.charCodeAt(h+2)]<<6|Q[e.charCodeAt(h+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=t&255;return a===2&&(t=Q[e.charCodeAt(h)]<<2|Q[e.charCodeAt(h+1)]>>4,l[u++]=t&255),a===1&&(t=Q[e.charCodeAt(h)]<<10|Q[e.charCodeAt(h+1)]<<4|Q[e.charCodeAt(h+2)]>>2,l[u++]=t>>8&255,l[u++]=t&255),l}function No(e){return X[e>>18&63]+X[e>>12&63]+X[e>>6&63]+X[e&63]}function Io(e,t,n){for(var r,a=[],l=t;l<n;l+=3)r=(e[l]<<16&16711680)+(e[l+1]<<8&65280)+(e[l+2]&255),a.push(No(r));return a.join("")}function Ro(e){for(var t,n=e.length,r=n%3,a=[],l=16383,u=0,c=n-r;u<c;u+=l)a.push(Io(e,u,u+l>c?c:u+l));return r===1?(t=e[n-1],a.push(X[t>>2]+X[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],a.push(X[t>>10]+X[t>>4&63]+X[t<<2&63]+"=")),a.join("")}var yt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */yt.read=function(e,t,n,r,a){var l,u,c=a*8-r-1,h=(1<<c)-1,_=h>>1,d=-7,m=n?a-1:0,y=n?-1:1,E=e[t+m];for(m+=y,l=E&(1<<-d)-1,E>>=-d,d+=c;d>0;l=l*256+e[t+m],m+=y,d-=8);for(u=l&(1<<-d)-1,l>>=-d,d+=r;d>0;u=u*256+e[t+m],m+=y,d-=8);if(l===0)l=1-_;else{if(l===h)return u?NaN:(E?-1:1)*(1/0);u=u+Math.pow(2,r),l=l-_}return(E?-1:1)*u*Math.pow(2,l-r)};yt.write=function(e,t,n,r,a,l){var u,c,h,_=l*8-a-1,d=(1<<_)-1,m=d>>1,y=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=r?0:l-1,w=r?1:-1,k=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(c=isNaN(t)?1:0,u=d):(u=Math.floor(Math.log(t)/Math.LN2),t*(h=Math.pow(2,-u))<1&&(u--,h*=2),u+m>=1?t+=y/h:t+=y*Math.pow(2,1-m),t*h>=2&&(u++,h/=2),u+m>=d?(c=0,u=d):u+m>=1?(c=(t*h-1)*Math.pow(2,a),u=u+m):(c=t*Math.pow(2,m-1)*Math.pow(2,a),u=0));a>=8;e[n+E]=c&255,E+=w,c/=256,a-=8);for(u=u<<a|c,_+=a;_>0;e[n+E]=u&255,E+=w,u/=256,_-=8);e[n+E-w]|=k*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){var t=qe,n=yt,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=c,e.SlowBuffer=A,e.INSPECT_MAX_BYTES=50;var a=2147483647;e.kMaxLength=a,c.TYPED_ARRAY_SUPPORT=l(),!c.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function l(){try{var f=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(f,o),f.foo()===42}catch{return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(!!c.isBuffer(this))return this.byteOffset}});function u(f){if(f>a)throw new RangeError('The value "'+f+'" is invalid for option "size"');var o=new Uint8Array(f);return Object.setPrototypeOf(o,c.prototype),o}function c(f,o,i){if(typeof f=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return m(f)}return h(f,o,i)}c.poolSize=8192;function h(f,o,i){if(typeof f=="string")return y(f,o);if(ArrayBuffer.isView(f))return w(f);if(f==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f);if(j(f,ArrayBuffer)||f&&j(f.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(j(f,SharedArrayBuffer)||f&&j(f.buffer,SharedArrayBuffer)))return k(f,o,i);if(typeof f=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var s=f.valueOf&&f.valueOf();if(s!=null&&s!==f)return c.from(s,o,i);var p=T(f);if(p)return p;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof f[Symbol.toPrimitive]=="function")return c.from(f[Symbol.toPrimitive]("string"),o,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f)}c.from=function(f,o,i){return h(f,o,i)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function _(f){if(typeof f!="number")throw new TypeError('"size" argument must be of type number');if(f<0)throw new RangeError('The value "'+f+'" is invalid for option "size"')}function d(f,o,i){return _(f),f<=0?u(f):o!==void 0?typeof i=="string"?u(f).fill(o,i):u(f).fill(o):u(f)}c.alloc=function(f,o,i){return d(f,o,i)};function m(f){return _(f),u(f<0?0:B(f)|0)}c.allocUnsafe=function(f){return m(f)},c.allocUnsafeSlow=function(f){return m(f)};function y(f,o){if((typeof o!="string"||o==="")&&(o="utf8"),!c.isEncoding(o))throw new TypeError("Unknown encoding: "+o);var i=C(f,o)|0,s=u(i),p=s.write(f,o);return p!==i&&(s=s.slice(0,p)),s}function E(f){for(var o=f.length<0?0:B(f.length)|0,i=u(o),s=0;s<o;s+=1)i[s]=f[s]&255;return i}function w(f){if(j(f,Uint8Array)){var o=new Uint8Array(f);return k(o.buffer,o.byteOffset,o.byteLength)}return E(f)}function k(f,o,i){if(o<0||f.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(f.byteLength<o+(i||0))throw new RangeError('"length" is outside of buffer bounds');var s;return o===void 0&&i===void 0?s=new Uint8Array(f):i===void 0?s=new Uint8Array(f,o):s=new Uint8Array(f,o,i),Object.setPrototypeOf(s,c.prototype),s}function T(f){if(c.isBuffer(f)){var o=B(f.length)|0,i=u(o);return i.length===0||f.copy(i,0,0,o),i}if(f.length!==void 0)return typeof f.length!="number"||Xe(f.length)?u(0):E(f);if(f.type==="Buffer"&&Array.isArray(f.data))return E(f.data)}function B(f){if(f>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return f|0}function A(f){return+f!=f&&(f=0),c.alloc(+f)}c.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==c.prototype},c.compare=function(o,i){if(j(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),j(i,Uint8Array)&&(i=c.from(i,i.offset,i.byteLength)),!c.isBuffer(o)||!c.isBuffer(i))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===i)return 0;for(var s=o.length,p=i.length,g=0,v=Math.min(s,p);g<v;++g)if(o[g]!==i[g]){s=o[g],p=i[g];break}return s<p?-1:p<s?1:0},c.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(o,i){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return c.alloc(0);var s;if(i===void 0)for(i=0,s=0;s<o.length;++s)i+=o[s].length;var p=c.allocUnsafe(i),g=0;for(s=0;s<o.length;++s){var v=o[s];if(j(v,Uint8Array))g+v.length>p.length?c.from(v).copy(p,g):Uint8Array.prototype.set.call(p,v,g);else if(c.isBuffer(v))v.copy(p,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=v.length}return p};function C(f,o){if(c.isBuffer(f))return f.length;if(ArrayBuffer.isView(f)||j(f,ArrayBuffer))return f.byteLength;if(typeof f!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof f);var i=f.length,s=arguments.length>2&&arguments[2]===!0;if(!s&&i===0)return 0;for(var p=!1;;)switch(o){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return je(f).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return Pt(f).length;default:if(p)return s?-1:je(f).length;o=(""+o).toLowerCase(),p=!0}}c.byteLength=C;function b(f,o,i){var s=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,o>>>=0,i<=o))return"";for(f||(f="utf8");;)switch(f){case"hex":return fe(this,o,i);case"utf8":case"utf-8":return oe(this,o,i);case"ascii":return Je(this,o,i);case"latin1":case"binary":return Ge(this,o,i);case"base64":return W(this,o,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ne(this,o,i);default:if(s)throw new TypeError("Unknown encoding: "+f);f=(f+"").toLowerCase(),s=!0}}c.prototype._isBuffer=!0;function N(f,o,i){var s=f[o];f[o]=f[i],f[i]=s}c.prototype.swap16=function(){var o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var i=0;i<o;i+=2)N(this,i,i+1);return this},c.prototype.swap32=function(){var o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var i=0;i<o;i+=4)N(this,i,i+3),N(this,i+1,i+2);return this},c.prototype.swap64=function(){var o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var i=0;i<o;i+=8)N(this,i,i+7),N(this,i+1,i+6),N(this,i+2,i+5),N(this,i+3,i+4);return this},c.prototype.toString=function(){var o=this.length;return o===0?"":arguments.length===0?oe(this,0,o):b.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(o){if(!c.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:c.compare(this,o)===0},c.prototype.inspect=function(){var o="",i=e.INSPECT_MAX_BYTES;return o=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(o+=" ... "),"<Buffer "+o+">"},r&&(c.prototype[r]=c.prototype.inspect),c.prototype.compare=function(o,i,s,p,g){if(j(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),!c.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(i===void 0&&(i=0),s===void 0&&(s=o?o.length:0),p===void 0&&(p=0),g===void 0&&(g=this.length),i<0||s>o.length||p<0||g>this.length)throw new RangeError("out of range index");if(p>=g&&i>=s)return 0;if(p>=g)return-1;if(i>=s)return 1;if(i>>>=0,s>>>=0,p>>>=0,g>>>=0,this===o)return 0;for(var v=g-p,R=s-i,L=Math.min(v,R),P=this.slice(p,g),H=o.slice(i,s),D=0;D<L;++D)if(P[D]!==H[D]){v=P[D],R=H[D];break}return v<R?-1:R<v?1:0};function M(f,o,i,s,p){if(f.length===0)return-1;if(typeof i=="string"?(s=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,Xe(i)&&(i=p?0:f.length-1),i<0&&(i=f.length+i),i>=f.length){if(p)return-1;i=f.length-1}else if(i<0)if(p)i=0;else return-1;if(typeof o=="string"&&(o=c.from(o,s)),c.isBuffer(o))return o.length===0?-1:F(f,o,i,s,p);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?p?Uint8Array.prototype.indexOf.call(f,o,i):Uint8Array.prototype.lastIndexOf.call(f,o,i):F(f,[o],i,s,p);throw new TypeError("val must be string, number or Buffer")}function F(f,o,i,s,p){var g=1,v=f.length,R=o.length;if(s!==void 0&&(s=String(s).toLowerCase(),s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le")){if(f.length<2||o.length<2)return-1;g=2,v/=2,R/=2,i/=2}function L(Dt,Ot){return g===1?Dt[Ot]:Dt.readUInt16BE(Ot*g)}var P;if(p){var H=-1;for(P=i;P<v;P++)if(L(f,P)===L(o,H===-1?0:P-H)){if(H===-1&&(H=P),P-H+1===R)return H*g}else H!==-1&&(P-=P-H),H=-1}else for(i+R>v&&(i=v-R),P=i;P>=0;P--){for(var D=!0,Re=0;Re<R;Re++)if(L(f,P+Re)!==L(o,Re)){D=!1;break}if(D)return P}return-1}c.prototype.includes=function(o,i,s){return this.indexOf(o,i,s)!==-1},c.prototype.indexOf=function(o,i,s){return M(this,o,i,s,!0)},c.prototype.lastIndexOf=function(o,i,s){return M(this,o,i,s,!1)};function U(f,o,i,s){i=Number(i)||0;var p=f.length-i;s?(s=Number(s),s>p&&(s=p)):s=p;var g=o.length;s>g/2&&(s=g/2);for(var v=0;v<s;++v){var R=parseInt(o.substr(v*2,2),16);if(Xe(R))return v;f[i+v]=R}return v}function z(f,o,i,s){return Ie(je(o,f.length-i),f,i,s)}function O(f,o,i,s){return Ie(Cr(o),f,i,s)}function ee(f,o,i,s){return Ie(Pt(o),f,i,s)}function J(f,o,i,s){return Ie(Ar(o,f.length-i),f,i,s)}c.prototype.write=function(o,i,s,p){if(i===void 0)p="utf8",s=this.length,i=0;else if(s===void 0&&typeof i=="string")p=i,s=this.length,i=0;else if(isFinite(i))i=i>>>0,isFinite(s)?(s=s>>>0,p===void 0&&(p="utf8")):(p=s,s=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var g=this.length-i;if((s===void 0||s>g)&&(s=g),o.length>0&&(s<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");p||(p="utf8");for(var v=!1;;)switch(p){case"hex":return U(this,o,i,s);case"utf8":case"utf-8":return z(this,o,i,s);case"ascii":case"latin1":case"binary":return O(this,o,i,s);case"base64":return ee(this,o,i,s);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return J(this,o,i,s);default:if(v)throw new TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),v=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function W(f,o,i){return o===0&&i===f.length?t.fromByteArray(f):t.fromByteArray(f.slice(o,i))}function oe(f,o,i){i=Math.min(f.length,i);for(var s=[],p=o;p<i;){var g=f[p],v=null,R=g>239?4:g>223?3:g>191?2:1;if(p+R<=i){var L,P,H,D;switch(R){case 1:g<128&&(v=g);break;case 2:L=f[p+1],(L&192)===128&&(D=(g&31)<<6|L&63,D>127&&(v=D));break;case 3:L=f[p+1],P=f[p+2],(L&192)===128&&(P&192)===128&&(D=(g&15)<<12|(L&63)<<6|P&63,D>2047&&(D<55296||D>57343)&&(v=D));break;case 4:L=f[p+1],P=f[p+2],H=f[p+3],(L&192)===128&&(P&192)===128&&(H&192)===128&&(D=(g&15)<<18|(L&63)<<12|(P&63)<<6|H&63,D>65535&&D<1114112&&(v=D))}}v===null?(v=65533,R=1):v>65535&&(v-=65536,s.push(v>>>10&1023|55296),v=56320|v&1023),s.push(v),p+=R}return Qe(s)}var Se=4096;function Qe(f){var o=f.length;if(o<=Se)return String.fromCharCode.apply(String,f);for(var i="",s=0;s<o;)i+=String.fromCharCode.apply(String,f.slice(s,s+=Se));return i}function Je(f,o,i){var s="";i=Math.min(f.length,i);for(var p=o;p<i;++p)s+=String.fromCharCode(f[p]&127);return s}function Ge(f,o,i){var s="";i=Math.min(f.length,i);for(var p=o;p<i;++p)s+=String.fromCharCode(f[p]);return s}function fe(f,o,i){var s=f.length;(!o||o<0)&&(o=0),(!i||i<0||i>s)&&(i=s);for(var p="",g=o;g<i;++g)p+=Br[f[g]];return p}function Ne(f,o,i){for(var s=f.slice(o,i),p="",g=0;g<s.length-1;g+=2)p+=String.fromCharCode(s[g]+s[g+1]*256);return p}c.prototype.slice=function(o,i){var s=this.length;o=~~o,i=i===void 0?s:~~i,o<0?(o+=s,o<0&&(o=0)):o>s&&(o=s),i<0?(i+=s,i<0&&(i=0)):i>s&&(i=s),i<o&&(i=o);var p=this.subarray(o,i);return Object.setPrototypeOf(p,c.prototype),p};function $(f,o,i){if(f%1!==0||f<0)throw new RangeError("offset is not uint");if(f+o>i)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(o,i,s){o=o>>>0,i=i>>>0,s||$(o,i,this.length);for(var p=this[o],g=1,v=0;++v<i&&(g*=256);)p+=this[o+v]*g;return p},c.prototype.readUintBE=c.prototype.readUIntBE=function(o,i,s){o=o>>>0,i=i>>>0,s||$(o,i,this.length);for(var p=this[o+--i],g=1;i>0&&(g*=256);)p+=this[o+--i]*g;return p},c.prototype.readUint8=c.prototype.readUInt8=function(o,i){return o=o>>>0,i||$(o,1,this.length),this[o]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(o,i){return o=o>>>0,i||$(o,2,this.length),this[o]|this[o+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(o,i){return o=o>>>0,i||$(o,2,this.length),this[o]<<8|this[o+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(o,i){return o=o>>>0,i||$(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(o,i){return o=o>>>0,i||$(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])},c.prototype.readIntLE=function(o,i,s){o=o>>>0,i=i>>>0,s||$(o,i,this.length);for(var p=this[o],g=1,v=0;++v<i&&(g*=256);)p+=this[o+v]*g;return g*=128,p>=g&&(p-=Math.pow(2,8*i)),p},c.prototype.readIntBE=function(o,i,s){o=o>>>0,i=i>>>0,s||$(o,i,this.length);for(var p=i,g=1,v=this[o+--p];p>0&&(g*=256);)v+=this[o+--p]*g;return g*=128,v>=g&&(v-=Math.pow(2,8*i)),v},c.prototype.readInt8=function(o,i){return o=o>>>0,i||$(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]},c.prototype.readInt16LE=function(o,i){o=o>>>0,i||$(o,2,this.length);var s=this[o]|this[o+1]<<8;return s&32768?s|4294901760:s},c.prototype.readInt16BE=function(o,i){o=o>>>0,i||$(o,2,this.length);var s=this[o+1]|this[o]<<8;return s&32768?s|4294901760:s},c.prototype.readInt32LE=function(o,i){return o=o>>>0,i||$(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24},c.prototype.readInt32BE=function(o,i){return o=o>>>0,i||$(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]},c.prototype.readFloatLE=function(o,i){return o=o>>>0,i||$(o,4,this.length),n.read(this,o,!0,23,4)},c.prototype.readFloatBE=function(o,i){return o=o>>>0,i||$(o,4,this.length),n.read(this,o,!1,23,4)},c.prototype.readDoubleLE=function(o,i){return o=o>>>0,i||$(o,8,this.length),n.read(this,o,!0,52,8)},c.prototype.readDoubleBE=function(o,i){return o=o>>>0,i||$(o,8,this.length),n.read(this,o,!1,52,8)};function Y(f,o,i,s,p,g){if(!c.isBuffer(f))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>p||o<g)throw new RangeError('"value" argument is out of bounds');if(i+s>f.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(o,i,s,p){if(o=+o,i=i>>>0,s=s>>>0,!p){var g=Math.pow(2,8*s)-1;Y(this,o,i,s,g,0)}var v=1,R=0;for(this[i]=o&255;++R<s&&(v*=256);)this[i+R]=o/v&255;return i+s},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(o,i,s,p){if(o=+o,i=i>>>0,s=s>>>0,!p){var g=Math.pow(2,8*s)-1;Y(this,o,i,s,g,0)}var v=s-1,R=1;for(this[i+v]=o&255;--v>=0&&(R*=256);)this[i+v]=o/R&255;return i+s},c.prototype.writeUint8=c.prototype.writeUInt8=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,1,255,0),this[i]=o&255,i+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,2,65535,0),this[i]=o&255,this[i+1]=o>>>8,i+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,2,65535,0),this[i]=o>>>8,this[i+1]=o&255,i+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,4,4294967295,0),this[i+3]=o>>>24,this[i+2]=o>>>16,this[i+1]=o>>>8,this[i]=o&255,i+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,4,4294967295,0),this[i]=o>>>24,this[i+1]=o>>>16,this[i+2]=o>>>8,this[i+3]=o&255,i+4},c.prototype.writeIntLE=function(o,i,s,p){if(o=+o,i=i>>>0,!p){var g=Math.pow(2,8*s-1);Y(this,o,i,s,g-1,-g)}var v=0,R=1,L=0;for(this[i]=o&255;++v<s&&(R*=256);)o<0&&L===0&&this[i+v-1]!==0&&(L=1),this[i+v]=(o/R>>0)-L&255;return i+s},c.prototype.writeIntBE=function(o,i,s,p){if(o=+o,i=i>>>0,!p){var g=Math.pow(2,8*s-1);Y(this,o,i,s,g-1,-g)}var v=s-1,R=1,L=0;for(this[i+v]=o&255;--v>=0&&(R*=256);)o<0&&L===0&&this[i+v+1]!==0&&(L=1),this[i+v]=(o/R>>0)-L&255;return i+s},c.prototype.writeInt8=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,1,127,-128),o<0&&(o=255+o+1),this[i]=o&255,i+1},c.prototype.writeInt16LE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,2,32767,-32768),this[i]=o&255,this[i+1]=o>>>8,i+2},c.prototype.writeInt16BE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,2,32767,-32768),this[i]=o>>>8,this[i+1]=o&255,i+2},c.prototype.writeInt32LE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,4,2147483647,-2147483648),this[i]=o&255,this[i+1]=o>>>8,this[i+2]=o>>>16,this[i+3]=o>>>24,i+4},c.prototype.writeInt32BE=function(o,i,s){return o=+o,i=i>>>0,s||Y(this,o,i,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[i]=o>>>24,this[i+1]=o>>>16,this[i+2]=o>>>8,this[i+3]=o&255,i+4};function Lt(f,o,i,s,p,g){if(i+s>f.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function Mt(f,o,i,s,p){return o=+o,i=i>>>0,p||Lt(f,o,i,4),n.write(f,o,i,s,23,4),i+4}c.prototype.writeFloatLE=function(o,i,s){return Mt(this,o,i,!0,s)},c.prototype.writeFloatBE=function(o,i,s){return Mt(this,o,i,!1,s)};function Ut(f,o,i,s,p){return o=+o,i=i>>>0,p||Lt(f,o,i,8),n.write(f,o,i,s,52,8),i+8}c.prototype.writeDoubleLE=function(o,i,s){return Ut(this,o,i,!0,s)},c.prototype.writeDoubleBE=function(o,i,s){return Ut(this,o,i,!1,s)},c.prototype.copy=function(o,i,s,p){if(!c.isBuffer(o))throw new TypeError("argument should be a Buffer");if(s||(s=0),!p&&p!==0&&(p=this.length),i>=o.length&&(i=o.length),i||(i=0),p>0&&p<s&&(p=s),p===s||o.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),o.length-i<p-s&&(p=o.length-i+s);var g=p-s;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(i,s,p):Uint8Array.prototype.set.call(o,this.subarray(s,p),i),g},c.prototype.fill=function(o,i,s,p){if(typeof o=="string"){if(typeof i=="string"?(p=i,i=0,s=this.length):typeof s=="string"&&(p=s,s=this.length),p!==void 0&&typeof p!="string")throw new TypeError("encoding must be a string");if(typeof p=="string"&&!c.isEncoding(p))throw new TypeError("Unknown encoding: "+p);if(o.length===1){var g=o.charCodeAt(0);(p==="utf8"&&g<128||p==="latin1")&&(o=g)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(i<0||this.length<i||this.length<s)throw new RangeError("Out of range index");if(s<=i)return this;i=i>>>0,s=s===void 0?this.length:s>>>0,o||(o=0);var v;if(typeof o=="number")for(v=i;v<s;++v)this[v]=o;else{var R=c.isBuffer(o)?o:c.from(o,p),L=R.length;if(L===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(v=0;v<s-i;++v)this[v+i]=R[v%L]}return this};var xr=/[^+/0-9A-Za-z-_]/g;function Er(f){if(f=f.split("=")[0],f=f.trim().replace(xr,""),f.length<2)return"";for(;f.length%4!==0;)f=f+"=";return f}function je(f,o){o=o||1/0;for(var i,s=f.length,p=null,g=[],v=0;v<s;++v){if(i=f.charCodeAt(v),i>55295&&i<57344){if(!p){if(i>56319){(o-=3)>-1&&g.push(239,191,189);continue}else if(v+1===s){(o-=3)>-1&&g.push(239,191,189);continue}p=i;continue}if(i<56320){(o-=3)>-1&&g.push(239,191,189),p=i;continue}i=(p-55296<<10|i-56320)+65536}else p&&(o-=3)>-1&&g.push(239,191,189);if(p=null,i<128){if((o-=1)<0)break;g.push(i)}else if(i<2048){if((o-=2)<0)break;g.push(i>>6|192,i&63|128)}else if(i<65536){if((o-=3)<0)break;g.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((o-=4)<0)break;g.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return g}function Cr(f){for(var o=[],i=0;i<f.length;++i)o.push(f.charCodeAt(i)&255);return o}function Ar(f,o){for(var i,s,p,g=[],v=0;v<f.length&&!((o-=2)<0);++v)i=f.charCodeAt(v),s=i>>8,p=i%256,g.push(p),g.push(s);return g}function Pt(f){return t.toByteArray(Er(f))}function Ie(f,o,i,s){for(var p=0;p<s&&!(p+i>=o.length||p>=f.length);++p)o[p+i]=f[p];return p}function j(f,o){return f instanceof o||f!=null&&f.constructor!=null&&f.constructor.name!=null&&f.constructor.name===o.name}function Xe(f){return f!==f}var Br=function(){for(var f="0123456789abcdef",o=new Array(256),i=0;i<16;++i)for(var s=i*16,p=0;p<16;++p)o[s+p]=f[i]+f[p];return o}()})(Bn);var Wt=le,Tn=Cn,Fo=Bn.Buffer;function bt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}bt.prototype.initialize=function(t){this.degree=t,this.genPoly=Tn.generateECPolynomial(this.degree)};bt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var n=Wt.alloc(this.degree),r=Fo.concat([t,n],t.length+this.degree),a=Tn.mod(r,this.genPoly),l=this.degree-a.length;if(l>0){var u=Wt.alloc(this.degree);return a.copy(u,l),u}return a};var Lo=bt,Sn={},ce={},xt={};xt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Z={},Nn="[0-9]+",Mo="[A-Z $%*+\\-./:]+",Ee="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ee=Ee.replace(/u/g,"\\u");var Uo="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ee+`)(?:.|[\r
]))+`;Z.KANJI=new RegExp(Ee,"g");Z.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Z.BYTE=new RegExp(Uo,"g");Z.NUMERIC=new RegExp(Nn,"g");Z.ALPHANUMERIC=new RegExp(Mo,"g");var Po=new RegExp("^"+Ee+"$"),Do=new RegExp("^"+Nn+"$"),Oo=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Z.testKanji=function(t){return Po.test(t)};Z.testNumeric=function(t){return Do.test(t)};Z.testAlphanumeric=function(t){return Oo.test(t)};(function(e){var t=xt,n=Z;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(l,u){if(!l.ccBits)throw new Error("Invalid mode: "+l);if(!t.isValid(u))throw new Error("Invalid version: "+u);return u>=1&&u<10?l.ccBits[0]:u<27?l.ccBits[1]:l.ccBits[2]},e.getBestModeForData=function(l){return n.testNumeric(l)?e.NUMERIC:n.testAlphanumeric(l)?e.ALPHANUMERIC:n.testKanji(l)?e.KANJI:e.BYTE},e.toString=function(l){if(l&&l.id)return l.id;throw new Error("Invalid mode")},e.isValid=function(l){return l&&l.bit&&l.ccBits};function r(a){if(typeof a!="string")throw new Error("Param is not a string");var l=a.toLowerCase();switch(l){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+a)}}e.from=function(l,u){if(e.isValid(l))return l;try{return r(l)}catch{return u}}})(ce);(function(e){var t=K,n=He,r=ze,a=ce,l=xt,u=mt,c=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,h=t.getBCHDigit(c);function _(E,w,k){for(var T=1;T<=40;T++)if(w<=e.getCapacity(T,k,E))return T}function d(E,w){return a.getCharCountIndicator(E,w)+4}function m(E,w){var k=0;return E.forEach(function(T){var B=d(T.mode,w);k+=B+T.getBitsLength()}),k}function y(E,w){for(var k=1;k<=40;k++){var T=m(E,k);if(T<=e.getCapacity(k,w,a.MIXED))return k}}e.from=function(w,k){return l.isValid(w)?parseInt(w,10):k},e.getCapacity=function(w,k,T){if(!l.isValid(w))throw new Error("Invalid QR Code version");typeof T>"u"&&(T=a.BYTE);var B=t.getSymbolTotalCodewords(w),A=n.getTotalCodewordsCount(w,k),C=(B-A)*8;if(T===a.MIXED)return C;var b=C-d(T,w);switch(T){case a.NUMERIC:return Math.floor(b/10*3);case a.ALPHANUMERIC:return Math.floor(b/11*2);case a.KANJI:return Math.floor(b/13);case a.BYTE:default:return Math.floor(b/8)}},e.getBestVersionForData=function(w,k){var T,B=r.from(k,r.M);if(u(w)){if(w.length>1)return y(w,B);if(w.length===0)return 1;T=w[0]}else T=w;return _(T.mode,T.getLength(),B)},e.getEncodedBits=function(w){if(!l.isValid(w)||w<7)throw new Error("Invalid QR Code version");for(var k=w<<12;t.getBCHDigit(k)-h>=0;)k^=c<<t.getBCHDigit(k)-h;return w<<12|k}})(Sn);var In={},ct=K,Rn=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,$o=1<<14|1<<12|1<<10|1<<4|1<<1,qt=ct.getBCHDigit(Rn);In.getEncodedBits=function(t,n){for(var r=t.bit<<3|n,a=r<<10;ct.getBCHDigit(a)-qt>=0;)a^=Rn<<ct.getBCHDigit(a)-qt;return(r<<10|a)^$o};var Fn={},zo=ce;function pe(e){this.mode=zo.NUMERIC,this.data=e.toString()}pe.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};pe.prototype.getLength=function(){return this.data.length};pe.prototype.getBitsLength=function(){return pe.getBitsLength(this.data.length)};pe.prototype.write=function(t){var n,r,a;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),a=parseInt(r,10),t.put(a,10);var l=this.data.length-n;l>0&&(r=this.data.substr(n),a=parseInt(r,10),t.put(a,l*3+1))};var Ho=pe,Wo=ce,et=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function _e(e){this.mode=Wo.ALPHANUMERIC,this.data=e}_e.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};_e.prototype.getLength=function(){return this.data.length};_e.prototype.getBitsLength=function(){return _e.getBitsLength(this.data.length)};_e.prototype.write=function(t){var n;for(n=0;n+2<=this.data.length;n+=2){var r=et.indexOf(this.data[n])*45;r+=et.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(et.indexOf(this.data[n]),6)};var qo=_e,Yo=le,Vo=ce;function ge(e){this.mode=Vo.BYTE,this.data=Yo.from(e)}ge.getBitsLength=function(t){return t*8};ge.prototype.getLength=function(){return this.data.length};ge.prototype.getBitsLength=function(){return ge.getBitsLength(this.data.length)};ge.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var Ko=ge,Qo=ce,Jo=K;function me(e){this.mode=Qo.KANJI,this.data=e}me.getBitsLength=function(t){return t*13};me.prototype.getLength=function(){return this.data.length};me.prototype.getBitsLength=function(){return me.getBitsLength(this.data.length)};me.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=Jo.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var Go=me,Ln={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,r,a){var l={},u={};u[r]=0;var c=t.PriorityQueue.make();c.push(r,0);for(var h,_,d,m,y,E,w,k,T;!c.empty();){h=c.pop(),_=h.value,m=h.cost,y=n[_]||{};for(d in y)y.hasOwnProperty(d)&&(E=y[d],w=m+E,k=u[d],T=typeof u[d]>"u",(T||k>w)&&(u[d]=w,c.push(d,w),l[d]=_))}if(typeof a<"u"&&typeof u[a]>"u"){var B=["Could not find a path from ",r," to ",a,"."].join("");throw new Error(B)}return l},extract_shortest_path_from_predecessor_list:function(n,r){for(var a=[],l=r;l;)a.push(l),n[l],l=n[l];return a.reverse(),a},find_path:function(n,r,a){var l=t.single_source_shortest_paths(n,r,a);return t.extract_shortest_path_from_predecessor_list(l,a)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,a={},l;n=n||{};for(l in r)r.hasOwnProperty(l)&&(a[l]=r[l]);return a.queue=[],a.sorter=n.sorter||r.default_sorter,a},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var a={value:n,cost:r};this.queue.push(a),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Ln);(function(e){var t=ce,n=Ho,r=qo,a=Ko,l=Go,u=Z,c=K,h=Ln.exports;function _(B){return unescape(encodeURIComponent(B)).length}function d(B,A,C){for(var b=[],N;(N=B.exec(C))!==null;)b.push({data:N[0],index:N.index,mode:A,length:N[0].length});return b}function m(B){var A=d(u.NUMERIC,t.NUMERIC,B),C=d(u.ALPHANUMERIC,t.ALPHANUMERIC,B),b,N;c.isKanjiModeEnabled()?(b=d(u.BYTE,t.BYTE,B),N=d(u.KANJI,t.KANJI,B)):(b=d(u.BYTE_KANJI,t.BYTE,B),N=[]);var M=A.concat(C,b,N);return M.sort(function(F,U){return F.index-U.index}).map(function(F){return{data:F.data,mode:F.mode,length:F.length}})}function y(B,A){switch(A){case t.NUMERIC:return n.getBitsLength(B);case t.ALPHANUMERIC:return r.getBitsLength(B);case t.KANJI:return l.getBitsLength(B);case t.BYTE:return a.getBitsLength(B)}}function E(B){return B.reduce(function(A,C){var b=A.length-1>=0?A[A.length-1]:null;return b&&b.mode===C.mode?(A[A.length-1].data+=C.data,A):(A.push(C),A)},[])}function w(B){for(var A=[],C=0;C<B.length;C++){var b=B[C];switch(b.mode){case t.NUMERIC:A.push([b,{data:b.data,mode:t.ALPHANUMERIC,length:b.length},{data:b.data,mode:t.BYTE,length:b.length}]);break;case t.ALPHANUMERIC:A.push([b,{data:b.data,mode:t.BYTE,length:b.length}]);break;case t.KANJI:A.push([b,{data:b.data,mode:t.BYTE,length:_(b.data)}]);break;case t.BYTE:A.push([{data:b.data,mode:t.BYTE,length:_(b.data)}])}}return A}function k(B,A){for(var C={},b={start:{}},N=["start"],M=0;M<B.length;M++){for(var F=B[M],U=[],z=0;z<F.length;z++){var O=F[z],ee=""+M+z;U.push(ee),C[ee]={node:O,lastCount:0},b[ee]={};for(var J=0;J<N.length;J++){var W=N[J];C[W]&&C[W].node.mode===O.mode?(b[W][ee]=y(C[W].lastCount+O.length,O.mode)-y(C[W].lastCount,O.mode),C[W].lastCount+=O.length):(C[W]&&(C[W].lastCount=O.length),b[W][ee]=y(O.length,O.mode)+4+t.getCharCountIndicator(O.mode,A))}}N=U}for(J=0;J<N.length;J++)b[N[J]].end=0;return{map:b,table:C}}function T(B,A){var C,b=t.getBestModeForData(B);if(C=t.from(A,b),C!==t.BYTE&&C.bit<b.bit)throw new Error('"'+B+'" cannot be encoded with mode '+t.toString(C)+`.
 Suggested mode is: `+t.toString(b));switch(C===t.KANJI&&!c.isKanjiModeEnabled()&&(C=t.BYTE),C){case t.NUMERIC:return new n(B);case t.ALPHANUMERIC:return new r(B);case t.KANJI:return new l(B);case t.BYTE:return new a(B)}}e.fromArray=function(A){return A.reduce(function(C,b){return typeof b=="string"?C.push(T(b,null)):b.data&&C.push(T(b.data,b.mode)),C},[])},e.fromString=function(A,C){for(var b=m(A,c.isKanjiModeEnabled()),N=w(b),M=k(N,C),F=h.find_path(M.map,"start","end"),U=[],z=1;z<F.length-1;z++)U.push(M.table[F[z]].node);return e.fromArray(E(U))},e.rawSplit=function(A){return e.fromArray(m(A,c.isKanjiModeEnabled()))}})(Fn);var Yt=le,Ye=K,tt=ze,jo=xo,Xo=Eo,Zo=bn,ei=xn,ut=En,ft=He,ti=Lo,Pe=Sn,ni=In,ri=ce,nt=Fn,oi=mt;function ii(e,t){for(var n=e.size,r=ei.getPositions(t),a=0;a<r.length;a++)for(var l=r[a][0],u=r[a][1],c=-1;c<=7;c++)if(!(l+c<=-1||n<=l+c))for(var h=-1;h<=7;h++)u+h<=-1||n<=u+h||(c>=0&&c<=6&&(h===0||h===6)||h>=0&&h<=6&&(c===0||c===6)||c>=2&&c<=4&&h>=2&&h<=4?e.set(l+c,u+h,!0,!0):e.set(l+c,u+h,!1,!0))}function ai(e){for(var t=e.size,n=8;n<t-8;n++){var r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function li(e,t){for(var n=Zo.getPositions(t),r=0;r<n.length;r++)for(var a=n[r][0],l=n[r][1],u=-2;u<=2;u++)for(var c=-2;c<=2;c++)u===-2||u===2||c===-2||c===2||u===0&&c===0?e.set(a+u,l+c,!0,!0):e.set(a+u,l+c,!1,!0)}function ci(e,t){for(var n=e.size,r=Pe.getEncodedBits(t),a,l,u,c=0;c<18;c++)a=Math.floor(c/3),l=c%3+n-8-3,u=(r>>c&1)===1,e.set(a,l,u,!0),e.set(l,a,u,!0)}function rt(e,t,n){var r=e.size,a=ni.getEncodedBits(t,n),l,u;for(l=0;l<15;l++)u=(a>>l&1)===1,l<6?e.set(l,8,u,!0):l<8?e.set(l+1,8,u,!0):e.set(r-15+l,8,u,!0),l<8?e.set(8,r-l-1,u,!0):l<9?e.set(8,15-l-1+1,u,!0):e.set(8,15-l-1,u,!0);e.set(r-8,8,1,!0)}function ui(e,t){for(var n=e.size,r=-1,a=n-1,l=7,u=0,c=n-1;c>0;c-=2)for(c===6&&c--;;){for(var h=0;h<2;h++)if(!e.isReserved(a,c-h)){var _=!1;u<t.length&&(_=(t[u]>>>l&1)===1),e.set(a,c-h,_),l--,l===-1&&(u++,l=7)}if(a+=r,a<0||n<=a){a-=r,r=-r;break}}}function fi(e,t,n){var r=new jo;n.forEach(function(_){r.put(_.mode.bit,4),r.put(_.getLength(),ri.getCharCountIndicator(_.mode,e)),_.write(r)});var a=Ye.getSymbolTotalCodewords(e),l=ft.getTotalCodewordsCount(e,t),u=(a-l)*8;for(r.getLengthInBits()+4<=u&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);for(var c=(u-r.getLengthInBits())/8,h=0;h<c;h++)r.put(h%2?17:236,8);return si(r,e,t)}function si(e,t,n){for(var r=Ye.getSymbolTotalCodewords(t),a=ft.getTotalCodewordsCount(t,n),l=r-a,u=ft.getBlocksCount(t,n),c=r%u,h=u-c,_=Math.floor(r/u),d=Math.floor(l/u),m=d+1,y=_-d,E=new ti(y),w=0,k=new Array(u),T=new Array(u),B=0,A=Yt.from(e.buffer),C=0;C<u;C++){var b=C<h?d:m;k[C]=A.slice(w,w+b),T[C]=E.encode(k[C]),w+=b,B=Math.max(B,b)}var N=Yt.alloc(r),M=0,F,U;for(F=0;F<B;F++)for(U=0;U<u;U++)F<k[U].length&&(N[M++]=k[U][F]);for(F=0;F<y;F++)for(U=0;U<u;U++)N[M++]=T[U][F];return N}function hi(e,t,n,r){var a;if(oi(e))a=nt.fromArray(e);else if(typeof e=="string"){var l=t;if(!l){var u=nt.rawSplit(e);l=Pe.getBestVersionForData(u,n)}a=nt.fromString(e,l||40)}else throw new Error("Invalid data");var c=Pe.getBestVersionForData(a,n);if(!c)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=c;else if(t<c)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);var h=fi(t,n,a),_=Ye.getSymbolSize(t),d=new Xo(_);return ii(d,t),ai(d),li(d,t),rt(d,n,0),t>=7&&ci(d,t),ui(d,h),isNaN(r)&&(r=ut.getBestMask(d,rt.bind(null,d,n))),ut.applyMask(r,d),rt(d,n,r),{modules:d,version:t,errorCorrectionLevel:n,maskPattern:r,segments:a}}gn.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");var r=tt.M,a,l;return typeof n<"u"&&(r=tt.from(n.errorCorrectionLevel,tt.M),a=Pe.from(n.version),l=ut.from(n.maskPattern),n.toSJISFunc&&Ye.setToSJISFunction(n.toSJISFunc)),hi(t,a,r,l)};var Mn={},Et={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");var r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(l){return[l,l]}))),r.length===6&&r.push("F","F");var a=parseInt(r.join(""),16);return{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:a&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});var a=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,l=r.width&&r.width>=21?r.width:void 0,u=r.scale||4;return{width:l,scale:l?4:u,margin:a,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,a){return a.width&&a.width>=r+a.margin*2?a.width/(r+a.margin*2):a.scale},e.getImageWidth=function(r,a){var l=e.getScale(r,a);return Math.floor((r+a.margin*2)*l)},e.qrToImageData=function(r,a,l){for(var u=a.modules.size,c=a.modules.data,h=e.getScale(u,l),_=Math.floor((u+l.margin*2)*h),d=l.margin*h,m=[l.color.light,l.color.dark],y=0;y<_;y++)for(var E=0;E<_;E++){var w=(y*_+E)*4,k=l.color.light;if(y>=d&&E>=d&&y<_-d&&E<_-d){var T=Math.floor((y-d)/h),B=Math.floor((E-d)/h);k=m[c[T*u+B]?1:0]}r[w++]=k.r,r[w++]=k.g,r[w++]=k.b,r[w]=k.a}}})(Et);(function(e){var t=Et;function n(a,l,u){a.clearRect(0,0,l.width,l.height),l.style||(l.style={}),l.height=u,l.width=u,l.style.height=u+"px",l.style.width=u+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(l,u,c){var h=c,_=u;typeof h>"u"&&(!u||!u.getContext)&&(h=u,u=void 0),u||(_=r()),h=t.getOptions(h);var d=t.getImageWidth(l.modules.size,h),m=_.getContext("2d"),y=m.createImageData(d,d);return t.qrToImageData(y.data,l,h),n(m,_,d),m.putImageData(y,0,0),_},e.renderToDataURL=function(l,u,c){var h=c;typeof h>"u"&&(!u||!u.getContext)&&(h=u,u=void 0),h||(h={});var _=e.render(l,u,h),d=h.type||"image/png",m=h.rendererOpts||{};return _.toDataURL(d,m.quality)}})(Mn);var Un={},di=Et;function Vt(e,t){var n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function ot(e,t,n){var r=e+t;return typeof n<"u"&&(r+=" "+n),r}function pi(e,t,n){for(var r="",a=0,l=!1,u=0,c=0;c<e.length;c++){var h=Math.floor(c%t),_=Math.floor(c/t);!h&&!l&&(l=!0),e[c]?(u++,c>0&&h>0&&e[c-1]||(r+=l?ot("M",h+n,.5+_+n):ot("m",a,0),a=0,l=!1),h+1<t&&e[c+1]||(r+=ot("h",u),u=0)):a++}return r}Un.render=function(t,n,r){var a=di.getOptions(n),l=t.modules.size,u=t.modules.data,c=l+a.margin*2,h=a.color.light.a?"<path "+Vt(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",_="<path "+Vt(a.color.dark,"stroke")+' d="'+pi(u,l,a.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',m=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",y='<svg xmlns="http://www.w3.org/2000/svg" '+m+d+' shape-rendering="crispEdges">'+h+_+`</svg>
`;return typeof r=="function"&&r(null,y),y};var _i=uo,st=gn,Pn=Mn,gi=Un;function Ct(e,t,n,r,a){var l=[].slice.call(arguments,1),u=l.length,c=typeof l[u-1]=="function";if(!c&&!_i())throw new Error("Callback required as last argument");if(c){if(u<2)throw new Error("Too few arguments provided");u===2?(a=n,n=t,t=r=void 0):u===3&&(t.getContext&&typeof a>"u"?(a=r,r=void 0):(a=r,r=n,n=t,t=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(n=t,t=r=void 0):u===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(_,d){try{var m=st.create(n,r);_(e(m,t,r))}catch(y){d(y)}})}try{var h=st.create(n,r);a(null,e(h,t,r))}catch(_){a(_)}}Be.create=st.create;Be.toCanvas=Ct.bind(null,Pn.render);Be.toDataURL=Ct.bind(null,Pn.renderToDataURL);Be.toString=Ct.bind(null,function(e,t,n){return gi.render(e,n)});var mi=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(a){e.addRange(a)}),t&&t.focus()}},vi=mi,Kt={"text/plain":"Text","text/html":"Url",default:"Text"},wi="Copy to clipboard: #{key}, Enter";function yi(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function bi(e,t){var n,r,a,l,u,c,h=!1;t||(t={}),n=t.debug||!1;try{a=vi(),l=document.createRange(),u=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(d){if(d.stopPropagation(),t.format)if(d.preventDefault(),typeof d.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var m=Kt[t.format]||Kt.default;window.clipboardData.setData(m,e)}else d.clipboardData.clearData(),d.clipboardData.setData(t.format,e);t.onCopy&&(d.preventDefault(),t.onCopy(d.clipboardData))}),document.body.appendChild(c),l.selectNodeContents(c),u.addRange(l);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");h=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),h=!0}catch(m){n&&console.error("unable to copy using clipboardData: ",m),n&&console.error("falling back to prompt"),r=yi("message"in t?t.message:wi),window.prompt(r,e)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(l):u.removeAllRanges()),c&&document.body.removeChild(c),a()}return h}var xi=bi,S,be,At,Dn,Qt,Bt,On,ne={},Ve=[],Ei=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function te(e,t){for(var n in t)e[n]=t[n];return e}function $n(e){var t=e.parentNode;t&&t.removeChild(e)}function re(e,t,n){var r,a=arguments,l={};for(r in t)r!=="key"&&r!=="ref"&&(l[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(a[r]);if(n!=null&&(l.children=n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return De(e,l,t&&t.key,t&&t.ref,null)}function De(e,t,n,r,a){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:a};return a==null&&(l.__v=l),S.vnode&&S.vnode(l),l}function zn(){return{}}function Te(e){return e.children}function G(e,t){this.props=e,this.context=t}function Ce(e,t){if(t==null)return e.__?Ce(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ce(e):null}function Hn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Hn(e)}}function Me(e){(!e.__d&&(e.__d=!0)&&be.push(e)&&!At++||Qt!==S.debounceRendering)&&((Qt=S.debounceRendering)||Dn)(Ci)}function Ci(){for(var e;At=be.length;)e=be.sort(function(t,n){return t.__v.__b-n.__v.__b}),be=[],e.some(function(t){var n,r,a,l,u,c,h;t.__d&&(c=(u=(n=t).__v).__e,(h=n.__P)&&(r=[],(a=te({},u)).__v=a,l=kt(h,u,a,n.__n,h.ownerSVGElement!==void 0,null,r,c==null?Ce(u):c),qn(r,u),l!=c&&Hn(u)))})}function Wn(e,t,n,r,a,l,u,c,h){var _,d,m,y,E,w,k,T=n&&n.__k||Ve,B=T.length;if(c==ne&&(c=l!=null?l[0]:B?Ce(n,0):null),_=0,t.__k=ae(t.__k,function(A){if(A!=null){if(A.__=t,A.__b=t.__b+1,(m=T[_])===null||m&&A.key==m.key&&A.type===m.type)T[_]=void 0;else for(d=0;d<B;d++){if((m=T[d])&&A.key==m.key&&A.type===m.type){T[d]=void 0;break}m=null}if(y=kt(e,A,m=m||ne,r,a,l,u,c,h),(d=A.ref)&&m.ref!=d&&(k||(k=[]),m.ref&&k.push(m.ref,null,A),k.push(d,A.__c||y,A)),y!=null){var C;if(w==null&&(w=y),A.__d!==void 0)C=A.__d,A.__d=void 0;else if(l==m||y!=c||y.parentNode==null){e:if(c==null||c.parentNode!==e)e.appendChild(y),C=null;else{for(E=c,d=0;(E=E.nextSibling)&&d<B;d+=2)if(E==y)break e;e.insertBefore(y,c),C=c}t.type=="option"&&(e.value="")}c=C!==void 0?C:y.nextSibling,typeof t.type=="function"&&(t.__d=c)}else c&&m.__e==c&&c.parentNode!=e&&(c=Ce(m))}return _++,A}),t.__e=w,l!=null&&typeof t.type!="function")for(_=l.length;_--;)l[_]!=null&&$n(l[_]);for(_=B;_--;)T[_]!=null&&xe(T[_],T[_]);if(k)for(_=0;_<k.length;_++)Yn(k[_],k[++_],k[++_])}function ae(e,t,n){if(n==null&&(n=[]),e==null||typeof e=="boolean")t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)ae(e[r],t,n);else n.push(t?t(typeof e=="string"||typeof e=="number"?De(null,e,null,null,e):e.__e!=null||e.__c!=null?De(e.type,e.props,e.key,null,e.__v):e):e);return n}function Ai(e,t,n,r,a){var l;for(l in n)l==="children"||l==="key"||l in t||Oe(e,l,null,n[l],r);for(l in t)a&&typeof t[l]!="function"||l==="children"||l==="key"||l==="value"||l==="checked"||n[l]===t[l]||Oe(e,l,t[l],n[l],r)}function Jt(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=typeof n=="number"&&Ei.test(t)===!1?n+"px":n==null?"":n}function Oe(e,t,n,r,a){var l,u,c,h,_;if(a?t==="className"&&(t="class"):t==="class"&&(t="className"),t==="style")if(l=e.style,typeof n=="string")l.cssText=n;else{if(typeof r=="string"&&(l.cssText="",r=null),r)for(h in r)n&&h in n||Jt(l,h,"");if(n)for(_ in n)r&&n[_]===r[_]||Jt(l,_,n[_])}else t[0]==="o"&&t[1]==="n"?(u=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(r||e.addEventListener(t,Gt,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,Gt,u)):t!=="list"&&t!=="tagName"&&t!=="form"&&t!=="type"&&t!=="size"&&!a&&t in e?e[t]=n==null?"":n:typeof n!="function"&&t!=="dangerouslySetInnerHTML"&&(t!==(t=t.replace(/^xlink:?/,""))?n==null||n===!1?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):n==null||n===!1&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function Gt(e){this.l[e.type](S.event?S.event(e):e)}function kt(e,t,n,r,a,l,u,c,h){var _,d,m,y,E,w,k,T,B,A,C=t.type;if(t.constructor!==void 0)return null;(_=S.__b)&&_(t);try{e:if(typeof C=="function"){if(T=t.props,B=(_=C.contextType)&&r[_.__c],A=_?B?B.props.value:_.__:r,n.__c?k=(d=t.__c=n.__c).__=d.__E:("prototype"in C&&C.prototype.render?t.__c=d=new C(T,A):(t.__c=d=new G(T,A),d.constructor=C,d.render=ki),B&&B.sub(d),d.props=T,d.state||(d.state={}),d.context=A,d.__n=r,m=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),C.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=te({},d.__s)),te(d.__s,C.getDerivedStateFromProps(T,d.__s))),y=d.props,E=d.state,m)C.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(C.getDerivedStateFromProps==null&&T!==y&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(T,A),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(T,d.__s,A)===!1||t.__v===n.__v&&!d.__){for(d.props=T,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&u.push(d),_=0;_<t.__k.length;_++)t.__k[_]&&(t.__k[_].__=t);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(T,d.__s,A),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(y,E,w)})}d.context=A,d.props=T,d.state=d.__s,(_=S.__r)&&_(t),d.__d=!1,d.__v=t,d.__P=e,_=d.render(d.props,d.state,d.context),t.__k=_!=null&&_.type==Te&&_.key==null?_.props.children:Array.isArray(_)?_:[_],d.getChildContext!=null&&(r=te(te({},r),d.getChildContext())),m||d.getSnapshotBeforeUpdate==null||(w=d.getSnapshotBeforeUpdate(y,E)),Wn(e,t,n,r,a,l,u,c,h),d.base=t.__e,d.__h.length&&u.push(d),k&&(d.__E=d.__=null),d.__e=!1}else l==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Bi(n.__e,t,n,r,a,l,u,h);(_=S.diffed)&&_(t)}catch(b){t.__v=null,S.__e(b,t,n)}return t.__e}function qn(e,t){S.__c&&S.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){S.__e(r,n.__v)}})}function Bi(e,t,n,r,a,l,u,c){var h,_,d,m,y,E=n.props,w=t.props;if(a=t.type==="svg"||a,l!=null){for(h=0;h<l.length;h++)if((_=l[h])!=null&&((t.type===null?_.nodeType===3:_.localName===t.type)||e==_)){e=_,l[h]=null;break}}if(e==null){if(t.type===null)return document.createTextNode(w);e=a?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,w.is&&{is:w.is}),l=null,c=!1}if(t.type===null)E!==w&&e.data!=w&&(e.data=w);else{if(l!=null&&(l=Ve.slice.call(e.childNodes)),d=(E=n.props||ne).dangerouslySetInnerHTML,m=w.dangerouslySetInnerHTML,!c){if(E===ne)for(E={},y=0;y<e.attributes.length;y++)E[e.attributes[y].name]=e.attributes[y].value;(m||d)&&(m&&d&&m.__html==d.__html||(e.innerHTML=m&&m.__html||""))}Ai(e,w,E,a,c),m?t.__k=[]:(t.__k=t.props.children,Wn(e,t,n,r,t.type!=="foreignObject"&&a,l,u,ne,c)),c||("value"in w&&(h=w.value)!==void 0&&h!==e.value&&Oe(e,"value",h,E.value,!1),"checked"in w&&(h=w.checked)!==void 0&&h!==e.checked&&Oe(e,"checked",h,E.checked,!1))}return e}function Yn(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){S.__e(r,n)}}function xe(e,t,n){var r,a,l;if(S.unmount&&S.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Yn(r,null,t)),n||typeof e.type=="function"||(n=(a=e.__e)!=null),e.__e=e.__d=void 0,(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(u){S.__e(u,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&xe(r[l],t,n);a!=null&&$n(a)}function ki(e,t,n){return this.constructor(e,n)}function Ae(e,t,n){var r,a,l;S.__&&S.__(e,t),a=(r=n===Bt)?null:n&&n.__k||t.__k,e=re(Te,null,[e]),l=[],kt(t,(r?t:n||t).__k=e,a||ne,ne,t.ownerSVGElement!==void 0,n&&!r?[n]:a?null:Ve.slice.call(t.childNodes),l,n||ne,r),qn(l,e)}function Vn(e,t){Ae(e,t,Bt)}function Ti(e,t){var n,r;for(r in t=te(te({},e.props),t),arguments.length>2&&(t.children=Ve.slice.call(arguments,2)),n={},t)r!=="key"&&r!=="ref"&&(n[r]=t[r]);return De(e.type,n,t.key||e.key,t.ref||e.ref,null)}function Kn(e){var t={},n={__c:"__cC"+On++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,l=this;return this.getChildContext||(a=[],this.getChildContext=function(){return t[n.__c]=l,t},this.shouldComponentUpdate=function(u){l.props.value!==u.value&&a.some(function(c){c.context=u.value,Me(c)})},this.sub=function(u){a.push(u);var c=u.componentWillUnmount;u.componentWillUnmount=function(){a.splice(a.indexOf(u),1),c&&c.call(u)}}),r.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}S={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&n.constructor.getDerivedStateFromError!=null&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),n.componentDidCatch!=null&&(r=!0,n.componentDidCatch(e)),r)return Me(n.__E=n)}catch(a){e=a}throw e}},G.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=te({},this.state),typeof e=="function"&&(e=e(n,this.props)),e&&te(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Me(this))},G.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Me(this))},G.prototype.render=Te,be=[],At=0,Dn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bt=ne,On=0;var ue,V,jt,ve=0,ht=[],Xt=S.__r,Zt=S.diffed,en=S.__c,tn=S.unmount;function we(e,t){S.__h&&S.__h(V,e,ve||t),ve=0;var n=V.__H||(V.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Tt(e){return ve=1,St(er,e)}function St(e,t,n){var r=we(ue++,2);return r.__c||(r.__c=V,r.__=[n?n(t):er(void 0,t),function(a){var l=e(r.__[0],a);r.__[0]!==l&&(r.__[0]=l,r.__c.setState({}))}]),r.__}function Qn(e,t){var n=we(ue++,3);!S.__s&&It(n.__H,t)&&(n.__=e,n.__H=t,V.__H.__h.push(n))}function Nt(e,t){var n=we(ue++,4);!S.__s&&It(n.__H,t)&&(n.__=e,n.__H=t,V.__h.push(n))}function Jn(e){return ve=5,Ke(function(){return{current:e}},[])}function Gn(e,t,n){ve=6,Nt(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function Ke(e,t){var n=we(ue++,7);return It(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function jn(e,t){return ve=8,Ke(function(){return e},t)}function Xn(e){var t=V.context[e.__c],n=we(ue++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(V)),t.props.value):e.__}function Zn(e,t){S.useDebugValue&&S.useDebugValue(t?t(e):e)}function Si(e){var t=we(ue++,10),n=Tt();return t.__=e,V.componentDidCatch||(V.componentDidCatch=function(r){t.__&&t.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Ni(){ht.some(function(e){if(e.__P)try{e.__H.__h.forEach(dt),e.__H.__h.forEach(pt),e.__H.__h=[]}catch(t){return e.__H.__h=[],S.__e(t,e.__v),!0}}),ht=[]}function dt(e){e.t&&e.t()}function pt(e){var t=e.__();typeof t=="function"&&(e.t=t)}function It(e,t){return!e||t.some(function(n,r){return n!==e[r]})}function er(e,t){return typeof t=="function"?t(e):t}S.__r=function(e){Xt&&Xt(e),ue=0,(V=e.__c).__H&&(V.__H.__h.forEach(dt),V.__H.__h.forEach(pt),V.__H.__h=[])},S.diffed=function(e){Zt&&Zt(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(ht.push(t)!==1&&jt===S.requestAnimationFrame||((jt=S.requestAnimationFrame)||function(r){var a,l=function(){clearTimeout(u),cancelAnimationFrame(a),setTimeout(r)},u=setTimeout(l,100);typeof window<"u"&&(a=requestAnimationFrame(l))})(Ni))}},S.__c=function(e,t){t.some(function(n){try{n.__h.forEach(dt),n.__h=n.__h.filter(function(r){return!r.__||pt(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],S.__e(r,n.__v)}}),en&&en(e,t)},S.unmount=function(e){tn&&tn(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach(function(r){return r.t&&r.t()})}catch(r){S.__e(r,t.__v)}}};function Rt(e,t){for(var n in t)e[n]=t[n];return e}function _t(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}var tr=function(e){var t,n;function r(a){var l;return(l=e.call(this,a)||this).isPureReactComponent=!0,l}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.shouldComponentUpdate=function(a,l){return _t(this.props,a)||_t(this.state,l)},r}(G);function nr(e,t){function n(a){var l=this.props.ref,u=l==a.ref;return!u&&l&&(l.call?l(null):l.current=null),t?!t(this.props,a)||!u:_t(this.props,a)}function r(a){return this.shouldComponentUpdate=n,re(e,Rt({},a))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r}var nn=S.__b;function rr(e){function t(n){var r=Rt({},n);return delete r.ref,e(r,n.ref)}return t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}S.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),nn&&nn(e)};var rn=function(e,t){return e?ae(e).reduce(function(n,r,a){return n.concat(t(r,a))},[]):null},or={map:rn,forEach:rn,count:function(e){return e?ae(e).length:0},only:function(e){if((e=ae(e)).length!==1)throw new Error("Children.only() expects only one child.");return e[0]},toArray:ae},Ii=S.__e;function ir(e){return e&&((e=Rt({},e)).__c=null,e.__k=e.__k&&e.__k.map(ir)),e}function $e(){this.__u=0,this.o=null,this.__b=null}function ar(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function lr(e){var t,n,r;function a(l){if(t||(t=e()).then(function(u){n=u.default||u},function(u){r=u}),r)throw r;if(!n)throw t;return re(n,l)}return a.displayName="Lazy",a.t=!0,a}function he(){this.i=null,this.l=null}S.__e=function(e,t,n){if(e.then){for(var r,a=t;a=a.__;)if((r=a.__c)&&r.__c)return r.__c(e,t.__c)}Ii(e,t,n)},($e.prototype=new G).__c=function(e,t){var n=this;n.o==null&&(n.o=[]),n.o.push(t);var r=ar(n.__v),a=!1,l=function(){a||(a=!0,r?r(u):u())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){l(),t.__c&&t.__c()};var u=function(){var c;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});c=n.o.pop();)c.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(l,l)},$e.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=ir(this.__b),this.__b=null),[re(G,null,t.u?null:e.children),t.u&&e.fallback]};var on=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(he.prototype=new G).u=function(e){var t=this,n=ar(t.__v),r=t.l.get(e);return r[0]++,function(a){var l=function(){t.props.revealOrder?(r.push(a),on(t,e,r)):a()};n?n(l):l()}},he.prototype.render=function(e){this.i=null,this.l=new Map;var t=ae(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},he.prototype.componentDidUpdate=he.prototype.componentDidMount=function(){var e=this;e.l.forEach(function(t,n){on(e,n,t)})};var Ri=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},e}();function Fi(e){var t=this,n=e.container,r=re(Ri,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.v.parentNode&&t.s.removeChild(t.v),xe(t.h),t.p=!1),e.vnode?t.p?(n.__k=t.__k,Ae(r,n),t.__k=n.__k):(t.v=document.createTextNode(""),Vn("",n),n.appendChild(t.v),t.p=!0,t.s=n,Ae(r,n,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),xe(t.h)),t.h=r,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),xe(t.h)},null}function cr(e,t){return re(Fi,{vnode:e,container:t})}var an=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;G.prototype.isReactComponent={};var ur=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103;function gt(e,t,n){if(t.__k==null)for(;t.firstChild;)t.removeChild(t.firstChild);return Ae(e,t),typeof n=="function"&&n(),e?e.__c:null}function Li(e,t,n){return Vn(e,t),typeof n=="function"&&n(),e?e.__c:null}var ln=S.event;function it(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}S.event=function(e){ln&&(e=ln(e)),e.persist=function(){};var t=!1,n=!1,r=e.stopPropagation;e.stopPropagation=function(){r.call(e),t=!0};var a=e.preventDefault;return e.preventDefault=function(){a.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var cn={configurable:!0,get:function(){return this.class}},un=S.vnode;S.vnode=function(e){e.$$typeof=ur;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(cn.enumerable="className"in n,n.className!=null&&(n.class=n.className),Object.defineProperty(n,"className",cn)),typeof t!="function"){var r,a,l;for(l in n.defaultValue&&n.value!==void 0&&(n.value||n.value===0||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&t==="select"&&(ae(n.children).forEach(function(u){n.value.indexOf(u.props.value)!=-1&&(u.props.selected=!0)}),delete n.value),n)if(r=an.test(l))break;if(r)for(l in a=e.props={},n)a[an.test(l)?l.replace(/[A-Z0-9]/,"-$&").toLowerCase():l]=n[l]}(function(u){var c=e.type,h=e.props;if(h&&typeof c=="string"){var _={};for(var d in h)/^on(Ani|Tra|Tou)/.test(d)&&(h[d.toLowerCase()]=h[d],delete h[d]),_[d.toLowerCase()]=d;if(_.ondoubleclick&&(h.ondblclick=h[_.ondoubleclick],delete h[_.ondoubleclick]),_.onbeforeinput&&(h.onbeforeinput=h[_.onbeforeinput],delete h[_.onbeforeinput]),_.onchange&&(c==="textarea"||c.toLowerCase()==="input"&&!/^fil|che|ra/i.test(h.type))){var m=_.oninput||"oninput";h[m]||(h[m]=h[_.onchange],delete h[_.onchange])}}})(),typeof t=="function"&&!t.m&&t.prototype&&(it(t.prototype,"componentWillMount"),it(t.prototype,"componentWillReceiveProps"),it(t.prototype,"componentWillUpdate"),t.m=!0)}un&&un(e)};var Mi="16.8.0";function fr(e){return re.bind(null,e)}function Ft(e){return!!e&&e.$$typeof===ur}function sr(e){return Ft(e)?Ti.apply(null,arguments):e}function hr(e){return!!e.__k&&(Ae(null,e),!0)}function dr(e){return e&&(e.base||e.nodeType===1&&e)||null}var pr=function(e,t){return e(t)};const Ui={useState:Tt,useReducer:St,useEffect:Qn,useLayoutEffect:Nt,useRef:Jn,useImperativeHandle:Gn,useMemo:Ke,useCallback:jn,useContext:Xn,useDebugValue:Zn,version:"16.8.0",Children:or,render:gt,hydrate:gt,unmountComponentAtNode:hr,createPortal:cr,createElement:re,createContext:Kn,createFactory:fr,cloneElement:sr,createRef:zn,Fragment:Te,isValidElement:Ft,findDOMNode:dr,Component:G,PureComponent:tr,memo:nr,forwardRef:rr,unstable_batchedUpdates:pr,Suspense:$e,SuspenseList:he,lazy:lr},Pi=Object.freeze(Object.defineProperty({__proto__:null,default:Ui,version:Mi,Children:or,render:gt,hydrate:Li,unmountComponentAtNode:hr,createPortal:cr,createFactory:fr,cloneElement:sr,isValidElement:Ft,findDOMNode:dr,PureComponent:tr,memo:nr,forwardRef:rr,unstable_batchedUpdates:pr,Suspense:$e,SuspenseList:he,lazy:lr,createElement:re,createContext:Kn,createRef:zn,Fragment:Te,Component:G,useState:Tt,useReducer:St,useEffect:Qn,useLayoutEffect:Nt,useRef:Jn,useImperativeHandle:Gn,useMemo:Ke,useCallback:jn,useContext:Xn,useDebugValue:Zn,useErrorBoundary:Si},Symbol.toStringTag,{value:"Module"})),Di=dn(Pi);function _r(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var q=co,gr=_r(Be),Oi=_r(xi),x=Di;function $i(e){gr.toString(e,{type:"terminal"}).then(console.log)}var zi=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function Hi(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}var Wi="data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",qi="WalletConnect",Yi=300,Vi="rgb(64, 153, 255)",mr="walletconnect-wrapper",fn="walletconnect-style-sheet",vr="walletconnect-qrcode-modal",Ki="walletconnect-qrcode-close",wr="walletconnect-qrcode-text",Qi="walletconnect-connect-button";function Ji(e){return x.createElement("div",{className:"walletconnect-modal__header"},x.createElement("img",{src:Wi,className:"walletconnect-modal__headerLogo"}),x.createElement("p",null,qi),x.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:e.onClose},x.createElement("div",{id:Ki,className:"walletconnect-modal__close__icon"},x.createElement("div",{className:"walletconnect-modal__close__line1"}),x.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function Gi(e){return x.createElement("a",{className:"walletconnect-connect__button",href:e.href,id:Qi+"-"+e.name,onClick:e.onClick,rel:"noopener noreferrer",style:{backgroundColor:e.color},target:"_blank"},e.name)}var ji="data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";function Xi(e){var t=e.color,n=e.href,r=e.name,a=e.logo,l=e.onClick;return x.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:l,rel:"noopener noreferrer",target:"_blank"},x.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),x.createElement("div",{className:"walletconnect-modal__base__row__right"},x.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+a+"') "+t,backgroundSize:"100%"}}),x.createElement("img",{src:ji,className:"walletconnect-modal__base__row__right__caret"})))}function Zi(e){var t=e.color,n=e.href,r=e.name,a=e.logo,l=e.onClick,u=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return x.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:l,rel:"noopener noreferrer",target:"_blank"},x.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+a+"') "+t,backgroundSize:"100%"}}),x.createElement("div",{style:{fontSize:u},className:"walletconnect-connect__button__text"},r))}var ea=5,at=12;function ta(e){var t=q.isAndroid(),n=x.useState(""),r=n[0],a=n[1],l=x.useState(""),u=l[0],c=l[1],h=x.useState(1),_=h[0],d=h[1],m=u?e.links.filter(function(b){return b.name.toLowerCase().includes(u.toLowerCase())}):e.links,y=e.errorMessage,E=u||m.length>ea,w=Math.ceil(m.length/at),k=[(_-1)*at+1,_*at],T=m.length?m.filter(function(b,N){return N+1>=k[0]&&N+1<=k[1]}):[],B=!t&&w>1,A=void 0;function C(b){a(b.target.value),clearTimeout(A),b.target.value?A=setTimeout(function(){c(b.target.value),d(1)},1e3):(a(""),c(""),d(1))}return x.createElement("div",null,x.createElement("p",{id:wr,className:"walletconnect-qrcode__text"},t?e.text.connect_mobile_wallet:e.text.choose_preferred_wallet),!t&&x.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:C}),x.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(t?"__android":E&&m.length?"__wrap":"")},t?x.createElement(Gi,{name:e.text.connect,color:Vi,href:e.uri,onClick:x.useCallback(function(){q.saveMobileLinkInfo({name:"Unknown",href:e.uri})},[])}):T.length?T.map(function(b){var N=b.color,M=b.name,F=b.shortName,U=b.logo,z=q.formatIOSMobile(e.uri,b),O=x.useCallback(function(){q.saveMobileLinkInfo({name:M,href:z})},[T]);return E?x.createElement(Zi,{color:N,href:z,name:F||M,logo:U,onClick:O}):x.createElement(Xi,{color:N,href:z,name:M,logo:U,onClick:O})}):x.createElement(x.Fragment,null,x.createElement("p",null,y.length?e.errorMessage:!!e.links.length&&!m.length?e.text.no_wallets_found:e.text.loading))),B&&x.createElement("div",{className:"walletconnect-modal__footer"},Array(w).fill(0).map(function(b,N){var M=N+1,F=_===M;return x.createElement("a",{style:{margin:"auto 10px",fontWeight:F?"bold":"normal"},onClick:function(){return d(M)}},M)})))}function na(e){var t=!!e.message.trim();return x.createElement("div",{className:"walletconnect-qrcode__notification"+(t?" notification__show":"")},e.message)}var ra=function(e){try{var t="";return Promise.resolve(gr.toString(e,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(t=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),t})}catch(n){return Promise.reject(n)}};function oa(e){var t=x.useState(""),n=t[0],r=t[1],a=x.useState(""),l=a[0],u=a[1];x.useEffect(function(){try{return Promise.resolve(ra(e.uri)).then(function(h){u(h)})}catch(h){Promise.reject(h)}},[]);var c=function(){var h=Oi(e.uri);h?(r(e.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return x.createElement("div",null,x.createElement("p",{id:wr,className:"walletconnect-qrcode__text"},e.text.scan_qrcode_with_wallet),x.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),x.createElement("div",{className:"walletconnect-modal__footer"},x.createElement("a",{onClick:c},e.text.copy_to_clipboard)),x.createElement(na,{message:n}))}function ia(e){var t=q.isAndroid(),n=q.isMobile(),r=n?e.qrcodeModalOptions&&e.qrcodeModalOptions.mobileLinks?e.qrcodeModalOptions.mobileLinks:void 0:e.qrcodeModalOptions&&e.qrcodeModalOptions.desktopLinks?e.qrcodeModalOptions.desktopLinks:void 0,a=x.useState(!1),l=a[0],u=a[1],c=x.useState(!1),h=c[0],_=c[1],d=x.useState(!n),m=d[0],y=d[1],E={mobile:n,text:e.text,uri:e.uri,qrcodeModalOptions:e.qrcodeModalOptions},w=x.useState(""),k=w[0],T=w[1],B=x.useState(!1),A=B[0],C=B[1],b=x.useState([]),N=b[0],M=b[1],F=x.useState(""),U=F[0],z=F[1],O=function(){h||l||r&&!r.length||N.length>0||x.useEffect(function(){var J=function(){try{if(t)return Promise.resolve();u(!0);var W=Hi(function(){var oe=e.qrcodeModalOptions&&e.qrcodeModalOptions.registryUrl?e.qrcodeModalOptions.registryUrl:q.getWalletRegistryUrl();return Promise.resolve(fetch(oe)).then(function(Se){return Promise.resolve(Se.json()).then(function(Qe){var Je=Qe.listings,Ge=n?"mobile":"desktop",fe=q.getMobileLinkRegistry(q.formatMobileRegistry(Je,Ge),r);u(!1),_(!0),z(fe.length?"":e.text.no_supported_wallets),M(fe);var Ne=fe.length===1;Ne&&(T(q.formatIOSMobile(e.uri,fe[0])),y(!0)),C(Ne)})})},function(oe){u(!1),_(!0),z(e.text.something_went_wrong),console.error(oe)});return Promise.resolve(W&&W.then?W.then(function(){}):void 0)}catch(oe){return Promise.reject(oe)}};J()})};O();var ee=n?m:!m;return x.createElement("div",{id:vr,className:"walletconnect-qrcode__base animated fadeIn"},x.createElement("div",{className:"walletconnect-modal__base"},x.createElement(Ji,{onClose:e.onClose}),A&&m?x.createElement("div",{className:"walletconnect-modal__single_wallet"},x.createElement("a",{onClick:function(){return q.saveMobileLinkInfo({name:N[0].name,href:k})},href:k,rel:"noopener noreferrer",target:"_blank"},e.text.connect_with+" "+(A?N[0].name:"")+" \u203A")):t||l||!l&&N.length?x.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(ee?" right__selected":"")},x.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?x.createElement(x.Fragment,null,x.createElement("a",{onClick:function(){return y(!1),O()}},e.text.mobile),x.createElement("a",{onClick:function(){return y(!0)}},e.text.qrcode)):x.createElement(x.Fragment,null,x.createElement("a",{onClick:function(){return y(!0)}},e.text.qrcode),x.createElement("a",{onClick:function(){return y(!1),O()}},e.text.desktop))):null,x.createElement("div",null,m||!t&&!l&&!N.length?x.createElement(oa,Object.assign({},E)):x.createElement(ta,Object.assign({},E,{links:N,errorMessage:U})))))}var aa={choose_preferred_wallet:"W\xE4hle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterst\xFCtzten Wallet",no_wallets_found:"keine Wallet gefunden"},la={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},ca={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera m\xF3vil",scan_qrcode_with_wallet:"Escanea el c\xF3digo QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo sali\xF3 mal",no_supported_wallets:"Todav\xEDa no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},ua={choose_preferred_wallet:"Choisissez votre portefeuille pr\xE9f\xE9r\xE9",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copi\xE9!",connect_with:"Connectez-vous \xE0 l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourn\xE9",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouv\xE9"},fa={choose_preferred_wallet:"\uC6D0\uD558\uB294 \uC9C0\uAC11\uC744 \uC120\uD0DD\uD558\uC138\uC694",connect_mobile_wallet:"\uBAA8\uBC14\uC77C \uC9C0\uAC11\uACFC \uC5F0\uACB0",scan_qrcode_with_wallet:"WalletConnect \uC9C0\uC6D0 \uC9C0\uAC11\uC5D0\uC11C QR\uCF54\uB4DC\uB97C \uC2A4\uCE94\uD558\uC138\uC694",connect:"\uC5F0\uACB0",qrcode:"QR \uCF54\uB4DC",mobile:"\uBAA8\uBC14\uC77C",desktop:"\uB370\uC2A4\uD06C\uD0D1",copy_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC",copied_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",connect_with:"\uC640 \uC5F0\uACB0\uD558\uB2E4",loading:"\uB85C\uB4DC \uC911...",something_went_wrong:"\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",no_supported_wallets:"\uC544\uC9C1 \uC9C0\uC6D0\uB418\uB294 \uC9C0\uAC11\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",no_wallets_found:"\uC9C0\uAC11\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"},sa={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se \xE0 carteira m\xF3vel",scan_qrcode_with_wallet:"Ler o c\xF3digo QR com uma carteira compat\xEDvel com WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda n\xE3o h\xE1 carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},ha={choose_preferred_wallet:"\u9009\u62E9\u4F60\u7684\u94B1\u5305",connect_mobile_wallet:"\u8FDE\u63A5\u81F3\u79FB\u52A8\u7AEF\u94B1\u5305",scan_qrcode_with_wallet:"\u4F7F\u7528\u517C\u5BB9 WalletConnect \u7684\u94B1\u5305\u626B\u63CF\u4E8C\u7EF4\u7801",connect:"\u8FDE\u63A5",qrcode:"\u4E8C\u7EF4\u7801",mobile:"\u79FB\u52A8",desktop:"\u684C\u9762",copy_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F",copied_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F\u6210\u529F\uFF01",connect_with:"\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8FDE\u63A5",loading:"\u6B63\u5728\u52A0\u8F7D...",something_went_wrong:"\u51FA\u4E86\u95EE\u9898",no_supported_wallets:"\u76EE\u524D\u8FD8\u6CA1\u6709\u652F\u6301\u7684\u94B1\u5305",no_wallets_found:"\u6CA1\u6709\u627E\u5230\u94B1\u5305"},da={choose_preferred_wallet:"\u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",connect_mobile_wallet:"\u0628\u0647 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0648\u0635\u0644 \u0634\u0648\u06CC\u062F",scan_qrcode_with_wallet:"\u06A9\u062F QR \u0631\u0627 \u0628\u0627 \u06CC\u06A9 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06A9\u0646 \u06A9\u0646\u06CC\u062F",connect:"\u0627\u062A\u0635\u0627\u0644",qrcode:"\u06A9\u062F QR",mobile:"\u0633\u06CC\u0627\u0631",desktop:"\u062F\u0633\u06A9\u062A\u0627\u067E",copy_to_clipboard:"\u06A9\u067E\u06CC \u0628\u0647 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F",copied_to_clipboard:"\u062F\u0631 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F \u06A9\u067E\u06CC \u0634\u062F!",connect_with:"\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627",loading:"...\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",something_went_wrong:"\u0645\u0634\u06A9\u0644\u06CC \u067E\u06CC\u0634 \u0622\u0645\u062F",no_supported_wallets:"\u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647 \u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",no_wallets_found:"\u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F"},sn={de:aa,en:la,es:ca,fr:ua,ko:fa,pt:sa,zh:ha,fa:da};function pa(){var e=q.getDocumentOrThrow(),t=e.getElementById(fn);t&&e.head.removeChild(t);var n=e.createElement("style");n.setAttribute("id",fn),n.innerText=zi,e.head.appendChild(n)}function _a(){var e=q.getDocumentOrThrow(),t=e.createElement("div");return t.setAttribute("id",mr),e.body.appendChild(t),t}function yr(){var e=q.getDocumentOrThrow(),t=e.getElementById(vr);t&&(t.className=t.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=e.getElementById(mr);n&&e.body.removeChild(n)},Yi))}function ga(e){return function(){yr(),e&&e()}}function ma(){var e=q.getNavigatorOrThrow().language.split("-")[0]||"en";return sn[e]||sn.en}function va(e,t,n){pa();var r=_a();x.render(x.createElement(ia,{text:ma(),uri:e,onClose:ga(t),qrcodeModalOptions:n}),r)}function wa(){yr()}var br=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function ya(e,t,n){console.log(e),br()?$i(e):va(e,t,n)}function ba(){br()||wa()}var xa={open:ya,close:ba},hn=xa;const Aa=ro({__proto__:null,default:hn},[hn]);export{Aa as i};
