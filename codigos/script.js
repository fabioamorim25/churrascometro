// LOGICA: MODELO DE ORGANIZADOR (solo ou compartilhado) 
//compartilhado- esconder o botão de imprimir da segunda pagina e deixar visivel a terceira pagina
//solo- esconder a terceira pagina e esconder a seta para a pagina 3
const buttonSolo=document.getElementById ("solo");
const buttonCompartilhado=document.getElementById ("compartilhado");
const buttonImprimir=document.getElementById ("imprimir_pdf");

const buttonSeta2=document.getElementById ("setaBaixo2");
const buttonSeta1=document.getElementById ("setaBaixo1");

function modeloCompartilhado (){
    
    document.getElementById ("imprimir_pdf").hidden=true;
    document.getElementById ("conteiner_pagina3").hidden=false;
    document.getElementById ("setaBaixo2").hidden=false;
}
function modeloSolo (){     
    document.getElementById ("conteiner_pagina3").hidden=true;//ocultar toda a terceira pagina 
    document.getElementById ("setaBaixo2").hidden=true;//ocultar o botão pra a proxima pagina
    document.getElementById ("imprimir_pdf").hidden=false;//mostra o botão imprimir 
} 












// LOGICA: MUDAR PARA A PROXIMA PAGINA QUANDO A SETA P/ BAIXO FOR USADA 
// 1° seta- entra na segunda pagina // 2° seta- entra na terceira pagina

function rolarPagina2(){
console.log("asdadasdas");
//document.getElementsByClassName (obj).scrollIntoView ();
  
//criar uma função que quando a seta para baixo for clicada sera movimentado o cursor para baixo, mostrando a proxima pagina

}
//function painelRolagem (){// adicionar os botões das setas para usar
  //  document.getElementsByClassName("imagem_setaBaixo").addEventListener("click",rolarPagina);
  //  document.getElementById("setaProximaPagina").addEventListener("click",rolarPagina);
//}
//window.addEventListener ("load",painelRolagem);






