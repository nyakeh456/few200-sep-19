
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 5
};

export function reducer(state: CounterState = initialState, action: any) {
  return state;
}
