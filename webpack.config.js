// For instructions about this file refer to
// webpack documentation: https://webpack.github.io/docs/
var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    debug: true,

    devtool: 'source-map',

    entry: [
        './scripts/main'
    ],

    output: {
        path: path.join(__dirname, 'webpack-build'),
        publicPath: '/',
        filename: 'dist/bundle.js'
    },
    
    externals: {
        // require("jquery") is external and available on the global var jQuery
        "jquery": "jQuery",
        "jquery": "$"
    },

    plugins: [
        // Avoid publishing files when compilation failed:
        new webpack.NoErrorsPlugin(),

        //optimizes webpack id order
        new webpack.optimize.OccurenceOrderPlugin(),

        // Remove duplicate modules (should they occur):
        new webpack.optimize.DedupePlugin(),

        //make webpack ignore moment locale require: https://github.com/moment/moment/issues/2517
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        //global jquery is provided to any webpack modules 
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        //copy html files to dist for demo app
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

        //creates distribution css file rather than inlining styles
        new ExtractTextPlugin("dist/style.css", {allChunks: false})
    ],

    module: {
        loaders: [
            //js loader
            {
                loader: "babel-loader",

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                exclude: /node_modules/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']
                }
            },

            // bundle LESS and CSS into a single CSS file, auto-generating -vendor-prefixes
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer-loader!less-loader")
            },

            //font/image url loaders
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=image/svg+xml&name=[name].[ext]'
            },
            {
                test: /\.(woff)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/font-woff&name=[name].[ext]'
            },
            {
                test: /\.(woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/octet-stream&name=[name].[ext]'
            },
            {
                test:  /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name[name].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url?limit=100000&name=[name].[ext]'
            }
        ]
    }
};