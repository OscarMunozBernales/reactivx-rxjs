import { fromEvent, interval, takeUntil } from "rxjs";

const botton = document.createElement('button');
botton.innerHTML = 'Detener Timer';

document.querySelector('body').append(botton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(botton, 'click');

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
});