const deauthenticate = (req, res, next) => {
  if (req.decodedAccessToken) {
    res.status(200).send({
      message: 'Deauthentication success',
      email: req.decodedAccessToken.email,
    })
  } else {
    res.status(500).send({
      message: 'Deauthentication failed',
      email: req.decodedAccessToken.email,
    })
  }
}

module.exports = deauthenticate
