var ce=Object.defineProperty;var we=(L,R,B)=>R in L?ce(L,R,{enumerable:!0,configurable:!0,writable:!0,value:B}):L[R]=B;var oe=(L,R,B)=>we(L,typeof R!="symbol"?R+"":R,B);import{j as ye}from"./jsx-runtime-DwRxq3ZX.js";import{g as Ce,r as ie}from"./index-BX3iQpgp.js";import{r as Ae}from"./index-DwCBTc21.js";/* empty css              */const se=(L,R)=>{if(L===R)return!0;if((L===void 0||R===void 0||L===null||R===null)&&(L||R))return!1;const B=L==null?void 0:L.constructor.name,y=R==null?void 0:R.constructor.name;if(B!==y)return!1;if(B==="Array"){if(L.length!==R.length)return!1;let c=!0;for(let h=0;h<L.length;h++)if(!se(L[h],R[h])){c=!1;break}return c}if(B==="Object"){let c=!0;const h=Object.keys(L),I=Object.keys(R);if(h.length!==I.length)return!1;for(let w=0;w<h.length;w++)if(L[h[w]]&&R[h[w]]){if(L[h[w]]===R[h[w]])continue;if(L[h[w]]&&(L[h[w]].constructor.name==="Array"||L[h[w]].constructor.name==="Object")){if(c=se(L[h[w]],R[h[w]]),!c)break}else if(L[h[w]]!==R[h[w]]){c=!1;break}}else if(L[h[w]]&&!R[h[w]]||!L[h[w]]&&R[h[w]]){c=!1;break}return c}return L===R};var he={exports:{}};(function(L,R){var B=function(){var y=function(d,b){var l=236,v=17,t=d,m=h[b],r=null,e=0,g=null,a=[],i={},x=function(u,o){e=t*4+17,r=function(n){for(var s=new Array(n),f=0;f<n;f+=1){s[f]=new Array(n);for(var p=0;p<n;p+=1)s[f][p]=null}return s}(e),A(0,0),A(e-7,0),A(0,e-7),j(),O(),G(u,o),t>=7&&Z(u),g==null&&(g=de(t,m,a)),J(g,o)},A=function(u,o){for(var n=-1;n<=7;n+=1)if(!(u+n<=-1||e<=u+n))for(var s=-1;s<=7;s+=1)o+s<=-1||e<=o+s||(0<=n&&n<=6&&(s==0||s==6)||0<=s&&s<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=s&&s<=4?r[u+n][o+s]=!0:r[u+n][o+s]=!1)},E=function(){for(var u=0,o=0,n=0;n<8;n+=1){x(!0,n);var s=w.getLostPoint(i);(n==0||u>s)&&(u=s,o=n)}return o},O=function(){for(var u=8;u<e-8;u+=1)r[u][6]==null&&(r[u][6]=u%2==0);for(var o=8;o<e-8;o+=1)r[6][o]==null&&(r[6][o]=o%2==0)},j=function(){for(var u=w.getPatternPosition(t),o=0;o<u.length;o+=1)for(var n=0;n<u.length;n+=1){var s=u[o],f=u[n];if(r[s][f]==null)for(var p=-2;p<=2;p+=1)for(var T=-2;T<=2;T+=1)p==-2||p==2||T==-2||T==2||p==0&&T==0?r[s+p][f+T]=!0:r[s+p][f+T]=!1}},Z=function(u){for(var o=w.getBCHTypeNumber(t),n=0;n<18;n+=1){var s=!u&&(o>>n&1)==1;r[Math.floor(n/3)][n%3+e-8-3]=s}for(var n=0;n<18;n+=1){var s=!u&&(o>>n&1)==1;r[n%3+e-8-3][Math.floor(n/3)]=s}},G=function(u,o){for(var n=m<<3|o,s=w.getBCHTypeInfo(n),f=0;f<15;f+=1){var p=!u&&(s>>f&1)==1;f<6?r[f][8]=p:f<8?r[f+1][8]=p:r[e-15+f][8]=p}for(var f=0;f<15;f+=1){var p=!u&&(s>>f&1)==1;f<8?r[8][e-f-1]=p:f<9?r[8][15-f-1+1]=p:r[8][15-f-1]=p}r[e-8][8]=!u},J=function(u,o){for(var n=-1,s=e-1,f=7,p=0,T=w.getMaskFunction(o),C=e-1;C>0;C-=2)for(C==6&&(C-=1);;){for(var D=0;D<2;D+=1)if(r[s][C-D]==null){var q=!1;p<u.length&&(q=(u[p]>>>f&1)==1);var M=T(s,C-D);M&&(q=!q),r[s][C-D]=q,f-=1,f==-1&&(p+=1,f=7)}if(s+=n,s<0||e<=s){s-=n,n=-n;break}}},X=function(u,o){for(var n=0,s=0,f=0,p=new Array(o.length),T=new Array(o.length),C=0;C<o.length;C+=1){var D=o[C].dataCount,q=o[C].totalCount-D;s=Math.max(s,D),f=Math.max(f,q),p[C]=new Array(D);for(var M=0;M<p[C].length;M+=1)p[C][M]=255&u.getBuffer()[M+n];n+=D;var Q=w.getErrorCorrectPolynomial(q),V=k(p[C],Q.getLength()-1),fe=V.mod(Q);T[C]=new Array(Q.getLength()-1);for(var M=0;M<T[C].length;M+=1){var le=M+fe.getLength()-T[C].length;T[C][M]=le>=0?fe.getAt(le):0}}for(var me=0,M=0;M<o.length;M+=1)me+=o[M].totalCount;for(var ue=new Array(me),te=0,M=0;M<s;M+=1)for(var C=0;C<o.length;C+=1)M<p[C].length&&(ue[te]=p[C][M],te+=1);for(var M=0;M<f;M+=1)for(var C=0;C<o.length;C+=1)M<T[C].length&&(ue[te]=T[C][M],te+=1);return ue},de=function(u,o,n){for(var s=N.getRSBlocks(u,o),f=H(),p=0;p<n.length;p+=1){var T=n[p];f.put(T.getMode(),4),f.put(T.getLength(),w.getLengthInBits(T.getMode(),u)),T.write(f)}for(var C=0,p=0;p<s.length;p+=1)C+=s[p].dataCount;if(f.getLengthInBits()>C*8)throw"code length overflow. ("+f.getLengthInBits()+">"+C*8+")";for(f.getLengthInBits()+4<=C*8&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(!1);for(;!(f.getLengthInBits()>=C*8||(f.put(l,8),f.getLengthInBits()>=C*8));)f.put(v,8);return X(f,s)};i.addData=function(u,o){o=o||"Byte";var n=null;switch(o){case"Numeric":n=U(u);break;case"Alphanumeric":n=S(u);break;case"Byte":n=F(u);break;case"Kanji":n=W(u);break;default:throw"mode:"+o}a.push(n),g=null},i.isDark=function(u,o){if(u<0||e<=u||o<0||e<=o)throw u+","+o;return r[u][o]},i.getModuleCount=function(){return e},i.make=function(){if(t<1){for(var u=1;u<40;u++){for(var o=N.getRSBlocks(u,m),n=H(),s=0;s<a.length;s++){var f=a[s];n.put(f.getMode(),4),n.put(f.getLength(),w.getLengthInBits(f.getMode(),u)),f.write(n)}for(var p=0,s=0;s<o.length;s++)p+=o[s].dataCount;if(n.getLengthInBits()<=p*8)break}t=u}x(!1,E())},i.createTableTag=function(u,o){u=u||2,o=typeof o>"u"?u*4:o;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+o+"px;",n+='">',n+="<tbody>";for(var s=0;s<i.getModuleCount();s+=1){n+="<tr>";for(var f=0;f<i.getModuleCount();f+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+u+"px;",n+=" height: "+u+"px;",n+=" background-color: ",n+=i.isDark(s,f)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>",n},i.createSvgTag=function(u,o,n,s){var f={};typeof arguments[0]=="object"&&(f=arguments[0],u=f.cellSize,o=f.margin,n=f.alt,s=f.title),u=u||2,o=typeof o>"u"?u*4:o,n=typeof n=="string"?{text:n}:n||{},n.text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,s=typeof s=="string"?{text:s}:s||{},s.text=s.text||null,s.id=s.text?s.id||"qrcode-title":null;var p=i.getModuleCount()*u+o*2,T,C,D,q,M="",Q;for(Q="l"+u+",0 0,"+u+" -"+u+",0 0,-"+u+"z ",M+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',M+=f.scalable?"":' width="'+p+'px" height="'+p+'px"',M+=' viewBox="0 0 '+p+" "+p+'" ',M+=' preserveAspectRatio="xMinYMin meet"',M+=s.text||n.text?' role="img" aria-labelledby="'+$([s.id,n.id].join(" ").trim())+'"':"",M+=">",M+=s.text?'<title id="'+$(s.id)+'">'+$(s.text)+"</title>":"",M+=n.text?'<description id="'+$(n.id)+'">'+$(n.text)+"</description>":"",M+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',M+='<path d="',D=0;D<i.getModuleCount();D+=1)for(q=D*u+o,T=0;T<i.getModuleCount();T+=1)i.isDark(D,T)&&(C=T*u+o,M+="M"+C+","+q+Q);return M+='" stroke="transparent" fill="black"/>',M+="</svg>",M},i.createDataURL=function(u,o){u=u||2,o=typeof o>"u"?u*4:o;var n=i.getModuleCount()*u+o*2,s=o,f=n-o;return re(n,n,function(p,T){if(s<=p&&p<f&&s<=T&&T<f){var C=Math.floor((p-s)/u),D=Math.floor((T-s)/u);return i.isDark(D,C)?0:1}else return 1})},i.createImgTag=function(u,o,n){u=u||2,o=typeof o>"u"?u*4:o;var s=i.getModuleCount()*u+o*2,f="";return f+="<img",f+=' src="',f+=i.createDataURL(u,o),f+='"',f+=' width="',f+=s,f+='"',f+=' height="',f+=s,f+='"',n&&(f+=' alt="',f+=$(n),f+='"'),f+="/>",f};var $=function(u){for(var o="",n=0;n<u.length;n+=1){var s=u.charAt(n);switch(s){case"<":o+="&lt;";break;case">":o+="&gt;";break;case"&":o+="&amp;";break;case'"':o+="&quot;";break;default:o+=s;break}}return o},pe=function(u){var o=1;u=typeof u>"u"?o*2:u;var n=i.getModuleCount()*o+u*2,s=u,f=n-u,p,T,C,D,q,M={"██":"█","█ ":"▀"," █":"▄","  ":" "},Q={"██":"▀","█ ":"▀"," █":" ","  ":" "},V="";for(p=0;p<n;p+=2){for(C=Math.floor((p-s)/o),D=Math.floor((p+1-s)/o),T=0;T<n;T+=1)q="█",s<=T&&T<f&&s<=p&&p<f&&i.isDark(C,Math.floor((T-s)/o))&&(q=" "),s<=T&&T<f&&s<=p+1&&p+1<f&&i.isDark(D,Math.floor((T-s)/o))?q+=" ":q+="█",V+=u<1&&p+1>=f?Q[q]:M[q];V+=`
`}return n%2&&u>0?V.substring(0,V.length-n-1)+Array(n+1).join("▀"):V.substring(0,V.length-1)};return i.createASCII=function(u,o){if(u=u||1,u<2)return pe(o);u-=1,o=typeof o>"u"?u*2:o;var n=i.getModuleCount()*u+o*2,s=o,f=n-o,p,T,C,D,q=Array(u+1).join("██"),M=Array(u+1).join("  "),Q="",V="";for(p=0;p<n;p+=1){for(C=Math.floor((p-s)/u),V="",T=0;T<n;T+=1)D=1,s<=T&&T<f&&s<=p&&p<f&&i.isDark(C,Math.floor((T-s)/u))&&(D=0),V+=D?q:M;for(C=0;C<u;C+=1)Q+=V+`
`}return Q.substring(0,Q.length-1)},i.renderTo2dContext=function(u,o){o=o||2;for(var n=i.getModuleCount(),s=0;s<n;s++)for(var f=0;f<n;f++)u.fillStyle=i.isDark(s,f)?"black":"white",u.fillRect(s*o,f*o,o,o)},i};y.stringToBytesFuncs={default:function(d){for(var b=[],l=0;l<d.length;l+=1){var v=d.charCodeAt(l);b.push(v&255)}return b}},y.stringToBytes=y.stringToBytesFuncs.default,y.createStringToBytes=function(d,b){var l=function(){for(var t=ee(d),m=function(){var O=t.read();if(O==-1)throw"eof";return O},r=0,e={};;){var g=t.read();if(g==-1)break;var a=m(),i=m(),x=m(),A=String.fromCharCode(g<<8|a),E=i<<8|x;e[A]=E,r+=1}if(r!=b)throw r+" != "+b;return e}(),v=63;return function(t){for(var m=[],r=0;r<t.length;r+=1){var e=t.charCodeAt(r);if(e<128)m.push(e);else{var g=l[t.charAt(r)];typeof g=="number"?(g&255)==g?m.push(g):(m.push(g>>>8),m.push(g&255)):m.push(v)}}return m}};var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h={L:1,M:0,Q:3,H:2},I={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},w=function(){var d=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],b=1335,l=7973,v=21522,t={},m=function(r){for(var e=0;r!=0;)e+=1,r>>>=1;return e};return t.getBCHTypeInfo=function(r){for(var e=r<<10;m(e)-m(b)>=0;)e^=b<<m(e)-m(b);return(r<<10|e)^v},t.getBCHTypeNumber=function(r){for(var e=r<<12;m(e)-m(l)>=0;)e^=l<<m(e)-m(l);return r<<12|e},t.getPatternPosition=function(r){return d[r-1]},t.getMaskFunction=function(r){switch(r){case I.PATTERN000:return function(e,g){return(e+g)%2==0};case I.PATTERN001:return function(e,g){return e%2==0};case I.PATTERN010:return function(e,g){return g%3==0};case I.PATTERN011:return function(e,g){return(e+g)%3==0};case I.PATTERN100:return function(e,g){return(Math.floor(e/2)+Math.floor(g/3))%2==0};case I.PATTERN101:return function(e,g){return e*g%2+e*g%3==0};case I.PATTERN110:return function(e,g){return(e*g%2+e*g%3)%2==0};case I.PATTERN111:return function(e,g){return(e*g%3+(e+g)%2)%2==0};default:throw"bad maskPattern:"+r}},t.getErrorCorrectPolynomial=function(r){for(var e=k([1],0),g=0;g<r;g+=1)e=e.multiply(k([1,_.gexp(g)],0));return e},t.getLengthInBits=function(r,e){if(1<=e&&e<10)switch(r){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw"mode:"+r}else if(e<27)switch(r){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw"mode:"+r}else if(e<41)switch(r){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw"mode:"+r}else throw"type:"+e},t.getLostPoint=function(r){for(var e=r.getModuleCount(),g=0,a=0;a<e;a+=1)for(var i=0;i<e;i+=1){for(var x=0,A=r.isDark(a,i),E=-1;E<=1;E+=1)if(!(a+E<0||e<=a+E))for(var O=-1;O<=1;O+=1)i+O<0||e<=i+O||E==0&&O==0||A==r.isDark(a+E,i+O)&&(x+=1);x>5&&(g+=3+x-5)}for(var a=0;a<e-1;a+=1)for(var i=0;i<e-1;i+=1){var j=0;r.isDark(a,i)&&(j+=1),r.isDark(a+1,i)&&(j+=1),r.isDark(a,i+1)&&(j+=1),r.isDark(a+1,i+1)&&(j+=1),(j==0||j==4)&&(g+=3)}for(var a=0;a<e;a+=1)for(var i=0;i<e-6;i+=1)r.isDark(a,i)&&!r.isDark(a,i+1)&&r.isDark(a,i+2)&&r.isDark(a,i+3)&&r.isDark(a,i+4)&&!r.isDark(a,i+5)&&r.isDark(a,i+6)&&(g+=40);for(var i=0;i<e;i+=1)for(var a=0;a<e-6;a+=1)r.isDark(a,i)&&!r.isDark(a+1,i)&&r.isDark(a+2,i)&&r.isDark(a+3,i)&&r.isDark(a+4,i)&&!r.isDark(a+5,i)&&r.isDark(a+6,i)&&(g+=40);for(var Z=0,i=0;i<e;i+=1)for(var a=0;a<e;a+=1)r.isDark(a,i)&&(Z+=1);var G=Math.abs(100*Z/e/e-50)/5;return g+=G*10,g},t}(),_=function(){for(var d=new Array(256),b=new Array(256),l=0;l<8;l+=1)d[l]=1<<l;for(var l=8;l<256;l+=1)d[l]=d[l-4]^d[l-5]^d[l-6]^d[l-8];for(var l=0;l<255;l+=1)b[d[l]]=l;var v={};return v.glog=function(t){if(t<1)throw"glog("+t+")";return b[t]},v.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d[t]},v}();function k(d,b){if(typeof d.length>"u")throw d.length+"/"+b;var l=function(){for(var t=0;t<d.length&&d[t]==0;)t+=1;for(var m=new Array(d.length-t+b),r=0;r<d.length-t;r+=1)m[r]=d[r+t];return m}(),v={};return v.getAt=function(t){return l[t]},v.getLength=function(){return l.length},v.multiply=function(t){for(var m=new Array(v.getLength()+t.getLength()-1),r=0;r<v.getLength();r+=1)for(var e=0;e<t.getLength();e+=1)m[r+e]^=_.gexp(_.glog(v.getAt(r))+_.glog(t.getAt(e)));return k(m,0)},v.mod=function(t){if(v.getLength()-t.getLength()<0)return v;for(var m=_.glog(v.getAt(0))-_.glog(t.getAt(0)),r=new Array(v.getLength()),e=0;e<v.getLength();e+=1)r[e]=v.getAt(e);for(var e=0;e<t.getLength();e+=1)r[e]^=_.gexp(_.glog(t.getAt(e))+m);return k(r,0).mod(t)},v}var N=function(){var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],b=function(t,m){var r={};return r.totalCount=t,r.dataCount=m,r},l={},v=function(t,m){switch(m){case h.L:return d[(t-1)*4+0];case h.M:return d[(t-1)*4+1];case h.Q:return d[(t-1)*4+2];case h.H:return d[(t-1)*4+3];default:return}};return l.getRSBlocks=function(t,m){var r=v(t,m);if(typeof r>"u")throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+m;for(var e=r.length/3,g=[],a=0;a<e;a+=1)for(var i=r[a*3+0],x=r[a*3+1],A=r[a*3+2],E=0;E<i;E+=1)g.push(b(x,A));return g},l}(),H=function(){var d=[],b=0,l={};return l.getBuffer=function(){return d},l.getAt=function(v){var t=Math.floor(v/8);return(d[t]>>>7-v%8&1)==1},l.put=function(v,t){for(var m=0;m<t;m+=1)l.putBit((v>>>t-m-1&1)==1)},l.getLengthInBits=function(){return b},l.putBit=function(v){var t=Math.floor(b/8);d.length<=t&&d.push(0),v&&(d[t]|=128>>>b%8),b+=1},l},U=function(d){var b=c.MODE_NUMBER,l=d,v={};v.getMode=function(){return b},v.getLength=function(r){return l.length},v.write=function(r){for(var e=l,g=0;g+2<e.length;)r.put(t(e.substring(g,g+3)),10),g+=3;g<e.length&&(e.length-g==1?r.put(t(e.substring(g,g+1)),4):e.length-g==2&&r.put(t(e.substring(g,g+2)),7))};var t=function(r){for(var e=0,g=0;g<r.length;g+=1)e=e*10+m(r.charAt(g));return e},m=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;throw"illegal char :"+r};return v},S=function(d){var b=c.MODE_ALPHA_NUM,l=d,v={};v.getMode=function(){return b},v.getLength=function(m){return l.length},v.write=function(m){for(var r=l,e=0;e+1<r.length;)m.put(t(r.charAt(e))*45+t(r.charAt(e+1)),11),e+=2;e<r.length&&m.put(t(r.charAt(e)),6)};var t=function(m){if("0"<=m&&m<="9")return m.charCodeAt(0)-48;if("A"<=m&&m<="Z")return m.charCodeAt(0)-65+10;switch(m){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+m}};return v},F=function(d){var b=c.MODE_8BIT_BYTE,l=y.stringToBytes(d),v={};return v.getMode=function(){return b},v.getLength=function(t){return l.length},v.write=function(t){for(var m=0;m<l.length;m+=1)t.put(l[m],8)},v},W=function(d){var b=c.MODE_KANJI,l=y.stringToBytesFuncs.SJIS;if(!l)throw"sjis not supported.";(function(m,r){var e=l(m);if(e.length!=2||(e[0]<<8|e[1])!=r)throw"sjis not supported."})("友",38726);var v=l(d),t={};return t.getMode=function(){return b},t.getLength=function(m){return~~(v.length/2)},t.write=function(m){for(var r=v,e=0;e+1<r.length;){var g=(255&r[e])<<8|255&r[e+1];if(33088<=g&&g<=40956)g-=33088;else if(57408<=g&&g<=60351)g-=49472;else throw"illegal char at "+(e+1)+"/"+g;g=(g>>>8&255)*192+(g&255),m.put(g,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)},t},K=function(){var d=[],b={};return b.writeByte=function(l){d.push(l&255)},b.writeShort=function(l){b.writeByte(l),b.writeByte(l>>>8)},b.writeBytes=function(l,v,t){v=v||0,t=t||l.length;for(var m=0;m<t;m+=1)b.writeByte(l[m+v])},b.writeString=function(l){for(var v=0;v<l.length;v+=1)b.writeByte(l.charCodeAt(v))},b.toByteArray=function(){return d},b.toString=function(){var l="";l+="[";for(var v=0;v<d.length;v+=1)v>0&&(l+=","),l+=d[v];return l+="]",l},b},Y=function(){var d=0,b=0,l=0,v="",t={},m=function(e){v+=String.fromCharCode(r(e&63))},r=function(e){if(!(e<0)){if(e<26)return 65+e;if(e<52)return 97+(e-26);if(e<62)return 48+(e-52);if(e==62)return 43;if(e==63)return 47}throw"n:"+e};return t.writeByte=function(e){for(d=d<<8|e&255,b+=8,l+=1;b>=6;)m(d>>>b-6),b-=6},t.flush=function(){if(b>0&&(m(d<<6-b),d=0,b=0),l%3!=0)for(var e=3-l%3,g=0;g<e;g+=1)v+="="},t.toString=function(){return v},t},ee=function(d){var b=d,l=0,v=0,t=0,m={};m.read=function(){for(;t<8;){if(l>=b.length){if(t==0)return-1;throw"unexpected end of file./"+t}var e=b.charAt(l);if(l+=1,e=="=")return t=0,-1;if(e.match(/^\s$/))continue;v=v<<6|r(e.charCodeAt(0)),t+=6}var g=v>>>t-8&255;return t-=8,g};var r=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(e==43)return 62;if(e==47)return 63;throw"c:"+e};return m},P=function(d,b){var l=d,v=b,t=new Array(d*b),m={};m.setPixel=function(a,i,x){t[i*l+a]=x},m.write=function(a){a.writeString("GIF87a"),a.writeShort(l),a.writeShort(v),a.writeByte(128),a.writeByte(0),a.writeByte(0),a.writeByte(0),a.writeByte(0),a.writeByte(0),a.writeByte(255),a.writeByte(255),a.writeByte(255),a.writeString(","),a.writeShort(0),a.writeShort(0),a.writeShort(l),a.writeShort(v),a.writeByte(0);var i=2,x=e(i);a.writeByte(i);for(var A=0;x.length-A>255;)a.writeByte(255),a.writeBytes(x,A,255),A+=255;a.writeByte(x.length-A),a.writeBytes(x,A,x.length-A),a.writeByte(0),a.writeString(";")};var r=function(a){var i=a,x=0,A=0,E={};return E.write=function(O,j){if(O>>>j)throw"length over";for(;x+j>=8;)i.writeByte(255&(O<<x|A)),j-=8-x,O>>>=8-x,A=0,x=0;A=O<<x|A,x=x+j},E.flush=function(){x>0&&i.writeByte(A)},E},e=function(a){for(var i=1<<a,x=(1<<a)+1,A=a+1,E=g(),O=0;O<i;O+=1)E.add(String.fromCharCode(O));E.add(String.fromCharCode(i)),E.add(String.fromCharCode(x));var j=K(),Z=r(j);Z.write(i,A);var G=0,J=String.fromCharCode(t[G]);for(G+=1;G<t.length;){var X=String.fromCharCode(t[G]);G+=1,E.contains(J+X)?J=J+X:(Z.write(E.indexOf(J),A),E.size()<4095&&(E.size()==1<<A&&(A+=1),E.add(J+X)),J=X)}return Z.write(E.indexOf(J),A),Z.write(x,A),Z.flush(),j.toByteArray()},g=function(){var a={},i=0,x={};return x.add=function(A){if(x.contains(A))throw"dup key:"+A;a[A]=i,i+=1},x.size=function(){return i},x.indexOf=function(A){return a[A]},x.contains=function(A){return typeof a[A]<"u"},x};return m},re=function(d,b,l){for(var v=P(d,b),t=0;t<b;t+=1)for(var m=0;m<d;m+=1)v.setPixel(m,t,l(m,t));var r=K();v.write(r);for(var e=Y(),g=r.toByteArray(),a=0;a<g.length;a+=1)e.writeByte(g[a]);return e.flush(),"data:image/gif;base64,"+e};return y}();(function(){B.stringToBytesFuncs["UTF-8"]=function(y){function c(h){for(var I=[],w=0;w<h.length;w++){var _=h.charCodeAt(w);_<128?I.push(_):_<2048?I.push(192|_>>6,128|_&63):_<55296||_>=57344?I.push(224|_>>12,128|_>>6&63,128|_&63):(w++,_=65536+((_&1023)<<10|h.charCodeAt(w)&1023),I.push(240|_>>18,128|_>>12&63,128|_>>6&63,128|_&63))}return I}return c(y)}})(),function(y){L.exports=y()}(function(){return B})})(he);var xe=he.exports;const Te=Ce(xe),ae=class ae extends ie.Component{constructor(B){super(B);oe(this,"canvas");this.canvas=ie.createRef()}static utf16to8(B){let y="",c,h;const I=B.length;for(c=0;c<I;c++)h=B.charCodeAt(c),h>=1&&h<=127?y+=B.charAt(c):h>2047?(y+=String.fromCharCode(224|h>>12&15),y+=String.fromCharCode(128|h>>6&63),y+=String.fromCharCode(128|h>>0&63)):(y+=String.fromCharCode(192|h>>6&31),y+=String.fromCharCode(128|h>>0&63));return y}drawRoundedSquare(B,y,c,h,I,w,_,k){k.lineWidth=B,k.fillStyle=I,k.strokeStyle=I,c+=B/2,y+=B/2,h-=B,Array.isArray(w)||(w=[w,w,w,w]),w=w.map(F=>(F=Math.min(F,h/2),F<0?0:F));const N=w[0]||0,H=w[1]||0,U=w[2]||0,S=w[3]||0;k.beginPath(),k.moveTo(y+N,c),k.lineTo(y+h-H,c),H&&k.quadraticCurveTo(y+h,c,y+h,c+H),k.lineTo(y+h,c+h-U),U&&k.quadraticCurveTo(y+h,c+h,y+h-U,c+h),k.lineTo(y+S,c+h),S&&k.quadraticCurveTo(y,c+h,y,c+h-S),k.lineTo(y,c+N),N&&k.quadraticCurveTo(y,c,y+N,c),k.closePath(),k.stroke(),_&&k.fill()}drawPositioningPattern(B,y,c,h,I,w,_=[0,0,0,0]){const k=Math.ceil(y);let N,H;typeof _!="number"&&!Array.isArray(_)?(N=_.outer||0,H=_.inner||0):(N=_,H=N);let U,S;typeof w!="string"?(U=w.outer,S=w.inner):(U=w,S=w);let F=h*y+c,W=I*y+c,K=y*7;Array.isArray(N)&&(this.drawRoundedSquare(k,W,F,K,U,N,!1,B),Array.isArray(H)&&(K=y*3,F+=y*2,W+=y*2,this.drawRoundedSquare(k,W,F,K,S,H,!0,B)))}isInPositioninZone(B,y,c){return c.some(h=>y>=h.row&&y<=h.row+7&&B>=h.col&&B<=h.col+7)}transformPixelLengthIntoNumberOfCells(B,y){return B/y}isCoordinateInImage(B,y,c,h,I,w,_,k){if(k){const H=this.transformPixelLengthIntoNumberOfCells(I,_),U=this.transformPixelLengthIntoNumberOfCells(w,_),S=this.transformPixelLengthIntoNumberOfCells(c,_)-1,F=this.transformPixelLengthIntoNumberOfCells(h,_)-1;return y>=H-2&&y<=H+S+2&&B>=U-2&&B<=U+F+2}else return!1}shouldComponentUpdate(B){return!se(this.props,B)}componentDidMount(){this.update()}componentDidUpdate(){this.update()}update(){const{value:B,ecLevel:y,enableCORS:c,size:h,quietZone:I,bgColor:w,fgColor:_,logoImage:k,logoWidth:N,logoHeight:H,logoOpacity:U,removeQrCodeBehindLogo:S,qrStyle:F,eyeRadius:W,eyeColor:K}=this.props,Y=Te(0,y);Y.addData(ae.utf16to8(B)),Y.make();const ee=Ae.findDOMNode(this.canvas.current),P=ee.getContext("2d");if(!P)return;const re=+h+2*+I,d=Y.getModuleCount(),b=h/d,l=window.devicePixelRatio||1;ee.height=ee.width=re*l,P.scale(l,l),P.fillStyle=w,P.fillRect(0,0,re,re);const v=+I,t=N||h*.2,m=H||t,r=(h-t)/2,e=(h-m)/2,g=[{row:0,col:0},{row:0,col:d-7},{row:d-7,col:0}];if(P.strokeStyle=_,F==="dots"){P.fillStyle=_;const a=b/2;for(let i=0;i<d;i++)for(let x=0;x<d;x++)Y.isDark(i,x)&&!this.isInPositioninZone(i,x,g)&&!(S&&k&&this.isCoordinateInImage(i,x,t,m,r,e,b,k))&&(P.beginPath(),P.arc(Math.round(x*b)+a+v,Math.round(i*b)+a+v,a/100*75,0,2*Math.PI,!1),P.closePath(),P.fill())}else for(let a=0;a<d;a++)for(let i=0;i<d;i++)if(Y.isDark(a,i)&&!this.isInPositioninZone(a,i,g)&&!(S&&k&&this.isCoordinateInImage(a,i,t,m,r,e,b,k))){P.fillStyle=_;const x=Math.ceil((i+1)*b)-Math.floor(i*b),A=Math.ceil((a+1)*b)-Math.floor(a*b);P.fillRect(Math.round(i*b)+v,Math.round(a*b)+v,x,A)}for(let a=0;a<3;a++){const{row:i,col:x}=g[a];let A=W,E;Array.isArray(A)&&(A=A[a]),typeof A=="number"&&(A=[A,A,A,A]),K?Array.isArray(K)?E=K[a]:E=K:E=_,this.drawPositioningPattern(P,b,v,i,x,E,A)}if(k){const a=new Image;c&&(a.crossOrigin="Anonymous"),a.onload=()=>{P.save(),P.globalAlpha=U,P.drawImage(a,r+v,e+v,t,m),P.restore()},a.src=k}}render(){const B=+this.props.size+2*+this.props.quietZone;return ie.createElement("canvas",{id:this.props.id??"react-qrcode-logo",height:B,width:B,style:{height:B+"px",width:B+"px",borderRadius:this.props.borderRadius},ref:this.canvas})}};oe(ae,"defaultProps",{value:"https://reactjs.org/",ecLevel:"M",enableCORS:!1,size:300,quietZone:10,bgColor:"black",fgColor:"white",logoOpacity:1,removeQrCodeBehindLogo:!0,qrStyle:"dots",eyeColor:"white",eyeRadius:[10,10,10],borderRadius:20});let ne=ae;ne.__docgenInfo={description:"",methods:[{name:"update",docblock:null,modifiers:[],params:[],returns:null}],displayName:"QRCode",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'https://reactjs.org/'",computed:!1}},ecLevel:{required:!1,tsType:{name:"union",raw:"'L' | 'M' | 'Q' | 'H'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"},{name:"literal",value:"'Q'"},{name:"literal",value:"'H'"}]},description:"",defaultValue:{value:"'M'",computed:!1}},enableCORS:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},quietZone:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},fgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'white'",computed:!1}},logoImage:{required:!1,tsType:{name:"string"},description:""},logoWidth:{required:!1,tsType:{name:"number"},description:""},logoHeight:{required:!1,tsType:{name:"number"},description:""},logoOpacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},removeQrCodeBehindLogo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},eyeRadius:{required:!1,tsType:{name:"union",raw:"CornerRadii | [CornerRadii, CornerRadii, CornerRadii]",elements:[{name:"union",raw:"number | [number, number, number, number] | InnerOuterRadii",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]},{name:"signature",type:"object",raw:`{
    inner: number | [number, number, number, number];
    outer: number | [number, number, number, number];
}`,signature:{properties:[{key:"inner",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}},{key:"outer",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}}]}}]},{name:"tuple",raw:"[CornerRadii, CornerRadii, CornerRadii]",elements:[{name:"union",raw:"number | [number, number, number, number] | InnerOuterRadii",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]},{name:"signature",type:"object",raw:`{
    inner: number | [number, number, number, number];
    outer: number | [number, number, number, number];
}`,signature:{properties:[{key:"inner",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}},{key:"outer",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}}]}}]},{name:"union",raw:"number | [number, number, number, number] | InnerOuterRadii",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]},{name:"signature",type:"object",raw:`{
    inner: number | [number, number, number, number];
    outer: number | [number, number, number, number];
}`,signature:{properties:[{key:"inner",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}},{key:"outer",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}}]}}]},{name:"union",raw:"number | [number, number, number, number] | InnerOuterRadii",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]},{name:"signature",type:"object",raw:`{
    inner: number | [number, number, number, number];
    outer: number | [number, number, number, number];
}`,signature:{properties:[{key:"inner",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}},{key:"outer",value:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}],required:!0}}]}}]}]}]},description:"",defaultValue:{value:"[10, 10, 10]",computed:!1}},eyeColor:{required:!1,tsType:{name:"union",raw:"EyeColor | [EyeColor, EyeColor, EyeColor]",elements:[{name:"union",raw:"string | InnerOuterEyeColor",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    inner: string;
    outer: string;
}`,signature:{properties:[{key:"inner",value:{name:"string",required:!0}},{key:"outer",value:{name:"string",required:!0}}]}}]},{name:"tuple",raw:"[EyeColor, EyeColor, EyeColor]",elements:[{name:"union",raw:"string | InnerOuterEyeColor",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    inner: string;
    outer: string;
}`,signature:{properties:[{key:"inner",value:{name:"string",required:!0}},{key:"outer",value:{name:"string",required:!0}}]}}]},{name:"union",raw:"string | InnerOuterEyeColor",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    inner: string;
    outer: string;
}`,signature:{properties:[{key:"inner",value:{name:"string",required:!0}},{key:"outer",value:{name:"string",required:!0}}]}}]},{name:"union",raw:"string | InnerOuterEyeColor",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    inner: string;
    outer: string;
}`,signature:{properties:[{key:"inner",value:{name:"string",required:!0}},{key:"outer",value:{name:"string",required:!0}}]}}]}]}]},description:"",defaultValue:{value:"'white'",computed:!1}},qrStyle:{required:!1,tsType:{name:"union",raw:"'squares' | 'dots'",elements:[{name:"literal",value:"'squares'"},{name:"literal",value:"'dots'"}]},description:"",defaultValue:{value:"'dots'",computed:!1}},style:{required:!1,tsType:{name:"object"},description:""},id:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const Le={component:ne,title:"Development / QRCode"},z=L=>ye.jsx(ne,{value:"https://m24.nobak.net",logoWidth:50,logoHeight:50,logoImage:"https://m24.nobak.net"});z.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68"}};z.__docgenInfo={description:"",methods:[],displayName:"Default"};var ve,ge,be;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`(args: any) => <QRCode value="https://m24.nobak.net" logoWidth={50} logoHeight={50} logoImage='https://m24.nobak.net' />`,...(be=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const Ie=["Default"];export{z as Default,Ie as __namedExportsOrder,Le as default};
