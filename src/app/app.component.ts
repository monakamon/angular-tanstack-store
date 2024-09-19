import { Component } from '@angular/core';
import { injectStore } from '@tanstack/angular-store';
import { store } from './store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  styleUrl: './app.component.scss',
  template: `<div>
    <button>+</button>
    <div>{{ $count() }}</div>
    <button>-</button>
  </div>`,
})
export class AppComponent {
  protected $count = injectStore(store, (state) => {
    return state.count;
  });
}
