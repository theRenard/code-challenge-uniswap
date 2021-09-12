<template>
  <div class="swap-trad">Uniswap Clone available in
    <a @click="switchLanguage">Italiano</a>
  </div>
</template>


<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class SwapTrad extends Vue {
  switchLanguage() {
    console.log('switchLanguage');
  }
}
</script>

<style lang="scss" scoped>
.swap-trad {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  opacity: 0.6;
  margin-top: 1rem !important;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 11px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: rgb(232, 0, 111);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>