//Tudo e objeto, strings, numero e booleans

var nome = 'Gustavo';
var nomeMinusculo = nome.toLocaleLowerCase();
var nomeMaisculo = nome.toUpperCase();

var btn = document.querySelector('.btn');

//Nomeie 3 propriedades ou metodos de strings.

nome.toUpperCase();
nome.length;
nome.bold();

//Nomeie 5 propriedades ou metodos de elementos do DOM
var btn = document.querySelector('.btn')

btn.addEventListener();
btn.scrollLeft;
btn.scrollTo();
btn.setAttribute();
btn.toggleAttribute();


// Busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}