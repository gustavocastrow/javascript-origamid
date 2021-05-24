//Operadores Logicos && (E)
//&& -> Compara se uma expressao E a outra e verdadeira

true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cao'; //true
(5 - 5) && (5 + 5); //0
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true


//Se ambos valores forem true ele ira retornar o ultimo valor
//verificado. Se algum valor for false ele ira  retornar o mesmo
//e nao ira continuar a verificar os proximos.



//&& => As duas condicionais precisam ser TRUE.

if((5 - 5) && (5 + 5)){ //5-5 = 0 portanto falso
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

if((5 - 10) && (5 + 5)){
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}


//Operadores logicos  || (OU)
//Compara se uma expressao OU outra e verdadeira.

true || true //true
true || false //true
false || true //true
'Gato' || 'Cao' //Gato
(5-5) || (5+5) //10
'Gato' || false // 'Gato'
(5 >= 5) || (3 < 6) //true

//|| -> Retorna o primeiro valor TRUE que encontrar

var condicional2 = (5-5) || (5+5) || (10-2);
console.log(condicional2);


//Switch case:
//Com o switch voce pode verificar se uma variavel e igual a diferentes
// valores utilizando o case. Caso ela seja igual, voce pode fazer
// alguma coisa utilizando a palavra chave break; para cancelar
// a continuacao, o valor de default ocorrera caso nenhuma das
// anteriores seja verdadeira

var corFavorita = 'Azul';

switch (corFavorita){
  case 'Azul':
    console.log('Olhe para o ceu');
    break;
  case 'Vermelho':
    console.log('Olhe para as rosas');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
}