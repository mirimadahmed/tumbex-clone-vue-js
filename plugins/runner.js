export default (store) => { // <- not { store }, but store
  const isremember = localStorage.getItem('isremember')
  if (isremember === 'true' || isremember === 'false') {
    const user = localStorage.getItem('tumbex-user')
    if (user != null) {
      store.store.commit('login', JSON.parse(user))
    }
  } else {
    localStorage.removeItem('isremember')
    localStorage.removeItem('tumbex-user')
  }
}
