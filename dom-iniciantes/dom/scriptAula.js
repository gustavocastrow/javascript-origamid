//DOM: Document Object Model, É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível 
//manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
//window objeto global do browser
//possui diferentes metodos e propriedades

window.innerHeight; //Propriedade
window.isFinite(); //Metodo

//No console, sempre que tiver f na frente e um metodo

console.log(window.location.href);

//window e o objeto global, por isso nao precisamos chamar
//ele na frente dos seus metodos e propriedades

const h1selecionado = document.querySelector('h1');
console.log(h1selecionado);


//Toda tag html e representada pelo objeto Element, e por isso
//herda os seus metodos e propriedades, Element e um tipo
//de objeto Node.


//Ex: Element sera substituido por "h1selecionado" 

const retornaTexto = h1selecionado.innerText; //retorna o texto;
const retornaClasee = h1selecionado.classList; //retorna a classe;
const retornaId = h1selecionado.id; //retorna o ID
const retornaAltura = h1selecionado.offsetHeight; //retorna a altura do elemento


console.log(retornaTexto);
console.log(retornaClasee);
console.log(retornaId);
console.log(retornaAltura);

//h1selecionado.addEventListener('click', callback);
//'Click' evento que vai ocorrer nele
//Ativa a funcao callback ao click no titulo

function callbackh1(){
  console.log(`Clicou em ${h1selecionado}`)
}

h1selecionado.addEventListener('click',callbackh1)