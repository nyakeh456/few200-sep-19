import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount } from '../../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
  }

  increment() {
    this.store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'decrement' });
  }
}
