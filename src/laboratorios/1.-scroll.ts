//Laboratorio

import { fromEvent, map, tap } from "rxjs";

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut quam nec augue aliquet laoreet non ut ex. Etiam mattis ultrices arcu eu viverra. Praesent eu tellus ut dui tincidunt blandit. Praesent egestas eu tellus vel volutpat. Donec at tortor volutpat, ornare tellus a, viverra lacus. Suspendisse commodo nulla orci, non condimentum felis eleifend nec. Sed fermentum, purus id euismod pellentesque, augue dolor congue tortor, vel lacinia nisl orci nec purus. Nullam facilisis, odio placerat varius ullamcorper, lectus libero sagittis augue, sit amet tincidunt lacus tellus auctor sapien. Nam malesuada at dui vel tempus. Aenean ornare id nisl at sagittis. Curabitur ante mi, pulvinar nec gravida sed, tincidunt ac justo. Ut eu lacus vel nibh scelerisque dapibus sed sit amet ipsum. Nam a enim non augue placerat molestie.
<br><br>
Phasellus mattis tortor est, elementum iaculis urna mollis a. Donec venenatis elementum arcu, vitae laoreet magna luctus sit amet. Ut ipsum nibh, aliquam sed arcu ac, auctor tempor neque. Nam in odio eu augue dignissim vulputate et at massa. Nulla ullamcorper vehicula libero eget scelerisque. Nulla et turpis tellus. Sed leo nisi, pulvinar fermentum lorem ac, consectetur malesuada orci. Integer porttitor enim eget lacus placerat rutrum. Vestibulum fermentum iaculis nulla, a efficitur nunc euismod ac. Donec consequat libero et tortor interdum, eu ultrices justo viverra. Vestibulum tempor sem vitae orci molestie, vitae feugiat mauris dignissim. Nam enim lectus, ornare sit amet tincidunt quis, finibus sed ante. Nunc posuere imperdiet massa sagittis vulputate.
<br><br>
Donec et tempor tellus. Maecenas tincidunt nisl quis bibendum hendrerit. Etiam rhoncus dolor vitae nunc convallis viverra. Suspendisse potenti. Integer vitae vehicula nibh, ac volutpat elit. Curabitur pharetra posuere erat. Curabitur ornare faucibus ex id aliquam. Phasellus viverra lacus nec dolor malesuada, a blandit tortor convallis. Maecenas eleifend rhoncus enim, ut mollis nulla consectetur vitae. Nam aliquam sed turpis quis iaculis. Phasellus nibh ligula, congue non lacus in, viverra eleifend nulla. Cras mattis, nunc at sagittis ultricies, nibh tortor condimentum ipsum, et tristique dolor leo vel libero.
<br><br>
Praesent elementum ac urna ut pellentesque. Aliquam tempor eros eget pellentesque efficitur. Mauris rutrum lectus sed nunc euismod aliquam. Cras malesuada gravida sodales. Proin euismod neque sed orci semper suscipit. Etiam hendrerit magna sem, sed vulputate ligula laoreet at. Ut cursus, purus sed pulvinar congue, dui quam vestibulum massa, id finibus quam velit eu purus. Donec tempor sit amet arcu nec tempor.
<br><br>
Donec cursus erat ante, vitae mollis diam egestas quis. Nunc quam ante, euismod eu bibendum eu, commodo sit amet arcu. Sed nec gravida lacus, nec elementum mauris. Nulla facilisi. Vivamus tristique massa a euismod laoreet. Vivamus finibus semper tempor. Curabitur blandit nisi bibendum est tempus, nec fermentum magna pellentesque. In vulputate sagittis sapien, eget commodo purus finibus non. Sed interdum magna ac elit tincidunt, in maximus arcu blandit. Aliquam metus ante, tempus non laoreet sit amet, varius ac nunc. In sollicitudin erat in orci rhoncus tincidunt. Duis viverra felis massa. Aliquam eu lobortis erat. Ut ultricies magna sapien, ac porttitor ipsum tincidunt at.
`;

const body = document.querySelector('body');
body.appendChild(text);

const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
body.appendChild(progressBar);

const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent( document, 'scroll' );
const progress$ = scroll$.pipe(
  map( event => calcularPorcentajeScroll(event) ),
  tap( console.log )
);

progress$.subscribe( porcentaje => {
  progressBar.style.width = `${porcentaje}%`;
});