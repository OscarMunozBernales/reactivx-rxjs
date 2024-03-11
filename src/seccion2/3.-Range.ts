import { Observer, range } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

const src2$ = range(-5, 10);

console.log('Inicio')
src2$.subscribe(observer);
console.log('Fin')