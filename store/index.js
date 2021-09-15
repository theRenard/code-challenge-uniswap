import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import tokenExchanges from '~/constants/token-exchanges.json';

const state = () => ({
  tokenSelectorIsOpen: false,
  exchangeSelectorIsOpen: false,
  token_position: null,
  tokenExchanges,
  searchString: '',
  token_one: {
    chainId: 0,
    address: '',
    name: '',
    symbol: '',
    decimals: 0,
    logoURI: '',
    extensions: {
      optimismBridgeAddress: '',
    }
  },
  token_two: {
    chainId: 0,
    address: '',
    name: '',
    symbol: '',
    decimals: 0,
    logoURI: '',
    extensions: {
      optimismBridgeAddress: '',
    }
  },
});

export default {
  mutations,
  actions,
  getters,
  state,
};
