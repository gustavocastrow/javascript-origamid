//Arrays.

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS', 'PS5']

//Metodos e propriedades de arrays.
//Existem diversos outros metodos, como:
//map, reduce, forEach

//videoGames.pop(); //Remove o ultimo item da array e retorna ele
//videoGames.push(); //Adiciona um item ao final da array
videoGames.length; //Retorna o tamanho da array.

//For loop (inicio, condicao, incremento)
for (var numero = 0; numero < 10; numero++){
  console.log(numero)
}

//while loop
var i = 0;
while (i < 10){
  console.log(i)
  i++
}

for (var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
}

for (videoGame of videoGames){
  console.log(videoGame)
}

//Break: Pode ser utilizada para parar seu loop.

for(videoGame of videoGames){
  console.log(videoGame);
  if (videoGame === 'PS4'){
    break;
  }
}

for (var i = 0; i < videoGames.length; i ++){
  console.log(videoGames[i])
  if (videoGames[i] === 'Switch'){
    break;
  }
}

//ForEach -> Metodo que executa uma funcao para cada item da array,
//E uma forma mais simples de utilizarmos um loop com arrays (ou array like)

videoGames.forEach(function(item){
  console.log(item)
});


var frutas = ['Banana', 'Uva', 'Pera', 'Abacaxi', 'Morango']
frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array)
});