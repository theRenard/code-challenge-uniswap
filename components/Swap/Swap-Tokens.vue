<template>
  <div class="swap-tokens">
    <Token :token="$store.state.tokens.token_one" />
    <Token :token="$store.state.tokens.token_two" />
  </div>
</template>