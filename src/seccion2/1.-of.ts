import { Observer, of } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

// const observable$ = of(1,2,3,4,5,6,7,8,9,10);
//const observable$ = of<number>(1,2,3,4,5,6,7,8,9,10);
const observable$ = of(1,2,true, 'Hola mundo!', () => {}, Promise.resolve(true));

const subs = observable$.subscribe(observer);
