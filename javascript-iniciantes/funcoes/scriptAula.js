function areaQuadrado(lado){
  return lado * lado
}

console.log(areaQuadrado(10));

function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc
}

console.log(imc(85, 1.80));
console.log(imc(90, 1,96));

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Voce gosta do ceu azul'
  } else if (cor === 'verde'){
    return 'Voce gosta de mato'
  }else {
    return 'Voce nao gosta de nada'
  }
}

addEventListener('click', function(){
  console.log('Clicou')
});


//Funcao pode ou nao retornar um valor
//Quando nao definios o return, ela ira retornar undefined.
//O codigo interno da funcao e executado normalmente, independente de existir valor de return ou nao

function imc2(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.9);

function terceiraIdade(idade){
  if (typeof idade !== 'number'){
    return 'Informe a sua idade'
  }else if (idade >= 60){
    return 'Terceira idade'
  }else {
    return 'Nao eh terceira idade' 
  }
}

function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

