// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>RxJS Playground</h1>`;

import { Observable } from 'rxjs';

const observer = {
  next: value => console.log('next', value),
  error: error => console.log('error', error),
  complete: () => console.log('complete')
};

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
  subscriber.next('This will not be log');
});

observable.subscribe(observer);
