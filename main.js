const form = document.getElementById('forms');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const listaTestes = [];
const listaNotas = [];
const ResultadoFinalAprovado = '<span class="resultado aprovado">Aprovado</span>'
const RresultadoFinalReprovado = '<span class="resultado reprovado">Reprovado</span>'
const mediaMinima = prompt('qual a media minima para ser aprovado?');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarMediaFinal();
})

function adicionarLinha(){
    const teste = document.getElementById('teste');
    const nota = document.getElementById('nota');

        if(listaTestes.includes(teste.value)){
        alert (`A atividade: '${teste.value}' ja foi adiciona ao seu boletim`)
    }   else {
        listaTestes.push(teste.value);
        listaNotas.push(parseFloat(nota.value));
        
        let linha = `<tr>`
        linha += `<td> ${teste.value} </td>`
        linha += `<td> ${nota.value} </td>`
        linha += `<td> ${nota.value >= mediaMinima ? imgAprovado : imgReprovado} </td>`;
        linha += `</tr>`;
        linhas += linha
    }
        teste.value = '';
        nota.value = '';
}

function atualizarTabela(){
    const resultadoTabela = document.querySelector('tbody');
    resultadoTabela.innerHTML = linhas;
}

function atualizarMediaFinal(){
    const media = calculoMediaFinal();

    document.getElementById('media-final-valor').innerHTML = media.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = media >= mediaMinima ? ResultadoFinalAprovado : RresultadoFinalReprovado;  
}

function calculoMediaFinal() {
    let somaDasNotas = 0
    for (let i = 0; i < listaNotas.length; i++){
        somaDasNotas += listaNotas[i];
    }    

    return somaDasNotas / listaNotas.length;
}

