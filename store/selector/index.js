import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = () => ({
  isOpen: true,
  token_position: null,
  token_one: {},
  token_two: {}
});

export default {
  mutations,
  actions,
  getters,
  state,
};
