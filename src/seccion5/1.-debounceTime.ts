import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

// Creamos un observable a partir de eventos de entrada de un elemento de entrada de texto
const input = document.createElement('input');
document.body.append(input);
const inputObservable$ = fromEvent(input, 'keyup');

// Aplicamos debounceTime para esperar 300ms antes de emitir el último valor
inputObservable$.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  distinctUntilChanged()
).
subscribe( console.log );