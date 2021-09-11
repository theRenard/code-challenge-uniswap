import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = () => ({
  tokens: {},
});

export default {
  mutations,
  actions,
  getters,
  state,
};
