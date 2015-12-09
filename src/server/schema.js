import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql/type';
 
import data from '../../data/data.json';

// Define our user type, with two string fields; `id` and `name`
var userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

// Define our schema, with one top level field, named `user`, that
// takes an `id` argument and returns the User with that ID.

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: function (_, args) {
          return data[args.id];
        }
      }
    }
  })
});

export default schema;