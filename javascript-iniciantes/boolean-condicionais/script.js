var possuiGraduacao = true;
var possuiDoutorado = true; 

if (possuiGraduacao) {
  console.log('Possui graduacao')
} else if (possuiDoutorado){
  console.log('Nao possui doutorado')
} else {
  console.log('Nao possui nada.')
}


var nome = '';
if(nome){
  console.log(nome);
} else {
  console.log('Nome nao existe');
}


//Valores que retornam False
if(false);
if(0);
if(NaN);
if(null);
if(undefined);
if('');

//Valores que retornam verdadeiro
if(true);
if(1);
if(' ');
if('andre');
if(-5);
if({});

//Operador de negacao "!" ele inverte o valor de um dado
//se o valor for verdadeiro ele se torna falso e vice e versa.
//DICA: "!!" Verifica se uma expressao e verdadeira ou falsa

if(!true); //false
if(!1); //false
if(!''); //true
if(!undefined); //true
if(!!' '); //true
if(!!''); //false


if(!possuiDoutorado){
  console.log('Nao possui doutorado.')
}

//Operadores de comparacao

10 > 5 //true
5 > 10 //false
20 < 10 //false
10 <= 10 //true
10 >= 11 //false

//O '==' faz uma comparacao simples
//Ja o '===' comparada o dado e o tipo

10 == '10' //true
10 == 10 //true
10 === '10' //false
10 != 15 //true
10 != '10'//false
10 !== '10' //true