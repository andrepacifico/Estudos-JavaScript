function carregar() {
var msg = document.getElementById('msg')
var imagem = document.getElementById('imagem')
var date = new Date()
var min = date.getMinutes()
var hora = date.getHours()



msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`


if (hora >= 0 && hora < 12) {
    img.src = 'fotomanhã.png'
    document.body.style.background = '#ffb06f'
    
}

else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#b93502'
}

else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#3a5d73'
}

}