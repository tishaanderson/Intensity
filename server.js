const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

// Importing schemas and database connection
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Setting up the port
const PORT = process.env.PORT || 3001;
const app = express();

// Creating an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Function to start the Apollo Server
const startApolloServer = async () => {
  await server.start();

  // Setting up middleware for parsing JSON and URL-encoded bodies
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serving static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    // Route for all other requests in production
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Adding Apollo Server middleware to the '/graphql' endpoint
  app.use('/graphql', expressMiddleware(server));

  // Once the database connection is open, start listening to the server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Starting the Apollo Server
startApolloServer();