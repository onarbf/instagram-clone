export default `
  type User{
    _id: ID!
    username: String!
    password: String!
  }
  type Query{
    getUsers : [User]!
    getUser(_id: ID!): User!
  }
  type Mutation{
    createUser(username: String!, password: String!): User!
  }
`;
