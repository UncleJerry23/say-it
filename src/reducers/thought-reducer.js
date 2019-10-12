import { thoughtActions } from './reducerHelpers';

const initialState = {
  thoughts: [],
  newThought: null,
  loading: false,
  err: {},
};

export default function reducer(state = initialState, action) {
  const transformer = thoughtActions[action.type] || (() => state);
  return transformer(state, action);
}
