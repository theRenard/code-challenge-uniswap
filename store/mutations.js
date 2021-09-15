import {
  SET_TOKEN,
  SET_TOKENS,
  SET_TOKEN_ONE,
  SET_TOKEN_TWO,
  SET_TOKEN_POSITION,
  SET_EXCHANGE_DATA,
  SET_SEARCH_STRING,
  OPEN_TOKEN_SELECTOR,
  CLOSE_TOKEN_SELECTOR,
  OPEN_EXCHANGE_SELECTOR,
  CLOSE_EXCHANGE_SELECTOR,
  SWITCH_EXCHANGE_ACTIVE_STATE,
} from './mutation-types';

export default {
  [SET_TOKEN](state, { position, payload }) {
    state[position] = payload;
  },
  [SET_TOKENS](state, { payload }) {
    state.tokens = payload;
  },
  [SET_EXCHANGE_DATA](state, { exchange, payload }) {
    state.tokenExchanges[exchange].data = payload;
  },
  [SWITCH_EXCHANGE_ACTIVE_STATE](state, { exchange, payload }) {
    state.tokenExchanges[exchange].active = payload;
  },
  [SET_TOKEN_ONE](state, { payload }) {
    state.token_one = payload;
  },
  [SET_TOKEN_TWO](state, { payload }) {
    state.token_two = payload;
  },
  [SET_SEARCH_STRING](state, { payload }) {
    state.searchString = payload;
  },
  [OPEN_TOKEN_SELECTOR](state) {
    state.tokenSelectorIsOpen = true;
  },
  [CLOSE_TOKEN_SELECTOR](state) {
    state.tokenSelectorIsOpen = false;
  },
  [OPEN_EXCHANGE_SELECTOR](state) {
    state.exchangeSelectorIsOpen = true;
  },
  [CLOSE_EXCHANGE_SELECTOR](state) {
    state.exchangeSelectorIsOpen = false;
  },
  [SET_TOKEN_POSITION](state, { payload }) {
    state.token_position = payload;
  }
};
