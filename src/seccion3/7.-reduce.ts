import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const numerosObservable$ = of(1, 2, 3, 4, 5);

numerosObservable$.pipe(
    reduce((acumulador, valorActual) => acumulador + valorActual, 0)
  )
  .subscribe(resultado => console.log('La suma es:', resultado));

// Output:
// La suma es: 15