let path = require('path');

module.exports = {
    entry: {
        index: "./js/index.js",
        catalog: "./js/catalog.js"
    },
    output: {
        path: path.resolve(__dirname, "./js/build/"),
        filename: "[name].bundle.js",
        // Для devServer создает виртуальный каталог из которого брать js файл
        publicPath: "js/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: "/node_modules/"
            }
        ]
    },
    devtool: "source-map"
}