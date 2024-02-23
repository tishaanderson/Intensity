const typeDefs = `
  type BodyType{
    _id: ID
    name: String
    exercises: [Exercise]
  
  }

  type Exercise {
    _id: ID
    name: String
    sets: Int
    reps: Int
    duration_minutes: Int
    body_type: [BodyType]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    body_type: [BodyType]
    exercises: [Exercise]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    body_type: [BodyType]
    body_type(id: ID!): BodyType
    exercises: [Exercise]
    exercise(id: ID!): Exercise
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    createBodyType(name: String!, exerciseIds: [ID!]!): BodyType
    createExercise(name: String!, sets: Int!, reps: Int!, duration_minutes: Int): Exercise
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
