// VARIAVEL DO NUMERO DO COMPUTADOR
let computerNumber

//VARIAVEL QUE ARMEZA NA ARRAY O NUMERO DIGITADO 
let userNumbers = []

// VARIAVEL QUE CONTABILIZA O NUMERO DE TENTATIVAS
let attempts = 0

// VARIAVEL QUE LIMITA O NUMERO DE TENTATIVAS
let maxguesses = 10 


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

// LOGICA PARA LIMITAR O NUMERO DE TENTATIVAS
    if (attempts < maxguesses) {
       // CRIANDO A LOGICA PARA O COMPUTADOR ESCOLHER NUMERO, E DAR DICAS DE APROXIMAÇAO DO NUMERO ESCOLHIDO PELO COMUTADOR
    if(userNumber > computerNumber) {
        // logica que da dida de aproximação do numero
     document.getElementById('textOutput').innerHTML = 'Seu Numero é maior'

       // logica para apagar no numero  digitado quando for o errado
     document.getElementById('inputBox').value = ''

     // logica par contabilizar as tentativas
     attempts ++
     document.getElementById('attempts').innerHTML = attempts

    }
    else if(userNumber < computerNumber) {        
     document.getElementById('textOutput').innerHTML = 'Seu Numero é menor'

     document.getElementById('inputBox').value = ''

     attempts ++
     document.getElementById('attempts').innerHTML = attempts
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Você acertou!!!!!!'

        attempts ++
        document.getElementById('attempts').innerHTML = attempts
    }

  }
        // LOGICA PARA INFORMAR QUE VOCÊ PERDEU E REVELAR O NUMERO OCULTO
    else {
        document.getElementById('textOutput').innerHTML ='Ahhh!!! Você Perdeu. O número Oculto era:' + computerNumber
    }
}