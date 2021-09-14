export const tokensFromActiveExchanges = (state) => Object
  .values(state.tokenExchanges)
  .map((exchange) => {
    if (exchange.active) {
      return exchange.data.tokens;
    }
    return [];
  })
  .flat();
