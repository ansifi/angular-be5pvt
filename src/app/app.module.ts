import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { FormsModule } from '@angular/forms';
import { reducers } from './counter/counter.index';
import { NgrxFormsModule } from "ngrx-forms";
import { FormComponent } from './form/form.component';
import { reducer } from "./form/form.reducer";

@NgModule({
  declarations: [AppComponent, MyCounterComponent, FormComponent],
  imports: [
    BrowserModule,
    StoreModule.forFeature('simpleForm', reducer),
    StoreModule.forRoot({ form: reducer }),
    NgrxFormsModule,
    FormsModule,
    // StoreModule.forRoot(reducers, {
    //   runtimeChecks: {
    //     strictActionImmutability: true,
    //     strictActionSerializability: true,
    //     strictStateImmutability: true,
    //     strictStateSerializability: true
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
