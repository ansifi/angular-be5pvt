import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, update, updateValue } from './counter.actions';

import { CounterState } from './counter.state';

const reducer = createReducer(
  { count: 0 },
  on(update, (state, { payload }) => {
    return {
      ...state,
      count: state.count + payload.value
    }
  }),
  on(updateValue, (state, { payload }) => {
    return {
      ...state,
      count: state.count + payload.value
    }
  })
);

export function counterReducer(
  state: CounterState | undefined,
  action: Action) {
  return reducer(state, action);
}