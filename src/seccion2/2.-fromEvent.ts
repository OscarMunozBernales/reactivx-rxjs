import { Observer, fromEvent } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<MouseEvent>(document, 'keyup');

src1$.subscribe(observer);
src2$.subscribe(observer);