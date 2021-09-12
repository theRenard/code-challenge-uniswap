<template>
  <div>
    <img
      v-if="token"
      class="token-button__icon"
      :alt="alt"
      :src="src"
      >
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Token } from '~/types/token';

@Component
export default class TokenButtonIcon extends Vue {
  @Prop({
    type: Object as Vue.PropType<Token>,
    required: false
  })
  public token!: Token;

  get alt(): string {
    return `${this?.token?.symbol} logo`;
  }

  get src(): string | undefined {
    return this?.token?.logoURI;
  }
}
</script>

<style lang="scss" scoped>
  .token-button__icon {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 10px;
    background-color: rgb(255, 255, 255);
    margin-right: 0.5rem;
  }
</style>