import { merge, interval } from 'rxjs';
import { map } from 'rxjs/operators';

// Simulamos dos fuentes de datos GPS con diferentes retrasos
const gpsSource1$ = interval(1000).pipe(map(i => ({ device: 'Device 1', location: `Location ${i}` })));
const gpsSource2$ = interval(1500).pipe(map(i => ({ device: 'Device 2', location: `Location ${i}` })));

// Usamos merge para combinar las emisiones de ambas fuentes
const example$ = merge(gpsSource1$, gpsSource2$);

example$.subscribe(data => {
  console.log(data);
  // Aquí podrías actualizar la vista con los datos de GPS combinados
});
