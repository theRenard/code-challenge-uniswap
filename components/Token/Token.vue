<template>
  <div class="token">
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
  }

  beforeDestroy(): void {
  }
}
</script>
