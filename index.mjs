// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs";var f=t,h=r,y=s,u={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},x=[i,n,m,e,a,d,j,l,o,p,c],g=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],v=g.length;var b=function(t){var r;if(h(t))return"generic";if(f(t))return null;for(r=0;r<v;r++)if(t instanceof x[r])return g[r];return u[y(t)]||null};export{b as default};
//# sourceMappingURL=index.mjs.map
