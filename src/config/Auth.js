export default {
  passpost (auth = 'users') {
    return {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'bBulLSUfPjUa6zdvC0yYymyAqpHhZCE8letJBBFu',
      provider: auth
    }
  }
}
