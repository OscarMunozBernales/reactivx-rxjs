import { Observer, timer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

//Ejecuta a penas js lo permita dentro de la cola de ejecuciones
const timer1$ = timer(0);

//Lo que hacemos con este timer es que se ejecutara a los 1000ms y luego cada 2000ms
const timer2$ = timer(1000, 2000);

// Lo que hacemos con este timer es emitir un valor en un tiempo futuro
const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer3$ = timer(hoyEn5);



console.log('Inicio');
timer1$.subscribe(observer); 
timer2$.subscribe(observer);
timer3$.subscribe(observer); 
console.log('Fin');