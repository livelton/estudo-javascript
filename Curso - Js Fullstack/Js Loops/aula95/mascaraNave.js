let nomeNave = window.prompt('Digite o nome da nave');
let caractereSub = window.prompt('Qual caractere você deseja substituir?');
let novoCaractere = window.prompt('Por qual caractere você deseja substituir?');
let novoNome = '';
let i;

for(i = 0; i < nomeNave.length; i++){
    if(nomeNave[i] == caractereSub){
       novoNome += novoCaractere
    }
    else{
        novoNome += nomeNave[i];
    }
    
}

window.alert(`O novo nome da nave é ${novoNome}`)

