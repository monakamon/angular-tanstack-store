import { Component } from '@angular/core';
import { injectStore } from '@tanstack/angular-store';
import { addCount, store, subCount } from './store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<div style="display: flex; gap: 8px">
    <button (click)="addCount(1)">+</button>
    <div>{{ $count() }}</div>
    <button (click)="subCount(1)">-</button>
  </div>`,
})
export class AppComponent {
  protected $count = injectStore(store, (state) => {
    return state.count;
  });
  public readonly addCount = addCount;
  public readonly subCount = subCount;
}
