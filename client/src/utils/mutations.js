import { gql } from '@apollo/client';

//mutation to add a new user
export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }`;

//mutation to login a user
export const LOGIN_USER = gql `
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
  }
}`;

//Do we want a mutation to UPDATE a USER??
export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $username: String, $email: String, $password: String) {
    updateUser(id: $userId, username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }`;


//Or to DELETE a USER??

export const DELETE_USER = gql`
  mutation DeleteUser($userId: ID!) {
    deleteUser(id: $userId) {
      _id
      username
      email
    }
  }`;

//mutation to add a workout
export const ADD_WORKOUT = gql`
  mutation AddWorkout($name: String!, $image: String!, $exercise: [ID!]) {
    addWorkout(name: $name, image: $image, exercise: $exercise) {
      _id
      name
      image
    }
  }`;

//UPDATE WORKOUT??

export const UPDATE_WORKOUT = gql`
  mutation UpdateWorkout($workoutId: ID!, $name: String, $image: String,) {
    updateWorkout(id: $workoutId, name: $name, image: $image) {
      _id
      name
      image
    }
  }`;

//DELETE WORKOUT???

export const DELETE_WORKOUT = gql`
mutation DeleteWorkout($workoutId: ID!) {
  deleteWorkout(id: $workoutId) {
    _id
    name
    image
  }
}`;



//mutation to add an exercise
export const ADD_EXERCISE = gql`
  mutation AddExercise($name: String!, $sets: Int!, $reps: Int!, $duration_minutes: Int!, $workout_type: ID!) {
    addExercise(name: $name, sets: $sets, reps: $reps, duration_minutes: $duration_minutes, workout_type: $workout_type) {
      _id
      name
      sets
      reps
      duration_minutes
    }
  }`;

//UDPATE EXERCISE??
export const UPDATE_EXERCISE = gql`
  mutation UpdateExercise($exerciseId: ID!, $name: String, $sets: Int, $reps: Int, $duration_minutes: Int) {
    UpdateExercise(id: $exerciseId, name: $name, sets: $sets, reps: $reps, duration_minutes: $duration_minutes) {
      _id
      name
      sets
      reps
      duration_minutes
    }
  }`;

//DELETE EXERCISE??
export const DELETE_EXERCISE = gql`
  mutation DeleteExercise($exerciseId: ID!) {
    deleteExercise(id: $exerciseId) {
      _id
      name
      sets
      reps
      duration_minutes
    }
  }`;

export const ADD_USER_EXERCISE = gql`
  mutation AddUserExercise($id: ID!) {
    addUserExercise(id: $id) {
      _id
      username
      email
      exercise {
        _id
        name
        sets
        reps
        duration_minutes
        exercise_type
        image
      }
    }
  }`

  // export const REMOVE_USER_EXERCISE = gql`
  // mutation RemoveUserExercise($id: ID!) {
  //   removeUserExercise(id: $id) {
  //     _id
  //     username
  //     email
  //     exercise {
  //       _id
  //       name
  //       sets
  //       reps
  //       duration_minutes
  //       exercise_type
  //       image
  //     }
  //   }
  // }`