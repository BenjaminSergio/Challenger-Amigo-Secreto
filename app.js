//Benjamin Challenger Oracle One 8

let listaAmigos = [];
let textoListaSorteado = document.getElementById('listaAmigos');


function  adicionarAmigo(){
    let amigo = document.querySelector('input');

    if(amigo.value != ''){
        listaAmigos.push(amigo.value);
        console.log("Amigo aadicionado!")
        showListaAmigo(listaAmigos);
    }
    else{
        console.log("Nescessario inserir um nome!");
    }
    const limpaAmigo = (amigo) => amigo.value = "";
    limpaAmigo(amigo);
    console.log(listaAmigos);
    return;
}

function criaTexto(local,tipo, mensagem){
    const texto = document.createElement(tipo);
    texto.textContent = mensagem,
    local.appendChild(texto);
}

function showListaAmigo(){
    textoListaSorteado.innerHTML = '';
    criaTexto(textoListaSorteado,'h3','Lista de Amigos')
    listaAmigos.forEach(amigo => {
        criaTexto(textoListaSorteado,'li',amigo);
    });
}

function sortearAmigo(){

    let limiteSorteio = listaAmigos.length;
    if(limiteSorteio == 0){
        alert("Lista de Amigos vazia, por favor Insira o nome dos amigos!")
    }
    let amigoSorteado =  parseInt(Math.random() * limiteSorteio );

    const textoAmigoSorteado = document.getElementById('resultado');
    textoAmigoSorteado.textContent = `O seu Amigo secreto é: ${listaAmigos[amigoSorteado]}`;

    listaAmigos.splice(amigoSorteado,1);
    showListaAmigo(listaAmigos)
}
