<template>
  <div class="exchange-selector-list-container">
    <div class="exchange-selector-list">
      <Exchange-Selector-List-Element
        v-for="(value, key) of $store.getters.exchanges"
        :key="value.name"
        :exchange="{ [key]: value}" />
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class ExchangeSelectorList extends Vue {
}
</script>

<style lang="scss" scoped>
  .exchange-selector-list {
    padding: 20px;
    display: grid;
    grid-auto-rows: auto;
    row-gap: 12px;
    &-container {
      flex: 1 1 0%;
      position: relative;
      overflow-y: scroll;
    }
  }
</style>