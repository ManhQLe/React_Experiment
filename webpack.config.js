const path = require("path")

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        index: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: '[name].js'
    },

    externals: [
        {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}