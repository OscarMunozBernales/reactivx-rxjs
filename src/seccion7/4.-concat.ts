import { of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';

// Simulamos dos llamadas a API con retrasos
const apiCall1$ = of('Respuesta de API 1').pipe(delay(2000));
const apiCall2$ = of('Respuesta de API 2').pipe(delay(1000));

// Usamos concat para asegurarnos de que la segunda llamada ocurra solo después de que la primera complete
const example$ = concat(apiCall1$, apiCall2$);

example$.subscribe(value => {
  console.log(value);
});
