import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  token: sessionStorage.getItem('token') || '',
  // Firebaseの認証で返却されるuserは変更がmutation以外でかかるため、必要な情報だけ保持するようにする
  username: '',
  uid: '',
})

export const getters = {
  isLoggedIn: (state) => state.status === 'loggedIn',
}

export const actions = {
  setUser({ commit }, user) {
    commit('setUser', user)
  },
  logout({ commit }) {
    auth.signOut().then(() => {
      commit('logout')
    })
  },
}

export const mutations = {
  setUser(state, user) {
    state.status = 'loggedIn'
    state.username = user.displayName
    state.uid = user.uid
  },
  logout(state) {
    state.status = 'loggedOut'
    state.username = ''
    state.uid = ''
  },
}
