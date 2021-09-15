<template>
  <div class="swap-page">
   <Swap-Container />
   <Token-Selector />
   <Exchange-Selector />
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class PageSwap extends Vue {

  async fetch() {
    // await this.$store.dispatch('fetchTokens');
    await this.$store.dispatch('getTokensFromExchanges');
    console.log(this.$store.state.tokenExchanges.gemini);
    // this.$store.dispatch('setDefaultToken');
  }

  mounted(): void {
  }

  beforeDestroy(): void {
  }
}
</script>

