import { Action, createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const updateValue = createAction(
  '[Counter Component] updateValue',
  props<{ payload: { minmessage: number } }>()
);

export const addToCart = createAction(
  // action's type
  '[Counter Component] Add to cart',
  // optional payload
  props<{ sku: string }>()
);
export const removeFromCart = createAction(
  '[Counter Component] Remove from cart',
  props<{ sku: string }>()
);
