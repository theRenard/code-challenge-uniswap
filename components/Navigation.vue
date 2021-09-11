<template>
  <nav id="navigation">
    <ul>
      <li><nuxt-link to="/swap">Swap</nuxt-link></li>
      <li><nuxt-link to="/pool">Pool</nuxt-link></li>
      <li><nuxt-link to="/">Vote</nuxt-link></li>
      <li><nuxt-link to="/">Charts</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  #navigation {
    display: none;
  }
</style>