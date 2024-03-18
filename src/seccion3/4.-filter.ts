import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

// Observable que emite números
const numerosObservable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Utilizando el operador filter para filtrar solo los números pares
numerosObservable.pipe(
  filter(numero => numero % 2 === 0) // Filtra solo los números pares
).subscribe(numero => console.log(numero));

// Output:
// 2
// 4
// 6
// 8
// 10