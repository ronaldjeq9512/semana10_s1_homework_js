const element = document.getElementById('title');
console.log(element.textContent); // Salida: Título

const elementWithQuerySelector = document.querySelector('.welcome');
console.log(elementWithQuerySelector.textContent); // Salida: Bienvenido a

const elementsWithQuertSelectorAll = document.querySelectorAll('p.welcome');
elementsWithQuertSelectorAll.forEach(element => console.log(element.textContent)); 
// Salida:
// Bienvenido a
// Welcome to

const elementToAddText = document.querySelector('li #contact')
console.log(elementToAddText)
elementToAddText.textContent = 'Contacto';
console.log(elementToAddText.textContent); // Salida: Contacto

const elementToAddHtml = document.getElementById('title');
elementToAddHtml.innerHTML = '<p>Nuevo contenido HTML</p>';
console.log(element.innerHTML); // Salida: <p>Nuevo contenido HTML</p>

const elementToAddCss = document.getElementById('title');
elementToAddCss.style.color = 'green';
console.log(element.style.color); // Salida: green

const elementToAddClasses = document.getElementById('title');
elementToAddClasses.classList.add('newClass', 'greenTitle');
console.log(elementToAddClasses.classList); // Salida: ["newClass" , "greenTitle"]

const elementToRemoveClasses = document.getElementById('title');
elementToRemoveClasses.classList.remove('newClass');
console.log(elementToRemoveClasses.classList); // Salida: ['greenTitle']

const elementToGetParent = document.getElementById('contact');
const parent = elementToGetParent.parentElement;
console.log(parent.id); // Salida: contactReference


const elementToGetNextSibling = document.querySelector('.welcome');
const nextSibling = elementToGetNextSibling.nextElementSibling;
console.log(nextSibling.textContent); // Salida: Welcome to

const elementToGetChildren = document.getElementById('navigation');
const children = elementToGetChildren.children;
for (let i = 0; i < children.length; i++) {
  console.log(children[i].textContent); 
}
// Salida:
// about
// resume
// Contacto

const newElement = document.createElement('div');
newElement.textContent = 'Este es un nuevo elemento';
document.body.appendChild(newElement);
console.log(newElement.textContent); // Salida: Este es un nuevo elemento


