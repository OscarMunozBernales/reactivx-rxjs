import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subs => {
    const intervalId = setInterval(() => {
        subs.next(Math.random());
    }, 2000);

    return () => {
        clearInterval(intervalId);
        console.log('Intervalo destruido');
    }
});

/**
 * 1.- Casteo múltiple: Muchas subscripciones estan sujetas a un mismo observable
 * 2.- También es un observer: Se puede manejar como un observer
 * 3.- Next, error y complete
 */
const subject$ = new Subject();
const subs = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subs.unsubscribe();
}, 3500);
