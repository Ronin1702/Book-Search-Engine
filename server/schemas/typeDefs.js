const { gql } = require('graphql-tag');

// Define the GraphQL type definitions
const typeDefs = gql`
  type Book {
    bookId: String!
    authors: [String!]!
    description: String!
    title: String!
    image: String
    link: String
  }

  input BookInput {
    authors: [String!]!
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]!
    bookCount: Int!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User!
  }

  type Mutation {
    login(email: String!, password: String!): Auth!
    addUser(input: CreateUserInput!): Auth!
    saveBook(input: BookInput!): User!
    removeBook(bookId: String!): User!
  }
`;

module.exports = typeDefs;