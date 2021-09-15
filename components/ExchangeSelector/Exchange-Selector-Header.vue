<template>
  <div class="exchange-selector-header">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer;"
    @click="$store.dispatch('backToTokenSelector')"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    <span>Manage</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-1cchcrx-1 bNKSgQ"
    @click="$store.dispatch('closeTokenSelector')"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class ExchangeSelectorHeader extends Vue {
}
</script>

<style lang="scss" scoped>
  .exchange-selector-header {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
    span {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      font-weight: 500;
      font-size: 16px;
    }
    svg {
      cursor: pointer;
    }
  }
</style>