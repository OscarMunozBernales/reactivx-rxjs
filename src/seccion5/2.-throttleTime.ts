import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

// Creamos un observable a partir de eventos de entrada de un elemento de entrada de texto
const input = document.createElement('input');
document.body.append(input);
const inputObservable$ = fromEvent(input, 'keyup');

// Aplicamos debounceTime para esperar 300ms antes de emitir el último valor
inputObservable$.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing: true 
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
).
subscribe( console.log );