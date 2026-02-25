/* A escola adota uma recuperação para cada avaliação, 
que substitui a nota do aluno caso seja maior que 
sua nota anterior.
Dada as seguintes notas, calcule a média simples 
do aluno e diga se ele está aprovado ou reprovado, 
levando em consideração a substituição de notas. */

const av1 = 7.0;
const av2 = 5.0;
const recup1 = 4.0;
const recup2 = 10.0;
let nota1;
let nota2;
let media;

if(recup1 >= av1) {
    nota1 = recup1
} else {
    nota1 = av1
}

if(recup2 >= av2) {
    nota2 = recup2
} else {
    nota2 = av2
}


media = (nota1 + nota2) / 2 
console.log("A média do aluno é:"+ media)
if(media > 6){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}