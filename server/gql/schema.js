// here we define the structure of querys, mutations etc is defined 
const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID
        name: String
        username: String
        email: String
        website: String
        description: String
        password: String
        createdAt: String
    }

    input UserInput {
        name: String!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        # User Data
        getUser: User
    }

    type Mutation {
        # User
        register(input: UserInput): User
    }
`;

module.exports = typeDefs;