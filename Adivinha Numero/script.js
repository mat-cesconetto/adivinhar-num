function Jogo() {
    let rnum = Math.floor(Math.random() * 100);
    var chute = parseInt(prompt('Digite sua tentativa'))

    function tentativa() {
        if (chute > rnum) {
            document.getElementById('Resp').innerHTML = 'Você chutou um número mais alto que o escolhido'
        } else if (chute < rnum) {
            document.getElementById('Resp').innerHTML = 'Você chutou um número mais baixo que o escolhido'
        } else {
            document.getElementById('Resp').innerHTML = 'VOCÊ ACERTOU🥳'
            document.getElementById('hid').style.display = 'none'
            document.getElementById('vis').style.display = ''
            return
        }
        setTimeout(() => {
            chute = parseInt(prompt('Digite sua tentativa'))
            tentativa()
        }, 100)
    }

    tentativa()

}

