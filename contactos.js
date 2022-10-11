// Author: Pedro Sanchez

const contactos = [
    "Pedro Sanchez Amaro",
    "Angelina Sanchez",
    "Mario Jimenez",
    "Nicole Sanchez"
]

const borrarElemento = (lista, nombre) => {
    let pos = lista.indexOf(nombre);
  if (pos > -1) {
    lista.splice(pos, 1)
  }
}

const adicinaElemento = (lista, nombre) => {
    lista.push(nombre);
}

const displayElements = (lista) => {
  for (i=0; i<lista.length; i++) {
    console.log(`${i+1}: ${lista[i]}`);
  }
  console.log(`\n`);
}

displayElements(contactos);
borrarElemento(contactos, "Mario Jimenez");
displayElements(contactos);
adicinaElemento(contactos,"Celeste Sanchez");
displayElements(contactos);


