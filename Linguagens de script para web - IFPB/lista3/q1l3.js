let texto = document.querySelector('#texto');
let data = document.querySelector('#data');
let button = document.querySelector('button');
let arrayEvento = [];
let listaEvento = document.querySelector('#listaEvento')

function registrarEvento() {
    const evento = {
        titulo: texto.value,
        data: data.value
    }
    //colocando o objeto dentro do array
    arrayEvento.push(evento);
    
    //organizando o array
    arrayEvento.sort((a, b) => {
        if (a.data > b.data) {
            return 1;
        }
        if (a.data < b.data) {
            return -1;
        }
        return 0;
    });
    console.log(arrayEvento);
    

    //chama a função
    exibeEvento()
    return arrayEvento
    
}

button.addEventListener('click', registrarEvento);

function exibeEvento(){

    // lista.textContent = `Evento: ${arrayEvento[0].titulo} Data: ${arrayEvento[0].data} `
    
    const listaOrganizada = arrayEvento.map((evento) => {
        const lista = document.createElement('li');
        lista.textContent = `Evento: ${evento.titulo} | Data: ${evento.data}`
        return lista;
    })

    listaEvento.replaceChildren(...listaOrganizada)


    // arrayEvento.forEach((evento) => {
    //     lista.textContent = `Evento: ${evento.titulo} Data: ${evento.data}`;
    // });

    


    
}