import React from 'react'
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ALL_WORKOUTS } from '../utils/queries';


const WorkoutCard = () => {
  const { loading, data } = useQuery(ALL_WORKOUTS);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 workoutContainer'>
      {loading ? <div>loading...</div> : data.workouts.map((workout) => (
        <div className="workoutCard max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={workout.id}>
          <a href="#">
            <img className="rounded-t-lg" alt={workout.name} src={workout.image} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{workout.name}</h5>
            </a>
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p> */}
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/exercise-detail/${workout._id}`}>
              See more</Link>
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkoutCard
