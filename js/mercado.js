const mercado = document.querySelector("#open-close")
const icone = document.getElementsByClassName


var horaClose = 'Data:16' + ' Horas: ' + '18' + ':' + '30';
var dataClose = '16/10/2021'
var data = new Date()

var dia = String(data.getDate()). padStart(2, '0');
var mes = String(data. getMonth() + 1). padStart(2, '0');
var ano = data. getFullYear();
var hora = String(data.getHours()) .padStart(2, '0');
var min = String(data.getMinutes()). padStart(2,'0');
var horaAtual = 'Data:' + dia + ' Horas: ' + hora + ':' + min;

dataAtual = dia + '/' + mes + '/' + ano;


console.log('Hora do Fechamento: ' + horaClose + '------> Hora Atual: ' + horaAtual)
console.log('Data do Fechamento: ' + dataClose + '------> Data Atual: ' + dataAtual)

if (horaClose <= horaAtual && dataClose <= dataAtual) {
    console.log('Teste OK! -> ' + dataClose + '-> ' + dataAtual)

mercado.innerHTML = 'Mercado Fechado.'
const mercadoCor = document.getElementById("open-close")
mercadoCor.classList.remove("bg-success")
mercadoCor.classList.add("bg-danger")

} else {
    console.log('Mercado Aberto!')   
};
