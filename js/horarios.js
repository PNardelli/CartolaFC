var horarioAs16 = 16
  var horarioAs17 = 17
  var horarioAs18 = 18
  var horarioAs19 = 19
  var horarioAs20 = 20
  var horarioAs21 = 21
  var horarioAs22 = 22
  var minAs15 = 15
  var minAs00 = 00
  var minAs30 = 30
  var dataDosJogosSabado = "13/11/2021"
  var dataDosJogosDomingo = '14/11/2021'


  var resultHora = false
  var resultMin = false
  var resultData = false

  if(dataDosJogosSabado == dataAtual){
    resultData = true
  }

  console.log(hora+min)


    if (resultData == true && hora+min >= 1700 && hora+min < 1900) {
        trocarJogo1();    
        console.log("Jogo 1 ao vivo")  
    }

    if (resultData == true && hora + min >= 1830 && hora + min <= 2030) {
      trocarJogo2();
      console.log("Jogo 2 ao vivo")

    }

    if (resultData == true && hora + min >= 1900 && hora + min <= 2100) {
      trocarJogo3();
      trocarJogo4();

      console.log("Jogo 3 e 4 ao vivo")
    }

    if (resultData == true && hora + min >= 2100 && hora + min <= 2300) {
      trocarJogo5();
      console.log("Jogo 5 ao vivo")
    }
