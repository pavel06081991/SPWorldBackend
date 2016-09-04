const {
  jwt,
  config
} = require('sp-load');

function generateToken(user) {
  return token = jwt.sign(user, config.JWTSecret, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

function getCleanUser(user) {
  return {
    login: user.login
  }
}

function getAuthData(user) {
  let cleanUser = getCleanUser(user);

  return {
    token: generateToken(cleanUser),
    user: getCleanUser(cleanUser)
  };
}

module.exports = {
  getCleanUser,
  generateToken,
  getAuthData
};