import { auth } from '~/plugins/firebase'

export default function({ route, store, redirect }) {
  auth.onAuthStateChanged((user) => {
    console.log('auth route:' + route.name)
    if (user) {
      store.dispatch('auth/setUser', user)
      //redirect('/')
    } else {
      //console.log('route:' + route.name + route.name.indexOf('contents-auth'))
      //if (route.name !== 'login') redirect('/login')
    }
  })
}
