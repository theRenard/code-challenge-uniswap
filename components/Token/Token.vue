<template>
  <div class="token">
    {{ this.$store.state.tokens.tokens }}
    <div class="token__header">
    <Token-Button />
    <Token-Input />
    </div>
    <div class="token__footer">
    <Token-Balance />
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Planet extends Vue {

  mounted(): void {
    console.log(this.$store.state.tokens);
  }

  beforeDestroy(): void {
  }
}
</script>
