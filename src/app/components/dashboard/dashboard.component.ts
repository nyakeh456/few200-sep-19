import { Component, OnInit } from '@angular/core';
import { AppState, selectCurrentCount, selectCountBy } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  message = 'Coming Soon!';
  by$: Observable<number>;
  current$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.by$ = this.store.select(selectCountBy);
    this.current$ = this.store.select(selectCurrentCount);
  }
}
