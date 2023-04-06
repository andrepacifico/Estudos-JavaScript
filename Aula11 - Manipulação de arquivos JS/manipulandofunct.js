let coresDeFundo = ['azul', 'amarelo', 'branco']
function mudarCores(cordefundo){
    coresDeFundo = cordefundo

}

mudarCores('amarelo, azul')
console.log(coresDeFundo)


let degrade = ['verde', 'lilás']
function mudarDegrade(cores){
    mudarDegrade = cores
}
mudarDegrade('preto e cinza')
console.log(`As cores de fundo do site foram alteradas para ${mudarDegrade}`)

let corPersonalizada = ''
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)
