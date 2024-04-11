import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

interface Dbs {
  nombre: string;
  raza: string;
}
const personajes: Dbs[] = [
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Vegeta', raza: 'Saiyan' },
  { nombre: 'Vegeta', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Piccolo', raza: 'Namekian' },
  { nombre: 'Vegeta', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Piccolo', raza: 'Namekian' },
  { nombre: 'Vegeta', raza: 'Saiyan' },
  { nombre: 'Goku', raza: 'Saiyan' },
  { nombre: 'Piccolo', raza: 'Namekian' }
];

from(personajes).pipe(
  distinctUntilChanged((prev, curr) => prev.nombre === curr.nombre)
).subscribe(
  value => console.log(value)
);
