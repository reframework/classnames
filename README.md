# @reframework/classnames

A tiny JavaScript utility for conditionally joining classNames together.

Install with [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/):

```bash
# via npm
npm install @reframework/classnames

# via Yarn
yarn add @reframework/classnames
```

@reframework/classnames follows the [SemVer](https://semver.org/) standard for versioning.

There is also a [Changelog](#).

## Usage

The `getClassName` function takes an object. If the value associated with a given key is falsy, that key won't be included in the output.

```js
getClassName({ 'foo-bar': true }); // => 'foo-bar'
getClassName({ 'foo-bar': false }); // => ''
```

## LICENSE [MIT](LICENSE)

Copyright (c) 2022 Reframework.
