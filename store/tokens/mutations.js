import {
  SET_TOKEN,
  SET_TOKENS,
  SET_TOKEN_ONE,
  SET_TOKEN_TWO,
  SET_EXCHANGE_DATA
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
  [SET_TOKEN_ONE](state, { payload }) {
    state.token_one = payload;
  },
  [SET_TOKEN_TWO](state, { payload }) {
    state.token_two = payload;
  },
};