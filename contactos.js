// Author: Pedro Sanchez

const contactos = [
  {
    id: 0,
    nombre: "Pedro",
    apellidos: "Sanchez Amaro",
    telefono: "8098787078",
    ubicaciones: [
        {ciudad: "Medellin",
         direccion: "Calle ABC"
        },
        {ciudad: "Bogota",
         direccion: "Parque de la 93"
        }
    ]
  },
  {
        id: 1,
        nombre: "Angelina",
        apellidos: "Sanchez",
        telefono: "222222",
        ubicaciones: [
            {
                ciudad: "Medellin",
                direccion: "Calle 2022 No 11"
            },
            {
                ciudad: "Ciudad Brillante",
                direccion: "Calle Eterna Infinita"
            }
        ]
  },

]

// id is the index position
const borrarElemento = (lista, id) => {
    lista.splice(id, 1)
  }


// persona must be a json object
const adicinaElemento = (lista, persona) => {
    lista.push(nombre);
}

const displayElements = (lista) => {
  for (i=0; i<lista.length; i++) {
    console.log(`${i+1}: ${JSON.stringify(lista[i])}`);
  }
  console.log(`\n`);
}

displayElements(contactos);
borrarElemento(contactos, 0);
displayElements(contactos);



