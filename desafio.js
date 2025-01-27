let vitorias = 7; 
let derrotas = 2; 
let heroi = "Carlos";
let resultado = rankear (vitorias, derrotas)

let ranking;
if (resultado <= 10){ 
	ranking = "Ferro";
} else if (resultado <= 20){ 
	ranking = "Bronze";
} else if (resultado <= 50){
	ranking = "Prata";
} else if (resultado <= 80){
	ranking = "Ouro";
} else if (resultado <= 90){
	ranking = "Diamante";
} else if (resultado <= 100){
	ranking = "Lendário";
} else {
	ranking = "imortal";
}	


function rankear (vitorias, derrotas){
	let diferença = vitorias - derrotas
    return diferença;
}

    
console.log("O Herói " + heroi + " tem saldo de " + resultado + " e está no nível " + ranking);     