var Fe=Object.create;var V=Object.defineProperty;var Ve=Object.getOwnPropertyDescriptor;var He=Object.getOwnPropertyNames;var Ke=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty;var qe=(r,e)=>{for(var n in e)V(r,n,{get:e[n],enumerable:!0})},fe=(r,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of He(e))!Ge.call(r,o)&&o!==n&&V(r,o,{get:()=>e[o],enumerable:!(t=Ve(e,o))||t.enumerable});return r};var I=(r,e,n)=>(n=r!=null?Fe(Ke(r)):{},fe(e||!r||!r.__esModule?V(n,"default",{value:r,enumerable:!0}):n,r)),je=r=>fe(V({},"__esModule",{value:!0}),r);var Ht={};qe(Ht,{API:()=>Vt,AccountType:()=>ie,BalanceBookkeeping:()=>ne,Bookkeeper:()=>Je,Crypto:()=>ce,DAYS:()=>Pe,ERP_API:()=>Ft,HOURS:()=>we,Knowledge:()=>_,MAX_TARGET_ID_LEN:()=>nr,MAX_UPLOAD_SIZE:()=>or,MINUTES:()=>B,REFRESH_TOKEN_EXPIRY_TIME:()=>Ot,RuleParsingError:()=>q,RulesEngine:()=>ue,StockBookkeeping:()=>se,TOKEN_EXPIRY_TIME:()=>_e,TOKEN_ISSUER:()=>wt,TransactionApplyResults:()=>oe,YEARS:()=>Ct,ZERO_CENTS:()=>ye,ZERO_STOCK:()=>sr,address2sql:()=>Pt,conditions:()=>Le,currencies:()=>Ie,debug:()=>b,emptyLinkedTree:()=>ee,error:()=>E,filter2function:()=>Et,filterView2name:()=>ke,filterView2rule:()=>De,haveCatalog:()=>We,haveCursor:()=>ze,haveKnowledge:()=>tt,haveSettings:()=>et,haveStore:()=>Ze,isAccountAddress:()=>mt,isAccountAddressConfig:()=>ht,isAccountNumber:()=>At,isAssetStockType:()=>Ce,isAssetTransfer:()=>dt,isAssetTransferReason:()=>Re,isAssetType:()=>be,isCurrency:()=>$,isDatabaseName:()=>yt,isHttpFailureResponse:()=>vt,isHttpSuccessResponse:()=>$e,isLanguage:()=>gt,isLocalUrl:()=>ae,isNode:()=>rt,isReportID:()=>Rt,isShortDate:()=>Nt,isStockChangeData:()=>pt,isStockChangeDelta:()=>U,isStockChangeFixed:()=>M,isTag:()=>Oe,isTagConfig:()=>St,isTagString:()=>bt,isTagType:()=>xt,isUIQuery:()=>Lt,isUIQueryRef:()=>_t,isUi:()=>C,isUrl:()=>kt,isVersion:()=>ft,languages:()=>xe,latestVersion:()=>Tt,less:()=>te,log:()=>D,month:()=>Dt,mute:()=>ct,near:()=>Ee,net:()=>de,note:()=>v,realNegative:()=>st,realPositive:()=>it,setGlobalComponents:()=>Qe,setServiceUrl:()=>Bt,sortTransactions:()=>It,timestamp:()=>L,ucfirst:()=>ot,unmute:()=>lt,versionCompare:()=>Ne,waitPromise:()=>nt,warning:()=>R});module.exports=je(Ht);var u=require("buffer"),a=I(require("process")),Ye=function(r){function e(){var t=this||self;return delete r.prototype.__magic__,t}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var n=__magic__;return n}(Object),c=Ye;var Xe=()=>({scheme:null,schemeVersion:null,companyName:null,companyCode:null,language:null,currency:null}),Je={createConfig:Xe};var J,Q,z,W,Z;function Qe(r,e,n,t,o){J=r,Q=e,z=n,W=t,Z=o}function ze(){if(!z)throw new Error("Call to haveCursor() before global components set with setGlobalComponents().");return z}function We(){if(!Q)throw new Error("Call to haveCatalog() before global components set with setGlobalComponents().");return Q}function Ze(){if(!J)throw new Error("Call to haveStore() before global components set with setGlobalComponents().");return J}function et(){if(!W)throw new Error("Call to haveSettings() before global components set with setGlobalComponents().");return W}function tt(){if(!Z)throw new Error("Call to haveKnowledge() before global components set with setGlobalComponents().");return Z}var Te=I(require("dayjs"));function ee(){return{root:null,children:{},parents:{}}}var _=class{constructor(e){e==null&&(e={income:{root:null,children:{},parents:{}},expense:{root:null,children:{},parents:{}},assetCodes:{root:null,children:{},parents:{}},taxTypes:[],vat:[]}),this.data=e}update(e){Object.assign(this.data,e)}isIncome(e){if(!this.data.income)throw new Error(`Cannot look for income ${e} since no income classification loaded.`);return typeof e=="string"&&e in this.data.income.parents}isExpense(e){if(!this.data.expense)throw new Error(`Cannot look for expense ${e} since no expense classification loaded.`);return typeof e=="string"&&e in this.data.expense.parents}treeLookup(e,n,t){if(e in n)return n[e];if(e in t.parents){let o=t.parents[e];if(o!=null)return this.treeLookup(o,n,t)}return null}findVatRange(e){if(!this.data.vat)throw new Error("Cannot look for VAT since no VAT data loaded.");e||(e=new Date),e instanceof Date&&(e=(0,Te.default)(e).format("YYYY-MM-DD"));for(let n=0;n<this.data.vat.length;n++){let{from:t,to:o}=this.data.vat[n];if(t<=e&&(o===null||e<=o))return this.data.vat[n]}return null}vat(e,n){if(!e)return null;e=e.replace(/[0-9]+$/,"");let t=this.findVatRange(n);return t?this.isIncome(e)?this.treeLookup(e,t.percentage,this.data.income):this.isExpense(e)?this.treeLookup(e,t.percentage,this.data.expense):null:null}vatTable(e){e||(e=new Date);let n=this.findVatRange(e);if(!n)return[];let t={};Object.entries(this.data.income.parents).forEach(([i,p])=>{let h=i in n.percentage?n.percentage[i]:void 0;t[i]={name:i,type:"income",parent:p,children:[],handled:!1,collected:!1,value:h}}),Object.entries(this.data.expense.parents).forEach(([i,p])=>{let h=i in n.percentage?n.percentage[i]:void 0;t[i]={name:i,type:"expense",parent:p,children:[],handled:!1,collected:!1,value:h}});let o=i=>{if(!t[i])throw new Error(`Reference to undefined VAT ID: '${i}''.`);if(t[i].handled)return t[i].value;let p=t[i].parent;if(p){let h=o(p);t[i].value===void 0&&(t[i].value=h),t[p].children.push(i)}return t[i].handled=!0,t[i].value};Object.keys(n.percentage).forEach(i=>{o(i)});let s=[],l=(i,p=0)=>{t[i].collected||(s.push({id:i,name:`${t[i].type}-${i}`,level:p,value:t[i].value}),t[i].collected=!0,t[i].children.forEach(h=>l(h,p+1)))};return Object.keys(t).forEach(i=>{t[i].handled&&!t[i].collected&&l(i)}),s}count(){return{assets:Object.keys(this.data.assetCodes.parents).length,income:Object.keys(this.data.income.parents).length,expense:Object.keys(this.data.expense.parents).length,vat:this.data.vat.length}}findTree(e){return e in this.data.assetCodes.parents?this.data.assetCodes:e in this.data.income.parents?this.data.income:e in this.data.expense.parents?this.data.expense:ee()}children(e,n=void 0){let t=n||this.findTree(e);if(e in t.children){let o=t.children[e];for(let s of o)o=o.concat(this.children(s,t));return o}return[]}};var H=I(require("dayjs")),he=I(require("dayjs/plugin/utc"));var nr=64,or=1073741824,ye=1e-4,sr=1e-6;function C(){return typeof window<"u"}function rt(){return!C()}async function nt(r){return new Promise(e=>{setTimeout(e,r)})}function ot(r){return r[0].toUpperCase()+r.substr(1)}function Ee(r,e){return Math.abs(r-e)<1e-4}function te(r,e){return r<e&&!Ee(e-r,0)}function st(r){return te(r,0)}function it(r){return te(0,r)}H.default.extend(he.default);var re=!1,at=!C(),Se=()=>C()?{STOCK:"DEBUG_STOCK"in window&&window.DEBUG_STOCK==="yes",BALANCE:"DEBUG_BALANCE"in window&&window.DEBUG_BALANCE==="yes",RULES:"DEBUG_RULES"in window&&window.DEBUG_RULES==="yes",SEGMENTATION:"DEBUG_SEGMENTATION"in window&&window.DEBUG_SEGMENTATION==="yes",CLASSIFICATION:"DEBUG_CLASSIFICATION"in window&&window.DEBUG_CLASSIFICATION==="yes",ANALYSIS:"DEBUG_ANALYSIS"in window&&window.DEBUG_ANALYSIS==="yes",EXECUTION:"DEBUG_EXECUTION"in window&&window.DEBUG_EXECUTION==="yes"}:{STOCK:a.default.env.DEBUG_STOCK==="yes"||!1,BALANCE:a.default.env.DEBUG_BALANCE==="yes"||!1,RULES:a.default.env.DEBUG_RULES==="yes"||!1,SEGMENTATION:a.default.env.DEBUG_SEGMENTATION==="yes"||!1,CLASSIFICATION:a.default.env.DEBUG_CLASSIFICATION==="yes"||!1,ANALYSIS:a.default.env.DEBUG_ANALYSIS==="yes"||!1,EXECUTION:a.default.env.DEBUG_EXECUTION==="yes"||!1},Ae=!1;function ut(){if(Ae)return;Ae=!0;let r=Se();if(Object.values(r).filter(e=>e).length!==0)for(let e of["STOCK","RULES","SEGMENTATION","CLASSIFICATION","ANALYSIS","EXECUTION"])console.log(`\x1B[93mDEBUG_${e} = ${r[e]?"yes":"no"}\x1B[0m`)}function K(){return C()?!("DEBUG"in window):re}function L(r=new Date){return C()?H.default.utc(r).format("HH:mm:ss"):H.default.utc(r).format("YYYY-MM-DDTHH:mm:ssZ")}function N(r){if(!at)return"";switch(r){case"info":return"\x1B[32m";case"note":return"\x1B[33m";case"warning":return"\x1B[34m";case"error":return"\x1B[31m";case"reset":return"\x1B[0m"}}function D(...r){K()||console.log(N("info")+L(),...r,N("reset"))}function v(...r){K()||console.log(N("note")+L(),...r,N("reset"))}function R(...r){K()||console.warn(N("warning")+L(),...r,N("reset"))}function E(...r){K()||console.error(N("error")+L(),...r,N("reset"))}function ct(){re=!0}function lt(){re=!1}function b(r,...e){if(ut(),!Se()[r])return;if(e.every(o=>typeof o=="string"||typeof o=="number"||typeof o=="boolean"||o===null))console.log("\x1B[35m"+e.join(" ")+"\x1B[0m");else for(let o of e)console.dir(o,{depth:null,maxArrayLength:null})}var G=require("sprintf-js"),ne=class{constructor(){this.balance={},this.number={},b("BALANCE","Created new balance bookkeeper.")}set(e,n){this.balance[e]=n,b("BALANCE",`Set ${e} ${this.name(e)} initial balance ${(0,G.sprintf)("%.2f",this.balance[e]/100)}`)}configureNames(e){Object.keys(e).forEach(n=>{n.startsWith("account.")&&(this.number[n.substring(8)]=e[n])})}name(e){return this.number[e],this.number[e]||`unknown.account.${e}`}change(e,n){return this.balance[e]=(this.balance[e]||0)+n,b("BALANCE",`Change ${e} ${this.name(e)} \u0394 ${n>=0?"+":""}${(0,G.sprintf)("%.2f",n/100)} \u27F9 ${(0,G.sprintf)("%.2f",this.balance[e]/100)}`),this.balance[e]}apply(e){return this.change(e.account,e.amount)}get(e){return this.balance[this.number[e]]||0}summary(){let e=[];return Object.keys(this.number).forEach(n=>{let[t,o,s]=n.split(".");e.push({account:this.number[n],address:n,debtAddress:this.debtAddress(n),balance:this.balance[this.number[n]],mayTakeLoan:this.mayTakeLoan(t,o,s)})}),e}mayTakeLoan(e,n,t){return e!=="fee"&&e!=="profit"&&n==="currency"}debtAddress(e){let[,n,t]=e.split(".");return`debt.${n}.${t}`}};var oe=class{constructor(){this.created=0,this.duplicates=0,this.ignored=0,this.accounts={}}create(e){this.created++,this.record(e)}ignore(e){this.ignored++}duplicate(e){this.duplicates++}record(e){for(let n of e.entries){let{account:t,amount:o}=n;this.accounts[t]=(this.accounts[t]||0)+o}}add(e){if("created"in e&&(this.created+=parseInt(e.created||"0")),"duplicates"in e&&(this.duplicates+=parseInt(e.duplicates||"0")),"ignored"in e&&(this.ignored+=parseInt(e.ignored||"0")),"accounts"in e){let n=e.accounts;Object.keys(n).forEach(t=>{this.accounts[t]=(this.accounts[t]||0)+n[t]})}}toJSON(){return{created:this.created,ignored:this.ignored,duplicates:this.duplicates,accounts:this.accounts}}};function Re(r){return typeof r=="string"&&["correction","deposit","distribution","dividend","expense","fee","forex","income","investment","loss","profit","tax","trade","transfer","withdrawal"].includes(r)}function be(r){return typeof r=="string"&&["account","stock","short","currency","debt","crypto","external","statement","other"].includes(r)}function U(r){return typeof r=="object"&&r!==null&&"stock"in r&&"change"in r.stock}function M(r){return typeof r=="object"&&r!==null&&"stock"in r&&"set"in r.stock}function pt(r){return U(r)||M(r)}function dt(r){return typeof r=="object"&&r!==null&&"reason"in r&&"type"in r&&"asset"in r&&r.reason&&r.type&&r.asset}function mt(r){if(typeof r!="string"||!/^[a-z]+\.[a-z]+\.[*a-z]+$/.test(r))return!1;let[e,n]=r.split(".");return Re(e)&&be(n)}var xe=new Set(["aa","ab","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lv","mg","mh","mi","mk","ml","mn","mo","mr","ms","mt","my","na","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","sg","sh","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","ur","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]);function gt(r){return typeof r=="string"&&xe.has(r)}var Ie=new Set(["AFN","ALL","DZD","ARS","AMD","AUD","AZN","BHD","BDT","BYN","BZD","BOB","BAM","BWP","BRL","GBP","BND","BGN","BIF","KHR","CAD","CVE","XAF","CLP","CNY","COP","KMF","CDF","CRC","HRK","CZK","DKK","DJF","DOP","EGP","ERN","EEK","ETB","EUR","GEL","GHS","GTQ","GNF","HNL","HKD","HUF","ISK","INR","IDR","IRR","IQD","ILS","JMD","JPY","JOD","KZT","KES","KWD","LVL","LBP","LYD","LTL","MOP","MKD","MGA","MYR","MUR","MXN","MDL","MAD","MZN","MMK","NAD","NPR","TWD","NZD","NIO","NGN","NOK","OMR","PKR","PAB","PYG","PEN","PHP","PLN","QAR","RON","RUB","RWF","SAR","RSD","SGD","SOS","ZAR","KRW","LKR","SDG","SEK","CHF","SYP","TZS","THB","TOP","TTD","TND","TRY","USD","UGX","UAH","AED","UYU","UZS","VEF","VND","XOF","YER","ZMK","ZWL"]);function $(r){return typeof r=="string"&&Ie.has(r)}function ft(r){return typeof r=="string"&&/^\d+(\.\d+)+$/.test(r)}function Ne(r,e){let n=r.split("."),t=e.split("."),o=Math.max(n.length,t.length);for(let s=0;s<o;s++){let l=parseInt(n[s])-parseInt(t[s]);if(l<0)return-1;if(l>0)return 1}return n.length<t.length?-1:n.length>t.length?1:0}function Tt(r){if(r.length===0)return null;let e;for(let n of r)(!e||Ne(n,e)>0)&&(e=n);return e}var yt=r=>typeof r=="string"&&/^[_a-z0-9]+$/.test(r);function Ce(r){return typeof r=="string"&&["crypto","stock","currency","other"].includes(r)}var se=class{constructor(e="No name"){this.name=e,this.reset(),b("STOCK",`[${this.name}]: Created new stock bookkeeper.`)}reset(){this.stock={crypto:{},stock:{},currency:{},other:{}}}set(e,n,t,o,s){typeof e=="string"&&(e=new Date(e)),t in this.stock[n]||(this.stock[n][t]=[]);let l=this.stock[n][t]||[];l.push({time:e,amount:o,value:s}),this.stock[n][t]=l.sort((i,p)=>i.time.getTime()-p.time.getTime()),b("STOCK",`[${this.name}] ${e.toISOString()}: Set ${n} ${t} = ${o} (${s}).`)}has(e,n){return Ce(e)?n in this.stock[e]:!1}last(e,n){let t=this.stock[e][n]||[];if(!t||!t.length)throw new Error(`There is no asset ${n} of ${e} in stock bookkeeping.`);return t[t.length-1]}change(e,n,t,o,s){let l=o,i=s;if(typeof e=="string"&&(e=new Date(e)),!this.has(n,t))this.set(e,n,t,o,s);else{let p=this.last(n,t);if(e<p.time)throw b("STOCK",this.stock),new Error(`Cannot insert ${n} ${t} at ${e.toISOString()}, since last timestamp is ${p.time.toISOString()}`);o+=p.amount,s+=p.value,(this.stock[n][t]||[]).push({time:e,amount:o,value:s}),b("STOCK",`[${this.name}] ${e.toISOString()}: Change ${n} ${t} \u0394 ${l>=0?"+":""}${l} (${i>=0?"+":""}${i}) \u21D2 ${o} ${t} (${s})`)}}get(e,n,t){let o,s=this.stock[n][t]||[];for(this.has(n,t)?o=s.length-1:o=-1;o>=0&&s[o].time>e;)o--;return o<0?{time:e,amount:0,value:0}:s[o]}getType(e){return $(e)?"currency":this.stock.crypto[e]?"crypto":this.stock.stock[e]?"stock":"other"}apply(e,n){typeof e=="string"&&(e=new Date(e)),M(n)&&Object.keys(n.stock.set).forEach(t=>{let{amount:o,value:s}=n.stock.set[t];this.set(e,this.getType(t),t,o,s)}),U(n)&&Object.keys(n.stock.change).forEach(t=>{let{amount:o,value:s}=n.stock.change[t];this.change(e,this.getType(t),t,o,s)})}applyAll(e){e.forEach(n=>this.apply(n.time,n.data))}changedAssets(e){let n=new Set;return U(e)&&Object.keys(e.stock.change).forEach(t=>n.add(t)),M(e)&&Object.keys(e.stock.set).forEach(t=>n.add(t)),[...n]}assets(){let e=[];return Object.keys(this.stock).map(n=>Object.keys(this.stock[n]).forEach(t=>e.push([n,t]))),e}totals(){return this.assets().map(([e,n])=>[e,n,this.last(e,n).amount])}total(e,n=void 0){return n||(n=e,e=this.getType(n)),this.has(e,n)?this.last(e,n).amount:0}summary(e=null,n=!0,t=!0){let o={};if(n)for(let[s,l]of this.assets())o[`${s}.${l}`]=this.last(s,l),t||delete o[`${s}.${l}`].time,e&&Math.abs(o[`${s}.${l}`].amount)<e&&delete o[`${s}.${l}`];else for(let[s,l]of this.assets())o[l]=this.last(s,l),t||delete o[l].time,e&&Math.abs(o[l].amount)<e&&delete o[l];return o}toJSON(){let e={};for(let[,n,t]of this.totals())e[n]=(e[n]||0)+t;return e}};function De(r){if(r instanceof Array)return r.map(l=>De(l)).join(" && ");let{op:e,field:n,text:t,value:o}=r,s=/^[a-zA-Z]\w*$/.test(n)?n:"$("+JSON.stringify(n)+")";switch(e){case"caseInsensitiveFullMatch":return`(lower(${s}) === ${JSON.stringify(t?.toLowerCase())})`;case"caseSensitiveFullMatch":return`(${s} === ${JSON.stringify(t)})`;case"caseInsensitiveMatch":return`contains(lower(${s}), ${JSON.stringify(t?.toLowerCase())})`;case"caseSensitiveMatch":return`contains(${s}, ${JSON.stringify(t)})`;case"isLessThan":return`(${s} < ${JSON.stringify(o)})`;case"isGreaterThan":return`(${s} > ${JSON.stringify(o)})`;default:throw new Error(`A filterView2rule with operation '${e}' is not implemented.`)}}function ke(r){if(r instanceof Array)return r.map(s=>ke(s)).join(" and ");let{op:e,field:n,text:t,value:o}=r;switch(e){case"caseInsensitiveFullMatch":return`${n} in lower case is '${t?.toLowerCase()}'`;case"caseSensitiveFullMatch":return`${n} is '${t}'`;case"caseSensitiveMatch":return`${n} contains '${t}'`;case"caseInsensitiveMatch":return`${n} in lower case contains '${t?.toLowerCase()}'`;case"isLessThan":return`${n} is less than ${o}`;case"isGreaterThan":return`${n} is greater than ${o}`;default:throw new Error(`A filterView2name with operation '${e}' is not implemented.`)}}function Et(r){if(r==null)return()=>!0;let e=t=>typeof t=="object"||t!==null,n=(t,o)=>{let s=typeof o;if(s==="number"||s==="string")return l=>l[t]===o;if(s==="object"&&o instanceof Array){let l=new Set(o);return i=>l.has(i[t])}throw new Error(`No interpretation of value ${JSON.stringify(o)} in filtering rule ${JSON.stringify(r)}.`)};if(typeof r=="object"){let t=[];return Object.entries(r).map(([o,s])=>{t.push(n(o,s))}),o=>{if(!e(o))return!1;for(let s=0;s<t.length;s++)if(!t[s](o))return!1;return!0}}throw new Error(`Syntax error in filtering rule ${JSON.stringify(r)}`)}var ie=(i=>(i.ASSET="ASSET",i.LIABILITY="LIABILITY",i.EQUITY="EQUITY",i.REVENUE="REVENUE",i.EXPENSE="EXPENSE",i.PROFIT_PREV="PROFIT_PREV",i.PROFIT="PROFIT",i))(ie||{});function At(r){return typeof r=="string"&&/^\d+$/.test(r)}function ht(r){return typeof r=="string"&&/^account\./.test(r)}function St(r){return typeof r=="string"&&/^tags\./.test(r)}function Rt(r){return typeof r=="string"&&/^[-a-z]+$/.test(r)}function Oe(r){return typeof r=="string"&&/^[A-Za-z0-9]+$/.test(r)}function bt(r){return typeof r!="string"||!/^\[\]$/.test(r)?!1:r.substr(1,r.length-2).split("][").filter(n=>!Oe(n)).length>0}function xt(r){return typeof r=="string"}function It(r){for(let e of r)e.entries=e.entries.sort((n,t)=>n.account===t.account?0:n.account<t.account?-1:1);return r.sort((e,n)=>new Date(e.date).getTime()-new Date(n.date).getTime())}function Nt(r){return typeof r=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(r)}var B=60,we=B*60,Pe=we*24,Ct=Pe*365;function Dt(r){return{jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"}[r.toLowerCase()]||null}function kt(r){return typeof r=="string"&&/^\w+:/.test(r)}function ae(r){return typeof r=="string"&&!/^\w+:/.test(r)}var _e=30*B,Ot=_e+10*B,wt="Tasenor";function Le(r,e){let[n,t,o]=r.split(".");if(n==="debt"&&t==="currency")return{code:"CREDITORS",addChildren:!0,currency:o,plugin:e.plugin};if(n==="deposit"){if(t==="currency")return{code:"CASH",addChildren:!0,currency:o,plugin:e.plugin,type:"ASSET"};if(t==="external")return{code:"CASH",addChildren:!0,currency:o,"!plugin":e.plugin,type:"ASSET"}}if(n==="distribution")return null;if(n==="dividend"&&t==="currency")return{code:"DIVIDEND",addChildren:!0,currency:o,plugin:e.plugin};if(n==="expense"){if(t==="currency")return e.plugin?{code:"CASH",addChildren:!0,currency:o,plugin:e.plugin,type:"ASSET"}:null;if(t==="statement")return{type:"EXPENSE",code:o}}if(n==="fee"&&t==="currency")return e.plugin?{code:"CASH",addChildren:!0,currency:o,plugin:e.plugin,type:"ASSET"}:null;if(n==="forex"&&t==="currency")return{code:"CASH",currency:o,plugin:e.plugin};if(n==="income"){if(t==="currency")return e.plugin?{code:"CASH",addChildren:!0,currency:o,plugin:e.plugin,type:"ASSET"}:null;if(t==="statement")return{type:"REVENUE",code:o}}if(n==="investment"){if(t==="currency")return null;if(t==="statement")return{type:"EQUITY",code:o,plugin:e.plugin}}if(n==="tax"){if(t==="currency")return null;if(t==="statement")return{type:["LIABILITY","ASSET"],code:o}}if(n==="trade"){if(t==="currency")return{type:"ASSET",code:"CASH",addChildren:!0,currency:o,plugin:e.plugin};if(t==="stock")return{type:"ASSET",code:"CURRENT_PUBLIC_STOCK_SHARES",plugin:e.plugin};if(t==="crypto")return{type:"ASSET",code:"CURRENT_CRYPTOCURRENCIES",plugin:e.plugin}}if(n==="transfer"){if(t==="currency")return{type:"ASSET",code:"CASH",addChildren:!0,currency:o,plugin:e.plugin};if(t==="external")return o==="NEEDS_MANUAL_INSPECTION"?{code:o}:null}if(n==="withdrawal"){if(t==="currency")return{code:"CASH",addChildren:!0,currency:o,plugin:e.plugin,type:"ASSET"};if(t==="external")return{code:"CASH",addChildren:!0,currency:o,"!plugin":e.plugin,type:"ASSET"}}let s=`No SQL conversion known for account address '${r}'.`;if(e.strict)throw new Error(s);return R(s),null}function Pt(r,e,n=null){n===null&&(n=new _);let t=Le(r,e);if(t===null)return null;let o=[];t.currency===e.defaultCurrency&&(o.push(`(data->>'currency' = '${t.currency}' OR data->>'currency' IS NULL)`),delete t.currency),t.type&&(typeof t.type=="string"?o.push(`(type = '${t.type}')`):o.push("("+t.type.map(i=>`type = '${i}'`).join(" OR ")+")"),delete t.type),t.addChildren&&(t.code=[t.code,...n.children(t.code)],delete t.addChildren);let s=i=>{if(i[0]==="!")return`(data->>'${i.substring(1)}' != '${t[i]}')`;let p=t[i];if(p instanceof Array){if(p.length>1)return`(data->>'${i}' IN (${p.map(h=>"'"+h+"'").join(", ")}))`;p=p[0]}return`(data->>'${i}' = '${p}')`};return[...Object.keys(t).map(i=>s(i)),...o].join(" AND ")}function _t(r){return typeof r=="object"&&r!==null&&Object.keys(r).length===1&&Object.keys(r)[0]==="name"}function Lt(r){return typeof r=="object"&&r!==null&&(typeof r.ask=="object"||typeof r.chooseTag=="object"&&r.chooseTag instanceof Array)}var d=require("mathjs");var ve=require("interactive-elements");var q=class extends Error{constructor(n,t,o){super(n);this.expression=t,this.variables=(0,d.clone)(o)}},ue=class{constructor(e,n=!1){this.quiet=n,this.engine=(0,d.create)({...d.all,createEqual:(0,d.factory)("equal",[],()=>(0,d.typed)("equal",{"string, string":function(o,s){return o===s}})),createUnequal:(0,d.factory)("unequal",[],()=>(0,d.typed)("unequal",{"string, string":function(o,s){return o!==s}})),createSmaller:(0,d.factory)("smaller",[],()=>(0,d.typed)("smaller",{"string, string":function(o,s){return o<s}})),createSmallerEq:(0,d.factory)("smallerEq",[],()=>(0,d.typed)("smallerEq",{"string, string":function(o,s){return o<=s}})),createLarger:(0,d.factory)("larger",[],()=>(0,d.typed)("larger",{"string, string":function(o,s){return o>s}})),createLargerEq:(0,d.factory)("largerEq",[],()=>(0,d.typed)("largerEq",{"string, string":function(o,s){return o>=s}})),createCompare:(0,d.factory)("compare",[],()=>(0,d.typed)("compare",{"string, string":function(o,s){return o>s?1:o<s?-1:0}})),createAdd:(0,d.factory)("add",[],()=>(0,d.typed)("add",{"number, number":function(o,s){return o+s},"string, string":function(o,s){return`${o}${s}`}}))},{}),this.scope={$:t=>this.$(t),capitalize:t=>this.capitalize(t),cents:t=>this.cents(t),chosen:t=>this.chosen(t),contains:(t,o)=>this.contains(t,o),d:(...t)=>this.d(...t),isCurrency:t=>this.isCurrency(t),join:(...t)=>this.join(...t),lower:t=>this.lower(t),num:t=>this.num(t),par:(...t)=>this.par(...t),rates:(...t)=>this.rates(t),regex:(t,o,s)=>this.regex(t,o,s),str:t=>this.str(t),times:(t,o)=>this.times(t,o),ucfirst:t=>this.ucfirst(t),import:function(){throw new Error("Function import is disabled.")},createUnit:function(){throw new Error("Function createUnit is disabled.")},evaluate:function(){throw new Error("Function evaluate is disabled.")},parse:function(){throw new Error("Function parse is disabled.")},simplify:function(){throw new Error("Function simplify is disabled.")},derivative:function(){throw new Error("Function derivative is disabled.")}},this.variables=e||{}}eval(e,n){if(n&&(this.variables=(0,d.clone)(n)),e instanceof Object){if(e===null)return null;if(e instanceof Array)return e.map(s=>this.eval(s));let o={};return Object.keys(e).forEach(s=>o[s]=this.eval(e[s])),o}let t;try{if(t=this.engine.evaluate(e,{...this.scope,...this.variables}),t&&typeof t=="object"&&t._data&&t._size)return t._data}catch(o){throw new q(o.message,e,n||{})}return t}$(e){return e in this.variables?this.variables[e]:void 0}num(e){if(typeof e=="number")return e;let n=(0,ve.num)(`${e}`);return!this.quiet&&isNaN(n)&&R(`Unable to parse number from ${JSON.stringify(e)}.`),n}isCurrency(e){return $(e)}rates(e){let n={};for(let t=0;t<e.length;t+=2)n[`${e[t]}`]=this.num(e[t+1]);return n}regex(e,n,t=void 0){let s=(t?new RegExp(e,t):new RegExp(e)).exec(n);if(!s)return!1;let l=[];for(let i=1;s[i]!==void 0;i++)l.push(s[i]);return l.length?l:!0}par(...e){let n=e.filter(t=>t!==null&&t!==!1).map(t=>`${t}`.trim()).filter(t=>t!=="");return n.length?` (${n.join(", ")})`:""}var(e){if(!(e in this.variables))throw new Error(`A variable '${e}' is not defined.`);return this.variables[e]}chosen(e){let n=this.var(e),t=this.var("rule"),o=t.questions;if(!(e in o))throw new Error(`Cannot find variable '${e}' from questions of the rule ${JSON.stringify(t.questions)}'.`);let s=o[e];if("ask"in s){let l=Object.entries(s.ask).filter(([,i])=>i===n).map(([i])=>i);if(l.length)return l.join(", ");throw new Error(`Unable to find any matches for answer ${JSON.stringify(n)} from question ${JSON.stringify(s)}.`)}throw new Error(`Cannot reverse map question ${JSON.stringify(s)}, when looking for chosen '${e}'.`)}contains(e,n){return e.indexOf(n)>=0}ucfirst(e){return e.substring(0,1).toUpperCase()+e.substring(1)}lower(e){return e.toLowerCase()}capitalize(e){return e.toLowerCase().split(" ").map(n=>this.ucfirst(n)).join(" ")}cents(e){if(typeof e!="number")throw new Error(`Invalid argument ${JSON.stringify(e)} for cents().`);return Math.round(e*100)}str(e){return`${e}`}join(...e){return e.filter(n=>n!=null).map(n=>`${n}`.trim()).filter(n=>n!=="").join(" ")}d(...e){return v("[DEBUG]",...e),e.length?e[e.length-1]:void 0}times(e,n){return e==null||e===0?"":`${parseInt(`${e}`)} x ${n}`}};var k=I(require("crypto")),Ue=I(require("buffer"));c.Buffer=c.Buffer||Ue.default.Buffer;var ce=class{constructor(e){if(!e||e.length<32)throw new Error("Encryption key is too short or does not exist.");this.algorithm="aes-128-cbc";let n=e,t=k.default.createHash("sha1");t.update(n),this.key=t.digest().slice(0,16)}encrypt(e){let n=k.default.randomBytes(16),t=k.default.createCipheriv(this.algorithm,this.key,n);return[t.update(e,"utf8","hex")+t.final("hex"),u.Buffer.from(n).toString("hex")].join("|")}decrypt(e){let[n,t]=e.split("|");if(!t)throw new Error("IV not found when decrypting.");let o;try{return o=k.default.createDecipheriv(this.algorithm,this.key,u.Buffer.from(t,"hex")),o.update(n,"hex","utf8")+o.final("utf8")}catch{return E(`Decrypting ${e} failed.`),null}}static hash(e){return k.default.randomBytes(e).toString("hex")}};var Me=I(require("jwt-decode")),pe=I(require("axios"));function $e(r){return typeof r=="object"&&r!==null&&r.hasOwnProperty("success")?r.success:!1}function vt(r){return!$e(r)}var g={sites:{}};function Ut(r){if(r.baseUrl&&(g.baseUrl=r.baseUrl),r.sites)for(let e of Object.keys(r.sites))g.sites||(g.sites={}),g.sites[e]||(g.sites[e]={}),Object.assign(g.sites[e],r.sites[e])}var f=(r,e)=>{let n=new URL(r).origin;return g.sites&&g.sites[n]&&e in g.sites[n]?g.sites[n][e]:null},j=(r,e,n)=>{let t=new URL(r).origin;g.sites||(g.sites={}),g.sites[t]||(g.sites[t]={}),g.sites[t][e]=n},Mt=r=>{if(ae(r)){if(!g.baseUrl)throw new Error(`Cannot use local URL '${r}' when there is no base URL configured.`);return g.baseUrl.replace(/\/$/,"")+"/"+r.replace(/^\//,"")}return r};async function le(r){if(j(r,"token",null),f(r,"refreshToken")&&f(r,"refreshUrl")){let e=`${new URL(r).origin}${f(r,"refreshUrl")}`;D(`Refreshing token from ${e}.`);let n={Authorization:`Bearer ${f(r,"refreshToken")}`};f(r,"uuid")&&(n["X-UUID"]=f(r,"uuid"));let t=await(0,pe.default)({method:"GET",url:e,headers:n}).catch(s=>{let l=f(r,"logout");return l?(l(),!1):(E(`Fetching token for ${r} failed: ${s}`),s)});if(t.status===200&&t.data&&t.data.token)return j(r,"token",t.data.token),t.data.refresh&&j(r,"refreshToken",t.data.refresh),D(`Received new token from ${r}.`),!0;let o=f(r,"logout");return o?(o(),!1):(E("Invalid response:",t),new Error("Unable to understand token response."))}return new Error(`Site ${r} not configured for token refreshing.`)}function O(r){return async(e,n,t)=>{let o=Mt(e),s=new URL(o).origin;(!g.sites||!g.sites[s])&&R(`We don't have any net configuration for site ${s}.`);async function l({method:m,url:y,data:T}){let x={};Object.assign(x,t),g.sites&&g.sites[s]&&!x.Authorization&&(f(y,"token")&&(x.Authorization=`Bearer ${f(y,"token")}`),f(y,"uuid")&&(x["X-UUID"]=f(y,"uuid")));let P={method:m,url:y,data:T,headers:x};m==="GET"&&T&&(P.params=T),T==null&&delete P.data,T&&T instanceof Object&&T.constructor&&T.constructor.name==="FormData"&&T.getHeaders&&Object.assign(x,T.getHeaders());let A=await(0,pe.default)(P).catch(X=>{if(X.response)return X.response;let ge=`Network call failed: ${X}.`;return E(ge),{status:-1,success:!1,data:{message:ge}}});v("Net:",m,y,"HTTP",A.status);let S;switch(A.status){case-1:return A;case 200:return{status:200,success:!0,data:A.data};case 204:return{status:204,success:!0,data:!0};case 400:S="Bad Request";case 401:S=S||"Unauthorized";case 403:S=S||"Forbidden";case 404:S=S||"Not Found";case 500:return S=S||"Internal Server Error",E(`A call ${m} ${y} failed with ${A.status}. Data:`),E(A.data),{status:A.status,success:!1,message:A.data&&A.data.message?A.data.message:S};default:throw R(`Net: No handler for HTTP ${A.status}.`),new Error(`Net library has no handler yet for status ${A.status}.`)}}async function i(m){let y=500;if(m.response)switch(m.response.status){case 401:case 403:if(y=m.response.status,f(o,"refreshToken")&&f(o,"refreshUrl")&&(R(`Request ${r} ${o} gave ${m.response.status} but trying to refresh the token.`),m=await le(o),m===!0)){let x=!0,P=await l({method:r,url:o,data:n}).catch(Y=>{R(`We got token but retrying ${r} ${o} failed as well. Error was:`),E(Y),m=Y,y=500,x=!1});if(x)return D(`Retrying ${r} ${o} successful.`),P}break}let T="";return m.response&&m.response.data&&(T=` (${m.response.data.message})`),E(`Request ${r} ${o} failed: ${JSON.stringify(m)}${JSON.stringify(T)}`),{status:y,success:!1,message:`Request ${r} ${o} failed.`}}let p=f(o,"token"),me=!!f(o,"refreshToken")&&!p;if(p)try{let y=(0,Me.default)(p).exp*1e3,T=new Date().getTime();y-T<1e3&&(D("Token has been expired."),me=!0)}catch{}if(me){D("Token needs refreshing.");let m=await le(o);m!==!0&&E(`Trying to refresh token gave an error: ${m}`)}let w=await l({method:r,url:o,data:n}).catch(m=>i(m));return!w.success&&(w.status===403||w.status===401)?i({response:w}):w}}async function $t(r){let e=await le(r);return e===!0?{token:f(r,"token"),refresh:f(r,"refreshToken")}:(E(`Token refresh for ${r} failed:`,e),null)}var de={configure:Ut,getConf:f,setConf:j,refresh:$t,DELETE:O("DELETE"),GET:O("GET"),HEAD:O("HEAD"),PATCH:O("PATCH"),POST:O("POST"),PUT:O("PUT")};var F={API:{url:""},ERP_API:{url:""}};function Be(r){return{call:async(e,n,t,o={})=>{if(!F[r])throw new Error(`Service configuration variable ${r} is not set and related service is unusable.`);if(!F[r].url)throw new Error(`Service configuration URL for ${r} is not set and related service is unusable.`);if("Authorization"in o&&!o.Authorization)throw new Error(`Invalid Authorization header for ${r} call.`);return n=`${F[r].url}${n}`,de[e](n,t,o)}}}function Bt(r,e){if(r in F)F[r].url=e;else throw new Error(`A service ${r} does not exist.`)}var Ft=Be("ERP_API"),Vt=Be("API");0&&(module.exports={API,AccountType,BalanceBookkeeping,Bookkeeper,Crypto,DAYS,ERP_API,HOURS,Knowledge,MAX_TARGET_ID_LEN,MAX_UPLOAD_SIZE,MINUTES,REFRESH_TOKEN_EXPIRY_TIME,RuleParsingError,RulesEngine,StockBookkeeping,TOKEN_EXPIRY_TIME,TOKEN_ISSUER,TransactionApplyResults,YEARS,ZERO_CENTS,ZERO_STOCK,address2sql,conditions,currencies,debug,emptyLinkedTree,error,filter2function,filterView2name,filterView2rule,haveCatalog,haveCursor,haveKnowledge,haveSettings,haveStore,isAccountAddress,isAccountAddressConfig,isAccountNumber,isAssetStockType,isAssetTransfer,isAssetTransferReason,isAssetType,isCurrency,isDatabaseName,isHttpFailureResponse,isHttpSuccessResponse,isLanguage,isLocalUrl,isNode,isReportID,isShortDate,isStockChangeData,isStockChangeDelta,isStockChangeFixed,isTag,isTagConfig,isTagString,isTagType,isUIQuery,isUIQueryRef,isUi,isUrl,isVersion,languages,latestVersion,less,log,month,mute,near,net,note,realNegative,realPositive,setGlobalComponents,setServiceUrl,sortTransactions,timestamp,ucfirst,unmute,versionCompare,waitPromise,warning});
