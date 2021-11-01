var data = new Date();
var hora = String(data.getHours()) .padStart(2, '0');
var min = String(data.getMinutes()). padStart(2,'0');
var horas = hora + ':' + min

var dia = String(data.getDate()). padStart(2, '0');
var mes = String(data. getMonth() + 1). padStart(2, '0');
var diaAtual = dia + '/' + mes;

console.log(horas)
console.log(diaAtual)

function trocarJogo1() {
    const jogo1 = document.querySelector("#ao-vivo1").className = "ao-vivo"
  }

  function trocarJogo2() {
    const jogo2 = document.querySelector("#ao-vivo2").className = "ao-vivo"
  }
  function trocarJogo3() {
    const jogo3 = document.querySelector("#ao-vivo3").className = "ao-vivo"
  }
  function trocarJogo4() {
    const jogo4 = document.querySelector("#ao-vivo4").className = "ao-vivo"
  }
  function trocarJogo5() {
    const jogo5 = document.querySelector("#ao-vivo5").className = "ao-vivo"
  }
  function trocarJogo6() {
    const jogo6 = document.querySelector("#ao-vivo6").className = "ao-vivo"
  }
  function trocarJogo7() {
    const jogo7 = document.querySelector("#ao-vivo7").className = "ao-vivo"
  }
  function trocarJogo8() {
    const jogo8 = document.querySelector("#ao-vivo8").className = "ao-vivo"
  }
  function trocarJogo9() {
    const jogo9 = document.querySelector("#ao-vivo9").className = "ao-vivo"
  }
  function trocarJogo10() {
    const jogo10 = document.querySelector("#ao-vivo10").className = "ao-vivo"
  }




  if (horas == "10:03" && diaAtual == "01/11") {
    trocarJogo4();  
    trocarJogo10();
  }