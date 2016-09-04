const $ = require('sp-load'),
  app = $.express(),
  port = $.config.defultPort;

app.use($.express.static(__dirname + '/public'));

app.use($.bodyParser.urlencoded({ extended: false }));
app.use($.bodyParser.json());

app.use($.expressValidator());

app.use($.morgan('dev'));

app.use($.rootRoutes);

/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/

app.listen(port);
