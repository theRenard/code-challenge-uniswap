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
  mounted(): void {
    this.$store.dispatch('getTokensFromExchanges');
  }
}
</script>
