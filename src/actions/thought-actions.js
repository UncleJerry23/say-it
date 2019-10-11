import { createAction } from 'promise-middleware-redux';
import { fetchThought } from '../services/thought-service';

export const [
  createThought,
  CREATE_THOUGHT,
  CREATE_THOUGHT_PENDING,
  CREATE_THOUGHT_ERROR
] = createAction('CREATE_THOUGHT', fetchThought);
