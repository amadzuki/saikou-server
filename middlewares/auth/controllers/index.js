const auth = {
  register: require('./register'),
  isRegistered: require('./isRegistered'),
  isPasswordCorrect: require('./isPasswordCorrect'),
  authenticate: require('./authenticate'),
}

module.exports = auth
