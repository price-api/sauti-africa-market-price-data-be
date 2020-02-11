const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

module.exports = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 10,
		jwksUri: 'https://price-api.auth0.com/.well-known/jwks.json'
	}),
	audience: 'https://price-api.auth0.com/api/v2/',
	issuer: 'https://price-api.auth0.com/',
	algorithms: [ 'RS256' ]
});
