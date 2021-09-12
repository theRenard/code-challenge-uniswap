import {
  SET_TOKENS,
  SET_TOKEN_ONE,
  SET_TOKEN_TWO,
} from './mutation-types';

export default {
  [SET_TOKENS](state, { payload }) {
    state.tokens = payload;
  },
  [SET_TOKEN_ONE](state, { payload }) {
    state.token_one = payload;
  },
  [SET_TOKEN_TWO](state, { payload }) {
    state.token_two = payload;
  },
};