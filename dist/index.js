"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var i=t(function(j,a){
var c={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128",BooleanArray:"bool"};a.exports=c
});var u=t(function(k,n){
var q=require('@stdlib/array-float64/dist'),p=require('@stdlib/array-float32/dist'),x=require('@stdlib/array-uint32/dist'),f=require('@stdlib/array-int32/dist'),m=require('@stdlib/array-uint16/dist'),C=require('@stdlib/array-int16/dist'),U=require('@stdlib/array-uint8/dist'),I=require('@stdlib/array-uint8c/dist'),d=require('@stdlib/array-int8/dist'),S=require('@stdlib/array-complex64/dist'),T=require('@stdlib/array-complex128/dist'),F=require('@stdlib/array-bool/dist'),g=[q,p,f,x,C,m,d,U,I,S,T,F];n.exports=g
});var y=t(function(w,o){
var B=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128","bool"];o.exports=B
});var v=t(function(z,l){
var E=require('@stdlib/assert-is-buffer/dist'),P=require('@stdlib/assert-is-array/dist'),Y=require('@stdlib/utils-constructor-name/dist'),b=i(),D=u(),A=y(),N=A.length;function O(e){var r;if(P(e))return"generic";if(E(e))return null;for(r=0;r<N;r++)if(e instanceof D[r])return A[r];return b[Y(e)]||null}l.exports=O
});var R=v();module.exports=R;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
