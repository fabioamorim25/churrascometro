// LOGICA: MODELO DE ORGANIZADOR (solo ou compartilhado) 
//compartilhado- esconder o botão de imprimir da segunda pagina e deixar visivel a terceira pagina
//solo- esconder a terceira pagina e esconder a seta para a pagina 3
const buttonCompartilhado=document.getElementById ("compartilhado");
const buttonSolo=document.getElementById ("solo");

const buttonImprimir=document.getElementById ('imprimir_pdf');

 function modeloCompartilhado (){
  document.getElementById ("imprimir_pdf").hidden=true;
  document.getElementById ("conteiner_pagina3").hidden=false;
  document.getElementById ("setaBaixo2").hidden=false;
}
function modeloSolo(){     
  document.getElementById ("conteiner_pagina3").hidden=true;//ocultar toda a terceira pagina 
  document.getElementById ("setaBaixo2").hidden=true;//ocultar o botão pra a proxima pagina
  document.getElementById ("imprimir_pdf").hidden=false;//mostra o botão imprimir 
}
// LOGICA: MUDAR PARA A PROXIMA PAGINA QUANDO A SETA P/ BAIXO FOR USADA 
// 1° seta- entra na segunda pagina // 2° seta- entra na terceira pagina // e os botões de navegação entra na respectiva função abaixo
const buttonSeta2=document.getElementById ("setaBaixo2");
const buttonSeta1=document.getElementById ("setaBaixo1");

function rolarPagina2(){
var pagina2 = document.getElementById("setaLateral");
    pagina2.scrollIntoView();
}
function rolarPagina3(){
    var pagina3 = document.getElementById("setaLateral2");
    pagina3.scrollIntoView();
}
function rolarPagina1(){
    var pagina1 = document.getElementById("menuSuperior");
    pagina1.scrollIntoView();
}

// LOGICA: REGRA PARA IR PARA A SEGUNDA PAGINA
// deve escolher um dos modelos de organizador e clicar na 1° seta para baixo (caso não executar as duas regras, sera mantido na primeira pagina em espera)








  

