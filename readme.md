# DOM

## getElements

1. getElementById
Busca y devuelve el elemento que tiene el atributo `id` especificado.

```js
const element = document.getElementById('myId');
```

2. querySelector
Devuelve el primer elemento que coincide con el selector CSS especificado.

```js
const element = document.querySelector('.myClass');
```

3. querySelectorAll
Devuelve una lista de nodos (NodeList) de todos los elementos que coinciden con el selector CSS especificado.

```js
const elements = document.querySelectorAll('div.myClass');
```

## modifiedElements
1. textContent
Establece o devuelve el contenido textual de un nodo y sus descendientes.
```js
const element = document.getElementById('myId');
element.textContent = 'Nuevo contenido';
```

2. innerHTML
Establece o devuelve el contenido HTML de un elemento.
```js
const element = document.getElementById('myId');
element.innerHTML = '<p>Nuevo contenido HTML</p>';
```

## styles 
1. style 
Accede y modifica los estilos CSS en línea de un elemento.
```js
const element = document.getElementById('myId');
element.style.color = 'red';
```

2. classList.add
Añade una o más clases al atributo class de un elemento.
```js
const element = document.getElementById('myId');
element.classList.add('newClass');
```

3. classList.remove
Elimina una o más clases del atributo class de un elemento.
```js
const element = document.getElementById('myId');
element.classList.remove('oldClass');
```

##   Dom traversing

1. parentElement
Devuelve el elemento padre del nodo actual.
```js
const element = document.getElementById('myId');
const parent = element.parentElement;
```

2. nextElementSibling
Devuelve el siguiente hermano elemento del nodo actual.
```js
const element = document.getElementById('myId');
const nextSibling = element.nextElementSibling;
```

3. children
Devuelve una colección HTML de los elementos hijos del nodo actual.
```js
const element = document.getElementById('myId');
const children = element.children;
```

## Create element

1. createElement
Crea un nuevo elemento HTML especificado por su nombre de etiqueta.
```js
const newElement = document.createElement('div');
newElement.textContent = 'Este es un nuevo elemento';
document.body.appendChild(newElement);
```
