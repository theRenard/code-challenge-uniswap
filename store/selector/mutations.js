import {
  OPEN_SELECTOR,
  CLOSE_SELECTOR,
  SET_TOKEN_POSITION,
} from './mutation-types';

export default {
  [OPEN_SELECTOR](state) {
    state.isOpen = true;
  },
  [CLOSE_SELECTOR](state) {
    state.isOpen = false;
  },
  [SET_TOKEN_POSITION](state, { payload }) {
    state.token_position = payload;
  }
};