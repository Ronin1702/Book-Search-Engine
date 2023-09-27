// Load environment variables into the application
require('dotenv').config();

// Initialize variables
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
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
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  });
}

const startApolloServer = async () => {
  await server.start();
  // Use the new middleware setup
  app.use('/graphql', cors(), bodyParser.json(), expressMiddleware(server));

  db.once('open', () => {
    httpServer.listen(PORT, () => {
      // Adjusted to use httpServer
      console.log(`API Port ${PORT} Active 🚀`);
      console.log(`Visit Apollo GraphQL API Sever at http://localhost:${PORT}/graphql`+' 🚀');
    });
  });
};

// Call the async function to start the server
startApolloServer();
