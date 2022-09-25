import{c as et,a as d,F as nt,j as Y,u as rt,r as B,d as K}from"./index.080263fe.js";const X=u=>{if(!!u)return`${u.substring(0,5)}...${u.substring(39,42)}`};var tt={exports:{}};(function(u,$){(function(N,v){u.exports=v()})(et,function(){var N=1e3,v=6e4,I=36e5,L="millisecond",_="second",D="minute",x="hour",y="day",k="week",p="month",A="quarter",M="year",S="date",F="Invalid Date",U=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,J={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},j=function(a,n,t){var r=String(a);return!r||r.length>=n?a:""+Array(n+1-r.length).join(t)+a},Z={s:j,z:function(a){var n=-a.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+j(r,2,"0")+":"+j(e,2,"0")},m:function a(n,t){if(n.date()<t.date())return-a(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,p),s=t-e<0,i=n.clone().add(r+(s?-1:1),p);return+(-(r+(t-e)/(s?e-i:i-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:p,y:M,w:k,d:y,D:S,h:x,m:D,s:_,ms:L,Q:A}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},T="en",w={};w[T]=J;var b=function(a){return a instanceof P},V=function a(n,t,r){var e;if(!n)return T;if(typeof n=="string"){var s=n.toLowerCase();w[s]&&(e=s),t&&(w[s]=t,e=s);var i=n.split("-");if(!e&&i.length>1)return a(i[0])}else{var o=n.name;w[o]=n,e=o}return!r&&e&&(T=e),e||!r&&T},f=function(a,n){if(b(a))return a.clone();var t=typeof n=="object"?n:{};return t.date=a,t.args=arguments,new P(t)},c=Z;c.l=V,c.i=b,c.w=function(a,n){return f(a,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var P=function(){function a(t){this.$L=V(t.locale,null,!0),this.parse(t)}var n=a.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,s=r.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(U);if(i){var o=i[2]-1||0,h=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==F},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return c.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,s=!!c.u(r)||r,i=c.p(t),o=function(W,g){var H=c.w(e.$u?Date.UTC(e.$y,g,W):new Date(e.$y,g,W),e);return s?H:H.endOf(y)},h=function(W,g){return c.w(e.toDate()[W].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(g)),e)},l=this.$W,m=this.$M,C=this.$D,O="set"+(this.$u?"UTC":"");switch(i){case M:return s?o(1,0):o(31,11);case p:return s?o(1,m):o(0,m+1);case k:var G=this.$locale().weekStart||0,E=(l<G?l+7:l)-G;return o(s?C-E:C+(6-E),m);case y:case S:return h(O+"Hours",0);case x:return h(O+"Minutes",1);case D:return h(O+"Seconds",2);case _:return h(O+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,s=c.p(t),i="set"+(this.$u?"UTC":""),o=(e={},e[y]=i+"Date",e[S]=i+"Date",e[p]=i+"Month",e[M]=i+"FullYear",e[x]=i+"Hours",e[D]=i+"Minutes",e[_]=i+"Seconds",e[L]=i+"Milliseconds",e)[s],h=s===y?this.$D+(r-this.$W):r;if(s===p||s===M){var l=this.clone().set(S,1);l.$d[o](h),l.init(),this.$d=l.set(S,Math.min(this.$D,l.daysInMonth())).$d}else o&&this.$d[o](h);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[c.p(t)]()},n.add=function(t,r){var e,s=this;t=Number(t);var i=c.p(r),o=function(m){var C=f(s);return c.w(C.date(C.date()+Math.round(m*t)),s)};if(i===p)return this.set(p,this.$M+t);if(i===M)return this.set(M,this.$y+t);if(i===y)return o(1);if(i===k)return o(7);var h=(e={},e[D]=v,e[x]=I,e[_]=N,e)[i]||1,l=this.$d.getTime()+t*h;return c.w(l,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||F;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=c.z(this),o=this.$H,h=this.$m,l=this.$M,m=e.weekdays,C=e.months,O=function(g,H,q,R){return g&&(g[H]||g(r,s))||q[H].slice(0,R)},G=function(g){return c.s(o%12||12,g,"0")},E=e.meridiem||function(g,H,q){var R=g<12?"AM":"PM";return q?R.toLowerCase():R},W={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:c.s(l+1,2,"0"),MMM:O(e.monthsShort,l,C,3),MMMM:O(C,l),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:O(e.weekdaysMin,this.$W,m,2),ddd:O(e.weekdaysShort,this.$W,m,3),dddd:m[this.$W],H:String(o),HH:c.s(o,2,"0"),h:G(1),hh:G(2),a:E(o,h,!0),A:E(o,h,!1),m:String(h),mm:c.s(h,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:i};return s.replace(z,function(g,H){return H||W[g]||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var s,i=c.p(r),o=f(t),h=(o.utcOffset()-this.utcOffset())*v,l=this-o,m=c.m(this,o);return m=(s={},s[M]=m/12,s[p]=m,s[A]=m/3,s[k]=(l-h)/6048e5,s[y]=(l-h)/864e5,s[x]=l/I,s[D]=l/v,s[_]=l/N,s)[i]||l,e?m:c.a(m)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return w[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),s=V(t,r,!0);return s&&(e.$L=s),e},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},a}(),Q=P.prototype;return f.prototype=Q,[["$ms",L],["$s",_],["$m",D],["$H",x],["$W",y],["$M",p],["$y",M],["$D",S]].forEach(function(a){Q[a[1]]=function(n){return this.$g(n,a[0],a[1])}}),f.extend=function(a,n){return a.$i||(a(n,P,f),a.$i=!0),f},f.locale=V,f.isDayjs=b,f.unix=function(a){return f(1e3*a)},f.en=w[T],f.Ls=w,f.p={},f})})(tt);const it=tt.exports,st=u=>{const $=u.getHours();if($>=5&&$<12)return"Good Morning";if($>=12&&$<17)return"Good Afternoon";if($>=17&&$<=23||$<5)return"Good Evening"},at=({data:u})=>u?d("div",{className:"",children:Y("table",{className:"table-zebra table w-full",children:[d("thead",{children:Y("tr",{children:[d("th",{}),d("th",{children:"Address"}),d("th",{children:"ENS"})]})}),d("tbody",{children:Object.keys(u).map(($,N)=>Y("tr",{children:[d("th",{children:N+1}),d("td",{children:d("a",{className:"text-purple-300",href:`https://app.ens.domains/address/0x${$}`,target:"_blank",rel:"noreferrer",children:`0x${$}`})}),d("td",{className:"flex max-w-[600px] flex-row flex-wrap",children:u[$].map(v=>d("button",{className:"mr-2 mb-1",onClick:()=>{window.open(`https://app.ens.domains/name/${v}.eth/details`)},children:v},v))})]},$))})]})}):d(nt,{});function ut(){var D,x,y,k,p,A,M,S,F,U,z,J,j,Z,T,w;const{auth:u,ensData:$}=rt(),[N,v]=B.exports.useState(new Date),[I,L]=B.exports.useState("Table");B.exports.useEffect(()=>{const b=setInterval(()=>v(new Date),1e3);return $.rawOwnership||K.ensData.getRawOwnership(),()=>{clearInterval(b)}},[]);const _=()=>{K.auth.connect()};return d("div",{className:'h-full w-full overflow-x-hidden bg-[url("/ens-analytics-fe/background.jpg")] bg-cover p-16',children:Y("div",{className:"rounded-xl border border-gray-100 bg-gray-500/20 bg-clip-padding p-4 backdrop-blur-md",children:[Y("div",{className:"flex flex-col items-center",children:[d("div",{className:"text-8xl",children:it(N).format("hh:mm")}),(y=(x=(D=u==null?void 0:u.wallet)==null?void 0:D.accounts)==null?void 0:x[0])!=null&&y.address?d("div",{className:"py-8 text-center text-4xl",children:Y("span",{className:"text-center",children:[st(N),", ",((M=(A=(p=(k=u==null?void 0:u.wallet)==null?void 0:k.accounts)==null?void 0:p[0])==null?void 0:A.ens)==null?void 0:M.name)||X((U=(F=(S=u==null?void 0:u.wallet)==null?void 0:S.accounts)==null?void 0:F[0])==null?void 0:U.address)]})}):d("button",{className:"btn btn-primary my-8",onClick:_,disabled:!!((j=(J=(z=u==null?void 0:u.wallet)==null?void 0:z.accounts)==null?void 0:J[0])!=null&&j.address),children:X((w=(T=(Z=u==null?void 0:u.wallet)==null?void 0:Z.accounts)==null?void 0:T[0])==null?void 0:w.address)||"Connect My Wallet"})]}),Y("div",{className:"flex h-full w-full flex-col items-center",children:[d("div",{className:"tabs",children:["Table","Graph","Hoarder"].map(b=>d("a",{className:`tab tab-bordered ${I===b?"tab-active":""}`,onClick:()=>L(b),children:b},b))}),d("div",{className:"mt-8",children:I==="Table"&&d(at,{data:$.rawOwnership})})]})]})})}export{ut as default};