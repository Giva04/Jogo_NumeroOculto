// VARIAVEL DO NUMERO DO COMPUTADOR
let computerNumber

//VARIAVEL QUE ARMEZA NA ARRAY O NUMERO DIGITADO 
let userNumbers = []

// FUNÇÃO QUE INICIALIZA  E REINICIALIZA O JOGO

function init( ) {
    // variavel que armazena o numero do computador
    computerNumber = Math.floor(Math.random() * 100 + 1)
     console.log( computerNumber)
}
// FUNÇÃO QUE AMAZENA O NUMERO DIGITADO NO INPUT na array
function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value)
//    para enviar o numero para array
   userNumbers.push(' ' + userNumber)

// para fazer paracer o numero digitado no palpite
    document.getElementById('guesses').innerHTML = userNumbers
}
