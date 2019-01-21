const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: 'KanbanCondensedTampermonkey.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};