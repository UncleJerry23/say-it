import { createAction } from 'promise-middleware-redux';
import { fetchThoughts, postThought } from '../services/thought-service';

export const [
  getThoughts,
  GET_THOUGHTS,
  GET_THOUGHTS_PENDING,
  GET_THOUGHTS_ERROR
] = createAction('GET_THOUGHTS', fetchThoughts);

export const [
  createThought,
  CREATE_THOUGHT,
  CREATE_THOUGHT_PENDING,
  CREATE_THOUGHT_ERROR
] = createAction('CREATE_THOUGHT', postThought);
