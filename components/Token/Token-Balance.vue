<template>
  <div class="token-balance">
    <span>Balance 0 ETH</span>
  </div>
</template>

<style lang="scss" scoped>
.token-balance {
    width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
  span {
    display: inline;
    cursor: pointer;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-weight: 400;
    font-size: 14px;
    color: rgb(86, 90, 105);
  }
}
</style>