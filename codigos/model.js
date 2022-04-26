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
        relatorioDasCompras () 
    }
}
/////////////////////////////////////////////////////////////////////////////////////////


 


                                                //ESTRUTURA PARA AS RESPOSTAS DO CONTEINER CALCULADORA

// LOGICA: CERVEJA
function valorCerveja(tempo) {
    if (tempo.value >= 6) {
      return 2000;
    } else {
      return 1200;
    }
}
// LOGICA: CARNE
function valorCarne(tempo) {
    if (tempo.value >= 6) {
      return 650;
    } else {
      return 400;
    }
}
// LOGICA: REFRIGERANTE
function valorBebida(tempo) {
    if (tempo.value >= 6) {
      return 1500;
    } else {
      return 1000;
    }
}
function relatorioDasCompras (){
  
  // encontra os valores geral para carne e bebidas
    let cerveja = adultos.value * valorCerveja(tempo); // quantidade de cerveja em ml
    let refrigerante = (adultos.value * valorBebida(tempo)) + (criancas.value * (valorBebida(tempo) / 2));// quantidade de refrigerante em ml
    let carne = (adultos.value * valorCarne(tempo)) + (criancas.value * (valorCarne(tempo) / 2));// quantidade de carne em gramas
    
  // converter os valores encontrados acima para determinar a quantidade exata 
  //(considerando capacidade de armazenamento das garrafas e arredondando os valores quebrados ; e transformar grama para kg)
    let qntGeral_cerveja= Math.ceil(cerveja/355);//latinha 355 ml, quantidade de latinhas de cerveja. caso de um valor quebrado arredonda para cima 
    let qntGeral_refrigerante= Math.ceil(refrigerante/2000);//garrafa de 2L, quantidade de garrafas de refrigerante. caso de um valor quebrado arredonda para cima
    let qntGeral_carne= (carne/1000); // converter a quantidade de carne em gramas para kg
 
 
// declarar o id de cada conteiner para colocar os valores da quantidade de "carne e bebidas" encontrados  
    let conteinerCerveja =document.getElementById ("resultadoCerveja");
    conteinerCerveja.innerHTML= `<div>${qntGeral_cerveja} Uni.</div>`; 
    
    let conteinerCarne =document.getElementById ("resultadoCarne");
    conteinerCarne.innerHTML= `<div>${qntGeral_carne} Kg</div>`;
    
    let conteinerRefrigerante =document.getElementById ("resultadoRefrigerante");
    conteinerRefrigerante.innerHTML= `<div>${qntGeral_refrigerante} Uni.</div>`; 
}










