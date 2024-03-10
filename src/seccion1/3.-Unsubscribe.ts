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
const subs3 = intervalo$.subscribe(observer);

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Completado timeout');
}, 10000);