// Selecionando elementos do HTML
const main = document.querySelector('main');
const section = document.querySelector('#hero')
console.log(main);
console.log(section);

// Criando um novo elemento HTML
let titulo = document.createElement('h1')
console.log(titulo);
// Inseriu o elemento criado na section.
section.appendChild(titulo);
// Adicionando texto em um elemento
titulo.textContent = "Hellow World";
//adicionando classes ao elemento
titulo.classList.add('titulo');
// cria novo elemento
let container = document.createElement('div');
section.appendChild(container);
let counter = 0
//Monitorando eventos no navegador
titulo.addEventListener('click', (e)=>{
   //adiciona ou remove a classe
   titulo.classList.toggle('active');
   counter++;
   // recupera html dentro da div  
   let containerValue = container.innerHTML;
   //Mantem o conteudo anterior da div e concatena novo html
   container.innerHTML = containerValue + `<p>${counter} º Texto adicionado pelo evento!</p>`;
})