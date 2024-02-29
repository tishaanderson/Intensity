import React from 'react';
import CardCheckbox from './Checkbox'
import '../styles/ExerciseCard.css'



const ExerciseCard = ({ exercise }) => {

  return (
    <div className="m-8 mx-8" >

      <div
        className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
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
          <h5>ID: {exercise._id}</h5>
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
        <CardCheckbox className='checkbox' label='Add to Your Workout Regimen' />
      </div>
    </div>
  )
}

export default ExerciseCard;
