# ec2-check

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

> Utility to autogenerate a Remote.it bulk registration file with prop data.

## Installation

```sh
npm install -g @remote.it/bulkreg
```

## Usage

```shell
$: bulkreg -n 500 ./props-devices-1.csv

Bulk registration CSV file with 500 prop devices created at ./props-devices-1.csv.

$: bulkreg ./props-devices-2.csv

Bulk registration CSV file with 10 prop devices created at ./props-devices-2.csv.
```

## Help

```bash
$: bulkreg --help

  Usage: bulkreg [options]

  NPM module to autogenerate a Remote.it bulk registration file with prop data.

  Options:

    -V, --version  output the version number
    -n, --number   The number of prop devices to be created.
    -h, --help     output usage information
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@remote.it/bulkreg.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@remote.it/bulkreg
[downloads-image]: https://img.shields.io/npm/dm/@remote.it/bulkreg.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/@remote.it/bulkreg
[travis-image]: https://img.shields.io/travis/{{{username}}}/{{{repoName}}}.svg?style=flat
[travis-url]: https://travis-ci.org/{{{username}}}/{{{repoName}}}
[coveralls-image]: https://img.shields.io/coveralls/{{{username}}}/{{{repoName}}}.svg?style=flat
[coveralls-url]: https://coveralls.io/r/{{{username}}}/{{{repoName}}}?branch=master