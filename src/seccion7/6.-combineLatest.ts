import { interval, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

// Creamos dos Observables que emiten datos de temperatura y humedad
const temperature$ = interval(1000).pipe(map(i => `Temperatura: ${20 + i}°C`));
const humidity$ = interval(1500).pipe(map(i => `Humedad: ${60 + i}%`));

// Usamos combineLatest para combinar las emisiones más recientes de ambos Observables
const example$ = combineLatest([temperature$, humidity$]);

example$.subscribe(values => {
  console.log(values);
  // Aquí podrías actualizar la vista con los datos combinados de temperatura y humedad
});