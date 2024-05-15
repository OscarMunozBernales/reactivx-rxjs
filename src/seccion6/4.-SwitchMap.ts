import { debounceTime, fromEvent, map, mergeAll, mergeMap, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector('body');
const textInpu = document.createElement('input');
const orderList = document.createElement('ol');
body.appendChild(textInpu);

// Streams 
const input$ = fromEvent<KeyboardEvent>(textInpu, 'input');


input$
.pipe(
  map( event => event.target['value'] ),
  switchMap( text => ajax.getJSON(`https://httpbin.org/delay/1?arg=${ text }`) ),
  // mergeMap( text => ajax.getJSON(`https://httpbin.org/delay/1?arg=${ text }`) ),
)
.subscribe(console.log);