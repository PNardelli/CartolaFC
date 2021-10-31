const mercado = document.querySelector("#open-close")
console.log(mercado)

var horaClose = 'Data:30' + ' Horas: ' + '16' + ':' + '30';
var dataClose = '30/10/2021'
var data = new Date()

var dia = String(data.getDate()). padStart(2, '0');
var mes = String(data. getMonth() + 1). padStart(2, '0');
var ano = data. getFullYear();
var hora = String(data.getHours()) .padStart(2, '0');
var min = String(data.getMinutes()). padStart(2,'0');
var horaAtual = 'Data:' + dia + ' Horas: ' + hora + ':' + min;
var horario = hora + ':' + min;

dataAtual = dia + '/' + mes + '/' + ano;

function mercadoFechado(){

if (horaClose <= horaAtual && dataClose <= dataAtual) {
    console.log('Teste OK! -> ' + dataClose + '-> ' + dataAtual)

mercado.innerHTML = 'Mercado Fechado.'
const mercadoCor = document.getElementById("open-close")
mercadoCor.classList.remove("bg-success")
mercadoCor.classList.add("bg-danger")

} else {
    mercado.innerHTML = 'Mercado Aberto para proxima rodada até: ' + dataClose
};
}

mercadoFechado()
  