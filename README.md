# generator-cheminfo-js

  [![NPM version][npm-image]][npm-url]
  [![Build Status][travis-image]][travis-url]
  [![Dependency Status][daviddm-image]][daviddm-url]
  [![Coverage percentage][coveralls-image]][coveralls-url]
  [![npm download][download-image]][download-url]

> Generator for ml.js packages

## :warning: Deprecated!

Instead you should use [generator-cheminfo](https://github.com/cheminfo/generator-cheminfo), it's the modern version of this package

## Description

The generator will prompt for the next fields:

  * __Your project name__: the package name, without the `ml-` start
  * __Your name__: your [NPM name](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)
  * __Your package description__: A description to show in [NPM](https://docs.npmjs.com/files/package.json#description-1)
  * __Your package version__: The package version. The default value is `0.0.1`
  * __Run NPM install?__: Run `npm install` after the template generation

When the generator finish there will be the following files:

```
.
├── .gitignore
├── .travis.yml
├── History.md
├── LICENSE
├── README.md
├── package.json
├── src
│   └── index.js
└── test
    └── test.js
```

## Contributors

* [Miguel Asencio](https://github.com/maasencioh)

## License

[MIT](./LICENSE)

[npm-image]: https://badge.fury.io/js/generator-cheminfo-js.svg
[npm-url]: https://npmjs.org/package/generator-cheminfo-js
[travis-image]: https://travis-ci.org/cheminfo-js/generator-cheminfo-js.svg?branch=master
[travis-url]: https://travis-ci.org/cheminfo-js/generator-cheminfo-js
[daviddm-image]: https://david-dm.org/cheminfo-js/generator-cheminfo-js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/cheminfo-js/generator-cheminfo-js
[coveralls-image]: https://coveralls.io/repos/github/cheminfo-js/generator-cheminfo-js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/cheminfo-js/generator-cheminfo-js?branch=master
[download-image]: https://img.shields.io/npm/dm/generator-cheminfo-js.svg?style=flat-square
[download-url]: https://npmjs.org/package/generator-cheminfo-js
