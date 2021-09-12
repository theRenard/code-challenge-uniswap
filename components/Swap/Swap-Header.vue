<template>
  <div class="swap-header">
    <div class="swap-header__container">
      <div class="swap-header__container-left">
        <span>Swap</span>
      </div>
      <div class="swap-header__container-right">
        <Swap-Gear />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .swap-header {
      padding: 1rem 1.25rem 0.5rem;
      width: 100%;
      color: rgb(86, 90, 105);
      &__container {
        @include center;
        -webkit-box-pack: justify;
        justify-content: space-between;
      }
      &__container-left {
        span {
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          font-weight: 500;
          font-size: 16px;
          color: rgb(0, 0, 0);
        }
      }
      &__container-right {
      }
  }
</style>