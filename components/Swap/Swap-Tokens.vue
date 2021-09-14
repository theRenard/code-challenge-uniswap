<template>
  <div class="swap-tokens">
    <Token
      :token="$store.state.tokens.token_one"
      @click.native="$store.dispatch('selector/openSelector', 'token_one')" />
    <Swap-Swapper />
    <Token
      :token="$store.state.tokens.token_two"
      @click.native="$store.dispatch('selector/openSelector', 'token_two')" />
  </div>
</template>