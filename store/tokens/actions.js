import {
  SET_TOKENS,
  SET_TOKEN_ONE,

} from './mutation-types';
import tokens from '~/stubs/compound.tokenlist.js';

const fakeToken = {
  "chainId": 1,
  "address": "0x253444bd9ecf11e5516d6d00974e91c9f0857ccb",
  "name": "ETH BTC Long Only A",
  "symbol": "EBLOAP",
  "decimals": 18,
  "logoURI": "https://assets.coingecko.com/coins/images/11004/thumb/sw_ethbtc_set.png?1587089906"
}

export async function fetchTokens({ commit }) {
  // sure, no errors handling here :P
  try {
    const payload = await Promise.resolve(tokens);
    commit(SET_TOKENS, { payload });
  } catch (error) {
    console.error(error);
  }
}

export function setDefaultTokens({ commit }) {
  const payload = fakeToken;
  commit(SET_TOKEN_ONE, { payload });
}
