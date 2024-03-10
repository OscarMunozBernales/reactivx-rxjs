import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {

    let count: number = 0;
    setInterval(() => {
        count++;
        subs.next(count);
    }, 1000);
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

// Utilizando el método add para agrupar las suscripciones
subs1.add(subs2)

setTimeout(() => {
    // Al llamar a unsubscribe en subs1, también se cancelarán las suscripciones subs2 y subs3.
    subs1.unsubscribe();

    console.log('Completado timeout');
}, 10000);