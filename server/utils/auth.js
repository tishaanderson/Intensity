const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

// Secret key and expiration time for JWT tokens
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  // Custom error for authentication failure
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  // Middleware function to authenticate requests
  authMiddleware: function ({ req }) {
    // Allow token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;


    // If token is sent via headers, extract the actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }


    // If no token is provided, return the request as it is
    if (!token) {
      return req;
    }

    // If token is provided, attempt to verify it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // If token is valid, add the decoded user's data to the request object
      req.user = data;
    } catch {
      // If token verification fails, log an error
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
    return req;
  },
  // Function to sign JWT tokens
  signToken: function ({ email, name, _id }) {
    // Create payload containing user data
    const payload = { email, name, _id };
    // Sign the payload with the secret key and set expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};