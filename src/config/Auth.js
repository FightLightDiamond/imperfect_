const USER_PROVIDER = 'users'
const ADMIN_PROVIDER = 'admins'

const passpost = (provider = USER_PROVIDER) => {
  return {
    grant_type: 'password',
    client_id: 2,
    client_secret: 'sLqlShdHzQh8SDNMByOnUA1VZLg3lENshjK1eZmK',
    provider: provider
  }
}


export default {
  passpost,
  USER_PROVIDER,
  ADMIN_PROVIDER
}
