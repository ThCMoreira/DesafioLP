const nameList = []

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value;

    if (nome !== '') {
        nameList.push(nome);
        console.log(nameList);
        
    } else{
        alert ("Por favor, insira um nome.");
    }
    input.value = '';

    addAmigos()
}

function addAmigos(){
    const addAmigos = document.getElementById('listaAmigos');
    addAmigos.innerHTML = '';
    for(let i = 0;i<= nameList.length;i++){
        const novoItem = document.createElement('li');
        novoItem.textContent = nameList[i];
        addAmigos.appendChild(novoItem); 
    };
}

function sortearAmigo() {
    if (nameList.length>=2) {
        const indiceAleatorio = Math.floor(Math.random() * nameList.length);
        const nomeSorteado = nameList[indiceAleatorio];
        const resultadoLista = document.getElementById('resultado');
        resultadoLista.innerHTML = '';
        const itemResultado = document.createElement('li');
        itemResultado.textContent = 'Amigo secreto sorteado: ' + nomeSorteado;
        resultadoLista.appendChild(itemResultado);
       
    }else{
        alert ("Por favor colocar 2 nomes no minimo.");
    }
}