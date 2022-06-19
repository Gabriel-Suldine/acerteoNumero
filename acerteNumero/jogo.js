/*  Nesse jogo o usuário possui 10 chances de acertar o número,
obtendo palpites do valor a cada erro*/

let read = require('readline-sync')
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpiteUsuario = 0
let totalPalpites = []

for(let i=1;i<=5;i++){// indice desse contador iniciando em 1
    palpiteUsuario = read.questionInt("digite um valor")
    totalPalpites = palpiteUsuario
    if(palpiteUsuario === numeroAleatorio){
        console.log("PARABENS, VOCE ACERTOU, o numero era", numeroAleatorio )
        break        
    }   
        console.log("Palpite",i,": ",palpiteUsuario)
    if(palpiteUsuario > numeroAleatorio){
        console.log("Numero alto")
        }
    else{
            console.log("Numero baixo")
        }
     
    
  
   }
if(numeroAleatorio != palpiteUsuario )
{  console.log("FIM DO JOGO!! o Número era ",numeroAleatorio)}



    