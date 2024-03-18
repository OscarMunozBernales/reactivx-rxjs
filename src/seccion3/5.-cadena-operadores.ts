import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Observable que emite números del 1 al 10
const numerosObservable = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Definimos una cadena de operadores dentro de un pipe
numerosObservable.pipe(
  map(numero => numero * 2), // Operador map para multiplicar cada número por 2
  filter(numero => numero % 4 === 0) // Operador filter para filtrar solo los números divisibles por 4
).subscribe(numero => console.log('Número final:', numero)); // Suscribimos al resultado final

// Output:
// Antes de map: 1
// Antes de map: 2
// Antes de map: 3
// Antes de map: 4
// Número final: 8
// Antes de map: 5
// Antes de map: 6
// Antes de map: 7
// Antes de map: 8
// Número final: 16
// Antes de map: 9
// Antes de map: 10
// Número final: 20