const {
    express,
    config,
    bodyParser,
    expressValidator,
    rootRoutes,
    customSanitizers,
    customValidators,
    compression
  } = require('sp-load'),
  app = express(),
  port = config.defultPort;

app.use(compression());

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(expressValidator({
  customSanitizers: customSanitizers,
  customValidators: customValidators
}));

app.use(rootRoutes);

app.use(function (req, res, next) {
  const err = new Error('Not Found');

  err.status = 404;

  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  res.json({
    message: err.message || 'Something failed!'
  });
});

app.listen(port);
