export const state = () => ({
  packages: []
})

export const mutations = {
  async setPackages(state, { objects }) {
    state.packages = objects;
  }
}

export const getters = {
  packages: state => state.packages,
}
