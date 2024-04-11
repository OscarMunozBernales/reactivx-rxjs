import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

// Observable que emite una secuencia de valores, algunos de los cuales son duplicados
const source = of(1, 2, 2, 3, 4, 4, 5);

// Utilizando el operador distinct para filtrar los valores duplicados
source.pipe(
  distinct()
).subscribe(
  value => console.log(value)
);

// Salida esperada: 1, 2, 3, 4, 5

//Otro ejemplo
interface Dbs {
  nombre: string;
  raza: string;
}
const personajes: Dbs[] = [
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Vegeta', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Piccolo', raza: 'Namekian' },
  { nombre: 'Vegeta', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Piccolo', raza: 'Namekian' },
  { nombre: 'Vegeta', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Piccolo', raza: 'Namekian' }
];

from(personajes).pipe(
  distinct(personaje => personaje.raza)
//   distinct(personaje => personaje.nombre)
).subscribe(
  value => console.log(value)
);


//salida 
// { nombre: 'Goku', raza: 'Saiyan' }
// { nombre: 'Vegeta', raza: 'Saiyan' }
// { nombre: 'Piccolo', raza: 'Namekian' }

//Otra salida ocupando la raza como parametro
// {nombre: 'Goku', raza: 'Saiyan'}
// {nombre: 'Piccolo', raza: 'Namekian'}
