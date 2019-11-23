<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
import { auth, authProviders } from '~/plugins/firebase'

export default {
  name: 'FirebaseAuth',
  mounted() {
    auth.onAuthStateChanged((user) => {
      const firebaseui = require('firebaseui-ja')
      if (!user) {
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: [authProviders.Email, authProviders.Google],
          callbacks: {
            // Nuxtのローカルサーバーで起こるCORSエラーのためこのように設定。本番環境では不要
            signInSuccessWithAuthResult: (authResult) => {
              window.location.href = '/'
              return false //# falseを設定するとsignInSuccessUrlにはリダイレクトしない
            },
          },
          signInSuccessUrl: '/',
          signInFlow: 'popup', // ログインフロー設定。Nuxtのローカルサーバーで起こるCORSエラーがあるのでpopupがオススメです。
        }
        ui.disableAutoSignIn()
        ui.start('#firebaseui-auth-container', config)
      }
    })
  },
}
</script>
