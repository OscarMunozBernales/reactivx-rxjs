import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

interface Dbs {
  nombre: string;
  raza: string;
}

const personajes: Dbs[] = [
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
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
  distinctUntilKeyChanged('raza')
).subscribe(
  value => console.log(value)
);

//Salida

// {nombre: 'Goku', raza: 'Saiyan'}
// {nombre: 'Piccolo', raza: 'Namekian'}
// {nombre: 'Vegeta', raza: 'Saiyan'}
// {nombre: 'Piccolo', raza: 'Namekian'}
// {nombre: 'Vegeta', raza: 'Saiyan'}
// {nombre: 'Piccolo', raza: 'Namekian'}