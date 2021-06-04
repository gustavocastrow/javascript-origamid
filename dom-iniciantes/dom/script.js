// Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href;
console.log(urlPagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroAtivo = document.querySelector('.ativo');
console.log(primeiroAtivo)

const todosAtivos = document.querySelectorAll('.ativo');
console.log(todosAtivos);


// Retorne a linguagem do navegador
const linguagemNavegador = navigator.language;
console.log(linguagemNavegador)

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(larguraJanela);
