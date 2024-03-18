import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// Observable que emite eventos de teclado (cada vez que se presiona una tecla)
const tecladoObservable = fromEvent(document, 'keydown');

// Utilizando el operador mapTo para transformar cada evento en un mensaje
tecladoObservable.pipe(
  mapTo('Tecla presionada') // Transforma cada evento en el mensaje 'Tecla presionada'
).subscribe(mensaje => console.log(mensaje));