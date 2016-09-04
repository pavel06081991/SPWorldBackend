module.exports = {
  JWTSecret: 'iwillchangetheworld',
  defultPort: 8080,

  dbConnection: [
    'spworld',
    'root',
    '2775422', {
      host: 'localhost',
      dialect: 'mysql',

      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  ]
};