"use strict";var x=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=x(function(m,S){
var C=require('@stdlib/math-base-special-sincos/dist').assign,I=require('@stdlib/constants-float64-pi/dist'),O=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/fft-base-fftpack-generic-rffti/dist'),f=[0,0];function R(v,r,i,a){var q,o,u,n,s,e,t;if(v<=3)return r;for(o=O(v/2),s=I/(v-1),e=0,n=a+i,u=a+(v-2)*i,t=1;t<o;t++)e+=1,C(e*s,f,1,0),r[n]=f[0]*2,r[u]=f[1]*2,n+=i,u-=i;return q=a+v*i,P(v-1,r,i,q),r}S.exports=R
});var g=c();module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
