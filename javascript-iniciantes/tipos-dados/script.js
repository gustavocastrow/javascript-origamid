//7 tipos de dados

//Todos sao primitivos exceto os objetos

var nome = 'Andre' //String
var idade = 28; //Number
var possuiFaculdade = true; //Boolean
var time; //undefined
var comida = null; //null
var simbolo = Symbol() //symbol
var novoObjeto = {}//Object

console.log('teste');

var meuNome = 'Gustavo'
console.log(typeof meuNome);
console.log(typeof comida);
console.log(typeof time);

//Podemos somar uma string com outra
var sobrenome = 'Castro';
var nomeCompleto = meuNome + sobrenome;
console.log(nomeCompleto);


//Exercicios
//1. Declare uma variavel contendo uma string
var carro = 'Civic SI';

//2. Declare uma variavel contendo um numero dentro de uma string
var ano = '2011';

//3. Declare uma varivel com sua idade
var minhaIdade = 25;

//4. Declare outra variavel, uma com seu nome e outra com seu sobrenome e some as mesmas
var primeiroNome = 'Gustavo';
var segundoNome = 'Castro';
console.log(`Meu nome e: ${primeiroNome} ${segundoNome}`)

//5. Coloque a seguinte frase dentro de uma variavel
//It's time!
var frase = `It's time!`;
console.log(frase);

//6. Verifique o tipo da variavel que contem seu nome
console.log(typeof primeiroNome);
console.log(typeof segundoNome);

