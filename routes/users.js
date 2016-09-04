const $ = require('sp-load'),
  app = $.express.Router();

app.post('/users/signup', function(req, res) {
  req.sanitizeBody('login').trim();
  req.sanitizeBody('password').trim();
  req.sanitizeBody('confirmPassword').trim();
  req.sanitizeBody('email').trim();

  req.checkBody('login', 'Enter a login').notEmpty();
  req.checkBody('password', 'Enter a password').notEmpty();
  req.checkBody('confirmPassword', 'Enter a password confirmation').notEmpty();
  req.checkBody('password', 'Password and password confirmation are not the equal').equals(req.body.confirmPassword);
  req.checkBody('email', 'Enter a email').notEmpty();
  req.checkBody('email', 'Email format is incorrect').isEmail();

  $.routesUtils.validateRoute(req, res, function() {
    $.usersModels.user.create(req.body).then(function() {
      res.send('123');
    });
  });


  /*const body = req.body;
  let user,
    cleanUser,
    token;

  req.checkBody('login', 'Enter a login').notEmpty();

  $.routesUtils.validateRoute(req, res, function() {
    user = {
      email: body.email.trim(),
      login: body.login.trim(),
      password: body.password.trim()
    };

    cleanUser = $.usersUtils.getCleanUser(user);

    token = $.usersUtils.generateToken(cleanUser);

    res.json({
      user: cleanUser,
      token: token
    });
  });*/
});

module.exports = app;