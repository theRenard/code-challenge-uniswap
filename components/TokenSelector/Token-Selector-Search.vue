<template>
  <div class="token-selector-search">
    <input
      id="token-search-input"
      v-model="searchString"
      type="text"
      placeholder="Search name or paste address"
      autocomplete="off" value="">
  </div>
</template>

<script lang="ts">

import { Vue, Component, Watch } from 'nuxt-property-decorator';

@Component
export default class TokenSelectorSearch extends Vue {
  searchString = '';

  @Watch('searchString')
  onSearch(val: string) {
    this.$store.commit('SET_SEARCH_STRING', { payload: val });
  }

}
</script>

<style lang="scss" scoped>
  .token-selector-search {
    @include center;
    input {
      position: relative;
      display: flex;
      padding: 16px;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      white-space: nowrap;
      background: none;
      outline: none;
      border-radius: 20px;
      color: rgb(0, 0, 0);
      border: 1px solid rgb(206, 208, 217);
      appearance: none;
      font-size: 18px;
      transition: border 100ms ease 0s;
      &:focus {
        border: 1px solid rgb(232, 0, 111);
        outline: none;
      }
    }
  }
</style>