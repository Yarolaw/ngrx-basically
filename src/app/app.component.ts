import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 5;
  updatedAt?: number

  get cannotDecrement(): boolean {
    return this.counter <= 0
  }

  increment = () => {
    this.counter++
    this.updatedAt = Date.now()
  }
  decrement = () => {
    this.counter--
    this.updatedAt = Date.now()
  }
  reset = () => {
    this.counter = 0
    this.updatedAt = Date.now()
  }
}
