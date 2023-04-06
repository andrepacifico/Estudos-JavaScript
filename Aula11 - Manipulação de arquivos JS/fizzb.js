verificarVelocidade(88)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const kmPorPonto = 5

    if (velocidade <= velocidadeMaxima)
    console.log('Dentro do limite permitido')

    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
        if (pontos >= 12)
        console.log('Carteira suspensa')

        else 
        console.log(`Você acaba de ser multado em ${pontos} pontos na carteira`)
    }

    
}

