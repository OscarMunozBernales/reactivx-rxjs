import { debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector('body');
const textInpu = document.createElement('input');
const orderList = document.createElement('ol');
body.appendChild(textInpu);

// Streams 
const input$ = fromEvent<KeyboardEvent>(textInpu, 'input');

input$.pipe(
  debounceTime(500),
  map(event => {
    const user = event.target['value'];
    return ajax.getJSON(`https://api.github.com/search/users?q=${ user }`);
  }),
  mergeAll(),
  map( UserGitHub => UserGitHub['items'] )
).subscribe({
  next: (response) => console.log(response)
}); // { target: input, type: 'input', ... }