import { fromEvent, interval, map, mergeMap, Observable, of, take, takeUntil } from "rxjs";

const letras$: Observable<any> = of("a", "b", "c");

letras$.pipe(
  mergeMap((letra) => interval(1000).pipe(
    map( i => letra + i),
    take(3)

  ))
)
// .subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("Completado"),
//   error: (error) => console.error(error),
// });

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseUp$)
  ))
)
.subscribe(console.log);


// ==================================================================================
