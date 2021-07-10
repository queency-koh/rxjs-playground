import { of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(map(value => value * 10))
  .subscribe(console.log);

const keyup$ = fromEvent(document, 'keyup');
const keycode$ = keyup$.pipe(map(event => event.code));

keycode$.subscribe(console.log);
