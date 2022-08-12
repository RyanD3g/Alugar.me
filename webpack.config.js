const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['js', 'css']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
    {
        test:/\.css$/,
        exclude:/node_modules/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [{
            loader: 'img-optimize-loader',
        }]
    }
]
    }
}