<template>
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-33m4yg-8 khlnVY">
    <path d="M0.97168 1L6.20532 6L11.439 1" :stroke="color"></path>
  </svg>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component({
})
export default class TokenCaretDown extends Vue {
  @Prop({
    type: String,
    required: true
  })
  public color!: string;

}
</script>