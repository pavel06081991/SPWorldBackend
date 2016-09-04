const {
  bcrypt
} = require('sp-load');

const sanitizers = {
  toHashPassword: function(value) {
    return bcrypt.hashSync(value);
  }
};


module.exports = sanitizers;