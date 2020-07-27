// entry -> output
// Documentation: https://webpack.js.org/ and https://webpack.js.org/concepts/modules/

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
    // console.log('env', env);
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),   // Setting 'bundle.js' location to the current directory, in the 'public' folder
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',     // Convert with Babel all the files with extension '.js'
                test: /\.js$/,              // Target all files that end in '.js'
                exclude: /node_modules/     // Excludes node_modules from converting with Babel
            }, {
                test: /\.s?css$/,           // Target all files that end in '.scss'
                use: CSSExtract.extract({
                    use: [
                        // 'style-loader',         // Takes the CSS that is in JS and adds it to the DOM by injecting a style tag; that will get our styles showing up in the browser
                        {
                            loader: 'css-loader',           // Allows Webpack to load in our CSS assets (loads CSS and converts it to a JS representation of that CSS
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',           // Converts '.scss' files to '.css' files (uses node-sass to convert de file)
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', // Source maps that helps debug easier, watching the source files (also used eval-cheap-module-source-map)
        devServer: { // node-sass 4.5.3 not used
            contentBase: path.join(__dirname, 'public'),    // Configuration for Webpack dev server public files location
            historyApiFallback: true,                       // Allows the user to get page contents for the specified path
            publicPath: '/dist/'
        }
    };
};

