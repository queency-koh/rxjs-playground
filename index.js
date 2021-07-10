// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>RxJS Playground</h1>`;

import { of, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(map(value => value * 10))
  .subscribe(console.log);

const keyup$ = fromEvent(document, 'keyup');
const keycode$ = keyup$.pipe(map(event => event.code));

const keycodeWithPluck$ = keyup$.pipe(pluck('code'));

const pressed$ = keyup$.pipe(mapTo('Key pressed'));

pressed$.subscribe(console.log);
