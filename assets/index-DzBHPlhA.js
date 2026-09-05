(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="174",Xc=0,Va=1,qc=2,Ko=1,jo=2,fn=3,Pn=0,De=1,fe=2,An=0,gi=1,Wa=2,Xa=3,qa=4,Yc=5,Vn=100,$c=101,Jc=102,Zc=103,Kc=104,jc=200,Qc=201,tl=202,el=203,wr=204,br=205,nl=206,il=207,sl=208,rl=209,al=210,ol=211,cl=212,ll=213,hl=214,Er=0,Tr=1,Ar=2,yi=3,Cr=4,Rr=5,Pr=6,Ir=7,ma=0,ul=1,dl=2,Cn=0,fl=1,pl=2,ml=3,gl=4,vl=5,_l=6,yl=7,Qo=300,xi=301,Mi=302,Lr=303,Dr=304,Us=306,Ur=1e3,Xn=1001,Nr=1002,Xe=1003,xl=1004,ji=1005,rn=1006,Gs=1007,Tn=1008,_n=1009,tc=1010,ec=1011,ki=1012,ga=1013,qn=1014,pn=1015,qi=1016,va=1017,_a=1018,Si=1020,nc=35902,ic=1021,sc=1022,tn=1023,rc=1024,ac=1025,vi=1026,wi=1027,oc=1028,ya=1029,cc=1030,xa=1031,Ma=1033,bs=33776,Es=33777,Ts=33778,As=33779,Fr=35840,Or=35841,Br=35842,zr=35843,kr=36196,Gr=37492,Hr=37496,Vr=37808,Wr=37809,Xr=37810,qr=37811,Yr=37812,$r=37813,Jr=37814,Zr=37815,Kr=37816,jr=37817,Qr=37818,ta=37819,ea=37820,na=37821,Cs=36492,ia=36494,sa=36495,lc=36283,ra=36284,aa=36285,oa=36286,Ml=3200,Sl=3201,Sa=0,wl=1,En="",Oe="srgb",bi="srgb-linear",Ps="linear",re="srgb",jn=7680,Ya=519,bl=512,El=513,Tl=514,hc=515,Al=516,Cl=517,Rl=518,Pl=519,$a=35044,Ja="300 es",mn=2e3,Is=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Za=1234567;const Ni=Math.PI/180,Gi=180/Math.PI;function Jn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function wa(s,t){return(s%t+t)%t}function Il(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ll(s,t,e){return s!==t?(e-s)/(t-s):0}function Fi(s,t,e){return(1-e)*s+e*t}function Dl(s,t,e,n){return Fi(s,t,1-Math.exp(-e*n))}function Ul(s,t=1){return t-Math.abs(wa(s,t*2)-t)}function Nl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Fl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ol(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Bl(s,t){return s+Math.random()*(t-s)}function zl(s){return s*(.5-Math.random())}function kl(s){s!==void 0&&(Za=s);let t=Za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gl(s){return s*Ni}function Hl(s){return s*Gi}function Vl(s){return(s&s-1)===0&&s!==0}function Wl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ql(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function di(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ze={DEG2RAD:Ni,RAD2DEG:Gi,generateUUID:Jn,clamp:Wt,euclideanModulo:wa,mapLinear:Il,inverseLerp:Ll,lerp:Fi,damp:Dl,pingpong:Ul,smoothstep:Nl,smootherstep:Fl,randInt:Ol,randFloat:Bl,randFloatSpread:zl,seededRandom:kl,degToRad:Gl,radToDeg:Hl,isPowerOfTwo:Vl,ceilPowerOfTwo:Wl,floorPowerOfTwo:Xl,setQuaternionFromProperEuler:ql,normalize:Ce,denormalize:di};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,r,a,o,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],x=i[4],_=i[7],R=i[2],A=i[5],C=i[8];return r[0]=a*v+o*y+c*R,r[3]=a*m+o*x+c*A,r[6]=a*p+o*_+c*C,r[1]=l*v+h*y+u*R,r[4]=l*m+h*x+u*A,r[7]=l*p+h*_+u*C,r[2]=d*v+f*y+g*R,r[5]=d*m+f*x+g*A,r[8]=d*p+f*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Hs.makeScale(t,e)),this}rotate(t){return this.premultiply(Hs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Gt;function uc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yl(){const s=Hi("canvas");return s.style.display="block",s}const Ka={};function kn(s){s in Ka||(Ka[s]=!0,console.warn(s))}function $l(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ja=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kl(){const s={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===En?Ps:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bi]:{primaries:t,whitePoint:n,transfer:Ps,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:re,toXYZ:ja,fromXYZ:Qa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),s}const te=Kl();function vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qn;class jl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Hi("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ql=0;class ba{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Vs(i[a].image)):r.push(Vs(i[a]))}else r=Vs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;class Ie extends Ti{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Xn,i=Xn,r=rn,a=Tn,o=tn,c=_n,l=Ie.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Jn(),this.name="",this.source=new ba(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Qo;Ie.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(f+1)/2,R=(p+1)/2,A=(h+d)/4,C=(u+v)/4,P=(g+m)/4;return x>_&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=C/n):_>R?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=P/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eh extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ba(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,p*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}const _=o*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(to.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(to.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new I,to=new Yi;class $i{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(r,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),ts.subVectors(this.max,Ri),ti.subVectors(t.a,Ri),ei.subVectors(t.b,Ri),ni.subVectors(t.c,Ri),yn.subVectors(ei,ti),xn.subVectors(ni,ei),Un.subVectors(ti,ni);let e=[0,-yn.z,yn.y,0,-xn.z,xn.y,0,-Un.z,Un.y,yn.z,0,-yn.x,xn.z,0,-xn.x,Un.z,0,-Un.x,-yn.y,yn.x,0,-xn.y,xn.x,0,-Un.y,Un.x,0];return!Xs(e,ti,ei,ni,ts)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,ti,ei,ni,ts))?!1:(es.crossVectors(yn,xn),e=[es.x,es.y,es.z],Xs(e,ti,ei,ni,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new I,new I,new I,new I,new I,new I,new I,new I],Ze=new I,Qi=new $i,ti=new I,ei=new I,ni=new I,yn=new I,xn=new I,Un=new I,Ri=new I,ts=new I,es=new I,Nn=new I;function Xs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Nn.fromArray(s,r);const o=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ih=new $i,Pi=new I,qs=new I;class Ns{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ih.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);const e=Pi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(qs)),this.expandByPoint(Pi.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new I,Ys=new I,ns=new I,Mn=new I,$s=new I,is=new I,Js=new I;class fc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ys.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(Ys);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ns),o=Mn.dot(this.direction),c=-Mn.dot(ns),l=Mn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ys).addScaledVector(ns,d),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){$s.subVectors(e,t),is.subVectors(n,t),Js.crossVectors($s,is);let a=this.direction.dot(Js),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mn.subVectors(this.origin,t);const c=o*this.direction.dot(is.crossVectors(Mn,is));if(c<0)return null;const l=o*this.direction.dot($s.cross(Mn));if(l<0||c+l>a)return null;const h=-o*Mn.dot(Js);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,r,a,o,c,l,h,u,d,f,g,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,v,m)}set(t,e,n,i,r,a,o,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sh,t,rh)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Sn.crossVectors(n,Ne),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Sn.crossVectors(n,Ne)),Sn.normalize(),ss.crossVectors(Ne,Sn),i[0]=Sn.x,i[4]=ss.x,i[8]=Ne.x,i[1]=Sn.y,i[5]=ss.y,i[9]=Ne.y,i[2]=Sn.z,i[6]=ss.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],x=n[7],_=n[11],R=n[15],A=i[0],C=i[4],P=i[8],b=i[12],M=i[1],L=i[5],k=i[9],B=i[13],W=i[2],q=i[6],H=i[10],Z=i[14],V=i[3],lt=i[7],pt=i[11],yt=i[15];return r[0]=a*A+o*M+c*W+l*V,r[4]=a*C+o*L+c*q+l*lt,r[8]=a*P+o*k+c*H+l*pt,r[12]=a*b+o*B+c*Z+l*yt,r[1]=h*A+u*M+d*W+f*V,r[5]=h*C+u*L+d*q+f*lt,r[9]=h*P+u*k+d*H+f*pt,r[13]=h*b+u*B+d*Z+f*yt,r[2]=g*A+v*M+m*W+p*V,r[6]=g*C+v*L+m*q+p*lt,r[10]=g*P+v*k+m*H+p*pt,r[14]=g*b+v*B+m*Z+p*yt,r[3]=y*A+x*M+_*W+R*V,r[7]=y*C+x*L+_*q+R*lt,r[11]=y*P+x*k+_*H+R*pt,r[15]=y*b+x*B+_*Z+R*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+v*(+e*c*f-e*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=u*m*l-v*d*l+v*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,_=h*v*l-g*u*l+g*o*f-a*v*f-h*o*p+a*u*p,R=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,A=e*y+n*x+i*_+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=y*C,t[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(o*m*r-v*c*r+v*i*l-n*m*l-o*i*p+n*c*p)*C,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*C,t[4]=x*C,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*C,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*f+e*c*f)*C,t[8]=_*C,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*C,t[12]=R*C,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*o*i-a*v*i-g*n*c+e*v*c+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,y=c*l,x=c*h,_=c*u,R=n.x,A=n.y,C=n.z;return i[0]=(1-(v+p))*R,i[1]=(f+_)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(f-_)*A,i[5]=(1-(d+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+x)*C,i[9]=(m-y)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const a=ii.set(i[4],i[5],i[6]).length(),o=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ke.copy(this);const l=1/r,h=1/a,u=1/o;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===mn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Is)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=mn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*l,f=(n+i)*h;let g,v;if(o===mn)g=(a+r)*u,v=-2*u;else if(o===Is)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new I,Ke=new ce,sh=new I(0,0,0),rh=new I(1,1,1),Sn=new I,ss=new I,Ne=new I,eo=new ce,no=new Yi;class Ye{constructor(t=0,e=0,n=0,i=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return no.setFromEuler(this),this.setFromQuaternion(no,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ah=0;const io=new I,si=new Yi,hn=new ce,rs=new I,Ii=new I,oh=new I,ch=new Yi,so=new I(1,0,0),ro=new I(0,1,0),ao=new I(0,0,1),oo={type:"added"},lh={type:"removed"},ri={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Me extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new I,e=new Ye,n=new Yi,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(so,t)}rotateY(t){return this.rotateOnAxis(ro,t)}rotateZ(t){return this.rotateOnAxis(ao,t)}translateOnAxis(t,e){return io.copy(t).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(so,t)}translateY(t){return this.translateOnAxis(ro,t)}translateZ(t){return this.translateOnAxis(ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ii,rs,this.up):hn.lookAt(rs,Ii,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(hn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lh),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,t,oh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new I(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new I,un=new I,Ks=new I,dn=new I,ai=new I,oi=new I,co=new I,js=new I,Qs=new I,tr=new I,er=new ae,nr=new ae,ir=new ae;class Qe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),un.subVectors(n,e),Ks.subVectors(t,e);const a=je.dot(je),o=je.dot(un),c=je.dot(Ks),l=un.dot(un),h=un.dot(Ks),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return er.setScalar(0),nr.setScalar(0),ir.setScalar(0),er.fromBufferAttribute(t,e),nr.fromBufferAttribute(t,n),ir.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(er,r.x),a.addScaledVector(nr,r.y),a.addScaledVector(ir,r.z),a}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),un.subVectors(t,e),je.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ai.subVectors(i,n),oi.subVectors(r,n),js.subVectors(t,n);const c=ai.dot(js),l=oi.dot(js);if(c<=0&&l<=0)return e.copy(n);Qs.subVectors(t,i);const h=ai.dot(Qs),u=oi.dot(Qs);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ai,a);tr.subVectors(t,r);const f=ai.dot(tr),g=oi.dot(tr);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(oi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return co.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(co,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},as={h:0,s:0,l:0};function sr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=wa(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sr(a,r,t+1/3),this.g=sr(a,r,t),this.b=sr(a,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return te.fromWorkingColorSpace(Te.copy(this),t),Math.round(Wt(Te.r*255,0,255))*65536+Math.round(Wt(Te.g*255,0,255))*256+Math.round(Wt(Te.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Oe){te.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(as);const n=Fi(wn.h,as.h,e),i=Fi(wn.s,as.s,e),r=Fi(wn.l,as.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new At;At.NAMES=mc;let hh=0;class Zn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=gi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=br,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==br&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new I,os=new rt;let uh=0;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$a,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$a&&(t.usage=this.usage),t}}class gc extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vc extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dh=0;const Ve=new ce,rr=new Me,ci=new I,Fe=new $i,Li=new $i,xe=new I;class ye extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uc(t)?vc:gc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Fe.min,Li.min),Fe.expandByPoint(xe),xe.addVectors(Fe.max,Li.max),Fe.expandByPoint(xe)):(Fe.expandByPoint(Li.min),Fe.expandByPoint(Li.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(t,l),xe.add(ci)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,d=new rt,f=new rt,g=new rt,v=new I,m=new I;function p(P,b,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(v),o[b].add(v),o[M].add(v),c[P].add(m),c[b].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,b=y.length;P<b;++P){const M=y[P],L=M.start,k=M.count;for(let B=L,W=L+k;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new I,_=new I,R=new I,A=new I;function C(P){R.fromBufferAttribute(i,P),A.copy(R);const b=o[P];x.copy(b),x.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(A,b);const L=_.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,b=y.length;P<b;++P){const M=y[P],L=M.start,k=M.count;for(let B=L,W=L+k;B<W;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new ce,Fn=new fc,cs=new Ns,ho=new I,ls=new I,hs=new I,us=new I,ar=new I,ds=new I,uo=new I,fs=new I;class F extends Me{constructor(t=new ye,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ds.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ar.fromBufferAttribute(u,t),a?ds.addScaledVector(ar,h):ds.addScaledVector(ar.sub(e),h))}e.add(ds)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(cs.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(cs,ho)===null||Fn.origin.distanceToSquared(ho)>(t.far-t.near)**2))&&(lo.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(lo),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=x;_<R;_+=3){const A=o.getX(_),C=o.getX(_+1),P=o.getX(_+2);i=ps(this,p,t,n,l,h,u,A,C,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);i=ps(this,a,t,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=x;_<R;_+=3){const A=_,C=_+1,P=_+2;i=ps(this,p,t,n,l,h,u,A,C,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;i=ps(this,a,t,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function fh(s,t,e,n,i,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Pn,o),c===null)return null;fs.copy(o),fs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(fs);return l<e.near||l>e.far?null:{distance:l,point:fs.clone(),object:s}}function ps(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,ls),s.getVertexPosition(c,hs),s.getVertexPosition(l,us);const h=fh(s,t,e,n,ls,hs,us,uo);if(h){const u=new I;Qe.getBarycoord(uo,ls,hs,us,u),i&&(h.uv=Qe.getInterpolatedAttribute(i,o,c,l,u,new rt)),r&&(h.uv1=Qe.getInterpolatedAttribute(r,o,c,l,u,new rt)),a&&(h.normal=Qe.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};Qe.getNormal(ls,hs,us,d.normal),h.face=d,h.barycoord=u}return h}class Yt extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(v,m,p,y,x,_,R,A,C,P,b){const M=_/C,L=R/P,k=_/2,B=R/2,W=A/2,q=C+1,H=P+1;let Z=0,V=0;const lt=new I;for(let pt=0;pt<H;pt++){const yt=pt*L-B;for(let Ft=0;Ft<q;Ft++){const jt=Ft*M-k;lt[v]=jt*y,lt[m]=yt*x,lt[p]=W,l.push(lt.x,lt.y,lt.z),lt[v]=0,lt[m]=0,lt[p]=A>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Ft/C),u.push(1-pt/P),Z+=1}}for(let pt=0;pt<P;pt++)for(let yt=0;yt<C;yt++){const Ft=d+yt+q*pt,jt=d+yt+q*(pt+1),J=d+(yt+1)+q*(pt+1),ot=d+(yt+1)+q*pt;c.push(Ft,jt,ot),c.push(jt,J,ot),V+=6}o.addGroup(f,V,b),f+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=Ei(s[e]);for(const i in n)t[i]=n[i]}return t}function ph(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _c(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const mh={clone:Ei,merge:Re};var gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new I,fo=new rt,po=new rt;class Be extends yc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,fo,po),e.subVectors(po,fo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class _h extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(li,hi,t,e);i.layers=this.layers,this.add(i);const r=new Be(li,hi,t,e);r.layers=this.layers,this.add(r);const a=new Be(li,hi,t,e);a.layers=this.layers,this.add(a);const o=new Be(li,hi,t,e);o.layers=this.layers,this.add(o);const c=new Be(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new Be(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xc extends Ie{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yh extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yt(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:An});r.uniforms.tEquirect.value=e;const a=new F(i,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=rn),new _h(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Pt extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xh={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xh)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ls{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new Ls(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mh extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cr=new I,Sh=new I,wh=new Gt;class Gn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=cr.subVectors(n,e).cross(Sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(cr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wh.getNormalMatrix(t),i=this.coplanarPoint(cr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Ns,ms=new I;class Ea{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+a,d+h,m+g,_+y).normalize(),n[3].setComponents(c-a,d-h,m-g,_-y).normalize(),n[4].setComponents(c-o,d-u,m-v,_-x).normalize(),e===mn)n[5].setComponents(c+o,d+u,m+v,_+x).normalize();else if(e===Is)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ta extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mo=new ce,ca=new fc,gs=new Ns,vs=new I;class Mc extends Me{constructor(t=new ye,e=new Ta){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;mo.copy(i).invert(),ca.copy(t.ray).applyMatrix4(mo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);vs.fromBufferAttribute(u,m),go(vs,m,c,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)vs.fromBufferAttribute(u,g),go(vs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function go(s,t,e,n,i,r,a){const o=ca.distanceSqToPoint(s);if(o<e){const c=new I;ca.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Sc extends Ie{constructor(t,e,n,i,r,a,o,c,l,h=vi){if(h!==vi&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=qn),n===void 0&&h===wi&&(n=Si),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ba(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new rt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,i=[],r=[],a=[],o=new I,c=new ce;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Aa extends an{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new rt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bh extends Aa{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ca(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const _s=new I,lr=new Ca,hr=new Ca,ur=new Ca;class Eh extends an{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(_s.subVectors(i[0],i[1]).add(i[0]),l=_s);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(_s.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),lr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),hr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),ur.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(lr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),hr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ur.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(lr.calc(c),hr.calc(c),ur.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vo(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Th(s,t){const e=1-s;return e*e*t}function Ah(s,t){return 2*(1-s)*s*t}function Ch(s,t){return s*s*t}function Oi(s,t,e,n){return Th(s,t)+Ah(s,e)+Ch(s,n)}function Rh(s,t){const e=1-s;return e*e*e*t}function Ph(s,t){const e=1-s;return 3*e*e*s*t}function Ih(s,t){return 3*(1-s)*s*s*t}function Lh(s,t){return s*s*s*t}function Bi(s,t,e,n,i){return Rh(s,t)+Ph(s,e)+Ih(s,n)+Lh(s,i)}class wc extends an{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bi(t,i.x,r.x,a.x,o.x),Bi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dh extends an{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bi(t,i.x,r.x,a.x,o.x),Bi(t,i.y,r.y,a.y,o.y),Bi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bc extends an{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends an{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ec extends an{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,i.x,r.x,a.x),Oi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends an{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,i.x,r.x,a.x),Oi(t,i.y,r.y,a.y),Oi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tc extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(vo(o,c.x,l.x,h.x,u.x),vo(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var la=Object.freeze({__proto__:null,ArcCurve:bh,CatmullRomCurve3:Eh,CubicBezierCurve:wc,CubicBezierCurve3:Dh,EllipseCurve:Aa,LineCurve:bc,LineCurve3:Uh,QuadraticBezierCurve:Ec,QuadraticBezierCurve3:Nh,SplineCurve:Tc});class Fh extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new la[i.type]().fromJSON(i))}return this}}class ha extends Fh{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bc(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ec(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new wc(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Tc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new Aa(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ra extends ye{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Wt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new I,d=new rt,f=new I,g=new I,v=new I;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const x=n+y*h*i,_=Math.sin(x),R=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*_,u.y=t[A].y,u.z=t[A].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),o.push(d.x,d.y);const C=c[3*A+0]*_,P=c[3*A+1],b=c[3*A+0]*R;l.push(C,P,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,R=_,A=_+t.length,C=_+t.length+1,P=_+1;r.push(R,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.points,t.segments,t.phiStart,t.phiLength)}}class Pe extends Ra{constructor(t=1,e=1,n=4,i=8){const r=new ha;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Pe(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ji extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,h=new rt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $t extends ye{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function y(){const _=new I,R=new I;let A=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const b=[],M=P/r,L=M*(e-t)+t;for(let k=0;k<=i;k++){const B=k/i,W=B*c+o,q=Math.sin(W),H=Math.cos(W);R.x=L*q,R.y=-M*n+m,R.z=L*H,u.push(R.x,R.y,R.z),_.set(q,C,H).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-M),b.push(g++)}v.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const M=v[b][P],L=v[b+1][P],k=v[b+1][P+1],B=v[b][P+1];(t>0||b!==0)&&(h.push(M,L,B),A+=3),(e>0||b!==r-1)&&(h.push(L,k,B),A+=3)}l.addGroup(p,A,0),p+=A}function x(_){const R=g,A=new rt,C=new I;let P=0;const b=_===!0?t:e,M=_===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let k=0;k<=i;k++){const W=k/i*c+o,q=Math.cos(W),H=Math.sin(W);C.x=b*H,C.y=m*M,C.z=b*q,u.push(C.x,C.y,C.z),d.push(0,M,0),A.x=q*.5+.5,A.y=H*.5*M+.5,f.push(A.x,A.y),g++}for(let k=0;k<i;k++){const B=R+k,W=L+k;_===!0?h.push(W,W+1,B):h.push(W+1,W,B),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class We extends $t{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new We(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pa extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new I,_=new I,R=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],x),f(e[A+1],_),f(e[A+2],R),c(x,_,R,y)}function c(y,x,_,R){const A=R+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const b=y.clone().lerp(_,P/A),M=x.clone().lerp(_,P/A),L=A-P;for(let k=0;k<=L;k++)k===0&&P===A?C[P][k]=b:C[P][k]=b.clone().lerp(M,k/L)}for(let P=0;P<A;P++)for(let b=0;b<2*(A-P)-1;b++){const M=Math.floor(b/2);b%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function l(y){const x=new I;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(_,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],R=a[y+4],A=Math.max(x,_,R),C=Math.min(x,_,R);A>.9&&C<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const y=new I,x=new I,_=new I,R=new I,A=new rt,C=new rt,P=new rt;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),A.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),R.copy(y).add(x).add(_).divideScalar(3);const L=m(R);v(A,M+0,y,L),v(C,M+2,x,L),v(P,M+4,_,L)}}function v(y,x,_,R){R<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.vertices,t.indices,t.radius,t.details)}}class gn extends Pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gn(t.radius,t.detail)}}class fi extends ha{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ha().fromJSON(i))}return this}}class Oh{static triangulate(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let a=Ac(t,0,r,n,!0);const o=[];if(!a||a.next===a.prev)return o;let c,l,h,u,d,f,g;if(i&&(a=Hh(t,e,a,n)),t.length>80*n){c=h=t[0],l=u=t[1];for(let v=n;v<r;v+=n)d=t[v],f=t[v+1],d<c&&(c=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f);g=Math.max(h-c,u-l),g=g!==0?32767/g:0}return Vi(a,o,n,c,l,g,0),o}}function Ac(s,t,e,n,i){let r,a;if(i===Qh(s,t,e,n)>0)for(r=t;r<e;r+=n)a=_o(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=_o(r,s[r],s[r+1],a);return a&&Fs(a,a.next)&&(Xi(a),a=a.next),a}function $n(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Fs(e,e.next)||he(e.prev,e,e.next)===0)){if(Xi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vi(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Yh(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?zh(s,n,i,r):Bh(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Xi(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=kh($n(s),t,e),Vi(s,t,e,n,i,r,2)):a===2&&Gh(s,t,e,n,i,r):Vi($n(s),t,e,n,i,r,1);break}}}function Bh(s){const t=s.prev,e=s,n=s.next;if(he(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&pi(i,o,r,c,a,l,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zh(s,t,e,n){const i=s.prev,r=s,a=s.next;if(he(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=ua(f,g,t,e,n),y=ua(v,m,t,e,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&pi(o,h,c,u,l,d,x.x,x.y)&&he(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&pi(o,h,c,u,l,d,_.x,_.y)&&he(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&pi(o,h,c,u,l,d,x.x,x.y)&&he(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&pi(o,h,c,u,l,d,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function kh(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Fs(i,r)&&Cc(i,n,n.next,r)&&Wi(i,r)&&Wi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Xi(n),Xi(n.next),n=s=r),n=n.next}while(n!==s);return $n(n)}function Gh(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zh(a,o)){let c=Rc(a,o);a=$n(a,a.next),c=$n(c,c.next),Vi(a,t,e,n,i,r,0),Vi(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Hh(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Ac(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Jh(l));for(i.sort(Vh),r=0;r<i.length;r++)e=Wh(i[r],e);return e}function Vh(s,t){return s.x-t.x}function Wh(s,t){const e=Xh(s,t);if(!e)return t;const n=Rc(e,s);return $n(n,n.next),$n(e,e.next)}function Xh(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&pi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Wi(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&qh(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function qh(s,t){return he(s.prev,s,t.prev)<0&&he(t.next,s,s.next)<0}function Yh(s,t,e,n){let i=s;do i.z===0&&(i.z=ua(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$h(i)}function $h(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function ua(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Jh(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function pi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Zh(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Kh(s,t)&&(Wi(s,t)&&Wi(t,s)&&jh(s,t)&&(he(s.prev,s,t.prev)||he(s,t.prev,t))||Fs(s,t)&&he(s.prev,s,s.next)>0&&he(t.prev,t,t.next)>0)}function he(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Fs(s,t){return s.x===t.x&&s.y===t.y}function Cc(s,t,e,n){const i=xs(he(s,t,e)),r=xs(he(s,t,n)),a=xs(he(e,n,s)),o=xs(he(e,n,t));return!!(i!==r&&a!==o||i===0&&ys(s,e,t)||r===0&&ys(s,n,t)||a===0&&ys(e,s,n)||o===0&&ys(e,t,n))}function ys(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function xs(s){return s>0?1:s<0?-1:0}function Kh(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Wi(s,t){return he(s.prev,s,s.next)<0?he(s,t,s.next)>=0&&he(s,s.prev,t)>=0:he(s,t,s.prev)<0||he(s,s.next,t)<0}function jh(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Rc(s,t){const e=new da(s.i,s.x,s.y),n=new da(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _o(s,t,e,n){const i=new da(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function da(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qh(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Rn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Rn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];yo(t),xo(n,t);let a=t.length;e.forEach(yo);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,xo(n,e[c]);const o=Oh.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function yo(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function xo(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ia extends ye{constructor(t=new fi([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Jt(i,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:tu;let x,_=!1,R,A,C,P;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,R=p.computeFrenetFrames(h,!1),A=new I,C=new I,P=new I),d||(m=0,f=0,g=0,v=0);const b=o.extractPoints(l);let M=b.shape;const L=b.holes;if(!Rn.isClockWise(M)){M=M.reverse();for(let tt=0,Q=L.length;tt<Q;tt++){const T=L[tt];Rn.isClockWise(T)&&(L[tt]=T.reverse())}}const B=Rn.triangulateShape(M,L),W=M;for(let tt=0,Q=L.length;tt<Q;tt++){const T=L[tt];M=M.concat(T)}function q(tt,Q,T){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Q,T)}const H=M.length,Z=B.length;function V(tt,Q,T){let Ct,et,xt;const at=tt.x-Q.x,Ut=tt.y-Q.y,mt=T.x-tt.x,E=T.y-tt.y,S=at*at+Ut*Ut,O=at*E-Ut*mt;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(S),j=Math.sqrt(mt*mt+E*E),$=Q.x-Ut/Y,Tt=Q.y+at/Y,ut=T.x-E/j,_t=T.y+mt/j,Xt=((ut-$)*E-(_t-Tt)*mt)/(at*E-Ut*mt);Ct=$+at*Xt-tt.x,et=Tt+Ut*Xt-tt.y;const it=Ct*Ct+et*et;if(it<=2)return new rt(Ct,et);xt=Math.sqrt(it/2)}else{let Y=!1;at>Number.EPSILON?mt>Number.EPSILON&&(Y=!0):at<-Number.EPSILON?mt<-Number.EPSILON&&(Y=!0):Math.sign(Ut)===Math.sign(E)&&(Y=!0),Y?(Ct=-Ut,et=at,xt=Math.sqrt(S)):(Ct=at,et=Ut,xt=Math.sqrt(S/2))}return new rt(Ct/xt,et/xt)}const lt=[];for(let tt=0,Q=W.length,T=Q-1,Ct=tt+1;tt<Q;tt++,T++,Ct++)T===Q&&(T=0),Ct===Q&&(Ct=0),lt[tt]=V(W[tt],W[T],W[Ct]);const pt=[];let yt,Ft=lt.concat();for(let tt=0,Q=L.length;tt<Q;tt++){const T=L[tt];yt=[];for(let Ct=0,et=T.length,xt=et-1,at=Ct+1;Ct<et;Ct++,xt++,at++)xt===et&&(xt=0),at===et&&(at=0),yt[Ct]=V(T[Ct],T[xt],T[at]);pt.push(yt),Ft=Ft.concat(yt)}for(let tt=0;tt<m;tt++){const Q=tt/m,T=f*Math.cos(Q*Math.PI/2),Ct=g*Math.sin(Q*Math.PI/2)+v;for(let et=0,xt=W.length;et<xt;et++){const at=q(W[et],lt[et],Ct);ct(at.x,at.y,-T)}for(let et=0,xt=L.length;et<xt;et++){const at=L[et];yt=pt[et];for(let Ut=0,mt=at.length;Ut<mt;Ut++){const E=q(at[Ut],yt[Ut],Ct);ct(E.x,E.y,-T)}}}const jt=g+v;for(let tt=0;tt<H;tt++){const Q=d?q(M[tt],Ft[tt],jt):M[tt];_?(C.copy(R.normals[0]).multiplyScalar(Q.x),A.copy(R.binormals[0]).multiplyScalar(Q.y),P.copy(x[0]).add(C).add(A),ct(P.x,P.y,P.z)):ct(Q.x,Q.y,0)}for(let tt=1;tt<=h;tt++)for(let Q=0;Q<H;Q++){const T=d?q(M[Q],Ft[Q],jt):M[Q];_?(C.copy(R.normals[tt]).multiplyScalar(T.x),A.copy(R.binormals[tt]).multiplyScalar(T.y),P.copy(x[tt]).add(C).add(A),ct(P.x,P.y,P.z)):ct(T.x,T.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const Q=tt/m,T=f*Math.cos(Q*Math.PI/2),Ct=g*Math.sin(Q*Math.PI/2)+v;for(let et=0,xt=W.length;et<xt;et++){const at=q(W[et],lt[et],Ct);ct(at.x,at.y,u+T)}for(let et=0,xt=L.length;et<xt;et++){const at=L[et];yt=pt[et];for(let Ut=0,mt=at.length;Ut<mt;Ut++){const E=q(at[Ut],yt[Ut],Ct);_?ct(E.x,E.y+x[h-1].y,x[h-1].x+T):ct(E.x,E.y,u+T)}}}J(),ot();function J(){const tt=i.length/3;if(d){let Q=0,T=H*Q;for(let Ct=0;Ct<Z;Ct++){const et=B[Ct];It(et[2]+T,et[1]+T,et[0]+T)}Q=h+m*2,T=H*Q;for(let Ct=0;Ct<Z;Ct++){const et=B[Ct];It(et[0]+T,et[1]+T,et[2]+T)}}else{for(let Q=0;Q<Z;Q++){const T=B[Q];It(T[2],T[1],T[0])}for(let Q=0;Q<Z;Q++){const T=B[Q];It(T[0]+H*h,T[1]+H*h,T[2]+H*h)}}n.addGroup(tt,i.length/3-tt,0)}function ot(){const tt=i.length/3;let Q=0;Et(W,Q),Q+=W.length;for(let T=0,Ct=L.length;T<Ct;T++){const et=L[T];Et(et,Q),Q+=et.length}n.addGroup(tt,i.length/3-tt,1)}function Et(tt,Q){let T=tt.length;for(;--T>=0;){const Ct=T;let et=T-1;et<0&&(et=tt.length-1);for(let xt=0,at=h+m*2;xt<at;xt++){const Ut=H*xt,mt=H*(xt+1),E=Q+Ct+Ut,S=Q+et+Ut,O=Q+et+mt,Y=Q+Ct+mt;Zt(E,S,O,Y)}}}function ct(tt,Q,T){c.push(tt),c.push(Q),c.push(T)}function It(tt,Q,T){Rt(tt),Rt(Q),Rt(T);const Ct=i.length/3,et=y.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);ee(et[0]),ee(et[1]),ee(et[2])}function Zt(tt,Q,T,Ct){Rt(tt),Rt(Q),Rt(Ct),Rt(Q),Rt(T),Rt(Ct);const et=i.length/3,xt=y.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);ee(xt[0]),ee(xt[1]),ee(xt[3]),ee(xt[1]),ee(xt[2]),ee(xt[3])}function Rt(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function ee(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return eu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new la[i.type]().fromJSON(i)),new Ia(n,t.options)}}const tu={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new rt(r,a),new rt(o,c),new rt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new rt(a,1-c),new rt(l,1-u),new rt(d,1-g),new rt(v,1-p)]:[new rt(o,1-c),new rt(h,1-u),new rt(f,1-g),new rt(m,1-p)]}};function eu(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ke extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,_=y+l*(p+1),R=y+1+l*(p+1),A=y+1+l*p;f.push(x,_,A),f.push(_,R,A)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}class La extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new I,g=new rt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,_=y+n+1,R=y+n+2,A=y+1;o.push(x,_,A),o.push(_,R,A)}}this.setIndex(o),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zi extends ye{constructor(t=new fi([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Jt(i,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Rn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Rn.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Rn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],x=y[0]+u,_=y[1]+u,R=y[2]+u;n.push(x,_,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return nu(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new zi(n,t.curveSegments)}}function nu(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class pe extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let _=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+_,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=h[p][y+1],_=h[p][y],R=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(x,_,A),(p!==n-1||c<Math.PI)&&f.push(_,R,A)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Os extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sn extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class st extends Zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iu extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class su extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ru{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const au=new ru;class Da{constructor(t){this.manager=t!==void 0?t:au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Da.DEFAULT_MATERIAL_NAME="__DEFAULT";class ou extends Da{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Mo.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Hi("img");function c(){h(),Mo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class cu extends Da{constructor(t){super(t)}load(t,e,n,i){const r=new Ie,a=new ou(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ua extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lu extends Ua{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const dr=new ce,So=new I,wo=new I;class Pc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;So.setFromMatrixPosition(t.matrixWorld),e.position.copy(So),wo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wo),e.updateMatrixWorld(),dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bo=new ce,Di=new I,fr=new I;class hu extends Pc{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Di.setFromMatrixPosition(t.matrixWorld),n.position.copy(Di),fr.copy(n.position),fr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fr),n.updateMatrixWorld(),i.makeTranslation(-Di.x,-Di.y,-Di.z),bo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo)}}class Ds extends Ua{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ic extends yc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class uu extends Pc{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class du extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new uu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fu extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class pu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eo(){return performance.now()}function To(s,t,e,n){const i=mu(n);switch(e){case ic:return s*t;case rc:return s*t;case ac:return s*t*2;case oc:return s*t/i.components*i.byteLength;case ya:return s*t/i.components*i.byteLength;case cc:return s*t*2/i.components*i.byteLength;case xa:return s*t*2/i.components*i.byteLength;case sc:return s*t*3/i.components*i.byteLength;case tn:return s*t*4/i.components*i.byteLength;case Ma:return s*t*4/i.components*i.byteLength;case bs:case Es:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ts:case As:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Or:case zr:return Math.max(s,16)*Math.max(t,8)/4;case Fr:case Br:return Math.max(s,8)*Math.max(t,8)/2;case kr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $r:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ea:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Cs:case ia:case sa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lc:case ra:return Math.ceil(s/4)*Math.ceil(t/4)*8;case aa:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mu(s){switch(s){case _n:case tc:return{byteLength:1,components:1};case ki:case ec:case qi:return{byteLength:2,components:1};case va:case _a:return{byteLength:2,components:4};case qn:case ga:case pn:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gu(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",$u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,af=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,df=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ef=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:vu,alphahash_pars_fragment:_u,alphamap_fragment:yu,alphamap_pars_fragment:xu,alphatest_fragment:Mu,alphatest_pars_fragment:Su,aomap_fragment:wu,aomap_pars_fragment:bu,batching_pars_vertex:Eu,batching_vertex:Tu,begin_vertex:Au,beginnormal_vertex:Cu,bsdfs:Ru,iridescence_fragment:Pu,bumpmap_pars_fragment:Iu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Nu,color_fragment:Fu,color_pars_fragment:Ou,color_pars_vertex:Bu,color_vertex:zu,common:ku,cube_uv_reflection_fragment:Gu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:qu,colorspace_fragment:Yu,colorspace_pars_fragment:$u,envmap_fragment:Ju,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ku,envmap_pars_vertex:ju,envmap_physical_pars_fragment:ld,envmap_vertex:Qu,fog_vertex:td,fog_pars_vertex:ed,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:ud,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:vd,lights_fragment_end:_d,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:wd,map_pars_fragment:bd,map_particle_fragment:Ed,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Rd,morphcolor_vertex:Pd,morphnormal_vertex:Id,morphtarget_pars_vertex:Ld,morphtarget_vertex:Dd,normal_fragment_begin:Ud,normal_fragment_maps:Nd,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:Bd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:$d,dithering_pars_fragment:Jd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:tf,shadowmask_pars_fragment:ef,skinbase_vertex:nf,skinning_pars_vertex:sf,skinning_vertex:rf,skinnormal_vertex:af,specularmap_fragment:of,specularmap_pars_fragment:cf,tonemapping_fragment:lf,tonemapping_pars_fragment:hf,transmission_fragment:uf,transmission_pars_fragment:df,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:vf,background_frag:_f,backgroundCube_vert:yf,backgroundCube_frag:xf,cube_vert:Mf,cube_frag:Sf,depth_vert:wf,depth_frag:bf,distanceRGBA_vert:Ef,distanceRGBA_frag:Tf,equirect_vert:Af,equirect_frag:Cf,linedashed_vert:Rf,linedashed_frag:Pf,meshbasic_vert:If,meshbasic_frag:Lf,meshlambert_vert:Df,meshlambert_frag:Uf,meshmatcap_vert:Nf,meshmatcap_frag:Ff,meshnormal_vert:Of,meshnormal_frag:Bf,meshphong_vert:zf,meshphong_frag:kf,meshphysical_vert:Gf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:Wf,points_vert:Xf,points_frag:qf,shadow_vert:Yf,shadow_frag:$f,sprite_vert:Jf,sprite_frag:Zf},ht={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},nn={basic:{uniforms:Re([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Re([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Re([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Re([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Re([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new At(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Re([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Re([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Re([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Re([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Re([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Re([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Re([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Re([ht.lights,ht.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};nn.physical={uniforms:Re([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ms={r:0,b:0,g:0},Bn=new Ye,Kf=new ce;function jf(s,t,e,n,i,r,a){const o=new At(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const R=g(x);R===null?p(o,c):R&&R.isColor&&(p(R,1),_=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===Us)?(h===void 0&&(h=new F(new Yt(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ei(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bn.copy(_.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler(Bn)),h.material.toneMapped=te.getTransfer(R.colorSpace)!==re,(u!==R||d!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new F(new ke(2,2),new In({name:"BackgroundMaterial",uniforms:Ei(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(R.colorSpace)!==re,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(Ms,_c(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m,dispose:y}}function Qf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,L,k,B,W){let q=!1;const H=u(B,k,L);r!==H&&(r=H,l(r.object)),q=f(M,B,k,W),q&&g(M,B,k,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(M,L,k,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,k){const B=k.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let H=q[B];return H===void 0&&(H=d(c()),q[B]=H),H}function d(M){const L=[],k=[],B=[];for(let W=0;W<e;W++)L[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,L,k,B){const W=r.attributes,q=L.attributes;let H=0;const Z=k.getAttributes();for(const V in Z)if(Z[V].location>=0){const pt=W[V];let yt=q[V];if(yt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function g(M,L,k,B){const W={},q=L.attributes;let H=0;const Z=k.getAttributes();for(const V in Z)if(Z[V].location>=0){let pt=q[V];pt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));const yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),W[V]=yt,H++}r.attributes=W,r.attributesNum=H,r.index=B}function v(){const M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const k=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),W[M]!==L&&(s.vertexAttribDivisor(M,L),W[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let k=0,B=L.length;k<B;k++)L[k]!==M[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function x(M,L,k,B,W,q,H){H===!0?s.vertexAttribIPointer(M,L,k,W,q):s.vertexAttribPointer(M,L,k,B,W,q)}function _(M,L,k,B){v();const W=B.attributes,q=k.getAttributes(),H=L.defaultAttributeValues;for(const Z in q){const V=q[Z];if(V.location>=0){let lt=W[Z];if(lt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const pt=lt.normalized,yt=lt.itemSize,Ft=t.get(lt);if(Ft===void 0)continue;const jt=Ft.buffer,J=Ft.type,ot=Ft.bytesPerElement,Et=J===s.INT||J===s.UNSIGNED_INT||lt.gpuType===ga;if(lt.isInterleavedBufferAttribute){const ct=lt.data,It=ct.stride,Zt=lt.offset;if(ct.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)p(V.location+Rt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)m(V.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Rt=0;Rt<V.locationSize;Rt++)x(V.location+Rt,yt/V.locationSize,J,pt,It*ot,(Zt+yt/V.locationSize*Rt)*ot,Et)}else{if(lt.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)p(V.location+ct,lt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let ct=0;ct<V.locationSize;ct++)x(V.location+ct,yt/V.locationSize,J,pt,yt*ot,yt/V.locationSize*ct*ot,Et)}}else if(H!==void 0){const pt=H[Z];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(V.location,pt);break;case 3:s.vertexAttrib3fv(V.location,pt);break;case 4:s.vertexAttrib4fv(V.location,pt);break;default:s.vertexAttrib1fv(V.location,pt)}}}}y()}function R(){P();for(const M in n){const L=n[M];for(const k in L){const B=L[k];for(const W in B)h(B[W].object),delete B[W];delete L[k]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const B=L[k];for(const W in B)h(B[W].object),delete B[W];delete L[k]}delete n[M.id]}function C(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const B=k[M.id];for(const W in B)h(B[W].object),delete B[W];delete k[M.id]}}function P(){b(),a=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function tp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ep(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==tn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_n&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!P)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:R,maxSamples:A}}function np(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Gn,o=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let _=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let R=0;R!==x;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ip(s){let t=new WeakMap;function e(a,o){return o===Lr?a.mapping=xi:o===Dr&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lr||o===Dr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yh(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const mi=4,Ao=[.125,.215,.35,.446,.526,.582],Wn=20,pr=new Ic,Co=new At;let mr=null,gr=0,vr=0,_r=!1;const Hn=(1+Math.sqrt(5))/2,ui=1/Hn,Ro=[new I(-Hn,ui,0),new I(Hn,ui,0),new I(-ui,0,Hn),new I(ui,0,Hn),new I(0,Hn,-ui),new I(0,Hn,ui),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],sp=new I;class Po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=sp}=r;mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mr,gr,vr),this._renderer.xr.enabled=_r,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:qi,format:tn,colorSpace:bi,depthBuffer:!1},i=Io(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Io(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rp(r)),this._blurMaterial=ap(r,t,e)}return i}_compileMaterial(t){const e=new F(this._lodPlanes[0],t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,n,i,r){const c=new Be(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Co),u.toneMapping=Cn,u.autoClear=!1;const g=new en({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),v=new F(new Yt,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(Co),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const _=this._cubeSize;Ss(i,x*_,y>2?_:0,_,_),u.setRenderTarget(i),m&&u.render(v,c),u.render(t,c)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===xi||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new F(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Ss(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ro[(i-r-1)%Ro.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new F(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Wn;m>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const p=[];let y=0;for(let C=0;C<Wn;++C){const P=C/v,b=Math.exp(-P*P/2);p.push(b),C===0?y+=b:C<m&&(y+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[i],R=3*_*(i>x-mi?i-x+mi:0),A=4*(this._cubeSize-_);Ss(e,R,A,3*_,2*_),c.setRenderTarget(e),c.render(u,pr)}}function rp(s){const t=[],e=[],n=[];let i=s;const r=s-mi+1+Ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-mi?c=Ao[a-s+mi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(b,v*g*A),x.set(d,m*g*A);const M=[A,A,A,A,A,A];_.set(M,p*g*A)}const R=new ye;R.setAttribute("position",new qe(y,v)),R.setAttribute("uv",new qe(x,m)),R.setAttribute("faceIndex",new qe(_,p)),t.push(R),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Io(s,t,e){const n=new Yn(s,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ap(s,t,e){const n=new Float32Array(Wn),i=new I(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Lo(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Do(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function op(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lr||c===Dr,h=c===xi||c===Mi;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Po(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Po(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&kn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lp(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){const R=y[x+0],A=y[x+1],C=y[x+2];d.push(R,A,A,C,C,R)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const R=x+0,A=x+1,C=x+2;d.push(R,A,A,C,C,R)}}else return;const m=new(uc(d)?vc:gc)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function hp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function up(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dp(s,t,e){const n=new WeakMap,i=new ae;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let R=o.attributes.position.count*_,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*A*4*u),P=new dc(C,R,A,u);P.type=pn,P.needsUpdate=!0;const b=_*4;for(let L=0;L<u;L++){const k=p[L],B=y[L],W=x[L],q=R*A*4*L;for(let H=0;H<k.count;H++){const Z=H*b;g===!0&&(i.fromBufferAttribute(k,H),C[q+Z+0]=i.x,C[q+Z+1]=i.y,C[q+Z+2]=i.z,C[q+Z+3]=0),v===!0&&(i.fromBufferAttribute(B,H),C[q+Z+4]=i.x,C[q+Z+5]=i.y,C[q+Z+6]=i.z,C[q+Z+7]=0),m===!0&&(i.fromBufferAttribute(W,H),C[q+Z+8]=i.x,C[q+Z+9]=i.y,C[q+Z+10]=i.z,C[q+Z+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new rt(R,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function fp(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Dc=new Ie,Uo=new Sc(1,1),Uc=new dc,Nc=new nh,Fc=new xc,No=[],Fo=[],Oo=new Float32Array(16),Bo=new Float32Array(9),zo=new Float32Array(4);function Ai(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=No[i];if(r===void 0&&(r=new Float32Array(i),No[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Bs(s,t){let e=Fo[t];e===void 0&&(e=new Int32Array(t),Fo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function pp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function _p(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;zo.set(n),s.uniformMatrix2fv(this.addr,!1,zo),_e(e,n)}}function yp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Bo.set(n),s.uniformMatrix3fv(this.addr,!1,Bo),_e(e,n)}}function xp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Oo.set(n),s.uniformMatrix4fv(this.addr,!1,Oo),_e(e,n)}}function Mp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function Ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function Ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uo.compareFunction=hc,r=Uo):r=Dc,e.setTexture2D(t||r,i)}function Pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nc,i)}function Ip(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fc,i)}function Lp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Uc,i)}function Dp(s){switch(s){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return vp;case 35674:return _p;case 35675:return yp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return wp;case 35669:case 35673:return bp;case 5125:return Ep;case 36294:return Tp;case 36295:return Ap;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Lp}}function Up(s,t){s.uniform1fv(this.addr,t)}function Np(s,t){const e=Ai(t,this.size,2);s.uniform2fv(this.addr,e)}function Fp(s,t){const e=Ai(t,this.size,3);s.uniform3fv(this.addr,e)}function Op(s,t){const e=Ai(t,this.size,4);s.uniform4fv(this.addr,e)}function Bp(s,t){const e=Ai(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function zp(s,t){const e=Ai(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function kp(s,t){const e=Ai(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gp(s,t){s.uniform1iv(this.addr,t)}function Hp(s,t){s.uniform2iv(this.addr,t)}function Vp(s,t){s.uniform3iv(this.addr,t)}function Wp(s,t){s.uniform4iv(this.addr,t)}function Xp(s,t){s.uniform1uiv(this.addr,t)}function qp(s,t){s.uniform2uiv(this.addr,t)}function Yp(s,t){s.uniform3uiv(this.addr,t)}function $p(s,t){s.uniform4uiv(this.addr,t)}function Jp(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Dc,r[a])}function Zp(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Nc,r[a])}function Kp(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Fc,r[a])}function jp(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Uc,r[a])}function Qp(s){switch(s){case 5126:return Up;case 35664:return Np;case 35665:return Fp;case 35666:return Op;case 35674:return Bp;case 35675:return zp;case 35676:return kp;case 5124:case 35670:return Gp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return jp}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dp(e.type)}}class em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qp(e.type)}}class nm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const yr=/(\w+)(\])?(\[|\.)?/g;function ko(s,t){s.seq.push(t),s.map[t.id]=t}function im(s,t,e){const n=s.name,i=n.length;for(yr.lastIndex=0;;){const r=yr.exec(n),a=yr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ko(e,l===void 0?new tm(o,s,t):new em(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new nm(o),ko(e,u)),e=u}}}class Rs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);im(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Go(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const sm=37297;let rm=0;function am(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ho=new Gt;function om(s){te._getMatrix(Ho,te.workingColorSpace,s);const t=`mat3( ${Ho.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Ps:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+am(s.getShaderSource(t),a)}else return i}function cm(s,t){const e=om(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lm(s,t){let e;switch(t){case fl:e="Linear";break;case pl:e="Reinhard";break;case ml:e="Cineon";break;case gl:e="ACESFilmic";break;case _l:e="AgX";break;case yl:e="Neutral";break;case vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ws=new I;function hm(){te.getLuminanceCoefficients(ws);const s=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function um(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function dm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ui(s){return s!==""}function Wo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(s){return s.replace(pm,gm)}const mm=new Map;function gm(s,t){let e=Vt[t];if(e===void 0){const n=mm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(s){return s.replace(vm,_m)}function _m(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ym(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ko?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case Mi:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Sm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case ul:t="ENVMAP_BLENDING_MIX";break;case dl:t="ENVMAP_BLENDING_ADD";break}return t}function wm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function bm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ym(e),l=xm(e),h=Mm(e),u=Sm(e),d=wm(e),f=um(e),g=dm(r),v=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ui).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ui).join(`
`),p.length>0&&(p+=`
`)):(m=[Yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),p=[Yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,cm("linearToOutputTexel",e.outputColorSpace),hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),a=fa(a),a=Wo(a,e),a=Xo(a,e),o=fa(o),o=Wo(o,e),o=Xo(o,e),a=qo(a),o=qo(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,_=y+p+o,R=Go(i,i.VERTEX_SHADER,x),A=Go(i,i.FRAGMENT_SHADER,_);i.attachShader(v,R),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(L){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(A).trim();let q=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,A);else{const Z=Vo(i,R,"vertex"),V=Vo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Z+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:q,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(R),i.deleteShader(A),P=new Rs(i,v),b=fm(i,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,sm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let Em=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Am(t),e.set(t,n)),n}}class Am{constructor(t){this.id=Em++,this.code=t,this.usedTimes=0}}function Cm(s,t,e,n,i,r,a){const o=new pc,c=new Tm,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,k,B){const W=k.fog,q=B.geometry,H=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),V=Z&&Z.mapping===Us?Z.image.height:null,lt=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=pt!==void 0?pt.length:0;let Ft=0;q.morphAttributes.position!==void 0&&(Ft=1),q.morphAttributes.normal!==void 0&&(Ft=2),q.morphAttributes.color!==void 0&&(Ft=3);let jt,J,ot,Et;if(lt){const se=nn[lt];jt=se.vertexShader,J=se.fragmentShader}else jt=b.vertexShader,J=b.fragmentShader,c.update(b),ot=c.getVertexShaderID(b),Et=c.getFragmentShaderID(b);const ct=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Zt=B.isInstancedMesh===!0,Rt=B.isBatchedMesh===!0,ee=!!b.map,tt=!!b.matcap,Q=!!Z,T=!!b.aoMap,Ct=!!b.lightMap,et=!!b.bumpMap,xt=!!b.normalMap,at=!!b.displacementMap,Ut=!!b.emissiveMap,mt=!!b.metalnessMap,E=!!b.roughnessMap,S=b.anisotropy>0,O=b.clearcoat>0,Y=b.dispersion>0,j=b.iridescence>0,$=b.sheen>0,Tt=b.transmission>0,ut=S&&!!b.anisotropyMap,_t=O&&!!b.clearcoatMap,Xt=O&&!!b.clearcoatNormalMap,it=O&&!!b.clearcoatRoughnessMap,St=j&&!!b.iridescenceMap,Nt=j&&!!b.iridescenceThicknessMap,Ot=$&&!!b.sheenColorMap,wt=$&&!!b.sheenRoughnessMap,qt=!!b.specularMap,Ht=!!b.specularColorMap,oe=!!b.specularIntensityMap,D=Tt&&!!b.transmissionMap,dt=Tt&&!!b.thicknessMap,X=!!b.gradientMap,K=!!b.alphaMap,vt=b.alphaTest>0,gt=!!b.alphaHash,kt=!!b.extensions;let ue=Cn;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ue=s.toneMapping);const be={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:J,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:Et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&B._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&B.instanceColor!==null,instancingMorph:Zt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:bi,alphaToCoverage:!!b.alphaToCoverage,map:ee,matcap:tt,envMap:Q,envMapMode:Q&&Z.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:Ct,bumpMap:et,normalMap:xt,displacementMap:d&&at,emissiveMap:Ut,normalMapObjectSpace:xt&&b.normalMapType===wl,normalMapTangentSpace:xt&&b.normalMapType===Sa,metalnessMap:mt,roughnessMap:E,anisotropy:S,anisotropyMap:ut,clearcoat:O,clearcoatMap:_t,clearcoatNormalMap:Xt,clearcoatRoughnessMap:it,dispersion:Y,iridescence:j,iridescenceMap:St,iridescenceThicknessMap:Nt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:wt,specularMap:qt,specularColorMap:Ht,specularIntensityMap:oe,transmission:Tt,transmissionMap:D,thicknessMap:dt,gradientMap:X,opaque:b.transparent===!1&&b.blending===gi&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:vt,alphaHash:gt,combine:b.combine,mapUv:ee&&v(b.map.channel),aoMapUv:T&&v(b.aoMap.channel),lightMapUv:Ct&&v(b.lightMap.channel),bumpMapUv:et&&v(b.bumpMap.channel),normalMapUv:xt&&v(b.normalMap.channel),displacementMapUv:at&&v(b.displacementMap.channel),emissiveMapUv:Ut&&v(b.emissiveMap.channel),metalnessMapUv:mt&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:ut&&v(b.anisotropyMap.channel),clearcoatMapUv:_t&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(b.sheenRoughnessMap.channel),specularMapUv:qt&&v(b.specularMap.channel),specularColorMapUv:Ht&&v(b.specularColorMap.channel),specularIntensityMapUv:oe&&v(b.specularIntensityMap.channel),transmissionMapUv:D&&v(b.transmissionMap.channel),thicknessMapUv:dt&&v(b.thicknessMap.channel),alphaMapUv:K&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(ee||K),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ee&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:Ut&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fe,flipSided:b.side===De,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const M=g[b.type];let L;if(M){const k=nn[M];L=mh.clone(k.uniforms)}else L=b.uniforms;return L}function R(b,M){let L;for(let k=0,B=h.length;k<B;k++){const W=h[k];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new bm(s,M,b,r),h.push(L)),L}function A(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function Rm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Pm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $o(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Jo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Pm),n.length>1&&n.sort(d||$o),i.length>1&&i.sort(d||$o)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Im(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Jo,s.set(n,[a])):i>=r.length?(a=new Jo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new At};break;case"SpotLight":e={position:new I,direction:new I,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Dm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Um=0;function Nm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Fm(s){const t=new Lm,e=Dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new ce,a=new ce;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,R=0,A=0,C=0;l.sort(Nm);for(let b=0,M=l.length;b<M;b++){const L=l[b],k=L.color,B=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],B);C++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(k).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[v]=H;const Z=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,Z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=Z.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=q,_++}v++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(k).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Z=L.shadow,V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(B),H.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=C,n.version=Um++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Zo(s){const t=new Fm(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Om(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Zo(s),t.set(i,[o])):r>=a.length?(o=new Zo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function km(s,t,e){let n=new Ea;const i=new rt,r=new rt,a=new ae,o=new iu({depthPacking:Sl}),c=new su,l={},h=e.maxTextureSize,u={[Pn]:De,[De]:Pn,[fe]:fe},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Bm,fragmentShader:zm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new F(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),k=s.state;k.setBlending(An),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==fn&&this.type===fn,W=p===fn&&this.type!==fn;for(let q=0,H=A.length;q<H;q++){const Z=A[q],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const lt=V.getFrameExtents();if(i.multiply(lt),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/lt.x),i.x=r.x*lt.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/lt.y),i.y=r.y*lt.y,V.mapSize.y=r.y)),V.map===null||B===!0||W===!0){const yt=this.type!==fn?{minFilter:Xe,magFilter:Xe}:{};V.map!==null&&V.map.dispose(),V.map=new Yn(i.x,i.y,yt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const pt=V.getViewportCount();for(let yt=0;yt<pt;yt++){const Ft=V.getViewport(yt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),k.viewport(a),V.updateMatrices(Z,yt),n=V.getFrustum(),_(C,P,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===fn&&y(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,L)};function y(A,C){const P=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,P,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,P,f,v,null)}function x(A,C,P,b){let M=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,B=C.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let q=W[B];q===void 0&&(q=M.clone(),W[B]=q,C.addEventListener("dispose",R)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,b===fn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=s.properties.get(M);k.light=P}return M}function _(A,C,P,b,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=t.update(A),W=A.material;if(Array.isArray(W)){const q=B.groups;for(let H=0,Z=q.length;H<Z;H++){const V=q[H],lt=W[V.materialIndex];if(lt&&lt.visible){const pt=x(A,lt,b,M);A.onBeforeShadow(s,A,C,P,B,pt,V),s.renderBufferDirect(P,null,B,pt,A,V),A.onAfterShadow(s,A,C,P,B,pt,V)}}}else if(W.visible){const q=x(A,W,b,M);A.onBeforeShadow(s,A,C,P,B,q,null),s.renderBufferDirect(P,null,B,q,A,null),A.onAfterShadow(s,A,C,P,B,q,null)}}const k=A.children;for(let B=0,W=k.length;B<W;B++)_(k[B],C,P,b,M)}function R(A){A.target.removeEventListener("dispose",R);for(const P in l){const b=l[P],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Gm={[Er]:Tr,[Ar]:Pr,[Cr]:Ir,[yi]:Rr,[Tr]:Er,[Pr]:Ar,[Ir]:Cr,[Rr]:yi};function Hm(s,t){function e(){let D=!1;const dt=new ae;let X=null;const K=new ae(0,0,0,0);return{setMask:function(vt){X!==vt&&!D&&(s.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){D=vt},setClear:function(vt,gt,kt,ue,be){be===!0&&(vt*=ue,gt*=ue,kt*=ue),dt.set(vt,gt,kt,ue),K.equals(dt)===!1&&(s.clearColor(vt,gt,kt,ue),K.copy(dt))},reset:function(){D=!1,X=null,K.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,X=null,K=null,vt=null;return{setReversed:function(gt){if(dt!==gt){const kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const ue=vt;vt=null,this.setClear(ue)}dt=gt},getReversed:function(){return dt},setTest:function(gt){gt?ct(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(gt){X!==gt&&!D&&(s.depthMask(gt),X=gt)},setFunc:function(gt){if(dt&&(gt=Gm[gt]),K!==gt){switch(gt){case Er:s.depthFunc(s.NEVER);break;case Tr:s.depthFunc(s.ALWAYS);break;case Ar:s.depthFunc(s.LESS);break;case yi:s.depthFunc(s.LEQUAL);break;case Cr:s.depthFunc(s.EQUAL);break;case Rr:s.depthFunc(s.GEQUAL);break;case Pr:s.depthFunc(s.GREATER);break;case Ir:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=gt}},setLocked:function(gt){D=gt},setClear:function(gt){vt!==gt&&(dt&&(gt=1-gt),s.clearDepth(gt),vt=gt)},reset:function(){D=!1,X=null,K=null,vt=null,dt=!1}}}function i(){let D=!1,dt=null,X=null,K=null,vt=null,gt=null,kt=null,ue=null,be=null;return{setTest:function(se){D||(se?ct(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(se){dt!==se&&!D&&(s.stencilMask(se),dt=se)},setFunc:function(se,$e,on){(X!==se||K!==$e||vt!==on)&&(s.stencilFunc(se,$e,on),X=se,K=$e,vt=on)},setOp:function(se,$e,on){(gt!==se||kt!==$e||ue!==on)&&(s.stencilOp(se,$e,on),gt=se,kt=$e,ue=on)},setLocked:function(se){D=se},setClear:function(se){be!==se&&(s.clearStencil(se),be=se)},reset:function(){D=!1,dt=null,X=null,K=null,vt=null,gt=null,kt=null,ue=null,be=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,R=null,A=null,C=new At(0,0,0),P=0,b=!1,M=null,L=null,k=null,B=null,W=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Z>=2);let lt=null,pt={};const yt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),jt=new ae().fromArray(yt),J=new ae().fromArray(Ft);function ot(D,dt,X,K){const vt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(D,gt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<X;kt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(dt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return gt}const Et={};Et[s.TEXTURE_2D]=ot(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[s.TEXTURE_2D_ARRAY]=ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(s.DEPTH_TEST),a.setFunc(yi),et(!1),xt(Va),ct(s.CULL_FACE),T(An);function ct(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function It(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Zt(D,dt){return u[D]!==dt?(s.bindFramebuffer(D,dt),u[D]=dt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Rt(D,dt){let X=f,K=!1;if(D){X=d.get(dt),X===void 0&&(X=[],d.set(dt,X));const vt=D.textures;if(X.length!==vt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,kt=vt.length;gt<kt;gt++)X[gt]=s.COLOR_ATTACHMENT0+gt;X.length=vt.length,K=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,K=!0);K&&s.drawBuffers(X)}function ee(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const tt={[Vn]:s.FUNC_ADD,[$c]:s.FUNC_SUBTRACT,[Jc]:s.FUNC_REVERSE_SUBTRACT};tt[Zc]=s.MIN,tt[Kc]=s.MAX;const Q={[jc]:s.ZERO,[Qc]:s.ONE,[tl]:s.SRC_COLOR,[wr]:s.SRC_ALPHA,[al]:s.SRC_ALPHA_SATURATE,[sl]:s.DST_COLOR,[nl]:s.DST_ALPHA,[el]:s.ONE_MINUS_SRC_COLOR,[br]:s.ONE_MINUS_SRC_ALPHA,[rl]:s.ONE_MINUS_DST_COLOR,[il]:s.ONE_MINUS_DST_ALPHA,[ol]:s.CONSTANT_COLOR,[cl]:s.ONE_MINUS_CONSTANT_COLOR,[ll]:s.CONSTANT_ALPHA,[hl]:s.ONE_MINUS_CONSTANT_ALPHA};function T(D,dt,X,K,vt,gt,kt,ue,be,se){if(D===An){v===!0&&(It(s.BLEND),v=!1);return}if(v===!1&&(ct(s.BLEND),v=!0),D!==Yc){if(D!==m||se!==b){if((p!==Vn||_!==Vn)&&(s.blendEquation(s.FUNC_ADD),p=Vn,_=Vn),se)switch(D){case gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.ONE,s.ONE);break;case Xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,R=null,A=null,C.set(0,0,0),P=0,m=D,b=se}return}vt=vt||dt,gt=gt||X,kt=kt||K,(dt!==p||vt!==_)&&(s.blendEquationSeparate(tt[dt],tt[vt]),p=dt,_=vt),(X!==y||K!==x||gt!==R||kt!==A)&&(s.blendFuncSeparate(Q[X],Q[K],Q[gt],Q[kt]),y=X,x=K,R=gt,A=kt),(ue.equals(C)===!1||be!==P)&&(s.blendColor(ue.r,ue.g,ue.b,be),C.copy(ue),P=be),m=D,b=!1}function Ct(D,dt){D.side===fe?It(s.CULL_FACE):ct(s.CULL_FACE);let X=D.side===De;dt&&(X=!X),et(X),D.blending===gi&&D.transparent===!1?T(An):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function xt(D){D!==Xc?(ct(s.CULL_FACE),D!==L&&(D===Va?s.cullFace(s.BACK):D===qc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),L=D}function at(D){D!==k&&(H&&s.lineWidth(D),k=D)}function Ut(D,dt,X){D?(ct(s.POLYGON_OFFSET_FILL),(B!==dt||W!==X)&&(s.polygonOffset(dt,X),B=dt,W=X)):It(s.POLYGON_OFFSET_FILL)}function mt(D){D?ct(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+q-1),lt!==D&&(s.activeTexture(D),lt=D)}function S(D,dt,X){X===void 0&&(lt===null?X=s.TEXTURE0+q-1:X=lt);let K=pt[X];K===void 0&&(K={type:void 0,texture:void 0},pt[X]=K),(K.type!==D||K.texture!==dt)&&(lt!==X&&(s.activeTexture(X),lt=X),s.bindTexture(D,dt||Et[D]),K.type=D,K.texture=dt)}function O(){const D=pt[lt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){jt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),jt.copy(D))}function wt(D){J.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function qt(D,dt){let X=l.get(dt);X===void 0&&(X=new WeakMap,l.set(dt,X));let K=X.get(D);K===void 0&&(K=s.getUniformBlockIndex(dt,D.name),X.set(D,K))}function Ht(D,dt){const K=l.get(dt).get(D);c.get(dt)!==K&&(s.uniformBlockBinding(dt,K,D.__bindingPointIndex),c.set(dt,K))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},lt=null,pt={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,R=null,A=null,C=new At(0,0,0),P=0,b=!1,M=null,L=null,k=null,B=null,W=null,jt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:It,bindFramebuffer:Zt,drawBuffers:Rt,useProgram:ee,setBlending:T,setMaterial:Ct,setFlipSided:et,setCullFace:xt,setLineWidth:at,setPolygonOffset:Ut,setScissorTest:mt,activeTexture:E,bindTexture:S,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:St,texImage3D:Nt,updateUBOMapping:qt,uniformBlockBinding:Ht,texStorage2D:Xt,texStorage3D:it,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Ot,viewport:wt,reset:oe}}function Vm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return f?new OffscreenCanvas(E,S):Hi("canvas")}function v(E,S,O){let Y=1;const j=mt(E);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(Y*j.width),Tt=Math.floor(Y*j.height);u===void 0&&(u=g($,Tt));const ut=S?g($,Tt):u;return ut.width=$,ut.height=Tt,ut.getContext("2d").drawImage(E,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Tt+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(E,S,O,Y,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=S;if(S===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),S===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),S===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),S===s.RGBA){const Tt=j?Ps:te.getTransfer(Y);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=Tt===re?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(E,S){let O;return E?S===null||S===qn||S===Si?O=s.DEPTH24_STENCIL8:S===pn?O=s.DEPTH32F_STENCIL8:S===ki&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===Si?O=s.DEPTH_COMPONENT24:S===pn?O=s.DEPTH_COMPONENT32F:S===ki&&(O=s.DEPTH_COMPONENT16),O}function R(E,S){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xe&&E.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function A(E){const S=E.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function C(E){const S=E.target;S.removeEventListener("dispose",C),M(S)}function P(E){const S=n.get(E);if(S.__webglInit===void 0)return;const O=E.source,Y=d.get(O);if(Y){const j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(E),Object.keys(Y).length===0&&d.delete(O)}n.remove(E)}function b(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const O=E.source,Y=d.get(O);delete Y[S.__cacheKey],a.memory.textures--}function M(E){const S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=E.textures;for(let Y=0,j=O.length;Y<j;Y++){const $=n.get(O[Y]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(E)}let L=0;function k(){L=0}function B(){const E=L;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),L+=1,E}function W(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function q(E,S){const O=n.get(E);if(E.isVideoTexture&&at(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,E,S);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function H(E,S){const O=n.get(E);if(E.version>0&&O.__version!==E.version){J(O,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function Z(E,S){const O=n.get(E);if(E.version>0&&O.__version!==E.version){J(O,E,S);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function V(E,S){const O=n.get(E);if(E.version>0&&O.__version!==E.version){ot(O,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const lt={[Ur]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},pt={[Xe]:s.NEAREST,[xl]:s.NEAREST_MIPMAP_NEAREST,[ji]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[Gs]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},yt={[bl]:s.NEVER,[Pl]:s.ALWAYS,[El]:s.LESS,[hc]:s.LEQUAL,[Tl]:s.EQUAL,[Rl]:s.GEQUAL,[Al]:s.GREATER,[Cl]:s.NOTEQUAL};function Ft(E,S){if(S.type===pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===Gs||S.magFilter===ji||S.magFilter===Tn||S.minFilter===rn||S.minFilter===Gs||S.minFilter===ji||S.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,lt[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,lt[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,lt[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,pt[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==ji&&S.minFilter!==Tn||S.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function jt(E,S){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",A));const Y=S.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const $=W(S);if($!==E.__cacheKey){j[$]===void 0&&(j[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[$].usedTimes++;const Tt=j[E.__cacheKey];Tt!==void 0&&(j[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(S)),E.__cacheKey=$,E.__webglTexture=j[$].texture}return O}function J(E,S,O){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const j=jt(E,S),$=S.source;e.bindTexture(Y,E.__webglTexture,s.TEXTURE0+O);const Tt=n.get($);if($.version!==Tt.__version||j===!0){e.activeTexture(s.TEXTURE0+O);const ut=te.getPrimaries(te.workingColorSpace),_t=S.colorSpace===En?null:te.getPrimaries(S.colorSpace),Xt=S.colorSpace===En||ut===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let it=v(S.image,!1,i.maxTextureSize);it=Ut(S,it);const St=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type);let Ot=x(S.internalFormat,St,Nt,S.colorSpace,S.isVideoTexture);Ft(Y,S);let wt;const qt=S.mipmaps,Ht=S.isVideoTexture!==!0,oe=Tt.__version===void 0||j===!0,D=$.dataReady,dt=R(S,it);if(S.isDepthTexture)Ot=_(S.format===wi,S.type),oe&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Ot,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Ot,it.width,it.height,0,St,Nt,null));else if(S.isDataTexture)if(qt.length>0){Ht&&oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,qt[0].width,qt[0].height);for(let X=0,K=qt.length;X<K;X++)wt=qt[X],Ht?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,wt.width,wt.height,St,Nt,wt.data):e.texImage2D(s.TEXTURE_2D,X,Ot,wt.width,wt.height,0,St,Nt,wt.data);S.generateMipmaps=!1}else Ht?(oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,it.width,it.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,St,Nt,it.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,it.width,it.height,0,St,Nt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,qt[0].width,qt[0].height,it.depth);for(let X=0,K=qt.length;X<K;X++)if(wt=qt[X],S.format!==tn)if(St!==null)if(Ht){if(D)if(S.layerUpdates.size>0){const vt=To(wt.width,wt.height,S.format,S.type);for(const gt of S.layerUpdates){const kt=wt.data.subarray(gt*vt/wt.data.BYTES_PER_ELEMENT,(gt+1)*vt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,gt,wt.width,wt.height,1,St,kt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,it.depth,St,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ot,wt.width,wt.height,it.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,wt.width,wt.height,it.depth,St,Nt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Ot,wt.width,wt.height,it.depth,0,St,Nt,wt.data)}else{Ht&&oe&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,qt[0].width,qt[0].height);for(let X=0,K=qt.length;X<K;X++)wt=qt[X],S.format!==tn?St!==null?Ht?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,wt.width,wt.height,St,Nt,wt.data):e.texImage2D(s.TEXTURE_2D,X,Ot,wt.width,wt.height,0,St,Nt,wt.data)}else if(S.isDataArrayTexture)if(Ht){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,it.width,it.height,it.depth),D)if(S.layerUpdates.size>0){const X=To(it.width,it.height,S.format,S.type);for(const K of S.layerUpdates){const vt=it.data.subarray(K*X/it.data.BYTES_PER_ELEMENT,(K+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,St,Nt,vt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,St,Nt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,it.width,it.height,it.depth,0,St,Nt,it.data);else if(S.isData3DTexture)Ht?(oe&&e.texStorage3D(s.TEXTURE_3D,dt,Ot,it.width,it.height,it.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,St,Nt,it.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,it.width,it.height,it.depth,0,St,Nt,it.data);else if(S.isFramebufferTexture){if(oe)if(Ht)e.texStorage2D(s.TEXTURE_2D,dt,Ot,it.width,it.height);else{let X=it.width,K=it.height;for(let vt=0;vt<dt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Ot,X,K,0,St,Nt,null),X>>=1,K>>=1}}else if(qt.length>0){if(Ht&&oe){const X=mt(qt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ot,X.width,X.height)}for(let X=0,K=qt.length;X<K;X++)wt=qt[X],Ht?D&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,St,Nt,wt):e.texImage2D(s.TEXTURE_2D,X,Ot,St,Nt,wt);S.generateMipmaps=!1}else if(Ht){if(oe){const X=mt(it);e.texStorage2D(s.TEXTURE_2D,dt,Ot,X.width,X.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Nt,it)}else e.texImage2D(s.TEXTURE_2D,0,Ot,St,Nt,it);m(S)&&p(Y),Tt.__version=$.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ot(E,S,O){if(S.image.length!==6)return;const Y=jt(E,S),j=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const $=n.get(j);if(j.version!==$.__version||Y===!0){e.activeTexture(s.TEXTURE0+O);const Tt=te.getPrimaries(te.workingColorSpace),ut=S.colorSpace===En?null:te.getPrimaries(S.colorSpace),_t=S.colorSpace===En||Tt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Xt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,St=[];for(let K=0;K<6;K++)!Xt&&!it?St[K]=v(S.image[K],!0,i.maxCubemapSize):St[K]=it?S.image[K].image:S.image[K],St[K]=Ut(S,St[K]);const Nt=St[0],Ot=r.convert(S.format,S.colorSpace),wt=r.convert(S.type),qt=x(S.internalFormat,Ot,wt,S.colorSpace),Ht=S.isVideoTexture!==!0,oe=$.__version===void 0||Y===!0,D=j.dataReady;let dt=R(S,Nt);Ft(s.TEXTURE_CUBE_MAP,S);let X;if(Xt){Ht&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,qt,Nt.width,Nt.height);for(let K=0;K<6;K++){X=St[K].mipmaps;for(let vt=0;vt<X.length;vt++){const gt=X[vt];S.format!==tn?Ot!==null?Ht?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,gt.width,gt.height,Ot,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,qt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,gt.width,gt.height,Ot,wt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,qt,gt.width,gt.height,0,Ot,wt,gt.data)}}}else{if(X=S.mipmaps,Ht&&oe){X.length>0&&dt++;const K=mt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,qt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ht?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St[K].width,St[K].height,Ot,wt,St[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,St[K].width,St[K].height,0,Ot,wt,St[K].data);for(let vt=0;vt<X.length;vt++){const kt=X[vt].image[K].image;Ht?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,kt.width,kt.height,Ot,wt,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,qt,kt.width,kt.height,0,Ot,wt,kt.data)}}else{Ht?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,wt,St[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Ot,wt,St[K]);for(let vt=0;vt<X.length;vt++){const gt=X[vt];Ht?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,Ot,wt,gt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,qt,Ot,wt,gt.image[K])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),$.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Et(E,S,O,Y,j,$){const Tt=r.convert(O.format,O.colorSpace),ut=r.convert(O.type),_t=x(O.internalFormat,Tt,ut,O.colorSpace),Xt=n.get(S),it=n.get(O);if(it.__renderTarget=S,!Xt.__hasExternalTextures){const St=Math.max(1,S.width>>$),Nt=Math.max(1,S.height>>$);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,$,_t,St,Nt,S.depth,0,Tt,ut,null):e.texImage2D(j,$,_t,St,Nt,0,Tt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,it.__webglTexture,0,et(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,it.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(E,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer){const Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,$=_(S.stencilBuffer,j),Tt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=et(S);xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,$,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,$,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,E)}else{const Y=S.textures;for(let j=0;j<Y.length;j++){const $=Y[j],Tt=r.convert($.format,$.colorSpace),ut=r.convert($.type),_t=x($.internalFormat,Tt,ut,$.colorSpace),Xt=et(S);O&&xt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,_t,S.width,S.height):xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const j=Y.__webglTexture,$=et(S);if(S.depthTexture.format===vi)xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===wi)xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Zt(E){const S=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");It(S.__webglFramebuffer,E)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),ct(S.__webglDepthbuffer[Y],E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ct(S.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(E,S,O){const Y=n.get(E);S!==void 0&&Et(Y.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Zt(E)}function ee(E){const S=E.texture,O=n.get(E),Y=n.get(S);E.addEventListener("dispose",C);const j=E.textures,$=E.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let _t=0;_t<S.mipmaps.length;_t++)O.__webglFramebuffer[ut][_t]=s.createFramebuffer()}else O.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)O.__webglFramebuffer[ut]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let ut=0,_t=j.length;ut<_t;ut++){const Xt=n.get(j[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&xt(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ut=0;ut<j.length;ut++){const _t=j[ut];O.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ut]);const Xt=r.convert(_t.format,_t.colorSpace),it=r.convert(_t.type),St=x(_t.internalFormat,Xt,it,_t.colorSpace,E.isXRRenderTarget===!0),Nt=et(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,St,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,O.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)Et(O.__webglFramebuffer[ut][_t],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Et(O.__webglFramebuffer[ut],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,_t=j.length;ut<_t;ut++){const Xt=j[ut],it=n.get(Xt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Ft(s.TEXTURE_2D,Xt),Et(O.__webglFramebuffer,E,Xt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(Xt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),Ft(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)Et(O.__webglFramebuffer[_t],E,S,s.COLOR_ATTACHMENT0,ut,_t);else Et(O.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}E.depthBuffer&&Zt(E)}function tt(E){const S=E.textures;for(let O=0,Y=S.length;O<Y;O++){const j=S[O];if(m(j)){const $=y(E),Tt=n.get(j).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}const Q=[],T=[];function Ct(E){if(E.samples>0){if(xt(E)===!1){const S=E.textures,O=E.width,Y=E.height;let j=s.COLOR_BUFFER_BIT;const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(E),ut=S.length>1;if(ut)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Xt=n.get(S[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,s.NEAREST),c===!0&&(Q.length=0,T.length=0,Q.push(s.COLOR_ATTACHMENT0+_t),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push($),T.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,T)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Xt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const S=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function et(E){return Math.min(i.maxSamples,E.samples)}function xt(E){const S=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(E){const S=a.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ut(E,S){const O=E.colorSpace,Y=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==bi&&O!==En&&(te.getTransfer(O)===re?(Y!==tn||j!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=xt}function Wm(s,t){function e(n,i=En){let r;const a=te.getTransfer(i);if(n===_n)return s.UNSIGNED_BYTE;if(n===va)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return s.BYTE;if(n===ec)return s.SHORT;if(n===ki)return s.UNSIGNED_SHORT;if(n===ga)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===ic)return s.ALPHA;if(n===sc)return s.RGB;if(n===tn)return s.RGBA;if(n===rc)return s.LUMINANCE;if(n===ac)return s.LUMINANCE_ALPHA;if(n===vi)return s.DEPTH_COMPONENT;if(n===wi)return s.DEPTH_STENCIL;if(n===oc)return s.RED;if(n===ya)return s.RED_INTEGER;if(n===cc)return s.RG;if(n===xa)return s.RG_INTEGER;if(n===Ma)return s.RGBA_INTEGER;if(n===bs||n===Es||n===Ts||n===As)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===Or||n===Br||n===zr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kr||n===Gr||n===Hr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kr||n===Gr)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Jr||n===Zr||n===Kr||n===jr||n===Qr||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cs||n===ia||n===sa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Cs)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===ra||n===aa||n===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ie,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new F(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $m extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new Ym,m=e.getContextAttributes();let p=null,y=null;const x=[],_=[],R=new rt;let A=null;const C=new Be;C.viewport=new ae;const P=new Be;P.viewport=new ae;const b=[C,P],M=new fu;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ot=x[J];return ot===void 0&&(ot=new or,x[J]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(J){let ot=x[J];return ot===void 0&&(ot=new or,x[J]=ot),ot.getGripSpace()},this.getHand=function(J){let ot=x[J];return ot===void 0&&(ot=new or,x[J]=ot),ot.getHandSpace()};function B(J){const ot=_.indexOf(J.inputSource);if(ot===-1)return;const Et=x[ot];Et!==void 0&&(Et.update(J.inputSource,J.frame,l||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let J=0;J<x.length;J++){const ot=_[J];ot!==null&&(_[J]=null,x[J].disconnect(ot))}L=null,k=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,ct=null,It=null;m.depth&&(It=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=m.stencil?wi:vi,ct=m.stencil?Si:qn);const Zt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Yn(d.textureWidth,d.textureHeight,{format:tn,type:_n,depthTexture:new Sc(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Yn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(J){for(let ot=0;ot<J.removed.length;ot++){const Et=J.removed[ot],ct=_.indexOf(Et);ct>=0&&(_[ct]=null,x[ct].disconnect(Et))}for(let ot=0;ot<J.added.length;ot++){const Et=J.added[ot];let ct=_.indexOf(Et);if(ct===-1){for(let Zt=0;Zt<x.length;Zt++)if(Zt>=_.length){_.push(Et),ct=Zt;break}else if(_[Zt]===null){_[Zt]=Et,ct=Zt;break}if(ct===-1)break}const It=x[ct];It&&It.connect(Et)}}const H=new I,Z=new I;function V(J,ot,Et){H.setFromMatrixPosition(ot.matrixWorld),Z.setFromMatrixPosition(Et.matrixWorld);const ct=H.distanceTo(Z),It=ot.projectionMatrix.elements,Zt=Et.projectionMatrix.elements,Rt=It[14]/(It[10]-1),ee=It[14]/(It[10]+1),tt=(It[9]+1)/It[5],Q=(It[9]-1)/It[5],T=(It[8]-1)/It[0],Ct=(Zt[8]+1)/Zt[0],et=Rt*T,xt=Rt*Ct,at=ct/(-T+Ct),Ut=at*-T;if(ot.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(at),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),It[10]===-1)J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const mt=Rt+at,E=ee+at,S=et-Ut,O=xt+(ct-Ut),Y=tt*ee/E*mt,j=Q*ee/E*mt;J.projectionMatrix.makePerspective(S,O,Y,j,mt,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,ot){ot===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ot.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ot=J.near,Et=J.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),M.near=P.near=C.near=ot,M.far=P.far=C.far=Et,(L!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const ct=J.parent,It=M.cameras;lt(M,ct);for(let Zt=0;Zt<It.length;Zt++)lt(It[Zt],ct);It.length===2?V(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),pt(J,M,ct)};function pt(J,ot,Et){Et===null?J.matrix.copy(ot.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(ot.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ot.projectionMatrix),J.projectionMatrixInverse.copy(ot.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let yt=null;function Ft(J,ot){if(h=ot.getViewerPose(l||a),g=ot,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let Rt=0;Rt<Et.length;Rt++){const ee=Et[Rt];let tt=null;if(f!==null)tt=f.getViewport(ee);else{const T=u.getViewSubImage(d,ee);tt=T.viewport,Rt===0&&(t.setRenderTargetTextures(y,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(y))}let Q=b[Rt];Q===void 0&&(Q=new Be,Q.layers.enable(Rt),Q.viewport=new ae,b[Rt]=Q),Q.matrix.fromArray(ee.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ee.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(tt.x,tt.y,tt.width,tt.height),Rt===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(Q)}const It=i.enabledFeatures;if(It&&It.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Rt=u.getDepthInformation(Et[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,i.renderState)}}for(let Et=0;Et<x.length;Et++){const ct=_[Et],It=x[Et];ct!==null&&It!==void 0&&It.update(ct,ot,l||a)}yt&&yt(J,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const jt=new Lc;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}}const zn=new Ye,Jm=new ce;function Zm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_c(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,zn.copy(_),zn.x*=-1,zn.y*=-1,zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(zn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Km(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(y,R);const A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const _=s.createBuffer(),R=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],_=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,C=_.length;A<C;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,M=P.length;b<M;b++){const L=P[b];if(f(L,A,b,R)===!0){const k=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<B.length;q++){const H=B[q],Z=v(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,_,R){const A=y.value,C=x+"_"+_;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const P=R[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(y){const x=y.uniforms;let _=0;const R=16;for(let C=0,P=x.length;C<P;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,L=b.length;M<L;M++){const k=b[M],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,q=B.length;W<q;W++){const H=B[W],Z=v(H),V=_%R,lt=V%Z.boundary,pt=V+lt;_+=lt,pt!==0&&R-pt<Z.storage&&(_+=R-pt),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=Z.storage}}}const A=_%R;return A>0&&(_+=R-A),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class jm{constructor(t={}){const{canvas:e=Yl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Cn,this.toneMappingExposure=1;const _=this;let R=!1,A=0,C=0,P=null,b=-1,M=null;const L=new ae,k=new ae;let B=null;const W=new At(0);let q=0,H=e.width,Z=e.height,V=1,lt=null,pt=null;const yt=new ae(0,0,H,Z),Ft=new ae(0,0,H,Z);let jt=!1;const J=new Ea;let ot=!1,Et=!1;this.transmissionResolutionScale=1;const ct=new ce,It=new ce,Zt=new I,Rt=new ae,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Q(){return P===null?V:1}let T=n;function Ct(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),T===null){const U="webgl2";if(T=Ct(U,w),T===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let et,xt,at,Ut,mt,E,S,O,Y,j,$,Tt,ut,_t,Xt,it,St,Nt,Ot,wt,qt,Ht,oe,D;function dt(){et=new cp(T),et.init(),Ht=new Wm(T,et),xt=new ep(T,et,t,Ht),at=new Hm(T,et),xt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Ut=new up(T),mt=new Rm,E=new Vm(T,et,at,mt,xt,Ht,Ut),S=new ip(_),O=new op(_),Y=new gu(T),oe=new Qf(T,Y),j=new lp(T,Y,Ut,oe),$=new fp(T,j,Y,Ut),Ot=new dp(T,xt,E),it=new np(mt),Tt=new Cm(_,S,O,et,xt,oe,it),ut=new Zm(_,mt),_t=new Im,Xt=new Om(et),Nt=new jf(_,S,O,at,$,f,c),St=new km(_,$,xt),D=new Km(T,Ut,xt,at),wt=new tp(T,et,Ut),qt=new hp(T,et,Ut),Ut.programs=Tt.programs,_.capabilities=xt,_.extensions=et,_.properties=mt,_.renderLists=_t,_.shadowMap=St,_.state=at,_.info=Ut}dt();const X=new $m(_,T);this.xr=X,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(H,Z,!1))},this.getSize=function(w){return w.set(H,Z)},this.setSize=function(w,U,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Z=U,e.width=Math.floor(w*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*V,Z*V).floor()},this.setDrawingBufferSize=function(w,U,z){H=w,Z=U,V=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,U,z,G){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,U,z,G),at.viewport(L.copy(yt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Ft)},this.setScissor=function(w,U,z,G){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,U,z,G),at.scissor(k.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){at.setScissorTest(jt=w)},this.setOpaqueSort=function(w){lt=w},this.setTransparentSort=function(w){pt=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,z=!0){let G=0;if(w){let N=!1;if(P!==null){const nt=P.texture.format;N=nt===Ma||nt===xa||nt===ya}if(N){const nt=P.texture.type,ft=nt===_n||nt===qn||nt===ki||nt===Si||nt===va||nt===_a,Mt=Nt.getClearColor(),bt=Nt.getClearAlpha(),Bt=Mt.r,zt=Mt.g,Lt=Mt.b;ft?(g[0]=Bt,g[1]=zt,g[2]=Lt,g[3]=bt,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Bt,v[1]=zt,v[2]=Lt,v[3]=bt,T.clearBufferiv(T.COLOR,0,v))}else G|=T.COLOR_BUFFER_BIT}U&&(G|=T.DEPTH_BUFFER_BIT),z&&(G|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Nt.dispose(),_t.dispose(),Xt.dispose(),mt.dispose(),S.dispose(),O.dispose(),$.dispose(),oe.dispose(),D.dispose(),Tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Fa),X.removeEventListener("sessionend",Oa),Ln.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=Ut.autoReset,U=St.enabled,z=St.autoUpdate,G=St.needsUpdate,N=St.type;dt(),Ut.autoReset=w,St.enabled=U,St.autoUpdate=z,St.needsUpdate=G,St.type=N}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){const U=w.target;U.removeEventListener("dispose",kt),ue(U)}function ue(w){be(w),mt.remove(w)}function be(w){const U=mt.get(w).programs;U!==void 0&&(U.forEach(function(z){Tt.releaseProgram(z)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,G,N,nt){U===null&&(U=ee);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=zc(w,U,z,G,N);at.setMaterial(G,ft);let bt=z.index,Bt=1;if(G.wireframe===!0){if(bt=j.getWireframeAttribute(z),bt===void 0)return;Bt=2}const zt=z.drawRange,Lt=z.attributes.position;let Kt=zt.start*Bt,ne=(zt.start+zt.count)*Bt;nt!==null&&(Kt=Math.max(Kt,nt.start*Bt),ne=Math.min(ne,(nt.start+nt.count)*Bt)),bt!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,bt.count)):Lt!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,Lt.count));const me=ne-Kt;if(me<0||me===1/0)return;oe.setup(N,G,Mt,z,bt);let de,Qt=wt;if(bt!==null&&(de=Y.get(bt),Qt=qt,Qt.setIndex(de)),N.isMesh)G.wireframe===!0?(at.setLineWidth(G.wireframeLinewidth*Q()),Qt.setMode(T.LINES)):Qt.setMode(T.TRIANGLES);else if(N.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),at.setLineWidth(Dt*Q()),N.isLineSegments?Qt.setMode(T.LINES):N.isLineLoop?Qt.setMode(T.LINE_LOOP):Qt.setMode(T.LINE_STRIP)}else N.isPoints?Qt.setMode(T.POINTS):N.isSprite&&Qt.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)kn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,Se=N._multiDrawCounts,ie=N._multiDrawCount,Je=bt?Y.get(bt).bytesPerElement:1,Kn=mt.get(G).currentProgram.getUniforms();for(let Ue=0;Ue<ie;Ue++)Kn.setValue(T,"_gl_DrawID",Ue),Qt.render(Dt[Ue]/Je,Se[Ue])}else if(N.isInstancedMesh)Qt.renderInstances(Kt,me,N.count);else if(z.isInstancedBufferGeometry){const Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Se=Math.min(z.instanceCount,Dt);Qt.renderInstances(Kt,me,Se)}else Qt.render(Kt,me)};function se(w,U,z){w.transparent===!0&&w.side===fe&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,Ki(w,U,z),w.side=Pn,w.needsUpdate=!0,Ki(w,U,z),w.side=fe):Ki(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),p=Xt.get(z),p.init(U),x.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==z&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){const Mt=nt[ft];se(Mt,z,N),G.add(Mt)}else se(nt,z,N),G.add(nt)}),p=x.pop(),G},this.compileAsync=function(w,U,z=null){const G=this.compile(w,U,z);return new Promise(N=>{function nt(){if(G.forEach(function(ft){mt.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){N(w);return}setTimeout(nt,10)}et.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let $e=null;function on(w){$e&&$e(w)}function Fa(){Ln.stop()}function Oa(){Ln.start()}const Ln=new Lc;Ln.setAnimationLoop(on),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(w){$e=w,X.setAnimationLoop(w),w===null?Ln.stop():Ln.start()},X.addEventListener("sessionstart",Fa),X.addEventListener("sessionend",Oa),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,P),p=Xt.get(w,x.length),p.init(U),x.push(p),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(It),Et=this.localClippingEnabled,ot=it.init(this.clippingPlanes,Et),m=_t.get(w,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&zs(nt,U,-1/0,_.sortObjects)}zs(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(lt,pt),tt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,tt&&Nt.addToRenderList(m,w),this.info.render.frame++,ot===!0&&it.beginShadows();const z=p.state.shadowsArray;St.render(z,w,U),ot===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let ft=0,Mt=nt.length;ft<Mt;ft++){const bt=nt[ft];za(G,N,w,bt)}tt&&Nt.render(w);for(let ft=0,Mt=nt.length;ft<Mt;ft++){const bt=nt[ft];Ba(m,w,bt,bt.viewport)}}else N.length>0&&za(G,N,w,U),tt&&Nt.render(w),Ba(m,w,U);P!==null&&C===0&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,U),oe.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ot===!0&&it.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function zs(w,U,z,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){G&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);const ft=$.update(w),Mt=w.material;Mt.visible&&m.push(w,ft,Mt,z,Rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const ft=$.update(w),Mt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Rt.copy(ft.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(Mt)){const bt=ft.groups;for(let Bt=0,zt=bt.length;Bt<zt;Bt++){const Lt=bt[Bt],Kt=Mt[Lt.materialIndex];Kt&&Kt.visible&&m.push(w,ft,Kt,z,Rt.z,Lt)}}else Mt.visible&&m.push(w,ft,Mt,z,Rt.z,null)}}const nt=w.children;for(let ft=0,Mt=nt.length;ft<Mt;ft++)zs(nt[ft],U,z,G)}function Ba(w,U,z,G){const N=w.opaque,nt=w.transmissive,ft=w.transparent;p.setupLightsView(z),ot===!0&&it.setGlobalState(_.clippingPlanes,z),G&&at.viewport(L.copy(G)),N.length>0&&Zi(N,U,z),nt.length>0&&Zi(nt,U,z),ft.length>0&&Zi(ft,U,z),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function za(w,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Yn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?qi:_n,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const nt=p.state.transmissionRenderTarget[G.id],ft=G.viewport||L;nt.setSize(ft.z*_.transmissionResolutionScale,ft.w*_.transmissionResolutionScale);const Mt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(W),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Nt.render(z);const bt=_.toneMapping;_.toneMapping=Cn;const Bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ot===!0&&it.setGlobalState(_.clippingPlanes,G),Zi(w,z,G),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),et.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Lt=0,Kt=U.length;Lt<Kt;Lt++){const ne=U[Lt],me=ne.object,de=ne.geometry,Qt=ne.material,Dt=ne.group;if(Qt.side===fe&&me.layers.test(G.layers)){const Se=Qt.side;Qt.side=De,Qt.needsUpdate=!0,ka(me,z,G,de,Qt,Dt),Qt.side=Se,Qt.needsUpdate=!0,zt=!0}}zt===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}_.setRenderTarget(Mt),_.setClearColor(W,q),Bt!==void 0&&(G.viewport=Bt),_.toneMapping=bt}function Zi(w,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=w.length;N<nt;N++){const ft=w[N],Mt=ft.object,bt=ft.geometry,Bt=G===null?ft.material:G,zt=ft.group;Mt.layers.test(z.layers)&&ka(Mt,U,z,bt,Bt,zt)}}function ka(w,U,z,G,N,nt){w.onBeforeRender(_,U,z,G,N,nt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,z,G,w,nt),N.transparent===!0&&N.side===fe&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,_.renderBufferDirect(z,U,G,N,w,nt),N.side=Pn,N.needsUpdate=!0,_.renderBufferDirect(z,U,G,N,w,nt),N.side=fe):_.renderBufferDirect(z,U,G,N,w,nt),w.onAfterRender(_,U,z,G,N,nt)}function Ki(w,U,z){U.isScene!==!0&&(U=ee);const G=mt.get(w),N=p.state.lights,nt=p.state.shadowsArray,ft=N.state.version,Mt=Tt.getParameters(w,N.state,nt,U,z),bt=Tt.getProgramCacheKey(Mt);let Bt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?O:S).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",kt),Bt=new Map,G.programs=Bt);let zt=Bt.get(bt);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===ft)return Ha(w,Mt),zt}else Mt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(Mt,_),zt=Tt.acquireProgram(Mt,bt),Bt.set(bt,zt),G.uniforms=Mt.uniforms;const Lt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=it.uniform),Ha(w,Mt),G.needsLights=Gc(w),G.lightsStateVersion=ft,G.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=zt,G.uniformsList=null,zt}function Ga(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Rs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ha(w,U){const z=mt.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function zc(w,U,z,G,N){U.isScene!==!0&&(U=ee),E.resetTextureUnits();const nt=U.fog,ft=G.isMeshStandardMaterial?U.environment:null,Mt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bi,bt=(G.isMeshStandardMaterial?O:S).get(G.envMap||ft),Bt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,ne=!!z.morphAttributes.color;let me=Cn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=_.toneMapping);const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=de!==void 0?de.length:0,Dt=mt.get(G),Se=p.state.lights;if(ot===!0&&(Et===!0||w!==M)){const Ae=w===M&&G.id===b;it.setState(G,w,Ae)}let ie=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Se.state.version||Dt.outputColorSpace!==Mt||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==bt||G.fog===!0&&Dt.fog!==nt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==Bt||Dt.vertexTangents!==zt||Dt.morphTargets!==Lt||Dt.morphNormals!==Kt||Dt.morphColors!==ne||Dt.toneMapping!==me||Dt.morphTargetsCount!==Qt)&&(ie=!0):(ie=!0,Dt.__version=G.version);let Je=Dt.currentProgram;ie===!0&&(Je=Ki(G,U,N));let Kn=!1,Ue=!1,Ci=!1;const le=Je.getUniforms(),Ge=Dt.uniforms;if(at.useProgram(Je.program)&&(Kn=!0,Ue=!0,Ci=!0),G.id!==b&&(b=G.id,Ue=!0),Kn||M!==w){at.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),Jl(ct),Zl(ct),le.setValue(T,"projectionMatrix",ct)):le.setValue(T,"projectionMatrix",w.projectionMatrix),le.setValue(T,"viewMatrix",w.matrixWorldInverse);const Le=le.map.cameraPosition;Le!==void 0&&Le.setValue(T,Zt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&le.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&le.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ue=!0,Ci=!0)}if(N.isSkinnedMesh){le.setOptional(T,N,"bindMatrix"),le.setOptional(T,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),le.setValue(T,"boneTexture",Ae.boneTexture,E))}N.isBatchedMesh&&(le.setOptional(T,N,"batchingTexture"),le.setValue(T,"batchingTexture",N._matricesTexture,E),le.setOptional(T,N,"batchingIdTexture"),le.setValue(T,"batchingIdTexture",N._indirectTexture,E),le.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(T,"batchingColorTexture",N._colorsTexture,E));const He=z.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&Ot.update(N,z,Je),(Ue||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,le.setValue(T,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ge.envMap.value=bt,Ge.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Ge.envMapIntensity.value=U.environmentIntensity),Ue&&(le.setValue(T,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&kc(Ge,Ci),nt&&G.fog===!0&&ut.refreshFogUniforms(Ge,nt),ut.refreshMaterialUniforms(Ge,G,V,Z,p.state.transmissionRenderTarget[w.id]),Rs.upload(T,Ga(Dt),Ge,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rs.upload(T,Ga(Dt),Ge,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&le.setValue(T,"center",N.center),le.setValue(T,"modelViewMatrix",N.modelViewMatrix),le.setValue(T,"normalMatrix",N.normalMatrix),le.setValue(T,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ae=G.uniformsGroups;for(let Le=0,ks=Ae.length;Le<ks;Le++){const Dn=Ae[Le];D.update(Dn,Je),D.bind(Dn,Je)}}return Je}function kc(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Gc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,z){mt.get(w.texture).__webglTexture=U,mt.get(w.depthTexture).__webglTexture=z;const G=mt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=mt.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Hc=T.createFramebuffer();this.setRenderTarget=function(w,U=0,z=0){P=w,A=U,C=z;let G=!0,N=null,nt=!1,ft=!1;if(w){const bt=mt.get(w);if(bt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(T.FRAMEBUFFER,null),G=!1;else if(bt.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(bt.__hasExternalTextures)E.rebindTextures(w,mt.get(w.texture).__webglTexture,mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Lt=w.depthTexture;if(bt.__boundDepthTexture!==Lt){if(Lt!==null&&mt.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Bt=w.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(ft=!0);const zt=mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?N=zt[U][z]:N=zt[U],nt=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?N=mt.get(w).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[z]:N=zt,L.copy(w.viewport),k.copy(w.scissor),B=w.scissorTest}else L.copy(yt).multiplyScalar(V).floor(),k.copy(Ft).multiplyScalar(V).floor(),B=jt;if(z!==0&&(N=Hc),at.bindFramebuffer(T.FRAMEBUFFER,N)&&G&&at.drawBuffers(w,N),at.viewport(L),at.scissor(k),at.setScissorTest(B),nt){const bt=mt.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,z)}else if(ft){const bt=mt.get(w.texture),Bt=U;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,bt.__webglTexture,z,Bt)}else if(w!==null&&z!==0){const bt=mt.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,bt.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(w,U,z,G,N,nt,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){at.bindFramebuffer(T.FRAMEBUFFER,Mt);try{const bt=w.texture,Bt=bt.format,zt=bt.type;if(!xt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&z>=0&&z<=w.height-N&&T.readPixels(U,z,G,N,Ht.convert(Bt),Ht.convert(zt),nt)}finally{const bt=P!==null?mt.get(P).__webglFramebuffer:null;at.bindFramebuffer(T.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,G,N,nt,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const bt=w.texture,Bt=bt.format,zt=bt.type;if(!xt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&z>=0&&z<=w.height-N){at.bindFramebuffer(T.FRAMEBUFFER,Mt);const Lt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Lt),T.bufferData(T.PIXEL_PACK_BUFFER,nt.byteLength,T.STREAM_READ),T.readPixels(U,z,G,N,Ht.convert(Bt),Ht.convert(zt),0);const Kt=P!==null?mt.get(P).__webglFramebuffer:null;at.bindFramebuffer(T.FRAMEBUFFER,Kt);const ne=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await $l(T,ne,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Lt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,nt),T.deleteBuffer(Lt),T.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(kn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-z),N=Math.floor(w.image.width*G),nt=Math.floor(w.image.height*G),ft=U!==null?U.x:0,Mt=U!==null?U.y:0;E.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,ft,Mt,N,nt),at.unbindTexture()};const Vc=T.createFramebuffer(),Wc=T.createFramebuffer();this.copyTextureToTexture=function(w,U,z=null,G=null,N=0,nt=null){w.isTexture!==!0&&(kn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],nt=arguments[3]||0,z=null),nt===null&&(N!==0?(kn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=N,N=0):nt=0);let ft,Mt,bt,Bt,zt,Lt,Kt,ne,me;const de=w.isCompressedTexture?w.mipmaps[nt]:w.image;if(z!==null)ft=z.max.x-z.min.x,Mt=z.max.y-z.min.y,bt=z.isBox3?z.max.z-z.min.z:1,Bt=z.min.x,zt=z.min.y,Lt=z.isBox3?z.min.z:0;else{const He=Math.pow(2,-N);ft=Math.floor(de.width*He),Mt=Math.floor(de.height*He),w.isDataArrayTexture?bt=de.depth:w.isData3DTexture?bt=Math.floor(de.depth*He):bt=1,Bt=0,zt=0,Lt=0}G!==null?(Kt=G.x,ne=G.y,me=G.z):(Kt=0,ne=0,me=0);const Qt=Ht.convert(U.format),Dt=Ht.convert(U.type);let Se;U.isData3DTexture?(E.setTexture3D(U,0),Se=T.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Se=T.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Se=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=T.getParameter(T.UNPACK_ROW_LENGTH),Je=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Kn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ue=T.getParameter(T.UNPACK_SKIP_ROWS),Ci=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,de.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,de.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Bt),T.pixelStorei(T.UNPACK_SKIP_ROWS,zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Lt);const le=w.isDataArrayTexture||w.isData3DTexture,Ge=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const He=mt.get(w),Ae=mt.get(U),Le=mt.get(He.__renderTarget),ks=mt.get(Ae.__renderTarget);at.bindFramebuffer(T.READ_FRAMEBUFFER,Le.__webglFramebuffer),at.bindFramebuffer(T.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let Dn=0;Dn<bt;Dn++)le&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,mt.get(w).__webglTexture,N,Lt+Dn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,mt.get(U).__webglTexture,nt,me+Dn)),T.blitFramebuffer(Bt,zt,ft,Mt,Kt,ne,ft,Mt,T.DEPTH_BUFFER_BIT,T.NEAREST);at.bindFramebuffer(T.READ_FRAMEBUFFER,null),at.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(N!==0||w.isRenderTargetTexture||mt.has(w)){const He=mt.get(w),Ae=mt.get(U);at.bindFramebuffer(T.READ_FRAMEBUFFER,Vc),at.bindFramebuffer(T.DRAW_FRAMEBUFFER,Wc);for(let Le=0;Le<bt;Le++)le?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,He.__webglTexture,N,Lt+Le):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,He.__webglTexture,N),Ge?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ae.__webglTexture,nt,me+Le):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ae.__webglTexture,nt),N!==0?T.blitFramebuffer(Bt,zt,ft,Mt,Kt,ne,ft,Mt,T.COLOR_BUFFER_BIT,T.NEAREST):Ge?T.copyTexSubImage3D(Se,nt,Kt,ne,me+Le,Bt,zt,ft,Mt):T.copyTexSubImage2D(Se,nt,Kt,ne,Bt,zt,ft,Mt);at.bindFramebuffer(T.READ_FRAMEBUFFER,null),at.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Ge?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(Se,nt,Kt,ne,me,ft,Mt,bt,Qt,Dt,de.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(Se,nt,Kt,ne,me,ft,Mt,bt,Qt,de.data):T.texSubImage3D(Se,nt,Kt,ne,me,ft,Mt,bt,Qt,Dt,de):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,nt,Kt,ne,ft,Mt,Qt,Dt,de.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,nt,Kt,ne,de.width,de.height,Qt,de.data):T.texSubImage2D(T.TEXTURE_2D,nt,Kt,ne,ft,Mt,Qt,Dt,de);T.pixelStorei(T.UNPACK_ROW_LENGTH,ie),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Je),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Kn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ue),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ci),nt===0&&U.generateMipmaps&&T.generateMipmap(Se),at.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,G=null,N=0){return w.isTexture!==!0&&(kn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),kn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,z,G,N)},this.initRenderTarget=function(w){mt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,at.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Qm{scene;dirLight;hemiLight;stars=null;targetSkyColor=new At(8900331);targetGroundColor=new At(9684338);targetDirColor=new At(16775912);targetDirIntensity=1.4;targetHemiIntensity=.95;targetFogDensity=.0015;targetStarsOpacity=0;constructor(t){this.scene=t;const e=8900331;this.scene.background=new At(e),this.scene.fog=new Ls(e,.0015),this.hemiLight=new lu(e,9684338,.95),this.scene.add(this.hemiLight),this.dirLight=new du(16775912,1.4),this.dirLight.position.set(60,100,50),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=250;const n=60;this.dirLight.shadow.camera.left=-n,this.dirLight.shadow.camera.right=n,this.dirLight.shadow.camera.top=n,this.dirLight.shadow.camera.bottom=-n,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.initStars()}initStars(){const e=new Float32Array(2400);for(let r=0;r<800;r++){const a=Math.random(),o=Math.random(),c=a*2*Math.PI,l=Math.acos(2*o-1)*.5,h=180+Math.random()*40;e[r*3+0]=h*Math.sin(l)*Math.cos(c),e[r*3+1]=h*Math.cos(l)+10,e[r*3+2]=h*Math.sin(l)*Math.sin(c)}const n=new ye;n.setAttribute("position",new qe(e,3));const i=new Ta({color:16777215,size:1.2,transparent:!0,opacity:0,depthWrite:!1});this.stars=new Mc(n,i),this.scene.add(this.stars)}updateAtmosphere(t,e){const n=t.getPeriod(),i=e.currentWeather;if(i==="rain"){this.targetSkyColor.setHex(6847372),this.targetGroundColor.setHex(4017759),this.targetDirColor.setHex(10530496),this.targetDirIntensity=.85,this.targetHemiIntensity=.75,this.targetFogDensity=.003,this.targetStarsOpacity=0;return}if(i==="cloudy"){this.targetSkyColor.setHex(9807270),this.targetGroundColor.setHex(6516338),this.targetDirColor.setHex(15528177),this.targetDirIntensity=1.1,this.targetHemiIntensity=.85,this.targetFogDensity=.002,this.targetStarsOpacity=0;return}switch(n){case"morning":this.targetSkyColor.setHex(16760952),this.targetGroundColor.setHex(9684338),this.targetDirColor.setHex(16772295),this.targetDirIntensity=1.3,this.targetHemiIntensity=.9,this.targetFogDensity=.0016,this.targetStarsOpacity=0;break;case"day":this.targetSkyColor.setHex(8900331),this.targetGroundColor.setHex(9684338),this.targetDirColor.setHex(16775912),this.targetDirIntensity=1.4,this.targetHemiIntensity=.95,this.targetFogDensity=.0015,this.targetStarsOpacity=0;break;case"evening":this.targetSkyColor.setHex(14769985),this.targetGroundColor.setHex(6507317),this.targetDirColor.setHex(16295362),this.targetDirIntensity=1.2,this.targetHemiIntensity=.85,this.targetFogDensity=.0016,this.targetStarsOpacity=.15;break;case"night":this.targetSkyColor.setHex(1386050),this.targetGroundColor.setHex(2241868),this.targetDirColor.setHex(10798325),this.targetDirIntensity=1.05,this.targetHemiIntensity=.8,this.targetFogDensity=.0018,this.targetStarsOpacity=.95;break}}update(t,e,n,i){if(n&&i&&this.updateAtmosphere(n,i),this.scene.background instanceof At&&this.scene.background.lerp(this.targetSkyColor,t*1.5),this.scene.fog instanceof Ls&&(this.scene.fog.color.lerp(this.targetSkyColor,t*1.5),this.scene.fog.density=ze.lerp(this.scene.fog.density,this.targetFogDensity,t*1.5)),this.hemiLight.color.lerp(this.targetSkyColor,t*1.5),this.hemiLight.groundColor.lerp(this.targetGroundColor,t*1.5),this.hemiLight.intensity=ze.lerp(this.hemiLight.intensity,this.targetHemiIntensity,t*1.5),this.dirLight.color.lerp(this.targetDirColor,t*1.5),this.dirLight.intensity=ze.lerp(this.dirLight.intensity,this.targetDirIntensity,t*1.5),this.stars){const r=this.stars.material;r.opacity=ze.lerp(r.opacity,this.targetStarsOpacity,t*1.5),this.stars.position.copy(e)}this.dirLight.position.set(e.x+60,100,e.z+50),this.dirLight.target.position.copy(e),this.dirLight.target.updateMatrixWorld()}}class tg{group;terrainMesh;oceanMesh;pondMesh;islandRadius=85;constructor(){this.group=new Pt;const t=120,e=220,n=new ke(e,e,t,t);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=[],a=new At(16115370),o=new At(7782467),c=new At(4887608),l=new At(9206893),h=new At(14476763);for(let m=0;m<i.count;m++){const p=i.getX(m),y=i.getZ(m),x=this.computeTerrainHeight(p,y);i.setY(m,x);const _=new At;if(x<.6)_.copy(a);else if(x<7){const A=(x-.6)/6.4;_.copy(o).lerp(c,A*.4)}else if(x<14){const A=(x-7)/7;_.copy(c).lerp(l,A)}else{const A=Math.min(1,(x-14)/6);_.copy(l).lerp(h,A)}const R=Math.sin(p*.4)*Math.cos(y*.4)*.04;_.r=ze.clamp(_.r+R,0,1),_.g=ze.clamp(_.g+R,0,1),_.b=ze.clamp(_.b+R,0,1),r.push(_.r,_.g,_.b)}n.setAttribute("color",new Jt(r,3)),n.computeVertexNormals();const u=new st({vertexColors:!0,flatShading:!0});this.terrainMesh=new F(n,u),this.terrainMesh.receiveShadow=!0,this.group.add(this.terrainMesh);const d=new ke(600,600);d.rotateX(-Math.PI/2);const f=new st({color:4770532,transparent:!0,opacity:.72,depthWrite:!1});this.oceanMesh=new F(d,f),this.oceanMesh.position.y=0,this.group.add(this.oceanMesh);const g=new Ji(11,24);g.rotateX(-Math.PI/2);const v=new st({color:38599,transparent:!0,opacity:.8});this.pondMesh=new F(g,v),this.pondMesh.position.set(-5,.85,15),this.group.add(this.pondMesh)}computeTerrainHeight(t,e){const n=Math.hypot(t,e);let i=1;if(n>this.islandRadius*.6){const c=(n-this.islandRadius*.6)/(this.islandRadius*.4);i=Math.max(0,1-c*c)}if(n>=this.islandRadius)return-2.5;let r=2;const a=Math.hypot(t-45,e+10);if(a<45){const c=Math.cos(a/45*(Math.PI/2));r+=Math.pow(c,1.6)*18}r+=Math.sin(t*.08)*Math.cos(e*.08)*1.5,r+=Math.sin(t*.15+1.2)*Math.sin(e*.12)*.8;const o=Math.hypot(t- -5,e-15);if(o<14){const c=Math.cos(o/14*(Math.PI/2));r-=Math.pow(c,2)*3.5}return r*=i,r<.2&&(r=Math.max(-2.5,r*1.5-.2)),r}getHeightAt(t,e){return this.computeTerrainHeight(t,e)}}class eg{group;island;shopStallPos=new I(5,0,6);trees=[];leavesGroup;fallingLeaves=[];constructor(t){this.group=new Pt,this.island=t,this.leavesGroup=new Pt,this.group.add(this.leavesGroup),this.spawnTrees(),this.spawnBushesAndFlowers(),this.spawnRocks(),this.spawnShopStall()}spawnTrees(){const e=new st({color:9132587,flatShading:!0}),n=new st({color:6267702,flatShading:!0}),i=new st({color:7845691,flatShading:!0}),r=new st({color:3042102,flatShading:!0}),a=new st({color:4759861,flatShading:!0}),o=new $t(.3,.45,2.5,6);o.translate(0,1.25,0);const c=new gn(1.6,1);c.translate(0,3,0);const l=new We(1.6,2.5,6);l.translate(0,2.8,0);const h=new We(1.2,2,6);h.translate(0,4,0);for(let u=0;u<90;u++){const d=Math.random()*Math.PI*2,f=10+Math.sqrt(Math.random())*65,g=Math.cos(d)*f,v=Math.sin(d)*f,m=this.island.getHeightAt(g,v);if(m<.6||m>15||Math.hypot(g- -5,v-15)<13||Math.hypot(g,v)<8)continue;const p=new Pt;if(p.position.set(g,m,v),m<2&&f>55){const x=new $t(.2,.35,3.5,5);x.translate(0,1.75,0);const _=new F(x,e);_.rotation.z=(Math.random()-.5)*.3,p.add(_);const R=5;for(let A=0;A<R;A++){const C=new Yt(.5,.05,2);C.translate(0,0,1);const P=new F(C,a);P.position.y=3.5,P.rotation.y=A/R*Math.PI*2,P.rotation.x=.4,p.add(P)}}else if(g>15&&m>4){const x=new F(o,e);p.add(x);const _=new F(l,r),R=new F(h,r);p.add(_,R)}else{const x=new F(o,e);p.add(x);const _=Math.random()>.5?n:i,R=new F(c,_);p.add(R)}const y=.85+Math.random()*.45;p.scale.set(y,y,y),p.rotation.y=Math.random()*Math.PI*2,p.traverse(x=>{x instanceof F&&(x.castShadow=!0,x.receiveShadow=!0)}),this.group.add(p),this.trees.push({group:p,basePos:new I(g,m,v),baseScale:y,shakeTimer:0,hasHoney:!1})}}spawnBushesAndFlowers(){const n=new st({color:4763723,flatShading:!0}),i=new gn(.75,1);for(let l=0;l<60;l++){const h=Math.random()*Math.PI*2,u=4+Math.random()*65,d=Math.cos(h)*u,f=Math.sin(h)*u,g=this.island.getHeightAt(d,f);if(g<.6||Math.hypot(d- -5,f-15)<11||Math.hypot(d-5,f-6)<3)continue;const v=new F(i,n);v.position.set(d,g+.35,f);const m=.6+Math.random()*.6;v.scale.set(m*1.2,m*.7,m*1.1),v.rotation.y=Math.random()*Math.PI,v.castShadow=!0,v.receiveShadow=!0,this.group.add(v)}const a=[16729943,16753922,3069299,2003199,16739201,16777215].map(l=>new st({color:l,flatShading:!0})),o=new $t(.04,.04,.4,4),c=new gn(.18,0);for(let l=0;l<80;l++){const h=Math.random()*Math.PI*2,u=3+Math.random()*60,d=Math.cos(h)*u,f=Math.sin(h)*u,g=this.island.getHeightAt(d,f);if(g<.6||Math.hypot(d- -5,f-15)<10)continue;const v=new Pt;v.position.set(d,g,f);const m=a[Math.floor(Math.random()*a.length)],p=new F(o,n);p.position.y=.2,v.add(p);const y=new F(c,m);y.position.y=.4,y.rotation.y=Math.random()*Math.PI,v.add(y);const x=.8+Math.random()*.4;v.scale.set(x,x,x),this.group.add(v)}}spawnRocks(){const t=new st({color:8359053,flatShading:!0}),e=new gn(.8,0);for(let n=0;n<35;n++){const i=Math.random()*Math.PI*2,r=5+Math.random()*70,a=Math.cos(i)*r,o=Math.sin(i)*r,c=this.island.getHeightAt(a,o);if(c<.2)continue;const l=new F(e,t);l.position.set(a,c+.3,o);const h=.5+Math.random()*1;l.scale.set(h*(.8+Math.random()*.4),h*.6,h*(.8+Math.random()*.4)),l.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}}spawnShopStall(){const n=this.island.getHeightAt(5,6);this.shopStallPos.set(5,n,6);const i=new Pt;i.position.set(5,n,6);const r=new st({color:9132587,flatShading:!0}),a=new st({color:5912087,flatShading:!0}),o=new st({color:2600544,flatShading:!0}),c=new st({color:16119546,flatShading:!0}),l=new st({color:15965202,flatShading:!0}),h=new Yt(2.4,.9,1.2),u=new F(h,r);u.position.set(0,.45,0),u.castShadow=!0,u.receiveShadow=!0,i.add(u);const d=new $t(.06,.06,2.2,5),f=[[-1.1,1.1,-.5],[1.1,1.1,-.5],[-1.1,1.1,.5],[1.1,1.1,.5]];for(const[R,A,C]of f){const P=new F(d,a);P.position.set(R,A,C),P.castShadow=!0,i.add(P)}const g=6,v=2.6/g;for(let R=0;R<g;R++){const A=R%2===0?o:c,C=new Yt(v,.1,1.5),P=new F(C,A);P.position.set(-1.3+v*(R+.5),2.2,0),P.rotation.x=-.15,P.castShadow=!0,i.add(P)}const m=new Yt(1.2,.45,.08),p=new F(m,l);p.position.set(0,2.45,.4),p.castShadow=!0,i.add(p);const y=new Yt(.5,.35,.4),x=new st({color:3066993,transparent:!0,opacity:.85}),_=new F(y,x);_.position.set(-.6,1.05,0),i.add(_),i.rotation.y=-Math.PI/4,this.group.add(i)}getNearestTree(t,e=3.2){let n=null,i=e;return this.trees.forEach((r,a)=>{const o=t.distanceTo(r.basePos);o<i&&(i=o,n={tree:r,index:a,dist:o})}),n}shakeTree(t){const e=this.trees[t];if(!e)return;e.shakeTimer=.55;const n=new en({color:7845691,side:fe}),i=new ke(.18,.28),r=7+Math.floor(Math.random()*5);for(let a=0;a<r;a++){const o=new F(i,n);o.position.set(e.basePos.x+(Math.random()-.5)*2.2,e.basePos.y+2.8+Math.random()*1.5,e.basePos.z+(Math.random()-.5)*2.2),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),this.leavesGroup.add(o),this.fallingLeaves.push({mesh:o,vel:new I((Math.random()-.5)*1.2,-1.8-Math.random()*1.2,(Math.random()-.5)*1.2),rotSpeed:(Math.random()-.5)*8,life:2.2})}}applyHoney(t){const e=this.trees[t];if(!e||e.hasHoney)return!1;e.hasHoney=!0;const n=new pe(.12,6,6),i=new en({color:16758531}),r=new F(n,i);return r.position.set(0,1.4,.35),e.group.add(r),!0}update(t){for(const e of this.trees)if(e.shakeTimer>0){e.shakeTimer-=t;const n=Math.max(0,e.shakeTimer/.55),i=Math.sin((.55-e.shakeTimer)*35)*n*.12;e.group.rotation.z=i,e.group.rotation.x=i*.5}else e.group.rotation.z=0,e.group.rotation.x=0;for(let e=this.fallingLeaves.length-1;e>=0;e--){const n=this.fallingLeaves[e];n.life-=t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.rotation.x+=n.rotSpeed*t,n.mesh.rotation.y+=n.rotSpeed*.7*t,(n.life<=0||n.mesh.position.y<.1)&&(this.leavesGroup.remove(n.mesh),this.fallingLeaves.splice(e,1))}}}class ng{scene;island;nature;constructor(t){this.scene=t,this.island=new tg,this.nature=new eg(this.island),this.scene.add(this.island.group),this.scene.add(this.nature.group)}getTerrainHeight(t,e){return Math.hypot(t- -120,e- -110)<22?1:this.island.getHeightAt(t,e)}getHabitatAt(t,e){if(Math.hypot(t- -120,e- -110)<22)return"cave";const i=this.island.getHeightAt(t,e),r=Math.hypot(t,e);return i<1.2||r>65?"coast":Math.hypot(t- -5,e-15)<12?"pond":t>25&&i>7?"mountain":e<-10&&t<25?"forest":"grassland"}clampToIsland(t){const e=Math.hypot(t.x- -120,t.z- -110);if(e<25){if(e>20){const a=t.x- -120,o=t.z- -110,c=20/e;t.x=-120+a*c,t.z=-110+o*c}return}const n=this.island.islandRadius-2,i=Math.hypot(t.x,t.z);if(i>n){const r=n/i;t.x*=r,t.z*=r}}}class ig{group;spriteMesh;shadowMesh;swingMesh;texture;material;animState="idle";facing="front";frameIndex=0;animTimer=0;facingRight=!0;COLS=8;ROWS=8;constructor(){this.group=new Pt;const t=new cu;this.texture=t.load("/textures/player_sheet.png"),this.texture.magFilter=Xe,this.texture.minFilter=Tn,this.texture.repeat.set(1/this.COLS,1/this.ROWS),this.material=new st({map:this.texture,transparent:!0,alphaTest:.08,side:fe});const e=new ke(2.1,2.1);e.translate(0,1.05,0),this.spriteMesh=new F(e,this.material),this.spriteMesh.castShadow=!0,this.spriteMesh.receiveShadow=!1,this.group.add(this.spriteMesh);const n=new Ji(.55,16);n.rotateX(-Math.PI/2);const i=new en({color:1715738,transparent:!0,opacity:.35,depthWrite:!1});this.shadowMesh=new F(n,i),this.shadowMesh.position.y=.03,this.group.add(this.shadowMesh);const r=new La(.8,1.5,24,1,0,Math.PI*.9);r.rotateX(-Math.PI/4);const a=new en({color:16777215,transparent:!0,opacity:0,side:fe,depthWrite:!1});this.swingMesh=new F(r,a),this.swingMesh.position.set(.6,.9,.4),this.group.add(this.swingMesh),this.setFrame(0,0)}setFrame(t,e){const n=e/this.COLS,i=(this.ROWS-1-t)/this.ROWS;this.texture.offset.set(n,i)}setFacing(t){this.facingRight!==t&&(this.facingRight=t,this.spriteMesh.scale.x=t?1:-1)}setFacingDirection(t){this.facing!==t&&(this.facing=t,this.frameIndex=0,this.animTimer=0)}setFacingBack(t){this.setFacingDirection(t?"back":"front")}setAnimState(t){this.animState!==t&&(this.animState=t,this.frameIndex=0,this.animTimer=0)}update(t,e){const n=new Ye().setFromQuaternion(e.quaternion,"YXZ");switch(this.spriteMesh.rotation.y=n.y,this.animTimer+=t,this.animState){case"idle":{this.animTimer>=.22&&(this.animTimer-=.22,this.frameIndex=(this.frameIndex+1)%5),this.facing==="back"?this.setFrame(3,this.frameIndex):this.setFrame(0,this.frameIndex);break}case"walk":{this.facing==="side"?(this.animTimer>=.09&&(this.animTimer-=.09,this.frameIndex=(this.frameIndex+1)%8),this.setFrame(6,this.frameIndex)):this.facing==="back"?(this.animTimer>=.1&&(this.animTimer-=.1,this.frameIndex=(this.frameIndex+1)%6),this.setFrame(4,this.frameIndex)):(this.animTimer>=.12&&(this.animTimer-=.12,this.frameIndex=(this.frameIndex+1)%4),this.setFrame(1,this.frameIndex));break}case"run":{this.facing==="side"?(this.animTimer>=.075&&(this.animTimer-=.075,this.frameIndex=(this.frameIndex+1)%8),this.setFrame(7,this.frameIndex)):this.facing==="back"?(this.animTimer>=.07&&(this.animTimer-=.07,this.frameIndex=(this.frameIndex+1)%6),this.setFrame(4,this.frameIndex)):(this.animTimer>=.08&&(this.animTimer-=.08,this.frameIndex=(this.frameIndex+1)%4),this.setFrame(1,4+this.frameIndex));break}case"jump":{this.animTimer>=.12&&this.frameIndex<2&&(this.animTimer-=.12,this.frameIndex+=1),this.facing==="side"?this.setFrame(5,5+this.frameIndex):this.facing==="back"?this.setFrame(3,5+this.frameIndex):this.setFrame(0,5+this.frameIndex);break}case"action":{if(this.facing==="back"){const a=Math.min(4,Math.floor(this.animTimer/.06));this.setFrame(5,a);const o=Math.min(1,this.animTimer/(.06*5));this.swingMesh.material.opacity=Math.sin(o*Math.PI)*.7,this.swingMesh.rotation.z=(this.facingRight?-1:1)*o*Math.PI*.8,this.swingMesh.position.x=this.facingRight?.6:-.6,this.animTimer>.06*5+.05&&(this.swingMesh.material.opacity=0,this.setAnimState("idle"))}else{const a=Math.min(5,Math.floor(this.animTimer/.055));this.setFrame(2,a);const o=Math.min(1,this.animTimer/(.055*6));this.swingMesh.material.opacity=Math.sin(o*Math.PI)*.85,this.swingMesh.rotation.z=(this.facingRight?-1:1)*o*Math.PI*.9,this.swingMesh.position.x=this.facingRight?.6:-.6,this.animTimer>.055*6+.05&&(this.swingMesh.material.opacity=0,this.setAnimState("idle"))}break}case"inspect":{this.animTimer>=.25&&(this.animTimer-=.25,this.frameIndex=(this.frameIndex+1)%2),this.setFrame(2,6+this.frameIndex);break}case"stun":case"faint":{const r=Math.min(1,Math.floor(this.animTimer/.3));this.setFrame(4,6+r),this.animState==="stun"&&this.animTimer>.8&&this.setAnimState("idle");break}}}get position(){return this.group.position}get isFacingRight(){return this.facingRight}get isFacingBack(){return this.facing==="back"}}class sg{player;world;input;cameraCtrl;walkSpeed=4.5;runSpeed=7.8;speedMultiplier=1;isSneaking=!1;footstepTimer=0;onFootstep;onJump;toggleSneak(){return this.isSneaking=!this.isSneaking,this.isSneaking}verticalVelocity=0;gravity=-22;jumpForce=8.5;isGrounded=!0;wasActionPressed=!1;onActionTrigger;constructor(t,e,n,i){this.player=t,this.world=e,this.input=n,this.cameraCtrl=i;const r=0,a=0,o=this.world.getTerrainHeight(r,a);this.player.position.set(r,o,a)}update(t){if(this.player.animState==="inspect"||this.player.animState==="faint"){this.player.update(t,this.cameraCtrl.camera);return}const e=this.input.getMoveInput(),n=this.cameraCtrl.yaw,i=new I(-Math.sin(n),0,-Math.cos(n)),r=new I(Math.cos(n),0,-Math.sin(n)),a=new I;a.addScaledVector(i,e.z),a.addScaledVector(r,e.x);const o=a.lengthSq()>.001;let c=e.isRunning?this.runSpeed:this.walkSpeed;this.isSneaking&&(c=this.walkSpeed*.52);const l=c*this.speedMultiplier;if(o){if(a.normalize(),this.player.position.x+=a.x*l*t,this.player.position.z+=a.z*l*t,this.isGrounded&&!this.isSneaking){this.footstepTimer-=t;const v=e.isRunning?.26:.38;this.footstepTimer<=0&&(this.footstepTimer=v,this.onFootstep&&this.onFootstep())}const u=a.dot(r),d=a.dot(i);Math.abs(u)>.08&&this.player.setFacing(u>0);const f=Math.atan2(u,d),g=Math.abs(f);g<=Math.PI*.32?this.player.setFacingDirection("back"):g>=Math.PI*.68?this.player.setFacingDirection("front"):this.player.setFacingDirection("side")}this.world.clampToIsland(this.player.position);const h=this.world.getTerrainHeight(this.player.position.x,this.player.position.z);e.isJumping&&this.isGrounded&&this.player.animState!=="action"&&(this.verticalVelocity=this.jumpForce,this.isGrounded=!1,this.player.setAnimState("jump"),this.onJump&&this.onJump()),this.isGrounded?this.player.position.y=ze.lerp(this.player.position.y,h,.35):(this.verticalVelocity+=this.gravity*t,this.player.position.y+=this.verticalVelocity*t,this.player.position.y<=h&&(this.player.position.y=h,this.verticalVelocity=0,this.isGrounded=!0)),e.isAction&&!this.wasActionPressed&&this.player.animState!=="action"?(this.player.setAnimState("action"),this.onActionTrigger?.()):this.isGrounded&&this.player.animState!=="action"&&this.player.animState!=="stun"&&(o?this.player.setAnimState(e.isRunning?"run":"walk"):this.player.setAnimState("idle")),this.wasActionPressed=e.isAction,this.player.update(t,this.cameraCtrl.camera)}}class rg{camera;player;world;input;yaw=0;pitch=.35;distance=7.5;minPitch=.08;maxPitch=1.15;currentTarget=new I;constructor(t,e,n,i){this.camera=t,this.player=e,this.world=n,this.input=i,this.currentTarget.copy(this.player.position),this.currentTarget.y+=1.2,this.updateCameraTransform()}update(){const t=this.input.consumeCameraInput();this.yaw+=t.deltaYaw,this.pitch=ze.clamp(this.pitch+t.deltaPitch,this.minPitch,this.maxPitch);const e=this.player.position.clone();e.y+=1.2,this.currentTarget.lerp(e,.18),this.updateCameraTransform()}updateCameraTransform(){const t=this.distance*Math.cos(this.pitch),e=this.distance*Math.sin(this.pitch),n=this.currentTarget.x+t*Math.sin(this.yaw),i=this.currentTarget.z+t*Math.cos(this.yaw);let r=this.currentTarget.y+e;const a=this.world.getTerrainHeight(n,i);r<a+.8&&(r=a+.8),this.camera.position.set(n,r,i),this.camera.lookAt(this.currentTarget)}reset(){this.currentTarget.copy(this.player.position),this.currentTarget.y+=1.2,this.updateCameraTransform()}}class ag{keys={};isPointerDown=!1;lastPointerX=0;lastPointerY=0;cameraDeltaYaw=0;cameraDeltaPitch=0;virtualMove=new rt(0,0);virtualRunning=!1;virtualJumping=!1;virtualAction=!1;constructor(t){this.setupKeyboard(),this.setupPointer(t)}setupKeyboard(){window.addEventListener("keydown",t=>{this.keys[t.code]=!0}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("blur",()=>{this.keys={}})}setupPointer(t){t.addEventListener("pointerdown",e=>{e.target.closest("#operation-guide, #status-bar")||(this.isPointerDown=!0,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY)}),window.addEventListener("pointermove",e=>{if(!this.isPointerDown)return;const n=e.clientX-this.lastPointerX,i=e.clientY-this.lastPointerY;this.lastPointerX=e.clientX,this.lastPointerY=e.clientY;const r=.005;this.cameraDeltaYaw-=n*r,this.cameraDeltaPitch-=i*r}),window.addEventListener("pointerup",()=>{this.isPointerDown=!1}),window.addEventListener("pointercancel",()=>{this.isPointerDown=!1})}getMoveInput(){let t=0,e=0;(this.keys.KeyW||this.keys.ArrowUp)&&(e+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(e-=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(t-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(t+=1),this.virtualMove.lengthSq()>.01&&(t=this.virtualMove.x,e=this.virtualMove.y);const n=Math.hypot(t,e);n>1&&(t/=n,e/=n);const i=!!(this.keys.ShiftLeft||this.keys.ShiftRight||this.virtualRunning),r=!!(this.keys.Space||this.virtualJumping),a=!!(this.keys.KeyE||this.keys.KeyF||this.virtualAction);return{x:t,z:e,isRunning:i,isJumping:r,isAction:a}}addCameraDelta(t,e){this.cameraDeltaYaw+=t,this.cameraDeltaPitch+=e}consumeCameraInput(){const t=this.cameraDeltaYaw,e=this.cameraDeltaPitch;return this.cameraDeltaYaw=0,this.cameraDeltaPitch=0,{deltaYaw:t,deltaPitch:e}}}class og{input;joystickZone=null;joystickBase=null;joystickStick=null;joystickPointerId=null;joystickCenter=new rt;maxRadius=42;cameraPointerId=null;lastCameraX=0;lastCameraY=0;btnAction=null;btnDash=null;btnJump=null;constructor(t){this.input=t,this.initElements(),this.initJoystick(),this.initButtons(),this.initCameraSwipe()}initElements(){this.joystickZone=document.getElementById("joystick-zone"),this.joystickBase=document.getElementById("joystick-base"),this.joystickStick=document.getElementById("joystick-stick"),this.btnAction=document.getElementById("btn-action"),this.btnDash=document.getElementById("btn-dash"),this.btnJump=document.getElementById("btn-jump")}initJoystick(){if(!this.joystickZone||!this.joystickBase||!this.joystickStick)return;const t=i=>{if(this.joystickPointerId!==null)return;this.joystickPointerId=i.pointerId,this.joystickZone?.setPointerCapture(i.pointerId);const r=this.joystickBase.getBoundingClientRect();this.joystickCenter.set(r.left+r.width/2,r.top+r.height/2),this.updateJoystick(i.clientX,i.clientY)},e=i=>{i.pointerId===this.joystickPointerId&&this.updateJoystick(i.clientX,i.clientY)},n=i=>{i.pointerId===this.joystickPointerId&&this.resetJoystick()};this.joystickZone.addEventListener("pointerdown",t),this.joystickZone.addEventListener("pointermove",e),this.joystickZone.addEventListener("pointerup",n),this.joystickZone.addEventListener("pointercancel",n)}updateJoystick(t,e){const n=t-this.joystickCenter.x,i=e-this.joystickCenter.y,r=Math.hypot(n,i);let a=n,o=i;r>this.maxRadius&&(a=n/r*this.maxRadius,o=i/r*this.maxRadius),this.joystickStick&&(this.joystickStick.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${o}px))`);const c=a/this.maxRadius,l=-o/this.maxRadius;this.input.virtualMove.set(c,l)}resetJoystick(){this.joystickPointerId=null,this.input.virtualMove.set(0,0),this.joystickStick&&(this.joystickStick.style.transform="translate(-50%, -50%)")}initButtons(){if(this.btnAction){const t=e=>{e.preventDefault(),this.btnAction?.classList.add("active"),this.input.virtualAction=!0,setTimeout(()=>{this.input.virtualAction=!1,this.btnAction?.classList.remove("active")},300)};this.btnAction.addEventListener("pointerdown",t)}if(this.btnDash){this.btnDash.addEventListener("pointerdown",e=>{e.preventDefault(),this.btnDash?.classList.add("active"),this.input.virtualRunning=!0});const t=e=>{e.preventDefault(),this.btnDash?.classList.remove("active"),this.input.virtualRunning=!1};this.btnDash.addEventListener("pointerup",t),this.btnDash.addEventListener("pointercancel",t),this.btnDash.addEventListener("pointerleave",t)}if(this.btnJump){this.btnJump.addEventListener("pointerdown",e=>{e.preventDefault(),this.btnJump?.classList.add("active"),this.input.virtualJumping=!0});const t=e=>{e.preventDefault(),this.btnJump?.classList.remove("active"),this.input.virtualJumping=!1};this.btnJump.addEventListener("pointerup",t),this.btnJump.addEventListener("pointercancel",t),this.btnJump.addEventListener("pointerleave",t)}}initCameraSwipe(){window.addEventListener("pointerdown",e=>{e.target.closest("#joystick-zone, #action-buttons-zone, #status-bar, #operation-guide")||this.cameraPointerId===null&&(this.cameraPointerId=e.pointerId,this.lastCameraX=e.clientX,this.lastCameraY=e.clientY)}),window.addEventListener("pointermove",e=>{if(e.pointerId!==this.cameraPointerId)return;const n=e.clientX-this.lastCameraX,i=e.clientY-this.lastCameraY;this.lastCameraX=e.clientX,this.lastCameraY=e.clientY;const r=.005;this.input.addCameraDelta(-n*r,-i*r)});const t=e=>{e.pointerId===this.cameraPointerId&&(this.cameraPointerId=null)};window.addEventListener("pointerup",t),window.addEventListener("pointercancel",t)}}const cg=[{id:"cabbage_butterfly",name:"モンシロチョウ",description:"白い羽が特徴の身近なチョウ。春から秋にかけて花の蜜を求めてひらひらと飛ぶ。",modelType:"butterfly",icon:"🦋",rarity:1,minSize:40,maxSize:58,basePrice:50,moveSpeed:2.2,alertDistance:4.5,flightHeight:1.2,habitats:["grassland","forest"],activeTime:["day","morning"],weather:["sunny","cloudy"],primaryColor:"#ffffff",secondaryColor:"#2f3640"},{id:"grasshopper",name:"トノサマバッタ",description:"草むらに隠れる緑色のバッタ。強力な後ろ足で驚異的な大ジャンプを見せる。",modelType:"grasshopper",icon:"🦗",rarity:1,minSize:38,maxSize:68,basePrice:60,moveSpeed:1.8,alertDistance:3.8,flightHeight:0,habitats:["grassland"],activeTime:["day","morning","evening"],weather:["sunny","cloudy"],primaryColor:"#2ed573",secondaryColor:"#7bed9f"},{id:"ladybug",name:"ナナホシテントウ",description:"鮮やかな赤い羽に7つの黒い星があるテントウムシ。草木の先まで登ると空へ飛び立つ。",modelType:"ladybug",icon:"🐞",rarity:1,minSize:7,maxSize:10,basePrice:70,moveSpeed:1.2,alertDistance:3,flightHeight:.2,habitats:["grassland","forest"],activeTime:["day","morning"],weather:["sunny","cloudy"],primaryColor:"#ff4757",secondaryColor:"#1e272e"},{id:"firefly",name:"ヘイケボタル",description:"夜の小川や水辺で淡く黄緑色に光るホタル。闇夜を幻想的に舞う夏の風物詩。",modelType:"firefly",icon:"✨",rarity:2,minSize:10,maxSize:15,basePrice:160,moveSpeed:1.5,alertDistance:4,flightHeight:1.4,habitats:["pond","grassland"],activeTime:["night"],weather:["sunny","cloudy"],primaryColor:"#2ed573",secondaryColor:"#ffa502"},{id:"beetle",name:"カブトムシ",description:"立派な角と黒光りする甲羅を持つ昆虫の王様。夜になると樹液を求めて活発に動く。",modelType:"beetle",icon:"🪲",rarity:3,minSize:45,maxSize:85,basePrice:350,moveSpeed:1.4,alertDistance:3.2,flightHeight:0,habitats:["forest","mountain"],activeTime:["night","morning"],weather:["sunny","cloudy"],primaryColor:"#3d1f0d",secondaryColor:"#633013"},{id:"red_dragonfly",name:"アキアカネ",description:"夕焼け空を背景に優雅に群れ飛ぶ真っ赤な赤とんぼ。ホバリングと急旋回が得意。",modelType:"dragonfly",icon:"🪰",rarity:2,minSize:35,maxSize:45,basePrice:120,moveSpeed:3,alertDistance:5,flightHeight:1.8,habitats:["grassland","pond"],activeTime:["evening","day"],weather:["sunny","cloudy"],primaryColor:"#e74c3c",secondaryColor:"#f39c12"},{id:"snail",name:"カタツムリ",description:"雨の日になると草木やあじさいの葉に現れる。渦巻き状の殻を背負ってのんびり歩く。",modelType:"snail",icon:"🐌",rarity:2,minSize:20,maxSize:35,basePrice:110,moveSpeed:.6,alertDistance:2.2,flightHeight:0,habitats:["grassland","forest","pond"],activeTime:["morning","day","evening","night"],weather:["rain"],primaryColor:"#d2b48c",secondaryColor:"#8b5a2b"},{id:"cicada_minmin",name:"ミンミンゼミ",description:"夏の昼間に「ミーンミンミン」と元気に鳴くセミ。緑色と黒の美しい翅を持つ。",modelType:"cicada",icon:"🪰",rarity:2,minSize:32,maxSize:38,basePrice:150,moveSpeed:2.8,alertDistance:3.8,flightHeight:2,habitats:["forest","grassland"],activeTime:["morning","day"],weather:["sunny","cloudy"],primaryColor:"#2ed573",secondaryColor:"#1e272e"},{id:"cicada_higurashi",name:"ヒグラシ",description:"夕暮れ時に「カナカナカナ」と哀愁漂う美しい声で鳴くセミ。薄暗い森の木を好む。",modelType:"cicada",icon:"🪰",rarity:3,minSize:28,maxSize:35,basePrice:220,moveSpeed:2.6,alertDistance:4.2,flightHeight:2,habitats:["forest"],activeTime:["evening","morning"],weather:["sunny","cloudy","rain"],primaryColor:"#b8860b",secondaryColor:"#2f3640"},{id:"stag_beetle",name:"ノコギリクワガタ",description:"大きな湾曲したハサミ状の大アゴがかっこいいクワガタ。夜の樹液酒場に現れる。",modelType:"stag_beetle",icon:"🪲",rarity:4,minSize:42,maxSize:72,basePrice:450,moveSpeed:1.3,alertDistance:3,flightHeight:0,habitats:["forest","mountain"],activeTime:["night","morning"],weather:["sunny","cloudy"],primaryColor:"#8b0000",secondaryColor:"#3d1f0d"},{id:"wasp_giant",name:"オオスズメバチ",description:"木を揺らすと怒って急襲してくる最強の大型ハチ。捕獲には覚悟と正確な網振りが必要！",modelType:"wasp",icon:"🐝",rarity:5,minSize:38,maxSize:48,basePrice:650,moveSpeed:5,alertDistance:5,flightHeight:1.5,habitats:["forest"],activeTime:["morning","day","evening","night"],weather:["sunny","cloudy","rain"],primaryColor:"#f39c12",secondaryColor:"#1e272e"},{id:"hercules_beetle",name:"ヘラクレスオオカブト",description:"世界最大の超巨大甲虫！漆黒の強靭な胸角と鮮やかなオリーブ黄色の翅を持つ昆虫界の絶対王者。",modelType:"hercules",icon:"👑",rarity:5,minSize:120,maxSize:180,basePrice:1200,moveSpeed:1.6,alertDistance:6,flightHeight:0,habitats:["forest","mountain"],activeTime:["night","morning"],weather:["sunny","cloudy"],primaryColor:"#ffd32a",secondaryColor:"#1e272e"},{id:"rainbow_stag",name:"ニジイロクワガタ",description:"世界一美しいと称される奇跡のクワガタ。七色にきらめく金属光沢のボディと上向きの湾曲アゴが魅力。",modelType:"rainbow_stag",icon:"🌈",rarity:5,minSize:45,maxSize:72,basePrice:1e3,moveSpeed:1.5,alertDistance:5.5,flightHeight:0,habitats:["forest"],activeTime:["day","morning","evening"],weather:["sunny","cloudy"],primaryColor:"#00d2d3",secondaryColor:"#ff9f43"},{id:"paper_kite",name:"オオゴマダラ",description:"南国の森に舞う日本最大級の巨大チョウ。白地に黒のまだら模様が美しく、新聞紙のように優雅に滑空する。",modelType:"paper_kite",icon:"🦋",rarity:4,minSize:110,maxSize:140,basePrice:550,moveSpeed:1.8,alertDistance:5,flightHeight:1.8,habitats:["grassland","forest"],activeTime:["day","morning"],weather:["sunny","cloudy"],primaryColor:"#ffffff",secondaryColor:"#2d3436"},{id:"luna_moth",name:"オオミズアオ",description:"「月の女神」の学名を持つ神秘的な翡翠色の大型蛾。透き通る長い尾状突起をたなびかせて夜の森を舞う。",modelType:"luna_moth",icon:"🌕",rarity:4,minSize:80,maxSize:120,basePrice:600,moveSpeed:2,alertDistance:5.2,flightHeight:1.6,habitats:["forest","mountain"],activeTime:["night","evening"],weather:["sunny","cloudy"],primaryColor:"#7bed9f",secondaryColor:"#ffffff"},{id:"platinum_beetle",name:"プラチナコガネ",description:"鏡のように周囲の景色を反射する純白銀の体を持つ奇跡の甲虫。水晶洞窟の奥深くに生息する。",modelType:"platinum_beetle",icon:"🪙",rarity:5,minSize:26,maxSize:36,basePrice:850,moveSpeed:1.4,alertDistance:6,flightHeight:0,habitats:["cave","forest"],activeTime:["night","evening","day"],weather:["sunny","cloudy","rainy"],primaryColor:"#f1f2f6",secondaryColor:"#dfe4ea"},{id:"emperor_cicada",name:"テイオウゼミ",description:"世界最大の巨大ゼミ。鳥のような圧倒的な体躯と幅広の透明な翅を持ち、森に轟く大音声で鳴く。",modelType:"emperor_cicada",icon:"🌲",rarity:4,minSize:85,maxSize:120,basePrice:650,moveSpeed:1.8,alertDistance:5.8,flightHeight:1.5,habitats:["cave","forest","mountain"],activeTime:["day","morning","evening"],weather:["sunny","cloudy"],primaryColor:"#2f3542",secondaryColor:"#70a1ff"},{id:"fungus_gnat",name:"ヒカリキノコバエ",description:"青白い幻想的な光を放つ珍しい昆虫。水晶洞窟の天井や岩肌に群れて満天の星空のように瞬く。",modelType:"fungus_gnat",icon:"✨",rarity:3,minSize:10,maxSize:16,basePrice:280,moveSpeed:1.6,alertDistance:3.5,flightHeight:1.4,habitats:["cave"],activeTime:["night","evening","day","morning"],weather:["sunny","cloudy","rainy"],primaryColor:"#70a1ff",secondaryColor:"#7bed9f"}];class we{static insects=new Map;static SUMO_FIGHTER_IDS=["rhinoceros_beetle","stag_beetle_sawtooth","stag_beetle_miyama","stag_beetle_giant","hercules_beetle","rainbow_stag","platinum_beetle"];static isSumoFighter(t){return this.SUMO_FIGHTER_IDS.includes(t)}static getSumoStats(t){const e=t.level||1,n=t.power||0,i=t.stamina||0;let r=30,a=30,o=25;switch(t.id){case"rhinoceros_beetle":r=45,a=40,o=40;break;case"stag_beetle_sawtooth":r=42,a=42,o=36;break;case"stag_beetle_miyama":r=46,a=38,o=38;break;case"stag_beetle_giant":r=55,a=50,o=48;break;case"rainbow_stag":r=52,a=55,o=44;break;case"platinum_beetle":r=50,a=60,o=50;break;case"hercules_beetle":r=70,a=65,o=65;break;default:r=25,a=25,o=20}let c=1;t.isGiant?c=1.35:t.isBig&&(c=1.15);const l=Math.round(r*c+(e-1)*3+n),h=Math.round(a*c+(e-1)*3+i),u=Math.round(o*c);let d="前頭";return l+h>160?d="横綱":l+h>130?d="大関":l+h>105?d="関脇":l+h>85&&(d="小結"),{power:l,stamina:h,weight:u,level:e,title:d}}static initialize(){if(!(this.insects.size>0))for(const t of cg)this.insects.set(t.id,t)}static getAll(){return this.initialize(),Array.from(this.insects.values())}static getById(t){return this.initialize(),this.insects.get(t)}static rollSize(t){const e=(Math.random()+Math.random())/2,n=t.minSize+(t.maxSize-t.minSize)*e,i=Math.random();let r=Math.round(n*10)/10,a=!1,o=!1;return i<.03?(r=Math.round(t.maxSize*(1.15+Math.random()*.15)*10)/10,o=!0,a=!0):i<.15&&(r=Math.round(t.maxSize*(1.02+Math.random()*.08)*10)/10,a=!0),{size:r,isBig:a,isGiant:o}}}class Oc{static createModel(t){switch(t.modelType){case"butterfly":return this.createButterfly(t);case"grasshopper":return this.createGrasshopper(t);case"ladybug":return this.createLadybug(t);case"firefly":return this.createFirefly(t);case"beetle":return this.createBeetle(t);case"dragonfly":return this.createDragonfly(t);case"snail":return this.createSnail(t);case"cicada":return this.createCicada(t);case"stag_beetle":return this.createStagBeetle(t);case"wasp":return this.createWasp(t);case"hercules":return this.createHercules(t);case"rainbow_stag":return this.createRainbowStag(t);case"paper_kite":return this.createPaperKite(t);case"luna_moth":return this.createLunaMoth(t);case"platinum_beetle":return this.createPlatinumBeetle(t);case"emperor_cicada":return this.createEmperorCicada(t);case"fungus_gnat":return this.createFungusGnat(t);default:return this.createButterfly(t)}}static createButterfly(t){const e=new Pt,n=new st({color:2236962,flatShading:!0}),i=new Pe(.06,.35,4,6);i.rotateX(Math.PI/2);const r=new F(i,n);e.add(r);const a=new st({color:new At(t.primaryColor),side:fe,flatShading:!0,transparent:!0,opacity:.95}),o=new fi;o.moveTo(0,0),o.quadraticCurveTo(.35,.4,.55,.15),o.quadraticCurveTo(.4,-.25,0,0);const c=new zi(o),l=new Pt;l.position.set(-.04,.05,0);const h=new F(c,a);h.rotation.x=Math.PI/2,h.rotation.y=Math.PI,l.add(h),e.add(l);const u=new Pt;u.position.set(.04,.05,0);const d=new F(c,a);d.rotation.x=Math.PI/2,u.add(d),e.add(u);let f=Math.random()*Math.PI*2;return{group:e,update(g,v){f+=g*(v==="flee"?28:14);const p=Math.sin(f)*.75;l.rotation.z=-p,u.rotation.z=p}}}static createGrasshopper(t){const e=new Pt,n=new st({color:new At(t.primaryColor),flatShading:!0}),i=new st({color:1980432,flatShading:!0}),r=new We(.12,.65,5);r.rotateX(-Math.PI/2);const a=new F(r,n);a.position.set(0,.18,0),e.add(a);const o=new gn(.12,0),c=new F(o,n);c.position.set(0,.22,.35),e.add(c);const l=new st({color:1118481}),h=new pe(.035,4,4),u=new F(h,l);u.position.set(-.08,.26,.4);const d=new F(h,l);d.position.set(.08,.26,.4),e.add(u,d);const f=new $t(.02,.04,.45,4);f.translate(0,.22,0);const g=new Pt;g.position.set(-.14,.15,-.1);const v=new F(f,i);v.rotation.z=-.6,v.rotation.x=-.3,g.add(v),e.add(g);const m=new Pt;m.position.set(.14,.15,-.1);const p=new F(f,i);p.rotation.z=.6,p.rotation.x=-.3,m.add(p),e.add(m);let y=0;return{group:e,update(x,_,R){R?(y+=x*12,g.rotation.x=Math.sin(y)*.4,m.rotation.x=-Math.sin(y)*.4):(g.rotation.x=0,m.rotation.x=0)}}}static createLadybug(t){const e=new Pt,n=new st({color:new At(t.primaryColor),flatShading:!0}),i=new pe(.25,8,6,0,Math.PI*2,0,Math.PI/2),r=new F(i,n);r.position.y=.1,e.add(r);const a=new st({color:1118481,flatShading:!0}),o=new pe(.12,6,6),c=new F(o,a);c.position.set(0,.12,.22),e.add(c);const l=new en({color:1118481}),h=new Ji(.04,6);h.rotateX(-Math.PI/2);const u=[[-.1,.32,.05],[.1,.32,.05],[-.16,.25,-.1],[.16,.25,-.1],[0,.33,-.08],[-.08,.18,-.18],[.08,.18,-.18]];for(const[f,g,v]of u){const m=new F(h,l);m.position.set(f,g+.01,v),e.add(m)}let d=0;return{group:e,update(f,g,v){v&&(d+=f*15,e.position.y+=Math.sin(d)*.002)}}}static createFirefly(t){const e=new Pt,n=new st({color:1976110}),i=new Pe(.07,.2,4,6);i.rotateX(Math.PI/2);const r=new F(i,n);e.add(r);const a=new en({color:8121759}),o=new pe(.09,8,8),c=new F(o,a);c.position.set(0,0,-.18),e.add(c);const l=new Ds(8121759,.8,3.5);l.position.set(0,0,-.18),e.add(l);let h=Math.random()*Math.PI*2;return{group:e,update(u){h+=u*4;const d=.5+Math.sin(h)*.45;a.color.setRGB(.48*d,.93*d,.62*d),l.intensity=.4+d*.8}}}static createBeetle(t){const e=new Pt,n=new st({color:new At(t.primaryColor),flatShading:!0}),i=new pe(.28,8,6);i.scale(1,.7,1.4);const r=new F(i,n);r.position.set(0,.18,0),e.add(r);const a=new Yt(.22,.15,.22),o=new F(a,n);o.position.set(0,.16,.45),e.add(o);const c=new $t(.03,.06,.35,5);c.translate(0,.17,0);const l=new F(c,n);l.position.set(0,.22,.52),l.rotation.x=Math.PI/4,e.add(l);const h=new Yt(.16,.04,.04),u=new F(h,n);u.position.set(0,.42,.68),e.add(u);let d=0;return{group:e,update(f,g,v){v&&(d+=f*10,e.rotation.y+=Math.sin(d)*.02)}}}static createDragonfly(t){const e=new Pt,n=new st({color:new At(t.primaryColor),flatShading:!0}),i=new st({color:16777215,transparent:!0,opacity:.55,side:fe}),r=new $t(.02,.04,.7,5);r.rotateX(Math.PI/2);const a=new F(r,n);a.position.set(0,.1,-.2),e.add(a);const o=new pe(.08,6,6),c=new F(o,n);c.position.set(0,.12,.22),e.add(c);const l=new ke(.5,.12);l.translate(.25,0,0);const h=new F(l,i);h.position.set(.04,.16,.08);const u=new F(l,i);u.position.set(-.04,.16,.08),u.rotation.y=Math.PI;const d=new F(l,i);d.position.set(.04,.16,-.04);const f=new F(l,i);f.position.set(-.04,.16,-.04),f.rotation.y=Math.PI,e.add(h,u,d,f);let g=0;return{group:e,update(v){g+=v*45;const m=Math.sin(g)*.4;h.rotation.z=m,u.rotation.z=-m,d.rotation.z=-m*.8,f.rotation.z=m*.8}}}static createSnail(t){const e=new Pt,n=new st({color:new At(t.secondaryColor),flatShading:!0}),i=new $t(.18,.18,.14,8);i.rotateZ(Math.PI/2);const r=new F(i,n);r.position.set(0,.22,-.05),e.add(r);const a=new st({color:new At(t.primaryColor)}),o=new Pe(.08,.45,4,6);o.rotateX(Math.PI/2);const c=new F(o,a);c.position.set(0,.08,.05),e.add(c);const l=new pe(.03,4,4),h=new F(l,n);h.position.set(-.05,.22,.32);const u=new F(l,n);return u.position.set(.05,.22,.32),e.add(h,u),{group:e,update(){}}}static createCicada(t){const e=new Pt,n=new st({color:new At(t.secondaryColor),flatShading:!0}),i=new Pe(.14,.42,4,6);i.rotateX(Math.PI/2);const r=new F(i,n);r.position.set(0,.14,0),e.add(r);const a=new st({color:new At(t.primaryColor),flatShading:!0}),o=new Yt(.24,.12,.14),c=new F(o,a);c.position.set(0,.15,.24),e.add(c);const l=new en({color:13378082}),h=new pe(.04,4,4),u=new F(h,l);u.position.set(-.13,.16,.24);const d=new F(h,l);d.position.set(.13,.16,.24),e.add(u,d);const f=new st({color:14546431,transparent:!0,opacity:.65,side:fe}),g=new Yt(.14,.02,.45);g.translate(0,0,-.15);const v=new F(g,f);v.position.set(-.06,.22,.05),v.rotation.z=-.2,v.rotation.y=-.1;const m=new F(g,f);m.position.set(.06,.22,.05),m.rotation.z=.2,m.rotation.y=.1,e.add(v,m);let p=0;return{group:e,update(y,x){x==="flee"?(p+=y*50,v.rotation.z=-.2+Math.sin(p)*.4,m.rotation.z=.2-Math.sin(p)*.4):(v.rotation.z=-.2,m.rotation.z=.2)}}}static createStagBeetle(t){const e=new Pt,n=new st({color:new At(t.primaryColor),flatShading:!0}),i=new st({color:1118481,flatShading:!0}),r=new Yt(.32,.15,.55),a=new F(r,n);a.position.set(0,.14,-.08),e.add(a);const o=new Yt(.34,.16,.22),c=new F(o,i);c.position.set(0,.16,.22),e.add(c);const l=new Yt(.24,.13,.15),h=new F(l,n);h.position.set(0,.15,.36),e.add(h);const u=new fi;u.moveTo(0,0),u.lineTo(.06,.12),u.quadraticCurveTo(.14,.38,-.04,.48),u.quadraticCurveTo(.06,.32,.02,.1),u.closePath();const d=new Ia(u,{depth:.03,bevelEnabled:!1});d.rotateX(-Math.PI/2);const f=new F(d,n);f.position.set(-.06,.14,.42);const g=new F(d,n);g.position.set(.06,.14,.42),g.scale.x=-1,e.add(f,g);let v=0;return{group:e,update(m,p){if(p==="flee"||p==="alert"){v+=m*8;const y=Math.sin(v)*.18;f.rotation.y=y,g.rotation.y=-y}else f.rotation.y=0,g.rotation.y=0}}}static createWasp(t){const e=new Pt,n=new st({color:new At(t.primaryColor),flatShading:!0}),i=new st({color:1118481,flatShading:!0}),r=new pe(.1,5,5),a=new F(r,n);a.position.set(0,.15,.28),e.add(a);const o=new Pe(.09,.18,4,5);o.rotateX(Math.PI/2);const c=new F(o,i);c.position.set(0,.16,.1),e.add(c);const l=new We(.12,.45,6);l.rotateX(-Math.PI/2);const h=new F(l,n);h.position.set(0,.12,-.22),e.add(h);const u=new st({color:16777215,transparent:!0,opacity:.7,side:fe}),d=new Yt(.35,.01,.12),f=new F(d,u);f.position.set(-.2,.22,.12);const g=new F(d,u);g.position.set(.2,.22,.12),e.add(f,g);let v=0;return{group:e,update(m){v+=m*60;const p=Math.sin(v)*.45;f.rotation.z=p,g.rotation.z=-p}}}static createHercules(t){const e=new Pt,n=new st({color:15518824,flatShading:!0}),i=new st({color:1118481,flatShading:!0}),r=new Pe(.18,.45,5,8);r.rotateX(Math.PI/2);const a=new F(r,n);a.position.set(0,.16,-.1),e.add(a);const o=new Pe(.16,.22,5,6);o.rotateX(Math.PI/2);const c=new F(o,i);c.position.set(0,.17,.22),e.add(c);const l=new pe(.12,6,6),h=new F(l,i);h.position.set(0,.15,.4),e.add(h);const u=new We(.045,.7,5);u.rotateX(Math.PI/2+.15);const d=new F(u,i);d.position.set(0,.28,.65),e.add(d);const f=new We(.04,.45,5);f.rotateX(Math.PI/2-.2);const g=new F(f,i);g.position.set(0,.12,.58),e.add(g);const v=new st({color:1710618}),m=new $t(.02,.02,.35);for(let y=-1;y<=1;y+=2)for(let x=0;x<3;x++){const _=new F(m,v);_.position.set(y*.2,.08,.35-x*.28),_.rotation.z=y*.75,e.add(_)}let p=Math.random()*Math.PI;return{group:e,update(y,x,_){p+=y*(_?10:3);const R=Math.sin(p)*.02;e.position.y=R,d.rotation.x=.08+Math.sin(p*.5)*.04}}}static createRainbowStag(t){const e=new Pt,n=new sn({color:53971,emissive:1092740,emissiveIntensity:.25,roughness:.15,metalness:.85,flatShading:!0}),i=new sn({color:16752451,emissive:15618643,emissiveIntensity:.2,roughness:.15,metalness:.85,flatShading:!0}),r=new Pe(.14,.36,5,6);r.rotateX(Math.PI/2);const a=new F(r,n);a.position.set(0,.14,-.05),e.add(a);const o=new Yt(.24,.15,.18),c=new F(o,i);c.position.set(0,.14,.2),e.add(c);const l=new Yt(.18,.12,.14),h=new F(l,n);h.position.set(0,.13,.34),e.add(h);const u=new We(.035,.32,5);u.rotateX(Math.PI/2+.35);const d=new F(u,i);d.position.set(-.07,.15,.5),d.rotation.z=-.2;const f=new F(u,i);f.position.set(.07,.15,.5),f.rotation.z=.2,e.add(d,f);let g=0;return{group:e,update(v){g+=v*4;const m=(Math.sin(g*.5)*.5+.5)*.3+.45;n.color.setHSL(m,.85,.5)}}}static createPaperKite(t){const e=new Pt,n=new st({color:1976110,flatShading:!0}),i=new Pe(.07,.42,4,6);i.rotateX(Math.PI/2);const r=new F(i,n);e.add(r);const a=new st({color:16119546,side:fe,flatShading:!0,transparent:!0,opacity:.96}),o=new fi;o.moveTo(0,0),o.quadraticCurveTo(.55,.65,.85,.25),o.quadraticCurveTo(.65,-.35,0,0);const c=new zi(o),l=new Pt;l.position.set(-.05,.06,0);const h=new F(c,a);h.rotation.x=Math.PI/2,h.rotation.y=Math.PI,l.add(h);const u=new Pt;u.position.set(.05,.06,0);const d=new F(c,a);d.rotation.x=Math.PI/2,u.add(d),e.add(l,u);let f=Math.random()*Math.PI*2;return{group:e,update(g,v){f+=g*(v==="flee"?18:8);const p=Math.sin(f)*.85;l.rotation.z=-p,u.rotation.z=p}}}static createLunaMoth(t){const e=new Pt,n=new st({color:16777215,flatShading:!0}),i=new Pe(.09,.45,5,6);i.rotateX(Math.PI/2);const r=new F(i,n);e.add(r);const a=new st({color:8121759,side:fe,flatShading:!0,transparent:!0,opacity:.92}),o=new fi;o.moveTo(0,0),o.quadraticCurveTo(.5,.5,.8,.15),o.quadraticCurveTo(.7,-.2,.35,-.3),o.quadraticCurveTo(.2,-.7,.15,-.85),o.quadraticCurveTo(.1,-.4,0,0);const c=new zi(o),l=new Pt;l.position.set(-.06,.06,0);const h=new F(c,a);h.rotation.x=Math.PI/2,h.rotation.y=Math.PI,l.add(h);const u=new Pt;u.position.set(.06,.06,0);const d=new F(c,a);d.rotation.x=Math.PI/2,u.add(d),e.add(l,u);let f=Math.random()*Math.PI*2;return{group:e,update(g,v){f+=g*(v==="flee"?22:10);const p=Math.sin(f)*.7;l.rotation.z=-p,u.rotation.z=p}}}static createPlatinumBeetle(t){const e=new Pt,n=new sn({color:15856374,emissive:7634316,emissiveIntensity:.15,roughness:.08,metalness:.96,flatShading:!0}),i=new Pe(.13,.28,5,8);i.rotateX(Math.PI/2);const r=new F(i,n);r.position.set(0,.11,-.04),e.add(r);const a=new Yt(.24,.12,.16),o=new F(a,n);o.position.set(0,.12,.14),e.add(o);const c=new Yt(.16,.09,.12),l=new F(c,n);l.position.set(0,.1,.25),e.add(l);const h=new sn({color:10793150,metalness:.8,roughness:.2}),u=new $t(.015,.015,.25);for(let f=-1;f<=1;f+=2)for(let g=0;g<3;g++){const v=new F(u,h);v.position.set(f*.16,.06,.2-g*.2),v.rotation.z=f*.7,e.add(v)}let d=0;return{group:e,update(f){d+=f*3,n.emissiveIntensity=.12+Math.sin(d)*.08}}}static createEmperorCicada(t){const e=new Pt,n=new st({color:3093826,flatShading:!0}),i=new Pe(.18,.55,5,8);i.rotateX(Math.PI/2);const r=new F(i,n);r.position.set(0,.16,-.05),e.add(r);const a=new Yt(.34,.22,.25),o=new F(a,n);o.position.set(0,.18,.2),e.add(o);const c=new st({color:16729943}),l=new pe(.06,5,5);for(let p=-1;p<=1;p+=2){const y=new F(l,c);y.position.set(p*.18,.22,.26),e.add(y)}const h=new st({color:13555424,transparent:!0,opacity:.65,side:fe}),u=new Pt;u.position.set(-.14,.2,.1);const d=new ke(.35,.85);d.rotateX(Math.PI/2);const f=new F(d,h);f.position.set(-.1,0,-.3),u.add(f);const g=new Pt;g.position.set(.14,.2,.1);const v=new F(d,h);v.position.set(.1,0,-.3),g.add(v),e.add(u,g);let m=0;return{group:e,update(p){m+=p*15;const y=Math.sin(m)*.08;u.rotation.z=-.15+y,g.rotation.z=.15-y,r.position.y=.16+Math.sin(m*.5)*.015}}}static createFungusGnat(t){const e=new Pt,n=new sn({color:7381503,emissive:53971,emissiveIntensity:.85,roughness:.3,flatShading:!0}),i=new Pe(.05,.22,4,6);i.rotateX(Math.PI/2);const r=new F(i,n);e.add(r);const a=new st({color:14743546,transparent:!0,opacity:.7,side:fe}),o=new Pt;o.position.set(-.04,.04,0);const c=new ke(.14,.32);c.rotateX(Math.PI/2);const l=new F(c,a);l.position.set(-.06,0,0),o.add(l);const h=new Pt;h.position.set(.04,.04,0);const u=new F(c,a);u.position.set(.06,0,0),h.add(u),e.add(o,h);let d=Math.random()*10;return{group:e,update(f){d+=f;const g=Math.sin(d*45)*.6;o.rotation.z=-g,h.rotation.z=g;const v=.5+Math.sin(d*3.5)*.45;n.emissiveIntensity=v}}}}class xr{data;model;group;world;state="idle";stateTimer=0;targetPosition=new I;homePosition=new I;moveSpeed=1.5;jumpVelocity=0;isGrounded=!0;isCaught=!1;constructor(t,e,n){this.data=t,this.world=n,this.group=new Pt,this.group.position.copy(e),this.homePosition.copy(e),this.model=Oc.createModel(t),this.group.add(this.model.group),this.moveSpeed=t.moveSpeed,this.pickNewWanderTarget()}update(t,e,n=!1,i=!1){if(this.isCaught)return;this.stateTimer-=t;const r=this.group.position.distanceTo(e);let a=this.data.alertDistance;if(n?a*=.45:i&&(a*=1.4),r<a&&this.state!=="flee"){this.state="flee",this.stateTimer=3.5;const l=this.group.position.clone().sub(e);l.y=0,l.normalize(),this.data.modelType==="grasshopper"&&this.isGrounded&&(this.jumpVelocity=8,this.isGrounded=!1),this.targetPosition.copy(this.group.position).addScaledVector(l,12)}let o=!1;switch(this.state){case"idle":this.stateTimer<=0&&(this.state="wander",this.stateTimer=3+Math.random()*4,this.pickNewWanderTarget());break;case"wander":case"return":{const l=this.moveSpeed*t;o=this.moveToTarget(l),(this.stateTimer<=0||!o)&&(this.state="idle",this.stateTimer=1.5+Math.random()*2.5);break}case"flee":{const l=this.moveSpeed*2.2;o=this.moveToTarget(l*t),this.data.modelType==="butterfly"&&(this.targetPosition.y=ze.lerp(this.targetPosition.y,3.5,t)),this.stateTimer<=0&&(this.state="return",this.stateTimer=5,this.targetPosition.copy(this.homePosition));break}}const c=this.world.getTerrainHeight(this.group.position.x,this.group.position.z);if(this.data.modelType==="butterfly"){const l=c+this.data.flightHeight+Math.sin(Date.now()*.003)*.3;this.group.position.y=ze.lerp(this.group.position.y,l,.1)}else this.isGrounded?this.group.position.y=c:(this.jumpVelocity-=20*t,this.group.position.y+=this.jumpVelocity*t,this.group.position.y<=c&&(this.group.position.y=c,this.jumpVelocity=0,this.isGrounded=!0));this.model.update(t,this.state,o)}moveToTarget(t){const e=this.targetPosition.clone().sub(this.group.position);e.y=0;const n=e.length();if(n<.2)return!1;e.normalize(),this.group.position.addScaledVector(e,Math.min(t,n));const i=Math.atan2(e.x,e.z);return this.group.rotation.y=ze.lerp(this.group.rotation.y,i,.15),!0}pickNewWanderTarget(){const t=Math.random()*Math.PI*2,e=3+Math.random()*5;this.targetPosition.x=this.homePosition.x+Math.cos(t)*e,this.targetPosition.z=this.homePosition.z+Math.sin(t)*e}get position(){return this.group.position}}class lg{scene;world;activeInsects=[];maxActiveInsects=22;constructor(t,e){this.scene=t,this.world=e}initialSpawn(t="day",e="sunny"){this.refreshInsectsForCondition(t,e)}refreshInsectsForCondition(t,e){const n=we.getAll().filter(r=>{const a=r.activeTime.includes(t),o=r.weather.includes(e);return a&&o});if(n.length===0)return;for(let r=this.activeInsects.length-1;r>=0;r--){const a=this.activeInsects[r];a.data.activeTime.includes(t)&&a.data.weather.includes(e)||this.removeInsect(a)}const i=this.maxActiveInsects-this.activeInsects.length;for(let r=0;r<i;r++){const a=n[Math.floor(Math.random()*n.length)];this.spawnOne(a)}}spawnOne(t){const e=Math.random()*Math.PI*2,n=6+Math.random()*46,i=Math.cos(e)*n,r=Math.sin(e)*n,a=this.world.getTerrainHeight(i,r);if(a<.6||t.modelType!=="firefly"&&t.modelType!=="dragonfly"&&Math.hypot(i- -5,r-15)<11)return;let o=i,c=r,l=a;if(t.habitats.includes("cave")&&Math.random()<.75){const d=Math.random()*Math.PI*2,f=2+Math.random()*14;o=-120+Math.cos(d)*f,c=-110+Math.sin(d)*f,l=this.world.getTerrainHeight(o,c)}const h=new I(o,l,c),u=new xr(t,h,this.world);this.activeInsects.push(u),this.scene.add(u.group)}respawnInsect(t,e,n,i){let r=t;if(n&&i){const d=we.getAll().filter(f=>f.activeTime.includes(n)&&f.weather.includes(i));d.length>0&&(r=d[Math.floor(Math.random()*d.length)])}const a=Math.random()*Math.PI*2,o=16+Math.random()*18,c=e.x+Math.cos(a)*o,l=e.z+Math.sin(a)*o,h=this.world.getTerrainHeight(c,l);if(h<.6)return;const u=new xr(r,new I(c,h,l),this.world);this.activeInsects.push(u),this.scene.add(u.group)}spawnAt(t,e,n="flee"){const i=new xr(t,e,this.world);return i.state=n,this.activeInsects.push(i),this.scene.add(i.group),i}removeInsect(t){const e=this.activeInsects.indexOf(t);e!==-1&&(this.activeInsects.splice(e,1),this.scene.remove(t.group))}}class Bc{overlayContainer=null;messageToast=null;constructor(){this.createUIElements()}createUIElements(){this.messageToast=document.createElement("div"),this.messageToast.id="catch-toast",this.messageToast.className="catch-toast hidden",document.body.appendChild(this.messageToast),this.overlayContainer=document.createElement("div"),this.overlayContainer.id="catch-modal-overlay",this.overlayContainer.className="catch-modal-overlay hidden",this.overlayContainer.style.display="none",document.body.appendChild(this.overlayContainer)}showCatchSuccess(t,e){if(!this.overlayContainer)return;let n="";t.isGiant?n='<span class="size-tag giant-tag">👑 GIANT!!</span>':t.isBig&&(n='<span class="size-tag big-tag">✨ BIG!</span>');const i="★".repeat(t.rarity)+"☆".repeat(5-t.rarity);this.overlayContainer.innerHTML=`
      <div class="catch-card">
        <div class="sparkle-particles">✨ ✨ ✨</div>
        <div class="catch-header">捕まえた！</div>
        <div class="catch-icon-box">
          <span class="catch-icon">${t.icon}</span>
        </div>
        <div class="catch-name">${t.name}</div>
        <div class="catch-rarity">${i}</div>
        <div class="catch-size-row">
          <span class="size-label">サイズ:</span>
          <span class="size-value">${t.size.toFixed(1)} mm</span>
          ${n}
        </div>
        <button id="btn-catch-ok" class="catch-ok-btn">OK</button>
      </div>
    `,this.overlayContainer.style.display="flex",this.overlayContainer.classList.remove("hidden");const r=document.getElementById("btn-catch-ok");if(r){const a=o=>{o.stopPropagation(),this.overlayContainer&&(this.overlayContainer.style.display="none",this.overlayContainer.classList.add("hidden")),e()};r.addEventListener("click",a,{once:!0}),r.addEventListener("pointerdown",a,{once:!0})}}showFleeToast(){this.messageToast&&(this.messageToast.textContent="💨 逃げられた！",this.messageToast.classList.remove("hidden"),this.messageToast.classList.add("toast-fade-in"),setTimeout(()=>{this.messageToast?.classList.remove("toast-fade-in"),this.messageToast?.classList.add("hidden")},1800))}}class hg{spawner;ui;collection;inventory;player;isPaused=!1;timeManager;weatherManager;equippedNet="standard";baseCatchDistance=3.4;baseCatchAngleCos=Math.cos(65*Math.PI/180);maxVerticalDiff=2.8;constructor(t,e,n,i,r,a,o){this.spawner=new lg(t,e),this.ui=new Bc,this.collection=n,this.inventory=i,this.player=r,this.timeManager=a,this.weatherManager=o;const c=this.timeManager?.getPeriod()||"day",l=this.weatherManager?.currentWeather||"sunny";this.spawner.initialSpawn(c,l),this.timeManager?.onPeriodChange(h=>{this.spawner.refreshInsectsForCondition(h,this.weatherManager?.currentWeather||"sunny")}),this.weatherManager?.onWeatherChange(h=>{this.spawner.refreshInsectsForCondition(this.timeManager?.getPeriod()||"day",h)})}update(t,e,n=!1,i=!1){if(!this.isPaused)for(const r of this.spawner.activeInsects)r.position.distanceToSquared(e)<3600&&r.update(t,e,n,i)}tryCatch(t,e,n){if(this.isPaused)return!1;const i=new I(-Math.sin(n),0,-Math.cos(n)),r=new I(Math.cos(n),0,-Math.sin(n)),a=i.clone().multiplyScalar(.7).addScaledVector(r,e?.7:-.7).normalize();let o=null,c=1/0,l=this.baseCatchDistance,h=this.baseCatchAngleCos;this.equippedNet==="silver"?(l=4.2,h=Math.cos(75*Math.PI/180)):this.equippedNet==="gold"&&(l=5,h=Math.cos(85*Math.PI/180));for(const u of this.spawner.activeInsects){if(u.isCaught)continue;const d=u.position.clone().sub(t);if(Math.abs(d.y)>this.maxVerticalDiff)continue;d.y=0;const g=d.length();g<=l&&(d.normalize(),(a.dot(d)>=h||g<l*.55)&&g<c&&(c=g,o=u))}if(o)return this.executeCatchSuccess(o,t),!0;for(const u of this.spawner.activeInsects)u.position.distanceTo(t)<4.2&&(u.state="flee");return!1}onCatch;executeCatchSuccess(t,e){t.isCaught=!0;const n=we.rollSize(t.data),i={id:t.data.id,name:t.data.name,icon:t.data.icon,rarity:t.data.rarity,size:n.size,isBig:n.isBig,isGiant:n.isGiant,caughtAt:new Date};this.spawner.removeInsect(t),this.collection.registerCatch(i),this.inventory.addItem(i),this.onCatch&&this.onCatch(i),this.player.setAnimState("inspect"),this.isPaused=!0,this.ui.showCatchSuccess(i,()=>{this.isPaused=!1,this.player.setAnimState("idle"),setTimeout(()=>{this.spawner.respawnInsect(t.data,e,this.timeManager?.getPeriod(),this.weatherManager?.currentWeather)},2500)})}spawnTreeInsect(t,e){const n=this.timeManager?.getPeriod()||"day";let i="cicada_minmin";if(e){const o=Math.random();n==="night"||n==="morning"?o<.28?i="hercules_beetle":o<.52?i="stag_beetle":o<.76?i="beetle":i="luna_moth":o<.32?i="rainbow_stag":o<.6?i="paper_kite":n==="evening"?i="cicada_higurashi":i="cicada_minmin"}else n==="night"||n==="morning"?i=Math.random()<.5?"stag_beetle":"beetle":n==="evening"?i="cicada_higurashi":i="cicada_minmin";const r=we.getById(i)||we.getById("cicada_minmin");if(!r)return null;const a=new I(t.x+(Math.random()-.5)*.8,t.y+2.4,t.z+(Math.random()-.5)*.8);return this.spawner.spawnAt(r,a,"flee")}}class ug{entries=new Map;constructor(){this.initializeEntries()}initializeEntries(){const t=we.getAll();for(const e of t)this.entries.set(e.id,{data:e,discovered:!1,catchCount:0,maxSize:0})}registerCatch(t){let e=this.entries.get(t.id);if(!e){const i=we.getById(t.id);if(!i)return!1;e={data:i,discovered:!1,catchCount:0,maxSize:0},this.entries.set(t.id,e)}const n=!e.discovered;return e.discovered=!0,e.catchCount+=1,t.size>e.maxSize&&(e.maxSize=t.size),n&&(e.firstCaughtAt=new Date),n}getEntry(t){return this.entries.get(t)}getAllEntries(){return Array.from(this.entries.values())}getDiscoveredCount(){let t=0;for(const e of this.entries.values())e.discovered&&t++;return t}getTotalCount(){return this.entries.size}}class dg{collection;modalOverlay=null;selectedEntryId=null;isOpen=!1;constructor(t){this.collection=t,this.createUIElements()}createUIElements(){this.modalOverlay=document.createElement("div"),this.modalOverlay.id="book-modal-overlay",this.modalOverlay.className="book-modal-overlay hidden",this.modalOverlay.style.display="none",document.body.appendChild(this.modalOverlay),this.modalOverlay.addEventListener("click",t=>{t.target===this.modalOverlay&&this.close()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.isOpen&&this.close()})}open(){this.isOpen=!0;const t=this.collection.getAllEntries();!this.selectedEntryId&&t.length>0&&(this.selectedEntryId=t[0].data.id),this.render(),this.modalOverlay&&(this.modalOverlay.style.display="flex",this.modalOverlay.classList.remove("hidden"))}close(){this.isOpen=!1,this.modalOverlay&&(this.modalOverlay.style.display="none",this.modalOverlay.classList.add("hidden"))}toggle(){this.isOpen?this.close():this.open()}render(){if(!this.modalOverlay)return;const t=this.collection.getAllEntries(),e=this.collection.getDiscoveredCount(),n=this.collection.getTotalCount(),i=t.find(l=>l.data.id===this.selectedEntryId)||t[0],r=t.map((l,h)=>{const u=String(h+1).padStart(3,"0"),d=l.data.id===i.data.id,f=l.discovered?l.data.name:"？？？？？？",g=l.discovered?"✓":"？";return`
          <div class="${`book-list-item ${d?"selected":""} ${l.discovered?"discovered":"undiscovered"}`}" data-id="${l.data.id}">
            <span class="item-num">${u}</span>
            <span class="item-name">${f}</span>
            <span class="item-mark ${l.discovered?"mark-check":"mark-unknown"}">${g}</span>
          </div>
        `}).join("");let a="";if(i.discovered){const l=i.data,h="★".repeat(l.rarity)+"☆".repeat(5-l.rarity),u={grassland:"草原",forest:"森林",mountain:"山",pond:"池",coast:"海岸"},d=l.habitats.map(f=>u[f]||f).join("・");a=`
        <div class="detail-card">
          <div class="detail-icon-circle">
            <span class="detail-icon">${l.icon}</span>
          </div>
          <div class="detail-name">${l.name}</div>
          <div class="detail-rarity">レア度 ${h}</div>
          <div class="detail-stats-box">
            <div class="stat-row">
              <span class="stat-label">最大サイズ:</span>
              <span class="stat-val highlight-val">${i.maxSize.toFixed(1)} mm</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">捕獲数:</span>
              <span class="stat-val">${i.catchCount} 匹</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">生息地:</span>
              <span class="stat-val">${d}</span>
            </div>
          </div>
          <div class="detail-desc">${l.description}</div>
        </div>
      `}else a=`
        <div class="detail-card undiscovered-card">
          <div class="detail-icon-circle unknown-icon-circle">
            <span class="detail-icon">❓</span>
          </div>
          <div class="detail-name">未発見</div>
          <div class="detail-rarity">レア度 ？？？</div>
          <div class="detail-stats-box">
            <div class="stat-row">
              <span class="stat-label">最大サイズ:</span>
              <span class="stat-val">--- mm</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">捕獲数:</span>
              <span class="stat-val">0 匹</span>
            </div>
          </div>
          <div class="detail-desc hint-desc">
            まだ捕まえたことがない昆虫です。<br />島を歩き回って探してみよう！
          </div>
        </div>
      `;this.modalOverlay.innerHTML=`
      <div class="book-container">
        <!-- Header -->
        <div class="book-header">
          <div class="book-title-row">
            <span class="book-header-icon">📖</span>
            <span class="book-title">昆虫図鑑</span>
            <span class="book-progress">${e} / ${n}</span>
          </div>
          <button id="btn-close-book" class="book-close-btn" aria-label="閉じる">✕</button>
        </div>

        <!-- Body (2 columns on landscape/desktop) -->
        <div class="book-body">
          <div class="book-list-pane">
            <div class="list-heading">昆虫リスト</div>
            <div class="book-list-scroll">
              ${r}
            </div>
          </div>
          <div class="book-detail-pane">
            ${a}
          </div>
        </div>
      </div>
    `,this.modalOverlay.querySelectorAll(".book-list-item").forEach(l=>{const h=()=>{const u=l.getAttribute("data-id");u&&(this.selectedEntryId=u,this.render())};l.addEventListener("click",h),l.addEventListener("pointerdown",h)});const c=document.getElementById("btn-close-book");if(c){const l=h=>{h.stopPropagation(),this.close()};c.addEventListener("click",l),c.addEventListener("pointerdown",l)}}}class fg{timeInSeconds=14*3600;timeSpeed=120;currentPeriod="day";onPeriodChangeCallbacks=[];timeBadgeVal=null;timeBadgeIcon=null;constructor(){this.timeBadgeVal=document.querySelector(".time-badge .badge-val"),this.timeBadgeIcon=document.querySelector(".time-badge .badge-icon"),this.currentPeriod=this.calculatePeriod(),this.updateHUD()}update(t){this.timeInSeconds=(this.timeInSeconds+t*this.timeSpeed)%86400;const e=this.calculatePeriod();if(e!==this.currentPeriod){this.currentPeriod=e;for(const n of this.onPeriodChangeCallbacks)n(e)}this.updateHUD()}onPeriodChange(t){this.onPeriodChangeCallbacks.push(t)}getPeriod(){return this.currentPeriod}getTime(){const t=this.timeInSeconds/3600,e=Math.floor(t),n=Math.floor(this.timeInSeconds%3600/60);return{hours:e,minutes:n,totalHours:t}}getTimeString(){const{hours:t,minutes:e}=this.getTime(),n=t.toString().padStart(2,"0"),i=e.toString().padStart(2,"0");return`${n}:${i}`}getTimeIcon(){switch(this.currentPeriod){case"morning":return"🌄";case"day":return"☀️";case"evening":return"🌅";case"night":return"🌙"}}advanceHours(t){this.timeInSeconds=(this.timeInSeconds+t*3600)%86400,this.currentPeriod=this.calculatePeriod();for(const e of this.onPeriodChangeCallbacks)e(this.currentPeriod);this.updateHUD()}setTime(t,e=0){this.timeInSeconds=(t*3600+e*60)%86400,this.currentPeriod=this.calculatePeriod();for(const n of this.onPeriodChangeCallbacks)n(this.currentPeriod);this.updateHUD()}calculatePeriod(){const t=this.timeInSeconds/3600;return t>=6&&t<10?"morning":t>=10&&t<16.5?"day":t>=16.5&&t<19.5?"evening":"night"}updateHUD(){this.timeBadgeVal&&(this.timeBadgeVal.textContent=this.getTimeString()),this.timeBadgeIcon&&(this.timeBadgeIcon.textContent=this.getTimeIcon())}}class pg{currentWeather="sunny";timer=0;changeInterval=240;onWeatherChangeCallbacks=[];scene;rainParticles=null;rainCount=1200;rainGeometry=null;constructor(t){this.scene=t,this.initRain()}initRain(){const t=new Float32Array(this.rainCount*3);for(let n=0;n<this.rainCount;n++)t[n*3+0]=(Math.random()-.5)*60,t[n*3+1]=Math.random()*30,t[n*3+2]=(Math.random()-.5)*60;this.rainGeometry=new ye,this.rainGeometry.setAttribute("position",new qe(t,3));const e=new Ta({color:10803440,size:.25,transparent:!0,opacity:0,depthWrite:!1});this.rainParticles=new Mc(this.rainGeometry,e),this.scene.add(this.rainParticles)}update(t,e){if(this.timer+=t,this.timer>=this.changeInterval&&(this.timer=0,this.rollWeather()),this.rainParticles&&this.rainGeometry){const n=this.rainParticles.material,i=this.currentWeather==="rain"?.75:0;if(n.opacity=ze.lerp(n.opacity,i,t*3),n.opacity>.02){this.rainParticles.position.x=e.x,this.rainParticles.position.z=e.z;const r=this.rainGeometry.getAttribute("position"),a=r.array;for(let o=0;o<this.rainCount;o++)a[o*3+1]-=t*24,a[o*3+1]<0&&(a[o*3+1]=25+Math.random()*5,a[o*3+0]=(Math.random()-.5)*60,a[o*3+2]=(Math.random()-.5)*60);r.needsUpdate=!0}}}onWeatherChange(t){this.onWeatherChangeCallbacks.push(t)}setWeather(t){if(this.currentWeather!==t){this.currentWeather=t;for(const e of this.onWeatherChangeCallbacks)e(t)}}toggleNextWeather(){const t=["sunny","cloudy","rain"],e=t[(t.indexOf(this.currentWeather)+1)%t.length];this.setWeather(e)}rollWeather(){const t=Math.random();let e="sunny";t<.65?e="sunny":t<.85?e="cloudy":e="rain",this.setWeather(e)}}class mg{items=[];maxCapacity=24;onChangeCallbacks=[];constructor(){this.loadFromStorage()}addItem(t){return this.isFull()?!1:(this.items.push(t),this.notifyChange(),!0)}removeItem(t){if(t>=0&&t<this.items.length){const e=this.items.splice(t,1)[0];return this.notifyChange(),e}return null}clearAll(){const t=[...this.items];return this.items=[],this.notifyChange(),t}isFull(){return this.items.length>=this.maxCapacity}getCount(){return this.items.length}onChange(t){this.onChangeCallbacks.push(t)}notifyChange(){this.saveToStorage();for(const t of this.onChangeCallbacks)t(this.items)}saveToStorage(){try{localStorage.setItem("bug_island_inventory",JSON.stringify(this.items))}catch{}}loadFromStorage(){try{const t=localStorage.getItem("bug_island_inventory");t&&(this.items=JSON.parse(t))}catch{this.items=[]}}}class gg{money=0;inventory;audio;moneyBadgeVal=null;equippedNet="standard";hasSneakers=!1;hasLargeBasket=!1;honeyCount=0;medicineCount=0;redJellyCount=0;greenJellyCount=0;onUpgradeChange;catalog=[{id:"net_silver",name:"ぎんのあみ",category:"tool",icon:"🥈",price:300,description:"銀色に輝く丈夫な網。虫を捕まえるリーチと範囲が20%アップ！"},{id:"net_gold",name:"きんのあみ",category:"tool",icon:"🥇",price:800,description:"黄金に輝く究極の虫取り網。捕獲リーチと角度が大幅に拡大！"},{id:"sneakers",name:"はやいスニーカー",category:"equipment",icon:"👟",price:350,description:"軽量でグリップ力の高い靴。歩き＆ダッシュの移動速度が20%アップ！"},{id:"basket_large",name:"おおきなかご",category:"equipment",icon:"🧺",price:250,description:"収納力抜群の大きめ虫かご。持てる虫の数が24匹から36匹に増加！"},{id:"honey",name:"あまいミツ",category:"consumable",icon:"🍯",price:60,description:"木に塗ると甘い香りでレアなクワガタやセミを惹きつける！（1回使い切り）"},{id:"medicine",name:"きずぐすり",category:"consumable",icon:"💊",price:40,description:"ハチに刺された時の応急手当て薬。体力を50回復する。"},{id:"jelly_red",name:"ちからの赤ゼリー",category:"consumable",icon:"🔴",price:120,description:"樹液を濃縮した特製ゼリー。甲虫に食べさせると相撲パワーが永続+2アップ！"},{id:"jelly_green",name:"ふんばりの緑ゼリー",category:"consumable",icon:"🟢",price:120,description:"薬草エキス入りの特製ゼリー。甲虫に食べさせると相撲スタミナが永続+2アップ！"}];constructor(t,e){this.inventory=t,this.audio=e,this.moneyBadgeVal=document.querySelector(".money-badge .badge-val"),this.loadFromStorage(),this.updateHUD(),this.applyBasketUpgrade()}setAudio(t){this.audio=t}buyItem(t){const e=this.catalog.find(n=>n.id===t);return e?t==="net_silver"&&(this.equippedNet==="silver"||this.equippedNet==="gold")?{success:!1,message:"すでに銀以上の網を持っています！"}:t==="net_gold"&&this.equippedNet==="gold"?{success:!1,message:"すでに金の網を持っています！"}:t==="sneakers"&&this.hasSneakers?{success:!1,message:"すでにスニーカーを所持しています！"}:t==="basket_large"&&this.hasLargeBasket?{success:!1,message:"すでにおおきなかごを持っています！"}:this.money<e.price?{success:!1,message:"ゴールドが足りません！"}:(this.money-=e.price,this.updateHUD(!0),t==="net_silver"?this.equippedNet="silver":t==="net_gold"?this.equippedNet="gold":t==="sneakers"?this.hasSneakers=!0:t==="basket_large"?(this.hasLargeBasket=!0,this.applyBasketUpgrade()):t==="honey"?this.honeyCount+=1:t==="medicine"?this.medicineCount+=1:t==="jelly_red"?this.redJellyCount+=1:t==="jelly_green"&&(this.greenJellyCount+=1),this.audio&&this.audio.playPurchase(),this.saveToStorage(),this.onUpgradeChange&&this.onUpgradeChange(),{success:!0,message:`${e.name} を購入しました！`}):{success:!1,message:"商品が見つかりません。"}}feedJelly(t,e){return we.isSumoFighter(t.id)?e==="red"?this.redJellyCount<=0?{success:!1,message:"ちからの赤ゼリーを持っていません！"}:(this.redJellyCount-=1,t.power=(t.power||0)+2,t.level=(t.level||1)+1,this.saveToStorage(),this.audio&&this.audio.playPurchase(),{success:!0,message:`${t.name} に赤ゼリーを食べさせた！パワーが +2 強化された！`}):this.greenJellyCount<=0?{success:!1,message:"ふんばりの緑ゼリーを持っていません！"}:(this.greenJellyCount-=1,t.stamina=(t.stamina||0)+2,t.level=(t.level||1)+1,this.saveToStorage(),this.audio&&this.audio.playPurchase(),{success:!0,message:`${t.name} に緑ゼリーを食べさせた！スタミナが +2 強化された！`}):{success:!1,message:"この昆虫は相撲に出場できないためゼリーを食べません。"}}useMedicine(){return this.medicineCount<=0?!1:(this.medicineCount-=1,this.saveToStorage(),this.onUpgradeChange&&this.onUpgradeChange(),!0)}useHoney(){return this.honeyCount<=0?!1:(this.honeyCount-=1,this.saveToStorage(),this.onUpgradeChange&&this.onUpgradeChange(),!0)}applyBasketUpgrade(){this.hasLargeBasket&&(this.inventory.maxCapacity=36)}calculatePrice(t){const e=we.getById(t.id)?.basePrice||50;let n=1;return t.isGiant?n=1.6:t.isBig&&(n=1.3),Math.round(e*n)}sellItem(t){const e=this.inventory.items[t];if(!e)return 0;const n=this.calculatePrice(e);return this.inventory.removeItem(t),this.addMoney(n),this.playCoinSound(),n}sellAll(){const t=this.inventory.getCount();if(t===0)return{totalG:0,count:0};let e=0;for(const n of this.inventory.items)e+=this.calculatePrice(n);return this.inventory.clearAll(),this.addMoney(e),this.playCoinSound(),{totalG:e,count:t}}addMoney(t){this.money+=t,this.updateHUD(!0),this.saveToStorage()}addGold(t){this.addMoney(t)}updateHUD(t=!1){this.moneyBadgeVal&&(this.moneyBadgeVal.textContent=`${this.money.toLocaleString()} G`,t&&(this.moneyBadgeVal.parentElement?.classList.remove("badge-pop"),this.moneyBadgeVal.parentElement?.offsetWidth,this.moneyBadgeVal.parentElement?.classList.add("badge-pop")))}playCoinSound(){this.audio&&this.audio.playPurchase()}saveToStorage(){try{localStorage.setItem("bug_island_money",this.money.toString()),localStorage.setItem("bug_island_net",this.equippedNet),localStorage.setItem("bug_island_sneakers",this.hasSneakers?"true":"false"),localStorage.setItem("bug_island_basket_large",this.hasLargeBasket?"true":"false"),localStorage.setItem("bug_island_honey",this.honeyCount.toString()),localStorage.setItem("bug_island_medicine",this.medicineCount.toString()),localStorage.setItem("bug_island_jelly_red",this.redJellyCount.toString()),localStorage.setItem("bug_island_jelly_green",this.greenJellyCount.toString())}catch{}}loadFromStorage(){try{const t=localStorage.getItem("bug_island_money");t&&(this.money=parseInt(t,10)||0);const e=localStorage.getItem("bug_island_net");(e==="silver"||e==="gold")&&(this.equippedNet=e),this.hasSneakers=localStorage.getItem("bug_island_sneakers")==="true",this.hasLargeBasket=localStorage.getItem("bug_island_basket_large")==="true",this.honeyCount=parseInt(localStorage.getItem("bug_island_honey")||"0",10)||0,this.medicineCount=parseInt(localStorage.getItem("bug_island_medicine")||"0",10)||0,this.redJellyCount=parseInt(localStorage.getItem("bug_island_jelly_red")||"0",10)||0,this.greenJellyCount=parseInt(localStorage.getItem("bug_island_jelly_green")||"0",10)||0}catch{this.money=0}}}class vg{inventory;shop;healthManager;overlay=null;isOpen=!1;currentTab="sell";onUseHoney;constructor(t,e,n){this.inventory=t,this.shop=e,this.healthManager=n,this.createDOM(),this.inventory.onChange(()=>{this.isOpen&&this.renderContent()}),this.shop.onUpgradeChange=()=>{this.isOpen&&this.renderContent()}}setHealthManager(t){this.healthManager=t}createDOM(){const t=document.createElement("div");t.id="shop-modal",t.className="shop-modal-overlay",t.style.display="none",t.innerHTML=`
      <div class="shop-container">
        <!-- Header -->
        <header class="shop-header">
          <div class="shop-title-row">
            <span class="shop-header-icon">🏪</span>
            <h2 class="shop-title">島の買い取り屋台＆道具屋</h2>
            <span class="shop-capacity-tag" id="shop-capacity">0 / 24</span>
          </div>
          <button class="shop-close-btn" id="btn-close-shop" aria-label="閉じる">✕</button>
        </header>

        <!-- Subbar (Tabs & Money) -->
        <div class="shop-subbar-row">
          <div class="shop-tabs">
            <button class="shop-tab-btn active" id="tab-sell" data-tab="sell">🧺 うりば (売却)</button>
            <button class="shop-tab-btn" id="tab-buy" data-tab="buy">🛍️ かいもの (購入)</button>
          </div>
          <div class="shop-money-display">
            <span class="subbar-label">所持金:</span>
            <span class="subbar-money" id="shop-current-money">0 G</span>
          </div>
        </div>

        <!-- Scrollable Content Area -->
        <div class="shop-items-scroll" id="shop-items-list">
          <!-- Dynamically populated -->
        </div>

        <!-- Footer for Sell Tab -->
        <footer class="shop-footer" id="shop-sell-footer">
          <div class="shop-footer-summary">
            <span class="summary-label">すべて売却時の合計:</span>
            <span class="summary-val" id="shop-total-val">0 G</span>
          </div>
          <button class="shop-sell-all-btn" id="btn-sell-all">ぜんぶ売る</button>
        </footer>

        <!-- Footer for Buy Tab (Consumables Quick Bag) -->
        <footer class="shop-footer shop-buy-footer" id="shop-buy-footer" style="display: none;">
          <div class="bag-summary">
            <span class="bag-label">手持ちアイテム:</span>
            <span class="bag-badge" id="bag-honey-count">🍯 ミツ: 0個</span>
            <span class="bag-badge" id="bag-med-count">💊 薬: 0個</span>
          </div>
          <button class="shop-use-med-btn" id="btn-use-medicine">💊 薬を飲む (+50 HP)</button>
        </footer>
      </div>
    `,document.body.appendChild(t),this.overlay=t,t.querySelector("#btn-close-shop")?.addEventListener("click",()=>this.close()),t.addEventListener("click",o=>{o.target===t&&this.close()});const n=t.querySelector("#tab-sell"),i=t.querySelector("#tab-buy");n?.addEventListener("click",()=>{this.currentTab="sell",n.classList.add("active"),i.classList.remove("active"),this.renderContent()}),i?.addEventListener("click",()=>{this.currentTab="buy",i.classList.add("active"),n.classList.remove("active"),this.renderContent()}),t.querySelector("#btn-sell-all")?.addEventListener("click",()=>{if(this.inventory.getCount()===0)return;const o=this.shop.sellAll();this.renderContent(),this.showToast(`${o.count}匹の虫を売って ${o.totalG.toLocaleString()} G を手に入れた！💰`)}),t.querySelector("#btn-use-medicine")?.addEventListener("click",()=>{if(this.shop.medicineCount<=0){this.showToast("きずぐすりを持っていません！");return}if(this.healthManager&&this.healthManager.currentHealth>=this.healthManager.maxHealth){this.showToast("体力はすでに満タンです！❤️");return}this.shop.useMedicine()&&(this.healthManager?.heal(50),this.renderContent(),this.showToast("💊 きずぐすりを使って体力を50回復した！"))})}toggle(){this.isOpen?this.close():this.open()}open(t="sell"){if(!this.overlay)return;this.isOpen=!0,this.currentTab=t;const e=this.overlay.querySelector("#tab-sell"),n=this.overlay.querySelector("#tab-buy");t==="buy"?(n?.classList.add("active"),e?.classList.remove("active")):(e?.classList.add("active"),n?.classList.remove("active")),this.overlay.style.display="flex",this.renderContent()}close(){this.overlay&&(this.isOpen=!1,this.overlay.style.display="none")}renderContent(){if(!this.overlay)return;const t=this.overlay.querySelector("#shop-capacity"),e=this.overlay.querySelector("#shop-current-money"),n=this.overlay.querySelector("#shop-sell-footer"),i=this.overlay.querySelector("#shop-buy-footer");t&&(t.textContent=`${this.inventory.getCount()} / ${this.inventory.maxCapacity}`),e&&(e.textContent=`${this.shop.money.toLocaleString()} G`),this.currentTab==="sell"?(n.style.display="flex",i.style.display="none",this.renderSellList()):(n.style.display="none",i.style.display="flex",this.renderBuyList())}renderSellList(){if(!this.overlay)return;const t=this.overlay.querySelector("#shop-items-list"),e=this.overlay.querySelector("#shop-total-val"),n=this.overlay.querySelector("#btn-sell-all");if(!t||!e)return;let i=0;for(const r of this.inventory.items)i+=this.shop.calculatePrice(r);if(e.textContent=`${i.toLocaleString()} G`,n&&(n.disabled=this.inventory.getCount()===0),t.innerHTML="",this.inventory.getCount()===0){t.innerHTML=`
        <div class="shop-empty-state">
          <span class="empty-icon">🧺</span>
          <p class="empty-text">虫かごは空っぽです！<br>島で虫をあみで捕まえましょう。</p>
        </div>
      `;return}this.inventory.items.forEach((r,a)=>{const o=this.shop.calculatePrice(r),c=document.createElement("div");c.className="shop-item-card";let l="";r.isGiant?l='<span class="shop-size-tag tag-giant">特大!</span>':r.isBig&&(l='<span class="shop-size-tag tag-big">大物!</span>'),c.innerHTML=`
        <div class="item-card-left">
          <span class="item-card-icon">${r.icon}</span>
          <div class="item-card-info">
            <div class="item-card-name-row">
              <span class="item-card-name">${r.name}</span>
              ${l}
            </div>
            <div class="item-card-size">${r.size.toFixed(1)} mm</div>
          </div>
        </div>
        <div class="item-card-right">
          <span class="item-card-price">${o} G</span>
          <button class="item-card-sell-btn" data-index="${a}">売る</button>
        </div>
      `,c.querySelector(".item-card-sell-btn")?.addEventListener("click",u=>{u.stopPropagation();const d=this.shop.sellItem(a);this.renderContent(),this.showToast(`${r.name} を売って ${d} G を獲得！`)}),t.appendChild(c)})}renderBuyList(){if(!this.overlay)return;const t=this.overlay.querySelector("#shop-items-list"),e=this.overlay.querySelector("#bag-honey-count"),n=this.overlay.querySelector("#bag-med-count");e&&(e.textContent=`🍯 ミツ: ${this.shop.honeyCount}個`),n&&(n.textContent=`💊 薬: ${this.shop.medicineCount}個`),t&&(t.innerHTML="",this.shop.catalog.forEach(i=>{const r=document.createElement("div");r.className="shop-buy-card";let a=!1;i.id==="net_silver"?a=this.shop.equippedNet==="silver"||this.shop.equippedNet==="gold":i.id==="net_gold"?a=this.shop.equippedNet==="gold":i.id==="sneakers"?a=this.shop.hasSneakers:i.id==="basket_large"&&(a=this.shop.hasLargeBasket);const o=this.shop.money>=i.price;r.innerHTML=`
        <div class="buy-card-left">
          <span class="buy-card-icon">${i.icon}</span>
          <div class="buy-card-info">
            <div class="buy-card-name-row">
              <span class="buy-card-name">${i.name}</span>
              ${a?'<span class="buy-owned-badge">所持中</span>':""}
            </div>
            <p class="buy-card-desc">${i.description}</p>
          </div>
        </div>
        <div class="buy-card-right">
          <span class="buy-card-price">${i.price} G</span>
          <button class="buy-action-btn ${a?"btn-owned":""}" ${a||!o?"disabled":""}>
            ${a?"所持済":"購入"}
          </button>
        </div>
      `;const c=r.querySelector(".buy-action-btn");a||c?.addEventListener("click",l=>{l.stopPropagation();const h=this.shop.buyItem(i.id);this.renderContent(),this.showToast(h.message)}),t.appendChild(r)}))}showToast(t){document.querySelector(".shop-toast")?.remove();const n=document.createElement("div");n.className="shop-toast",n.textContent=t,document.body.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),300)},2200)}}class Mr{static SAVE_KEY="bug_island_save_data_v8";static OLD_SAVE_KEY_V7="bug_island_save_data_v7";static OLD_SAVE_KEY_V5="bug_island_save_data_v5";static save(t,e,n,i,r,a){try{const o={version:8,money:t.money,inventory:e.items,collection:n.caughtHistory||{},timeHours:i.getTime().totalHours,donations:r?.serialize(),quests:a?.serialize(),savedAt:new Date().toISOString()};localStorage.setItem(this.SAVE_KEY,JSON.stringify(o))}catch{}}static load(){try{let t=localStorage.getItem(this.SAVE_KEY);return t||(t=localStorage.getItem(this.OLD_SAVE_KEY_V7)),t||(t=localStorage.getItem(this.OLD_SAVE_KEY_V5)),t?JSON.parse(t):null}catch{return null}}static clear(){localStorage.removeItem(this.SAVE_KEY),localStorage.removeItem(this.OLD_SAVE_KEY_V7),localStorage.removeItem(this.OLD_SAVE_KEY_V5)}}class _g{ctx=null;isMuted=!1;masterGain=null;bgmGain=null;seGain=null;ambientTimer=0;rainGainNode=null;seaGainNode=null;constructor(){this.isMuted=localStorage.getItem("bug_island_muted")==="true";const t=()=>{this.ensureContext(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t)}ensureContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.setValueAtTime(.35,this.ctx.currentTime),this.bgmGain.connect(this.masterGain),this.seGain=this.ctx.createGain(),this.seGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.seGain.connect(this.masterGain),this.setupContinuousAmbience()}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("bug_island_muted",this.isMuted.toString()),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:1,this.ctx.currentTime),this.isMuted}get muted(){return this.isMuted}setupContinuousAmbience(){if(!(!this.ctx||!this.bgmGain))try{const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,r=0,a=0;for(let u=0;u<t;u++){const d=Math.random()*2-1;i=.99886*i+d*.0555179,r=.99332*r+d*.0750759,a=.969*a+d*.153852,n[u]=(i+r+a)*.1}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(320,this.ctx.currentTime),this.seaGainNode=this.ctx.createGain(),this.seaGainNode.gain.setValueAtTime(.1,this.ctx.currentTime),o.connect(c),c.connect(this.seaGainNode),this.seaGainNode.connect(this.bgmGain),o.start();const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.frequency.setValueAtTime(.15,this.ctx.currentTime),h.gain.setValueAtTime(.05,this.ctx.currentTime),l.connect(h),h.connect(this.seaGainNode.gain),l.start()}catch{}}updateAmbience(t,e,n){const i=this.ensureContext();!i||this.isMuted||(e==="rain"?this.rainGainNode?this.rainGainNode.gain.setTargetAtTime(.25,i.currentTime,.5):this.startRainSound():this.rainGainNode&&this.rainGainNode.gain.setTargetAtTime(.001,i.currentTime,.5),this.ambientTimer-=n,this.ambientTimer<=0&&(e!=="rain"?t==="day"||t==="morning"?(this.playBirdChirp(),this.ambientTimer=4+Math.random()*5):t==="sunset"?(this.playHigurashiChirp(),this.ambientTimer=3+Math.random()*4):t==="night"&&(this.playNightCricket(),this.ambientTimer=2.5+Math.random()*3.5):this.ambientTimer=5))}startRainSound(){if(!(!this.ctx||!this.bgmGain))try{const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let a=0;a<t;a++)n[a]=(Math.random()*2-1)*.15;const i=this.ctx.createBufferSource();i.buffer=e,i.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1400,this.ctx.currentTime),r.Q.setValueAtTime(1.2,this.ctx.currentTime),this.rainGainNode=this.ctx.createGain(),this.rainGainNode.gain.setValueAtTime(.25,this.ctx.currentTime),i.connect(r),r.connect(this.rainGainNode),this.rainGainNode.connect(this.bgmGain),i.start()}catch{}}playBirdChirp(){if(!this.ctx||!this.seGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine";const i=2400+Math.random()*600;e.frequency.setValueAtTime(i,t),e.frequency.exponentialRampToValueAtTime(i*1.4,t+.06),e.frequency.exponentialRampToValueAtTime(i*.9,t+.12),n.gain.setValueAtTime(.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.seGain),e.start(t),e.stop(t+.15)}playHigurashiChirp(){if(!this.ctx||!this.seGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(3200,t),e.frequency.linearRampToValueAtTime(2600,t+.35),n.gain.setValueAtTime(.06,t),n.gain.exponentialRampToValueAtTime(.001,t+.4),e.connect(n),n.connect(this.seGain),e.start(t),e.stop(t+.42)}playNightCricket(){if(!this.ctx||!this.seGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(4500,t),n.gain.setValueAtTime(.04,t),n.gain.setValueAtTime(.01,t+.04),n.gain.setValueAtTime(.04,t+.08),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.seGain),e.start(t),e.stop(t+.16)}playFootstep(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="triangle",n.frequency.setValueAtTime(110+Math.random()*30,e),n.frequency.exponentialRampToValueAtTime(45,e+.07),i.gain.setValueAtTime(.07,e),i.gain.exponentialRampToValueAtTime(.001,e+.07),n.connect(i),i.connect(this.seGain),n.start(e),n.stop(e+.08)}playJump(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(260,e),n.frequency.exponentialRampToValueAtTime(520,e+.14),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(i),i.connect(this.seGain),n.start(e),n.stop(e+.18)}playNetSwing(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.18),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*.3;const a=t.createBufferSource();a.buffer=i;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(800,e),o.frequency.linearRampToValueAtTime(1800,e+.08),o.frequency.linearRampToValueAtTime(400,e+.18);const c=t.createGain();c.gain.setValueAtTime(.18,e),c.gain.exponentialRampToValueAtTime(.001,e+.18),a.connect(o),o.connect(c),c.connect(this.seGain),a.start(e)}playTreeShake(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=Math.floor(t.sampleRate*.35),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*.25;const a=t.createBufferSource();a.buffer=i;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1200,e),o.Q.setValueAtTime(.8,e);const c=t.createGain();c.gain.setValueAtTime(.2,e),c.gain.exponentialRampToValueAtTime(.001,e+.35),a.connect(o),o.connect(c),c.connect(this.seGain),a.start(e)}playWaspWarning(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(280,e),n.frequency.linearRampToValueAtTime(320,e+.1),n.frequency.linearRampToValueAtTime(280,e+.2),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.4),n.connect(i),i.connect(this.seGain),n.start(e),n.stop(e+.4)}playDamage(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="square",n.frequency.setValueAtTime(150,e),n.frequency.exponentialRampToValueAtTime(40,e+.25),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.001,e+.25),n.connect(i),i.connect(this.seGain),n.start(e),n.stop(e+.26)}playFaint(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime;[329.63,311.13,293.66,277.18].forEach((i,r)=>{const a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.setValueAtTime(i,e+r*.18),o.gain.setValueAtTime(.18,e+r*.18),o.gain.exponentialRampToValueAtTime(.001,e+r*.18+.25),a.connect(o),o.connect(this.seGain),a.start(e+r*.18),a.stop(e+r*.18+.26)})}playPurchase(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const a=t.createOscillator(),o=t.createGain();a.type="triangle",a.frequency.setValueAtTime(i,e+r*.06),o.gain.setValueAtTime(.15,e+r*.06),o.gain.exponentialRampToValueAtTime(.001,e+r*.06+.22),a.connect(o),o.connect(this.seGain),a.start(e+r*.06),a.stop(e+r*.06+.25)})}playCoin(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime;[987.77,1318.51].forEach((n,i)=>{const r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.08),a.gain.setValueAtTime(.16,e+i*.08),a.gain.exponentialRampToValueAtTime(.001,e+i*.08+.22),r.connect(a),a.connect(this.seGain),r.start(e+i*.08),r.stop(e+i*.08+.24)})}playFanfare(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((i,r)=>{const a=t.createOscillator(),o=t.createGain();a.type="triangle",a.frequency.setValueAtTime(i,e+r*.1),o.gain.setValueAtTime(.2,e+r*.1),o.gain.exponentialRampToValueAtTime(.001,e+r*.1+.35),a.connect(o),o.connect(this.seGain),a.start(e+r*.1),a.stop(e+r*.1+.38)})}playGong(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(220,e+1.2),i.gain.setValueAtTime(.4,e),i.gain.exponentialRampToValueAtTime(.001,e+1.2),n.connect(i),i.connect(this.seGain),n.start(e),n.stop(e+1.2)}playClash(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.exponentialRampToValueAtTime(40,e+.15),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(i),i.connect(this.seGain),n.start(e),n.stop(e+.2)}playCheer(){const t=this.ensureContext();if(!t||!this.seGain||this.isMuted)return;const e=t.currentTime,n=t.sampleRate*.8,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*Math.sin(l/n*Math.PI);const a=t.createBufferSource();a.buffer=i;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=1e3,o.Q.value=2;const c=t.createGain();c.gain.setValueAtTime(.2,e),c.gain.exponentialRampToValueAtTime(.001,e+.8),a.connect(o),o.connect(c),c.connect(this.seGain),a.start(e),a.stop(e+.8)}}class yg{currentHealth=100;maxHealth=100;player;audio;healthBadgeVal=null;isFainting=!1;onFaintComplete;constructor(t,e){this.player=t,this.audio=e,this.healthBadgeVal=document.querySelector(".health-badge .badge-val"),this.updateHUD()}setAudio(t){this.audio=t}takeDamage(t,e){this.isFainting||(this.currentHealth=Math.max(0,this.currentHealth-t),this.updateHUD(!0),this.audio&&this.audio.playDamage(),this.triggerDamageFlash(),this.currentHealth<=0&&this.startFaintSequence(e))}heal(t){this.currentHealth=Math.min(this.maxHealth,this.currentHealth+t),this.updateHUD(!0)}updateHUD(t=!1){if(this.healthBadgeVal&&(this.healthBadgeVal.textContent=`${this.currentHealth}`,t)){const e=this.healthBadgeVal.parentElement;e?.classList.remove("badge-pop"),e?.offsetWidth,e?.classList.add("badge-pop")}}triggerDamageFlash(){let t=document.getElementById("damage-flash-overlay");t||(t=document.createElement("div"),t.id="damage-flash-overlay",document.body.appendChild(t)),t.classList.remove("active"),t.offsetWidth,t.classList.add("active"),setTimeout(()=>{t?.classList.remove("active")},450)}startFaintSequence(t){this.isFainting=!0,this.player.setAnimState("faint"),this.audio&&this.audio.playFaint();let e=document.getElementById("faint-blackout-overlay");e||(e=document.createElement("div"),e.id="faint-blackout-overlay",e.innerHTML=`
        <div class="faint-dialog">
          <div class="faint-icon">😵</div>
          <h2 class="faint-title">きぜつしてしまった…！</h2>
          <p class="faint-msg">ハチに刺されて目の前が真っ暗になった…。<br>島の買い取り屋台の店主に助けられ、広場で目を覚ましました。</p>
          <button id="btn-wake-up" class="faint-btn">目を覚ます</button>
        </div>
      `,document.body.appendChild(e)),setTimeout(()=>{e?.classList.add("visible");const n=document.getElementById("btn-wake-up"),i=()=>{n?.removeEventListener("click",i),e?.classList.remove("visible"),this.currentHealth=this.maxHealth,this.updateHUD(!0),this.player.setAnimState("idle"),this.isFainting=!1,t&&t(),this.onFaintComplete&&this.onFaintComplete()};n?.addEventListener("click",i)},800)}get isPlayerFainting(){return this.isFainting}}class xg{group;scene;player;healthManager;audio;collection;inventory;ui;isActive=!1;state="falling_nest";timer=0;chaseSpeed=6.4;nestMesh;waspsGroup;waspInstances=[];constructor(t,e,n,i,r,a,o){this.scene=t,this.player=e,this.healthManager=n,this.collection=i,this.inventory=r,this.ui=a,this.audio=o,this.group=new Pt,this.group.visible=!1;const c=new We(.35,.6,7);c.rotateX(Math.PI);const l=new st({color:9135416,flatShading:!0});this.nestMesh=new F(c,l),this.group.add(this.nestMesh),this.waspsGroup=new Pt,this.waspsGroup.visible=!1;const h=new We(.12,.3,5);h.rotateX(Math.PI/2);const u=new st({color:15114496,flatShading:!0});for(let d=0;d<5;d++){const f=new F(h,u);f.position.set((Math.random()-.5)*.8,(Math.random()-.5)*.6,(Math.random()-.5)*.8),this.waspsGroup.add(f),this.waspInstances.push(f)}this.group.add(this.waspsGroup),this.scene.add(this.group)}setAudio(t){this.audio=t}triggerSwarm(t){this.isActive||(this.isActive=!0,this.state="falling_nest",this.timer=0,this.group.position.set(t.x+.3,t.y+2.8,t.z+.3),this.nestMesh.visible=!0,this.waspsGroup.visible=!1,this.group.visible=!0,this.audio&&this.audio.playTreeShake())}update(t){if(!this.isActive)return;this.timer+=t;const e=this.player.position;if(this.state==="falling_nest"){this.group.position.y-=7*t;const n=e.y;(this.group.position.y<=n+.3||this.timer>.6)&&(this.state="chasing",this.timer=0,this.nestMesh.visible=!1,this.waspsGroup.visible=!0,this.audio&&this.audio.playWaspWarning())}else if(this.state==="chasing"){this.waspInstances.forEach((r,a)=>{r.position.x+=Math.sin(this.timer*18+a)*.04,r.position.y+=Math.cos(this.timer*22+a)*.04,r.rotation.z=Math.sin(this.timer*30+a)*.5});const n=e.clone().add(new I(0,.9,0)).sub(this.group.position),i=n.length();i>.2&&(n.normalize(),this.group.position.addScaledVector(n,this.chaseSpeed*t),this.group.lookAt(e.x,e.y+.9,e.z)),Math.floor(this.timer/1.4)!==Math.floor((this.timer-t)/1.4)&&this.audio?.playWaspWarning(),i<1.1&&this.stingPlayer(),this.timer>12&&(this.state="leaving",this.timer=0)}else this.state==="leaving"&&(this.group.position.y+=8*t,this.timer>2&&this.deactivate())}stingPlayer(){this.healthManager.takeDamage(50,()=>{this.deactivate()}),this.state="leaving",this.timer=0}tryCatch(t,e=3.2){return!this.isActive||this.state!=="chasing"?!1:this.group.position.distanceTo(t)<=e?(this.onCaught(),!0):!1}onCaught(){this.deactivate();const t=we.getById("wasp_giant")||{id:"wasp_giant",name:"オオスズメバチ",description:"猛烈なスピードで襲いかかる最強の蜂！網で一発捕獲した強者の証。",modelType:"wasp",icon:"🐝",rarity:5,minSize:38,maxSize:48,basePrice:650,moveSpeed:5,alertDistance:5,flightHeight:1.5,habitats:["forest"],activeTime:["day"],weather:["sunny"],primaryColor:"#f39c12",secondaryColor:"#1e272e"},e=we.rollSize(t),n={id:t.id,name:t.name,icon:t.icon,rarity:t.rarity,size:e.size,isBig:e.isBig,isGiant:e.isGiant,caughtAt:new Date};this.collection.registerCatch(n),this.inventory.addItem(n),this.player.setAnimState("inspect"),this.ui.showCatchSuccess(n,()=>{this.player.setAnimState("idle")})}deactivate(){this.isActive=!1,this.group.visible=!1,this.nestMesh.visible=!1,this.waspsGroup.visible=!1}}class Mg{donations=new Map;inventory;onDonationChange;constructor(t){this.inventory=t}isDonated(t){return this.donations.has(t)}getDonations(){return Array.from(this.donations.values())}get donationCount(){return this.donations.size}get totalSpeciesCount(){return we.getAll().length}get completionPercentage(){return this.totalSpeciesCount===0?0:Math.round(this.donationCount/this.totalSpeciesCount*100)}getCuratorRank(){const t=this.donationCount;return t>=15?{title:"名誉館長 (グランドマスター)",badge:"👑",color:"#f1c40f"}:t>=12?{title:"上級学芸員 (エキスパート)",badge:"🥇",color:"#e67e22"}:t>=8?{title:"熟練学芸員 (シニア)",badge:"🥈",color:"#3498db"}:t>=4?{title:"見習い学芸員 (ジュニア)",badge:"🥉",color:"#2ecc71"}:{title:"新米コレクター",badge:"🌱",color:"#95a5a6"}}donate(t){if(this.isDonated(t.id))return!1;const e=this.inventory.items.indexOf(t);if(e===-1||!this.inventory.removeItem(e))return!1;const i={id:t.id,name:t.name,icon:t.icon,rarity:t.rarity,size:t.size,donatedAt:new Date().toLocaleDateString("ja-JP")};return this.donations.set(t.id,i),this.onDonationChange&&this.onDonationChange(),!0}serialize(){return Array.from(this.donations.values())}deserialize(t){if(this.donations.clear(),!(!t||!Array.isArray(t))){for(const e of t)this.donations.set(e.id,e);this.onDonationChange&&this.onDonationChange()}}}class Sg{group;entrancePosition;museumManager;exhibitedInsects=[];treeGroup;constructor(t,e,n){this.museumManager=e,this.group=new Pt,this.group.position.copy(n),this.entrancePosition=new I(n.x,n.y,n.z-6.5),this.buildArchitecture(),t.add(this.group),this.museumManager.onDonationChange=()=>{this.refreshExhibits()},this.refreshExhibits()}buildArchitecture(){const t=new st({color:14673641,flatShading:!0}),e=new $t(7.2,7.8,.4,24),n=new F(e,t);n.position.y=.2,n.receiveShadow=!0,this.group.add(n);const i=new sn({color:7649791,transparent:!0,opacity:.42,roughness:.1,metalness:.2,side:fe}),r=new pe(6.8,24,16,0,Math.PI*2,0,Math.PI/2),a=new F(r,i);a.position.y=.4,this.group.add(a);const o=new st({color:2962486});for(let q=0;q<4;q++){const H=new Os(6.82,.08,6,24,Math.PI);H.rotateX(Math.PI/2),H.rotateY(q*Math.PI/4);const Z=new F(H,o);Z.position.y=.4,this.group.add(Z)}const c=new st({color:13849600}),l=new Yt(.5,3.2,.5),h=new F(l,c);h.position.set(-1.8,1.6,-6.6);const u=new F(l,c);u.position.set(1.8,1.6,-6.6);const d=new Yt(4.2,.6,.6),f=new F(d,c);f.position.set(0,3.3,-6.6);const g=new st({color:15844367}),v=new Yt(3.6,.7,.15),m=new F(v,g);m.position.set(0,3.3,-6.95),this.group.add(h,u,f,m),this.treeGroup=new Pt;const p=new st({color:5912606}),y=new $t(.7,1.1,4.2,8),x=new F(y,p);x.position.y=2.1,this.treeGroup.add(x);const _=new st({color:2600544,flatShading:!0}),R=new gn(2.6,1),A=new F(R,_);A.position.y=4.6,this.treeGroup.add(A),this.group.add(this.treeGroup);const C=new st({color:3066993}),P=new $t(2.2,2.4,.25,12),b=new F(P,C);b.position.set(3.6,.3,1.2),this.group.add(b);const M=new F(P,C);M.position.set(-3.6,.3,1.2),this.group.add(M);const L=[16729943,16753922,2003199,10181046];for(let q=0;q<16;q++){const H=L[q%L.length],Z=new st({color:H}),V=new pe(.18,5,5),lt=new F(V,Z),pt=q%2===0,yt=q/8*Math.PI*2,Ft=.5+Math.random()*1.3,jt=pt?3.6:-3.6;lt.position.set(jt+Math.cos(yt)*Ft,.55,1.2+Math.sin(yt)*Ft),this.group.add(lt)}const k=new st({color:52937,transparent:!0,opacity:.85}),B=new $t(2.4,2.6,.15,12),W=new F(B,k);W.position.set(0,.28,3.4),this.group.add(W)}refreshExhibits(){for(const e of this.exhibitedInsects)this.group.remove(e.pivot);this.exhibitedInsects=[];const t=this.museumManager.getDonations();for(const e of t){const n=we.getById(e.id);if(!n)continue;const i=Oc.createModel(n),r=new Pt;let a="ground",o=2.5,c=1,l=.8;["cabbage_butterfly","paper_kite","luna_moth"].includes(e.id)?(a="flying",o=2.8+Math.random()*2.2,c=2.2+Math.random()*1.5,l=1.2):["beetle","stag_beetle","hercules_beetle","rainbow_stag","cicada_minmin","cicada_higurashi"].includes(e.id)?(a="tree",o=1.1,c=1.2+Math.random()*2,l=.25):["firefly","red_dragonfly"].includes(e.id)?(a="pond",o=1.6+Math.random()*1.2,c=1.4+Math.random()*1,l=1.5):(a="ground",o=2.5+Math.random()*2.5,c=.45,l=.6),r.add(i.group),this.group.add(r),this.exhibitedInsects.push({id:e.id,model:i,pivot:r,type:a,speed:l,angle:Math.random()*Math.PI*2,radius:o,baseY:c})}}update(t){for(const e of this.exhibitedInsects)if(e.angle+=t*e.speed*.5,e.type==="flying"){const n=Math.cos(e.angle)*e.radius,i=Math.sin(e.angle)*e.radius,r=e.baseY+Math.sin(e.angle*3)*.4;e.pivot.position.set(n,r,i),e.pivot.rotation.y=-e.angle-Math.PI/2,e.model.update(t,"idle",!0)}else if(e.type==="tree"){const n=Math.cos(e.angle*.2)*e.radius,i=Math.sin(e.angle*.2)*e.radius,r=e.baseY+Math.sin(e.angle*.8)*.8;e.pivot.position.set(n,r,i),e.pivot.rotation.y=-e.angle*.2+Math.PI,e.model.update(t,"idle",!1)}else if(e.type==="pond"){const n=Math.cos(e.angle)*e.radius,i=3.4+Math.sin(e.angle)*e.radius,r=e.baseY+Math.sin(e.angle*4)*.3;e.pivot.position.set(n,r,i),e.pivot.rotation.y=-e.angle-Math.PI/2,e.model.update(t,"idle",!0)}else{const n=Math.cos(e.angle)*e.radius,i=Math.sin(e.angle)*e.radius;e.pivot.position.set(n,e.baseY,i),e.pivot.rotation.y=-e.angle,e.model.update(t,"idle",!0)}}getDistanceToEntrance(t){return this.entrancePosition.distanceTo(t)}}class wg{overlay;museumManager;inventory;audio;isOpen=!1;currentTab="donate";constructor(t,e,n){this.museumManager=t,this.inventory=e,this.audio=n,this.overlay=this.createDOM(),document.body.appendChild(this.overlay),this.initEvents()}createDOM(){const t=document.createElement("div");return t.id="museum-modal-overlay",t.className="museum-modal-overlay hidden",t.style.display="none",t.innerHTML=`
      <div class="museum-modal">
        <header class="museum-header">
          <div class="museum-title-wrap">
            <span class="museum-title-icon">🏛️</span>
            <div class="museum-title-text">
              <h2>昆虫テラリウム博物館</h2>
              <span class="museum-subtitle">Insect Museum & Terrarium</span>
            </div>
          </div>
          <button id="btn-close-museum" class="museum-close-btn" aria-label="閉じる">✕</button>
        </header>

        <!-- Museum Status & Curator Rank -->
        <div class="museum-stats-card">
          <div class="curator-rank-badge">
            <span id="curator-icon" class="curator-icon">🌱</span>
            <div class="curator-info">
              <span class="curator-label">あなたの称号</span>
              <strong id="curator-title" class="curator-title">新米コレクター</strong>
            </div>
          </div>
          <div class="museum-progress-wrap">
            <div class="progress-labels">
              <span>展示達成率: <strong id="museum-count">0</strong> / <span id="museum-total">15</span> 種</span>
              <strong id="museum-percent">0%</strong>
            </div>
            <div class="museum-progress-bar">
              <div id="museum-progress-fill" class="museum-progress-fill" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="museum-tabs">
          <button id="tab-museum-donate" class="museum-tab active">
            <span>🎁</span> 虫を寄贈する
          </button>
          <button id="tab-museum-exhibit" class="museum-tab">
            <span>🔍</span> 展示室を見る
          </button>
        </div>

        <!-- Tab Contents -->
        <div class="museum-body">
          <div id="museum-tab-donate-content" class="museum-tab-pane">
            <div id="museum-donate-list" class="museum-grid"></div>
          </div>
          <div id="museum-tab-exhibit-content" class="museum-tab-pane hidden" style="display: none;">
            <div id="museum-exhibit-list" class="museum-grid"></div>
          </div>
        </div>
      </div>
    `,t}initEvents(){this.overlay.querySelector("#btn-close-museum")?.addEventListener("click",()=>this.close()),this.overlay.addEventListener("click",i=>{i.target===this.overlay&&this.close()});const e=this.overlay.querySelector("#tab-museum-donate"),n=this.overlay.querySelector("#tab-museum-exhibit");e?.addEventListener("click",()=>this.switchTab("donate")),n?.addEventListener("click",()=>this.switchTab("exhibit")),window.addEventListener("keydown",i=>{this.isOpen&&i.key==="Escape"&&this.close()})}switchTab(t){this.currentTab=t;const e=this.overlay.querySelector("#tab-museum-donate"),n=this.overlay.querySelector("#tab-museum-exhibit"),i=this.overlay.querySelector("#museum-tab-donate-content"),r=this.overlay.querySelector("#museum-tab-exhibit-content");t==="donate"?(e?.classList.add("active"),n?.classList.remove("active"),i.style.display="block",r.style.display="none",this.renderDonateTab()):(n?.classList.add("active"),e?.classList.remove("active"),r.style.display="block",i.style.display="none",this.renderExhibitTab())}open(){this.isOpen=!0,this.overlay.classList.remove("hidden"),this.overlay.style.display="flex",this.updateStats(),this.switchTab("donate")}close(){this.isOpen=!1,this.overlay.classList.add("hidden"),this.overlay.style.display="none"}toggle(){this.isOpen?this.close():this.open()}updateStats(){const t=this.museumManager.getCuratorRank(),e=this.overlay.querySelector("#curator-icon"),n=this.overlay.querySelector("#curator-title"),i=this.overlay.querySelector("#museum-count"),r=this.overlay.querySelector("#museum-total"),a=this.overlay.querySelector("#museum-percent"),o=this.overlay.querySelector("#museum-progress-fill");e&&(e.textContent=t.badge),n&&(n.textContent=t.title,n.style.color=t.color);const c=this.museumManager.donationCount,l=this.museumManager.totalSpeciesCount,h=this.museumManager.completionPercentage;i&&(i.textContent=c.toString()),r&&(r.textContent=l.toString()),a&&(a.textContent=`${h}%`),o&&(o.style.width=`${h}%`)}renderDonateTab(){const t=this.overlay.querySelector("#museum-donate-list");if(!t)return;t.innerHTML="";const e=this.inventory.items;if(e.length===0){t.innerHTML=`
        <div class="museum-empty-state">
          <span class="empty-icon">🧺</span>
          <p>虫かごは空っぽです。<br>島で虫を捕まえて寄贈しましょう！</p>
        </div>
      `;return}e.forEach(n=>{const i=this.museumManager.isDonated(n.id),r=document.createElement("div");r.className=`museum-item-card ${i?"already-donated":"can-donate"}`,r.innerHTML=`
        <div class="item-icon-wrap">
          <span class="item-icon">${n.icon}</span>
          ${n.isGiant?'<span class="crown-badge">👑</span>':n.isBig?'<span class="crown-badge">⭐</span>':""}
        </div>
        <div class="item-details">
          <div class="item-name">${n.name}</div>
          <div class="item-size">${n.size.toFixed(1)} mm</div>
        </div>
        <div class="item-action">
          ${i?'<span class="status-pill donated">寄贈済み</span>':'<button class="btn-donate-action">寄贈する</button>'}
        </div>
      `,i||r.querySelector(".btn-donate-action")?.addEventListener("click",()=>{this.museumManager.donate(n)&&(this.audio?.playCoin(),this.updateStats(),this.renderDonateTab())}),t.appendChild(r)})}renderExhibitTab(){const t=this.overlay.querySelector("#museum-exhibit-list");if(!t)return;t.innerHTML="";const e=this.museumManager.getDonations();if(e.length===0){t.innerHTML=`
        <div class="museum-empty-state">
          <span class="empty-icon">🏛️</span>
          <p>まだ展示された虫はいません。<br>記念すべき最初の1匹を寄贈してください！</p>
        </div>
      `;return}e.forEach(n=>{const i=document.createElement("div");i.className="museum-item-card exhibit",i.innerHTML=`
        <div class="item-icon-wrap">
          <span class="item-icon">${n.icon}</span>
        </div>
        <div class="item-details">
          <div class="item-name">${n.name}</div>
          <div class="item-size">寄贈サイズ: ${n.size.toFixed(1)} mm</div>
          <div class="item-date">📅 ${n.donatedAt} 寄贈</div>
        </div>
      `,t.appendChild(i)})}}class bg{quests=[];shopManager;audio;onQuestUpdate;onQuestCompletedToast;constructor(t,e){this.shopManager=t,this.audio=e,this.ensureDailyQuests()}ensureDailyQuests(){if(this.quests.filter(n=>!n.isClaimed).length>=3)return;const t=[{id:"q_butterfly_basic",title:"モンシロチョウの生態調査",desc:"昼間の草原に飛ぶモンシロチョウを2匹観察して届けてほしい！",insectId:"cabbage_butterfly",count:2,gold:250},{id:"q_beetle_giant",title:"森の王者の力比べ",desc:"夜の森で立派なカブトムシを1匹捕まえてきておくれ。",insectId:"beetle",count:1,gold:500},{id:"q_snail_rain",title:"雨の日のカタツムリ",desc:"雨露に濡れるカタツムリの殻を研究したい。2匹頼むよ！",insectId:"snail",count:2,gold:350},{id:"q_firefly_night",title:"幻想的なホタルの光",desc:"夜の水辺で美しく光るヘイケボタルを2匹見せてくれ！",insectId:"firefly",count:2,gold:400},{id:"q_cicada_summer",title:"夏の音色、セミの調べ",desc:"木にとまるミンミンゼミを1匹調査用に捕獲してほしい。",insectId:"cicada_minmin",count:1,gold:300},{id:"q_stag_beetle",title:"ノコギリクワガタの大アゴ",desc:"夜の木にとまるノコギリクワガタの迫力あるハサミを見せておくれ！",insectId:"stag_beetle",count:1,gold:600},{id:"q_wasp_danger",title:"超危険！スズメバチの脅威",desc:"木を揺らして襲ってくるスズメバチを網で一発捕獲する勇気ある調査だ！",insectId:"wasp_giant",count:1,gold:1e3},{id:"q_legendary_hercules",title:"【特務】伝説のヘラクレス",desc:"蜜を塗った木に現れる世界最大のヘラクレスオオカブトを捕獲せよ！",insectId:"hercules_beetle",count:1,gold:2500,titleReward:"神話の狩人"},{id:"q_legendary_rainbow",title:"【特務】七色に輝く奇跡",desc:"蜜トラップに訪れるニジイロクワガタを慎重に忍び足で捕まえよう！",insectId:"rainbow_stag",count:1,gold:2e3,titleReward:"虹の探求者"}],e=new Set(this.quests.map(n=>n.id));for(const n of t){if(this.quests.filter(r=>!r.isClaimed).length>=3)break;if(e.has(n.id))continue;const i=we.getById(n.insectId);i&&(this.quests.push({id:n.id,title:n.title,description:n.desc,targetInsectId:n.insectId,targetInsectName:i.name,targetIcon:i.icon,requiredCount:n.count,currentCount:0,rewardGold:n.gold,rewardTitle:n.titleReward,isCompleted:!1,isClaimed:!1}),e.add(n.id))}this.onQuestUpdate&&this.onQuestUpdate()}handleCatch(t){let e=!1;for(const n of this.quests)n.isCompleted||n.isClaimed||n.targetInsectId===t.id&&(n.currentCount++,e=!0,n.currentCount>=n.requiredCount&&(n.isCompleted=!0,this.audio?.playFanfare(),this.onQuestCompletedToast&&this.onQuestCompletedToast(n)));e&&this.onQuestUpdate&&this.onQuestUpdate()}claimReward(t){const e=this.quests.find(n=>n.id===t);return!e||!e.isCompleted||e.isClaimed?!1:(e.isClaimed=!0,this.shopManager.addGold(e.rewardGold),this.audio?.playCoin(),this.ensureDailyQuests(),this.onQuestUpdate&&this.onQuestUpdate(),!0)}serialize(){return this.quests}deserialize(t){if(!t||!Array.isArray(t)||t.length===0){this.ensureDailyQuests();return}this.quests=t,this.ensureDailyQuests()}}class Eg{overlay;questManager;isOpen=!1;constructor(t){this.questManager=t,this.overlay=this.createDOM(),document.body.appendChild(this.overlay),this.initEvents(),this.questManager.onQuestUpdate=()=>{this.isOpen&&this.renderQuests()},this.questManager.onQuestCompletedToast=e=>{this.showToast(`📜 調査依頼達成！【${e.title}】 博士から報酬を受け取ろう！`)}}createDOM(){const t=document.createElement("div");return t.id="quest-modal-overlay",t.className="quest-modal-overlay hidden",t.style.display="none",t.innerHTML=`
      <div class="quest-modal">
        <header class="quest-header">
          <div class="quest-title-wrap">
            <span class="quest-title-icon">📜</span>
            <div class="quest-title-text">
              <h2>昆虫博士の研究室 (おねがい)</h2>
              <span class="quest-subtitle">Dr. Fabre's Field Research</span>
            </div>
          </div>
          <button id="btn-close-quest" class="quest-close-btn" aria-label="閉じる">✕</button>
        </header>

        <div class="quest-banner">
          <div class="doctor-avatar">🔬</div>
          <div class="doctor-message">
            「やあ！島の自然は実に豊かじゃな。ワシの生態系研究を手伝ってくれたら、たっぷりお礼をするよ！」
          </div>
        </div>

        <div class="quest-list-container">
          <div id="quest-list" class="quest-list"></div>
        </div>
      </div>
    `,t}initEvents(){this.overlay.querySelector("#btn-close-quest")?.addEventListener("click",()=>this.close()),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.close()}),window.addEventListener("keydown",e=>{this.isOpen&&e.key==="Escape"&&this.close()})}open(){this.isOpen=!0,this.overlay.classList.remove("hidden"),this.overlay.style.display="flex",this.renderQuests()}close(){this.isOpen=!1,this.overlay.classList.add("hidden"),this.overlay.style.display="none"}toggle(){this.isOpen?this.close():this.open()}renderQuests(){const t=this.overlay.querySelector("#quest-list");if(!t)return;t.innerHTML="";const e=this.questManager.quests.filter(n=>!n.isClaimed);if(e.length===0){t.innerHTML=`
        <div class="quest-empty">
          <span class="empty-icon">🎉</span>
          <p>現在の依頼はすべて完了しました！<br>また時間を進めて様子を見に来てください。</p>
        </div>
      `;return}e.forEach(n=>{const i=n.isCompleted,r=Math.min(100,Math.round(n.currentCount/n.requiredCount*100)),a=document.createElement("div");a.className=`quest-card ${i?"completed":""}`,a.innerHTML=`
        <div class="quest-card-header">
          <div class="quest-card-title">
            <span class="quest-card-icon">${n.targetIcon}</span>
            <span class="quest-name">${n.title}</span>
          </div>
          <div class="quest-reward-pill">
            <span>💰 +${n.rewardGold} G</span>
            ${n.rewardTitle?`<span class="reward-title-tag">👑 ${n.rewardTitle}</span>`:""}
          </div>
        </div>

        <p class="quest-desc">${n.description}</p>

        <div class="quest-progress-section">
          <div class="quest-progress-bar">
            <div class="quest-progress-fill" style="width: ${r}%;"></div>
          </div>
          <span class="quest-progress-text">${n.currentCount} / ${n.requiredCount}</span>
        </div>

        <div class="quest-card-action">
          ${i?`<button class="btn-claim-reward" data-id="${n.id}">🎉 報酬を受け取る！</button>`:'<span class="quest-status-pending">調査中...</span>'}
        </div>
      `,i&&a.querySelector(".btn-claim-reward")?.addEventListener("click",()=>{this.questManager.claimReward(n.id),this.showToast(`💰 報酬 ${n.rewardGold} G を受け取りました！`),this.renderQuests()}),t.appendChild(a)})}showToast(t){const e=document.createElement("div");e.className="quest-toast",e.textContent=t,document.body.appendChild(e),setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>e.remove(),400)},3800)}}class Tg{overlay;camera;audio;originalFov;isActive=!1;currentFilter="none";constructor(t,e,n){this.camera=t,this.audio=n,this.originalFov=t.fov,this.overlay=this.createDOM(),document.body.appendChild(this.overlay),this.initEvents()}createDOM(){const t=document.createElement("div");return t.id="photo-mode-overlay",t.className="photo-mode-overlay hidden",t.style.display="none",t.innerHTML=`
      <div class="photo-viewfinder">
        <div class="viewfinder-corner top-left"></div>
        <div class="viewfinder-corner top-right"></div>
        <div class="viewfinder-corner bottom-left"></div>
        <div class="viewfinder-corner bottom-right"></div>
        <div class="viewfinder-center"></div>
      </div>

      <!-- Top info bar -->
      <div class="photo-top-bar">
        <span class="photo-mode-title">📷 観察フォトモード</span>
        <button id="btn-exit-photo" class="photo-btn-exit" title="フォトモード終了">✕ 戻る (Z)</button>
      </div>

      <!-- Bottom Controls Toolbar -->
      <div class="photo-bottom-toolbar">
        <!-- Zoom Slider -->
        <div class="photo-control-group">
          <span class="ctrl-label">🔍 ズーム</span>
          <input type="range" id="photo-zoom-slider" min="20" max="70" value="55" step="1" />
        </div>

        <!-- Filter Selector -->
        <div class="photo-control-group">
          <span class="ctrl-label">🎨 フィルター</span>
          <div class="filter-buttons">
            <button class="btn-filter active" data-filter="none">標準</button>
            <button class="btn-filter" data-filter="vivid">鮮やか</button>
            <button class="btn-filter" data-filter="retro">レトロ</button>
            <button class="btn-filter" data-filter="sunset">夕暮れ</button>
            <button class="btn-filter" data-filter="mono">モノクロ</button>
          </div>
        </div>

        <!-- Big Shutter Button -->
        <div class="photo-shutter-wrap">
          <button id="btn-photo-shutter" class="btn-shutter" title="写真を撮影！">
            <span class="shutter-inner">📸</span>
          </button>
        </div>
      </div>

      <!-- Photo Preview Modal -->
      <div id="photo-preview-modal" class="photo-preview-modal hidden" style="display: none;">
        <div class="preview-card">
          <header class="preview-header">
            <h3>✨ ベストショット！</h3>
            <button id="btn-close-preview" class="btn-preview-close">✕</button>
          </header>
          <div class="preview-img-container">
            <img id="photo-preview-img" src="" alt="Captured Bug Island Photo" />
          </div>
          <div class="preview-actions">
            <a id="btn-download-photo" class="btn-download-photo" download="bug_island_photo.png">
              💾 画像を保存する
            </a>
          </div>
        </div>
      </div>
    `,t}initEvents(){this.overlay.querySelector("#btn-exit-photo")?.addEventListener("click",()=>this.exit());const e=this.overlay.querySelector("#photo-zoom-slider");e?.addEventListener("input",()=>{const a=parseFloat(e.value);this.camera.fov=a,this.camera.updateProjectionMatrix()});const n=this.overlay.querySelectorAll(".btn-filter");n.forEach(a=>{a.addEventListener("click",()=>{n.forEach(c=>c.classList.remove("active")),a.classList.add("active");const o=a.getAttribute("data-filter")||"none";this.applyFilter(o)})}),this.overlay.querySelector("#btn-photo-shutter")?.addEventListener("click",()=>this.takePhoto()),this.overlay.querySelector("#btn-close-preview")?.addEventListener("click",()=>{const a=this.overlay.querySelector("#photo-preview-modal");a&&(a.style.display="none")})}applyFilter(t){this.currentFilter=t;const e=document.querySelector("#canvas-container canvas");if(e)switch(t){case"vivid":e.style.filter="saturate(1.6) contrast(1.1)";break;case"retro":e.style.filter="sepia(0.55) contrast(1.05) brightness(0.95)";break;case"sunset":e.style.filter="sepia(0.35) hue-rotate(-15deg) saturate(1.4)";break;case"mono":e.style.filter="grayscale(1) contrast(1.2)";break;default:e.style.filter="none";break}}enter(){this.isActive=!0,this.overlay.classList.remove("hidden"),this.overlay.style.display="block";const t=document.getElementById("hud-overlay");t&&(t.style.visibility="hidden");const e=this.overlay.querySelector("#photo-zoom-slider");e&&(e.value=this.camera.fov.toString())}exit(){this.isActive=!1,this.overlay.classList.add("hidden"),this.overlay.style.display="none",this.applyFilter("none"),this.camera.fov=this.originalFov,this.camera.updateProjectionMatrix();const t=document.getElementById("hud-overlay");t&&(t.style.visibility="visible")}toggle(){this.isActive?this.exit():this.enter()}takePhoto(){const t=document.querySelector("#canvas-container canvas");if(!t)return;const e=document.createElement("div");e.className="photo-flash",document.body.appendChild(e),setTimeout(()=>e.remove(),400),this.audio?.playNetSwing();const n=t.toDataURL("image/png"),i=this.overlay.querySelector("#photo-preview-modal"),r=this.overlay.querySelector("#photo-preview-img"),a=this.overlay.querySelector("#btn-download-photo");r&&a&&i&&(r.src=n,r.style.filter=t.style.filter,a.href=n,a.download=`bug_island_${Date.now()}.png`,i.style.display="flex")}}class Ag{group;arenaPosition;promptEl=null;isNear=!1;islands;refereeFan=null;torchFlames=[];onInteract;constructor(t){this.islands=t,this.group=new Pt;const e=-20,n=-16,i=this.islands.getHeightAt(e,n);this.arenaPosition=new I(e,i,n),this.group.position.set(e,i,n),this.buildArena(),this.createPromptUI()}buildArena(){const t=new $t(2.6,2.8,.45,18),e=new st({color:9262372}),n=new F(t,e);n.position.y=.22,this.group.add(n);const i=new $t(2.35,2.35,.46,18),r=new st({color:15518824}),a=new F(i,r);a.position.y=.23,this.group.add(a);const o=new Os(2.1,.08,6,24);o.rotateX(Math.PI/2);const c=new st({color:12884811}),l=new F(o,c);l.position.y=.47,this.group.add(l);const h=new en({color:16777215}),u=new ke(.7,.06);u.rotateX(-Math.PI/2);const d=new F(u,h);d.position.set(-.35,.47,0);const f=new F(u,h);f.position.set(.35,.47,0),this.group.add(d,f);const g=[15158332,16777215,3447003,15844367];[Math.PI*.25,Math.PI*.75,Math.PI*1.25,Math.PI*1.75].forEach((m,p)=>{const y=Math.cos(m)*3.4,x=Math.sin(m)*3.4,_=new $t(.04,.05,3.2,6),R=new st({color:5726319}),A=new F(_,R);A.position.set(y,1.6,x),this.group.add(A);const C=new ke(.7,1.6),P=new st({color:g[p],side:fe}),b=new F(C,P);b.position.set(y+.35,2.1,x),b.rotation.y=m+Math.PI/2,this.group.add(b)});for(const m of[-1,1]){const p=m*3.2,y=0,x=new $t(.06,.08,1.8,6),_=new st({color:4934475}),R=new F(x,_);R.position.set(p,.9,y),this.group.add(R);const A=new $t(.18,.08,.2,8),C=new st({color:3093826}),P=new F(A,C);P.position.set(p,1.85,y),this.group.add(P);const b=new Ds(16742719,1.2,8);b.position.set(p,2.1,y),this.group.add(b),this.torchFlames.push(b)}this.buildRefereeNPC()}buildRefereeNPC(){const t=new Pt;t.position.set(0,.46,2.7),t.rotation.y=Math.PI;const e=new st({color:3069299,flatShading:!0}),n=new st({color:7368659,flatShading:!0}),i=new $t(.2,.35,.55,8),r=new F(i,n);r.position.y=.28,t.add(r);const a=new pe(.24,7,7),o=new F(a,e);o.position.y=.65,t.add(o);const c=new st({color:16777215}),l=new en({color:0});for(const m of[-.14,.14]){const p=new F(new pe(.08,5,5),c);p.position.set(m,.8,.12);const y=new F(new pe(.04,4,4),l);y.position.set(m,.82,.18),t.add(p,y)}const h=new st({color:1976110}),u=new $t(.08,.16,.35,6),d=new F(u,h);d.position.set(0,.95,-.05),d.rotation.x=-.2,t.add(d);const f=new Pt;f.position.set(.3,.45,.2),f.rotation.z=-.3;const g=new F(new $t(.015,.015,.35),new st({color:14037041})),v=new F(new $t(.12,.12,.02,8),new st({color:15844367}));v.position.y=.18,v.rotation.x=Math.PI/2,f.add(g,v),t.add(f),this.refereeFan=v,this.group.add(t)}createPromptUI(){this.promptEl=document.createElement("div"),this.promptEl.className="arena-prompt hidden",this.promptEl.innerHTML=`
      <div class="prompt-icon">🏆</div>
      <div class="prompt-text">
        <span class="prompt-title">昆虫相撲コロシアム</span>
        <span class="prompt-sub">タップ または [Space] で挑む！</span>
      </div>
    `,this.promptEl.addEventListener("click",()=>{this.onInteract&&this.onInteract()}),document.body.appendChild(this.promptEl)}update(t,e){this.torchFlames.forEach((i,r)=>{i.intensity=1+Math.sin(Date.now()*.01+r*2)*.3}),this.refereeFan&&(this.refereeFan.rotation.z=Math.sin(Date.now()*.004)*.2),t.distanceTo(this.arenaPosition)<4.8?this.isNear||(this.isNear=!0,this.promptEl?.classList.remove("hidden")):this.isNear&&(this.isNear=!1,this.promptEl?.classList.add("hidden"))}checkInteraction(){return this.isNear?(this.onInteract&&this.onInteract(),!0):!1}}const Sr=[{id:"beginner",name:"🌱 ビギナー杯",entryFee:0,rewardMoney:150,trophyId:"trophy_bronze",opponents:[{id:"stag_beetle_sawtooth",name:"若武者ノコギリ",icon:"🪲",power:35,stamina:32,weight:30,title:"前頭"},{id:"rhinoceros_beetle",name:"黒鉄のカブト",icon:"🪲",power:45,stamina:42,weight:40,title:"小結"}]},{id:"expert",name:"⚡ エキスパート杯",entryFee:50,rewardMoney:450,trophyId:"trophy_silver",opponents:[{id:"stag_beetle_miyama",name:"金毛のミヤマ",icon:"🪲",power:52,stamina:48,weight:42,title:"関脇"},{id:"stag_beetle_giant",name:"不動のオオクワ",icon:"🪲",power:62,stamina:58,weight:52,title:"大関"}]},{id:"championship",name:"👑 チャンピオンシップ",entryFee:150,rewardMoney:1200,trophyId:"trophy_gold",opponents:[{id:"rainbow_stag",name:"七彩のニジイロ",icon:"🪲",power:68,stamina:66,weight:48,title:"大関"},{id:"platinum_beetle",name:"白銀のプラチナ",icon:"🪙",power:74,stamina:80,weight:55,title:"大関"},{id:"hercules_beetle",name:"森の覇王ヘラクレス",icon:"👑",power:90,stamina:88,weight:75,title:"横綱"}]}];class Cg{playerInsect;playerStats;opponent;position=0;playerStamina=100;opponentStamina=100;isFinished=!1;winner=null;winReason="";opponentPushTimer=0;opponentChargeTelegraph=!1;telegraphTimer=0;constructor(t,e){this.playerInsect=t,this.playerStats=we.getSumoStats(t),this.opponent=e,this.position=0}playerPush(){if(this.isFinished)return{moved:0,critical:!1};let t=this.playerStats.power/22+Math.random()*2,e=!1;return this.opponentChargeTelegraph&&(t*=2.8,e=!0,this.opponentChargeTelegraph=!1,this.telegraphTimer=0,this.opponentStamina=Math.max(0,this.opponentStamina-20)),this.playerStamina<=20?t*=.6:this.playerStamina=Math.max(0,this.playerStamina-1.2),this.position+=t,this.checkWinner(),{moved:t,critical:e}}update(t){if(!this.isFinished)if(this.playerStamina=Math.min(100,this.playerStamina+t*2.5),this.opponentStamina=Math.min(100,this.opponentStamina+t*2.5),this.opponentPushTimer+=t,this.opponentChargeTelegraph){if(this.telegraphTimer-=t,this.telegraphTimer<=0){this.opponentChargeTelegraph=!1;const e=this.opponent.power/18*2.5;this.position-=e,this.checkWinner()}}else{const e=.25+Math.random()*.2;if(this.opponentPushTimer>e)if(this.opponentPushTimer=0,Math.random()<.18&&!this.opponentChargeTelegraph)this.opponentChargeTelegraph=!0,this.telegraphTimer=.85;else{const n=this.opponent.power/26+Math.random()*1.5;this.position-=n,this.checkWinner()}}}checkWinner(){this.position>=100?(this.isFinished=!0,this.winner="player",this.winReason="寄り切り！ 見事土俵の外へ押し出した！"):this.position<=-100&&(this.isFinished=!0,this.winner="opponent",this.winReason="押し出し！ 相手の怪力に押し切られた…")}}class Rg{overlay;inventory;shop;audio;selectedTier=Sr[0];selectedFighter=null;currentBattle=null;currentOpponentIdx=0;animFrameId=null;isVisible=!1;trophies={};constructor(t,e,n){this.inventory=t,this.shop=e,this.audio=n,this.loadTrophies(),this.overlay=this.createDOM(),document.body.appendChild(this.overlay),window.addEventListener("keydown",i=>{this.isVisible&&(i.code==="Space"||i.code==="KeyE"?this.currentBattle&&!this.currentBattle.isFinished&&(i.preventDefault(),this.handlePlayerPush()):i.code==="Escape"&&(this.currentBattle||this.hide()))})}loadTrophies(){try{const t=localStorage.getItem("bug_island_sumo_trophies");t&&(this.trophies=JSON.parse(t))}catch{this.trophies={}}}saveTrophies(){try{localStorage.setItem("bug_island_sumo_trophies",JSON.stringify(this.trophies))}catch{}}createDOM(){const t=document.createElement("div");return t.className="sumo-modal-overlay hidden",t.innerHTML=`
      <div class="sumo-modal-card">
        <button class="sumo-close-btn" id="sumo-close-btn">✕</button>
        <div id="sumo-content-area"></div>
      </div>
    `,t.querySelector("#sumo-close-btn")?.addEventListener("click",()=>{this.hide()}),t}show(){this.isVisible=!0,this.overlay.classList.remove("hidden"),this.renderLobby()}hide(){this.isVisible=!1,this.overlay.classList.add("hidden"),this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.currentBattle=null}renderLobby(){const t=this.overlay.querySelector("#sumo-content-area");if(!t)return;const e=this.inventory.items.filter(n=>we.isSumoFighter(n.id));!this.selectedFighter&&e.length>0?this.selectedFighter=e[0]:e.length===0&&(this.selectedFighter=null),t.innerHTML=`
      <div class="sumo-lobby">
        <div class="sumo-header">
          <h2>🏆 昆虫相撲コロシアム</h2>
          <p class="sumo-subtitle">捕まえた自慢の甲虫たちを出場させて島の頂点を目指せ！</p>
        </div>

        <!-- Tournament Tiers -->
        <div class="tournament-tiers">
          ${Sr.map(n=>{const i=n.id===this.selectedTier.id,r=this.trophies[n.trophyId];return`
              <div class="tier-card ${i?"selected":""}" data-tier-id="${n.id}">
                <div class="tier-title">${n.name} ${r?"🏆":""}</div>
                <div class="tier-info">参加費: ${n.entryFee===0?"無料":`${n.entryFee}G`}</div>
                <div class="tier-reward">優勝賞金: <b>${n.rewardMoney}G</b></div>
              </div>
            `}).join("")}
        </div>

        <div class="sumo-selection-section">
          <h3>🥊 出場する甲虫を選択 (${e.length}匹)</h3>
          ${e.length===0?`
            <div class="no-fighters-msg">
              <p>⚠️ 虫かごに相撲に出場できる甲虫がいません！</p>
              <p class="sub-hint">※カブトムシ、クワガタ類、ヘラクレス、プラチナコガネなどを捕まえてきてね！</p>
            </div>
          `:`
            <div class="fighters-list">
              ${e.map(n=>{const i=this.selectedFighter===n,r=we.getSumoStats(n);return`
                  <div class="fighter-card ${i?"selected":""}" data-fighter-id="${n.id}">
                    <div class="fighter-icon">${n.icon}</div>
                    <div class="fighter-details">
                      <div class="fighter-name">
                        ${n.name}
                        ${n.isGiant?'<span class="crown-badge gold">👑</span>':n.isBig?'<span class="crown-badge silver">🥈</span>':""}
                      </div>
                      <div class="fighter-rank">番付: <b>${r.title}</b> (Lv.${r.level})</div>
                      <div class="fighter-stat-bars">
                        <div class="stat-row">
                          <span>パワー: <b>${r.power}</b></span>
                          <span>ふんばり: <b>${r.stamina}</b></span>
                        </div>
                      </div>
                    </div>
                  </div>
                `}).join("")}
            </div>

            <!-- Training Jelly Section -->
            <div class="training-jelly-bar">
              <span class="jelly-label">🍯 樹液ゼリーで特訓:</span>
              <button class="jelly-feed-btn feed-red" ${this.shop.redJellyCount<=0?"disabled":""}>
                🔴 赤ゼリー (${this.shop.redJellyCount}個) [力+2]
              </button>
              <button class="jelly-feed-btn feed-green" ${this.shop.greenJellyCount<=0?"disabled":""}>
                🟢 緑ゼリー (${this.shop.greenJellyCount}個) [踏+2]
              </button>
            </div>
          `}
        </div>

        <div class="sumo-lobby-actions">
          <button class="sumo-start-btn" ${!this.selectedFighter||this.shop.money<this.selectedTier.entryFee?"disabled":""}>
            🔥 土俵へ上がる！（${this.selectedTier.entryFee}G）
          </button>
        </div>
      </div>
    `,t.querySelectorAll(".tier-card").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-tier-id"),r=Sr.find(a=>a.id===i);r&&(this.selectedTier=r,this.renderLobby())})}),t.querySelectorAll(".fighter-card").forEach((n,i)=>{n.addEventListener("click",()=>{this.selectedFighter=e[i],this.renderLobby()})}),t.querySelector(".feed-red")?.addEventListener("click",()=>{if(!this.selectedFighter)return;const n=this.shop.feedJelly(this.selectedFighter,"red");alert(n.message),this.renderLobby()}),t.querySelector(".feed-green")?.addEventListener("click",()=>{if(!this.selectedFighter)return;const n=this.shop.feedJelly(this.selectedFighter,"green");alert(n.message),this.renderLobby()}),t.querySelector(".sumo-start-btn")?.addEventListener("click",()=>{if(this.selectedFighter){if(this.shop.money<this.selectedTier.entryFee){alert("参加費が足りません！");return}this.shop.addMoney(-this.selectedTier.entryFee),this.currentOpponentIdx=0,this.startMatch()}})}startMatch(){if(!this.selectedFighter)return;const t=this.selectedTier.opponents[this.currentOpponentIdx];this.currentBattle=new Cg(this.selectedFighter,t),this.audio&&this.audio.playGong(),this.renderBattleArena(),this.startBattleLoop()}renderBattleArena(){const t=this.overlay.querySelector("#sumo-content-area");if(!t||!this.currentBattle)return;const e=this.currentBattle.playerInsect,n=this.currentBattle.playerStats,i=this.currentBattle.opponent;t.innerHTML=`
      <div class="sumo-battle-arena">
        <div class="battle-title-banner">
          ${this.selectedTier.name} 【第${this.currentOpponentIdx+1}戦 / 全${this.selectedTier.opponents.length}戦】
        </div>

        <div class="battle-fighters-row">
          <!-- Player Fighter -->
          <div class="battle-fighter-card player-side">
            <div class="avatar-ring player-avatar">${e.icon}</div>
            <div class="b-fighter-name">${e.name}</div>
            <div class="b-fighter-title">${n.title} (Lv.${n.level})</div>
            <div class="stamina-gauge">
              <div class="stamina-fill player-stamina" style="width: 100%;"></div>
            </div>
          </div>

          <div class="battle-vs-badge">VS</div>

          <!-- Opponent Fighter -->
          <div class="battle-fighter-card opponent-side">
            <div class="avatar-ring opponent-avatar">${i.icon}</div>
            <div class="b-fighter-name">${i.name}</div>
            <div class="b-fighter-title">${i.title}</div>
            <div class="stamina-gauge">
              <div class="stamina-fill opp-stamina" style="width: 100%;"></div>
            </div>
          </div>
        </div>

        <!-- Circular / Linear Sumo Gauge -->
        <div class="dohyo-gauge-wrapper">
          <div class="dohyo-edge left-edge">西 土俵際</div>
          <div class="dohyo-track">
            <div class="dohyo-center-line"></div>
            <div class="dohyo-puck" id="dohyo-puck" style="left: 50%;">
              <span class="puck-spark">💥</span>
            </div>
          </div>
          <div class="dohyo-edge right-edge">東 相手際</div>
        </div>

        <!-- Counter alert banner -->
        <div class="counter-alert-banner hidden" id="counter-banner">
          ⚡ 相手が隙を見せた！今すぐ連打でうっちゃりチャンス！ ⚡
        </div>

        <!-- Interactive Tap / Action Area -->
        <div class="sumo-action-area">
          <button class="sumo-push-btn" id="sumo-push-btn">
            👊 連打で押し込め！（Space / タップ）
          </button>
        </div>
      </div>
    `,t.querySelector("#sumo-push-btn")?.addEventListener("pointerdown",a=>{a.preventDefault(),this.handlePlayerPush()})}handlePlayerPush(){if(!this.currentBattle||this.currentBattle.isFinished)return;const t=this.currentBattle.playerPush();this.audio&&(this.audio.playClash(),t.critical&&this.audio.playCheer());const e=this.overlay.querySelector("#sumo-push-btn");e&&(e.classList.remove("pushed-anim"),e.offsetWidth,e.classList.add("pushed-anim"))}startBattleLoop(){let t=performance.now();const e=n=>{if(!this.isVisible||!this.currentBattle)return;const i=Math.min((n-t)/1e3,.1);t=n,this.currentBattle.update(i),this.updateBattleHUD(),this.currentBattle.isFinished?this.handleBattleEnd():this.animFrameId=requestAnimationFrame(e)};this.animFrameId=requestAnimationFrame(e)}updateBattleHUD(){if(!this.currentBattle)return;const t=50+this.currentBattle.position/100*45,e=this.overlay.querySelector("#dohyo-puck");e&&(e.style.left=`${Math.max(5,Math.min(95,t))}%`);const n=this.overlay.querySelector(".player-stamina"),i=this.overlay.querySelector(".opp-stamina");n&&(n.style.width=`${this.currentBattle.playerStamina}%`),i&&(i.style.width=`${this.currentBattle.opponentStamina}%`);const r=this.overlay.querySelector("#counter-banner");r&&(this.currentBattle.opponentChargeTelegraph?r.classList.remove("hidden"):r.classList.add("hidden"))}handleBattleEnd(){if(!this.currentBattle)return;const t=this.currentBattle.winner==="player";this.audio&&(t?(this.audio.playFanfare(),this.audio.playCheer()):this.audio.playPurchase());const e=this.overlay.querySelector("#sumo-content-area");if(!e)return;const n=t&&this.currentOpponentIdx+1>=this.selectedTier.opponents.length;n&&(this.trophies[this.selectedTier.trophyId]=!0,this.saveTrophies(),this.shop.addMoney(this.selectedTier.rewardMoney)),e.innerHTML=`
      <div class="sumo-result-screen">
        <div class="result-badge ${t?"win":"lose"}">
          ${t?"🎉 見事勝利！":"😢 敗北…"}
        </div>
        <div class="result-reason">${this.currentBattle.winReason}</div>

        ${n?`
          <div class="trophy-awarded-card">
            <div class="big-trophy">🏆</div>
            <h3>${this.selectedTier.name} 制覇！</h3>
            <p>優勝賞金 <b>+${this.selectedTier.rewardMoney}G</b> を獲得しました！</p>
          </div>
        `:""}

        <div class="result-actions">
          ${t&&!n?`
            <button class="next-match-btn" id="next-match-btn">
              次の対戦相手へ！ (第${this.currentOpponentIdx+2}戦) ⚔️
            </button>
          `:`
            <button class="return-lobby-btn" id="return-lobby-btn">
              ロビーへ戻る 🏛️
            </button>
          `}
        </div>
      </div>
    `,e.querySelector("#next-match-btn")?.addEventListener("click",()=>{this.currentOpponentIdx+=1,this.startMatch()}),e.querySelector("#return-lobby-btn")?.addEventListener("click",()=>{this.currentBattle=null,this.renderLobby()})}}class Pg{group;dockPosition;caveSpawnPosition;caveCenterPosition;dockPrompt=null;returnPrompt=null;isNearDock=!1;isNearReturn=!1;crystalLights=[];onTravelToCave;onTravelToMainland;constructor(){this.group=new Pt,this.dockPosition=new I(0,.4,-48),this.caveCenterPosition=new I(-120,.5,-110),this.caveSpawnPosition=new I(-120,1.2,-98),this.buildMainlandDock(),this.buildCaveIsland(),this.createPrompts()}buildMainlandDock(){const t=new Pt;t.position.copy(this.dockPosition);const e=new st({color:7951688}),n=new Yt(3.2,.3,7.5),i=new F(n,e);i.position.set(0,.15,-1.5),t.add(i);const r=new $t(.12,.12,2.2,6),a=new st({color:5125166});for(const c of[-1.5,1.5])for(const l of[.5,-1.8,-4.2]){const h=new F(r,a);h.position.set(c,-.6,l),t.add(h)}const o=this.createRowboat();o.position.set(2.4,.1,-2.5),o.rotation.y=.3,t.add(o),this.group.add(t)}buildCaveIsland(){const t=new Pt;t.position.copy(this.caveCenterPosition);const e=new $t(24,28,6,18),n=new st({color:2962486,flatShading:!0}),i=new F(e,n);i.position.y=-2.5,t.add(i);const r=new $t(21,21,.6,18),a=new st({color:1980207,flatShading:!0}),o=new F(r,a);o.position.y=.55,t.add(o);const c=new $t(1.2,2.2,8,8),l=new st({color:4007709}),h=new F(c,l);h.position.set(0,4.5,0),t.add(h);const u=new gn(5.5,1),d=new st({color:1265204,flatShading:!0}),f=new F(u,d);f.position.set(0,8.5,0),t.add(f);const g=new We(.6,3.2,5),v=new sn({color:7381503,emissive:623843,emissiveIntensity:.9,roughness:.1,metalness:.8}),m=new sn({color:10656766,emissive:7101671,emissiveIntensity:.95,roughness:.1,metalness:.8});[.2,.9,1.8,2.7,3.6,4.5,5.4].forEach((x,_)=>{const R=12+_%3*3,A=Math.cos(x)*R,C=Math.sin(x)*R,P=new Pt;P.position.set(A,.8,C);for(let M=0;M<3;M++){const L=(_+M)%2===0?v:m,k=new F(g,L);k.position.set((M-1)*.4,1.2,M%2*.4),k.rotation.x=(Math.random()-.5)*.4,k.rotation.z=(Math.random()-.5)*.4,P.add(k)}const b=new Ds(_%2===0?7649791:10656766,1.5,15);b.position.set(A,2.5,C),t.add(b),this.crystalLights.push(b),t.add(P)});const y=this.createRowboat();y.position.set(0,.1,14),y.rotation.y=Math.PI,t.add(y),this.group.add(t)}createRowboat(){const t=new Pt,e=new st({color:6111287,flatShading:!0}),n=new Yt(1.4,.6,3),i=new F(n,e);i.position.y=.2,t.add(i);const r=new Yt(1.2,.1,.4),a=new F(r,new st({color:9268835}));a.position.set(0,.4,0),t.add(a);const o=new Yt(.2,.3,.2),c=new sn({color:16771751,emissive:16632686,emissiveIntensity:.9}),l=new F(o,c);l.position.set(0,.6,-1.2),t.add(l);const h=new Ds(16760438,1.2,6);return h.position.set(0,.7,-1.2),t.add(h),t}createPrompts(){this.dockPrompt=document.createElement("div"),this.dockPrompt.className="dock-prompt hidden",this.dockPrompt.innerHTML=`
      <div class="prompt-icon">⛵</div>
      <div class="prompt-text">
        <span class="prompt-title">秘境ボートツアー</span>
        <span class="prompt-sub">タップ または [Space] で「光る水晶洞窟」へ渡る</span>
      </div>
    `,this.dockPrompt.addEventListener("click",()=>{this.onTravelToCave&&this.onTravelToCave()}),this.returnPrompt=document.createElement("div"),this.returnPrompt.className="dock-prompt hidden",this.returnPrompt.innerHTML=`
      <div class="prompt-icon">⛵</div>
      <div class="prompt-text">
        <span class="prompt-title">本島へ戻る</span>
        <span class="prompt-sub">タップ または [Space] で本島桟橋へ帰還</span>
      </div>
    `,this.returnPrompt.addEventListener("click",()=>{this.onTravelToMainland&&this.onTravelToMainland()}),document.body.appendChild(this.dockPrompt),document.body.appendChild(this.returnPrompt)}update(t,e){const n=Date.now()*.003;this.crystalLights.forEach((o,c)=>{o.intensity=1.2+Math.sin(n+c*1.2)*.4}),t.distanceTo(this.dockPosition)<5?this.isNearDock||(this.isNearDock=!0,this.dockPrompt?.classList.remove("hidden")):this.isNearDock&&(this.isNearDock=!1,this.dockPrompt?.classList.add("hidden"));const r=new I(this.caveCenterPosition.x,this.caveCenterPosition.y,this.caveCenterPosition.z+14);t.distanceTo(r)<5?this.isNearReturn||(this.isNearReturn=!0,this.returnPrompt?.classList.remove("hidden")):this.isNearReturn&&(this.isNearReturn=!1,this.returnPrompt?.classList.add("hidden"))}checkInteraction(){return this.isNearDock?(this.onTravelToCave&&this.onTravelToCave(),!0):this.isNearReturn?(this.onTravelToMainland&&this.onTravelToMainland(),!0):!1}}class Ig{container;scene;camera;renderer;skyAndLighting;world;player;playerController;cameraController;input;touchController;collection;bookUI;audio;healthManager;timeManager;weatherManager;inventoryManager;shopManager;shopUI;waspSwarm;museumManager;museumBuilding;museumUI;questManager;questUI;photoModeUI;doctorPosition;sumoArena;sumoUI;mysticCave;screenFader;insectManager;catchUI;clock;isRunning=!1;saveTimer=0;constructor(t){this.container=t,this.scene=new Mh;const e=window.innerWidth/window.innerHeight;this.camera=new Be(55,e,.1,500),this.renderer=new jm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jo,this.renderer.outputColorSpace=Oe,this.container.appendChild(this.renderer.domElement),this.clock=new pu,this.input=new ag(this.container),this.audio=new _g,this.timeManager=new fg,this.weatherManager=new pg(this.scene),this.inventoryManager=new mg,this.shopManager=new gg(this.inventoryManager,this.audio);const n=Mr.load();n?.timeHours!==void 0&&n.timeHours>=7&&n.timeHours<=18?this.timeManager.setTime(n.timeHours):this.timeManager.setTime(13,0),this.skyAndLighting=new Qm(this.scene),this.world=new ng(this.scene),this.player=new ig,this.scene.add(this.player.group),this.healthManager=new yg(this.player,this.audio),this.healthManager.onFaintComplete=()=>{const o=this.world.getTerrainHeight(0,0);this.player.position.set(0,o,0)},this.shopUI=new vg(this.inventoryManager,this.shopManager,this.healthManager),this.cameraController=new rg(this.camera,this.player,this.world,this.input),this.playerController=new sg(this.player,this.world,this.input,this.cameraController),this.playerController.onFootstep=()=>this.audio.playFootstep(),this.playerController.onJump=()=>this.audio.playJump(),this.touchController=new og(this.input),this.collection=new ug,this.bookUI=new dg(this.collection),this.catchUI=new Bc,this.insectManager=new hg(this.scene,this.world,this.collection,this.inventoryManager,this.player,this.timeManager,this.weatherManager),this.waspSwarm=new xg(this.scene,this.player,this.healthManager,this.collection,this.inventoryManager,this.catchUI,this.audio),this.applyShopUpgrades(),this.shopManager.onUpgradeChange=()=>{this.applyShopUpgrades()},this.museumManager=new Mg(this.inventoryManager),n?.donations&&this.museumManager.deserialize(n.donations);const i=0,r=16.5,a=this.world.getTerrainHeight(i,r);this.museumBuilding=new Sg(this.scene,this.museumManager,new I(i,a,r)),this.museumUI=new wg(this.museumManager,this.inventoryManager,this.audio),this.questManager=new bg(this.shopManager,this.audio),n?.quests&&this.questManager.deserialize(n.quests),this.questUI=new Eg(this.questManager),this.doctorPosition=new I(3.8,this.world.getTerrainHeight(3.8,6.2),6.2),this.createDoctorNPC(),this.insectManager.onCatch=o=>{this.questManager.handleCatch(o)},this.photoModeUI=new Tg(this.camera,this.cameraController,this.audio),this.sumoArena=new Ag(this.world.island),this.scene.add(this.sumoArena.group),this.sumoUI=new Rg(this.inventoryManager,this.shopManager,this.audio),this.sumoArena.onInteract=()=>{this.sumoUI.show()},this.mysticCave=new Pg,this.scene.add(this.mysticCave.group),this.screenFader=document.createElement("div"),this.screenFader.className="screen-fader",document.body.appendChild(this.screenFader),this.mysticCave.onTravelToCave=()=>{this.travelBoat("cave")},this.mysticCave.onTravelToMainland=()=>{this.travelBoat("mainland")},this.playerController.onActionTrigger=()=>{this.handlePlayerAction()},this.initUIEventListeners(),window.addEventListener("beforeunload",()=>{Mr.save(this.shopManager,this.inventoryManager,this.collection,this.timeManager,this.museumManager,this.questManager)})}travelBoat(t){this.audio.playFootstep(),this.screenFader.classList.add("fade-in"),setTimeout(()=>{t==="cave"?this.player.position.copy(this.mysticCave.caveSpawnPosition):this.player.position.set(0,this.world.getTerrainHeight(0,-42),-42),this.cameraController.reset(),setTimeout(()=>{this.screenFader.classList.remove("fade-in")},300)},600)}applyShopUpgrades(){this.playerController.speedMultiplier=this.shopManager.hasSneakers?1.2:1,this.insectManager.equippedNet=this.shopManager.equippedNet}handlePlayerAction(){if(this.audio.playNetSwing(),this.waspSwarm.isActive){let e=3.2;if(this.shopManager.equippedNet==="silver"&&(e=4),this.shopManager.equippedNet==="gold"&&(e=4.8),this.waspSwarm.tryCatch(this.player.position,e))return}const t=this.world.nature.getNearestTree(this.player.position,2.8);if(t){this.world.nature.shakeTree(t.index),this.audio.playTreeShake(),this.shopManager.honeyCount>0&&!t.tree.hasHoney&&Math.random()<.3&&this.shopManager.useHoney()&&this.world.nature.applyHoney(t.index);const e=t.tree.hasHoney?.06:.16;if(Math.random()<e&&!this.waspSwarm.isActive){this.waspSwarm.triggerSwarm(t.tree.basePos);return}const n=t.tree.hasHoney?.85:.45;Math.random()<n&&(this.insectManager.spawnTreeInsect(t.tree.basePos,t.tree.hasHoney),t.tree.hasHoney&&(t.tree.hasHoney=!1));return}this.insectManager.tryCatch(this.player.position,this.player.isFacingRight,this.cameraController.yaw)}initUIEventListeners(){document.getElementById("btn-open-book")?.addEventListener("click",()=>{this.bookUI.toggle()}),document.querySelector(".money-badge")?.addEventListener("click",()=>{this.shopUI.open("buy")}),document.getElementById("btn-open-shop")?.addEventListener("click",()=>{this.shopUI.open("sell")}),document.getElementById("shop-stall-prompt")?.addEventListener("click",()=>{this.shopUI.open("sell")}),document.getElementById("tree-shake-prompt")?.addEventListener("click",()=>{this.handlePlayerAction()});const a=document.getElementById("btn-toggle-audio");a?.addEventListener("click",()=>{const v=this.audio.toggleMute();a.classList.toggle("muted",v);const m=a.querySelector(".badge-icon");m&&(m.textContent=v?"🔇":"🔊")}),document.querySelector(".time-badge")?.addEventListener("click",()=>{this.timeManager.advanceHours(3)}),document.getElementById("btn-open-museum")?.addEventListener("click",()=>{this.museumUI.toggle()}),document.getElementById("museum-prompt")?.addEventListener("click",()=>{this.museumUI.open()}),document.getElementById("btn-open-quest")?.addEventListener("click",()=>{this.questUI.toggle()}),document.getElementById("quest-prompt")?.addEventListener("click",()=>{this.questUI.open()}),document.getElementById("btn-open-photo")?.addEventListener("click",()=>{this.photoModeUI.toggle()});const f=document.getElementById("btn-toggle-sneak");f?.addEventListener("click",()=>{const v=this.playerController.toggleSneak();f.classList.toggle("active",v)}),document.getElementById("btn-open-sumo")?.addEventListener("click",()=>{this.sumoUI.show()}),window.addEventListener("keydown",v=>{if(v.code==="KeyB")this.bookUI.toggle();else if(v.code==="KeyI")this.shopUI.open("sell");else if(v.code==="KeyP")this.shopUI.open("buy");else if(v.code==="KeyO")this.museumUI.toggle();else if(v.code==="KeyQ")this.questUI.toggle();else if(v.code==="KeyZ")this.photoModeUI.toggle();else if(v.code==="KeyK")this.sumoUI.show();else if(v.code==="Space")(this.sumoArena.checkInteraction()||this.mysticCave.checkInteraction())&&v.preventDefault();else if(v.code==="KeyC"){const m=this.playerController.toggleSneak();document.getElementById("btn-toggle-sneak")?.classList.toggle("active",m)}else v.code==="KeyT"?this.timeManager.advanceHours(2):v.code==="KeyY"?this.weatherManager.toggleNextWeather():v.code==="KeyM"&&a?.click()}),window.addEventListener("resize",this.onWindowResize.bind(this))}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.animate())}animate=()=>{if(!this.isRunning)return;requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);this.timeManager.update(t),this.weatherManager.update(t,this.player.position),this.audio.updateAmbience(this.timeManager.getPeriod(),this.weatherManager.currentWeather,t),this.playerController.update(t),this.cameraController.update(),this.insectManager.update(t,this.player.position,this.playerController.isSneaking,this.input.getMoveInput().isRunning),this.waspSwarm.update(t),this.museumBuilding.update(t),this.world.nature.update(t),this.skyAndLighting.update(t,this.player.position,this.timeManager,this.weatherManager);const e=Math.hypot(this.player.position.x-5,this.player.position.z-6),n=document.getElementById("shop-stall-prompt");n&&(n.style.display=e<3.2?"flex":"none");const i=this.museumBuilding.getDistanceToEntrance(this.player.position),r=document.getElementById("museum-prompt");r&&(r.style.display=i<4.2?"flex":"none");const a=this.player.position.distanceTo(this.doctorPosition),o=document.getElementById("quest-prompt");o&&(o.style.display=a<3.2?"flex":"none");const c=this.world.nature.getNearestTree(this.player.position,2.8),l=document.getElementById("tree-shake-prompt");l&&(l.style.display=c&&!this.waspSwarm.isActive?"flex":"none"),this.sumoArena.update(this.player.position,t),this.mysticCave.update(this.player.position,t),this.saveTimer+=t,this.saveTimer>30&&(this.saveTimer=0,Mr.save(this.shopManager,this.inventoryManager,this.collection,this.timeManager,this.museumManager,this.questManager)),this.renderer.render(this.scene,this.camera)};createDoctorNPC(){const t=new Pt;t.position.copy(this.doctorPosition);const e=new st({color:9132587}),n=new F(new Yt(1.6,.12,.9),e);n.position.y=.85;const i=new $t(.04,.04,.85);for(let R of[-.68,.68])for(let A of[-.35,.35]){const C=new F(i,e);C.position.set(R,.425,A),t.add(C)}t.add(n);const r=new sn({color:13938487,metalness:.7,roughness:.3}),a=new $t(.06,.08,.35),o=new F(a,r);o.position.set(.35,1.05,0),o.rotation.z=-.2,t.add(o);const c=new st({color:16119546}),l=new F(new Yt(.4,.02,.3),c);l.position.set(-.25,.92,.05),l.rotation.y=.15,t.add(l);const h=new Pt;h.position.set(0,0,-.6);const u=new st({color:16777215}),d=new st({color:3426654}),f=new st({color:16767916}),g=new st({color:8359053}),v=new F(new $t(.08,.08,.6),d);v.position.set(-.12,.3,0);const m=new F(new $t(.08,.08,.6),d);m.position.set(.12,.3,0);const p=new F(new Yt(.44,.75,.28),u);p.position.y=.9;const y=new F(new pe(.2,8,8),f);y.position.y=1.42;const x=new F(new pe(.22,6,6),g);x.position.set(0,1.46,-.04);const _=new F(new Yt(.26,.06,.04),r);_.position.set(0,1.44,.19),h.add(v,m,p,y,x,_),t.add(h),this.scene.add(t)}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}}window.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("canvas-container");if(!s){console.error("Canvas container element not found!");return}const t=new Ig(s);t.start(),window.__GAME__=t,console.log("🌴 むしとり島 (Bug Island) - Engine Initialized")});
