<template>
  <div class="swap-tokens">
    <Token :token="$store.state.tokens.token_one" />
    <Swap-Swapper />
    <Token :token="$store.state.tokens.token_two" />
  </div>
</template>