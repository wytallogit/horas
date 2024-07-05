function carregar() {

    var cumprimento = document.getElementById('cumprimento')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes().toLocaleString('pt-BR', {minute: '2'});

    var dia = data.getDay()
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    var mes = meses[data.getMonth()]
    var ano = data.getFullYear()

    var hr = document.getElementById('hr')
    hr.innerHTML = `${hora}:${minutos}`

    var hoje = document.getElementById('hoje')
    hoje.innerText = `${dia} de ${mes} de ${ano}`

    var foto = document.getElementById('foto')

    if (hora >= 0 && hora <= 5) {
        cumprimento.innerText = 'Boa madrugada'
        foto.src = 'imagens/lua.png'
        document.body.style.background = "#1A2737"
    } else if (hora <= 11) {
        cumprimento.innerText = 'Bom dia'
        foto.src = 'imagens/sol.png'
        document.body.style.background = "#04707A"
    } else if (hora <= 17) {
        cumprimento.innerText = 'Boa tarde'
        foto.src = 'imagens/sol.png'
        document.body.style.background = "#FECF9A"
    } else {
        cumprimento.innerText = 'Boa noite'
        foto.src = 'imagens/lua.png'
        document.body.style.background = "#1A2737"
    }



}