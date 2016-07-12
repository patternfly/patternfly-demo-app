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
webpack --config build/webpack.config.js
npm start
```

### Production
For production, you will want to compile your webpack bundle.
```
webpack -p --config build/webpack.config.js
```

The resulting build will be in the [dist](dist) folder.

### Optimizations
All js references loaded in `js/main.js` will be chunked by webpack and loaded in a single file, `dist/main.bundle.js`. 

CSS references are currently extracted in multiple entry points, `patternfly` and `patternfly-additions`. You can read more about using multiple entry points [here](https://webpack.github.io/docs/multiple-entry-points.html) and [here](https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points-commons-chunk-css-bundle).
This also ensures our IE support due to file length limitations on CSS files.

Note that compiled css files may appear larger - however this may be misleading to Webpack newcomers. The webpack configuration in this project will automatically
trace any inline images and fonts and inject them inline, saving you costly network requests in your production app. 

#### Webpack dev notes
All css/less/js dependencies optimized by webpack should be placed in [scripts/main.js](scripts/main.js). Less/css is written to a file
via the [extract-text plugin](https://github.com/webpack/extract-text-webpack-plugin). This will remove any inline css from bundle.js.

Note that images and fonts referenced in your css are automatically copied via webpack [url-loader](https://github.com/webpack/url-loader).

You will want to copy any html or images that are referenced in html *<img>* tags to your *dist* folder via the [copy-webpack plugin](https://github.com/kevlened/copy-webpack-plugin). An
alternative is to source images in your js/jsx templates and [html-loader](https://github.com/webpack/html-loader) can compress them.

```
        new CopyWebpackPlugin([
            {
                from: { glob:'./src/html/*.html'},
                to: './',
                flatten: true
            },
            {
                from: { glob: 'node_modules/patternfly/dist/img/*.*'},
                to: './img',
                flatten: true
            }
        ]),
```

#### WebpackDevServer / Hot Module Replacement
This project makes use of [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) with [hmr](https://webpack.github.io/docs/hot-module-replacement.html).

While developing and making to changes to `src` files, you should see changes propagate immediately to the browser. Files are also updated in the `dist` folder via the [write-file-plugin](write-file-webpack-plugin).

**Note:** you can gitignore webpack incremental updates. These are written to `dist/hot`. You can read more about this [here](http://code.fitness/post/2016/02/webpack-public-path-and-hot-reload.html).

#### Having trouble with Webpack?
Given it is a new technology, there is certainly room for error. You can sometimes trace more error info with the `--display-error-details` arg:
```
webpack -p --config build/webpack.config.js --display-error-details
```

Also, there is a wonderful collection of detailed examples in the webpack project [here](https://github.com/webpack/webpack/tree/master/examples). 

There are some more helpful debugging tips [here](http://webpack.github.io/docs/troubleshooting.html). 

If you are still having troubles, find us on [PatternFly Gitter](https://gitter.im/patternfly/patternfly) or ask someone in the [Webpack community](https://gitter.im/webpack/webpack).