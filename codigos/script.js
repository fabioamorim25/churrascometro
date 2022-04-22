// LOGICA: MODELO DE ORGANIZADOR (solo ou compartilhado) 
//compartilhado- esconder o botão de imprimir da segunda pagina e deixar visivel a terceira pagina
//solo- esconder a terceira pagina e esconder a seta para a pagina 3

let buttonSolo=document.getElementById ("solo");
let buttonCompartilhado=document.getElementById ("compartilhado");
let buttonImprimir=document.getElementById ("imprimir_pdf");
let buttonProximaPagina=document.getElementById ("setaProximaPagina");

function modeloCompartilhado (){
    document.getElementById ("imprimir_pdf").hidden=true;
    document.getElementById ("conteiner_pagina3").hidden=false;
    document.getElementById ("setaProximaPagina").hidden=false;
}
function modeloSolo (){     
    document.getElementById ("conteiner_pagina3").hidden=true;//ocultar toda a terceira pagina 
    document.getElementById ("setaProximaPagina").hidden=true;//ocultar o botão pra a proxima pagina
    document.getElementById ("imprimir_pdf").hidden=false;//mostra o botão imprimir 
}


























 function proxima_pagina (){
    console.log("proxima pagina")
//criar uma função que quando a seta para baixo for clicada sera movimentado o cursor para baixo, mostrando a proxima pagina
}


