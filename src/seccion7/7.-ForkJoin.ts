import { of, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

// Simulamos una llamada para cargar datos del usuario
const loadUserData$ = of({ userId: 1, name: 'John Doe' }).pipe(delay(1500));

// Simulamos una llamada para cargar datos de pedidos del usuario
const loadUserOrders$ = of([
  { orderId: 101, product: 'Product 1' },
  { orderId: 102, product: 'Product 2' }
]).pipe(delay(2000));

// Usamos forkJoin para esperar a que ambas llamadas completen
const example$ = forkJoin([loadUserData$, loadUserOrders$]);

example$.subscribe(([userData, userOrders]) => {
  console.log(userData);
  console.log(userOrders);
  // Aquí podrías actualizar la vista con los datos recibidos
});