//CALCULADORA

// LOGICA: RECEBER OS VALORES DIGITADOS PELO USUARIO (quant:crianças,adulto,duração)
let adultos = document.getElementById("adulto")
let criancas = document.getElementById("crianca")
let tempo = document.getElementById("duracao")
///////////////////////////////////////////////////////////////////////////////////////////
//LOGICA: VERIFICAR OS VALORES RECEBIDOS DOS INPUTS (quant:crianças,adulto,duração) 
function verificar() {
    if (adultos.value <= 0 || criancas.value <= -1 || tempo.value <= 0) {
        alert("valores invalidos");
        adultos.value = 0;
        criancas.value = 0;
        tempo.value = 0;
    } else {
       // chamar as funçoes para gera os valores do relatorio 
    }
}
/////////////////////////////////////////////////////////////////////////////////////////




// LOGICA: DIVs CONTEINER ( onde sera armazenados os resultados encontrados) 
let quant_TotalCerveja =document.getElementsByClassName("resultadoCerveja");//conteiner linha 71 html
let quant_TotalCarne =document.getElementsByClassName("resultadoCarne");//conteiner linha 80 html
let quant_TotalRefrigerante =document.getElementsByClassName("resultadoRefrigerante"); //conteiner linha 89 html

////CALCULOS

// LOGICA: CALCULAR A QUANTIDADE TOTAL DE CERVEJA

// LOGICA: CALCULAR A QUANTIDADE TOTAL DE CARNE

// LOGICA: CALCULAR A QUANTIDADE TOTAL DE REFRIGERANTE
















