

function carregar() {
    var mensagem = document.getElementById('mensagem')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    mensagem.innerText = `${hora}:${min}`

    if (hora < 5) {
        foto.src = 'imagens/noite.png'
        bomDia.innerText = 'Boa madrugada'
        document.body.style.backgroundColor = "#4E8DAD"
    } else if (hora >= 5 && hora < 7) {
        foto.src = "imagens/manha.png"
        bomDia.innerText = 'Bom dia'
        document.body.style.backgroundColor = "#5D718C"
    } else if (hora >=7 && hora <=11) {
        foto.src = "imagens/dia.png"
        bomDia.innerText = 'Bom dia'
        document.body.style.backgroundColor = "#F2994B"
    } else if (hora <= 16 ) {
        foto.src = "imagens/dia.png"
        bomDia.innerText = 'Boa tarde'
        document.body.style.backgroundColor = "#F67F3D"
    } else if (hora == 17) {
        foto.src = 'imagens/tarde.png'
        bomDia.innerText = 'Boa tarde'
        document.body.style.backgroundColor = "#FABD69"
    } else if (hora < 24) {
        foto.src = 'imagens/noite.png'
        bomDia.innerText = 'Boa noite'
        document.body.style.backgroundColor = "#4E8DAD"
    } else {
        foto.src = 'none'
        bomDia.innerText = 'Hora inválida'
    }
}
