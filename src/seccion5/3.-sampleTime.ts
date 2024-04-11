import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$.pipe(
  map(({ x, y }) => ({ x, y })),
  sampleTime(2000)
)
.subscribe({
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete"),
});