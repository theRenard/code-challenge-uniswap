<template>
  <div
    class="exchange-selector-list-element"
    :class="exchangeClass">
    <img
    v-if="exchangeData.logoURI"
    class="exchange-selector-list-element__img"
    :alt="`${exchangeData.name} logo`"
    :src="exchangeData.logoURI"
    style="margin-right: 1rem;">
    <div class="exchange-selector-list-element__name__tokens">
      <div class="exchange-selector-list-element__name">
        <span>{{ exchangeData.name }}</span>
      </div>
      <div class="exchange-selector-list-element__tokens">
        <span>{{ exchangeData.tokens.length }} tokens</span>
      </div>
    </div>
    <button :class="buttonClass" @click="clickHandler">
      <template v-if="activeState">
        <span>{{ buttonText }}</span>
        <div></div>
      </template>
      <template v-if="!activeState">
        <div></div>
        <span>{{ buttonText }}</span>
      </template>
    </button>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Exchange } from '@/types/Exchange-Models';

@Component
export default class TokenSelectorListElement extends Vue {

  @Prop({
    type: Object as Vue.PropType<Exchange>,
    required: true
  })
  public exchange!: Exchange;

  get exchangeValue() {
    return Object.values(this.exchange)[0];
  }

  get exchangeData() {
    return this.exchangeValue.data;
  }

  get exchangeClass() {
    return this.activeState ? 'exchange-selector-list-element--active' : '';
  }

  get buttonText() {
    return this.activeState ? 'On' : 'Off';
  }

  get buttonClass() {
    return this.activeState ? 'on' : 'off';
  }

  get exchangeKey() {
    return Object.keys(this.exchange)[0];
  }

  get activeState() {
    return this.exchangeValue.active;
  }

  public clickHandler() {
    const payload = !this.activeState;
    const exchange = this.exchangeKey;
    this.$store.commit('SWITCH_EXCHANGE_ACTIVE_STATE', { exchange, payload });
  }
}
</script>

<style lang="scss" scoped>
  .exchange-selector-list-element {
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
    background-color: rgb(237, 238, 242);
    opacity: 1;
    transition: all 200ms ease 0s;
    -webkit-box-align: center;
    align-items: center;
    padding: 1rem;
    border-radius: 20px;
    &--active {
      background-color: rgb(33, 114, 229);
      // antipattern but cant' remembter how to target parent and it's 11pm
      .exchange-selector-list-element__name,
      .exchange-selector-list-element__tokens {
        span {
          color: rgb(255, 255, 255);
        }
     }
    }
    &__img {
      width: 40px;
      height: 40px;
    }
    &__name__tokens {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: start;
      justify-content: flex-start;
      flex: 1 1 0%;
    }
    &__name {
      span {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        color: rgb(86, 90, 105);
      }
    }
    &__tokens {
      span {
        box-sizing: border-box;
        margin: 0px 6px 0px 0px;
        min-width: 0px;
        font-weight: 500;
        font-size: 12px;
        color: rgb(86, 90, 105);      }
    }
    button {
      border-radius: 20px;
      border: none;
      background: rgb(247, 248, 250);
      display: flex;
      width: fit-content;
      cursor: pointer;
      outline: none;
      padding: 0.4rem;
      -webkit-box-align: center;
      align-items: center;
      user-select: none;
      &.on {
        > span {
          margin: 0px 10px;
          width: 24px;
          color: rgb(0, 0, 0);
          box-sizing: border-box;
          min-width: 0px;
          font-weight: 600;
          margin: 0px 6px;
        }
        > div {
          border-radius: 50%;
          height: 24px;
          width: 24px;
          background-color: rgb(33, 114, 229);
        }
      }
      &.off {
        > span {
          width: 24px;
          color: rgb(110, 114, 125);
          box-sizing: border-box;
          min-width: 0px;
          font-weight: 600;
          margin: 0px 6px;
          }
        > div {
          border-radius: 50%;
          height: 24px;
          width: 24px;
          background-color: rgb(136, 141, 155);
        }
      }
    }
  }
</style>