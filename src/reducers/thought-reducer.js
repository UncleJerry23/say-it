const initialState = {
  thought: 'empty',
  loading: false,
  err: {},
};

export default function reducer(state = initialState, action) {
  const actions = {
    ['CREATE_ACTION']: () => ({ thought: action.payload }),
    ['CREATE_ACTION_PENDING']: () => ({ ...state, loading: true }),
    ['CREATE_ACTION_ERROR']: () => ({ ...state, loading: false, error: action.payload }),
  };

  return actions[action.type];
}
