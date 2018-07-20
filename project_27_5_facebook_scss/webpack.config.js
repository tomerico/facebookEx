const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry: ['webpack-serve/client?http://127.0.0.1:6200',
    //         './js/source.js'
    // ],
    entry:'./js/source.js',
    output: {
        filename: 'app.js'
    },
    devtool: 'source-map',
    //style loader   
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader", 
                    options: {sourceMap: true} 
                    },
                    { loader: "css-loader", 
                    options: {sourceMap: true} 
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader", 
                    options: {sourceMap: true} 
                    },
                    { loader: "css-loader", 
                    options: { sourceMap: true } 
                    },
                    { loader: "sass-loader", 
                    options: { sourceMap: true } 
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
}
