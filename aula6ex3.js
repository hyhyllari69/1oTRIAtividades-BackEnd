/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
let personagens = ["Singed", "Jinx",  "Vi", "Warwick", "Caitlyn", "Isha", "Silco", "Ekko"]
let notas = [ 65  ,      100   ,           85       ,         75   ,                 80     ,       70   ,         95   ,              90  ]
function mostrarPersonagens(){
    contador = 0
while(contador < personagens.length){
    console.log(personagens[contador] + "- Nota - " + notas[contador])
    contador++
    }
    console.log("---------------------------------")
}
mostrarPersonagens()

function addPersonagens(nome, nota){
    personagens.push(nome)
    notas.push(nota)
}
addPersonagens("Jayce", 70)


mostrarPersonagens()

function removerPersonagens(indice){
    personagens.splice(indice,1) 
    notas.splice(indice,1)
  
}
removerPersonagens(2)

mostrarPersonagens()
