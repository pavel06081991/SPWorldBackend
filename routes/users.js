const {
    express,
    routesUtils,
    usersModel,
    usersUtils
  } = require('sp-load'),
  usersRoutes = express.Router();

usersRoutes.post('/users/signup', function (req, res, next) {
  req.sanitizeBody('login').trim();
  req.sanitizeBody('password').trim();
  req.sanitizeBody('confirmPassword').trim();
  req.sanitizeBody('email').trim();

  req.checkBody('login', 'Enter a login').notEmpty();
  req.checkBody('login', 'The login you entered already exists. Choose another login').isLoginFree();
  req.checkBody('password', 'Enter a password').notEmpty();
  req.checkBody('confirmPassword', 'Enter a password confirmation').notEmpty();
  req.checkBody('password', 'Password and password confirmation are not the equal').equals(req.body.confirmPassword);
  req.checkBody('email', 'Enter a email').notEmpty();
  req.checkBody('email', 'Email format is incorrect').isEmail();

  routesUtils.validateRoute(req, res).then(function () {
    req.sanitizeBody('password').toHashPassword();

    usersModel.create(req.body).then(function (user) {
      res.json(usersUtils.getAuthData(user));
    }, function() {
      next(new Error());
    });
  });
});

usersRoutes.post('/users/signin', function (req, res, next) {
  req.sanitizeBody('login').trim();
  req.sanitizeBody('password').trim();

  req.checkBody('login', 'Enter a login').notEmpty();
  req.checkBody('login', 'Login or password is incorrect').isUserCredentialValid(req.body.password);
  req.checkBody('password', 'Enter a password').notEmpty();

  routesUtils.validateRoute(req, res).then(function () {
    usersModel.findOne({
      where: {login: req.body.login}
    })
    .then(function (user) {
      res.json(usersUtils.getAuthData(user));
    }, function() {
      next(new Error());
    });
  });
});

module.exports = usersRoutes;