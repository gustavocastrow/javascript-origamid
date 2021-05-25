//Objeto: Conjunto de variaveis e funcoes, as variaveis sao chamadas
//de propriedades e as funcoes sao os metodos.

var pessoa = {
  nome: 'Andre',
  idade: 28,
  profissao: 'Desiger',
  possuiFaculdade: true
}

pessoa.nome; //andre
pessoa.possuiFaculdade; //true


//Metodos: e uma propriedade que possui uma funcao no local
//do seu valor

var quadrado = {
  lados : 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function(lado){
    return this.lados * lado;
    //this -> faz referencia ao objeto (quadrado)
  },
}

quadrado.lados; //4
quadrado.area(5); //25
quadrado.perimetro(5); //20


//ES6 nao precisa utilizar a palavra function

var quadrado2 = {
  lados : 4,
  area(lado){
    return lado * lado
  },
  perimetro(lado){
    return this.lados * lado;
    //this -> faz referencia ao objeto (quadrado)
  },
}


//FUNCAO => METODO
//DADOS => PROPRIEDADE

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight(){
    return this.height / 2
    //THIS -> ira sempre fazer referencia ao proprio objeto
    //return menu.height / 2
  }
}

//Mudando valor de uma propriedade
menu.backgroundColor = '#000'; 

//Adicionando novos valores a um objeto
menu.color = 'blue';

//Propriedade e Herenca: O objeto sempre herda propriedades
// e metodos do objeto que foi utilizado para criar o mesmo

//O javascript por padrao ja atribiu algumas propriedades e metodos
//nativamente sem precisar cria-los, digitando nome do objeto + .
//temos acessos as propriedades e metodos nativos.

