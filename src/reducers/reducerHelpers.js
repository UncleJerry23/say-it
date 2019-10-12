const success = (state, action, key) => ({ ...state, [key]: action.payload, loading: false });
const pending = (state) => ({ ...state, loading: true });
const error = (state, action) => ({ ...state, loading: false, error: action.payload });

export const thoughtActions = {
  GET_THOUGHTS: (state, action) => success(state, action, 'thoughts'),
  GET_THOUGHTS_PENDING: (state) => pending(state),
  GET_THOUGHTS_ERROR: (state, action) => error(state, action),
  CREATE_THOUGHT: (state, action) => success(state, action, 'newThought'),
  CREATE_THOUGHT_PENDING: (state) => pending(state),
  CREATE_THOUGHT_ERROR: (state, action) => error(state, action),
};
