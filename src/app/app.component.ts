import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs'
import { increment, decrement, reset } from './reducers/counter.actions'
import { countSelector, updatedAtSelector } from './reducers/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$ = this.store.select(countSelector)
  updatedAt$ = this.store.select(updatedAtSelector)

  cannotDecrement$ = this.count$.pipe(map(count => count <= 0))

  constructor(private store: Store) {
  }

  increment = () => {
    this.store.dispatch(increment())
  }

  decrement = () => {
    this.store.dispatch(decrement())
  }
  
  reset = () => {
    this.store.dispatch(reset())
  }
}
