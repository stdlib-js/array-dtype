<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Data Type

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the data type of an array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
dtype = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dtype = require( 'path/to/vendor/umd/array-dtype/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dtype;
})();
</script>
```

#### dtype( array )

Returns the [data type][@stdlib/array/dtypes] of an `array`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var arr = new Float64Array( 10 );

var dt = dtype( arr );
// returns 'float64'
```

If provided an argument having an unknown or unsupported [data type][@stdlib/array/dtypes], the function returns `null`.

```javascript
var dt = dtype( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/new-cap-error -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-dtypes@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var DTYPES;
var ctor;
var arr;
var len;
var dt;
var i;

// Get a list of supported array data types:
DTYPES = dtypes();

// Array length:
len = 10;

// For each supported data type, create an array and confirm its data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    ctor = ctors( DTYPES[ i ] );
    arr = new ctor( len );
    dt = dtype( arr );
    console.log( '%s == %s => %s', DTYPES[ i ], dt, DTYPES[ i ] === dt );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/dtypes`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-dtype.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-dtype

[test-image]: https://github.com/stdlib-js/array-dtype/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-dtype/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-dtype/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-dtype?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-dtype.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-dtype/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-dtype/tree/deno
[umd-url]: https://github.com/stdlib-js/array-dtype/tree/umd
[esm-url]: https://github.com/stdlib-js/array-dtype/tree/esm
[branches-url]: https://github.com/stdlib-js/array-dtype/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-dtype/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
