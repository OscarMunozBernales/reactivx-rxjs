//Observer y subscriber

import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
}

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    const a = undefined;
    a.nombre = 'Oscar';

    subs.next('!');
    subs.complete();
});

obs$.subscribe(observer);