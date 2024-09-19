import { Store } from '@tanstack/store';

export interface State {
  count: number;
}

export const store = new Store<State>({
  count: 0,
});

export function add(count: number) {
  store.setState((state) => {
    return {
      ...state,
      count: state.count + count,
    };
  });
}

export function sub(count: number) {
  store.setState((state) => {
    return {
      ...state,
      count: state.count - count,
    };
  });
}
