function saldoVitorias(vitorias, derrotas){
	return vitorias - derrotas;
}

let vitorias = 81;
let derrotas = 2;

let resultados = saldoVitorias(vitorias, derrotas);
let nivel = "";


if (vitorias < 10){
	nivel = "Ferro";
} else if (vitorias <= 20){
	nivel = "Bronze";
} else if (vitorias <= 50){
	nivel = "Prata";
} else if (vitorias <= 80){
	nivel = "Ouro";
} else if (vitorias <= 90){
	nivel = "Diamante";
} else if (vitorias <= 100){
	nivel = "Lendário";
} else {
	nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + resultados + " está no nível " + nivel)