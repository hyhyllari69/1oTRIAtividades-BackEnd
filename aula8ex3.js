function criarArquivo(dados){
    const livrosJSON = JSON.stringify(dados)
    const fs = require('fs');
    fs.writeFileSync("livros.json", livrosJSON);
  }
  
  let arquivo
  function lerArquivo(){
    arquivo = require("./livros.json")
  }
  lerArquivo()
  
  function mostrarLivros(lista){
      console.log("-LIVROS-")
      lista.forEach((livro) => {
          
          console.log(livro.titulo + " - " + 
                      livro.autor + "\nAno: " + 
                      livro.ano + " \nPáginas: " +
                      livro.volumes_paginas + " \nPreço: R$ "+ 
                      livro.preco_aproximado.toFixed(2).replaceAll(".",",") + "\nSinope: "+ 
                      livro.sinopse)
          console.log("-------------------------------------------")
    })
  }
  mostrarLivros(arquivo)
  
  
  let livrosFiltrados = arquivo.filter((livro) => livro.preco_aproximado >80)
  console.log ("------- LIVROS FILTRADOS -------")
  mostrarLivros(livrosFiltrados)
  
  
  let livrosDesconto = arquivo.map((livro) => {
      return {...livro, preco: livro.preco * 0.5}
  })
  console.log ("------- LIVROS DESCONTO -------")
  mostrarLivros(livrosDesconto)