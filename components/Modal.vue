<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Modal extends Vue {
}
</script>

<style lang="scss" scoped>
.modal {
  background: rgba(0,0,0,.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 2;
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

