import { of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

// Simulamos un Observable que representa una llamada a una API
const data$ = of('Datos cargados').pipe(
  delay(2000) // Retraso para simular una operación asíncrona
);

// Emitimos el estado inicial 'Cargando...' antes de que los datos reales se emitan
const example$ = data$.pipe(
  startWith('Cargando...')
);

example$.subscribe(value => {
  console.log(value);
});
