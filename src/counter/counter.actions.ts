import { Action, createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

export const update = createAction(
  '[Counter Component] Update value',
  (value = 0) => ({ payload: { value } })
);

export const updateValue = createAction(
  '[Counter Component] Update value',
  (value = 0) => ({ payload: { value } })
);
