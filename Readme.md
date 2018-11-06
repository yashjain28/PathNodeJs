
# ipm package: PathNodeJs

## Overview

Partial Implementation of NodeJs' Path library

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup
Import Just the Code Library, Code Service just gives an exmaple of how to use it.
## Usage
Example Checkout the Code Service, once system is imported.

```javascript
function TestPathNodeJs(req, resp) {
  const path = PathNodeJs();
  
  const resolvedPath = path.resolve('/foo/bar', './baz'); // output: /foo/bar/baz
  log(resolvedPath);

  const parsedpathObj = path.parse('/welcome/to/clearblade.js'); // output: {"root":"/","dir":"/welcome/to","base":"clearblade.js","ext":".js","name":"clearblade"}
  log(parsedpathObj);

  resp.success('Success');
}

```
## API
The goal is to provide an API that is identical to [node's Path API](https://nodejs.org/api/path.html). Currently matches the Node.js 10.3 API. PathNodeJs only implements the POSIX functions, not the win32 ones. It is created by performing minor modifications to the [path-browserify](https://github.com/browserify/path-browserify) library.

## Contributing
PRs are very welcome! The main way to contribute to `PathNodeJs` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5 (followed by some modifications), rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js. This module intends to provide exactly the same API as Node.js, so features that are not available in the core path module will not be accepted. 

If there is a difference in behaviour between Node.js's path module and this module, please open an issue!


