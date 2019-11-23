export default function({ route, redirect, store }) {
  //console.log('現在のパス', route.path)
  //console.log('route:' + route.name + ':' + route.name.indexOf('contents-auth'))
  //console.log('store-auth:' + store.getters['auth/isLoggedIn'])

  if (
    route.name.indexOf('contents-auth') === 0 &&
    !store.getters['auth/isLoggedIn']
  ) {
    console.log('認証してないのに認証済にいるよ')
    redirect = '/'
  }
  return
}
