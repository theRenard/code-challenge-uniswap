<template>
  <div class="token-selector-list-element" @click="clickHandler">
    <img
      class="token-selector-list-element__img"
      :alt="token.name"
      :src="token.logoURI">
    <div class="token-selector-list-element__name__symbol">
      <div class="token-selector-list-element__name">
        {{ token.name }}
      </div>
      <div class="token-selector-list-element__symbol">
        {{ token.symbol }}
      </div>
    </div>
    <div></div>
    <div class="token-selector-list-element__number">
      0
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Token } from '@/types/Exchange-Models';

@Component
export default class TokenSelectorListElement extends Vue {

  @Prop({
    type: Object as Vue.PropType<Token>,
    required: false
  })
  public token!: Token;

  public clickHandler() {
    const position = this.$store.state.selector.token_position;
    this.$store.commit('tokens/SET_TOKEN', { position, payload: this.token });
    this.$store.commit('selector/CLOSE_SELECTOR');
  }
}
</script>

<style lang="scss" scoped>
  .token-selector-list-element {
    padding: 4px 20px;
    height: 56px;
    display: grid;
    grid-template-columns: auto minmax(auto, 1fr) auto minmax(0px, 72px);
    gap: 16px;
    cursor: pointer;
    opacity: 1;
    width: 100%;
    &__img {
      display: block;
      vertical-align: middle;
      width: 24px;
      height: 24px;
      border-radius: 24px;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 10px;
      background-color: rgb(255, 255, 255);
    }
    &__name__symbol {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: start;
      justify-content: flex-start;
    }
    &__name {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      font-weight: 500;
    }
    &__symbol {
      box-sizing: border-box;
      margin: 0px;
      min-width: 0px;
      font-weight: 300;
      font-size: 12px;
      color: rgb(110, 114, 125);
    }
    &__number {
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
      width: fit-content;
      justify-self: flex-end;
    }
  }
</style>