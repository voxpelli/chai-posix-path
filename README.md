# chai-posix-path

Checks whether a string path matches a posix path

[![npm version](https://img.shields.io/npm/v/chai-posix-path.svg?style=flat)](https://www.npmjs.com/package/chai-posix-path)
[![npm downloads](https://img.shields.io/npm/dm/chai-posix-path.svg?style=flat)](https://www.npmjs.com/package/chai-posix-path)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)

## Usage

### Simple

```javascript
import chaiPosixPath from 'chai-posix-path';

chai.use(chaiPosixPath);

'foo\\bar'.should.be.posixPath('foo/bar'); // Passes
'foo/bar'.should.be.posixPath('foo/bar'); // Passes
```

## See also

* [Chai](https://www.chaijs.com/)
