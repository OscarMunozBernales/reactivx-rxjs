
/**
 * @description  Lo que hicimos fue crear un observable que hace una petición a la 
 * API de reqres.in para obtener un usuario específico. Además, utilizamos el 
 * operador startWith para emitir un valor inicial antes de que se complete la petición.
 * En este caso, emitimos un valor booleano true para indicar que la petición está en progreso.
 * Luego, utilizamos el método subscribe para suscribirnos al observable y manejar 
 * los valores emitidos. Cuando recibimos el valor true, agregamos un elemento de 
 * carga a la página y para terminar cuando recibimos el valor del usuario, 
 * eliminamos el elemento de carga y mostramos la información del usuario en la consola.
 */
import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

const loadingdiv = document.createElement('div');
loadingdiv.classList.add('loading');
loadingdiv.innerHTML = 'Loading...';

const body = document.querySelector('body');

// Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe({
    next: res => {
        res === true ? body.appendChild(loadingdiv) : body.removeChild(loadingdiv);
        console.log("🚀 ~ res:", res);
    }
});