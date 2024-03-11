import { asyncScheduler } from 'rxjs';

const tarea = () => console.log('Hola Mundo!');
const saludar = ( nombre ) => console.log(`Hola ${nombre}!`);

// Programar la tarea para que se ejecute después de 2 segundos
// const subscription = asyncScheduler.schedule(tarea, 2000);
const subscription = asyncScheduler.schedule(saludar, 2000, 'Oscar');

// Puedes cancelar la tarea llamando al método unsubscribe
setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribe');
}, 2500);