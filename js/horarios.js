/**Declaracao de variaveis */
var dataJogosSabado = "13/11/2021"
var dataJogosDomingo = '14/11/2021'
var resultDataSab = false
var resultDataDom = false

  if(dataJogosSabado == dataAtual){
    resultDataSab = true
  }

  if (dataJogosDomingo == dataAtual) {
    resultDataDom = true
  }

  console.log(hora+min)
  console.log("Data de Sabado: " + resultDataSab)
  console.log("Data de Domingo: " + resultDataDom)

/** Jogos ao vivo Sabado */

    if (resultDataSab == true && hora+min >= 1700 && hora+min < 1900) {
        trocarJogo1();    
        console.log("Jogo 1 ao vivo")  
    }

    if (resultDataSab == true && hora + min >= 1830 && hora + min <= 2030) {
      trocarJogo2();
      console.log("Jogo 2 ao vivo")

    }

    if (resultDataSab == true && hora + min >= 1900 && hora + min <= 2100) {
      trocarJogo3();
      trocarJogo4();

      console.log("Jogo 3 e 4 ao vivo")
    }

    if (resultDataSab == true && hora + min >= 2100 && hora + min <= 2300) {
      trocarJogo5();
      console.log("Jogo 5 ao vivo")
    }

    /**Jogos Domingo */

    if (resultDataDom == true && hora + min >= 1600 && hora + min <= 1750 ) {
      trocarJogo6();
      console.log("Jogo 6 ao vivo")
    }

    if (resultDataDom == true && hora + min >= 1815 && hora + min <= 2015 ) {
      trocarJogo7();
      console.log("Jogo 7 ao vivo")
    }

    if (resultDataDom == true && hora + min >= 1900 && hora + min <= 2050 ) {
      trocarJogo8();
      trocarJogo9();
      console.log("Jogo 8 e 9 ao vivo")
    }