import { catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const button = document.createElement('button');

//conf
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

button.innerHTML = 'Submit';

form.append(inputEmail, inputPass, button);
document.querySelector('body').append(form);

// Helper
const peticionHttpLogin = (userPass: { email: string, password: string }) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
.pipe(
  map( resp => resp.response),
  catchError( err => of(''))
);

// Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit');
submitForm$
.pipe(
  tap( event => event.preventDefault() ),
  map( event => {
    const email = event.target[0].value;
    const password = event.target[1].value;
    return { email, password };
  }),
  // mergeMap( peticionHttpLogin ),
  // switchMap( peticionHttpLogin ),
  exhaustMap( peticionHttpLogin ),
).subscribe({
  next: (token) => {
    console.log("🚀 ~ token:", token);
  }
});