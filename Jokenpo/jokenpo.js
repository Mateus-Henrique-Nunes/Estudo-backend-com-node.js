let play= ()=>{
    console.log(
`
0- Pedra
1- Papel
2- Tesoura\n
Escolha uma das opções acima: 
` 
)
    process.stdin.on('data', (jogada)=>{
        if(jogada != 0 && jogada != 1 && jogada!= 2){console.log('Digite um número válido'), process.exit()}  
        let jogadas=['Pedra', 'Papel', 'Tesoura']
        let computer= Math.floor(Math.random()*jogadas.length)
        console.log('O computador jogou: '+ jogadas[computer])
        console.log ('E vc jogou: '+jogadas[parseInt(jogada)])
        
/*Logica para definir o resultado*/
      
    if(jogada== 0 && computer==1){console.log('Vc perdeu'), process.exit() }    
    else if(jogada== 1 && computer== 2){console.log('Vc perdeu'), process.exit()}
    else if(jogada== 2 && computer== 0){console.log('VC perdeu'), process.exit()}
    else if(jogada== computer ){console.log('Empate'), process.exit()}
    else{console.log('Vc ganhou'),process.exit()}
    })
}

play()