import { createAction } from 'promise-middleware-redux';
import { fetchThoughts } from '../services/thought-service';

export const [
  getThoughts,
  GET_THOUGHTS,
  GET_THOUGHTS_PENDING,
  GET_THOUGHTS_ERROR
] = createAction('GET_THOUGHTS', fetchThoughts);
