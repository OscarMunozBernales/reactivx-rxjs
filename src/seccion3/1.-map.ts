import { Observer, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';

const observe: Observer<any> = {
    next: value => console.log(`Next: ${value}`),
    error: error => console.error(`Error: ${error}`),
    complete: () => console.log('Complete')
}


// Crear un Observable que emite números
const source$ = of(1, 2, 3, 4, 5);

// Utilizar el operador map para transformar los valores emitidos por el Observable
const example$ = source$.pipe(
    map<number, string>(value => `${value}`)
);

// Suscribirse al Observable y registrar los valores emitidos
example$.subscribe(observe);

// Salida: 10, 20, 30, 40, 50

// Crear un Observable que emite eventos de teclado
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

// Utilizar el operador map para transformar los valores emitidos por el Observable
const codeKey$ = keyUp$.pipe(
    map(event => event.code)
);

// Suscribirse al Observable y registrar los valores emitidos
codeKey$.subscribe(observe);