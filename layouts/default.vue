<template>
  <div class="d-flex flex-column justify-content-between default">
    <Header/>
    <b-overlay
        id="overlay-background"
        :show="overlayVisibility"
        variant="light"
        opacity="0.85"
        blur="2px"
        rounded="sm"
    >
      <nuxt/>
    </b-overlay>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  computed: {
    overlayVisibility() {
      return this.$store.getters['components/overlay'].visible
    }
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.default {
  height: 100vh;
}
</style>

