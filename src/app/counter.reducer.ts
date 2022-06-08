import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, updateValue } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(updateValue, (state, { payload }) => payload.minmessage)
);

// const initialState: CounterState = { count: 0 };

// export const reducer = createReducer(
 
//   on(updateValue, (state, { payload }) => ({
//     ...state,
//     count: state + payload.minmessage
//   }))
// );

// export function counterReducer(
//   state: CounterState | undefined,
//   action: Action) {
//   return reducer(state, action);
// }
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
