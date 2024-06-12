//Calculadora de Partidas Rankeadas
let vitorias = 25
let derrotas = 5
let nivel = ""

partidas()

function partidas(){
    let total = (vitorias - derrotas)
    
    if(total <= 10){
    nivel = "Ferro"

    }else if((total >= 11) && (total <= 20)){
    nivel = "Bronze"

    }else if((total >= 21) && (total <= 50)){
    nivel = "Prata"

    }else if((total >= 51) && (total <= 80)){
    nivel = "Ouro"

    }else if((total >= 81) && (total <= 90)){
    nivel = "Diamante"

    }else if((total >= 91) && (total <= 100)){
    nivel = "Lendário"

    }else{
    nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + total + " vitórias e está no nível " + nivel + " !")
}


   