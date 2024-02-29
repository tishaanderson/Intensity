import React from 'react';
import CardCheckbox from './Checkbox'
import '../styles/Card.css'



const ExerciseCard = ({ exercise }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 exerciseContainer" >

      <div
        className=" exerciseCard max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg"
            src={exercise.image}
            alt="" />
        </div>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {exercise.name}
          </h5>
        </div>
        {exercise.sets && exercise.reps && (
          <ul className="w-full">
            <li
              className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
              Sets: {exercise.sets}
            </li>

            <li
              className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
              Reps: {exercise.reps}
            </li>
          </ul>
        )}
        {exercise.duration_minutes && exercise.duration_minutes > 0 && (
          <ul className="w-full">
            <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
              Minutes: {exercise.duration_minutes}
            </li>

          </ul>
        )}
        <CardCheckbox  label='Add to Your Workout Regimen' className='check-box'/>
      </div>
    </div>
  )
}

export default ExerciseCard;
