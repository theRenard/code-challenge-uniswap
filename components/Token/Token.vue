<template>
  <div class="token">
    <div class="token__header">
    <Token-Button :token="token" />
    <Token-Input />
    </div>
    <div class="token__footer">
    <Token-Balance />
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Token } from '@/types/token';

@Component
export default class TokenComponent extends Vue {

  @Prop({
    type: Object as Vue.PropType<Token>,
    required: false
  })
  public token!: Token;

}
</script>

<style lang="scss" scoped>
.token {
    border-radius: 20px;
    border: 1px solid rgb(237, 238, 242);
    background-color: rgb(247, 248, 250);
    width: initial;
    &__header {
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      padding: 1rem 1rem 0.75rem;
    }
    &__footer {
      -webkit-box-pack: end;
      justify-content: flex-end;
      display: flex;
      flex-flow: row nowrap;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(0, 0, 0);
      font-size: 0.75rem;
      line-height: 1rem;
      padding: 0px 1rem 1rem;
    }
}
</style>