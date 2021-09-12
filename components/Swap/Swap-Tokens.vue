<template>
  <div class="swap-tokens">
    <Token :token="$store.getters['tokens/tokenOne']" />
    <Swap-Swapper />
    <Token :token="$store.getters['tokens/tokenTwo']" />
  </div>
</template>