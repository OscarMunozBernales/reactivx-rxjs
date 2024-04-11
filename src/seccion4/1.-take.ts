import { Observer, of } from 'rxjs';
import { take } from 'rxjs/operators';

const observable = of(1, 2, 3, 4, 5);
const observer: Observer<number> = {
  next: value => console.log(value),
  error: error => console.error(error),
  complete: () => console.log('Complete')
};


observable.pipe(
  take(3)
).subscribe(observer);

// Output:
// 1
// 2
// 3
// Complete