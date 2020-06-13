export const state = () => ({
  components: {
    overlay: {
      visible: false
    }
  }
})

export const mutations = {
  async setVisible(state, {component, visibility}) {
    state.components[`${component}`].visible = visibility;
  }
}

export const getters = {
  overlay: state => state.components.overlay,
}
