import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
const typeDefs = `#graphql
type Movie {
  id: Int
  title: String
  year: Int
}
  type Query {
    movies: [Movie]
    movie: Movie
  }
  type Mutation {
    createMovie(title: String!):Boolean
    deleteMovie(title:String!): Boolean
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    movies: () => [],
    movie: () => ({ title: "Hello", year: 2021 }),
  },
  Mutation: {
    createMovie: (_, { title }) => {
      console.log(title);
      return true;
    },
    deleteMovie: (_, { title }) => {
      console.log(title);
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
