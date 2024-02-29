import React from 'react';
import CardCheckbox from './Checkbox'
import '../styles/Card.css'
import { Checkbox } from "@material-tailwind/react";
import { useState } from 'react';
import { useMutation  } from '@apollo/client';
import { ADD_USER_EXERCISE } from '../utils/mutations';


const ExerciseCard = ({ exercise }) => {
  // const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(false);
  const [addUserExercise, {error}] = useMutation(ADD_USER_EXERCISE);
  const handleCheck = async(e) => {
    console.log(e.target);
    console.log(e.target.value)
    console.log(e.target.checked)
    setIsChecked((prev) => !prev)
    try {
      if (e.target.checked) {
        const { data } = await addUserExercise({ 
          variables : {id: e.target.value}
         });
         console.log(data.addUserExercise)
      }
      // if (!e.target.checked) {
      //   //run mutation that removes exercise from user
      //   const { data } = await removeUserExercise({ 
      //     variables : {id: e.target.value}
      //    });
      //    console.log(data.removeUserExercise)
      // }
    } catch (error) {
      console.error(error)
    }
  } 
  return (

<div className='specificCard'>
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
      <div className="checkbox-wrapper">
        <label>
          <span>{isChecked ? 'Exercise Added!' : 'Add to Your Workout Regimen' }</span>
          <input className={isChecked ? "checked" : ""} type="checkbox" checked={isChecked} onChange={handleCheck} value={exercise._id}/>

        </label>
      </div>
    </div>
</div>
    
  )
}

export default ExerciseCard;
