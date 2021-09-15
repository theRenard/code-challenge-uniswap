export const tokensFromActiveExchanges = (state) => Object
  .values(state.tokenExchanges)
  .map((exchange) => {
    if (exchange.active) {
      return exchange.data.tokens;
    }
    return [];
  })
  .flat();

export const exchanges = (state) => state.tokenExchanges;
export const tokensQuantity = (_state, getters) => getters.tokensFromActiveExchanges.length;
export const searchedTokens = (state, getters) => {
  if (state.searchString.length > 2) {
    return getters.tokensFromActiveExchanges
      .filter(token => token.symbol.toLowerCase().includes(state.searchString.toLowerCase()));
  }
  return getters.tokensFromActiveExchanges;
}


