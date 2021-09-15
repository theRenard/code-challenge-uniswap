<template>
  <button class="swap-button" @click="$store.dispatch('setDefaultTokens');">
    <span>Enter an amount</span>
  </button>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class SwapButton extends Vue {
  toggle() {
    console.log('toggle');
  }
}
</script>

<style lang="scss" scoped>
.swap-button {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    appearance: none;
    display: inline-block;
    text-align: center;
    line-height: inherit;
    text-decoration: none;
    font-size: inherit;
    padding: 8px 16px;
    color: white;
    border: 0px;
    border-radius: 4px;
    padding: 16px;
    width: 100%;
    font-weight: 500;
    text-align: center;
    border-radius: 20px;
    outline: none;
    border: 1px solid transparent;
    color: white;
    text-decoration: none;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 1;
    will-change: transform;
    transition: transform 450ms ease 0s;
    transform: perspective(1px) translateZ(0px);
    cursor: auto;
    // pointer-events: none;
    background-color: rgb(237, 238, 242);
    color: rgb(86, 90, 105);
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    span {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      font-size: 20px;
      font-weight: 500;
    }
}
</style>