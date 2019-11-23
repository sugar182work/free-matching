import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import config from '~/firebase.config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}

export const authProviders = {
  // 使うものだけ定義
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
}

// 認証関係のライブラリ
export const auth = firebase.auth()

// DB関連のライブラリ
export const database = firebase.database()
