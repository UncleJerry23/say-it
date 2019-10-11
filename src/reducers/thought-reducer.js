const initialState = {
  thoughts: [],
  loading: false,
  err: {},
};

const actions = {
  GET_THOUGHTS: (state, action) => ({ ...state, thoughts: action.payload }),
  GET_THOUGHTS_PENDING: (state) => ({ ...state, loading: true }),
  GET_THOUGHTS_ERROR: (state, action) => ({ ...state, loading: false, error: action.payload }),
};

export default function reducer(state = initialState, action) {
  const transformer = actions[action.type] || (() => state);
  return transformer(state, action);
}
