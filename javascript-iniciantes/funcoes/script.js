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
