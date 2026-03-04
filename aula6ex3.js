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





// Personagens

const personagensArcane = ["Singed", "Vi", "Caitlyn", "Jinx", "Warwick", "Isha", "Silco", "Ekko"]
const gostopublico = [65, 85, 80, 100, 75, 70, 95, 90]

function mostrarPersonagens(){
    let indice = 0 
    while(indice < personagensArcane.length){
        console.log(personagensArcane[indice] + "-- Nota dos personagens pelo público" + [gostopublico])
    }
}


mostrarPersonagens()