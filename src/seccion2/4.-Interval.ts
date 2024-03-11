import { Observer, interval } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

const interval$ = interval(1000);

console.log('Inicio');
interval$.subscribe(observer); 
console.log('Fin');