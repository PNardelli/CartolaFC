const mercado = document.querySelector("#open-close")


var horaClose = '18:00'
var dataClose = '13/10/2021'
var data = new Date()

var dia = String(data.getDate()). padStart(2, '0');
var mes = String(data. getMonth() + 1). padStart(2, '0');
var ano = data. getFullYear();
var hora = String(data.getHours())
var min = String(data.getMinutes()). padStart(2,'0');
var horaAtual = hora + ':' + min;

dataAtual = dia + '/' + mes + '/' + ano;

console.log(horaAtual);
console.log(horaClose)
console.log(dataAtual)

if (horaClose <= horaAtual && dataClose == dataAtual) {
    console.log('Teste OK! -> ' + dataClose + '-> ' + dataAtual)

mercado.innerHTML = 'Mercado Fechado.'
const mercadoCor = document.getElementById("open-close")
mercadoCor.classList.remove("bg-success")
mercadoCor.classList.add("bg-danger")

} else {
    console.log('Mercado Aberto!')   
};