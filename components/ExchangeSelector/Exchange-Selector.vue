<template>
  <Modal v-if="$store.state.exchangeSelectorIsOpen">
    <div class="exchange-selector">
      <div class="exchange-selector__container">
        <div class="exchange-selector__upper">
          <Exchange-Selector-Header />
        </div>
        <Separator />
        <div class="exchange-selector__center">
          <Exchange-Selector-Switch />
          <Exchange-Selector-Search />
          <Separator />
          <Exchange-Selector-List />
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class TokenSelector extends Vue {
}
</script>

<style lang="scss" scoped>
  .exchange-selector {
    width: 50vw;
    margin: 10vh auto;
    background: #fff;
    padding: 2rem;
    outline: none;
    margin: 0px 0px 2rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(247, 248, 250);
    box-shadow: rgba(47, 128, 237, 0.05) 0px 4px 8px 0px;
    padding: 0px;
    width: 50vw;
    overflow: hidden auto;
    align-self: center;
    max-width: 420px;
    max-height: 80vh;
    min-height: 80vh;
    display: flex;
    border-radius: 20px;
    width: 65vw;
    margin: 0px;
    overflow: hidden;

    &__container {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: start;
      justify-content: flex-start;
      width: 100%;
      flex: 1 1 0%;
      position: relative;
    }
    &__upper {
      display: grid;
      grid-auto-rows: auto;
      row-gap: 16px;
      padding: 20px;
    }
    &__center {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      flex: 1 1 0%;
      position: relative;
      height: 40%;
    }
    &__bottom {
      width: 100%;
      border-radius: 0px 0px 20px 20px;
      padding: 20px;
      background-color: rgb(247, 248, 250);
      border-top: 1px solid rgb(237, 238, 242);
    }
  }
</style>