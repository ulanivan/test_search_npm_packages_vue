<template>
  <b-form-input placeholder="Search"
                type="search"
                @input="searchPackages"
  />
</template>

<script>
export default {
  methods: {
    async searchPackages(query) {
      this.$store.commit('components/setVisible', {component: 'overlay', visibility: true})
      try {
        await this.$axios.$get(`https://registry.npmjs.org/-/v1/search?text=${query}`)
            .then(res => {
              this.$store.commit('packages/setPackages', res)
              this.$store.commit('components/setVisible', {component: 'overlay', visibility: false})
            })
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
</script>
