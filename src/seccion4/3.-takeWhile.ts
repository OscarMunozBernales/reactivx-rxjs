import { Observer, of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5, 6);

const observer: Observer<any> = {
  next: value => console.log(value), // Solo imprimirá 1, 2 y 3
  error: error => console.error(error),
  complete: () => console.log('Complete')
};

numbers.pipe(
  takeWhile(x => x <= 3)
).subscribe(observer);