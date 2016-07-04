# patternfly-demo-app

The PatternFly demo app serves as a boiler for building your production app with [PatternFly](http://patternfly.org/), [Node.JS](https://nodejs.org/en/), and [Webpack](https://webpack.github.io/).

![Image of PatternFly](https://avatars2.githubusercontent.com/u/6391110?v=3&s=400)
![Image of NodeJS](http://www.devsensation.es/sites/default/files/styles/large/public/field/image/nodejs-logo.png?itok=URP6hUpT)
![Image of Webpack](https://avatars0.githubusercontent.com/webpack?&s=256)

Install webpack globally:

```
npm install webpack -g
```

Install project node modules:
```
npm i
```

### Development
For development with [BrowserSync](https://www.browsersync.io/) run:
```
npm start
```

### Production
For production, you will want to compile your webpack bundle.
```
webpack -p --config webpack.config.js
```

The resulting build will be in the [webpack-build](webpack-build) folder.


#### Webpack dev notes
All css/less/js dependencies optimized by webpack should be placed in [scripts/main.js](scripts/main.js). Less/css is written to a file
via the [extract-text plugin](https://github.com/webpack/extract-text-webpack-plugin). This will remove any inline css from bundle.js.

Note that images and fonts referenced in your css are automatically copied via webpack [url-loader](https://github.com/webpack/url-loader).

You will want to copy any html or html images *<img>* to your *dist* folder via the [copy-webpack plugin](https://github.com/kevlened/copy-webpack-plugin). An
alternative is to source images in your js/jsx templates and [html-loader](https://github.com/webpack/html-loader) can compress them.

```
        new CopyWebpackPlugin([
            {
                from: { glob:'./*.html'},
                to: './'
            },
            {
                from: { glob: 'node_modules/patternfly/dist/img/*.*'},
                to: './'
            }
        ]),
```

#### WebpackDevServer / Hot Module Replacement
Prefer using the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) with [hmr](https://webpack.github.io/docs/hot-module-replacement.html)?

We've got you covered. Just run:
```
npm run start:hmr
```

and point to your server at [http://localhost:8080/](http://localhost:8080/)