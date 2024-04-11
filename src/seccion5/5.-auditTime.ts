import { interval } from 'rxjs';
import { auditTime } from 'rxjs/operators';

// Emite un valor cada segundo
const source$ = interval(1000);

// Emite el último valor cada 3 segundos
source$.pipe(auditTime(3000)).subscribe(console.log);