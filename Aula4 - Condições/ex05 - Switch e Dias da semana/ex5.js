var agora = new Date()
var diasdasem = agora.getDay()

diasdasem = 6
//console.log(diasdasem) SE EU QUISER MOSTRAR O DIA DA SEMANA ATUAL COM A NUMERAÇÃO DO SISTEMA

switch(diasdasem) {

    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda-feira')
        break

    case 2:
        console.log('Terça-feira')
        break

    case 3:
        console.log('Quarta-feira')
        break

    case 4:
        console.log('Quinta-feira')
        break

    case 5:
        console.log('Sexta-feira')
        break

    case 6:
        console.log('Sábado')
        break

    default:
        console.log('ERRO, Dia da semana inválido.')
}
