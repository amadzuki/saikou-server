const auth = {
  register: require('./register'),
  isRegistered: require('./isRegistered'),
  isPasswordCorrect: require('./isPasswordCorrect'),
  authenticate: require('./authenticate'),
  isAuthenticated: require('./isAuthenticated'),
  isAuthorized: require('./isAuthorized'),
  deauthenticate: require('./deauthenticate'),
}

module.exports = auth
