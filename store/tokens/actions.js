import {
  SET_TOKEN_ONE,
  SET_TOKEN_TWO,

} from './mutation-types';

const fakeToken = {
  "chainId": 1,
  "address": "0x253444bd9ecf11e5516d6d00974e91c9f0857ccb",
  "name": "ETH BTC Long Only A",
  "symbol": "EBLOAP",
  "decimals": 18,
  "logoURI": "https://assets.coingecko.com/coins/images/11004/thumb/sw_ethbtc_set.png?1587089906"
}

// export async function fetchTokens({ commit }) {
//   // sure, no errors handling here :P
//   try {
//     const payload = await Promise.resolve(tokens);
//     commit(SET_TOKENS, { payload });
//   } catch (error) {
//     console.error(error);
//   }
// }

export function setDefaultToken({ commit }) {
  const payload = fakeToken;
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
