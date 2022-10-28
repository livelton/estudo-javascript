const path = require("path");

module.exports = {
    entry: {
        index: './src/index.js',
        galaxia: './src/galaxia.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/, //todos os arquivos q terminam com js, o webpack irá pegar todos
                use: ['babel-loader']
            }

        ]
    }
}