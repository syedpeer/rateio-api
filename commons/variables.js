module.exports = {
  jwt: {
    privateKey: process.env.JWT_PRIVATE_KEY,
    issuer: process.env.APP_NAME,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  database: {
    connectionString: process.env.DB_CONNECTION_STRING,
  },
  social: {
    google: {
      authValidateUri: process.env.GOOGLE_AUTH_VALIDATE_URI,
    }
  },
  pitang: {
    domain: 'pitang.com',
  },
};
