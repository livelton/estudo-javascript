//aqui será definido o json como uma string
let time_json = `{
    "nome": "Flamengo",
    "qtTitulos": {
        "brasileiro": 8,
        "libertadores": 2,
        "mundial": 1,
        "copaDoBrasil": 3,
        "supercopa": 2
    },
    "horarioInicio": "21:45",
    "horarioTermino": "23:00",
    "principaisJogadores": ["Gabigol", "Pedro", "Arrascaeta"]
}`

//esse parse transformará o json em um objeto a variável que ele atribuiu
let time = JSON.parse(time_json)
console.log(time)