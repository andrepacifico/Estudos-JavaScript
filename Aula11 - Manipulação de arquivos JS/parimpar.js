

//Receber uma quantidade de valores para avaliar
// função que exibe se cada valor é ou impar.

exibirTipo(5)
function exibirTipo(limite){

    for(let ni = 0; ni <= limite; ni++)
    if(ni % 2 === 0)
    console.log(ni, 'PAR',)

    else {
        console.log(ni, 'IMPAR')
    }
}