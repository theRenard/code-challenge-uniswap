import {
  OPEN_SELECTOR,
  CLOSE_SELECTOR,
  SET_TOKEN_POSITION

} from './mutation-types';

export function openSelector({ commit }, token) {
  commit(OPEN_SELECTOR);
  commit(SET_TOKEN_POSITION, { payload: token });
}

export function assignNewToken({ commit }, token) {
  commit(CLOSE_SELECTOR);
  console.log(token);
}