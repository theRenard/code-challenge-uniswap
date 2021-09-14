<template>
  <div class="token-selector-list">
    <Token-Selector-List-Element
      v-for="token of $store.getters['tokens/tokensFromActiveExchanges']"
      :key="token.address"
      :token="token" />
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class TokenSelectorList extends Vue {
}
</script>

<style lang="scss" scoped>
  .token-selector-list {
  }
</style>