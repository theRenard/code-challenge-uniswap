<template>
  <main class="swap">
    <Swap-Header />
    <Swap-Body />
    <Swap-Trad />
  </main>
</template>

<style lang="scss" scoped>
  main.swap {
    position: relative;
    max-width: 480px;
    width: 100%;
    background: rgb(255, 255, 255);
    box-shadow:
      rgba(0, 0, 0, 0.01) 0px 0px 1px,
      rgba(0, 0, 0, 0.04) 0px 4px 8px,
      rgba(0, 0, 0, 0.04) 0px 16px 24px,
      rgba(0, 0, 0, 0.01) 0px 24px 32px;
    border-radius: 24px;
    margin-top: 1rem;
  }
</style>