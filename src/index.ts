import { Observer, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const observe: Observer<any> = {
    next: value => console.log(`Next: ${value}`),
    error: error => console.error(`Error: ${error}`),
    complete: () => console.log('Complete')
}

// Crear un Observable que emite eventos de teclado
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

// Utilizar el operador map para transformar los valores emitidos por el Observable
const codeKey$ = keyUp$.pipe(
    map(event => event.code)
);

// Suscribirse al Observable y registrar los valores emitidos
codeKey$.subscribe(observe);