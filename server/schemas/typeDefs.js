const typeDefs = `
  type Workout{
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
    workout_type: [Workout]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    workout: [Workout]
    exercises: [Exercise]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    workouts: [Workout]
    workout(id: ID!): Workout
    exercises: [Exercise]
    exercise(id: ID!): Exercise
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    createWorkout(name: String!, exerciseIds: [ID!]!): Workout
    createExercise(name: String!, sets: Int!, reps: Int!, duration_minutes: Int): Exercise
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
