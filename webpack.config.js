const path = require('path');

module.exports = {
    // entry: tell webpack the root of all of the modules (typically index.js)
    entry: path.resolve(__dirname, 'client/index.js'),
    // output: tell webpack where to put the bundled js files
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        // specifies path for all assets within the application (after building bundle.js this path will be the same as output path above)
        publicPath: '/build'
    },
    mode: process.env.NODE_ENV,
    devServer: {
        static: {
            // path.join required. directory tells webpack where to find static assets (index.html)
            directory: path.join(__dirname, '/client'),
            // publicPath tells which endpoint the client server should request from
            publicPath: '/',
        }
    },
    module: {
        // rules aka loaders
        rules: [
            {
                // apply loaders listed under "use" for all files that match .js or .jsx file types
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options are for plugins and presets which adds extra functionality to loaders
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}