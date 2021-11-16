/**Declaracao de variaveis */
var dataJogosSabado = "16/11/2021"
var dataJogosDomingo = '17/11/2021'
var dataJogosSegunda = '18/11/2021'
var resultDataSab = false
var resultDataDom = false
var resultDataSeg = false

  if(dataJogosSabado == dataAtual){
    resultDataSab = true
  }

  if (dataJogosDomingo == dataAtual) {
    resultDataDom = true
  }

  if (dataJogosSegunda == dataAtual) {
    resultDataSeg = true
  }

  console.log(hora+min)
  console.log("Data de Sabado: " + resultDataSab)
  console.log("Data de Domingo: " + resultDataDom)
  console.log("Data de Segunda: " + resultDataSeg)

/** Jogos ao vivo Sabado */

    if (resultDataSab == true && hora+min >= 1600 && hora+min < 1800) {
        trocarJogo1();    
        console.log("Jogo 1 ao vivo")  
    }

    if (resultDataSab == true && hora + min >= 1800 && hora + min <= 2000) {
      trocarJogo2();
      console.log("Jogo 2 ao vivo")

    }

    if (resultDataDom == true && hora + min >= 1900 && hora + min <= 2100) {
      trocarJogo3();
      trocarJogo4();
      trocarJogo5();
      trocarJogo6();

      console.log("Jogo 3 e 4 ao vivo")
    }

    if (resultDataDom == true && hora + min >= 2030 && hora + min <= 2230) {
      trocarJogo7();
      trocarJogo8();
    }

    /**Jogos Domingo */

    if (resultDataDom == true && hora + min >= 2130 && hora + min <= 2330 ) {
      trocarJogo9();
      console.log("Jogo 6 ao vivo")
    }

    if (resultDataSeg == true && hora + min >= 2100 && hora + min <= 2300 ) {
      
      trocarJogo10();
      
    }