// Load environment variables into the application
require('dotenv').config();

// Initialize variables
const express = require('express');
const path = require('path');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async () => {
  await server.start();
  // Use the new middleware setup
  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(PORT, () => {
      // Adjusted to use httpServer
      console.log(`API Port ${PORT} Active 🚀`);
      console.log(`Visit Apollo GraphQL API Sever at http://localhost:${PORT}/graphql`+' 🚀');
    });
  });
};

// Call the async function to start the server
startApolloServer();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  });
}

//Error Handling for Database connection
db.on('error', console.error.bind(console, 'connection error:'));
