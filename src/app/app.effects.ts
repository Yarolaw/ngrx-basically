import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { increment, decrement, reset, changeUpdatedAt } from './reducers/counter.actions';

@Injectable()
export class AppEffects {

  updatedAt$ = createEffect(() => this.actions$.pipe(ofType(increment, decrement, reset), map(() => changeUpdatedAt({ updatedAt: Date.now() }))))
  
  constructor(private actions$: Actions) {}
}
