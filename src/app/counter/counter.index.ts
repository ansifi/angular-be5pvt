import { ActionReducerMap } from '@ngrx/store';

import { CounterState } from './counter.state';
import { counterReducer } from './counter.reducer';

export interface State {
  counter: CounterState
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
}