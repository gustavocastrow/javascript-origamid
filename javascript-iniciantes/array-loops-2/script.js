//Crie um array com os anos que o brasil ganhou a copa

var copas = ['1959', '1962', '1970', '1994', '2002']

//Iteraja com a array utilizando um loop, para mostrar
//no console a seguinte mensagem:
//'O brasil ganhou a copa de: '

console.log('Utilizando FOREACH')
copas.forEach(function(copa){
  console.log(`O brasil ganhou a copa de ${copas}`)
});

console.log('Utilizando FOR IN')
for(copa of copas){
  console.log(`O brasil ganhou a copa de ${copas}`)
}

console.log('Utilizando a forma antiga')
for(var i = 0; i < copas.length; i++){
  console.log(`O brasil ganhou a copa de ${copas[i]}`)
}

//Iteraja com um loop nas frutas abaixo e pare em Pera

var frutas = ['Banana', 'Maca', 'Pera', 'Uva', 'Melancia']

console.log('Utilizando For')
for(fruta of frutas){
  console.log(fruta)
  if(fruta === 'Pera'){
    break;
  }
}

//Coloque a ultima fruta do array acima em uma variavel 
//sem remover a mesma do array.


var ultimaFruta = frutas[frutas.length -1];
console.log(ultimaFruta);

