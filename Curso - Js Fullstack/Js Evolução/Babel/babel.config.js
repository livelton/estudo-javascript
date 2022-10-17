const presets = [
    [
        "@babel/preset-env", //aqui é o preset
        { //aqui são as configurações
            useBuiltIns: "usage",
            corejs: "3.3.2"
        }

    ]
];

module.exports = { presets }

//esse presets já vai deixar setado pra gente não precisar utilizar o diretório do babel, ou seja, só dar npx babel src --out-dir dist pra clonar o diretório scr com o nome de dist