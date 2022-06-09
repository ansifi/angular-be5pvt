import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { increment, decrement, reset, update } from '../counter.actions';

import { State } from '../counter.index';
import { count } from '../counter.selectors';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})

export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = this.store.pipe(select(count))
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  update(value: number) {
    this.store.dispatch(update(value));
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
