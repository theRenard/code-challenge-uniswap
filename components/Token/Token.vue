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
export default class Planet extends Vue {

  @Prop({
    type: Object as Vue.PropType<Token>,
    required: false
  })
  public token!: Token | null;

  mounted(): void {
  }

  beforeDestroy(): void {
  }
}
</script>
