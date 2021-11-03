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
  var dataDosJogos = "03/11/2021"


  var resultHora = false
  var resultMin = false 
    hora
    min

    if (02 == hora || hora == 03) {
         if(min >= 16) {
            resultHora = true
            resultMin = true;  
        }

        if (hora == 18 && min >= 45) {
            resultMin = false
        }

    if (dataAtual == dataDosJogos && resultHora == true && resultMin == true) {
        console.log("Trocar Jogo 3")
        trocarJogo3()
    }    
}
 


  console.log("Hora: " + hora)
  console.log("Minuto: " + min)
  console.log("Data Atual: " + dataAtual)