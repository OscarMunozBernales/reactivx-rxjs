import { Observer, fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const fromEvent$ = fromEvent<MouseEvent>(document, 'click');

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Complete')
}

fromEvent$.pipe(
    tap<MouseEvent>(console.log),
    map(({ clientX, clientY }) => ({ x: clientX, y: clientY })),
    first( event => event.x > 150 )
).subscribe(observer);