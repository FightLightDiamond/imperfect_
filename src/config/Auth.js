const USER_PROVIDER = 'users'
const ADMIN_PROVIDER = 'admin'

const passpost = (provider = USER_PROVIDER) => {
  return {
    grant_type: 'password',
    client_id: 2,
    client_secret: 'bBulLSUfPjUa6zdvC0yYymyAqpHhZCE8letJBBFu',
    provider: provider
  }
}


export default {
  passpost,
  USER_PROVIDER,
  ADMIN_PROVIDER
}
