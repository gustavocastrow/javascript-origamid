//Crie uma funcao para verificar se um valor e Truthy

function verificaTrue(valor){
  if (!!valor){
    console.log(`O valor ${valor} e verdadeiro.`)
  } else {
    console.log(`O valor ${valor} e falso`)
  }
}

verificaTrue(10);
verificaTrue(0);

//Crie uma funcao matematica que retorne o perimetro de um quadrado
//perimetro: soma dos quatro lados do quadrado

function somaPerimetro(lado){
  return lado * 4;
}

//Crie uma funcao que verifica se um numero e par.

function verificaPar(numero){
  if (numero % 2 == 0){
    return 'PAR'
  }else {
    return 'IMPAR'
  }
}

//Crie um funcao que retorne o time de dado passado nela
function tipoDado(dado){
  return typeof(dado);
}

//addEventListener e uma funcao nativa do javascript
//o primeiro parametro e o evento que ocorre e o segundo
//o Callback, utilize essa funcao para mostrar no console
//o seu nome completo quando o evento scroll ocorrer

addEventListener('scroll', function(){
  console.log('Gustavo');
});

//Corriga o codigo abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados){
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados){
  return `Ja visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}