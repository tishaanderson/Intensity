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
  }


  type Query {
    workouts: [Workout]
    workout(id: ID!): Workout
    exercises: [Exercise]
    exercise(id: ID!): Exercise
  }

  type Mutation {
    createWorkout(name: String!, exerciseIds: [ID!]!): Workout!
    createExercise(name: String!, sets: Int!, reps: Int!, duration_minutes: Int): Exercise!
  }
`;

module.exports = typeDefs;
