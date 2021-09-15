<template>
  <div class="swap-tokens">
    <Token
      :token="$store.state.token_one"
      @click.native="$store.dispatch('openTokenSelector', 'token_one')" />
    <Swap-Swapper />
    <Token
      :token="$store.state.token_two"
      @click.native="$store.dispatch('openTokenSelector', 'token_two')" />
  </div>
</template>