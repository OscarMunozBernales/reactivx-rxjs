import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const botton = document.createElement('button');
botton.innerHTML = 'Detener Timer';

document.querySelector('body').append(botton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(botton, 'click').pipe(
  tap(() => console.log("Tap antes del skip")),
  skip(1),
  tap(() => console.log("Tap despues del skip")),
);

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
});