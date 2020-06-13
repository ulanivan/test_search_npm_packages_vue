<template>
  <div class="header">
    <div class="container">
      <search/>
    </div>
  </div>
</template>

<script>
import Search from "./Search"

export default {
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 10px;
  padding-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}
</style>
