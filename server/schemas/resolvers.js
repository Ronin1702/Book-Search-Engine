const { User } = require('../models');
const { GraphQLError } = require('graphql');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // async getSingleUser({ user = null, params }, res) {/*...*/}
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('savedBooks');
        
        return userData;
      }

      throw new GraphQLError('AUTH_NOT_LOGGED_IN');
    },
  },
  Mutation: {
    // async login({ body }, res) { /*...*/ }
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError('AUTH_CREDENTIALS_INCORRECT');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError('AUTH_CREDENTIALS_INCORRECT');
      }

      const token = signToken(user);
      return { token, user };
    },
    // async createUser({ body }, res) { /*...*/ }
    addUser: async (parent, { input }) => {
      const user = await User.create(input);
      const token = signToken(user);

      return { token, user };
    },

    // async saveBook({ user, body }, res) { /*...*/ }
    saveBook: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: input } },
          { new: true }
        );

        return updatedUser;
      }

      throw new GraphQLError('AUTH_NOT_LOGGED_IN');
    },

    // async deleteBook({ user, params }, res) { /*...*/ }
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new GraphQLError('AUTH_NOT_LOGGED_IN');
    },
  },
};

module.exports = resolvers;
