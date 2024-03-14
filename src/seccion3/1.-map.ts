import { Observer, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observe: Observer<number> = {
    next: value => console.log(`Next: ${value}`),
    error: error => console.error(`Error: ${error}`),
    complete: () => console.log('Complete')
}


// Crear un Observable que emite números
const source$ = of(1, 2, 3, 4, 5);

// Utilizar el operador map para transformar los valores emitidos por el Observable
const example$ = source$.pipe(
    map(value => value * 10)
);

// Suscribirse al Observable y registrar los valores emitidos
example$.subscribe(observe);

// Salida: 10, 20, 30, 40, 50