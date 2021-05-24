//1.Verifique se sua idade e maior do que a de algum parente
//dependendo do resultado coloque no console 'Maior' - 'Igual' - 'Menor'

var minhaIdade = 21;
var parenteIdade = 22;

if (minhaIdade > parenteIdade){
  console.log('MAIOR')
}else if (minhaIdade < parenteIdade){
  console.log('MENOR')
} else {
  console.log('IGUAL')
}

//2. Qual sera o valor retornado na seguinte expressao?
var expresso = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expresso)

//3. Verifique se as seguintes variaveis sao True or False
var nome = 'Andre'; //true
console.log(!!nome)
var idade = 28; //true
console.log(!!idade)
var possuiDoutorado = false; //false
console.log(!!possuiDoutorado)
var empregoFuturo; //false
console.log(!!empregoFuturo)
var dinheiroConta = 0; //false
console.log(!!dinheiroConta)

//4. Compare o total de habitantes no Brasil com China(valor em Mi)
var china = 207;
var brasil = 1340;



//O que ira aparecer no console?
if(('Gato' === 'gato') && (5-2)){
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

console.log(!!nome)