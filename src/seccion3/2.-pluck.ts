import { Observer, from, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const observe: Observer<any> = {
    next: value => console.log(`Next: ${value}`),
    error: error => console.error(`Error: ${error}`),
    complete: () => console.log('Complete')
}

// Observable que emite objetos con información sobre personas y sus libros favoritos
const personasObservable = from([
    { nombre: 'Ana', libroFavorito: { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry' } },
    { nombre: 'Carlos', libroFavorito: { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' } },
    { nombre: 'Elena', libroFavorito: { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' } }
  ]);
  
  // Utilizando el operador pluck para extraer solo el título del libro favorito de cada persona
  personasObservable.pipe(
    pluck('libroFavorito', 'titulo')
  ).subscribe(observe);
  
  // Output:
  // El Principito
  // Don Quijote de la Mancha
  // Cien años de soledad