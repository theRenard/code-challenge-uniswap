<template>
   <Swap-Container />
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class PageSwap extends Vue {

  async fetch() {
    await this.$store.dispatch('tokens/fetchTokens')
  }

  mounted(): void {
  }

  beforeDestroy(): void {
  }
}
</script>

