<template>
   <Swap-Container />
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class PageSwap extends Vue {

  async fetch() {
    await this.$store.dispatch('tokens/fetchTokens');
  }

  mounted(): void {
    this.$store.dispatch('tokens/setDefaultTokens');
  }

  beforeDestroy(): void {
  }
}
</script>

