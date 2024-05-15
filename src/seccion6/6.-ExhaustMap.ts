import { 
    exhaustMap, 
    fromEvent, 
    interval, 
    take 
} from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

let i = 0;
click$
.pipe(
  // concatMap(() => interval$)
  exhaustMap(() => {
    console.log(`${i} Iteracion`);
    i++;
    return interval$;
  })
)
.subscribe(console.log)
