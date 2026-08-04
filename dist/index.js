"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(q){throw (r=0, q)}};};var i=a(function(k,t){
var s={Float16Array:"float16",Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128",BooleanArray:"bool"};t.exports=s
});var o=a(function(w,n){
var c=require('@stdlib/array-float64/dist'),p=require('@stdlib/array-float32/dist'),f=require('@stdlib/array-float16/dist'),x=require('@stdlib/array-uint32/dist'),m=require('@stdlib/array-int32/dist'),C=require('@stdlib/array-uint16/dist'),U=require('@stdlib/array-int16/dist'),F=require('@stdlib/array-uint8/dist'),I=require('@stdlib/array-uint8c/dist'),d=require('@stdlib/array-int8/dist'),S=require('@stdlib/array-complex64/dist'),T=require('@stdlib/array-complex128/dist'),g=require('@stdlib/array-bool/dist'),B=[c,p,f,m,x,U,C,d,F,I,S,T,g];n.exports=B
});var y=a(function(z,u){
var E=["float64","float32","float16","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128","bool"];u.exports=E
});var v=a(function(G,A){
var P=require('@stdlib/assert-is-buffer/dist'),Y=require('@stdlib/assert-is-array/dist'),b=require('@stdlib/utils-constructor-name/dist'),D=i(),N=o(),l=y(),O=l.length;function R(e){var r;if(Y(e))return"generic";if(P(e))return null;for(r=0;r<O;r++)if(e instanceof N[r])return l[r];return D[b(e)]||null}A.exports=R
});var h=v();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
