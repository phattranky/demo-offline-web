# Inspectorio - Daily Weather

Daily Weather of Inspectorio's offices


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Branches
- *demo/service-worker*: https://is-daily-weather-sw.surge.sh/
- *demo/service-worker-with-workbox*: https://is-daily-weather-sw-workbox.surge.sh/

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
