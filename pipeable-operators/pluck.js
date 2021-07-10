import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const keycodeWithPluck$ = keyup$.pipe(pluck('code'));

keycodeWithPluck$.subscribe(console.log);
