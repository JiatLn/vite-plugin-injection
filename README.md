# vite-plugin-injection

[![NPM version](https://img.shields.io/npm/v/vite-plugin-injection?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-injection)


Injection the build time to the index html. like this:

```html
<!-- build at 9/26/2022, 2:41:09 AM -->
```


## Install

```bash
npm i -D vite-plugin-injection
```

## Usage

```ts
// vite.config.ts
import Injection from 'vite-plugin-injection'

export default {
  plugins: [
    Injection()
  ]
}
```


## License

[MIT](./LICENSE) License © 2022 [JiatLn](https://github.com/jiatln)
