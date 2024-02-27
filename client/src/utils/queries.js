import { gql } from '@apollo/client';

//query to fetch all users
export const ALL_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      workout {
        _id
        name
        image
      }
      exercise {
        _id
        name
        sets
        reps
        duration_minutes
      }
    }
  }`;

//query to fetch a single user by ID
export const SINGLE_USER = gql`
  query singleUser {
    user(id: $userId: ID!) {
      _id
      username
      email
       workout {
         _id
        name
        image
      }
      exercise {
         _id
        name
        sets
        reps
        duration_minutes
      }
    }
  }`;

//query to fetch all workouts
export const ALL_WORKOUTS = gql`
  query allWorkouts {
    workouts {
      _id
      name
      image
      exercise {
        _id
        name
        sets
        reps
        duration_minutes
      }
    }
  }`;

//query to fetch single workout by ID
export const SINGLE_WORKOUT = gql`
  query singleWorkout($workoutId: ID!) {
    workout(id: $workoutId) {
      _id
      name
      image
      exercise {
        _id
        name
        sets
        reps
        duration_minutes
      }
    }
  }`;

//query to fetch all exercises
export const ALL_EXERCISES = gql`
  query allExercises {
    exercises {
      _id
      name
      sets
      reps
      duration_minutes
      workout_type {
        _id
        name
      }
    }
  }`;

//query to fetch single exercise by ID
export const SINGLE_EXERCISE = gql`
  query singleExercise($exerciseId: ID!) {
    exercise(id: $exerciseId) {
      _id
      name
      sets
      reps
      duration_minutes
      workout_type {
        _id
        name
      }
    }
  }`;