import {
  SET_TOKENS
} from './mutation-types';
import tokens from '@/stubs/tokens.js';

export async function fetchTokens({ commit }) {
  // sure, no errors handling here :P
  try {
    const payload = await Promise.resolve(tokens);
    commit(SET_TOKENS, { payload });
  } catch (error) {
    console.error(error);
  }
}
