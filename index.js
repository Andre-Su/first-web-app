const copybtn = document.getElementById('copybtn');
const cola = document.getElementById('paste');
const inputtexto = document.getElementById('texto');
const carregando = document.getElementById('carregando');

var i = 0;
var j = 0;

copybtn.addEventListener('click',()=>{
    if (i==8){
        alert("Erro!")
        copybtn.textContent = 'Recarregar'
        i++
    }else if(i>8){
        i = 0;
        j = 0;
        cola.textContent = '';
        copybtn.textContent = 'Play'
        carregando.innerHTML = '';
    } else{
        j+=10
        cola.textContent = `${j}%`;
        carregar_bar();
        i++
    }
});

function carregar_bar (){
    const barra = document.createElement('div');
    barra.className = 'barrinha';
    carregando.appendChild(barra)
}
