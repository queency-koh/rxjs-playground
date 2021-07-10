// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>RxJS Playground</h1>`;

import { fromEvent } from 'rxjs';

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete!')
};

/*
 *  Create streams from events, given target and event name.
 */
const source$ = fromEvent(document, 'click');

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
  console.log('unsubscribing');
  subOne.unsubscribe();
}, 3000);
