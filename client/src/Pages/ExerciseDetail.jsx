import { useEffect, useState } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { ALL_EXERCISES, SINGLE_WORKOUT } from '../utils/queries'


const ExerciseDetail = () => {
  const { id } = useParams();
  const [exercises, setExercises] = useState([]);
  const { loading, data } = useQuery(ALL_EXERCISES)
  const { loading: workoutLoading, data: workoutData } = useQuery(SINGLE_WORKOUT, {
    variables: { workoutId: id }
  });

  useEffect(() => {
    if (data && workoutData) {
      const filteredExercises = data.exercises.filter((exercise) => exercise.exercise_type === workoutData.workout.name)
      setExercises(filteredExercises)
    }
  }, [loading, workoutLoading])

  return (
    <div>
      {exercises.map(exercise => (
        <ExerciseCard exercise={exercise} />
      ))}
    </div>
  )
}

export default ExerciseDetail
