import{az as s,aA as v,at as cn,c5 as Rn,au as W,bw as k,bE as S,an as M,as as q,bx as A,ap as B,c6 as G,c7 as C,aq as x,bF as O,bA as Q,bK as N,bz as kn,av as T,aw as I,bL as E,c8 as R,ax as D,bP as vn,bH as F,bY as Fn,b_ as X,bT as sn,c2 as U,by as K,aB as Z,c9 as dn,ca as Wn,ao as Cn,ar as Mn,a8 as Ln,bN as zn,c1 as $,ay as qn}from"./index.00e5cc6a.js";import{c as V,b as hn}from"./skip.7502ef66.js";function Dn(){return s(function(t,n){var e=null;t._refCount++;var r=v(n,void 0,void 0,void 0,function(){if(!t||t._refCount<=0||0<--t._refCount){e=null;return}var u=t._connection,a=e;e=null,u&&(!a||u===a)&&u.unsubscribe(),n.unsubscribe()});t.subscribe(r),r.closed||(e=t.connect())})}var H=function(t){cn(n,t);function n(e,r){var u=t.call(this)||this;return u.source=e,u.subjectFactory=r,u._subject=null,u._refCount=0,u._connection=null,Rn(e)&&(u.lift=e.lift),u}return n.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},n.prototype.getSubject=function(){var e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject},n.prototype._teardown=function(){this._refCount=0;var e=this._connection;this._subject=this._connection=null,e==null||e.unsubscribe()},n.prototype.connect=function(){var e=this,r=this._connection;if(!r){r=this._connection=new W;var u=this.getSubject();r.add(this.source.subscribe(v(u,void 0,function(){e._teardown(),u.complete()},function(a){e._teardown(),u.error(a)},function(){return e._teardown()}))),r.closed&&(this._connection=null,r=W.EMPTY)}return r},n.prototype.refCount=function(){return Dn()(this)},n}(k),Pn=function(t){cn(n,t);function n(){var e=t!==null&&t.apply(this,arguments)||this;return e._value=null,e._hasValue=!1,e._isComplete=!1,e}return n.prototype._checkFinalizedStatuses=function(e){var r=this,u=r.hasError,a=r._hasValue,i=r._value,o=r.thrownError,f=r.isStopped,l=r._isComplete;u?e.error(o):(f||l)&&(a&&e.next(i),e.complete())},n.prototype.next=function(e){this.isStopped||(this._value=e,this._hasValue=!0)},n.prototype.complete=function(){var e=this,r=e._hasValue,u=e._value,a=e._isComplete;a||(this._isComplete=!0,r&&t.prototype.next.call(this,u),t.prototype.complete.call(this))},n}(S);function pn(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=M(t);return q(t,e)}function Un(t,n){var e=A(t)?t:function(){return t},r=function(u){return u.error(e())};return new k(n?function(u){return n.schedule(r,0,u)}:r)}var un;(function(t){t.NEXT="N",t.ERROR="E",t.COMPLETE="C"})(un||(un={}));var J=function(){function t(n,e,r){this.kind=n,this.value=e,this.error=r,this.hasValue=n==="N"}return t.prototype.observe=function(n){return mn(this,n)},t.prototype.do=function(n,e,r){var u=this,a=u.kind,i=u.value,o=u.error;return a==="N"?n==null?void 0:n(i):a==="E"?e==null?void 0:e(o):r==null?void 0:r()},t.prototype.accept=function(n,e,r){var u;return A((u=n)===null||u===void 0?void 0:u.next)?this.observe(n):this.do(n,e,r)},t.prototype.toObservable=function(){var n=this,e=n.kind,r=n.value,u=n.error,a=e==="N"?pn(r):e==="E"?Un(function(){return u}):e==="C"?B:0;if(!a)throw new TypeError("Unexpected notification kind "+e);return a},t.createNext=function(n){return new t("N",n)},t.createError=function(n){return new t("E",void 0,n)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t}();function mn(t,n){var e,r,u,a=t,i=a.kind,o=a.value,f=a.error;if(typeof i!="string")throw new TypeError('Invalid notification, missing "kind"');i==="N"?(e=n.next)===null||e===void 0||e.call(n,o):i==="E"?(r=n.error)===null||r===void 0||r.call(n,f):(u=n.complete)===null||u===void 0||u.call(n)}var an=G(function(t){return function(){t(this),this.name="ArgumentOutOfRangeError",this.message="argument out of range"}}),$n=G(function(t){return function(e){t(this),this.name="NotFoundError",this.message=e}}),Bn=G(function(t){return function(e){t(this),this.name="SequenceError",this.message=e}});function _(t){return t instanceof Date&&!isNaN(t)}var Gn=G(function(t){return function(e){e===void 0&&(e=null),t(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=e}});function Kn(t,n){var e=_(t)?{first:t}:typeof t=="number"?{each:t}:t,r=e.first,u=e.each,a=e.with,i=a===void 0?Yn:a,o=e.scheduler,f=o===void 0?n!=null?n:V:o,l=e.meta,c=l===void 0?null:l;if(r==null&&u==null)throw new TypeError("No timeout provided.");return s(function(d,m){var g,h,y=null,p=0,w=function(b){h=C(m,f,function(){try{g.unsubscribe(),x(i({meta:c,lastValue:y,seen:p})).subscribe(m)}catch(j){m.error(j)}},b)};g=d.subscribe(v(m,function(b){h==null||h.unsubscribe(),p++,m.next(y=b),u>0&&w(u)},void 0,void 0,function(){h!=null&&h.closed||h==null||h.unsubscribe(),y=null})),!p&&w(r!=null?typeof r=="number"?r:+r-f.now():u)})}function Yn(t){throw new Gn(t)}var Jn=Array.isArray,On=Object.getPrototypeOf,Qn=Object.prototype,Xn=Object.keys;function Zn(t){if(t.length===1){var n=t[0];if(Jn(n))return{args:n,keys:null};if(Hn(n)){var e=Xn(n);return{args:e.map(function(r){return n[r]}),keys:e}}}return{args:t,keys:null}}function Hn(t){return t&&typeof t=="object"&&On(t)===Qn}function _n(t,n){return t.reduce(function(e,r,u){return e[r]=n[u],e},{})}function nt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=M(t),r=O(t),u=Zn(t),a=u.args,i=u.keys;if(a.length===0)return q([],e);var o=new k(gn(a,e,i?function(f){return _n(i,f)}:N));return r?o.pipe(Q(r)):o}function gn(t,n,e){return e===void 0&&(e=N),function(r){on(n,function(){for(var u=t.length,a=new Array(u),i=u,o=u,f=function(c){on(n,function(){var d=q(t[c],n),m=!1;d.subscribe(v(r,function(g){a[c]=g,m||(m=!0,o--),o||r.next(e(a.slice()))},function(){--i||r.complete()}))},r)},l=0;l<u;l++)f(l)},r)}}function on(t,n,e){t?C(e,t,n):n()}function L(t,n,e){t===void 0&&(t=0),e===void 0&&(e=hn);var r=-1;return n!=null&&(kn(n)?e=n:r=n),new k(function(u){var a=_(t)?+t-e.now():t;a<0&&(a=0);var i=0;return e.schedule(function(){u.closed||(u.next(i++),0<=r?this.schedule(void 0,r):u.complete())},a)})}function tt(t,n){return t===void 0&&(t=0),n===void 0&&(n=V),t<0&&(t=0),L(t,t,n)}var et=Array.isArray;function P(t){return t.length===1&&et(t[0])?t[0]:t}function St(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=P(t);return s(function(r,u){var a=T([r],I(e)),i=function(){if(!u.closed)if(a.length>0){var o=void 0;try{o=x(a.shift())}catch{i();return}var f=v(u,void 0,E,E);o.subscribe(f),f.add(i)}else u.complete()};i()})}function At(t,n){return function(e,r){return!t.call(n,e,r)}}function Tt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t=P(t),t.length===1?x(t[0]):new k(yn(t))}function yn(t){return function(n){for(var e=[],r=function(a){e.push(x(t[a]).subscribe(v(n,function(i){if(e){for(var o=0;o<e.length;o++)o!==a&&e[o].unsubscribe();e=null}n.next(i)})))},u=0;e&&!n.closed&&u<t.length;u++)r(u)}}function wn(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=O(t),r=P(t);return r.length?new k(function(u){var a=r.map(function(){return[]}),i=r.map(function(){return!1});u.add(function(){a=i=null});for(var o=function(l){x(r[l]).subscribe(v(u,function(c){if(a[l].push(c),a.every(function(m){return m.length})){var d=a.map(function(m){return m.shift()});u.next(e?e.apply(void 0,T([],I(d))):d),a.some(function(m,g){return!m.length&&i[g]})&&u.complete()}},function(){i[l]=!0,!a[l].length&&u.complete()}))},f=0;!u.closed&&f<r.length;f++)o(f);return function(){a=i=null}}):B}function rt(t){return s(function(n,e){var r=!1,u=null,a=null,i=!1,o=function(){if(a==null||a.unsubscribe(),a=null,r){r=!1;var l=u;u=null,e.next(l)}i&&e.complete()},f=function(){a=null,i&&e.complete()};n.subscribe(v(e,function(l){r=!0,u=l,a||x(t(l)).subscribe(a=v(e,o,f))},function(){i=!0,(!r||!a||a.closed)&&e.complete()}))})}function It(t,n){return n===void 0&&(n=V),rt(function(){return L(t,n)})}function Nt(t){return s(function(n,e){var r=[];return n.subscribe(v(e,function(u){return r.push(u)},function(){e.next(r),e.complete()})),t.subscribe(v(e,function(){var u=r;r=[],e.next(u)},E)),function(){r=null}})}function Vt(t,n){return n===void 0&&(n=null),n=n!=null?n:t,s(function(e,r){var u=[],a=0;e.subscribe(v(r,function(i){var o,f,l,c,d=null;a++%n===0&&u.push([]);try{for(var m=R(u),g=m.next();!g.done;g=m.next()){var h=g.value;h.push(i),t<=h.length&&(d=d!=null?d:[],d.push(h))}}catch(w){o={error:w}}finally{try{g&&!g.done&&(f=m.return)&&f.call(m)}finally{if(o)throw o.error}}if(d)try{for(var y=R(d),p=y.next();!p.done;p=y.next()){var h=p.value;D(u,h),r.next(h)}}catch(w){l={error:w}}finally{try{p&&!p.done&&(c=y.return)&&c.call(y)}finally{if(l)throw l.error}}},function(){var i,o;try{for(var f=R(u),l=f.next();!l.done;l=f.next()){var c=l.value;r.next(c)}}catch(d){i={error:d}}finally{try{l&&!l.done&&(o=f.return)&&o.call(f)}finally{if(i)throw i.error}}r.complete()},void 0,function(){u=null}))})}function jt(t){for(var n,e,r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var a=(n=M(r))!==null&&n!==void 0?n:V,i=(e=r[0])!==null&&e!==void 0?e:null,o=r[1]||1/0;return s(function(f,l){var c=[],d=!1,m=function(y){var p=y.buffer,w=y.subs;w.unsubscribe(),D(c,y),l.next(p),d&&g()},g=function(){if(c){var y=new W;l.add(y);var p=[],w={buffer:p,subs:y};c.push(w),C(y,a,function(){return m(w)},t)}};i!==null&&i>=0?C(l,a,g,i,!0):d=!0,g();var h=v(l,function(y){var p,w,b=c.slice();try{for(var j=R(b),z=j.next();!z.done;z=j.next()){var en=z.value,rn=en.buffer;rn.push(y),o<=rn.length&&m(en)}}catch(jn){p={error:jn}}finally{try{z&&!z.done&&(w=j.return)&&w.call(j)}finally{if(p)throw p.error}}},function(){for(;c!=null&&c.length;)l.next(c.shift().buffer);h==null||h.unsubscribe(),l.complete(),l.unsubscribe()},void 0,function(){return c=null});f.subscribe(h)})}function Rt(t,n){return s(function(e,r){var u=[];x(t).subscribe(v(r,function(a){var i=[];u.push(i);var o=new W,f=function(){D(u,i),r.next(i),o.unsubscribe()};o.add(x(n(a)).subscribe(v(r,f,E)))},E)),e.subscribe(v(r,function(a){var i,o;try{for(var f=R(u),l=f.next();!l.done;l=f.next()){var c=l.value;c.push(a)}}catch(d){i={error:d}}finally{try{l&&!l.done&&(o=f.return)&&o.call(f)}finally{if(i)throw i.error}}},function(){for(;u.length>0;)r.next(u.shift());r.complete()}))})}function kt(t){return s(function(n,e){var r=null,u=null,a=function(){u==null||u.unsubscribe();var i=r;r=[],i&&e.next(i),x(t()).subscribe(u=v(e,a,E))};a(),n.subscribe(v(e,function(i){return r==null?void 0:r.push(i)},function(){r&&e.next(r),e.complete()},void 0,function(){return r=u=null}))})}function ut(t){return s(function(n,e){var r=null,u=!1,a;r=n.subscribe(v(e,void 0,void 0,function(i){a=x(t(i,ut(t)(n))),r?(r.unsubscribe(),r=null,a.subscribe(e)):u=!0})),u&&(r.unsubscribe(),r=null,a.subscribe(e))})}function xn(t,n,e,r,u){return function(a,i){var o=e,f=n,l=0;a.subscribe(v(i,function(c){var d=l++;f=o?t(f,c,d):(o=!0,c),r&&i.next(f)},u&&function(){o&&i.next(f),i.complete()}))}}function Y(t,n){return s(xn(t,n,arguments.length>=2,!1,!0))}var at=function(t,n){return t.push(n),t};function it(){return s(function(t,n){Y(at,[])(t).subscribe(n)})}function bn(t,n){return vn(it(),F(function(e){return t(e)}),n?Q(n):N)}function ot(t){return bn(nt,t)}var Ft=ot;function En(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=O(t);return e?vn(En.apply(void 0,T([],I(t))),Q(e)):s(function(r,u){gn(T([r],I(P(t))))(u)})}function Wt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return En.apply(void 0,T([],I(t)))}function fn(t,n){return A(n)?F(t,n,1):F(t,1)}function Ct(t,n){return A(n)?fn(function(){return t},n):fn(function(){return t})}function ft(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=M(t);return s(function(r,u){Fn()(q(T([r],I(t)),e)).subscribe(u)})}function Mt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return ft.apply(void 0,T([],I(t)))}function lt(t){return new k(function(n){return t.subscribe(n)})}var ct={connector:function(){return new S}};function Sn(t,n){n===void 0&&(n=ct);var e=n.connector;return s(function(r,u){var a=e();x(t(lt(a))).subscribe(u),u.add(r.subscribe(a))})}function Lt(t){return Y(function(n,e,r){return!t||t(e,r)?n+1:n},0)}function zt(t){return s(function(n,e){var r=!1,u=null,a=null,i=function(){if(a==null||a.unsubscribe(),a=null,r){r=!1;var o=u;u=null,e.next(o)}};n.subscribe(v(e,function(o){a==null||a.unsubscribe(),r=!0,u=o,a=v(e,i,E),x(t(o)).subscribe(a)},function(){i(),e.complete()},void 0,function(){u=a=null}))})}function nn(t){return s(function(n,e){var r=!1;n.subscribe(v(e,function(u){r=!0,e.next(u)},function(){r||e.next(t),e.complete()}))})}function vt(){return s(function(t,n){t.subscribe(v(n,E))})}function st(t){return X(function(){return t})}function An(t,n){return n?function(e){return sn(n.pipe(U(1),vt()),e.pipe(An(t)))}:F(function(e,r){return t(e,r).pipe(U(1),st(e))})}function qt(t,n){n===void 0&&(n=V);var e=L(t,n);return An(function(){return e})}function Dt(){return s(function(t,n){t.subscribe(v(n,function(e){return mn(e,n)}))})}function Pt(t,n){return s(function(e,r){var u=new Set;e.subscribe(v(r,function(a){var i=t?t(a):a;u.has(i)||(u.add(i),r.next(a))})),n==null||n.subscribe(v(r,function(){return u.clear()},E))})}function tn(t){return t===void 0&&(t=dt),s(function(n,e){var r=!1;n.subscribe(v(e,function(u){r=!0,e.next(u)},function(){return r?e.complete():e.error(t())}))})}function dt(){return new K}function Ut(t,n){if(t<0)throw new an;var e=arguments.length>=2;return function(r){return r.pipe(Z(function(u,a){return a===t}),U(1),e?nn(n):tn(function(){return new an}))}}function $t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(e){return sn(e,pn.apply(void 0,T([],I(t))))}}function Bt(t,n){return s(function(e,r){var u=0;e.subscribe(v(r,function(a){t.call(n,a,u++,e)||(r.next(!1),r.complete())},function(){r.next(!0),r.complete()}))})}function Tn(t,n){return n?function(e){return e.pipe(Tn(function(r,u){return x(t(r,u)).pipe(X(function(a,i){return n(r,a,u,i)}))}))}:s(function(e,r){var u=0,a=null,i=!1;e.subscribe(v(r,function(o){a||(a=v(r,void 0,function(){a=null,i&&r.complete()}),x(t(o,u++)).subscribe(a))},function(){i=!0,!a&&r.complete()}))})}function ht(){return Tn(N)}var Gt=ht;function Kt(t,n,e){return n===void 0&&(n=1/0),n=(n||0)<1?1/0:n,s(function(r,u){return dn(r,u,t,n,void 0,!0,e)})}function Yt(t){return s(function(n,e){try{n.subscribe(e)}finally{e.add(t)}})}function Jt(t,n){return s(In(t,n,"value"))}function In(t,n,e){var r=e==="index";return function(u,a){var i=0;u.subscribe(v(a,function(o){var f=i++;t.call(n,o,f,u)&&(a.next(r?f:o),a.complete())},function(){a.next(r?-1:void 0),a.complete()}))}}function Ot(t,n){return s(In(t,n,"index"))}function Qt(t,n){var e=arguments.length>=2;return function(r){return r.pipe(t?Z(function(u,a){return t(u,a,r)}):N,U(1),e?nn(n):tn(function(){return new K}))}}function Xt(t,n,e,r){return s(function(u,a){var i;!n||typeof n=="function"?i=n:(e=n.duration,i=n.element,r=n.connector);var o=new Map,f=function(h){o.forEach(h),h(a)},l=function(h){return f(function(y){return y.error(h)})},c=0,d=!1,m=new Wn(a,function(h){try{var y=t(h),p=o.get(y);if(!p){o.set(y,p=r?r():new S);var w=g(y,p);if(a.next(w),e){var b=v(p,function(){p.complete(),b==null||b.unsubscribe()},void 0,void 0,function(){return o.delete(y)});m.add(x(e(w)).subscribe(b))}}p.next(i?i(h):h)}catch(j){l(j)}},function(){return f(function(h){return h.complete()})},l,function(){return o.clear()},function(){return d=!0,c===0});u.subscribe(m);function g(h,y){var p=new k(function(w){c++;var b=y.subscribe(w);return function(){b.unsubscribe(),--c===0&&d&&m.unsubscribe()}});return p.key=h,p}})}function Zt(){return s(function(t,n){t.subscribe(v(n,function(){n.next(!1),n.complete()},function(){n.next(!0),n.complete()}))})}function pt(t){return t<=0?function(){return B}:s(function(n,e){var r=[];n.subscribe(v(e,function(u){r.push(u),t<r.length&&r.shift()},function(){var u,a;try{for(var i=R(r),o=i.next();!o.done;o=i.next()){var f=o.value;e.next(f)}}catch(l){u={error:l}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(u)throw u.error}}e.complete()},void 0,function(){r=null}))})}function Ht(t,n){var e=arguments.length>=2;return function(r){return r.pipe(t?Z(function(u,a){return t(u,a,r)}):N,pt(1),e?nn(n):tn(function(){return new K}))}}function _t(){return s(function(t,n){t.subscribe(v(n,function(e){n.next(J.createNext(e))},function(){n.next(J.createComplete()),n.complete()},function(e){n.next(J.createError(e)),n.complete()}))})}function ne(t){return Y(A(t)?function(n,e){return t(n,e)>0?n:e}:function(n,e){return n>e?n:e})}var te=F;function ee(t,n,e){return e===void 0&&(e=1/0),A(n)?F(function(){return t},n,e):(typeof n=="number"&&(e=n),F(function(){return t},e))}function re(t,n,e){return e===void 0&&(e=1/0),s(function(r,u){var a=n;return dn(r,u,function(i,o){return t(a,i,o)},e,function(i){a=i},!1,void 0,function(){return a=null})})}function mt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=M(t),r=Cn(t,1/0);return t=P(t),s(function(u,a){Mn(r)(q(T([u],I(t)),e)).subscribe(a)})}function ue(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return mt.apply(void 0,T([],I(t)))}function ae(t){return Y(A(t)?function(n,e){return t(n,e)<0?n:e}:function(n,e){return n<e?n:e})}function Nn(t,n){var e=A(t)?t:function(){return t};return A(n)?Sn(n,{connector:e}):function(r){return new H(r,e)}}function ie(){return s(function(t,n){var e,r=!1;t.subscribe(v(n,function(u){var a=e;e=u,r&&n.next([a,u]),r=!0}))})}function oe(t){return t?function(n){return Sn(t)(n)}:function(n){return Nn(new S)(n)}}function fe(t){return function(n){var e=new Ln(t);return new H(n,function(){return e})}}function le(){return function(t){var n=new Pn;return new H(t,function(){return n})}}function ce(t,n,e,r){e&&!A(e)&&(r=e);var u=A(e)?e:void 0;return function(a){return Nn(new zn(t,n,r),u)(a)}}function ve(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length?s(function(e,r){yn(T([e],I(t)))(r)}):N}function se(t){var n,e=1/0,r;return t!=null&&(typeof t=="object"?(n=t.count,e=n===void 0?1/0:n,r=t.delay):e=t),e<=0?function(){return B}:s(function(u,a){var i=0,o,f=function(){if(o==null||o.unsubscribe(),o=null,r!=null){var c=typeof r=="number"?L(r):x(r(i)),d=v(a,function(){d.unsubscribe(),l()});c.subscribe(d)}else l()},l=function(){var c=!1;o=u.subscribe(v(a,void 0,function(){++i<e?o?f():c=!0:a.complete()})),c&&f()};l()})}function de(t){return s(function(n,e){var r,u=!1,a,i=!1,o=!1,f=function(){return o&&i&&(e.complete(),!0)},l=function(){return a||(a=new S,t(a).subscribe(v(e,function(){r?c():u=!0},function(){i=!0,f()}))),a},c=function(){o=!1,r=n.subscribe(v(e,void 0,function(){o=!0,!f()&&l().next()})),u&&(r.unsubscribe(),r=null,u=!1,c())};c()})}function he(t){t===void 0&&(t=1/0);var n;t&&typeof t=="object"?n=t:n={count:t};var e=n.count,r=e===void 0?1/0:e,u=n.delay,a=n.resetOnSuccess,i=a===void 0?!1:a;return r<=0?N:s(function(o,f){var l=0,c,d=function(){var m=!1;c=o.subscribe(v(f,function(g){i&&(l=0),f.next(g)},void 0,function(g){if(l++<r){var h=function(){c?(c.unsubscribe(),c=null,d()):m=!0};if(u!=null){var y=typeof u=="number"?L(u):x(u(g,l)),p=v(f,function(){p.unsubscribe(),h()},function(){f.complete()});y.subscribe(p)}else h()}else f.error(g)})),m&&(c.unsubscribe(),c=null,d())};d()})}function pe(t){return s(function(n,e){var r,u=!1,a,i=function(){r=n.subscribe(v(e,void 0,void 0,function(o){a||(a=new S,t(a).subscribe(v(e,function(){return r?i():u=!0}))),a&&a.next(o)})),u&&(r.unsubscribe(),r=null,u=!1,i())};i()})}function gt(t){return s(function(n,e){var r=!1,u=null;n.subscribe(v(e,function(a){r=!0,u=a})),t.subscribe(v(e,function(){if(r){r=!1;var a=u;u=null,e.next(a)}},E))})}function me(t,n){return n===void 0&&(n=V),gt(tt(t,n))}function ge(t,n){return s(xn(t,n,arguments.length>=2,!0))}function ye(t,n){return n===void 0&&(n=function(e,r){return e===r}),s(function(e,r){var u=ln(),a=ln(),i=function(f){r.next(f),r.complete()},o=function(f,l){var c=v(r,function(d){var m=l.buffer,g=l.complete;m.length===0?g?i(!1):f.buffer.push(d):!n(d,m.shift())&&i(!1)},function(){f.complete=!0;var d=l.complete,m=l.buffer;d&&i(m.length===0),c==null||c.unsubscribe()});return c};e.subscribe(o(u,a)),t.subscribe(o(a,u))})}function ln(){return{buffer:[],complete:!1}}function we(t){return s(function(n,e){var r=!1,u,a=!1,i=0;n.subscribe(v(e,function(o){a=!0,(!t||t(o,i++,n))&&(r&&e.error(new Bn("Too many matching values")),r=!0,u=o)},function(){r?(e.next(u),e.complete()):e.error(a?new $n("No matching values"):new K)}))})}function xe(t){return t<=0?N:s(function(n,e){var r=new Array(t),u=0;return n.subscribe(v(e,function(a){var i=u++;if(i<t)r[i]=a;else{var o=i%t,f=r[o];r[o]=a,e.next(f)}})),function(){r=null}})}function be(t){return s(function(n,e){var r=!1,u=v(e,function(){u==null||u.unsubscribe(),r=!0},E);x(t).subscribe(u),n.subscribe(v(e,function(a){return r&&e.next(a)}))})}function Ee(t){return s(function(n,e){var r=!1,u=0;n.subscribe(v(e,function(a){return(r||(r=!t(a,u++)))&&e.next(a)}))})}function Se(){return $(N)}function Ae(t,n){return A(n)?$(function(){return t},n):$(function(){return t})}function Te(t,n){return s(function(e,r){var u=n;return $(function(a,i){return t(u,a,i)},function(a,i){return u=i,i})(e).subscribe(r),function(){u=null}})}function Ie(t,n){return n===void 0&&(n=!1),s(function(e,r){var u=0;e.subscribe(v(r,function(a){var i=t(a,u++);(i||n)&&r.next(a),!i&&r.complete()}))})}function Ne(t,n,e){var r=A(t)||n||e?{next:t,error:n,complete:e}:t;return r?s(function(u,a){var i;(i=r.subscribe)===null||i===void 0||i.call(r);var o=!0;u.subscribe(v(a,function(f){var l;(l=r.next)===null||l===void 0||l.call(r,f),a.next(f)},function(){var f;o=!1,(f=r.complete)===null||f===void 0||f.call(r),a.complete()},function(f){var l;o=!1,(l=r.error)===null||l===void 0||l.call(r,f),a.error(f)},function(){var f,l;o&&((f=r.unsubscribe)===null||f===void 0||f.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):N}var Vn={leading:!0,trailing:!1};function yt(t,n){return n===void 0&&(n=Vn),s(function(e,r){var u=n.leading,a=n.trailing,i=!1,o=null,f=null,l=!1,c=function(){f==null||f.unsubscribe(),f=null,a&&(g(),l&&r.complete())},d=function(){f=null,l&&r.complete()},m=function(h){return f=x(t(h)).subscribe(v(r,c,d))},g=function(){if(i){i=!1;var h=o;o=null,r.next(h),!l&&m(h)}};e.subscribe(v(r,function(h){i=!0,o=h,!(f&&!f.closed)&&(u?g():m(h))},function(){l=!0,!(a&&i&&f&&!f.closed)&&r.complete()}))})}function Ve(t,n,e){n===void 0&&(n=V),e===void 0&&(e=Vn);var r=L(t,n);return yt(function(){return r},e)}function je(t){return t===void 0&&(t=V),s(function(n,e){var r=t.now();n.subscribe(v(e,function(u){var a=t.now(),i=a-r;r=a,e.next(new wt(u,i))}))})}var wt=function(){function t(n,e){this.value=n,this.interval=e}return t}();function Re(t,n,e){var r,u,a;if(e=e!=null?e:hn,_(t)?r=t:typeof t=="number"&&(u=t),n)a=function(){return n};else throw new TypeError("No observable provided to switch to");if(r==null&&u==null)throw new TypeError("No timeout provided.");return Kn({first:r,each:u,scheduler:e,with:a})}function ke(t){return t===void 0&&(t=qn),X(function(n){return{value:n,timestamp:t.now()}})}function Fe(t){return s(function(n,e){var r=new S;e.next(r.asObservable());var u=function(a){r.error(a),e.error(a)};return n.subscribe(v(e,function(a){return r==null?void 0:r.next(a)},function(){r.complete(),e.complete()},u)),t.subscribe(v(e,function(){r.complete(),e.next(r=new S)},E,u)),function(){r==null||r.unsubscribe(),r=null}})}function We(t,n){n===void 0&&(n=0);var e=n>0?n:t;return s(function(r,u){var a=[new S],i=[],o=0;u.next(a[0].asObservable()),r.subscribe(v(u,function(f){var l,c;try{for(var d=R(a),m=d.next();!m.done;m=d.next()){var g=m.value;g.next(f)}}catch(p){l={error:p}}finally{try{m&&!m.done&&(c=d.return)&&c.call(d)}finally{if(l)throw l.error}}var h=o-t+1;if(h>=0&&h%e===0&&a.shift().complete(),++o%e===0){var y=new S;a.push(y),u.next(y.asObservable())}},function(){for(;a.length>0;)a.shift().complete();u.complete()},function(f){for(;a.length>0;)a.shift().error(f);u.error(f)},function(){i=null,a=null}))})}function Ce(t){for(var n,e,r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var a=(n=M(r))!==null&&n!==void 0?n:V,i=(e=r[0])!==null&&e!==void 0?e:null,o=r[1]||1/0;return s(function(f,l){var c=[],d=!1,m=function(p){var w=p.window,b=p.subs;w.complete(),b.unsubscribe(),D(c,p),d&&g()},g=function(){if(c){var p=new W;l.add(p);var w=new S,b={window:w,subs:p,seen:0};c.push(b),l.next(w.asObservable()),C(p,a,function(){return m(b)},t)}};i!==null&&i>=0?C(l,a,g,i,!0):d=!0,g();var h=function(p){return c.slice().forEach(p)},y=function(p){h(function(w){var b=w.window;return p(b)}),p(l),l.unsubscribe()};return f.subscribe(v(l,function(p){h(function(w){w.window.next(p),o<=++w.seen&&m(w)})},function(){return y(function(p){return p.complete()})},function(p){return y(function(w){return w.error(p)})})),function(){c=null}})}function Me(t,n){return s(function(e,r){var u=[],a=function(i){for(;0<u.length;)u.shift().error(i);r.error(i)};x(t).subscribe(v(r,function(i){var o=new S;u.push(o);var f=new W,l=function(){D(u,o),o.complete(),f.unsubscribe()},c;try{c=x(n(i))}catch(d){a(d);return}r.next(o.asObservable()),f.add(c.subscribe(v(r,l,E,a)))},E)),e.subscribe(v(r,function(i){var o,f,l=u.slice();try{for(var c=R(l),d=c.next();!d.done;d=c.next()){var m=d.value;m.next(i)}}catch(g){o={error:g}}finally{try{d&&!d.done&&(f=c.return)&&f.call(c)}finally{if(o)throw o.error}}},function(){for(;0<u.length;)u.shift().complete();r.complete()},a,function(){for(;0<u.length;)u.shift().unsubscribe()}))})}function Le(t){return s(function(n,e){var r,u,a=function(o){r.error(o),e.error(o)},i=function(){u==null||u.unsubscribe(),r==null||r.complete(),r=new S,e.next(r.asObservable());var o;try{o=x(t())}catch(f){a(f);return}o.subscribe(u=v(e,i,i,a))};i(),n.subscribe(v(e,function(o){return r.next(o)},function(){r.complete(),e.complete()},a,function(){u==null||u.unsubscribe(),r=null}))})}function ze(t){return bn(wn,t)}function xt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return s(function(e,r){wn.apply(void 0,T([e],I(t))).subscribe(r)})}function qe(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return xt.apply(void 0,T([],I(t)))}export{Xt as $,Pn as A,fn as B,H as C,Ct as D,Mt as E,Sn as F,Lt as G,zt as H,nn as I,qt as J,An as K,Dt as L,Pt as M,J as N,Ut as O,$t as P,Bt as Q,Gt as R,Bn as S,Gn as T,ht as U,Tn as V,Kt as W,Yt as X,Jt as Y,Ot as Z,Qt as _,Zn as a,vt as a0,Zt as a1,Ht as a2,st as a3,_t as a4,ne as a5,te as a6,ee as a7,re as a8,ue as a9,Ie as aA,Ne as aB,yt as aC,Ve as aD,tn as aE,je as aF,Kn as aG,Re as aH,ke as aI,it as aJ,Fe as aK,We as aL,Ce as aM,Me as aN,Le as aO,ze as aP,qe as aQ,En as aR,ft as aS,mt as aT,xt as aU,ae as aa,Nn as ab,ie as ac,oe as ad,fe as ae,le as af,ce as ag,ve as ah,Y as ai,se as aj,de as ak,he as al,pe as am,Dn as an,gt as ao,me as ap,ge as aq,ye as ar,we as as,xe as at,be as au,Ee as av,Se as aw,Ae as ax,Te as ay,pt as az,P as b,_n as c,un as d,an as e,$n as f,nt as g,pn as h,tt as i,L as j,rt as k,It as l,Nt as m,At as n,St as o,Vt as p,jt as q,Tt as r,Rt as s,Un as t,kt as u,ut as v,Ft as w,ot as x,Wt as y,wn as z};
