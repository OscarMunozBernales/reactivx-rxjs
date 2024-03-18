import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

// Observable que emite una secuencia de números
const numerosObservable = of(1, 2, 3, 4, 5);

// Utilizando el operador tap para imprimir cada número
numerosObservable.pipe(
  tap(numero => console.log('Número:', numero)) // Acción lateral para imprimir cada número
).subscribe();

// Output:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5