let nomeNave = window.prompt('Digite o nome da nave');
let decisaoDobra = window.prompt(`Bem-vindo a nave ${nomeNave}! Deseja entrar em dobra espacial?\n1- Sim 2- Não`);
let numDobra = 0;

while(decisaoDobra == 1){
    numDobra++;
    decisaoDobra = window.prompt('Dobra realizada, deseja realizar mais uma?\n1- Sim 2- Não')
}

window.alert(`A nave ${nomeNave} realizou ${numDobra} dobras espaciais`);