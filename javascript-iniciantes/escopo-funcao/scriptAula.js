//Escopo de funcao: Variveis declaradas dentro da funcao
//nao sao acessadas fora da funcao.

function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro)
}
mostrarCarro(); //Fusca no console
console.log(carro); //Erro, carro is not defined

//Declarar variaveis sem a palavra var, const e let cira uma variavel
//que pode ser acessada em qualquer escopo(global), e isso e um erro

//Escopo de bloco: Variaveis criadas com var, vazam do bloco
//Por isso com a introducao do ES6 a melhor forma de declararmos
//uma variavel e utilizando const e let, pois estas respeitam
//o escopo de bloco.

if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro

//CONST: Mantém o escopo no bloco, impede a redeclaração e impede a modificação 
//do valor da variável, evitando bugs no código.

const mes = 'Dezembro';
mes = 'Janeiro' //Erro, tentou modificar o valor de uma CONST
const semana; //Erro, declarou um CONST sem valor

const data =  {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018
};

data.dia = 29; //Funciona
data = 'Janeiro'; //Erro

//LET: Mantém o escopo no bloco, impede a redeclaração, mas permite a 
//modificação do valor da variável.

let ano;
ano = 2018;
ano ++;
console.log(ano); //2019

let ano = 2020; //Erro, variavel redeclarada.