<template>
  <button class="token-button" :class="buttonClass">
    <Token-Button-Icon v-if="!isEmtpyToken" :token="token" />
    <div class="token-button__text">
      {{ tokenName }}
    </div>
    <Token-Caret-Down :color="caretColor" />
  </button>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Token } from '@/types/Exchange-Models';

@Component
export default class TokenButton extends Vue {
  @Prop({
    type: Object as Vue.PropType<Token>,
    required: false
  })
  public token!: Token;

  get isEmtpyToken(): boolean {
    return Boolean(this.token.address) === false;
  }

  get tokenName() {
    return this?.token?.symbol || 'Select a token';
  }

  get buttonClass() {
    return {
      'token-button--unselected': this.isEmtpyToken,
    };
  }

  get caretColor() {
    return this.isEmtpyToken ? '#fff' : '#000';
  }

}
</script>

<style lang="scss" scoped>
  .token-button {
    @include center;
    visibility: visible;
    -webkit-box-align: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 10px;
    outline: none;
    cursor: pointer;
    user-select: none;
    border: none;
    height: 2.4rem;
    width: initial;
    padding: 0px 8px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-right: 12px;
    &:hover,
    &:focus {
      background-color: rgb(237, 238, 242);
    }
    &:active {
      background-color: rgb(207, 210, 221);
    }
    &__text {
      margin: 0px 0.25rem;
      font-size: 18px;
      &--inverted {
        color: rgb(255, 255, 255);
      }
    }
    &--unselected {
      background-color: rgb(232, 0, 111);
      color: rgb(255, 255, 255);
      &:hover,
      &:focus {
        background-color: rgb(207, 0, 99);
      }
    }

  }
</style>