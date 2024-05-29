import { endWith, interval, take } from "rxjs";

const interval$ = interval(1000).pipe(take(3), endWith("Terminamos!"));
interval$.subscribe(console.log);