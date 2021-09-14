<template>
  <div class="token-selector-footer">
    <button class="token-selector-footer__button">
      <div class="token-selector-footer__button__container">
        <div class="token-selector-footer__button__svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </div>
        <span>Manage Token Lists</span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class TokenSelectorFooter extends Vue {
}
</script>

<style lang="scss" scoped>
  .token-selector-footer {
    width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    &__button {
      @include center;
      width: auto;
      outline: none;
      border: none;
      font-size: inherit;
      padding: 0px;
      margin: 0px;
      background: none;
      cursor: pointer;
      user-select: none;
      &__container { @include center; width: fit-content; }
      &__svg {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        margin-left: 0px;
        svg {
          stroke: rgb(213, 0, 102);
        }
      }
      span {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        font-weight: 500;
        color: rgb(213, 0, 102);
      }
    }
  }
</style>