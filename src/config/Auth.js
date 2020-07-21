export default {
  passpost (auth = 'users') {
    return {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'J6wucnwRna2YxTQ45dESDVqFqBgKfp9EgUt4k3ZF',
      provider: auth
    }
  }
}
