import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, updateValue } from './counter.actions';

//export const initialState = 0;

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0
};


export const counterReducer = createReducer(
  initialState,
  // on(decrement, (state) => state - 1),
  on(increment, (state)=> ({
    ...state,
    count: 1000
  })),
  on(updateValue, (state, { payload }) => ({
        ...state,
        count: 1000
      }))
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
