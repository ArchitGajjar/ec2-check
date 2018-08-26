# ec2-check

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

> A CLI tool to check whether your AWS EC2 instances are encrypted.

## Installation

```sh
npm install -g ec2-check
```

## Usage

All Regions

```shell
$ ec2-check

      ########################################
              AWS EC2 Encryption Check
      ########################################

               Scanning Instances

      Volume ID: vol-05d216aa3675bf496
      Availability Zone: us-east-2c
      Name: Blog/Portfolio
      State: in-use
      Encrypted: False!

      Volume ID: vol-088d60f4b643af66f
      Availability Zone: us-east-1b
      Name: kyleobrien.io
      State: in-use
      Encrypted: False!

      ########################################
```

Specific Region
```shell
$ ec2-check --region us-east-2

      ########################################
              AWS EC2 Encryption Check
      ########################################

               Scanning Instances

      Volume ID: vol-06a98698ebb44ffd4
      Availability Zone: us-east-2b
      Name: Polafide
      State: in-use
      Encrypted: False!

      Volume ID: vol-00ac0e505900ac0b2
      Availability Zone: us-east-2b
      Name: Remote.it Docker Test
      State: in-use
      Encrypted: False!

      ########################################
```

## Help

```bash
$   ec2-check -h

  Usage: ec2-check [options]

  A tool to check whether your AWS EC2 instances are encrypted.

  Options:

    -V, --version  output the version number
    -r, --region   Specify a particular region to lookup.
    -h, --help     output usage information
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/ec2-check.svg?style=flat
[npm-url]: https://www.npmjs.com/package/ec2-check
[downloads-image]: https://img.shields.io/npm/dm/ec2-check.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/ec2-check
[travis-image]: https://img.shields.io/travis/{{{username}}}/{{{repoName}}}.svg?style=flat
[travis-url]: https://travis-ci.org/{{{username}}}/{{{repoName}}}
[coveralls-image]: https://img.shields.io/coveralls/{{{username}}}/{{{repoName}}}.svg?style=flat
[coveralls-url]: https://coveralls.io/r/{{{username}}}/{{{repoName}}}?branch=master