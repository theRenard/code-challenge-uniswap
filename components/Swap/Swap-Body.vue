<template>
  <div class="swap-body">
    <div class="swap-body__grid">
      <Swap-Tokens />
      <div></div>
      <Swap-Button />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .swap-body {
    position: relative;
    padding: 8px;
    &__grid {
      display: grid;
      grid-auto-rows: auto;
      row-gap: 12px;
    }
  }
</style>