import {
  SET_TOKENS,
} from './mutation-types';

export default {
  [SET_TOKENS](state, { payload }) {
    state.tokens = payload;
  },
};
