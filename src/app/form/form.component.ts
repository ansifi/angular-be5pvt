import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState, ResetAction, SetValueAction } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { FormValue, INITIAL_STATE, SetSubmittedValueAction, State } from './form.reducer';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormComponent {
  //@Input() formState: FormGroupState<MyFormValue>;

  // formState$: Observable<FormGroupState<MyFormValue>>;

  // constructor(store: Store<any>) {
  //   this.formState$ = store.select(state => state.form);
  // }

  formState$: Observable<FormGroupState<FormValue>>;
  submittedValue$: Observable<FormValue | undefined>;

  constructor(private store: Store<State>) {
    this.formState$ = store.pipe(select(s => s.simpleForm.formState));
    this.submittedValue$ = store.pipe(select(s => s.simpleForm.submittedValue));
  }

  reset() {
    this.store.dispatch(new SetValueAction(INITIAL_STATE.id, INITIAL_STATE.value));
    this.store.dispatch(new ResetAction(INITIAL_STATE.id));
  }

  submit() {
    this.formState$.pipe(
      take(1),
      map(fs => new SetSubmittedValueAction(fs.value)),
    ).subscribe(this.store);
  }
}
