const $ = require('sp-load');

function generateToken(user) {
  const u = {
    login: user.login
  };

  return token = $.jwt.sign(u, $.config.JWTSecret, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

function getCleanUser(user) {
  return {
    login: user.login
  }
}

module.exports = {
  getCleanUser: getCleanUser,
  generateToken: generateToken
};