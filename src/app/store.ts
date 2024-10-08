import { Store } from '@tanstack/store';

export interface State {
  count: number;
}

export const store = new Store<State>({
  count: 0,
});

store.subscribe(() => {
  console.log('change state', store.state);
});

export function addCount(count: number) {
  return store.setState((state) => {
    return {
      ...state,
      count: state.count + count,
    };
  });
}

export function subCount(count: number) {
  return store.setState((state) => {
    return {
      ...state,
      count: state.count - count,
    };
  });
}
