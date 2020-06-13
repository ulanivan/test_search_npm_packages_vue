<template>
  <div class="content container">
    <h1 v-if="packages.length === 0">Nothing found</h1>
    <template v-else>
      <PackagesList :packages="packages"/>
    </template>
  </div>
</template>

<script>
import PackagesList from '@/components/PackagesList'
export default {
  components: {
    PackagesList
  },
  computed: {
    packages() {
      return this.$store.getters['packages/packages'].map(pack => pack.package)
    }
  }
}
</script>

<style>
.content {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

