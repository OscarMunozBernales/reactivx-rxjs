// Crear obsercables
import { Observable } from 'rxjs';

const obs$ = new Observable<string>(subs => {
  subs.next('Hola');
  subs.next('Mundo');
  subs.next('!');
  subs.complete();
});

obs$.subscribe({
    next: value => console.log('next:', value),
});