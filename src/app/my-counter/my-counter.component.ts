import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, updateValue } from '../counter.actions';
import * as fromCounter from '../counter.reducer';

export interface State {
  counter: fromCounter.State;
}

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(
    private store: Store<State>
  ) {
   
  }

  ngOnInit() {
    this.count$ = this.store.pipe(select(state => state.counter.count));
  }
  // constructor(private store: Store<{ count: number }>) {
  //   this.count$ = //this.store.pipe(select(state => state.count));
  // }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  onClickSubmit(result) {
    console.log('Entered value is : ' + result.minmessage);
    this.store.dispatch(updateValue(result.minmessage));
  }

  reset() {
    this.store.dispatch(reset());
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
