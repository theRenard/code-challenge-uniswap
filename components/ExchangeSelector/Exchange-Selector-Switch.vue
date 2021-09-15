<template>
  <div class="exchange-selector-switch">

  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class ExchangeSelectorSwitch extends Vue {
}
</script>

<style lang="scss" scoped>
  .exchange-selector-switch {
    @include center;
    input {
      position: relative;
      display: flex;
      padding: 16px;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      white-space: nowrap;
      background: none;
      outline: none;
      border-radius: 20px;
      color: rgb(0, 0, 0);
      border: 1px solid rgb(206, 208, 217);
      appearance: none;
      font-size: 18px;
      transition: border 100ms ease 0s;
      &:focus {
        border: 1px solid rgb(232, 0, 111);
        outline: none;
      }
    }
  }
</style>