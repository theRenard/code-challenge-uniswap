<template>
  <div
    class="swap-swapper"
    @click="$store.dispatch('tokens/swapUpperAndLowerTokens')">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6E727D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </div>
</template>

<style lang="scss" scoped>
.swap-swapper {
  padding: 4px;
  border-radius: 12px;
  height: 32px;
  width: 32px;
  position: relative;
  margin-top: -14px;
  margin-bottom: -14px;
  left: calc(50% - 16px);
  background-color: rgb(247, 248, 250);
  border: 4px solid rgb(255, 255, 255);
  z-index: 2;
}

</style>