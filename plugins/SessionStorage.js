import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'sugars-nuxt', // your product name
      storage: window.sessionStorage,
    })(store)
  })
}
