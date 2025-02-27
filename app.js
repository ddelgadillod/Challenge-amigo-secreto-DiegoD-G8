// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let limiteAmigos = 5;
let amigos = [];


function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo').value
    if(!amigoIngresado){
        alert("Por favor ingrese un nombre valido");
        return;
    }
    amigos.push(amigoIngresado);
    console.log(amigos);
    limpiarCaja();
    renderizarAmigos();
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let j=0; j < amigos.length; j++){
        let item = document.createElement("li");
        item.textContent = amigos[j];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert("Ingrese una lista de amigos")
        return;
    }
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    let listaAmigoSecreto = document.getElementById("resultado");
    listaAmigoSecreto.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}


