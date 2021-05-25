//1. Crie um objeto com os seus dados pessoas
//Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Gustavo',
  sobrenome: 'Castro'
}

//2.Crie um metodo no objeto anterior que mostre seu nome completo
dadosPessoais.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

//3. Modifique o valor da propriedade PRECO para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'audi'
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador
//preto, com 10 anos e que lata ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'Latindo...'
    } else {
      return 'Nao faz nada...'
    }

  }
}