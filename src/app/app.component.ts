import {Component, input} from '@angular/core';
import {injectStore} from "@tanstack/angular-store";
import {store} from "./store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  styleUrl: './app.component.scss',
  template: `
    <div>{{ $animal() }}: {{ $count() }}</div>
`,
})
export class AppComponent {
  protected $animal = input.required<string>();
  protected $count = injectStore(
    store, (state) => {
      return state[this.$animal()]
    }
  );
}
