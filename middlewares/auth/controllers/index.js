const auth = {
  register: require('./register'),
  isRegistered: require('./isRegistered'),
  isPasswordCorrect: require('./isPasswordCorrect'),
  authenticate: require('./authenticate'),
  isAuthorized: require('./isAuthorized'),
  deauthenticate: require('./deauthenticate'),
}

module.exports = auth
