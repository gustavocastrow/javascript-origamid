var x = 5;
var y = 10;

x += 10 //15;
y -= 10 //0;


//Operador ternario: Abreviacao de condicionais com IF e ELSE

var idade = 19;
var possuiDiabetes = true;
var podeBeber = (idade >= 18 && possuiDiabetes) ? 'Pode Beber' : 'Nao pode Beber';

//(condicao) ? TRUE : FALSE

//Some 500 ao valor de scroll abaixo atribuindo um novo valor
var scroll = 1000;
scroll += 500;
console.log(scroll);

//Atribua true para a variavel darCredito caso o cliente
// possua carrro e casa, e False caso contrario

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Dar credito' : 'Negar Credito'