<template>
  <div class="swap-page">
   <Swap-Container />
   <Token-Selector />
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class PageSwap extends Vue {

  async fetch() {
    // await this.$store.dispatch('tokens/fetchTokens');
    await this.$store.dispatch('tokens/getTokensFromExchanges');
    console.log(this.$store.state.tokens.tokenExchanges.gemini);
    // this.$store.dispatch('tokens/setDefaultToken');
  }

  mounted(): void {
  }

  beforeDestroy(): void {
  }
}
</script>

