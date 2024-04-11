import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';

// Emite un valor cada segundo
const source$ = interval(1000);

// Emite un valor cuando se hace clic en el documento
const trigger$ = fromEvent(document, 'click');

// Muestra el último valor del flujo de datos principal cuando se hace clic
const example = source$.pipe(sample(trigger$));

example.subscribe(console.log);