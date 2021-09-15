import {
  SET_TOKEN_ONE,
  SET_TOKEN_TWO,
  OPEN_TOKEN_SELECTOR,
  CLOSE_TOKEN_SELECTOR,
  OPEN_EXCHANGE_SELECTOR,
  CLOSE_EXCHANGE_SELECTOR,
  SET_TOKEN_POSITION,
  SET_SEARCH_STRING
} from './mutation-types';

const defaultToken = {
  "chainId": 1,
  "address": "0x253444bd9ecf11e5516d6d00974e91c9f0857ccb",
  "name": "ETH BTC Long Only A",
  "symbol": "EBLOAP",
  "decimals": 18,
  "logoURI": "https://assets.coingecko.com/coins/images/11004/thumb/sw_ethbtc_set.png?1587089906"
}

export function setDefaultToken({ commit }) {
  const payload = defaultToken;
  commit(SET_TOKEN_ONE, { payload });
}

export function getTokensFromExchanges({ state, commit }) {
  const promises = Object.entries(state.tokenExchanges).map(([name, conf]) => {
    return this.$axios
      .get(conf.URI)
      .then(res => { commit('SET_EXCHANGE_DATA', { exchange: name, payload: res.data }); });
  })
  return Promise.all(promises);
}

export function swapUpperAndLowerTokens({ state, commit }) {
  const tokenOne = JSON.parse(JSON.stringify(state.token_one));
  const tokenTwo = JSON.parse(JSON.stringify(state.token_two));
  commit(SET_TOKEN_ONE, { payload: tokenTwo });
  commit(SET_TOKEN_TWO, { payload: tokenOne });
}


export function openTokenSelector({ commit }, token) {
  commit(OPEN_TOKEN_SELECTOR);
  commit(SET_TOKEN_POSITION, { payload: token });
}

export function closeTokenSelector({ commit }) {
  commit(CLOSE_TOKEN_SELECTOR);
  commit(SET_SEARCH_STRING, { payload: '' });
}

export function openExchangeSelector({ commit }) {
  commit(CLOSE_TOKEN_SELECTOR);
  commit(OPEN_EXCHANGE_SELECTOR);
}

export function backToTokenSelector({ commit }) {
  commit(CLOSE_EXCHANGE_SELECTOR);
  commit(OPEN_TOKEN_SELECTOR);
}
