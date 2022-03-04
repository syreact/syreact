const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        syreact: path.join(__dirname, 'src')
    },
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "index.js",
        library: "syreact"
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx?$/,
                use: ['babel-loader?babelrc'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
