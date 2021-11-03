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
    hora = 17
    min = 46

    if (horarioAs16 == hora || horarioAs16+1 == hora) {
         if(min >= 00) {
            resultHora = true
            resultMin = true 
            console.log("Ptimeiro IF")
        }
        if(hora == 17 && min <= 45){
            resultHora = true
            resultMin = true
            console.log("Segundo IF " + horarioAs16)
        }

    if (dataAtual == dataDosJogos && resultHora == true && resultMin == true) {
        console.log("Trocar Jogo 3")
        trocarJogo3()
        trocarJogo5()
    }    
}
 


  console.log("Hora: " + hora)
  console.log("Minuto: " + min)
  console.log("Data Atual: " + dataAtual)