var $s=Object.defineProperty;var Cs=(e,t,n)=>t in e?$s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Re=(e,t,n)=>Cs(e,typeof t!="symbol"?t+"":t,n);import{X as B,Y as H,Z as P,$ as m,a0 as xe,a1 as xt,a2 as Ko,a3 as ve,a4 as K,a5 as k,a6 as U,a7 as F,a8 as Ss,a9 as ur,aa as $e,ab as V,ac as Qn,ad as Yn,ae as ft,af as T,ag as _,ah as ks,ai as an,aj as qt,ak as qe,al as Es,am as _t,an as Kt,ao as Ds,ap as As,aq as kn,ar as Ms,as as Nt,at as Bo,au as Ts,av as W,aw as Gr,ax as Fs,ay as Is,az as cr,aA as Ls,aB as Os,aC as Ps,aD as Hn,aE as qs,aF as _s,aG as ie,aH as Rs,aI as zs,aJ as Ks}from"./app-k7CCx0mS.js";var Bs=e=>e!=null,Ns=e=>e.filter(Bs);function Hs(e){return(...t)=>{for(const n of e)n&&n(...t)}}var D=e=>typeof e=="function"&&!e.length?e():e,Xn=e=>Array.isArray(e)?e:e?[e]:[];function Gs(e,...t){return typeof e=="function"?e(...t):e}var Us=V;function Vs(e,t,n,r){const o=e.length,s=t.length;let a=0;if(!s){for(;a<o;a++)n(e[a]);return}if(!o){for(;a<s;a++)r(t[a]);return}for(;a<s&&t[a]===e[a];a++);let l,i;t=t.slice(a),e=e.slice(a);for(l of t)e.includes(l)||r(l);for(i of e)t.includes(i)||n(i)}function js(e){const[t,n]=B(),r=e!=null&&e.throw?(u,f)=>{throw n(u instanceof Error?u:new Error(f)),u}:(u,f)=>{n(u instanceof Error?u:new Error(f))},o=e!=null&&e.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),s=e!=null&&e.prefix?`${e.prefix}.`:"",a=new Map,l=new Proxy({},{get(u,f){let g=a.get(f);g||(g=B(void 0,{equals:!1}),a.set(f,g)),g[0]();const y=o.reduce((v,b)=>{if(v!==null||!b)return v;try{return b.getItem(`${s}${f}`)}catch(p){return r(p,`Error reading ${s}${f} from ${b.name}`),null}},null);return y!==null&&(e!=null&&e.deserializer)?e.deserializer(y,f,e.options):y}}),i=(u,f,g)=>{const y=e!=null&&e.serializer?e.serializer(f,u,g??e.options):f,v=`${s}${u}`;o.forEach(p=>{try{p.getItem(v)!==y&&p.setItem(v,y)}catch(w){r(w,`Error setting ${s}${u} to ${y} in ${p.name}`)}});const b=a.get(u);b&&b[1]()},c=u=>o.forEach(f=>{try{f.removeItem(`${s}${u}`)}catch(g){r(g,`Error removing ${s}${u} from ${f.name}`)}}),h=()=>o.forEach(u=>{try{u.clear()}catch(f){r(f,`Error clearing ${u.name}`)}}),d=()=>{const u={},f=(g,y)=>{if(!u.hasOwnProperty(g)){const v=y&&(e!=null&&e.deserializer)?e.deserializer(y,g,e.options):y;v&&(u[g]=v)}};return o.forEach(g=>{if(typeof g.getAll=="function"){let y;try{y=g.getAll()}catch(v){r(v,`Error getting all values from in ${g.name}`)}for(const v of y)f(v,y[v])}else{let y=0,v;try{for(;v=g.key(y++);)u.hasOwnProperty(v)||f(v,g.getItem(v))}catch(b){r(b,`Error getting all values from ${g.name}`)}}}),u};return(e==null?void 0:e.sync)!==!1&&xt(()=>{const u=f=>{var y;let g=!1;o.forEach(v=>{try{v!==f.storageArea&&f.key&&f.newValue!==v.getItem(f.key)&&(f.newValue?v.setItem(f.key,f.newValue):v.removeItem(f.key),g=!0)}catch(b){r(b,`Error synching api ${v.name} from storage event (${f.key}=${f.newValue})`)}}),g&&f.key&&((y=a.get(f.key))==null||y[1]())};"addEventListener"in globalThis?(globalThis.addEventListener("storage",u),V(()=>globalThis.removeEventListener("storage",u))):(o.forEach(f=>{var g;return(g=f.addEventListener)==null?void 0:g.call(f,"storage",u)}),V(()=>o.forEach(f=>{var g;return(g=f.removeEventListener)==null?void 0:g.call(f,"storage",u)})))}),[l,i,{clear:h,error:t,remove:c,toJSON:d}]}var Ws=js,Qs=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),Ur=e=>{if(!e)return"";let t="";for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r=="boolean"?`; ${n}`:`; ${n}=${r}`}return t},ze=Qs({_cookies:[globalThis.document,"cookie"],getItem:e=>{var t;return((t=ze._cookies[0][ze._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))==null?void 0:t.pop())??null},setItem:(e,t,n)=>{const r=ze.getItem(e);ze._cookies[0][ze._cookies[1]]=`${e}=${t}${Ur(n)}`;const o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:ze});window.dispatchEvent(o)},removeItem:e=>{ze._cookies[0][ze._cookies[1]]=`${e}=deleted${Ur({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return ze._cookies[0][ze._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,o)=>(!t&&o&&n++===e&&(t=o),"")),t},get length(){let e=0;return ze._cookies[0][ze._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,"")),e}}),Ys=1024,Gt=796,No=700,Xs="bottom-right",Zn="bottom",Zs="system",Js=!1,Cn=500,ea=500,Sn=500,ta=Object.keys(Qn)[0],Vr=1,na=Object.keys(Yn)[0],Ho=xe({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function N(){return $e(Ho)}var jr=class extends Error{},Go=xe(void 0),ra=e=>{const[t,n]=B(null),r=()=>{const a=t();a!=null&&(a.close(),n(null))},o=(a,l)=>{if(t()!=null)return;const i=window.open("","TSQD-Devtools-Panel",`width=${a},height=${l},popup`);if(!i)throw new jr("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");i.document.head.innerHTML="",i.document.body.innerHTML="",Ss(i.document),i.document.title="TanStack Query Devtools",i.document.body.style.margin="0",i.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),n(null)}),[...(N().shadowDOMTarget||document).styleSheets].forEach(c=>{try{const h=[...c.cssRules].map(g=>g.cssText).join(""),d=document.createElement("style"),u=c.ownerNode;let f="";u&&"id"in u&&(f=u.id),f&&d.setAttribute("id",f),d.textContent=h,i.document.head.appendChild(d)}catch{const d=document.createElement("link");if(c.href==null)return;d.rel="stylesheet",d.type=c.type,d.media=c.media.toString(),d.href=c.href,i.document.head.appendChild(d)}}),ur(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],i.document),e.setLocalStore("pip_open","true"),n(i)};H(()=>{if((e.localStore.pip_open??"false")==="true"&&!e.disabled)try{o(Number(window.innerWidth),Number(e.localStore.height||ea))}catch(l){if(l instanceof jr){console.error(l.message),e.setLocalStore("pip_open","false"),e.setLocalStore("open","false");return}throw l}}),H(()=>{const a=(N().shadowDOMTarget||document).querySelector("#_goober"),l=t();if(a&&l){const i=new MutationObserver(()=>{const c=(N().shadowDOMTarget||l.document).querySelector("#_goober");c&&(c.textContent=a.textContent)});i.observe(a,{childList:!0,subtree:!0,characterDataOldValue:!0}),V(()=>{i.disconnect()})}});const s=P(()=>({pipWindow:t(),requestPipWindow:o,closePipWindow:r,disabled:e.disabled??!1}));return m(Go.Provider,{value:s,get children(){return e.children}})},dr=()=>P(()=>{const t=$e(Go);if(!t)throw new Error("usePiPWindow must be used within a PiPProvider");return t()}),Uo=xe(()=>"dark");function Ce(){return $e(Uo)}var Vo={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},oa=Object.keys(Vo).join("|"),ia=new RegExp(oa,"g");function sa(e){return e.replace(ia,t=>Vo[t])}var Fe={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Wr(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:Fe.MATCHES,!n.accessors){const a=Qr(e,t,n);return{rankedValue:e,rank:a,accessorIndex:-1,accessorThreshold:n.threshold,passed:a>=n.threshold}}const o=ca(e,n.accessors),s={rankedValue:e,rank:Fe.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let a=0;a<o.length;a++){const l=o[a];let i=Qr(l.itemValue,t,n);const{minRanking:c,maxRanking:h,threshold:d=n.threshold}=l.attributes;i<c&&i>=Fe.MATCHES?i=c:i>h&&(i=h),i=Math.min(i,h),i>=d&&i>s.rank&&(s.rank=i,s.passed=!0,s.accessorIndex=a,s.accessorThreshold=d,s.rankedValue=l.itemValue)}return s}function Qr(e,t,n){return e=Yr(e,n),t=Yr(t,n),t.length>e.length?Fe.NO_MATCH:e===t?Fe.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Fe.EQUAL:e.startsWith(t)?Fe.STARTS_WITH:e.includes(` ${t}`)?Fe.WORD_STARTS_WITH:e.includes(t)?Fe.CONTAINS:t.length===1?Fe.NO_MATCH:aa(e).includes(t)?Fe.ACRONYM:la(e,t))}function aa(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(s=>{t+=s.substr(0,1)})}),t}function la(e,t){let n=0,r=0;function o(i,c,h){for(let d=h,u=c.length;d<u;d++)if(c[d]===i)return n+=1,d+1;return-1}function s(i){const c=1/i,h=n/t.length;return Fe.MATCHES+h*c}const a=o(t[0],e,0);if(a<0)return Fe.NO_MATCH;r=a;for(let i=1,c=t.length;i<c;i++){const h=t[i];if(r=o(h,e,r),!(r>-1))return Fe.NO_MATCH}const l=r-a;return s(l)}function Yr(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=sa(e)),e}function ua(e,t){let n=t;typeof t=="object"&&(n=t.accessor);const r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function ca(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const s=t[r],a=da(s),l=ua(e,s);for(let i=0,c=l.length;i<c;i++)n.push({itemValue:l[i],attributes:a})}return n}var Xr={maxRanking:1/0,minRanking:-1/0};function da(e){return typeof e=="function"?Xr:{...Xr,...e}}var fa={data:""},ga=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||fa,ha=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,va=/\/\*[^]*?\*\/|  +/g,Zr=/\n+/g,Mt=(e,t)=>{let n="",r="",o="";for(let s in e){let a=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+a+";":r+=s[1]=="f"?Mt(a,s):s+"{"+Mt(a,s[1]=="k"?"":t)+"}":typeof a=="object"?r+=Mt(a,t?t.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,i=>/&/.test(i)?i.replace(/&/g,l):l?l+" "+i:i)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Mt.p?Mt.p(s,a):s+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+r},lt={},jo=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+jo(e[n]);return t}return e},ya=(e,t,n,r,o)=>{let s=jo(e),a=lt[s]||(lt[s]=(i=>{let c=0,h=11;for(;c<i.length;)h=101*h+i.charCodeAt(c++)>>>0;return"go"+h})(s));if(!lt[a]){let i=s!==e?e:(c=>{let h,d,u=[{}];for(;h=ha.exec(c.replace(va,""));)h[4]?u.shift():h[3]?(d=h[3].replace(Zr," ").trim(),u.unshift(u[0][d]=u[0][d]||{})):u[0][h[1]]=h[2].replace(Zr," ").trim();return u[0]})(e);lt[a]=Mt(o?{["@keyframes "+a]:i}:i,n?"":"."+a)}let l=n&&lt.g?lt.g:null;return n&&(lt.g=lt[a]),((i,c,h,d)=>{d?c.data=c.data.replace(d,i):c.data.indexOf(i)===-1&&(c.data=h?i+c.data:c.data+i)})(lt[a],t,r,l),a},ma=(e,t,n)=>e.reduce((r,o,s)=>{let a=t[s];if(a&&a.call){let l=a(n),i=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=i?"."+i:l&&typeof l=="object"?l.props?"":Mt(l,""):l===!1?"":l}return r+o+(a??"")},"");function Y(e){let t=this||{},n=e.call?e(t.p):e;return ya(n.unshift?n.raw?ma(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,ga(t.target),t.g,t.o,t.k)}Y.bind({g:1});Y.bind({k:1});function Wo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Wo(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function L(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Wo(e))&&(r&&(r+=" "),r+=t);return r}function ba(e,t){const n=Nt(e),{onChange:r}=t;let o=new Set(t.appear?void 0:n);const s=new WeakSet,[a,l]=B([],{equals:!1}),[i]=Ls(),c=d=>{l(u=>(u.push.apply(u,d),u));for(const u of d)s.delete(u)},h=(d,u,f)=>d.splice(f,0,u);return P(d=>{const u=a(),f=e();if(f[Bo],Nt(i))return i(),d;if(u.length){const g=d.filter(y=>!u.includes(y));return u.length=0,r({list:g,added:[],removed:[],unchanged:g,finishRemoved:c}),g}return Nt(()=>{const g=new Set(f),y=f.slice(),v=[],b=[],p=[];for(const x of f)(o.has(x)?p:v).push(x);let w=!v.length;for(let x=0;x<d.length;x++){const $=d[x];g.has($)||(s.has($)||(b.push($),s.add($)),h(y,$,x)),w&&$!==y[x]&&(w=!1)}return!b.length&&w?d:(r({list:y,added:v,removed:b,unchanged:p,finishRemoved:c}),o=g,y)})},t.appear?[]:n.slice())}function Me(...e){return Hs(e)}var Jr=e=>e instanceof Element;function Jn(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Jn(e(),t);if(Array.isArray(e)){const n=[];for(const r of e){const o=Jn(r,t);o&&(Array.isArray(o)?n.push.apply(n,o):n.push(o))}return n.length?n:null}return null}function pa(e,t=Jr,n=Jr){const r=P(e),o=P(()=>Jn(r(),t));return o.toArray=()=>{const s=o();return Array.isArray(s)?s:s?[s]:[]},o}function wa(e){return P(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Qo(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function xa(e,t,n,r){const{onBeforeEnter:o,onEnter:s,onAfterEnter:a}=t;o==null||o(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r==null?void 0:r();s==null||s(n,()=>l())}),Qo(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!s||s.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))});function l(i){(!i||i.target===n)&&(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),a==null||a(n))}}function $a(e,t,n,r){const{onBeforeExit:o,onExit:s,onAfterExit:a}=t;if(!n.parentNode)return r==null?void 0:r();o==null||o(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),s==null||s(n,()=>l()),Qo(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!s||s.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))});function l(i){(!i||i.target===n)&&(r==null||r(),n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),a==null||a(n))}}var eo=e=>{const t=wa(e);return ba(pa(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:o,list:s}){const a=t();for(const i of n)xa(a,e,i);const l=[];for(const i of s)i.isConnected&&(i instanceof HTMLElement||i instanceof SVGElement)&&l.push({el:i,rect:i.getBoundingClientRect()});queueMicrotask(()=>{const i=[];for(const{el:c,rect:h}of l)if(c.isConnected){const d=c.getBoundingClientRect(),u=h.left-d.left,f=h.top-d.top;(u||f)&&(c.style.transform=`translate(${u}px, ${f}px)`,c.style.transitionDuration="0s",i.push(c))}document.body.offsetHeight;for(const c of i){let h=function(d){(d.target===c||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c.classList.remove(...a.move))};c.classList.add(...a.move),c.style.transform=c.style.transitionDuration="",c.addEventListener("transitionend",h)}});for(const i of r)$a(a,e,i,()=>o([i]))}})},Gn=Symbol("fallback");function to(e){for(const t of e)t.dispose()}function Ca(e,t,n,r={}){const o=new Map;return V(()=>to(o.values())),()=>{const a=e()||[];return a[Bo],Nt(()=>{var h,d;if(!a.length)return to(o.values()),o.clear(),r.fallback?[Gr(f=>(o.set(Gn,{dispose:f}),r.fallback()))]:[];const l=new Array(a.length),i=o.get(Gn);if(!o.size||i){i==null||i.dispose(),o.delete(Gn);for(let u=0;u<a.length;u++){const f=a[u],g=t(f,u);s(l,f,u,g)}return l}const c=new Set(o.keys());for(let u=0;u<a.length;u++){const f=a[u],g=t(f,u);c.delete(g);const y=o.get(g);y?(l[u]=y.mapped,(h=y.setIndex)==null||h.call(y,u),y.setItem(()=>f)):s(l,f,u,g)}for(const u of c)(d=o.get(u))==null||d.dispose(),o.delete(u);return l})};function s(a,l,i,c){Gr(h=>{const[d,u]=B(l),f={setItem:u,dispose:h};if(n.length>1){const[g,y]=B(i);f.setIndex=y,f.mapped=n(d,g)}else f.mapped=n(d);o.set(c,f),a[i]=f.mapped})}}function En(e){const{by:t}=e;return P(Ca(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function Sa(e,t,n,r){return e.addEventListener(t,n,r),Us(e.removeEventListener.bind(e,t,n,r))}function ka(e,t,n,r){const o=()=>{Xn(D(e)).forEach(s=>{s&&Xn(D(t)).forEach(a=>Sa(s,a,n,r))})};typeof e=="function"?H(o):U(o)}function Ea(e,t){const n=new ResizeObserver(e);return V(n.disconnect.bind(n)),{observe:r=>n.observe(r,t),unobserve:n.unobserve.bind(n)}}function Da(e,t,n){const r=new WeakMap,{observe:o,unobserve:s}=Ea(a=>{for(const l of a){const{contentRect:i,target:c}=l,h=Math.round(i.width),d=Math.round(i.height),u=r.get(c);(!u||u.width!==h||u.height!==d)&&(t(i,c,l),r.set(c,{width:h,height:d}))}},n);H(a=>{const l=Ns(Xn(D(e)));return Vs(l,a,o,s),l},[])}var Aa=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function no(e){const t={};let n;for(;n=Aa.exec(e);)t[n[1]]=n[2];return t}function Ln(e,t){if(typeof e=="string"){if(typeof t=="string")return`${e};${t}`;e=no(e)}else typeof t=="string"&&(t=no(t));return{...e,...t}}function Ma(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function er(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ta(e){return typeof e=="number"}function Rt(e){return Object.prototype.toString.call(e)==="[object String]"}function Fa(e){return typeof e=="function"}function fn(e){return t=>`${e()}-${t}`}function Ne(e,t){return e?e===t||e.contains(t):!1}function on(e,t=!1){const{activeElement:n}=Je(e);if(!(n!=null&&n.nodeName))return null;if(Yo(n)&&n.contentDocument)return on(n.contentDocument.body,t);if(t){const r=n.getAttribute("aria-activedescendant");if(r){const o=Je(n).getElementById(r);if(o)return o}}return n}function Ia(e){return Je(e).defaultView||window}function Je(e){return e?e.ownerDocument||e:document}function Yo(e){return e.tagName==="IFRAME"}var fr=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(fr||{});function gr(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)==null?void 0:t.platform)||window.navigator.platform):!1}function On(){return gr(/^Mac/i)}function La(){return gr(/^iPhone/i)}function Oa(){return gr(/^iPad/i)||On()&&navigator.maxTouchPoints>1}function Pa(){return La()||Oa()}function qa(){return On()||Pa()}function de(e,t){return t&&(Fa(t)?t(e):t[0](t[1],e)),e==null?void 0:e.defaultPrevented}function we(e){return t=>{for(const n of e)de(t,n)}}function _a(e){return On()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function De(e){if(e)if(Ra())e.focus({preventScroll:!0});else{const t=za(e);e.focus(),Ka(t)}}var wn=null;function Ra(){if(wn==null){wn=!1;try{document.createElement("div").focus({get preventScroll(){return wn=!0,!0}})}catch{}}return wn}function za(e){let t=e.parentNode;const n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function Ka(e){for(const{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var Xo=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Ba=[...Xo,'[tabindex]:not([tabindex="-1"]):not([disabled])'],hr=Xo.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Na=Ba.join(':not([hidden]):not([tabindex="-1"]),');function Zo(e,t){const r=Array.from(e.querySelectorAll(hr)).filter(ro);return t&&ro(e)&&r.unshift(e),r.forEach((o,s)=>{if(Yo(o)&&o.contentDocument){const a=o.contentDocument.body,l=Zo(a,!1);r.splice(s,1,...l)}}),r}function ro(e){return Jo(e)&&!Ha(e)}function Jo(e){return e.matches(hr)&&vr(e)}function Ha(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function vr(e,t){return e.nodeName!=="#comment"&&Ga(e)&&Ua(e,t)&&(!e.parentElement||vr(e.parentElement,e))}function Ga(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;const{display:t,visibility:n}=e.style;let r=t!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!e.ownerDocument.defaultView)return r;const{getComputedStyle:o}=e.ownerDocument.defaultView,{display:s,visibility:a}=o(e);r=s!=="none"&&a!=="hidden"&&a!=="collapse"}return r}function Ua(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Va(e,t,n){const r=t!=null&&t.tabbable?Na:hr,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(s){var a;return(a=t==null?void 0:t.from)!=null&&a.contains(s)?NodeFilter.FILTER_REJECT:s.matches(r)&&vr(s)&&(!(t!=null&&t.accept)||t.accept(s))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(o.currentNode=t.from),o}function oo(e){for(;e&&!ja(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function ja(e){const t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function Wa(){}function Qa(e,t){const[n,r]=e;let o=!1;const s=t.length;for(let a=s,l=0,i=a-1;l<a;i=l++){const[c,h]=t[l],[d,u]=t[i],[,f]=t[i===0?a-1:i-1]||[0,0],g=(h-u)*(n-c)-(c-d)*(r-h);if(u<h){if(r>=u&&r<h){if(g===0)return!0;g>0&&(r===u?r>f&&(o=!o):o=!o)}}else if(h<u){if(r>h&&r<=u){if(g===0)return!0;g<0&&(r===u?r<f&&(o=!o):o=!o)}}else if(r==h&&(n>=d&&n<=c||n>=c&&n<=d))return!0}return o}function X(e,t){return W(e,t)}var en=new Map,io=new Set;function so(){if(typeof window>"u")return;const e=n=>{if(!n.target)return;let r=en.get(n.target);r||(r=new Set,en.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{if(!n.target)return;const r=en.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),en.delete(n.target)),en.size===0)){for(const o of io)o();io.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?so():document.addEventListener("DOMContentLoaded",so));function tr(e,t){const n=ao(e,t,"left"),r=ao(e,t,"top"),o=t.offsetWidth,s=t.offsetHeight;let a=e.scrollLeft,l=e.scrollTop;const i=a+e.offsetWidth,c=l+e.offsetHeight;n<=a?a=n:n+o>i&&(a+=n+o-i),r<=l?l=r:r+s>c&&(l+=r+s-c),e.scrollLeft=a,e.scrollTop=l}function ao(e,t,n){const r=n==="left"?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Ya(e,t){var n,r;if(document.contains(e)){const o=document.scrollingElement||document.documentElement;if(window.getComputedStyle(o).overflow==="hidden"){let a=oo(e);for(;e&&a&&e!==o&&a!==o;)tr(a,e),e=a,a=oo(e)}else{const{left:a,top:l}=e.getBoundingClientRect();(n=e==null?void 0:e.scrollIntoView)==null||n.call(e,{block:"nearest"});const{left:i,top:c}=e.getBoundingClientRect();(Math.abs(a-i)>1||Math.abs(l-c)>1)&&((r=e.scrollIntoView)==null||r.call(e,{block:"nearest"}))}}}var ei={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function He(e){return t=>(e(t),()=>e(void 0))}function Pn(e,t){const[n,r]=B(lo(t==null?void 0:t()));return H(()=>{var o;r(((o=e())==null?void 0:o.tagName.toLowerCase())||lo(t==null?void 0:t()))}),n}function lo(e){return Rt(e)?e:void 0}function fe(e){const[t,n]=ie(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return m(Rs,W(n,{get component(){return t.as}}))}var Xa=["id","name","validationState","required","disabled","readOnly"];function Za(e){const t=`form-control-${qe()}`,n=X({id:t},e),[r,o]=B(),[s,a]=B(),[l,i]=B(),[c,h]=B(),d=(y,v,b)=>{const p=b!=null||r()!=null;return[b,r(),p&&v!=null?y:void 0].filter(Boolean).join(" ")||void 0},u=y=>[l(),c(),y].filter(Boolean).join(" ")||void 0,f=P(()=>({"data-valid":D(n.validationState)==="valid"?"":void 0,"data-invalid":D(n.validationState)==="invalid"?"":void 0,"data-required":D(n.required)?"":void 0,"data-disabled":D(n.disabled)?"":void 0,"data-readonly":D(n.readOnly)?"":void 0}));return{formControlContext:{name:()=>D(n.name)??D(n.id),dataset:f,validationState:()=>D(n.validationState),isRequired:()=>D(n.required),isDisabled:()=>D(n.disabled),isReadOnly:()=>D(n.readOnly),labelId:r,fieldId:s,descriptionId:l,errorMessageId:c,getAriaLabelledBy:d,getAriaDescribedBy:u,generateId:fn(()=>D(n.id)),registerLabel:He(o),registerField:He(a),registerDescription:He(i),registerErrorMessage:He(h)}}}var ti=xe();function gn(){const e=$e(ti);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function ni(e){const t=gn(),n=X({id:t.generateId("description")},e);return H(()=>V(t.registerDescription(n.id))),m(fe,W({as:"div"},()=>t.dataset(),n))}function ri(e){const t=gn(),n=X({id:t.generateId("error-message")},e),[r,o]=ie(n,["forceMount"]),s=()=>t.validationState()==="invalid";return H(()=>{s()&&V(t.registerErrorMessage(o.id))}),m(K,{get when(){return r.forceMount||s()},get children(){return m(fe,W({as:"div"},()=>t.dataset(),o))}})}function Ja(e){let t;const n=gn(),r=X({id:n.generateId("label")},e),[o,s]=ie(r,["ref"]),a=Pn(()=>t,()=>"label");return H(()=>V(n.registerLabel(s.id))),m(fe,W({as:"label",ref(l){const i=Me(c=>t=c,o.ref);typeof i=="function"&&i(l)},get for(){return ve(()=>a()==="label")()?n.fieldId():void 0}},()=>n.dataset(),s))}function el(e,t){H(ft(e,n=>{if(n==null)return;const r=tl(n);r!=null&&(r.addEventListener("reset",t,{passive:!0}),V(()=>{r.removeEventListener("reset",t)}))}))}function tl(e){return nl(e)?e.form:e.closest("form")}function nl(e){return e.matches("textarea, input, select, button")}function hn(e){var a;const[t,n]=B((a=e.defaultValue)==null?void 0:a.call(e)),r=P(()=>{var l;return((l=e.value)==null?void 0:l.call(e))!==void 0}),o=P(()=>{var l;return r()?(l=e.value)==null?void 0:l.call(e):t()});return[o,l=>{Nt(()=>{var c;const i=Gs(l,o());return Object.is(i,o())||(r()||n(i),(c=e.onChange)==null||c.call(e,i)),i})}]}function oi(e){const[t,n]=hn(e);return[()=>t()??!1,n]}function rl(e){const[t,n]=hn(e);return[()=>t()??[],n]}function ol(e={}){const[t,n]=oi({value:()=>D(e.isSelected),defaultValue:()=>!!D(e.defaultIsSelected),onChange:s=>{var a;return(a=e.onSelectedChange)==null?void 0:a.call(e,s)}});return{isSelected:t,setIsSelected:s=>{!D(e.isReadOnly)&&!D(e.isDisabled)&&n(s)},toggle:()=>{!D(e.isReadOnly)&&!D(e.isDisabled)&&n(!t())}}}var il=Object.defineProperty,qn=(e,t)=>{for(var n in t)il(e,n,{get:t[n],enumerable:!0})},ii=xe();function si(){return $e(ii)}function sl(){const e=si();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function ai(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function al(e,t){var o;const n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){const s=(o=e[r])==null?void 0:o.ref();if(s&&ai(s,n))return r+1}return 0}function ll(e){const t=e.map((r,o)=>[o,r]);let n=!1;return t.sort(([r,o],[s,a])=>{const l=o.ref(),i=a.ref();return l===i||!l||!i?0:ai(l,i)?(r>s&&(n=!0),-1):(r<s&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function li(e,t){const n=ll(e);e!==n&&t(n)}function ul(e){var o,s;const t=e[0],n=(o=e[e.length-1])==null?void 0:o.ref();let r=(s=t==null?void 0:t.ref())==null?void 0:s.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return Je(r).body}function cl(e,t){H(()=>{const n=setTimeout(()=>{li(e(),t)});V(()=>clearTimeout(n))})}function dl(e,t){if(typeof IntersectionObserver!="function"){cl(e,t);return}let n=[];H(()=>{const r=()=>{const a=!!n.length;n=e(),a&&li(e(),t)},o=ul(e()),s=new IntersectionObserver(r,{root:o});for(const a of e()){const l=a.ref();l&&s.observe(l)}V(()=>s.disconnect())})}function fl(e={}){const[t,n]=rl({value:()=>D(e.items),onChange:s=>{var a;return(a=e.onItemsChange)==null?void 0:a.call(e,s)}});dl(t,n);const r=s=>(n(a=>{const l=al(a,s);return Ma(a,s,l)}),()=>{n(a=>{const l=a.filter(i=>i.ref()!==s.ref());return a.length===l.length?a:l})});return{DomCollectionProvider:s=>m(ii.Provider,{value:{registerItem:r},get children(){return s.children}})}}function gl(e){const t=sl(),n=X({shouldRegisterItem:!0},e);H(()=>{if(!n.shouldRegisterItem)return;const r=t.registerItem(n.getItem());V(r)})}function ui(e){let t=e.startIndex??0;const n=e.startLevel??0,r=[],o=i=>{if(i==null)return"";const c=e.getKey??"key",h=Rt(c)?i[c]:c(i);return h!=null?String(h):""},s=i=>{if(i==null)return"";const c=e.getTextValue??"textValue",h=Rt(c)?i[c]:c(i);return h!=null?String(h):""},a=i=>{if(i==null)return!1;const c=e.getDisabled??"disabled";return(Rt(c)?i[c]:c(i))??!1},l=i=>{var c;if(i!=null)return Rt(e.getSectionChildren)?i[e.getSectionChildren]:(c=e.getSectionChildren)==null?void 0:c.call(e,i)};for(const i of e.dataSource){if(Rt(i)||Ta(i)){r.push({type:"item",rawValue:i,key:String(i),textValue:String(i),disabled:a(i),level:n,index:t}),t++;continue}if(l(i)!=null){r.push({type:"section",rawValue:i,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;const c=l(i)??[];if(c.length>0){const h=ui({dataSource:c,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...h),t+=h.length}}else r.push({type:"item",rawValue:i,key:o(i),textValue:s(i),disabled:a(i),level:n,index:t}),t++}return r}function hl(e,t=[]){return P(()=>{const n=ui({dataSource:D(e.dataSource),getKey:D(e.getKey),getTextValue:D(e.getTextValue),getDisabled:D(e.getDisabled),getSectionChildren:D(e.getSectionChildren)});for(let r=0;r<t.length;r++)t[r]();return e.factory(n)})}var vl=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),yl=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function ml(e){if(Intl.Locale){const n=new Intl.Locale(e).maximize().script??"";return vl.has(n)}const t=e.split("-")[0];return yl.has(t)}function bl(e){return ml(e)?"rtl":"ltr"}function ci(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:bl(e)}}var nr=ci(),sn=new Set;function uo(){nr=ci();for(const e of sn)e(nr)}function pl(){const[e,t]=B(nr),n=P(()=>e());return xt(()=>{sn.size===0&&window.addEventListener("languagechange",uo),sn.add(t),V(()=>{sn.delete(t),sn.size===0&&window.removeEventListener("languagechange",uo)})}),{locale:()=>n().locale,direction:()=>n().direction}}var wl=xe();function kt(){const e=pl();return $e(wl)||e}var Un=new Map;function xl(e){const{locale:t}=kt(),n=P(()=>t()+(e?Object.entries(e).sort((r,o)=>r[0]<o[0]?-1:1).join():""));return P(()=>{const r=n();let o;return Un.has(r)&&(o=Un.get(r)),o||(o=new Intl.Collator(t(),e),Un.set(r,o)),o})}var ut=class di extends Set{constructor(n,r,o){super(n);Re(this,"anchorKey");Re(this,"currentKey");n instanceof di?(this.anchorKey=r||n.anchorKey,this.currentKey=o||n.currentKey):(this.anchorKey=r,this.currentKey=o)}};function $l(e){const[t,n]=hn(e);return[()=>t()??new ut,n]}function fi(e){return qa()?e.altKey:e.ctrlKey}function zt(e){return On()?e.metaKey:e.ctrlKey}function co(e){return new ut(e)}function Cl(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function Sl(e){const t=X({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=B(!1),[o,s]=B(),a=P(()=>{const y=D(t.selectedKeys);return y!=null?co(y):y}),l=P(()=>{const y=D(t.defaultSelectedKeys);return y!=null?co(y):new ut}),[i,c]=$l({value:a,defaultValue:l,onChange:y=>{var v;return(v=t.onSelectionChange)==null?void 0:v.call(t,y)}}),[h,d]=B(D(t.selectionBehavior)),u=()=>D(t.selectionMode),f=()=>D(t.disallowEmptySelection)??!1,g=y=>{(D(t.allowDuplicateSelectionEvents)||!Cl(y,i()))&&c(y)};return H(()=>{const y=i();D(t.selectionBehavior)==="replace"&&h()==="toggle"&&typeof y=="object"&&y.size===0&&d("replace")}),H(()=>{d(D(t.selectionBehavior)??"toggle")}),{selectionMode:u,disallowEmptySelection:f,selectionBehavior:h,setSelectionBehavior:d,isFocused:n,setFocused:r,focusedKey:o,setFocusedKey:s,selectedKeys:i,setSelectedKeys:g}}function kl(e){const[t,n]=B(""),[r,o]=B(-1);return{typeSelectHandlers:{onKeyDown:a=>{var u;if(D(e.isDisabled))return;const l=D(e.keyboardDelegate),i=D(e.selectionManager);if(!l.getKeyForSearch)return;const c=El(a.key);if(!c||a.ctrlKey||a.metaKey)return;c===" "&&t().trim().length>0&&(a.preventDefault(),a.stopPropagation());let h=n(f=>f+c),d=l.getKeyForSearch(h,i.focusedKey())??l.getKeyForSearch(h);d==null&&Dl(h)&&(h=h[0],d=l.getKeyForSearch(h,i.focusedKey())??l.getKeyForSearch(h)),d!=null&&(i.setFocusedKey(d),(u=e.onTypeSelect)==null||u.call(e,d)),clearTimeout(r()),o(window.setTimeout(()=>n(""),500))}}}}function El(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function Dl(e){return e.split("").every(t=>t===e[0])}function Al(e,t,n){const o=W({selectOnFocus:()=>D(e.selectionManager).selectionBehavior()==="replace"},e),s=()=>t(),{direction:a}=kt();let l={top:0,left:0};ka(()=>D(o.isVirtualized)?void 0:s(),"scroll",()=>{const v=s();v&&(l={top:v.scrollTop,left:v.scrollLeft})});const{typeSelectHandlers:i}=kl({isDisabled:()=>D(o.disallowTypeAhead),keyboardDelegate:()=>D(o.keyboardDelegate),selectionManager:()=>D(o.selectionManager)}),c=()=>D(o.orientation)??"vertical",h=v=>{var q,C,M,R,G,ne,Z,ae;de(v,i.onKeyDown),v.altKey&&v.key==="Tab"&&v.preventDefault();const b=t();if(!(b!=null&&b.contains(v.target)))return;const p=D(o.selectionManager),w=D(o.selectOnFocus),x=z=>{z!=null&&(p.setFocusedKey(z),v.shiftKey&&p.selectionMode()==="multiple"?p.extendSelection(z):w&&!fi(v)&&p.replaceSelection(z))},$=D(o.keyboardDelegate),O=D(o.shouldFocusWrap),E=p.focusedKey();switch(v.key){case(c()==="vertical"?"ArrowDown":"ArrowRight"):{if($.getKeyBelow){v.preventDefault();let z;E!=null?z=$.getKeyBelow(E):z=(q=$.getFirstKey)==null?void 0:q.call($),z==null&&O&&(z=(C=$.getFirstKey)==null?void 0:C.call($,E)),x(z)}break}case(c()==="vertical"?"ArrowUp":"ArrowLeft"):{if($.getKeyAbove){v.preventDefault();let z;E!=null?z=$.getKeyAbove(E):z=(M=$.getLastKey)==null?void 0:M.call($),z==null&&O&&(z=(R=$.getLastKey)==null?void 0:R.call($,E)),x(z)}break}case(c()==="vertical"?"ArrowLeft":"ArrowUp"):{if($.getKeyLeftOf){v.preventDefault();const z=a()==="rtl";let Q;E!=null?Q=$.getKeyLeftOf(E):Q=z?(G=$.getFirstKey)==null?void 0:G.call($):(ne=$.getLastKey)==null?void 0:ne.call($),x(Q)}break}case(c()==="vertical"?"ArrowRight":"ArrowDown"):{if($.getKeyRightOf){v.preventDefault();const z=a()==="rtl";let Q;E!=null?Q=$.getKeyRightOf(E):Q=z?(Z=$.getLastKey)==null?void 0:Z.call($):(ae=$.getFirstKey)==null?void 0:ae.call($),x(Q)}break}case"Home":if($.getFirstKey){v.preventDefault();const z=$.getFirstKey(E,zt(v));z!=null&&(p.setFocusedKey(z),zt(v)&&v.shiftKey&&p.selectionMode()==="multiple"?p.extendSelection(z):w&&p.replaceSelection(z))}break;case"End":if($.getLastKey){v.preventDefault();const z=$.getLastKey(E,zt(v));z!=null&&(p.setFocusedKey(z),zt(v)&&v.shiftKey&&p.selectionMode()==="multiple"?p.extendSelection(z):w&&p.replaceSelection(z))}break;case"PageDown":if($.getKeyPageBelow&&E!=null){v.preventDefault();const z=$.getKeyPageBelow(E);x(z)}break;case"PageUp":if($.getKeyPageAbove&&E!=null){v.preventDefault();const z=$.getKeyPageAbove(E);x(z)}break;case"a":zt(v)&&p.selectionMode()==="multiple"&&D(o.disallowSelectAll)!==!0&&(v.preventDefault(),p.selectAll());break;case"Escape":v.defaultPrevented||(v.preventDefault(),D(o.disallowEmptySelection)||p.clearSelection());break;case"Tab":if(!D(o.allowsTabNavigation)){if(v.shiftKey)b.focus();else{const z=Va(b,{tabbable:!0});let Q,J;do J=z.lastChild(),J&&(Q=J);while(J);Q&&!Q.contains(document.activeElement)&&De(Q)}break}}},d=v=>{var x,$;const b=D(o.selectionManager),p=D(o.keyboardDelegate),w=D(o.selectOnFocus);if(b.isFocused()){v.currentTarget.contains(v.target)||b.setFocused(!1);return}if(v.currentTarget.contains(v.target)){if(b.setFocused(!0),b.focusedKey()==null){const O=q=>{q!=null&&(b.setFocusedKey(q),w&&b.replaceSelection(q))},E=v.relatedTarget;E&&v.currentTarget.compareDocumentPosition(E)&Node.DOCUMENT_POSITION_FOLLOWING?O(b.lastSelectedKey()??((x=p.getLastKey)==null?void 0:x.call(p))):O(b.firstSelectedKey()??(($=p.getFirstKey)==null?void 0:$.call(p)))}else if(!D(o.isVirtualized)){const O=s();if(O){O.scrollTop=l.top,O.scrollLeft=l.left;const E=O.querySelector(`[data-key="${b.focusedKey()}"]`);E&&(De(E),tr(O,E))}}}},u=v=>{const b=D(o.selectionManager);v.currentTarget.contains(v.relatedTarget)||b.setFocused(!1)},f=v=>{s()===v.target&&v.preventDefault()},g=()=>{var O,E;const v=D(o.autoFocus);if(!v)return;const b=D(o.selectionManager),p=D(o.keyboardDelegate);let w;v==="first"&&(w=(O=p.getFirstKey)==null?void 0:O.call(p)),v==="last"&&(w=(E=p.getLastKey)==null?void 0:E.call(p));const x=b.selectedKeys();x.size&&(w=x.values().next().value),b.setFocused(!0),b.setFocusedKey(w);const $=t();$&&w==null&&!D(o.shouldUseVirtualFocus)&&De($)};return xt(()=>{o.deferAutoFocus?setTimeout(g,0):g()}),H(ft([s,()=>D(o.isVirtualized),()=>D(o.selectionManager).focusedKey()],v=>{var x;const[b,p,w]=v;if(p)w&&((x=o.scrollToKey)==null||x.call(o,w));else if(w&&b){const $=b.querySelector(`[data-key="${w}"]`);$&&tr(b,$)}})),{tabIndex:P(()=>{if(!D(o.shouldUseVirtualFocus))return D(o.selectionManager).focusedKey()==null?0:-1}),onKeyDown:h,onMouseDown:f,onFocusIn:d,onFocusOut:u}}function gi(e,t){const n=()=>D(e.selectionManager),r=()=>D(e.key),o=()=>D(e.shouldUseVirtualFocus),s=p=>{n().selectionMode()!=="none"&&(n().selectionMode()==="single"?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):p!=null&&p.shiftKey?n().extendSelection(r()):n().selectionBehavior()==="toggle"||zt(p)||"pointerType"in p&&p.pointerType==="touch"?n().toggleSelection(r()):n().replaceSelection(r()))},a=()=>n().isSelected(r()),l=()=>D(e.disabled)||n().isDisabled(r()),i=()=>!l()&&n().canSelectItem(r());let c=null;const h=p=>{i()&&(c=p.pointerType,p.pointerType==="mouse"&&p.button===0&&!D(e.shouldSelectOnPressUp)&&s(p))},d=p=>{i()&&p.pointerType==="mouse"&&p.button===0&&D(e.shouldSelectOnPressUp)&&D(e.allowsDifferentPressOrigin)&&s(p)},u=p=>{i()&&(D(e.shouldSelectOnPressUp)&&!D(e.allowsDifferentPressOrigin)||c!=="mouse")&&s(p)},f=p=>{!i()||!["Enter"," "].includes(p.key)||(fi(p)?n().toggleSelection(r()):s(p))},g=p=>{l()&&p.preventDefault()},y=p=>{const w=t();o()||l()||!w||p.target===w&&n().setFocusedKey(r())},v=P(()=>{if(!(o()||l()))return r()===n().focusedKey()?0:-1}),b=P(()=>D(e.virtualized)?void 0:r());return H(ft([t,r,o,()=>n().focusedKey(),()=>n().isFocused()],([p,w,x,$,O])=>{p&&w===$&&O&&!x&&document.activeElement!==p&&(e.focus?e.focus():De(p))})),{isSelected:a,isDisabled:l,allowsSelection:i,tabIndex:v,dataKey:b,onPointerDown:h,onPointerUp:d,onClick:u,onKeyDown:f,onMouseDown:g,onFocus:y}}var Ml=class{constructor(e,t){Re(this,"collection");Re(this,"state");this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;const t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=(n==null?void 0:n.index)!=null&&(e==null?void 0:e.index)!=null&&n.index<e.index;(!e||r)&&(e=n)}return e==null?void 0:e.key}lastSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=(n==null?void 0:n.index)!=null&&(e==null?void 0:e.index)!=null&&n.index>e.index;(!e||r)&&(e=n)}return e==null?void 0:e.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=this.state.selectedKeys(),r=n.anchorKey||t,o=new ut(n,r,t);for(const s of this.getKeyRange(r,n.currentKey||t))o.delete(s);for(const s of this.getKeyRange(t,r))this.canSelectItem(s)&&o.add(s);this.state.setSelectedKeys(o)}getKeyRange(e,t){const n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){const n=[];let r=e;for(;r!=null;){const o=this.collection().getItem(r);if(o&&o.type==="item"&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){const t=this.collection().getItem(e);return t?!t||t.type!=="item"?null:t.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}const t=this.getKey(e);if(t==null)return;const n=new ut(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()==="none")return;const t=this.getKey(e);if(t==null)return;const n=this.canSelectItem(t)?new ut([t],t,t):new ut;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()==="none")return;const t=new ut;for(const n of e){const r=this.getKey(n);if(r!=null&&(t.add(r),this.selectionMode()==="single"))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new ut)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||t&&t.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const t=this.selectedKeys();if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;for(const n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;const t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){const t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){const e=[];return(n=>{for(;n!=null;){if(this.canSelectItem(n)){const r=this.collection().getItem(n);if(!r)continue;r.type==="item"&&e.push(n)}n=this.collection().getKeyAfter(n)}})(this.collection().getFirstKey()),e}},fo=class{constructor(e){Re(this,"keyMap",new Map);Re(this,"iterable");Re(this,"firstKey");Re(this,"lastKey");this.iterable=e;for(const r of e)this.keyMap.set(r.key,r);if(this.keyMap.size===0)return;let t,n=0;for(const[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),o.type==="item"&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){var t;return(t=this.keyMap.get(e))==null?void 0:t.prevKey}getKeyAfter(e){var t;return(t=this.keyMap.get(e))==null?void 0:t.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}};function Tl(e){const t=Sl(e),r=hl({dataSource:()=>D(e.dataSource),getKey:()=>D(e.getKey),getTextValue:()=>D(e.getTextValue),getDisabled:()=>D(e.getDisabled),getSectionChildren:()=>D(e.getSectionChildren),factory:s=>e.filter?new fo(e.filter(s)):new fo(s)},[()=>e.filter]),o=new Ml(r,t);return zs(()=>{const s=t.focusedKey();s!=null&&!r().getItem(s)&&t.setFocusedKey(void 0)}),{collection:r,selectionManager:()=>o}}var Ee=e=>typeof e=="function"?e():e,Fl=e=>{const t=P(()=>{const a=Ee(e.element);if(a)return getComputedStyle(a)}),n=()=>{var a;return((a=t())==null?void 0:a.animationName)??"none"},[r,o]=B(Ee(e.show)?"present":"hidden");let s="none";return H(a=>{const l=Ee(e.show);return Nt(()=>{var h;if(a===l)return l;const i=s,c=n();l?o("present"):c==="none"||((h=t())==null?void 0:h.display)==="none"?o("hidden"):o(a===!0&&i!==c?"hiding":"hidden")}),l}),H(()=>{const a=Ee(e.element);if(!a)return;const l=c=>{c.target===a&&(s=n())},i=c=>{const d=n().includes(c.animationName);c.target===a&&d&&r()==="hiding"&&o("hidden")};a.addEventListener("animationstart",l),a.addEventListener("animationcancel",i),a.addEventListener("animationend",i),V(()=>{a.removeEventListener("animationstart",l),a.removeEventListener("animationcancel",i),a.removeEventListener("animationend",i)})}),{present:()=>r()==="present"||r()==="hiding",state:r}},Il=Fl,hi=Il,Dn="data-kb-top-layer",vi,rr=!1,gt=[];function ln(e){return gt.findIndex(t=>t.node===e)}function Ll(e){return gt[ln(e)]}function Ol(e){return gt[gt.length-1].node===e}function yi(){return gt.filter(e=>e.isPointerBlocking)}function Pl(){return[...yi()].slice(-1)[0]}function yr(){return yi().length>0}function mi(e){var n;const t=ln((n=Pl())==null?void 0:n.node);return ln(e)<t}function ql(e){gt.push(e)}function _l(e){const t=ln(e);t<0||gt.splice(t,1)}function Rl(){for(const{node:e}of gt)e.style.pointerEvents=mi(e)?"none":"auto"}function zl(e){if(yr()&&!rr){const t=Je(e);vi=document.body.style.pointerEvents,t.body.style.pointerEvents="none",rr=!0}}function Kl(e){if(yr())return;const t=Je(e);t.body.style.pointerEvents=vi,t.body.style.length===0&&t.body.removeAttribute("style"),rr=!1}var Ie={layers:gt,isTopMostLayer:Ol,hasPointerBlockingLayer:yr,isBelowPointerBlockingLayer:mi,addLayer:ql,removeLayer:_l,indexOf:ln,find:Ll,assignPointerEventToLayers:Rl,disableBodyPointerEvents:zl,restoreBodyPointerEvents:Kl},Bl={};qn(Bl,{Button:()=>Gl,Root:()=>mr});var Nl=["button","color","file","image","reset","submit"];function Hl(e){const t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Nl.indexOf(e.type)!==-1:!1}function mr(e){let t;const n=X({type:"button"},e),[r,o]=ie(n,["ref","type","disabled"]),s=Pn(()=>t,()=>"button"),a=P(()=>{const c=s();return c==null?!1:Hl({tagName:c,type:r.type})}),l=P(()=>s()==="input"),i=P(()=>s()==="a"&&(t==null?void 0:t.getAttribute("href"))!=null);return m(fe,W({as:"button",ref(c){const h=Me(d=>t=d,r.ref);typeof h=="function"&&h(c)},get type(){return a()||l()?r.type:void 0},get role(){return!a()&&!i()?"button":void 0},get tabIndex(){return!a()&&!i()&&!r.disabled?0:void 0},get disabled(){return a()||l()?r.disabled:void 0},get"aria-disabled"(){return!a()&&!l()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var Gl=mr,Ul=["top","right","bottom","left"],Ze=Math.min,Oe=Math.max,An=Math.round,xn=Math.floor,$t=e=>({x:e,y:e}),Vl={left:"right",right:"left",bottom:"top",top:"bottom"},jl={start:"end",end:"start"};function or(e,t,n){return Oe(e,Ze(t,n))}function It(e,t){return typeof e=="function"?e(t):e}function Ct(e){return e.split("-")[0]}function Vt(e){return e.split("-")[1]}function bi(e){return e==="x"?"y":"x"}function br(e){return e==="y"?"height":"width"}function Tt(e){return["top","bottom"].includes(Ct(e))?"y":"x"}function pr(e){return bi(Tt(e))}function Wl(e,t,n){n===void 0&&(n=!1);const r=Vt(e),o=pr(e),s=br(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=Mn(a)),[a,Mn(a)]}function Ql(e){const t=Mn(e);return[ir(e),t,ir(t)]}function ir(e){return e.replace(/start|end/g,t=>jl[t])}function Yl(e,t,n){const r=["left","right"],o=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?s:a;default:return[]}}function Xl(e,t,n,r){const o=Vt(e);let s=Yl(Ct(e),n==="start",r);return o&&(s=s.map(a=>a+"-"+o),t&&(s=s.concat(s.map(ir)))),s}function Mn(e){return e.replace(/left|right|bottom|top/g,t=>Vl[t])}function Zl(e){return{top:0,right:0,bottom:0,left:0,...e}}function pi(e){return typeof e!="number"?Zl(e):{top:e,right:e,bottom:e,left:e}}function Tn(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function go(e,t,n){let{reference:r,floating:o}=e;const s=Tt(t),a=pr(t),l=br(a),i=Ct(t),c=s==="y",h=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,u=r[l]/2-o[l]/2;let f;switch(i){case"top":f={x:h,y:r.y-o.height};break;case"bottom":f={x:h,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Vt(t)){case"start":f[a]-=u*(n&&c?-1:1);break;case"end":f[a]+=u*(n&&c?-1:1);break}return f}var Jl=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=n,l=s.filter(Boolean),i=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:d}=go(c,r,i),u=r,f={},g=0;for(let y=0;y<l.length;y++){const{name:v,fn:b}=l[y],{x:p,y:w,data:x,reset:$}=await b({x:h,y:d,initialPlacement:r,placement:u,strategy:o,middlewareData:f,rects:c,platform:a,elements:{reference:e,floating:t}});h=p??h,d=w??d,f={...f,[v]:{...f[v],...x}},$&&g<=50&&(g++,typeof $=="object"&&($.placement&&(u=$.placement),$.rects&&(c=$.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:h,y:d}=go(c,u,i)),y=-1)}return{x:h,y:d,placement:u,strategy:o,middlewareData:f}};async function un(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:a,elements:l,strategy:i}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:f=0}=It(t,e),g=pi(f),v=l[u?d==="floating"?"reference":"floating":d],b=Tn(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(v)))==null||n?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:i})),p=d==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),x=await(s.isElement==null?void 0:s.isElement(w))?await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1}:{x:1,y:1},$=Tn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:p,offsetParent:w,strategy:i}):p);return{top:(b.top-$.top+g.top)/x.y,bottom:($.bottom-b.bottom+g.bottom)/x.y,left:(b.left-$.left+g.left)/x.x,right:($.right-b.right+g.right)/x.x}}var eu=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:a,elements:l,middlewareData:i}=t,{element:c,padding:h=0}=It(e,t)||{};if(c==null)return{};const d=pi(h),u={x:n,y:r},f=pr(o),g=br(f),y=await a.getDimensions(c),v=f==="y",b=v?"top":"left",p=v?"bottom":"right",w=v?"clientHeight":"clientWidth",x=s.reference[g]+s.reference[f]-u[f]-s.floating[g],$=u[f]-s.reference[f],O=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let E=O?O[w]:0;(!E||!await(a.isElement==null?void 0:a.isElement(O)))&&(E=l.floating[w]||s.floating[g]);const q=x/2-$/2,C=E/2-y[g]/2-1,M=Ze(d[b],C),R=Ze(d[p],C),G=M,ne=E-y[g]-R,Z=E/2-y[g]/2+q,ae=or(G,Z,ne),z=!i.arrow&&Vt(o)!=null&&Z!==ae&&s.reference[g]/2-(Z<G?M:R)-y[g]/2<0,Q=z?Z<G?Z-G:Z-ne:0;return{[f]:u[f]+Q,data:{[f]:ae,centerOffset:Z-ae-Q,...z&&{alignmentOffset:Q}},reset:z}}}),tu=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:a,initialPlacement:l,platform:i,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...v}=It(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const b=Ct(o),p=Tt(l),w=Ct(l)===l,x=await(i.isRTL==null?void 0:i.isRTL(c.floating)),$=u||(w||!y?[Mn(l)]:Ql(l)),O=g!=="none";!u&&O&&$.push(...Xl(l,y,g,x));const E=[l,...$],q=await un(t,v),C=[];let M=((r=s.flip)==null?void 0:r.overflows)||[];if(h&&C.push(q[b]),d){const Z=Wl(o,a,x);C.push(q[Z[0]],q[Z[1]])}if(M=[...M,{placement:o,overflows:C}],!C.every(Z=>Z<=0)){var R,G;const Z=(((R=s.flip)==null?void 0:R.index)||0)+1,ae=E[Z];if(ae)return{data:{index:Z,overflows:M},reset:{placement:ae}};let z=(G=M.filter(Q=>Q.overflows[0]<=0).sort((Q,J)=>Q.overflows[1]-J.overflows[1])[0])==null?void 0:G.placement;if(!z)switch(f){case"bestFit":{var ne;const Q=(ne=M.filter(J=>{if(O){const ue=Tt(J.placement);return ue===p||ue==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(ue=>ue>0).reduce((ue,ye)=>ue+ye,0)]).sort((J,ue)=>J[1]-ue[1])[0])==null?void 0:ne[0];Q&&(z=Q);break}case"initialPlacement":z=l;break}if(o!==z)return{reset:{placement:z}}}return{}}}};function ho(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function vo(e){return Ul.some(t=>e[t]>=0)}var nu=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=It(e,t);switch(r){case"referenceHidden":{const s=await un(t,{...o,elementContext:"reference"}),a=ho(s,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:vo(a)}}}case"escaped":{const s=await un(t,{...o,altBoundary:!0}),a=ho(s,n.floating);return{data:{escapedOffsets:a,escaped:vo(a)}}}default:return{}}}}};async function ru(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=Ct(n),l=Vt(n),i=Tt(n)==="y",c=["left","top"].includes(a)?-1:1,h=s&&i?-1:1,d=It(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof g=="number"&&(f=l==="end"?g*-1:g),i?{x:f*h,y:u*c}:{x:u*c,y:f*h}}var ou=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:a,middlewareData:l}=t,i=await ru(t,e);return a===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+i.x,y:s+i.y,data:{...i,placement:a}}}}},iu=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:v=>{let{x:b,y:p}=v;return{x:b,y:p}}},...i}=It(e,t),c={x:n,y:r},h=await un(t,i),d=Tt(Ct(o)),u=bi(d);let f=c[u],g=c[d];if(s){const v=u==="y"?"top":"left",b=u==="y"?"bottom":"right",p=f+h[v],w=f-h[b];f=or(p,f,w)}if(a){const v=d==="y"?"top":"left",b=d==="y"?"bottom":"right",p=g+h[v],w=g-h[b];g=or(p,g,w)}const y=l.fn({...t,[u]:f,[d]:g});return{...y,data:{x:y.x-n,y:y.y-r}}}}},su=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:s}=t,{apply:a=()=>{},...l}=It(e,t),i=await un(t,l),c=Ct(n),h=Vt(n),d=Tt(n)==="y",{width:u,height:f}=r.floating;let g,y;c==="top"||c==="bottom"?(g=c,y=h===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(y=c,g=h==="end"?"top":"bottom");const v=f-i.top-i.bottom,b=u-i.left-i.right,p=Ze(f-i[g],v),w=Ze(u-i[y],b),x=!t.middlewareData.shift;let $=p,O=w;if(d?O=h||x?Ze(w,b):b:$=h||x?Ze(p,v):v,x&&!h){const q=Oe(i.left,0),C=Oe(i.right,0),M=Oe(i.top,0),R=Oe(i.bottom,0);d?O=u-2*(q!==0||C!==0?q+C:Oe(i.left,i.right)):$=f-2*(M!==0||R!==0?M+R:Oe(i.top,i.bottom))}await a({...t,availableWidth:O,availableHeight:$});const E=await o.getDimensions(s.floating);return u!==E.width||f!==E.height?{reset:{rects:!0}}:{}}}};function jt(e){return wi(e)?(e.nodeName||"").toLowerCase():"#document"}function Pe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ht(e){var t;return(t=(wi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function wi(e){return e instanceof Node||e instanceof Pe(e).Node}function Ve(e){return e instanceof Element||e instanceof Pe(e).Element}function et(e){return e instanceof HTMLElement||e instanceof Pe(e).HTMLElement}function yo(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Pe(e).ShadowRoot}function vn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=je(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function au(e){return["table","td","th"].includes(jt(e))}function _n(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function wr(e){const t=xr(),n=Ve(e)?je(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function lu(e){let t=St(e);for(;et(t)&&!Ut(t);){if(wr(t))return t;if(_n(t))return null;t=St(t)}return null}function xr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ut(e){return["html","body","#document"].includes(jt(e))}function je(e){return Pe(e).getComputedStyle(e)}function Rn(e){return Ve(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function St(e){if(jt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yo(e)&&e.host||ht(e);return yo(t)?t.host:t}function xi(e){const t=St(e);return Ut(t)?e.ownerDocument?e.ownerDocument.body:e.body:et(t)&&vn(t)?t:xi(t)}function cn(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=xi(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),a=Pe(o);return s?t.concat(a,a.visualViewport||[],vn(o)?o:[],a.frameElement&&n?cn(a.frameElement):[]):t.concat(o,cn(o,[],n))}function $i(e){const t=je(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=et(e),s=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=An(n)!==s||An(r)!==a;return l&&(n=s,r=a),{width:n,height:r,$:l}}function $r(e){return Ve(e)?e:e.contextElement}function Ht(e){const t=$r(e);if(!et(t))return $t(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=$i(t);let a=(s?An(n.width):n.width)/r,l=(s?An(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}var uu=$t(0);function Ci(e){const t=Pe(e);return!xr()||!t.visualViewport?uu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cu(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Pe(e)?!1:t}function Ft(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=$r(e);let a=$t(1);t&&(r?Ve(r)&&(a=Ht(r)):a=Ht(e));const l=cu(s,n,r)?Ci(s):$t(0);let i=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,h=o.width/a.x,d=o.height/a.y;if(s){const u=Pe(s),f=r&&Ve(r)?Pe(r):r;let g=u,y=g.frameElement;for(;y&&r&&f!==g;){const v=Ht(y),b=y.getBoundingClientRect(),p=je(y),w=b.left+(y.clientLeft+parseFloat(p.paddingLeft))*v.x,x=b.top+(y.clientTop+parseFloat(p.paddingTop))*v.y;i*=v.x,c*=v.y,h*=v.x,d*=v.y,i+=w,c+=x,g=Pe(y),y=g.frameElement}}return Tn({width:h,height:d,x:i,y:c})}function du(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",a=ht(r),l=t?_n(t.floating):!1;if(r===a||l&&s)return n;let i={scrollLeft:0,scrollTop:0},c=$t(1);const h=$t(0),d=et(r);if((d||!d&&!s)&&((jt(r)!=="body"||vn(a))&&(i=Rn(r)),et(r))){const u=Ft(r);c=Ht(r),h.x=u.x+r.clientLeft,h.y=u.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-i.scrollLeft*c.x+h.x,y:n.y*c.y-i.scrollTop*c.y+h.y}}function fu(e){return Array.from(e.getClientRects())}function Si(e){return Ft(ht(e)).left+Rn(e).scrollLeft}function gu(e){const t=ht(e),n=Rn(e),r=e.ownerDocument.body,o=Oe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Oe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Si(e);const l=-n.scrollTop;return je(r).direction==="rtl"&&(a+=Oe(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:a,y:l}}function hu(e,t){const n=Pe(e),r=ht(e),o=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,i=0;if(o){s=o.width,a=o.height;const c=xr();(!c||c&&t==="fixed")&&(l=o.offsetLeft,i=o.offsetTop)}return{width:s,height:a,x:l,y:i}}function vu(e,t){const n=Ft(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=et(e)?Ht(e):$t(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y,i=o*s.x,c=r*s.y;return{width:a,height:l,x:i,y:c}}function mo(e,t,n){let r;if(t==="viewport")r=hu(e,n);else if(t==="document")r=gu(ht(e));else if(Ve(t))r=vu(t,n);else{const o=Ci(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Tn(r)}function ki(e,t){const n=St(e);return n===t||!Ve(n)||Ut(n)?!1:je(n).position==="fixed"||ki(n,t)}function yu(e,t){const n=t.get(e);if(n)return n;let r=cn(e,[],!1).filter(l=>Ve(l)&&jt(l)!=="body"),o=null;const s=je(e).position==="fixed";let a=s?St(e):e;for(;Ve(a)&&!Ut(a);){const l=je(a),i=wr(a);!i&&l.position==="fixed"&&(o=null),(s?!i&&!o:!i&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||vn(a)&&!i&&ki(e,a))?r=r.filter(h=>h!==a):o=l,a=St(a)}return t.set(e,r),r}function mu(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?_n(t)?[]:yu(t,this._c):[].concat(n),r],l=a[0],i=a.reduce((c,h)=>{const d=mo(t,h,o);return c.top=Oe(d.top,c.top),c.right=Ze(d.right,c.right),c.bottom=Ze(d.bottom,c.bottom),c.left=Oe(d.left,c.left),c},mo(t,l,o));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}}function bu(e){const{width:t,height:n}=$i(e);return{width:t,height:n}}function pu(e,t,n){const r=et(t),o=ht(t),s=n==="fixed",a=Ft(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const i=$t(0);if(r||!r&&!s)if((jt(t)!=="body"||vn(o))&&(l=Rn(t)),r){const d=Ft(t,!0,s,t);i.x=d.x+t.clientLeft,i.y=d.y+t.clientTop}else o&&(i.x=Si(o));const c=a.left+l.scrollLeft-i.x,h=a.top+l.scrollTop-i.y;return{x:c,y:h,width:a.width,height:a.height}}function Vn(e){return je(e).position==="static"}function bo(e,t){return!et(e)||je(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ei(e,t){const n=Pe(e);if(_n(e))return n;if(!et(e)){let o=St(e);for(;o&&!Ut(o);){if(Ve(o)&&!Vn(o))return o;o=St(o)}return n}let r=bo(e,t);for(;r&&au(r)&&Vn(r);)r=bo(r,t);return r&&Ut(r)&&Vn(r)&&!wr(r)?n:r||lu(e)||n}var wu=async function(e){const t=this.getOffsetParent||Ei,n=this.getDimensions,r=await n(e.floating);return{reference:pu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function xu(e){return je(e).direction==="rtl"}var Di={convertOffsetParentRelativeRectToViewportRelativeRect:du,getDocumentElement:ht,getClippingRect:mu,getOffsetParent:Ei,getElementRects:wu,getClientRects:fu,getDimensions:bu,getScale:Ht,isElement:Ve,isRTL:xu};function $u(e,t){let n=null,r;const o=ht(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,i){l===void 0&&(l=!1),i===void 0&&(i=1),s();const{left:c,top:h,width:d,height:u}=e.getBoundingClientRect();if(l||t(),!d||!u)return;const f=xn(h),g=xn(o.clientWidth-(c+d)),y=xn(o.clientHeight-(h+u)),v=xn(c),p={rootMargin:-f+"px "+-g+"px "+-y+"px "+-v+"px",threshold:Oe(0,Ze(1,i))||1};let w=!0;function x($){const O=$[0].intersectionRatio;if(O!==i){if(!w)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}w=!1}try{n=new IntersectionObserver(x,{...p,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,p)}n.observe(e)}return a(!0),s}function Cu(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=r,c=$r(e),h=o||s?[...c?cn(c):[],...cn(t)]:[];h.forEach(b=>{o&&b.addEventListener("scroll",n,{passive:!0}),s&&b.addEventListener("resize",n)});const d=c&&l?$u(c,n):null;let u=-1,f=null;a&&(f=new ResizeObserver(b=>{let[p]=b;p&&p.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var w;(w=f)==null||w.observe(t)})),n()}),c&&!i&&f.observe(c),f.observe(t));let g,y=i?Ft(e):null;i&&v();function v(){const b=Ft(e);y&&(b.x!==y.x||b.y!==y.y||b.width!==y.width||b.height!==y.height)&&n(),y=b,g=requestAnimationFrame(v)}return n(),()=>{var b;h.forEach(p=>{o&&p.removeEventListener("scroll",n),s&&p.removeEventListener("resize",n)}),d==null||d(),(b=f)==null||b.disconnect(),f=null,i&&cancelAnimationFrame(g)}}var Su=ou,ku=iu,Eu=tu,Du=su,Au=nu,Mu=eu,Tu=(e,t,n)=>{const r=new Map,o={platform:Di,...n},s={...o.platform,_c:r};return Jl(e,t,{...o,platform:s})},Cr=xe();function Sr(){const e=$e(Cr);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Fu=_('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),sr=30,po=sr/2,Iu={top:180,right:-90,bottom:0,left:90};function kr(e){const t=Sr(),n=X({size:sr},e),[r,o]=ie(n,["ref","style","size"]),s=()=>t.currentPlacement().split("-")[0],a=Lu(t.contentRef),l=()=>{var u;return((u=a())==null?void 0:u.getPropertyValue("background-color"))||"none"},i=()=>{var u;return((u=a())==null?void 0:u.getPropertyValue(`border-${s()}-color`))||"none"},c=()=>{var u;return((u=a())==null?void 0:u.getPropertyValue(`border-${s()}-width`))||"0px"},h=()=>Number.parseInt(c())*2*(sr/r.size),d=()=>`rotate(${Iu[s()]} ${po} ${po}) translate(0 2)`;return m(fe,W({as:"div",ref(u){const f=Me(t.setArrowRef,r.ref);typeof f=="function"&&f(u)},"aria-hidden":"true",get style(){return Ln({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:l(),stroke:i(),"stroke-width":h()},r.style)}},o,{get children(){const u=Fu(),f=u.firstChild;return U(()=>T(f,"transform",d())),u}}))}function Lu(e){const[t,n]=B();return H(()=>{const r=e();r&&n(Ia(r).getComputedStyle(r))}),t}function Ou(e){const t=Sr(),[n,r]=ie(e,["ref","style"]);return m(fe,W({as:"div",ref(o){const s=Me(t.setPositionerRef,n.ref);typeof s=="function"&&s(o)},"data-popper-positioner":"",get style(){return Ln({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}function wo(e){const{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(t,n,r,o);const s={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...s,toJSON:()=>s}}function Pu(e,t){return{contextElement:e,getBoundingClientRect:()=>{const r=t(e);return r?wo(r):e?e.getBoundingClientRect():wo()}}}function qu(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var _u={top:"bottom",right:"left",bottom:"top",left:"right"};function Ru(e,t){const[n,r]=e.split("-"),o=_u[n];return r?n==="left"||n==="right"?`${o} ${r==="start"?"top":"bottom"}`:r==="start"?`${o} ${t==="rtl"?"right":"left"}`:`${o} ${t==="rtl"?"left":"right"}`:`${o} center`}function zu(e){const t=X({getAnchorRect:u=>u==null?void 0:u.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=B(),[o,s]=B(),[a,l]=B(t.placement),i=()=>{var u;return Pu((u=t.anchorRef)==null?void 0:u.call(t),t.getAnchorRect)},{direction:c}=kt();async function h(){var O,E;const u=i(),f=n(),g=o();if(!u||!f)return;const y=((g==null?void 0:g.clientHeight)||0)/2,v=typeof t.gutter=="number"?t.gutter+y:t.gutter??y;f.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),u.getBoundingClientRect();const b=[Su(({placement:q})=>{const C=!!q.split("-")[1];return{mainAxis:v,crossAxis:C?void 0:t.shift,alignmentAxis:t.shift}})];if(t.flip!==!1){const q=typeof t.flip=="string"?t.flip.split(" "):void 0;if(q!==void 0&&!q.every(qu))throw new Error("`flip` expects a spaced-delimited list of placements");b.push(Eu({padding:t.overflowPadding,fallbackPlacements:q}))}(t.slide||t.overlap)&&b.push(ku({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),b.push(Du({padding:t.overflowPadding,apply({availableWidth:q,availableHeight:C,rects:M}){const R=Math.round(M.reference.width);q=Math.floor(q),C=Math.floor(C),f.style.setProperty("--kb-popper-anchor-width",`${R}px`),f.style.setProperty("--kb-popper-content-available-width",`${q}px`),f.style.setProperty("--kb-popper-content-available-height",`${C}px`),t.sameWidth&&(f.style.width=`${R}px`),t.fitViewport&&(f.style.maxWidth=`${q}px`,f.style.maxHeight=`${C}px`)}})),t.hideWhenDetached&&b.push(Au({padding:t.detachedPadding})),g&&b.push(Mu({element:g,padding:t.arrowPadding}));const p=await Tu(u,f,{placement:t.placement,strategy:"absolute",middleware:b,platform:{...Di,isRTL:()=>c()==="rtl"}});if(l(p.placement),(O=t.onCurrentPlacementChange)==null||O.call(t,p.placement),!f)return;f.style.setProperty("--kb-popper-content-transform-origin",Ru(p.placement,c()));const w=Math.round(p.x),x=Math.round(p.y);let $;if(t.hideWhenDetached&&($=(E=p.middlewareData.hide)!=null&&E.referenceHidden?"hidden":"visible"),Object.assign(f.style,{top:"0",left:"0",transform:`translate3d(${w}px, ${x}px, 0)`,visibility:$}),g&&p.middlewareData.arrow){const{x:q,y:C}=p.middlewareData.arrow,M=p.placement.split("-")[0];Object.assign(g.style,{left:q!=null?`${q}px`:"",top:C!=null?`${C}px`:"",[M]:"100%"})}}H(()=>{const u=i(),f=n();if(!u||!f)return;const g=Cu(u,f,h,{elementResize:typeof ResizeObserver=="function"});V(g)}),H(()=>{var g;const u=n(),f=(g=t.contentRef)==null?void 0:g.call(t);!u||!f||queueMicrotask(()=>{u.style.zIndex=getComputedStyle(f).zIndex})});const d={currentPlacement:a,contentRef:()=>{var u;return(u=t.contentRef)==null?void 0:u.call(t)},setPositionerRef:r,setArrowRef:s};return m(Cr.Provider,{value:d,get children(){return t.children}})}var Ai=Object.assign(zu,{Arrow:kr,Context:Cr,usePopperContext:Sr,Positioner:Ou});function Ku(e){const t=n=>{var r;n.key===fr.Escape&&((r=e.onEscapeKeyDown)==null||r.call(e,n))};H(()=>{var r;if(D(e.isDisabled))return;const n=((r=e.ownerDocument)==null?void 0:r.call(e))??Je();n.addEventListener("keydown",t),V(()=>{n.removeEventListener("keydown",t)})})}var xo="interactOutside.pointerDownOutside",$o="interactOutside.focusOutside";function Bu(e,t){let n,r=Wa;const o=()=>Je(t()),s=d=>{var u;return(u=e.onPointerDownOutside)==null?void 0:u.call(e,d)},a=d=>{var u;return(u=e.onFocusOutside)==null?void 0:u.call(e,d)},l=d=>{var u;return(u=e.onInteractOutside)==null?void 0:u.call(e,d)},i=d=>{var f;const u=d.target;return!(u instanceof HTMLElement)||u.closest(`[${Dn}]`)||!Ne(o(),u)||Ne(t(),u)?!1:!((f=e.shouldExcludeElement)!=null&&f.call(e,u))},c=d=>{function u(){const f=t(),g=d.target;if(!f||!g||!i(d))return;const y=we([s,l]);g.addEventListener(xo,y,{once:!0});const v=new CustomEvent(xo,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:d.button===2||_a(d)&&d.button===0}});g.dispatchEvent(v)}d.pointerType==="touch"?(o().removeEventListener("click",u),r=u,o().addEventListener("click",u,{once:!0})):u()},h=d=>{const u=t(),f=d.target;if(!u||!f||!i(d))return;const g=we([a,l]);f.addEventListener($o,g,{once:!0});const y=new CustomEvent($o,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:!1}});f.dispatchEvent(y)};H(()=>{D(e.isDisabled)||(n=window.setTimeout(()=>{o().addEventListener("pointerdown",c,!0)},0),o().addEventListener("focusin",h,!0),V(()=>{window.clearTimeout(n),o().removeEventListener("click",r),o().removeEventListener("pointerdown",c,!0),o().removeEventListener("focusin",h,!0)}))})}var Mi=xe();function Nu(){return $e(Mi)}function Hu(e){let t;const n=Nu(),[r,o]=ie(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),s=new Set([]),a=d=>{s.add(d);const u=n==null?void 0:n.registerNestedLayer(d);return()=>{s.delete(d),u==null||u()}};Bu({shouldExcludeElement:d=>{var u;return t?((u=r.excludedElements)==null?void 0:u.some(f=>Ne(f(),d)))||[...s].some(f=>Ne(f,d)):!1},onPointerDownOutside:d=>{var u,f,g;!t||Ie.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!Ie.isTopMostLayer(t)||((u=r.onPointerDownOutside)==null||u.call(r,d),(f=r.onInteractOutside)==null||f.call(r,d),d.defaultPrevented||(g=r.onDismiss)==null||g.call(r))},onFocusOutside:d=>{var u,f,g;(u=r.onFocusOutside)==null||u.call(r,d),(f=r.onInteractOutside)==null||f.call(r,d),d.defaultPrevented||(g=r.onDismiss)==null||g.call(r)}},()=>t),Ku({ownerDocument:()=>Je(t),onEscapeKeyDown:d=>{var u;!t||!Ie.isTopMostLayer(t)||((u=r.onEscapeKeyDown)==null||u.call(r,d),!d.defaultPrevented&&r.onDismiss&&(d.preventDefault(),r.onDismiss()))}}),xt(()=>{if(!t)return;Ie.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});const d=n==null?void 0:n.registerNestedLayer(t);Ie.assignPointerEventToLayers(),Ie.disableBodyPointerEvents(t),V(()=>{t&&(Ie.removeLayer(t),d==null||d(),Ie.assignPointerEventToLayers(),Ie.restoreBodyPointerEvents(t))})}),H(ft([()=>t,()=>r.disableOutsidePointerEvents],([d,u])=>{if(!d)return;const f=Ie.find(d);f&&f.isPointerBlocking!==u&&(f.isPointerBlocking=u,Ie.assignPointerEventToLayers()),u&&Ie.disableBodyPointerEvents(d),V(()=>{Ie.restoreBodyPointerEvents(d)})},{defer:!0}));const h={registerNestedLayer:a};return m(Mi.Provider,{value:h,get children(){return m(fe,W({as:"div",ref(d){const u=Me(f=>t=f,r.ref);typeof u=="function"&&u(d)}},o))}})}function Ti(e={}){const[t,n]=oi({value:()=>D(e.open),defaultValue:()=>!!D(e.defaultOpen),onChange:a=>{var l;return(l=e.onOpenChange)==null?void 0:l.call(e,a)}}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var Be={};qn(Be,{Description:()=>ni,ErrorMessage:()=>ri,Item:()=>Oi,ItemControl:()=>Pi,ItemDescription:()=>qi,ItemIndicator:()=>_i,ItemInput:()=>Ri,ItemLabel:()=>zi,Label:()=>Ki,RadioGroup:()=>Gu,Root:()=>Bi});var Fi=xe();function Ii(){const e=$e(Fi);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Li=xe();function yn(){const e=$e(Li);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Oi(e){const t=gn(),n=Ii(),r=`${t.generateId("item")}-${qe()}`,o=X({id:r},e),[s,a]=ie(o,["value","disabled","onPointerDown"]),[l,i]=B(),[c,h]=B(),[d,u]=B(),[f,g]=B(),[y,v]=B(!1),b=P(()=>n.isSelectedValue(s.value)),p=P(()=>s.disabled||t.isDisabled()||!1),w=O=>{de(O,s.onPointerDown),y()&&O.preventDefault()},x=P(()=>({...t.dataset(),"data-disabled":p()?"":void 0,"data-checked":b()?"":void 0})),$={value:()=>s.value,dataset:x,isSelected:b,isDisabled:p,inputId:l,labelId:c,descriptionId:d,inputRef:f,select:()=>n.setSelectedValue(s.value),generateId:fn(()=>a.id),registerInput:He(i),registerLabel:He(h),registerDescription:He(u),setIsFocused:v,setInputRef:g};return m(Li.Provider,{value:$,get children(){return m(fe,W({as:"div",role:"group",onPointerDown:w},x,a))}})}function Pi(e){const t=yn(),n=X({id:t.generateId("control")},e),[r,o]=ie(n,["onClick","onKeyDown"]);return m(fe,W({as:"div",onClick:l=>{var i;de(l,r.onClick),t.select(),(i=t.inputRef())==null||i.focus()},onKeyDown:l=>{var i;de(l,r.onKeyDown),l.key===fr.Space&&(t.select(),(i=t.inputRef())==null||i.focus())}},()=>t.dataset(),o))}function qi(e){const t=yn(),n=X({id:t.generateId("description")},e);return H(()=>V(t.registerDescription(n.id))),m(fe,W({as:"div"},()=>t.dataset(),n))}function _i(e){const t=yn(),n=X({id:t.generateId("indicator")},e),[r,o]=ie(n,["ref","forceMount"]),[s,a]=B(),{present:l}=hi({show:()=>r.forceMount||t.isSelected(),element:()=>s()??null});return m(K,{get when(){return l()},get children(){return m(fe,W({as:"div",ref(i){const c=Me(a,r.ref);typeof c=="function"&&c(i)}},()=>t.dataset(),o))}})}function Ri(e){const t=gn(),n=Ii(),r=yn(),o=X({id:r.generateId("input")},e),[s,a]=ie(o,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),l=()=>[s["aria-labelledby"],r.labelId(),s["aria-labelledby"]!=null&&a["aria-label"]!=null?a.id:void 0].filter(Boolean).join(" ")||void 0,i=()=>[s["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[c,h]=B(!1),d=g=>{if(de(g,s.onChange),g.stopPropagation(),!c()){n.setSelectedValue(r.value());const y=g.target;y.checked=r.isSelected()}h(!1)},u=g=>{de(g,s.onFocus),r.setIsFocused(!0)},f=g=>{de(g,s.onBlur),r.setIsFocused(!1)};return H(ft([()=>r.isSelected(),()=>r.value()],g=>{if(!g[0]&&g[1]===r.value())return;h(!0);const y=r.inputRef();y==null||y.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),y==null||y.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),H(()=>V(r.registerInput(a.id))),m(fe,W({as:"input",ref(g){const y=Me(r.setInputRef,s.ref);typeof y=="function"&&y(g)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return Ln({...ei},s.style)},get"aria-labelledby"(){return l()},get"aria-describedby"(){return i()},onChange:d,onFocus:u,onBlur:f},()=>r.dataset(),a))}function zi(e){const t=yn(),n=X({id:t.generateId("label")},e);return H(()=>V(t.registerLabel(n.id))),m(fe,W({as:"label",get for(){return t.inputId()}},()=>t.dataset(),n))}function Ki(e){return m(Ja,W({as:"span"},e))}function Bi(e){let t;const n=`radiogroup-${qe()}`,r=X({id:n,orientation:"vertical"},e),[o,s,a]=ie(r,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Xa),[l,i]=hn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:g=>{var y;return(y=o.onChange)==null?void 0:y.call(o,g)}}),{formControlContext:c}=Za(s);el(()=>t,()=>i(o.defaultValue??""));const h=()=>c.getAriaLabelledBy(D(s.id),a["aria-label"],o["aria-labelledby"]),d=()=>c.getAriaDescribedBy(o["aria-describedby"]),u=g=>g===l(),f={ariaDescribedBy:d,isSelectedValue:u,setSelectedValue:g=>{if(!(c.isReadOnly()||c.isDisabled())&&(i(g),t))for(const y of t.querySelectorAll("[type='radio']")){const v=y;v.checked=u(v.value)}}};return m(ti.Provider,{value:c,get children(){return m(Fi.Provider,{value:f,get children(){return m(fe,W({as:"div",ref(g){const y=Me(v=>t=v,o.ref);typeof y=="function"&&y(g)},role:"radiogroup",get id(){return D(s.id)},get"aria-invalid"(){return c.validationState()==="invalid"||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return h()},get"aria-describedby"(){return d()}},()=>c.dataset(),a))}})}})}var Gu=Object.assign(Bi,{Description:ni,ErrorMessage:ri,Item:Oi,ItemControl:Pi,ItemDescription:qi,ItemIndicator:_i,ItemInput:Ri,ItemLabel:zi,Label:Ki}),Uu=class{constructor(e,t,n){Re(this,"collection");Re(this,"ref");Re(this,"collator");this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){const n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){const t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){var t,n;return((n=(t=this.ref)==null?void 0:t.call(this))==null?void 0:n.querySelector(`[data-key="${e}"]`))??null}getKeyPageAbove(e){var s;const t=(s=this.ref)==null?void 0:s.call(this);let n=this.getItem(e);if(!t||!n)return;const r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop>r;)o=this.getKeyAbove(o),n=o!=null?this.getItem(o):null;return o}getKeyPageBelow(e){var s;const t=(s=this.ref)==null?void 0:s.call(this);let n=this.getItem(e);if(!t||!n)return;const r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop<r;)o=this.getKeyBelow(o),n=o!=null?this.getItem(o):null;return o}getKeyForSearch(e,t){var o;const n=(o=this.collator)==null?void 0:o.call(this);if(!n)return;let r=t!=null?this.getKeyBelow(t):this.getFirstKey();for(;r!=null;){const s=this.collection().getItem(r);if(s){const a=s.textValue.slice(0,e.length);if(s.textValue&&n.compare(a,e)===0)return r}r=this.getKeyBelow(r)}}};function Vu(e,t,n){const r=xl({usage:"search",sensitivity:"base"}),o=P(()=>{const s=D(e.keyboardDelegate);return s||new Uu(e.collection,t,r)});return Al({selectionManager:()=>D(e.selectionManager),keyboardDelegate:o,autoFocus:()=>D(e.autoFocus),deferAutoFocus:()=>D(e.deferAutoFocus),shouldFocusWrap:()=>D(e.shouldFocusWrap),disallowEmptySelection:()=>D(e.disallowEmptySelection),selectOnFocus:()=>D(e.selectOnFocus),disallowTypeAhead:()=>D(e.disallowTypeAhead),shouldUseVirtualFocus:()=>D(e.shouldUseVirtualFocus),allowsTabNavigation:()=>D(e.allowsTabNavigation),isVirtualized:()=>D(e.isVirtualized),scrollToKey:s=>{var a;return(a=D(e.scrollToKey))==null?void 0:a(s)},orientation:()=>D(e.orientation)},t)}var jn="focusScope.autoFocusOnMount",Wn="focusScope.autoFocusOnUnmount",Co={bubbles:!1,cancelable:!0},So={stack:[],active(){return this.stack[0]},add(e){var t;e!==this.active()&&((t=this.active())==null||t.pause()),this.stack=er(this.stack,e),this.stack.unshift(e)},remove(e){var t;this.stack=er(this.stack,e),(t=this.active())==null||t.resume()}};function ju(e,t){const[n,r]=B(!1),o={pause(){r(!0)},resume(){r(!1)}};let s=null;const a=g=>{var y;return(y=e.onMountAutoFocus)==null?void 0:y.call(e,g)},l=g=>{var y;return(y=e.onUnmountAutoFocus)==null?void 0:y.call(e,g)},i=()=>Je(t()),c=()=>{const g=i().createElement("span");return g.setAttribute("data-focus-trap",""),g.tabIndex=0,Object.assign(g.style,ei),g},h=()=>{const g=t();return g?Zo(g,!0).filter(y=>!y.hasAttribute("data-focus-trap")):[]},d=()=>{const g=h();return g.length>0?g[0]:null},u=()=>{const g=h();return g.length>0?g[g.length-1]:null},f=()=>{const g=t();if(!g)return!1;const y=on(g);return!y||Ne(g,y)?!1:Jo(y)};H(()=>{const g=t();if(!g)return;So.add(o);const y=on(g);if(!Ne(g,y)){const b=new CustomEvent(jn,Co);g.addEventListener(jn,a),g.dispatchEvent(b),b.defaultPrevented||setTimeout(()=>{De(d()),on(g)===y&&De(g)},0)}V(()=>{g.removeEventListener(jn,a),setTimeout(()=>{const b=new CustomEvent(Wn,Co);f()&&b.preventDefault(),g.addEventListener(Wn,l),g.dispatchEvent(b),b.defaultPrevented||De(y??i().body),g.removeEventListener(Wn,l),So.remove(o)},0)})}),H(()=>{const g=t();if(!g||!D(e.trapFocus)||n())return;const y=b=>{const p=b.target;p!=null&&p.closest(`[${Dn}]`)||(Ne(g,p)?s=p:De(s))},v=b=>{const w=b.relatedTarget??on(g);w!=null&&w.closest(`[${Dn}]`)||Ne(g,w)||De(s)};i().addEventListener("focusin",y),i().addEventListener("focusout",v),V(()=>{i().removeEventListener("focusin",y),i().removeEventListener("focusout",v)})}),H(()=>{const g=t();if(!g||!D(e.trapFocus)||n())return;const y=c();g.insertAdjacentElement("afterbegin",y);const v=c();g.insertAdjacentElement("beforeend",v);function b(w){const x=d(),$=u();w.relatedTarget===x?De($):De(x)}y.addEventListener("focusin",b),v.addEventListener("focusin",b);const p=new MutationObserver(w=>{for(const x of w)x.previousSibling===v&&(v.remove(),g.insertAdjacentElement("beforeend",v)),x.nextSibling===y&&(y.remove(),g.insertAdjacentElement("afterbegin",y))});p.observe(g,{childList:!0,subtree:!1}),V(()=>{y.removeEventListener("focusin",b),v.removeEventListener("focusin",b),y.remove(),v.remove(),p.disconnect()})})}var Wu="data-live-announcer";function Qu(e){H(()=>{D(e.isDisabled)||V(Yu(D(e.targets),D(e.root)))})}var tn=new WeakMap,Ke=[];function Yu(e,t=document.body){const n=new Set(e),r=new Set,o=i=>{for(const u of i.querySelectorAll(`[${Wu}], [${Dn}]`))n.add(u);const c=u=>{if(n.has(u)||u.parentElement&&r.has(u.parentElement)&&u.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const f of n)if(u.contains(f))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},h=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),d=c(i);if(d===NodeFilter.FILTER_ACCEPT&&s(i),d!==NodeFilter.FILTER_REJECT){let u=h.nextNode();for(;u!=null;)s(u),u=h.nextNode()}},s=i=>{const c=tn.get(i)??0;i.getAttribute("aria-hidden")==="true"&&c===0||(c===0&&i.setAttribute("aria-hidden","true"),r.add(i),tn.set(i,c+1))};Ke.length&&Ke[Ke.length-1].disconnect(),o(t);const a=new MutationObserver(i=>{for(const c of i)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...n,...r].some(h=>h.contains(c.target))){for(const h of c.removedNodes)h instanceof Element&&(n.delete(h),r.delete(h));for(const h of c.addedNodes)(h instanceof HTMLElement||h instanceof SVGElement)&&(h.dataset.liveAnnouncer==="true"||h.dataset.reactAriaTopLayer==="true")?n.add(h):h instanceof Element&&o(h)}});a.observe(t,{childList:!0,subtree:!0});const l={observe(){a.observe(t,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return Ke.push(l),()=>{a.disconnect();for(const i of r){const c=tn.get(i);if(c==null)return;c===1?(i.removeAttribute("aria-hidden"),tn.delete(i)):tn.set(i,c-1)}l===Ke[Ke.length-1]?(Ke.pop(),Ke.length&&Ke[Ke.length-1].observe()):Ke.splice(Ke.indexOf(l),1)}}var $n=new Map,Xu=e=>{H(()=>{const t=Ee(e.style)??{},n=Ee(e.properties)??[],r={};for(const s in t)r[s]=e.element.style[s];const o=$n.get(e.key);o?o.activeCount++:$n.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(s=>s.key)}),Object.assign(e.element.style,e.style);for(const s of n)e.element.style.setProperty(s.key,s.value);V(()=>{var a;const s=$n.get(e.key);if(s){if(s.activeCount!==1){s.activeCount--;return}$n.delete(e.key);for(const[l,i]of Object.entries(s.originalStyles))e.element.style[l]=i;for(const l of s.properties)e.element.style.removeProperty(l);e.element.style.length===0&&e.element.removeAttribute("style"),(a=e.cleanup)==null||a.call(e)}})})},ko=Xu,Zu=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Ju=(e,t)=>{const n=getComputedStyle(e),r=t==="x"?n.overflowX:n.overflowY;return r==="auto"||r==="scroll"||e.tagName==="HTML"&&r==="visible"},ec=(e,t,n)=>{const r=t==="x"&&window.getComputedStyle(e).direction==="rtl"?-1:1;let o=e,s=0,a=0,l=!1;do{const[i,c,h]=Zu(o,t),d=h-i-r*c;(c!==0||d!==0)&&Ju(o,t)&&(s+=d,a+=c),o===(n??document.documentElement)?l=!0:o=o._$host??o.parentElement}while(o&&!l);return[s,a]},[Eo,Do]=B([]),tc=e=>Eo().indexOf(e)===Eo().length-1,nc=e=>{const t=W({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=qe();let r=[0,0],o=null,s=null;H(()=>{Ee(t.enabled)&&(Do(c=>[...c,n]),V(()=>{Do(c=>c.filter(h=>h!==n))}))}),H(()=>{if(!Ee(t.enabled)||!Ee(t.hideScrollbar))return;const{body:c}=document,h=window.innerWidth-c.offsetWidth;if(Ee(t.preventScrollbarShift)){const d={overflow:"hidden"},u=[];h>0&&(Ee(t.preventScrollbarShiftMode)==="padding"?d.paddingRight=`calc(${window.getComputedStyle(c).paddingRight} + ${h}px)`:d.marginRight=`calc(${window.getComputedStyle(c).marginRight} + ${h}px)`,u.push({key:"--scrollbar-width",value:`${h}px`}));const f=window.scrollY,g=window.scrollX;ko({key:"prevent-scroll",element:c,style:d,properties:u,cleanup:()=>{Ee(t.restoreScrollPosition)&&h>0&&window.scrollTo(g,f)}})}else ko({key:"prevent-scroll",element:c,style:{overflow:"hidden"}})}),H(()=>{!tc(n)||!Ee(t.enabled)||(document.addEventListener("wheel",l,{passive:!1}),document.addEventListener("touchstart",a,{passive:!1}),document.addEventListener("touchmove",i,{passive:!1}),V(()=>{document.removeEventListener("wheel",l),document.removeEventListener("touchstart",a),document.removeEventListener("touchmove",i)}))});const a=c=>{r=Ao(c),o=null,s=null},l=c=>{const h=c.target,d=Ee(t.element),u=rc(c),f=Math.abs(u[0])>Math.abs(u[1])?"x":"y",g=f==="x"?u[0]:u[1],y=Mo(h,f,g,d);let v;d&&ar(d,h)?v=!y:v=!0,v&&c.cancelable&&c.preventDefault()},i=c=>{const h=Ee(t.element),d=c.target;let u;if(c.touches.length===2)u=!Ee(t.allowPinchZoom);else{if(o==null||s===null){const f=Ao(c).map((y,v)=>r[v]-y),g=Math.abs(f[0])>Math.abs(f[1])?"x":"y";o=g,s=g==="x"?f[0]:f[1]}if(d.type==="range")u=!1;else{const f=Mo(d,o,s,h);h&&ar(h,d)?u=!f:u=!0}}u&&c.cancelable&&c.preventDefault()}},rc=e=>[e.deltaX,e.deltaY],Ao=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Mo=(e,t,n,r)=>{const o=r!==null&&ar(r,e),[s,a]=ec(e,t,o?r:void 0);return!(n>0&&Math.abs(s)<=1||n<0&&Math.abs(a)<1)},ar=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},oc=nc,ic=oc,Ni=xe();function Hi(){return $e(Ni)}function vt(){const e=Hi();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Gi=xe();function Er(){const e=$e(Gi);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Ui=xe();function tt(){const e=$e(Ui);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Dr(e){let t;const n=tt(),r=vt(),o=X({id:n.generateId(`item-${qe()}`)},e),[s,a]=ie(o,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[l,i]=B(),[c,h]=B(),[d,u]=B(),f=()=>r.listState().selectionManager(),g=()=>a.id,y=()=>f().focusedKey()===g(),v=()=>{var C;(C=s.onSelect)==null||C.call(s),s.closeOnSelect&&setTimeout(()=>{r.close(!0)})};gl({getItem:()=>{var C;return{ref:()=>t,type:"item",key:g(),textValue:s.textValue??((C=d())==null?void 0:C.textContent)??(t==null?void 0:t.textContent)??"",disabled:s.disabled??!1}}});const b=gi({key:g,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),p=C=>{de(C,s.onPointerMove),C.pointerType==="mouse"&&(s.disabled?r.onItemLeave(C):(r.onItemEnter(C),C.defaultPrevented||(De(C.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(g()))))},w=C=>{de(C,s.onPointerLeave),C.pointerType==="mouse"&&r.onItemLeave(C)},x=C=>{de(C,s.onPointerUp),!s.disabled&&C.button===0&&v()},$=C=>{if(de(C,s.onKeyDown),!C.repeat&&!s.disabled)switch(C.key){case"Enter":case" ":v();break}},O=P(()=>{if(s.indeterminate)return"mixed";if(s.checked!=null)return s.checked}),E=P(()=>({"data-indeterminate":s.indeterminate?"":void 0,"data-checked":s.checked&&!s.indeterminate?"":void 0,"data-disabled":s.disabled?"":void 0,"data-highlighted":y()?"":void 0})),q={isChecked:()=>s.checked,dataset:E,setLabelRef:u,generateId:fn(()=>a.id),registerLabel:He(i),registerDescription:He(h)};return m(Gi.Provider,{value:q,get children(){return m(fe,W({as:"div",ref(C){const M=Me(R=>t=R,s.ref);typeof M=="function"&&M(C)},get tabIndex(){return b.tabIndex()},get"aria-checked"(){return O()},get"aria-disabled"(){return s.disabled},get"aria-labelledby"(){return l()},get"aria-describedby"(){return c()},get"data-key"(){return b.dataKey()},get onPointerDown(){return we([s.onPointerDown,b.onPointerDown])},get onPointerUp(){return we([x,b.onPointerUp])},get onClick(){return we([s.onClick,b.onClick])},get onKeyDown(){return we([$,b.onKeyDown])},get onMouseDown(){return we([s.onMouseDown,b.onMouseDown])},get onFocus(){return we([s.onFocus,b.onFocus])},onPointerMove:p,onPointerLeave:w},E,a))}})}function Vi(e){const t=X({closeOnSelect:!1},e),[n,r]=ie(t,["checked","defaultChecked","onChange","onSelect"]),o=ol({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:a=>{var l;return(l=n.onChange)==null?void 0:l.call(n,a)},isDisabled:()=>r.disabled});return m(Dr,W({role:"menuitemcheckbox",get checked(){return o.isSelected()},onSelect:()=>{var a;(a=n.onSelect)==null||a.call(n),o.toggle()}},r))}var sc=xe();function zn(){return $e(sc)}var dn={next:(e,t)=>e==="ltr"?t==="horizontal"?"ArrowRight":"ArrowDown":t==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,t)=>dn.next(e==="ltr"?"rtl":"ltr",t)},To={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function ji(e){const t=tt(),n=vt(),r=zn(),{direction:o}=kt(),s=X({id:t.generateId("trigger")},e),[a,l]=ie(s,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let i=()=>t.value();r!==void 0&&(i=()=>t.value()??a.id,r.lastValue()===void 0&&r.setLastValue(i));const c=Pn(()=>n.triggerRef(),()=>"button"),h=P(()=>{var b;return c()==="a"&&((b=n.triggerRef())==null?void 0:b.getAttribute("href"))!=null});H(ft(()=>r==null?void 0:r.value(),b=>{var p;h()&&b===i()&&((p=n.triggerRef())==null||p.focus())}));const d=()=>{r!==void 0?n.isOpen()?r.value()===i()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)},u=b=>{de(b,a.onPointerDown),b.currentTarget.dataset.pointerType=b.pointerType,!a.disabled&&b.pointerType!=="touch"&&b.button===0&&d()},f=b=>{de(b,a.onClick),a.disabled||b.currentTarget.dataset.pointerType==="touch"&&d()},g=b=>{if(de(b,a.onKeyDown),!a.disabled){if(h())switch(b.key){case"Enter":case" ":return}switch(b.key){case"Enter":case" ":case To.first(t.orientation()):b.stopPropagation(),b.preventDefault(),Ya(b.currentTarget),n.open("first"),r==null||r.setAutoFocusMenu(!0),r==null||r.setValue(i);break;case To.last(t.orientation()):b.stopPropagation(),b.preventDefault(),n.open("last");break;case dn.next(o(),t.orientation()):if(r===void 0)break;b.stopPropagation(),b.preventDefault(),r.nextMenu();break;case dn.previous(o(),t.orientation()):if(r===void 0)break;b.stopPropagation(),b.preventDefault(),r.previousMenu();break}}},y=b=>{var p;de(b,a.onMouseOver),((p=n.triggerRef())==null?void 0:p.dataset.pointerType)!=="touch"&&!a.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(i)},v=b=>{de(b,a.onFocus),r!==void 0&&b.currentTarget.dataset.pointerType!=="touch"&&r.setValue(i)};return H(()=>V(n.registerTriggerId(a.id))),m(mr,W({ref(b){const p=Me(n.setTriggerRef,a.ref);typeof p=="function"&&p(b)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return a.id},get disabled(){return a.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return ve(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return i()!==void 0&&(r==null?void 0:r.value())===i()?!0:void 0},get tabIndex(){return r!==void 0?r.value()===i()||r.lastValue()===i()?0:-1:void 0},onPointerDown:u,onMouseOver:y,onClick:f,onKeyDown:g,onFocus:v,role:r!==void 0?"menuitem":void 0},()=>n.dataset(),l))}var ac=xe();function Wi(){return $e(ac)}function Qi(e){let t;const n=tt(),r=vt(),o=zn(),s=Wi(),{direction:a}=kt(),l=X({id:n.generateId(`content-${qe()}`)},e),[i,c]=ie(l,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let h=0;const d=()=>r.parentMenuContext()==null&&o===void 0&&n.isModal(),u=Vu({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()==="horizontal"?"vertical":"horizontal"},()=>t);ju({trapFocus:()=>d()&&r.isOpen(),onMountAutoFocus:w=>{var x;o===void 0&&((x=i.onOpenAutoFocus)==null||x.call(i,w))},onUnmountAutoFocus:i.onCloseAutoFocus},()=>t);const f=w=>{if(Ne(w.currentTarget,w.target)&&(w.key==="Tab"&&r.isOpen()&&w.preventDefault(),o!==void 0&&w.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(w.key){case dn.next(a(),n.orientation()):w.stopPropagation(),w.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.nextMenu();break;case dn.previous(a(),n.orientation()):if(w.currentTarget.hasAttribute("data-closed"))break;w.stopPropagation(),w.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.previousMenu();break}},g=w=>{var x;(x=i.onEscapeKeyDown)==null||x.call(i,w),o==null||o.setAutoFocusMenu(!1),r.close(!0)},y=w=>{var x;(x=i.onFocusOutside)==null||x.call(i,w),n.isModal()&&w.preventDefault()},v=w=>{var x,$;de(w,i.onPointerEnter),r.isOpen()&&((x=r.parentMenuContext())==null||x.listState().selectionManager().setFocused(!1),($=r.parentMenuContext())==null||$.listState().selectionManager().setFocusedKey(void 0))},b=w=>{if(de(w,i.onPointerMove),w.pointerType!=="mouse")return;const x=w.target,$=h!==w.clientX;Ne(w.currentTarget,x)&&$&&(r.setPointerDir(w.clientX>h?"right":"left"),h=w.clientX)};H(()=>V(r.registerContentId(i.id)));const p={ref:Me(w=>{r.setContentRef(w),t=w},i.ref),role:"menu",get id(){return i.id},get tabIndex(){return u.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:we([i.onKeyDown,u.onKeyDown,f]),onMouseDown:we([i.onMouseDown,u.onMouseDown]),onFocusIn:we([i.onFocusIn,u.onFocusIn]),onFocusOut:we([i.onFocusOut,u.onFocusOut]),onPointerEnter:v,onPointerMove:b,get"data-orientation"(){return n.orientation()}};return m(K,{get when(){return r.contentPresent()},get children(){return m(K,{get when(){return s===void 0||r.parentMenuContext()!=null},get fallback(){return m(fe,W({as:"div"},()=>r.dataset(),p,c))},get children(){return m(Ai.Positioner,{get children(){return m(Hu,W({get disableOutsidePointerEvents(){return ve(()=>!!d())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return Ln({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},i.style)},onEscapeKeyDown:g,onFocusOutside:y,get onDismiss(){return r.close}},()=>r.dataset(),p,c))}})}})}})}function lc(e){let t;const n=tt(),r=vt(),[o,s]=ie(e,["ref"]);return ic({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),m(Qi,W({ref(a){const l=Me(i=>{t=i},o.ref);typeof l=="function"&&l(a)}},s))}var Yi=xe();function uc(){const e=$e(Yi);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function Ar(e){const t=tt(),n=X({id:t.generateId(`group-${qe()}`)},e),[r,o]=B(),s={generateId:fn(()=>n.id),registerLabelId:He(o)};return m(Yi.Provider,{value:s,get children(){return m(fe,W({as:"div",role:"group",get"aria-labelledby"(){return r()}},n))}})}function Xi(e){const t=uc(),n=X({id:t.generateId("label")},e),[r,o]=ie(n,["id"]);return H(()=>V(t.registerLabelId(r.id))),m(fe,W({as:"span",get id(){return r.id},"aria-hidden":"true"},o))}function Zi(e){const t=vt(),n=X({children:"▼"},e);return m(fe,W({as:"span","aria-hidden":"true"},()=>t.dataset(),n))}function Ji(e){return m(Dr,W({role:"menuitem",closeOnSelect:!0},e))}function es(e){const t=Er(),n=X({id:t.generateId("description")},e),[r,o]=ie(n,["id"]);return H(()=>V(t.registerDescription(r.id))),m(fe,W({as:"div",get id(){return r.id}},()=>t.dataset(),o))}function ts(e){const t=Er(),n=X({id:t.generateId("indicator")},e),[r,o]=ie(n,["forceMount"]);return m(K,{get when(){return r.forceMount||t.isChecked()},get children(){return m(fe,W({as:"div"},()=>t.dataset(),o))}})}function ns(e){const t=Er(),n=X({id:t.generateId("label")},e),[r,o]=ie(n,["ref","id"]);return H(()=>V(t.registerLabel(r.id))),m(fe,W({as:"div",ref(s){const a=Me(t.setLabelRef,r.ref);typeof a=="function"&&a(s)},get id(){return r.id}},()=>t.dataset(),o))}function rs(e){const t=vt();return m(K,{get when(){return t.contentPresent()},get children(){return m(Ko,e)}})}var os=xe();function cc(){const e=$e(os);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function is(e){const n=tt().generateId(`radiogroup-${qe()}`),r=X({id:n},e),[o,s]=ie(r,["value","defaultValue","onChange","disabled"]),[a,l]=hn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:c=>{var h;return(h=o.onChange)==null?void 0:h.call(o,c)}}),i={isDisabled:()=>o.disabled,isSelectedValue:c=>c===a(),setSelectedValue:l};return m(os.Provider,{value:i,get children(){return m(Ar,s)}})}function ss(e){const t=cc(),n=X({closeOnSelect:!1},e),[r,o]=ie(n,["value","onSelect"]);return m(Dr,W({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{var a;(a=r.onSelect)==null||a.call(r),t.setSelectedValue(r.value)}},o))}function dc(e,t,n){const r=e.split("-")[0],o=n.getBoundingClientRect(),s=[],a=t.clientX,l=t.clientY;switch(r){case"top":s.push([a,l+5]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]);break;case"right":s.push([a-5,l]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]);break;case"bottom":s.push([a,l-5]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]);break;case"left":s.push([a+5,l]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]);break}return s}function fc(e,t){return t?Qa([e.clientX,e.clientY],t):!1}function as(e){const t=tt(),n=si(),r=Hi(),o=zn(),s=Wi(),a=X({placement:t.orientation()==="horizontal"?"bottom-start":"right-start"},e),[l,i]=ie(a,["open","defaultOpen","onOpenChange"]);let c=0,h=null,d="right";const[u,f]=B(),[g,y]=B(),[v,b]=B(),[p,w]=B(),[x,$]=B(!0),[O,E]=B(i.placement),[q,C]=B([]),[M,R]=B([]),{DomCollectionProvider:G}=fl({items:M,onItemsChange:R}),ne=Ti({open:()=>l.open,defaultOpen:()=>l.defaultOpen,onOpenChange:j=>{var Se;return(Se=l.onOpenChange)==null?void 0:Se.call(l,j)}}),{present:Z}=hi({show:()=>t.forceMount()||ne.isOpen(),element:()=>p()??null}),ae=Tl({selectionMode:"none",dataSource:M}),z=j=>{$(j),ne.open()},Q=(j=!1)=>{ne.close(),j&&r&&r.close(!0)},J=j=>{$(j),ne.toggle()},ue=()=>{const j=p();j&&(De(j),ae.selectionManager().setFocused(!0),ae.selectionManager().setFocusedKey(void 0))},ye=()=>{s!=null?setTimeout(()=>ue()):ue()},Te=j=>{C(ke=>[...ke,j]);const Se=r==null?void 0:r.registerNestedMenu(j);return()=>{C(ke=>er(ke,j)),Se==null||Se()}},he=j=>d===(h==null?void 0:h.side)&&fc(j,h==null?void 0:h.area),Ae=j=>{he(j)&&j.preventDefault()},A=j=>{he(j)||ye()},ge=j=>{he(j)&&j.preventDefault()};Qu({isDisabled:()=>!(r==null&&ne.isOpen()&&t.isModal()),targets:()=>[p(),...q()].filter(Boolean)}),H(()=>{const j=p();if(!j||!r)return;const Se=r.registerNestedMenu(j);V(()=>{Se()})}),H(()=>{r===void 0&&(o==null||o.registerMenu(t.value(),[p(),...q()]))}),H(()=>{var j;r!==void 0||o===void 0||(o.value()===t.value()?((j=v())==null||j.focus(),o.autoFocusMenu()&&z(!0)):Q())}),H(()=>{r!==void 0||o===void 0||ne.isOpen()&&o.setValue(t.value())}),V(()=>{r===void 0&&(o==null||o.unregisterMenu(t.value()))});const yt={dataset:P(()=>({"data-expanded":ne.isOpen()?"":void 0,"data-closed":ne.isOpen()?void 0:""})),isOpen:ne.isOpen,contentPresent:Z,nestedMenus:q,currentPlacement:O,pointerGraceTimeoutId:()=>c,autoFocus:x,listState:()=>ae,parentMenuContext:()=>r,triggerRef:v,contentRef:p,triggerId:u,contentId:g,setTriggerRef:b,setContentRef:w,open:z,close:Q,toggle:J,focusContent:ye,onItemEnter:Ae,onItemLeave:A,onTriggerLeave:ge,setPointerDir:j=>d=j,setPointerGraceTimeoutId:j=>c=j,setPointerGraceIntent:j=>h=j,registerNestedMenu:Te,registerItemToParentDomCollection:n==null?void 0:n.registerItem,registerTriggerId:He(f),registerContentId:He(y)};return m(G,{get children(){return m(Ni.Provider,{value:yt,get children(){return m(K,{when:s===void 0,get fallback(){return i.children},get children(){return m(Ai,W({anchorRef:v,contentRef:p,onCurrentPlacementChange:E},i))}})}})}})}function ls(e){const{direction:t}=kt();return m(as,W({get placement(){return t()==="rtl"?"left-start":"right-start"},flip:!0},e))}var gc={close:(e,t)=>e==="ltr"?[t==="horizontal"?"ArrowLeft":"ArrowUp"]:[t==="horizontal"?"ArrowRight":"ArrowDown"]};function us(e){const t=vt(),n=tt(),[r,o]=ie(e,["onFocusOutside","onKeyDown"]),{direction:s}=kt();return m(Qi,W({onOpenAutoFocus:h=>{h.preventDefault()},onCloseAutoFocus:h=>{h.preventDefault()},onFocusOutside:h=>{var u;(u=r.onFocusOutside)==null||u.call(r,h);const d=h.target;Ne(t.triggerRef(),d)||t.close()},onKeyDown:h=>{de(h,r.onKeyDown);const d=Ne(h.currentTarget,h.target),u=gc.close(s(),n.orientation()).includes(h.key),f=t.parentMenuContext()!=null;d&&u&&f&&(t.close(),De(t.triggerRef()))}},o))}var Fo=["Enter"," "],hc={open:(e,t)=>e==="ltr"?[...Fo,t==="horizontal"?"ArrowRight":"ArrowDown"]:[...Fo,t==="horizontal"?"ArrowLeft":"ArrowUp"]};function cs(e){let t;const n=tt(),r=vt(),o=X({id:n.generateId(`sub-trigger-${qe()}`)},e),[s,a]=ie(o,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let l=null;const i=()=>{l&&window.clearTimeout(l),l=null},{direction:c}=kt(),h=()=>s.id,d=()=>{const w=r.parentMenuContext();if(w==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return w.listState().selectionManager()},u=()=>r.listState().collection(),f=()=>d().focusedKey()===h(),g=gi({key:h,selectionManager:d,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),y=w=>{de(w,s.onClick),!r.isOpen()&&!s.disabled&&r.open(!0)},v=w=>{var $;if(de(w,s.onPointerMove),w.pointerType!=="mouse")return;const x=r.parentMenuContext();if(x==null||x.onItemEnter(w),!w.defaultPrevented){if(s.disabled){x==null||x.onItemLeave(w);return}!r.isOpen()&&!l&&(($=r.parentMenuContext())==null||$.setPointerGraceIntent(null),l=window.setTimeout(()=>{r.open(!1),i()},100)),x==null||x.onItemEnter(w),w.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),De(w.currentTarget),x==null||x.listState().selectionManager().setFocused(!0),x==null||x.listState().selectionManager().setFocusedKey(h()))}},b=w=>{if(de(w,s.onPointerLeave),w.pointerType!=="mouse")return;i();const x=r.parentMenuContext(),$=r.contentRef();if($){x==null||x.setPointerGraceIntent({area:dc(r.currentPlacement(),w,$),side:r.currentPlacement().split("-")[0]}),window.clearTimeout(x==null?void 0:x.pointerGraceTimeoutId());const O=window.setTimeout(()=>{x==null||x.setPointerGraceIntent(null)},300);x==null||x.setPointerGraceTimeoutId(O)}else{if(x==null||x.onTriggerLeave(w),w.defaultPrevented)return;x==null||x.setPointerGraceIntent(null)}x==null||x.onItemLeave(w)},p=w=>{de(w,s.onKeyDown),!w.repeat&&(s.disabled||hc.open(c(),n.orientation()).includes(w.key)&&(w.stopPropagation(),w.preventDefault(),d().setFocused(!1),d().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(u().getFirstKey())))};return H(()=>{if(r.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const w=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:h(),textValue:s.textValue??(t==null?void 0:t.textContent)??"",disabled:s.disabled??!1});V(w)}),H(ft(()=>{var w;return(w=r.parentMenuContext())==null?void 0:w.pointerGraceTimeoutId()},w=>{V(()=>{var x;window.clearTimeout(w),(x=r.parentMenuContext())==null||x.setPointerGraceIntent(null)})})),H(()=>V(r.registerTriggerId(s.id))),V(()=>{i()}),m(fe,W({as:"div",ref(w){const x=Me($=>{r.setTriggerRef($),t=$},s.ref);typeof x=="function"&&x(w)},get id(){return s.id},role:"menuitem",get tabIndex(){return g.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return ve(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return s.disabled},get"data-key"(){return g.dataKey()},get"data-highlighted"(){return f()?"":void 0},get"data-disabled"(){return s.disabled?"":void 0},get onPointerDown(){return we([s.onPointerDown,g.onPointerDown])},get onPointerUp(){return we([s.onPointerUp,g.onPointerUp])},get onClick(){return we([y,g.onClick])},get onKeyDown(){return we([p,g.onKeyDown])},get onMouseDown(){return we([s.onMouseDown,g.onMouseDown])},get onFocus(){return we([s.onFocus,g.onFocus])},onPointerMove:v,onPointerLeave:b},()=>r.dataset(),a))}function vc(e){const t=zn(),n=`menu-${qe()}`,r=X({id:n,modal:!0},e),[o,s]=ie(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),a=Ti({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:i=>{var c;return(c=o.onOpenChange)==null?void 0:c.call(o,i)}}),l={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??l.isModal(),forceMount:()=>o.forceMount??!1,generateId:fn(()=>o.id),value:()=>o.value,orientation:()=>o.orientation??(t==null?void 0:t.orientation())??"horizontal"};return m(Ui.Provider,{value:l,get children(){return m(as,W({get open(){return a.isOpen()},get onOpenChange(){return a.setIsOpen}},s))}})}var yc={};qn(yc,{Root:()=>Kn,Separator:()=>mc});function Kn(e){let t;const n=X({orientation:"horizontal"},e),[r,o]=ie(n,["ref","orientation"]),s=Pn(()=>t,()=>"hr");return m(fe,W({as:"hr",ref(a){const l=Me(i=>t=i,r.ref);typeof l=="function"&&l(a)},get role(){return s()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},o))}var mc=Kn,oe={};qn(oe,{Arrow:()=>kr,CheckboxItem:()=>Vi,Content:()=>ds,DropdownMenu:()=>bc,Group:()=>Ar,GroupLabel:()=>Xi,Icon:()=>Zi,Item:()=>Ji,ItemDescription:()=>es,ItemIndicator:()=>ts,ItemLabel:()=>ns,Portal:()=>rs,RadioGroup:()=>is,RadioItem:()=>ss,Root:()=>fs,Separator:()=>Kn,Sub:()=>ls,SubContent:()=>us,SubTrigger:()=>cs,Trigger:()=>ji});function ds(e){const t=tt(),n=vt(),[r,o]=ie(e,["onCloseAutoFocus","onInteractOutside"]);let s=!1;return m(lc,W({onCloseAutoFocus:i=>{var c;(c=r.onCloseAutoFocus)==null||c.call(r,i),s||De(n.triggerRef()),s=!1,i.preventDefault()},onInteractOutside:i=>{var c;(c=r.onInteractOutside)==null||c.call(r,i),(!t.isModal()||i.detail.isContextMenu)&&(s=!0)}},o))}function fs(e){const t=`dropdownmenu-${qe()}`,n=X({id:t},e);return m(vc,n)}var bc=Object.assign(fs,{Arrow:kr,CheckboxItem:Vi,Content:ds,Group:Ar,GroupLabel:Xi,Icon:Zi,Item:Ji,ItemDescription:es,ItemIndicator:ts,ItemLabel:ns,Portal:rs,RadioGroup:is,RadioItem:ss,Separator:Kn,Sub:ls,SubContent:us,SubTrigger:cs,Trigger:ji}),S={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",80:"cc"},font:{size:{xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)"},weight:{medium:"500",semibold:"600",bold:"700"}},border:{radius:{xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",full:"9999px"}},size:{.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",14:"calc(var(--tsqd-font-size) * 3.5)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"}},pc=_('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),wc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),xc=_('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),$c=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Mr=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Cc=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Sc=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),kc=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ec=_('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),Dc=_('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),Ac=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Mc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Tc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Fc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),gs=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ic=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Lc=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),Oc=_('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Pc=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),qc=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),_c=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Rc=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),zc=_('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function Kc(){return pc()}function hs(){return wc()}function Bt(){return xc()}function Io(){return $c()}function Lo(){return Mr()}function Bc(){return(()=>{var e=Mr();return e.style.setProperty("transform","rotate(90deg)"),e})()}function Nc(){return(()=>{var e=Mr();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function Hc(){return Cc()}function Gc(){return Sc()}function Uc(){return kc()}function Vc(){return Ec()}function jc(){return Dc()}function Wc(){return Ac()}function Qc(){return Mc()}function Yc(){return Tc()}function Xc(){return Fc()}function Zc(e){return(()=>{var t=gs(),n=t.firstChild;return U(()=>T(n,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),t})()}function Jc(){return Ic()}function ed(){return Lc()}function td(e){return[m(K,{get when(){return e.checked},get children(){var t=gs(),n=t.firstChild;return U(()=>T(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}}),m(K,{get when(){return!e.checked},get children(){var t=Oc(),n=t.firstChild;return U(()=>T(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}})]}function lr(){return Pc()}function nd(){return qc()}function rd(){return _c()}function od(){return Rc()}function Oo(){const e=qe();return(()=>{var t=zc(),n=t.firstChild,r=n.nextSibling,o=r.nextSibling,s=o.firstChild,a=o.nextSibling,l=a.firstChild,i=a.nextSibling,c=i.nextSibling,h=c.firstChild,d=c.nextSibling,u=d.firstChild,f=d.nextSibling,g=f.nextSibling,y=g.firstChild,v=g.nextSibling,b=v.firstChild,p=v.nextSibling,w=p.nextSibling,x=w.firstChild,$=w.nextSibling,O=$.firstChild,E=$.nextSibling,q=E.nextSibling,C=q.firstChild,M=q.nextSibling,R=M.firstChild,G=M.nextSibling,ne=G.nextSibling,Z=ne.firstChild,ae=ne.nextSibling,z=ae.firstChild,Q=ae.nextSibling,J=Q.nextSibling,ue=J.firstChild,ye=J.nextSibling,Te=ye.firstChild,he=ye.nextSibling,Ae=he.firstChild,A=Ae.nextSibling,ge=A.nextSibling,ee=ge.nextSibling,yt=ee.nextSibling,j=he.nextSibling,Se=j.firstChild,ke=j.nextSibling,Lt=ke.firstChild,_e=ke.nextSibling,mt=_e.firstChild,Et=mt.nextSibling,nt=Et.nextSibling,Ye=nt.firstChild,rt=Ye.nextSibling,I=rt.nextSibling,te=I.nextSibling,me=te.nextSibling,se=me.nextSibling,le=se.nextSibling,ce=le.nextSibling,be=ce.nextSibling,re=be.nextSibling,ot=re.nextSibling,it=ot.nextSibling,Ge=_e.nextSibling,Dt=Ge.firstChild,st=Ge.nextSibling,At=st.firstChild,at=st.nextSibling,bt=at.firstChild,mn=bt.nextSibling,Yt=at.nextSibling,bn=Yt.firstChild,Ot=Yt.nextSibling,pn=Ot.firstChild,Xt=Ot.nextSibling,Zt=Xt.firstChild,Jt=Zt.nextSibling,Pt=Jt.nextSibling,Tr=Pt.nextSibling,Fr=Tr.nextSibling,Ir=Fr.nextSibling,Lr=Ir.nextSibling,Or=Lr.nextSibling,Pr=Or.nextSibling,qr=Pr.nextSibling,_r=qr.nextSibling,Rr=_r.nextSibling,zr=Rr.nextSibling,Kr=zr.nextSibling,Br=Kr.nextSibling,Nr=Br.nextSibling,Hr=Nr.nextSibling,xs=Hr.nextSibling;return T(n,"id",`a-${e}`),T(r,"fill",`url(#a-${e})`),T(s,"id",`am-${e}`),T(a,"id",`b-${e}`),T(l,"filter",`url(#am-${e})`),T(i,"mask",`url(#b-${e})`),T(h,"id",`ah-${e}`),T(d,"id",`k-${e}`),T(u,"filter",`url(#ah-${e})`),T(f,"mask",`url(#k-${e})`),T(y,"id",`ae-${e}`),T(v,"id",`j-${e}`),T(b,"filter",`url(#ae-${e})`),T(p,"mask",`url(#j-${e})`),T(x,"id",`ai-${e}`),T($,"id",`i-${e}`),T(O,"filter",`url(#ai-${e})`),T(E,"mask",`url(#i-${e})`),T(C,"id",`aj-${e}`),T(M,"id",`h-${e}`),T(R,"filter",`url(#aj-${e})`),T(G,"mask",`url(#h-${e})`),T(Z,"id",`ag-${e}`),T(ae,"id",`g-${e}`),T(z,"filter",`url(#ag-${e})`),T(Q,"mask",`url(#g-${e})`),T(ue,"id",`af-${e}`),T(ye,"id",`f-${e}`),T(Te,"filter",`url(#af-${e})`),T(he,"mask",`url(#f-${e})`),T(ee,"id",`m-${e}`),T(yt,"fill",`url(#m-${e})`),T(Se,"id",`ak-${e}`),T(ke,"id",`e-${e}`),T(Lt,"filter",`url(#ak-${e})`),T(_e,"mask",`url(#e-${e})`),T(mt,"id",`n-${e}`),T(Et,"fill",`url(#n-${e})`),T(Ye,"id",`r-${e}`),T(rt,"fill",`url(#r-${e})`),T(I,"id",`s-${e}`),T(te,"fill",`url(#s-${e})`),T(me,"id",`q-${e}`),T(se,"fill",`url(#q-${e})`),T(le,"id",`p-${e}`),T(ce,"fill",`url(#p-${e})`),T(be,"id",`o-${e}`),T(re,"fill",`url(#o-${e})`),T(ot,"id",`l-${e}`),T(it,"fill",`url(#l-${e})`),T(Dt,"id",`al-${e}`),T(st,"id",`d-${e}`),T(At,"filter",`url(#al-${e})`),T(at,"mask",`url(#d-${e})`),T(bt,"id",`u-${e}`),T(mn,"fill",`url(#u-${e})`),T(bn,"id",`ad-${e}`),T(Ot,"id",`c-${e}`),T(pn,"filter",`url(#ad-${e})`),T(Xt,"mask",`url(#c-${e})`),T(Zt,"id",`t-${e}`),T(Jt,"fill",`url(#t-${e})`),T(Pt,"id",`v-${e}`),T(Tr,"stroke",`url(#v-${e})`),T(Fr,"id",`aa-${e}`),T(Ir,"stroke",`url(#aa-${e})`),T(Lr,"id",`w-${e}`),T(Or,"stroke",`url(#w-${e})`),T(Pr,"id",`ac-${e}`),T(qr,"stroke",`url(#ac-${e})`),T(_r,"id",`ab-${e}`),T(Rr,"stroke",`url(#ab-${e})`),T(zr,"id",`y-${e}`),T(Kr,"stroke",`url(#y-${e})`),T(Br,"id",`x-${e}`),T(Nr,"stroke",`url(#x-${e})`),T(Hr,"id",`z-${e}`),T(xs,"stroke",`url(#z-${e})`),t})()}var id=_('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),sd=_('<button title="Copy object to clipboard">'),ad=_('<button title="Remove all items"aria-label="Remove all items">'),ld=_('<button title="Delete item"aria-label="Delete item">'),ud=_('<button title="Toggle value"aria-label="Toggle value">'),cd=_('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),nn=_("<div>"),dd=_("<div><button> <span></span> <span> "),fd=_("<input>"),Po=_("<span>"),gd=_("<div><label>:"),hd=_("<div><div><button> [<!>...<!>]");function vd(e,t){let n=0;const r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n=n+t;return r}var qo=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qt(n):Wt(n));return(()=>{var o=id();return U(()=>F(o,L(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),o})()},yd=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qt(n):Wt(n)),[o,s]=B("NoCopy");return(()=>{var a=sd();return Os(a,"click",o()==="NoCopy"?()=>{navigator.clipboard.writeText(Ps(e.value)).then(()=>{s("SuccessCopy"),setTimeout(()=>{s("NoCopy")},1500)},l=>{console.error("Failed to copy: ",l),s("ErrorCopy"),setTimeout(()=>{s("NoCopy")},1500)})}:void 0,!0),k(a,m(qs,{get children(){return[m(Hn,{get when(){return o()==="NoCopy"},get children(){return m(Yc,{})}}),m(Hn,{get when(){return o()==="SuccessCopy"},get children(){return m(Zc,{get theme(){return t()}})}}),m(Hn,{get when(){return o()==="ErrorCopy"},get children(){return m(Jc,{})}})]}})),U(l=>{var i=r().actionButton,c=`${o()==="NoCopy"?"Copy object to clipboard":o()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return i!==l.e&&F(a,l.e=i),c!==l.t&&T(a,"aria-label",l.t=c),l},{e:void 0,t:void 0}),a})()},md=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qt(n):Wt(n)),o=N().client;return(()=>{var s=ad();return s.$$click=()=>{const a=e.activeQuery.state.data,l=cr(a,e.dataPath,[]);o.setQueryData(e.activeQuery.queryKey,l)},k(s,m(ed,{})),U(()=>F(s,r().actionButton)),s})()},_o=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qt(n):Wt(n)),o=N().client;return(()=>{var s=ld();return s.$$click=()=>{const a=e.activeQuery.state.data,l=_s(a,e.dataPath);o.setQueryData(e.activeQuery.queryKey,l)},k(s,m(hs,{})),U(()=>F(s,L(r().actionButton))),s})()},bd=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qt(n):Wt(n)),o=N().client;return(()=>{var s=ud();return s.$$click=()=>{const a=e.activeQuery.state.data,l=cr(a,e.dataPath,!e.value);o.setQueryData(e.activeQuery.queryKey,l)},k(s,m(td,{get theme(){return t()},get checked(){return e.value}})),U(()=>F(s,L(r().actionButton,n`
          width: ${S.size[3.5]};
          height: ${S.size[3.5]};
        `))),s})()};function Ro(e){return Symbol.iterator in e}function pt(e){const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qt(n):Wt(n)),o=N().client,[s,a]=B((e.defaultExpanded||[]).includes(e.label)),l=()=>a(y=>!y),[i,c]=B([]),h=P(()=>Array.isArray(e.value)?e.value.map((y,v)=>({label:v.toString(),value:y})):e.value!==null&&typeof e.value=="object"&&Ro(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([y,v])=>({label:y,value:v})):Array.from(e.value,(y,v)=>({label:v.toString(),value:y})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([y,v])=>({label:y,value:v})):[]),d=P(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&Ro(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),u=P(()=>vd(h(),100)),f=e.dataPath??[],g=qe();return(()=>{var y=nn();return k(y,m(K,{get when(){return u().length},get children(){return[(()=>{var v=dd(),b=v.firstChild,p=b.firstChild,w=p.nextSibling,x=w.nextSibling,$=x.nextSibling,O=$.firstChild;return b.$$click=()=>l(),k(b,m(qo,{get expanded(){return s()}}),p),k(w,()=>e.label),k($,()=>String(d()).toLowerCase()==="iterable"?"(Iterable) ":"",O),k($,()=>h().length,O),k($,()=>h().length>1?"items":"item",null),k(v,m(K,{get when(){return e.editable},get children(){var E=nn();return k(E,m(yd,{get value(){return e.value}}),null),k(E,m(K,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return m(_o,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),k(E,m(K,{get when(){return d()==="array"&&e.activeQuery!==void 0},get children(){return m(md,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),k(E,m(K,{get when(){return ve(()=>!!e.onEdit)()&&!Fs(e.value).meta},get children(){var q=cd();return q.$$click=()=>{var C;(C=e.onEdit)==null||C.call(e)},k(q,m(Xc,{})),U(()=>F(q,r().actionButton)),q}}),null),U(()=>F(E,r().actions)),E}}),null),U(E=>{var q=r().expanderButtonContainer,C=r().expanderButton,M=s()?"true":"false",R=r().info;return q!==E.e&&F(v,E.e=q),C!==E.t&&F(b,E.t=C),M!==E.a&&T(b,"aria-expanded",E.a=M),R!==E.o&&F($,E.o=R),E},{e:void 0,t:void 0,a:void 0,o:void 0}),v})(),m(K,{get when(){return s()},get children(){return[m(K,{get when(){return u().length===1},get children(){var v=nn();return k(v,m(En,{get each(){return h()},by:b=>b.label,children:b=>m(pt,{get defaultExpanded(){return e.defaultExpanded},get label(){return b().label},get value(){return b().value},get editable(){return e.editable},get dataPath(){return[...f,b().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return d()==="array"||d()==="Iterable"||d()==="object"}})})),U(()=>F(v,r().subEntry)),v}}),m(K,{get when(){return u().length>1},get children(){var v=nn();return k(v,m(Is,{get each(){return u()},children:(b,p)=>(()=>{var w=hd(),x=w.firstChild,$=x.firstChild,O=$.firstChild,E=O.nextSibling,q=E.nextSibling,C=q.nextSibling;return C.nextSibling,$.$$click=()=>c(M=>M.includes(p)?M.filter(R=>R!==p):[...M,p]),k($,m(qo,{get expanded(){return i().includes(p)}}),O),k($,p*100,E),k($,p*100+100-1,C),k(x,m(K,{get when(){return i().includes(p)},get children(){var M=nn();return k(M,m(En,{get each(){return b()},by:R=>R.label,children:R=>m(pt,{get defaultExpanded(){return e.defaultExpanded},get label(){return R().label},get value(){return R().value},get editable(){return e.editable},get dataPath(){return[...f,R().label]},get activeQuery(){return e.activeQuery}})})),U(()=>F(M,r().subEntry)),M}}),null),U(M=>{var R=r().entry,G=r().expanderButton;return R!==M.e&&F(x,M.e=R),G!==M.t&&F($,M.t=G),M},{e:void 0,t:void 0}),w})()})),U(()=>F(v,r().subEntry)),v}})]}})]}}),null),k(y,m(K,{get when(){return u().length===0},get children(){var v=gd(),b=v.firstChild,p=b.firstChild;return T(b,"for",g),k(b,()=>e.label,p),k(v,m(K,{get when(){return ve(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(d()==="string"||d()==="number"||d()==="boolean")},get fallback(){return(()=>{var w=Po();return k(w,()=>kn(e.value)),U(()=>F(w,r().value)),w})()},get children(){return[m(K,{get when(){return ve(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(d()==="string"||d()==="number")},get children(){var w=fd();return w.addEventListener("change",x=>{const $=e.activeQuery.state.data,O=cr($,f,d()==="number"?x.target.valueAsNumber:x.target.value);o.setQueryData(e.activeQuery.queryKey,O)}),T(w,"id",g),U(x=>{var $=d()==="number"?"number":"text",O=L(r().value,r().editableInput);return $!==x.e&&T(w,"type",x.e=$),O!==x.t&&F(w,x.t=O),x},{e:void 0,t:void 0}),U(()=>w.value=e.value),w}}),m(K,{get when(){return d()==="boolean"},get children(){var w=Po();return k(w,m(bd,{get activeQuery(){return e.activeQuery},dataPath:f,get value(){return e.value}}),null),k(w,()=>kn(e.value),null),U(()=>F(w,L(r().value,r().actions,r().editableInput))),w}})]}}),null),k(v,m(K,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return m(_o,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),U(w=>{var x=r().row,$=r().label;return x!==w.e&&F(v,w.e=x),$!==w.t&&F(b,w.t=$),w},{e:void 0,t:void 0}),v}}),null),U(()=>F(y,r().entry)),y})()}var vs=(e,t)=>{const{colors:n,font:r,size:o,border:s}=S,a=(l,i)=>e==="light"?l:i;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${a(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${a(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${a(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${a(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${s.radius.xs};
      background-color: ${a(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${a(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${a(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${a(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},Wt=e=>vs("light",e),Qt=e=>vs("dark",e);ur(["click"]);var pd=_('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),Bn=_("<div>"),wd=_('<aside aria-label="Tanstack query devtools"><div role=separator aria-label="Resize devtools panel"tabindex=0></div><button aria-label="Close tanstack query devtools">'),xd=_('<select name=tsqd-queries-filter-sort aria-label="Sort queries by">'),$d=_('<select name=tsqd-mutations-filter-sort aria-label="Sort mutations by">'),Cd=_("<span>Asc"),Sd=_("<span>Desc"),kd=_('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),Ed=_("<div>Settings"),Dd=_("<span>Position"),Ad=_("<span>Top"),Md=_("<span>Bottom"),Td=_("<span>Left"),Fd=_("<span>Right"),Id=_("<span>Theme"),Ld=_("<span>Light"),Od=_("<span>Dark"),Pd=_("<span>System"),qd=_("<span>Disabled Queries"),_d=_("<span>Show"),Rd=_("<span>Hide"),zd=_("<div><div class=tsqd-queries-container>"),Kd=_("<div><div class=tsqd-mutations-container>"),Bd=_('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),zo=_("<option>Sort by "),Nd=_("<div class=tsqd-query-disabled-indicator aria-hidden=true>disabled"),Hd=_("<div class=tsqd-query-static-indicator aria-hidden=true>static"),ys=_("<button><div></div><code class=tsqd-query-hash>"),Gd=_("<div role=tooltip id=tsqd-status-tooltip>"),Ud=_("<span>"),Vd=_("<button><span aria-hidden=true></span><span>"),jd=_("<button><span aria-hidden=true></span> Error"),Wd=_('<div><span aria-hidden=true></span>Trigger Error<select aria-label="Select error type to trigger"><option value=""disabled selected>'),Qd=_('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),Yd=_('<form><textarea name=data aria-label="Edit query data as JSON"></textarea><div><span></span><div><button type=button>Cancel</button><button>Save'),Xd=_('<div><div role=heading aria-level=2>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div role=heading aria-level=2>Actions</div><div><button><span aria-hidden=true></span>Refetch</button><button><span aria-hidden=true></span>Invalidate</button><button><span aria-hidden=true></span>Reset</button><button><span aria-hidden=true></span>Remove</button><button><span aria-hidden=true></span> Loading</button></div><div role=heading aria-level=2>Data </div><div role=heading aria-level=2>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Zd=_("<option>"),Jd=_('<div><div role=heading aria-level=2>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div role=heading aria-level=2>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[Le,Nn]=B(null),[wt,ms]=B(null),[dt,bs]=B(0),[rn,e0]=B(!1),t0=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qe(n):We(n)),o=P(()=>N().onlineManager);xt(()=>{const d=o().subscribe(u=>{e0(!u)});V(()=>{d()})});const s=dr(),a=P(()=>N().buttonPosition||Xs),l=P(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:N().initialIsOpen||Js),i=P(()=>e.localStore.position||N().position||Zn);let c;H(()=>{const d=c.parentElement,u=e.localStore.height||Cn,f=e.localStore.width||Sn,g=i();d.style.setProperty("--tsqd-panel-height",`${g==="top"?"-":""}${u}px`),d.style.setProperty("--tsqd-panel-width",`${g==="left"?"-":""}${f}px`)}),xt(()=>{const d=()=>{const u=c.parentElement,f=getComputedStyle(u).fontSize;u.style.setProperty("--tsqd-font-size",f)};d(),window.addEventListener("focus",d),V(()=>{window.removeEventListener("focus",d)})});const h=P(()=>e.localStore.pip_open??"false");return[m(K,{get when(){return ve(()=>!!s().pipWindow)()&&h()=="true"},get children(){return m(Ko,{get mount(){var d;return(d=s().pipWindow)==null?void 0:d.document.body},get children(){return m(n0,{get children(){return m(ps,e)}})}})}}),(()=>{var d=Bn(),u=c;return typeof u=="function"?an(u,d):c=d,k(d,m(eo,{name:"tsqd-panel-transition",get children(){return m(K,{get when(){return ve(()=>!!(l()&&!s().pipWindow))()&&h()=="false"},get children(){return m(r0,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),k(d,m(eo,{name:"tsqd-button-transition",get children(){return m(K,{get when(){return!l()},get children(){var f=pd(),g=f.firstChild,y=g.nextSibling;return k(g,m(Oo,{})),y.$$click=()=>e.setLocalStore("open","true"),k(y,m(Oo,{})),U(()=>F(f,L(r().devtoolsBtn,r()[`devtoolsBtn-position-${a()}`],"tsqd-open-btn-container"))),f}})}}),null),U(()=>F(d,L(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${i()==="top"||i()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${a()==="relative"?"none;":a()==="top-left"?"translateX(-72px);":a()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),d})()]},n0=e=>{const t=dr(),n=Ce(),r=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,o=P(()=>n()==="dark"?Qe(r):We(r)),s=()=>{const{colors:a}=S,l=(i,c)=>n()==="dark"?c:i;return dt()<Gt?r`
        flex-direction: column;
        background-color: ${l(a.gray[300],a.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${l(a.gray[200],a.darkGray[900])};
    `};return H(()=>{const a=t().pipWindow,l=()=>{a&&bs(a.innerWidth)};a&&(a.addEventListener("resize",l),l()),V(()=>{a&&a.removeEventListener("resize",l)})}),(()=>{var a=Bn();return a.style.setProperty("--tsqd-font-size","16px"),a.style.setProperty("max-height","100vh"),a.style.setProperty("height","100vh"),a.style.setProperty("width","100vw"),k(a,()=>e.children),U(()=>F(a,L(o().panel,s(),{[r`
            min-width: min-content;
          `]:dt()<No},"tsqd-main-panel"))),a})()},r0=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qe(n):We(n));let o;xt(()=>{o.focus()});const[s,a]=B(!1),l=P(()=>e.localStore.position||N().position||Zn),i=d=>{const u=d.currentTarget.parentElement;if(!u)return;a(!0);const{height:f,width:g}=u.getBoundingClientRect(),y=d.clientX,v=d.clientY;let b=0;const p=qt(3.5),w=qt(12),x=O=>{if(O.preventDefault(),l()==="left"||l()==="right"){const E=l()==="right"?y-O.clientX:O.clientX-y;b=Math.round(g+E),b<w&&(b=w),e.setLocalStore("width",String(Math.round(b)));const q=u.getBoundingClientRect().width;Number(e.localStore.width)<q&&e.setLocalStore("width",String(q))}else{const E=l()==="bottom"?v-O.clientY:O.clientY-v;b=Math.round(f+E),b<p&&(b=p,Nn(null)),e.setLocalStore("height",String(Math.round(b)))}},$=()=>{s()&&a(!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("mouseup",$,!1)};document.addEventListener("mousemove",x,!1),document.addEventListener("mouseup",$,!1)};let c;xt(()=>{Da(c,({width:d},u)=>{u===c&&bs(d)})}),H(()=>{var v,b;const d=(b=(v=c.parentElement)==null?void 0:v.parentElement)==null?void 0:b.parentElement;if(!d)return;const u=e.localStore.position||Zn,f=ks("padding",u),g=e.localStore.position==="left"||e.localStore.position==="right",y=(({padding:p,paddingTop:w,paddingBottom:x,paddingLeft:$,paddingRight:O})=>({padding:p,paddingTop:w,paddingBottom:x,paddingLeft:$,paddingRight:O}))(d.style);d.style[f]=`${g?e.localStore.width:e.localStore.height}px`,V(()=>{Object.entries(y).forEach(([p,w])=>{d.style[p]=w})})});const h=()=>{const{colors:d}=S,u=(f,g)=>t()==="dark"?g:f;return dt()<Gt?n`
        flex-direction: column;
        background-color: ${u(d.gray[300],d.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${u(d.gray[200],d.darkGray[900])};
    `};return(()=>{var d=wd(),u=d.firstChild,f=u.nextSibling,g=c;typeof g=="function"?an(g,d):c=d,u.$$keydown=v=>{const p=qt(3.5),w=qt(12);if(l()==="top"||l()==="bottom"){if(v.key==="ArrowUp"||v.key==="ArrowDown"){v.preventDefault();const x=Number(e.localStore.height||Cn),$=l()==="bottom"?v.key==="ArrowUp"?10:-10:v.key==="ArrowDown"?10:-10,O=Math.max(p,x+$);e.setLocalStore("height",String(O))}}else if(v.key==="ArrowLeft"||v.key==="ArrowRight"){v.preventDefault();const x=Number(e.localStore.width||Sn),$=l()==="right"?v.key==="ArrowLeft"?10:-10:v.key==="ArrowRight"?10:-10,O=Math.max(w,x+$);e.setLocalStore("width",String(O))}},u.$$mousedown=i,f.$$click=()=>e.setLocalStore("open","false");var y=o;return typeof y=="function"?an(y,f):o=f,k(f,m(Bt,{})),k(d,m(ps,e),null),U(v=>{var b=L(r().panel,r()[`panel-position-${l()}`],h(),{[n`
            min-width: min-content;
          `]:dt()<No&&(l()==="right"||l()==="left")},"tsqd-main-panel"),p=l()==="bottom"||l()==="top"?`${e.localStore.height||Cn}px`:"auto",w=l()==="right"||l()==="left"?`${e.localStore.width||Sn}px`:"auto",x=l()==="top"||l()==="bottom"?"horizontal":"vertical",$=l()==="top"||l()==="bottom"?qt(3.5):qt(12),O=l()==="top"||l()==="bottom"?Number(e.localStore.height||Cn):Number(e.localStore.width||Sn),E=L(r().dragHandle,r()[`dragHandle-position-${l()}`],"tsqd-drag-handle"),q=L(r().closeBtn,r()[`closeBtn-position-${l()}`],"tsqd-minimize-btn");return b!==v.e&&F(d,v.e=b),p!==v.t&&((v.t=p)!=null?d.style.setProperty("height",p):d.style.removeProperty("height")),w!==v.a&&((v.a=w)!=null?d.style.setProperty("width",w):d.style.removeProperty("width")),x!==v.o&&T(u,"aria-orientation",v.o=x),$!==v.i&&T(u,"aria-valuemin",v.i=$),O!==v.n&&T(u,"aria-valuenow",v.n=O),E!==v.s&&F(u,v.s=E),q!==v.h&&F(f,v.h=q),v},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),d})()},ps=e=>{c0(),d0();let t;const n=Ce(),r=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,o=P(()=>n()==="dark"?Qe(r):We(r)),s=dr(),[a,l]=B("queries"),i=P(()=>e.localStore.sort||ta),c=P(()=>Number(e.localStore.sortOrder)||Vr),h=P(()=>e.localStore.mutationSort||na),d=P(()=>Number(e.localStore.mutationSortOrder)||Vr),u=P(()=>Qn[i()]),f=P(()=>Yn[h()]),g=P(()=>N().onlineManager),y=P(()=>N().client.getQueryCache()),v=P(()=>N().client.getMutationCache()),b=pe(E=>E().getAll().length,!1),p=P(ft(()=>[b(),e.localStore.filter,i(),c(),e.localStore.hideDisabledQueries],()=>{const E=y().getAll();let q=e.localStore.filter?E.filter(M=>Wr(M.queryHash,e.localStore.filter||"").passed):[...E];return e.localStore.hideDisabledQueries==="true"&&(q=q.filter(M=>!M.isDisabled())),u()?q.sort((M,R)=>u()(M,R)*c()):q})),w=Ue(E=>E().getAll().length,!1),x=P(ft(()=>[w(),e.localStore.mutationFilter,h(),d()],()=>{const E=v().getAll(),q=e.localStore.mutationFilter?E.filter(M=>{const R=`${M.options.mutationKey?JSON.stringify(M.options.mutationKey)+" - ":""}${new Date(M.state.submittedAt).toLocaleString()}`;return Wr(R,e.localStore.mutationFilter||"").passed}):[...E];return f()?q.sort((M,R)=>f()(M,R)*d()):q})),$=E=>{e.setLocalStore("position",E)},O=E=>{const C=getComputedStyle(t).getPropertyValue("--tsqd-font-size");E.style.setProperty("--tsqd-font-size",C)};return[(()=>{var E=Bd(),q=E.firstChild,C=q.firstChild,M=C.firstChild,R=M.firstChild,G=R.nextSibling,ne=G.firstChild,Z=q.nextSibling,ae=Z.firstChild,z=ae.firstChild,Q=z.firstChild,J=z.nextSibling,ue=J.nextSibling,ye=ae.nextSibling,Te=ye.firstChild,he=Te.nextSibling,Ae=t;return typeof Ae=="function"?an(Ae,E):t=E,M.$$click=()=>{if(!s().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},k(G,()=>N().queryFlavor,ne),k(G,()=>N().version,null),k(C,m(Be.Root,{get class(){return L(o().viewToggle)},get value(){return a()},"aria-label":"Toggle between queries and mutations view",onChange:A=>{l(A),Nn(null),ms(null)},get children(){return[m(Be.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[m(Be.ItemInput,{}),m(Be.ItemControl,{get children(){return m(Be.ItemIndicator,{})}}),m(Be.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),m(Be.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[m(Be.ItemInput,{}),m(Be.ItemControl,{get children(){return m(Be.ItemIndicator,{})}}),m(Be.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),k(q,m(K,{get when(){return a()==="queries"},get children(){return m(s0,{})}}),null),k(q,m(K,{get when(){return a()==="mutations"},get children(){return m(a0,{})}}),null),k(z,m(Kc,{}),Q),Q.$$input=A=>{a()==="queries"?e.setLocalStore("filter",A.currentTarget.value):e.setLocalStore("mutationFilter",A.currentTarget.value)},k(J,m(K,{get when(){return a()==="queries"},get children(){var A=xd();return A.addEventListener("change",ge=>{e.setLocalStore("sort",ge.currentTarget.value)}),k(A,()=>Object.keys(Qn).map(ge=>(()=>{var ee=zo();return ee.firstChild,ee.value=ge,k(ee,ge,null),ee})())),U(()=>A.value=i()),A}}),null),k(J,m(K,{get when(){return a()==="mutations"},get children(){var A=$d();return A.addEventListener("change",ge=>{e.setLocalStore("mutationSort",ge.currentTarget.value)}),k(A,()=>Object.keys(Yn).map(ge=>(()=>{var ee=zo();return ee.firstChild,ee.value=ge,k(ee,ge,null),ee})())),U(()=>A.value=h()),A}}),null),k(J,m(Bt,{}),null),ue.$$click=()=>{a()==="queries"?e.setLocalStore("sortOrder",String(c()*-1)):e.setLocalStore("mutationSortOrder",String(d()*-1))},k(ue,m(K,{get when(){return(a()==="queries"?c():d())===1},get children(){return[Cd(),m(Io,{})]}}),null),k(ue,m(K,{get when(){return(a()==="queries"?c():d())===-1},get children(){return[Sd(),m(Lo,{})]}}),null),Te.$$click=()=>{a()==="queries"?(Xe({type:"CLEAR_QUERY_CACHE"}),y().clear()):(Xe({type:"CLEAR_MUTATION_CACHE"}),v().clear())},k(Te,m(hs,{})),he.$$click=()=>{g().setOnline(!g().isOnline())},k(he,(()=>{var A=ve(()=>!!rn());return()=>A()?m(jc,{}):m(Vc,{})})()),k(ye,m(K,{get when(){return ve(()=>!s().pipWindow)()&&!s().disabled},get children(){var A=kd();return A.$$click=()=>{s().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},k(A,m(Qc,{})),U(()=>F(A,L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),A}}),null),k(ye,m(oe.Root,{gutter:4,get children(){return[m(oe.Trigger,{get class(){return L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},"aria-label":"Open settings menu",title:"Open settings menu",get children(){return m(Wc,{})}}),m(oe.Portal,{ref:A=>O(A),get mount(){return ve(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return m(oe.Content,{get class(){return L(o().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var A=Ed();return U(()=>F(A,L(o().settingsMenuHeader,"tsqd-settings-menu-header"))),A})(),m(K,{get when(){return!e.showPanelViewOnly},get children(){return m(oe.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[m(oe.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Dd(),m(Bt,{})]}}),m(oe.Portal,{ref:A=>O(A),get mount(){return ve(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return m(oe.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return m(oe.RadioGroup,{"aria-label":"Position settings",get value(){return e.localStore.position},onChange:A=>$(A),get children(){return[m(oe.RadioItem,{value:"top",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ad(),m(Io,{})]}}),m(oe.RadioItem,{value:"bottom",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Md(),m(Lo,{})]}}),m(oe.RadioItem,{value:"left",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Td(),m(Bc,{})]}}),m(oe.RadioItem,{value:"right",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Fd(),m(Nc,{})]}})]}})}})}})]}})}}),m(oe.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[m(oe.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Id(),m(Bt,{})]}}),m(oe.Portal,{ref:A=>O(A),get mount(){return ve(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return m(oe.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return m(oe.RadioGroup,{get value(){return e.localStore.theme_preference},onChange:A=>{e.setLocalStore("theme_preference",A)},"aria-label":"Theme preference",get children(){return[m(oe.RadioItem,{value:"light",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ld(),m(Hc,{})]}}),m(oe.RadioItem,{value:"dark",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Od(),m(Gc,{})]}}),m(oe.RadioItem,{value:"system",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Pd(),m(Uc,{})]}})]}})}})}})]}}),m(oe.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[m(oe.SubTrigger,{get class(){return L(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-disabled-queries")},get children(){return[qd(),m(Bt,{})]}}),m(oe.Portal,{ref:A=>O(A),get mount(){return ve(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return m(oe.SubContent,{get class(){return L(o().settingsMenu,"tsqd-settings-submenu")},get children(){return m(oe.RadioGroup,{get value(){return e.localStore.hideDisabledQueries},"aria-label":"Hide disabled queries setting",onChange:A=>e.setLocalStore("hideDisabledQueries",A),get children(){return[m(oe.RadioItem,{value:"false",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-show")},get children(){return[_d(),m(K,{get when(){return e.localStore.hideDisabledQueries!=="true"},get children(){return m(lr,{})}})]}}),m(oe.RadioItem,{value:"true",get class(){return L(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-hide")},get children(){return[Rd(),m(K,{get when(){return e.localStore.hideDisabledQueries==="true"},get children(){return m(lr,{})}})]}})]}})}})}})]}})]}})}})]}}),null),k(E,m(K,{get when(){return a()==="queries"},get children(){var A=zd(),ge=A.firstChild;return k(ge,m(En,{by:ee=>ee.queryHash,get each(){return p()},children:ee=>m(o0,{get query(){return ee()}})})),U(()=>F(A,L(o().overflowQueryContainer,"tsqd-queries-overflow-container"))),A}}),null),k(E,m(K,{get when(){return a()==="mutations"},get children(){var A=Kd(),ge=A.firstChild;return k(ge,m(En,{by:ee=>ee.mutationId,get each(){return x()},children:ee=>m(i0,{get mutation(){return ee()}})})),U(()=>F(A,L(o().overflowQueryContainer,"tsqd-mutations-overflow-container"))),A}}),null),U(A=>{var ge=L(o().queriesContainer,dt()<Gt&&(Le()||wt())&&r`
              height: 50%;
              max-height: 50%;
            `,dt()<Gt&&!(Le()||wt())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),ee=L(o().row,"tsqd-header"),yt=o().logoAndToggleContainer,j=L(o().logo,"tsqd-text-logo-container"),Se=L(o().tanstackLogo,"tsqd-text-logo-tanstack"),ke=L(o().queryFlavorLogo,"tsqd-text-logo-query-flavor"),Lt=L(o().row,"tsqd-filters-actions-container"),_e=L(o().filtersContainer,"tsqd-filters-container"),mt=L(o().filterInput,"tsqd-query-filter-textfield-container"),Et=L("tsqd-query-filter-textfield"),nt=L(o().filterSelect,"tsqd-query-filter-sort-container"),Ye=`Sort order ${(a()==="queries"?c():d())===-1?"descending":"ascending"}`,rt=(a()==="queries"?c():d())===-1,I=L(o().actionsContainer,"tsqd-actions-container"),te=L(o().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),me=`Clear ${a()} cache`,se=L(o().actionsBtn,rn()&&o().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),le=`${rn()?"Unset offline mocking behavior":"Mock offline behavior"}`,ce=rn(),be=`${rn()?"Unset offline mocking behavior":"Mock offline behavior"}`;return ge!==A.e&&F(E,A.e=ge),ee!==A.t&&F(q,A.t=ee),yt!==A.a&&F(C,A.a=yt),j!==A.o&&F(M,A.o=j),Se!==A.i&&F(R,A.i=Se),ke!==A.n&&F(G,A.n=ke),Lt!==A.s&&F(Z,A.s=Lt),_e!==A.h&&F(ae,A.h=_e),mt!==A.r&&F(z,A.r=mt),Et!==A.d&&F(Q,A.d=Et),nt!==A.l&&F(J,A.l=nt),Ye!==A.u&&T(ue,"aria-label",A.u=Ye),rt!==A.c&&T(ue,"aria-pressed",A.c=rt),I!==A.w&&F(ye,A.w=I),te!==A.m&&F(Te,A.m=te),me!==A.f&&T(Te,"title",A.f=me),se!==A.y&&F(he,A.y=se),le!==A.g&&T(he,"aria-label",A.g=le),ce!==A.p&&T(he,"aria-pressed",A.p=ce),be!==A.b&&T(he,"title",A.b=be),A},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),U(()=>Q.value=a()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),E})(),m(K,{get when(){return ve(()=>a()==="queries")()&&Le()},get children(){return m(l0,{})}}),m(K,{get when(){return ve(()=>a()==="mutations")()&&wt()},get children(){return m(u0,{})}})]},o0=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qe(n):We(n)),{colors:o,alpha:s}=S,a=(g,y)=>t()==="dark"?y:g,l=pe(g=>{var y;return(y=g().find({queryKey:e.query.queryKey}))==null?void 0:y.state},!0,g=>g.query.queryHash===e.query.queryHash),i=pe(g=>{var y;return((y=g().find({queryKey:e.query.queryKey}))==null?void 0:y.isDisabled())??!1},!0,g=>g.query.queryHash===e.query.queryHash),c=pe(g=>{var y;return((y=g().find({queryKey:e.query.queryKey}))==null?void 0:y.isStatic())??!1},!0,g=>g.query.queryHash===e.query.queryHash),h=pe(g=>{var y;return((y=g().find({queryKey:e.query.queryKey}))==null?void 0:y.isStale())??!1},!0,g=>g.query.queryHash===e.query.queryHash),d=pe(g=>{var y;return((y=g().find({queryKey:e.query.queryKey}))==null?void 0:y.getObserversCount())??0},!0,g=>g.query.queryHash===e.query.queryHash),u=P(()=>Ds({queryState:l(),observerCount:d(),isStale:h()})),f=()=>u()==="gray"?n`
        background-color: ${a(o[u()][200],o[u()][700])};
        color: ${a(o[u()][700],o[u()][300])};
      `:n`
      background-color: ${a(o[u()][200]+s[80],o[u()][900])};
      color: ${a(o[u()][800],o[u()][300])};
    `;return m(K,{get when(){return l()},get children(){var g=ys(),y=g.firstChild,v=y.nextSibling;return g.$$click=()=>Nn(e.query.queryHash===Le()?null:e.query.queryHash),k(y,d),k(v,()=>e.query.queryHash),k(g,m(K,{get when(){return i()},get children(){return Nd()}}),null),k(g,m(K,{get when(){return c()},get children(){return Hd()}}),null),U(b=>{var p=L(r().queryRow,Le()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),w=`Query key ${e.query.queryHash}${i()?", disabled":""}${c()?", static":""}`,x=L(f(),"tsqd-query-observer-count");return p!==b.e&&F(g,b.e=p),w!==b.t&&T(g,"aria-label",b.t=w),x!==b.a&&F(y,b.a=x),b},{e:void 0,t:void 0,a:void 0}),g}})},i0=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qe(n):We(n)),{colors:o,alpha:s}=S,a=(u,f)=>t()==="dark"?f:u,l=Ue(u=>{const g=u().getAll().find(y=>y.mutationId===e.mutation.mutationId);return g==null?void 0:g.state}),i=Ue(u=>{const g=u().getAll().find(y=>y.mutationId===e.mutation.mutationId);return g?g.state.isPaused:!1}),c=Ue(u=>{const g=u().getAll().find(y=>y.mutationId===e.mutation.mutationId);return g?g.state.status:"idle"}),h=P(()=>Kt({isPaused:i(),status:c()})),d=()=>h()==="gray"?n`
        background-color: ${a(o[h()][200],o[h()][700])};
        color: ${a(o[h()][700],o[h()][300])};
      `:n`
      background-color: ${a(o[h()][200]+s[80],o[h()][900])};
      color: ${a(o[h()][800],o[h()][300])};
    `;return m(K,{get when(){return l()},get children(){var u=ys(),f=u.firstChild,g=f.nextSibling;return u.$$click=()=>{ms(e.mutation.mutationId===wt()?null:e.mutation.mutationId)},k(f,m(K,{get when(){return h()==="purple"},get children(){return m(od,{})}}),null),k(f,m(K,{get when(){return h()==="green"},get children(){return m(lr,{})}}),null),k(f,m(K,{get when(){return h()==="red"},get children(){return m(rd,{})}}),null),k(f,m(K,{get when(){return h()==="yellow"},get children(){return m(nd,{})}}),null),k(g,m(K,{get when(){return e.mutation.options.mutationKey},get children(){return[ve(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),k(g,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),U(y=>{var v=L(r().queryRow,wt()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),b=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,p=L(d(),"tsqd-query-observer-count");return v!==y.e&&F(u,y.e=v),b!==y.t&&T(u,"aria-label",y.t=b),p!==y.a&&F(f,y.a=p),y},{e:void 0,t:void 0,a:void 0}),u}})},s0=()=>{const e=pe(i=>i().getAll().filter(c=>_t(c)==="stale").length),t=pe(i=>i().getAll().filter(c=>_t(c)==="fresh").length),n=pe(i=>i().getAll().filter(c=>_t(c)==="fetching").length),r=pe(i=>i().getAll().filter(c=>_t(c)==="paused").length),o=pe(i=>i().getAll().filter(c=>_t(c)==="inactive").length),s=Ce(),a=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,l=P(()=>s()==="dark"?Qe(a):We(a));return(()=>{var i=Bn();return k(i,m(ct,{label:"Fresh",color:"green",get count(){return t()}}),null),k(i,m(ct,{label:"Fetching",color:"blue",get count(){return n()}}),null),k(i,m(ct,{label:"Paused",color:"purple",get count(){return r()}}),null),k(i,m(ct,{label:"Stale",color:"yellow",get count(){return e()}}),null),k(i,m(ct,{label:"Inactive",color:"gray",get count(){return o()}}),null),U(()=>F(i,L(l().queryStatusContainer,"tsqd-query-status-container"))),i})()},a0=()=>{const e=Ue(l=>l().getAll().filter(i=>Kt({isPaused:i.state.isPaused,status:i.state.status})==="green").length),t=Ue(l=>l().getAll().filter(i=>Kt({isPaused:i.state.isPaused,status:i.state.status})==="yellow").length),n=Ue(l=>l().getAll().filter(i=>Kt({isPaused:i.state.isPaused,status:i.state.status})==="purple").length),r=Ue(l=>l().getAll().filter(i=>Kt({isPaused:i.state.isPaused,status:i.state.status})==="red").length),o=Ce(),s=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,a=P(()=>o()==="dark"?Qe(s):We(s));return(()=>{var l=Bn();return k(l,m(ct,{label:"Paused",color:"purple",get count(){return n()}}),null),k(l,m(ct,{label:"Pending",color:"yellow",get count(){return t()}}),null),k(l,m(ct,{label:"Success",color:"green",get count(){return e()}}),null),k(l,m(ct,{label:"Error",color:"red",get count(){return r()}}),null),U(()=>F(l,L(a().queryStatusContainer,"tsqd-query-status-container"))),l})()},ct=e=>{const t=Ce(),n=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,r=P(()=>t()==="dark"?Qe(n):We(n)),{colors:o,alpha:s}=S,a=(f,g)=>t()==="dark"?g:f;let l;const[i,c]=B(!1),[h,d]=B(!1),u=P(()=>!(Le()&&dt()<Ys&&dt()>Gt||dt()<Gt));return(()=>{var f=Vd(),g=f.firstChild,y=g.nextSibling,v=l;return typeof v=="function"?an(v,f):l=f,f.addEventListener("mouseleave",()=>{c(!1),d(!1)}),f.addEventListener("mouseenter",()=>c(!0)),f.addEventListener("blur",()=>d(!1)),f.addEventListener("focus",()=>d(!0)),Ts(f,W({get disabled(){return u()},get"aria-label"(){return`${e.label}: ${e.count}`},get class(){return L(r().queryStatusTag,!u()&&n`
            cursor: pointer;
            &:hover {
              background: ${a(o.gray[200],o.darkGray[400])}${s[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>i()||h()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),k(f,m(K,{get when(){return ve(()=>!u())()&&(i()||h())},get children(){var b=Gd();return k(b,()=>e.label),U(()=>F(b,L(r().statusTooltip,"tsqd-query-status-tooltip"))),b}}),g),k(f,m(K,{get when(){return u()},get children(){var b=Ud();return k(b,()=>e.label),U(()=>F(b,L(r().queryStatusTagLabel,"tsqd-query-status-tag-label"))),b}}),y),k(y,()=>e.count),U(b=>{var p=L(n`
            width: ${S.size[1.5]};
            height: ${S.size[1.5]};
            border-radius: ${S.border.radius.full};
            background-color: ${S.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),w=L(r().queryStatusCount,e.count>0&&e.color!=="gray"&&n`
              background-color: ${a(o[e.color][100],o[e.color][900])};
              color: ${a(o[e.color][700],o[e.color][300])};
            `,"tsqd-query-status-tag-count");return p!==b.e&&F(g,b.e=p),w!==b.t&&F(y,b.t=w),b},{e:void 0,t:void 0}),f})()},l0=()=>{const e=Ce(),t=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,n=P(()=>e()==="dark"?Qe(t):We(t)),{colors:r}=S,o=(C,M)=>e()==="dark"?M:C,s=N().client,[a,l]=B(!1),[i,c]=B("view"),[h,d]=B(!1),u=P(()=>N().errorTypes||[]),f=pe(C=>C().getAll().find(M=>M.queryHash===Le()),!1),g=pe(C=>C().getAll().find(M=>M.queryHash===Le()),!1),y=pe(C=>{var M;return(M=C().getAll().find(R=>R.queryHash===Le()))==null?void 0:M.state},!1),v=pe(C=>{var M;return(M=C().getAll().find(R=>R.queryHash===Le()))==null?void 0:M.state.data},!1),b=pe(C=>{const M=C().getAll().find(R=>R.queryHash===Le());return M?_t(M):"inactive"}),p=pe(C=>{const M=C().getAll().find(R=>R.queryHash===Le());return M?M.state.status:"pending"}),w=pe(C=>{var M;return((M=C().getAll().find(R=>R.queryHash===Le()))==null?void 0:M.getObserversCount())??0}),x=P(()=>As(b())),$=()=>{var M,R;Xe({type:"REFETCH",queryHash:(M=f())==null?void 0:M.queryHash});const C=(R=f())==null?void 0:R.fetch();C==null||C.catch(()=>{})},O=C=>{const M=f();if(!M)return;Xe({type:"TRIGGER_ERROR",queryHash:M.queryHash,metadata:{error:C==null?void 0:C.name}});const R=(C==null?void 0:C.initializer(M))??new Error("Unknown error from devtools"),G=M.options;M.setState({data:void 0,status:"error",error:R,fetchMeta:{...M.state.fetchMeta,__previousQueryOptions:G}})},E=()=>{const C=f();if(!C)return;Xe({type:"RESTORE_LOADING",queryHash:C.queryHash});const M=C.state,R=C.state.fetchMeta?C.state.fetchMeta.__previousQueryOptions:null;C.cancel({silent:!0}),C.setState({...M,fetchStatus:"idle",fetchMeta:null}),R&&C.fetch(R)};H(()=>{b()!=="fetching"&&l(!1)});const q=()=>x()==="gray"?t`
        background-color: ${o(r[x()][200],r[x()][700])};
        color: ${o(r[x()][700],r[x()][300])};
        border-color: ${o(r[x()][400],r[x()][600])};
      `:t`
      background-color: ${o(r[x()][100],r[x()][900])};
      color: ${o(r[x()][700],r[x()][300])};
      border-color: ${o(r[x()][400],r[x()][600])};
    `;return m(K,{get when(){return ve(()=>!!f())()&&y()},get children(){var C=Xd(),M=C.firstChild,R=M.nextSibling,G=R.firstChild,ne=G.firstChild,Z=ne.firstChild,ae=ne.nextSibling,z=G.nextSibling,Q=z.firstChild,J=Q.nextSibling,ue=z.nextSibling,ye=ue.firstChild,Te=ye.nextSibling,he=R.nextSibling,Ae=he.nextSibling,A=Ae.firstChild,ge=A.firstChild,ee=A.nextSibling,yt=ee.firstChild,j=ee.nextSibling,Se=j.firstChild,ke=j.nextSibling,Lt=ke.firstChild,_e=ke.nextSibling,mt=_e.firstChild,Et=mt.nextSibling,nt=Ae.nextSibling;nt.firstChild;var Ye=nt.nextSibling,rt=Ye.nextSibling;return k(Z,()=>kn(f().queryKey,!0)),k(ae,b),k(J,w),k(Te,()=>new Date(y().dataUpdatedAt).toLocaleTimeString()),A.$$click=$,ee.$$click=()=>{var I;Xe({type:"INVALIDATE",queryHash:(I=f())==null?void 0:I.queryHash}),s.invalidateQueries(f())},j.$$click=()=>{var I;Xe({type:"RESET",queryHash:(I=f())==null?void 0:I.queryHash}),s.resetQueries(f())},ke.$$click=()=>{var I;Xe({type:"REMOVE",queryHash:(I=f())==null?void 0:I.queryHash}),s.removeQueries(f()),Nn(null)},_e.$$click=()=>{var I;if(((I=f())==null?void 0:I.state.data)===void 0)l(!0),E();else{const te=f();if(!te)return;Xe({type:"TRIGGER_LOADING",queryHash:te.queryHash});const me=te.options;te.fetch({...me,queryFn:()=>new Promise(()=>{}),gcTime:-1}),te.setState({data:void 0,status:"pending",fetchMeta:{...te.state.fetchMeta,__previousQueryOptions:me}})}},k(_e,()=>p()==="pending"?"Restore":"Trigger",Et),k(Ae,m(K,{get when(){return u().length===0||p()==="error"},get children(){var I=jd(),te=I.firstChild,me=te.nextSibling;return I.$$click=()=>{var se;f().state.error?(Xe({type:"RESTORE_ERROR",queryHash:(se=f())==null?void 0:se.queryHash}),s.resetQueries(f())):O()},k(I,()=>p()==="error"?"Restore":"Trigger",me),U(se=>{var le=L(t`
                  color: ${o(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),ce=p()==="pending",be=t`
                  background-color: ${o(r.red[500],r.red[400])};
                `;return le!==se.e&&F(I,se.e=le),ce!==se.t&&(I.disabled=se.t=ce),be!==se.a&&F(te,se.a=be),se},{e:void 0,t:void 0,a:void 0}),I}}),null),k(Ae,m(K,{get when(){return!(u().length===0||p()==="error")},get children(){var I=Wd(),te=I.firstChild,me=te.nextSibling,se=me.nextSibling;return se.firstChild,se.addEventListener("change",le=>{const ce=u().find(be=>be.name===le.currentTarget.value);O(ce)}),k(se,m(Ms,{get each(){return u()},children:le=>(()=>{var ce=Zd();return k(ce,()=>le.name),U(()=>ce.value=le.name),ce})()}),null),k(I,m(Bt,{}),null),U(le=>{var ce=L(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),be=t`
                  background-color: ${S.colors.red[400]};
                `,re=p()==="pending";return ce!==le.e&&F(I,le.e=ce),be!==le.t&&F(te,le.t=be),re!==le.a&&(se.disabled=le.a=re),le},{e:void 0,t:void 0,a:void 0}),I}}),null),k(nt,()=>i()==="view"?"Explorer":"Editor",null),k(C,m(K,{get when(){return i()==="view"},get children(){var I=Qd();return k(I,m(pt,{label:"Data",defaultExpanded:["Data"],get value(){return v()},editable:!0,onEdit:()=>c("edit"),get activeQuery(){return f()}})),U(te=>(te=S.size[2])!=null?I.style.setProperty("padding",te):I.style.removeProperty("padding")),I}}),Ye),k(C,m(K,{get when(){return i()==="edit"},get children(){var I=Yd(),te=I.firstChild,me=te.nextSibling,se=me.firstChild,le=se.nextSibling,ce=le.firstChild,be=ce.nextSibling;return I.addEventListener("submit",re=>{re.preventDefault();const it=new FormData(re.currentTarget).get("data");try{const Ge=JSON.parse(it);f().setState({...f().state,data:Ge}),c("view")}catch{d(!0)}}),te.addEventListener("focus",()=>d(!1)),k(se,()=>h()?"Invalid Value":""),ce.$$click=()=>c("view"),U(re=>{var ot=L(n().devtoolsEditForm,"tsqd-query-details-data-editor"),it=n().devtoolsEditTextarea,Ge=h(),Dt=n().devtoolsEditFormActions,st=n().devtoolsEditFormError,At=n().devtoolsEditFormActionContainer,at=L(n().devtoolsEditFormAction,t`
                      color: ${o(r.gray[600],r.gray[300])};
                    `),bt=L(n().devtoolsEditFormAction,t`
                      color: ${o(r.blue[600],r.blue[400])};
                    `);return ot!==re.e&&F(I,re.e=ot),it!==re.t&&F(te,re.t=it),Ge!==re.a&&T(te,"data-error",re.a=Ge),Dt!==re.o&&F(me,re.o=Dt),st!==re.i&&F(se,re.i=st),At!==re.n&&F(le,re.n=At),at!==re.s&&F(ce,re.s=at),bt!==re.h&&F(be,re.h=bt),re},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),U(()=>te.value=JSON.stringify(v(),null,2)),I}}),Ye),k(rt,m(pt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return g()}})),U(I=>{var te=L(n().detailsContainer,"tsqd-query-details-container"),me=L(n().detailsHeader,"tsqd-query-details-header"),se=L(n().detailsBody,"tsqd-query-details-summary-container"),le=L(n().queryDetailsStatus,q()),ce=L(n().detailsHeader,"tsqd-query-details-header"),be=L(n().actionsBody,"tsqd-query-details-actions-container"),re=L(t`
                color: ${o(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),ot=b()==="fetching",it=t`
                background-color: ${o(r.blue[600],r.blue[400])};
              `,Ge=L(t`
                color: ${o(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),Dt=p()==="pending",st=t`
                background-color: ${o(r.yellow[600],r.yellow[400])};
              `,At=L(t`
                color: ${o(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),at=p()==="pending",bt=t`
                background-color: ${o(r.gray[600],r.gray[400])};
              `,mn=L(t`
                color: ${o(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),Yt=b()==="fetching",bn=t`
                background-color: ${o(r.pink[500],r.pink[400])};
              `,Ot=L(t`
                color: ${o(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),pn=a(),Xt=t`
                background-color: ${o(r.cyan[500],r.cyan[400])};
              `,Zt=L(n().detailsHeader,"tsqd-query-details-header"),Jt=L(n().detailsHeader,"tsqd-query-details-header"),Pt=S.size[2];return te!==I.e&&F(C,I.e=te),me!==I.t&&F(M,I.t=me),se!==I.a&&F(R,I.a=se),le!==I.o&&F(ae,I.o=le),ce!==I.i&&F(he,I.i=ce),be!==I.n&&F(Ae,I.n=be),re!==I.s&&F(A,I.s=re),ot!==I.h&&(A.disabled=I.h=ot),it!==I.r&&F(ge,I.r=it),Ge!==I.d&&F(ee,I.d=Ge),Dt!==I.l&&(ee.disabled=I.l=Dt),st!==I.u&&F(yt,I.u=st),At!==I.c&&F(j,I.c=At),at!==I.w&&(j.disabled=I.w=at),bt!==I.m&&F(Se,I.m=bt),mn!==I.f&&F(ke,I.f=mn),Yt!==I.y&&(ke.disabled=I.y=Yt),bn!==I.g&&F(Lt,I.g=bn),Ot!==I.p&&F(_e,I.p=Ot),pn!==I.b&&(_e.disabled=I.b=pn),Xt!==I.T&&F(mt,I.T=Xt),Zt!==I.A&&F(nt,I.A=Zt),Jt!==I.O&&F(Ye,I.O=Jt),Pt!==I.I&&((I.I=Pt)!=null?rt.style.setProperty("padding",Pt):rt.style.removeProperty("padding")),I},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),C}})},u0=()=>{const e=Ce(),t=N().shadowDOMTarget?Y.bind({target:N().shadowDOMTarget}):Y,n=P(()=>e()==="dark"?Qe(t):We(t)),{colors:r}=S,o=(h,d)=>e()==="dark"?d:h,s=Ue(h=>{const u=h().getAll().find(f=>f.mutationId===wt());return u?u.state.isPaused:!1}),a=Ue(h=>{const u=h().getAll().find(f=>f.mutationId===wt());return u?u.state.status:"idle"}),l=P(()=>Kt({isPaused:s(),status:a()})),i=Ue(h=>h().getAll().find(d=>d.mutationId===wt()),!1),c=()=>l()==="gray"?t`
        background-color: ${o(r[l()][200],r[l()][700])};
        color: ${o(r[l()][700],r[l()][300])};
        border-color: ${o(r[l()][400],r[l()][600])};
      `:t`
      background-color: ${o(r[l()][100],r[l()][900])};
      color: ${o(r[l()][700],r[l()][300])};
      border-color: ${o(r[l()][400],r[l()][600])};
    `;return m(K,{get when(){return i()},get children(){var h=Jd(),d=h.firstChild,u=d.nextSibling,f=u.firstChild,g=f.firstChild,y=g.firstChild,v=g.nextSibling,b=f.nextSibling,p=b.firstChild,w=p.nextSibling,x=u.nextSibling,$=x.nextSibling,O=$.nextSibling,E=O.nextSibling,q=E.nextSibling,C=q.nextSibling,M=C.nextSibling,R=M.nextSibling;return k(y,m(K,{get when(){return i().options.mutationKey},fallback:"No mutationKey found",get children(){return kn(i().options.mutationKey,!0)}})),k(v,m(K,{get when(){return l()==="purple"},children:"pending"}),null),k(v,m(K,{get when(){return l()!=="purple"},get children(){return a()}}),null),k(w,()=>new Date(i().state.submittedAt).toLocaleTimeString()),k($,m(pt,{label:"Variables",defaultExpanded:["Variables"],get value(){return i().state.variables}})),k(E,m(pt,{label:"Context",defaultExpanded:["Context"],get value(){return i().state.context}})),k(C,m(pt,{label:"Data",defaultExpanded:["Data"],get value(){return i().state.data}})),k(R,m(pt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return i()}})),U(G=>{var ne=L(n().detailsContainer,"tsqd-query-details-container"),Z=L(n().detailsHeader,"tsqd-query-details-header"),ae=L(n().detailsBody,"tsqd-query-details-summary-container"),z=L(n().queryDetailsStatus,c()),Q=L(n().detailsHeader,"tsqd-query-details-header"),J=S.size[2],ue=L(n().detailsHeader,"tsqd-query-details-header"),ye=S.size[2],Te=L(n().detailsHeader,"tsqd-query-details-header"),he=S.size[2],Ae=L(n().detailsHeader,"tsqd-query-details-header"),A=S.size[2];return ne!==G.e&&F(h,G.e=ne),Z!==G.t&&F(d,G.t=Z),ae!==G.a&&F(u,G.a=ae),z!==G.o&&F(v,G.o=z),Q!==G.i&&F(x,G.i=Q),J!==G.n&&((G.n=J)!=null?$.style.setProperty("padding",J):$.style.removeProperty("padding")),ue!==G.s&&F(O,G.s=ue),ye!==G.h&&((G.h=ye)!=null?E.style.setProperty("padding",ye):E.style.removeProperty("padding")),Te!==G.r&&F(q,G.r=Te),he!==G.d&&((G.d=he)!=null?C.style.setProperty("padding",he):C.style.removeProperty("padding")),Ae!==G.l&&F(M,G.l=Ae),A!==G.u&&((G.u=A)!=null?R.style.setProperty("padding",A):R.style.removeProperty("padding")),G},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),h}})},Fn=new Map,c0=()=>{const e=P(()=>N().client.getQueryCache()),t=e().subscribe(n=>{Es(()=>{for(const[r,o]of Fn.entries())o.shouldUpdate(n)&&o.setter(r(e))})});return V(()=>{Fn.clear(),t()}),t},pe=(e,t=!0,n=()=>!0)=>{const r=P(()=>N().client.getQueryCache()),[o,s]=B(e(r),t?void 0:{equals:!1});return H(()=>{s(e(r))}),Fn.set(e,{setter:s,shouldUpdate:n}),V(()=>{Fn.delete(e)}),o},In=new Map,d0=()=>{const e=P(()=>N().client.getMutationCache()),t=e().subscribe(()=>{for(const[n,r]of In.entries())queueMicrotask(()=>{r(n(e))})});return V(()=>{In.clear(),t()}),t},Ue=(e,t=!0)=>{const n=P(()=>N().client.getMutationCache()),[r,o]=B(e(n),t?void 0:{equals:!1});return H(()=>{o(e(n))}),In.set(e,o),V(()=>{In.delete(e)}),r},f0="@tanstack/query-devtools-event",Xe=({type:e,queryHash:t,metadata:n})=>{const r=new CustomEvent(f0,{detail:{type:e,queryHash:t,metadata:n},bubbles:!0,cancelable:!0});window.dispatchEvent(r)},ws=(e,t)=>{const{colors:n,font:r,size:o,alpha:s,shadow:a,border:l}=S,i=(c,h)=>e==="light"?c:h;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${a.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${S.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${S.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${l.radius.sm} ${l.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${l.radius.sm} 0px 0px ${l.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${l.radius.sm} ${l.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${i("",s[90])};
      }
      &:focus {
        outline: none;
        background-color: ${n.purple[400]}${i("",s[90])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[800]};
        outline-offset: -2px;
        background-color: ${n.purple[400]}${i("",s[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${S.size[2]} ${S.size[2.5]};
      gap: ${S.size[2.5]};
      border-bottom: ${i(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${S.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${S.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${i(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${i("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${S.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${S.size[1.5]};
      box-sizing: border-box;
      height: ${S.size[6.5]};
      background: ${i(n.gray[50],n.darkGray[500])};
      color: ${i(n.gray[700],n.gray[300])};
      border-radius: ${S.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${S.size[1]};
      padding-left: ${S.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${i("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${i(n.gray[500],n.gray[400])};
      background-color: ${i(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${S.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${i(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${S.size[2]}));
      padding: ${S.size[.5]} ${S.size[2]};
      border-radius: ${S.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${i(n.gray[400],n.gray[600])};
      color: ${i(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${S.size[2]};
      & > button {
        cursor: pointer;
        padding: ${S.size[.5]} ${S.size[1.5]} ${S.size[.5]}
          ${S.size[2]};
        border-radius: ${S.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: 1px solid ${i(n.gray[300],n.darkGray[200])};
        color: ${i(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${S.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${S.size[3]};
          height: ${S.size[3]};
          color: ${i(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${S.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${S.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${i(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${i(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${i(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${S.size[.5]} ${S.size[2]};
      border-radius: ${S.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${S.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
      & > select {
        appearance: none;
        color: ${i(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${S.size[2]};
    `,actionsBtn:t`
      border-radius: ${S.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      width: ${S.size[6.5]};
      height: ${S.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${S.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${i(n.gray[700],n.gray[300])};
        width: ${S.size[3]};
        height: ${S.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${i(n.yellow[700],n.yellow[500])};
        fill: ${i(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${i(n.gray[700],n.gray[300])};
      background-color: ${i(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${i(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${S.size[1]};
        user-select: none;
        min-width: ${S.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${S.size[6]};
        flex: 1;
        padding: ${S.size[1]} ${S.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${S.size[2]};
        color: ${i(n.gray[800],n.gray[300])};
        background-color: ${i(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${S.size[2]};
        color: ${i(n.teal[800],n.teal[300])};
        background-color: ${i(n.teal[100],n.teal[900])};
        border-bottom: 1px solid ${i(n.teal[300],n.teal[700])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${i(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      color: ${i(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${i(n.gray[200],n.darkGray[600])};
      padding: ${S.size[1.5]} ${S.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${S.size[1.5]} 0px ${S.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${S.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${S.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${S.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${S.size[1]} ${S.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${S.size[2]} 0px ${S.size[2]} 0px;
      display: flex;
      gap: ${S.size[2]};
      padding: 0px ${S.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${S.size[1]} ${S.size[2]};
        display: flex;
        border-radius: ${S.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[600])};
        border: 1px solid ${i(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${S.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${i(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${S.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${S.size[.5]} ${S.size[2]};
      display: flex;
      border-radius: ${S.border.radius.sm};
      overflow: hidden;
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${S.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${i(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${S.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${S.colors.red[400]};
      }
      & svg {
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${S.border.radius.sm};
      border: 1px solid ${i(n.gray[300],n.gray[700])};
      background-color: ${i(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${S.border.radius.xs};
      padding: ${S.size[1]} ${S.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${i(n.gray[700],n.gray[300])};
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${S.size[1]} ${S.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
      color: ${i(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${i(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${S.border.radius.xs};
      padding: ${S.size[1]} ${S.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &[data-checked] {
        background-color: ${i(n.purple[100],n.purple[900])};
        color: ${i(n.purple[700],n.purple[300])};
        & svg {
          color: ${i(n.purple[700],n.purple[300])};
        }
        &:hover {
          background-color: ${i(n.purple[100],n.purple[900])};
        }
      }
    `,viewToggle:t`
      border-radius: ${S.border.radius.sm};
      background-color: ${i(n.gray[200],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${S.size[1.5]} 0 ${S.size[2]};
        }
        border-right: 1px solid ${i(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${S.size[2]} 0 ${S.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${i(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${l.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${i(n.gray[100],n.darkGray[800])};
      color: ${i(n.gray[900],n.gray[100])};
      border: 1px solid ${i(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${i(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${i(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${S.size[2]};
      display: flex;
      border-radius: ${l.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},We=e=>ws("light",e),Qe=e=>ws("dark",e);ur(["click","mousedown","keydown","input"]);var g0=e=>{const[t,n]=Ws({prefix:"TanstackQueryDevtools"}),r=Ks(),o=P(()=>{const s=e.theme||t.theme_preference||Zs;return s!=="system"?s:r()});return m(Ho.Provider,{value:e,get children(){return m(ra,{localStore:t,setLocalStore:n,get children(){return m(Uo.Provider,{value:o,get children(){return m(t0,{localStore:t,setLocalStore:n})}})}})}})},y0=g0;export{y0 as default};
