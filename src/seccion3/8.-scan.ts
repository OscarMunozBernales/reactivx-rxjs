import { interval } from 'rxjs';
import { scan, take, tap } from 'rxjs/operators';

const numerosObservable = interval(1000);

numerosObservable
  .pipe(
    take(5),
    tap( value => console.log('Valor interval:', value)),
    scan((acumulador, valorActual) => acumulador + valorActual, 0)
  )
  .subscribe(resultadoParcial => console.log('La suma parcial es:', resultadoParcial));

// Output:
// La suma parcial es: 0
// La suma parcial es: 1
// La suma parcial es: 3
// La suma parcial es: 6
// La suma parcial es: 10