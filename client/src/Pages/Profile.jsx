import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { USER_PROFILE } from "../utils/queries";
import ExerciseCard from "../components/ExerciseCard";
import "../styles/Card.css"

const Profile = () => {
  const { loading, data } = useQuery(USER_PROFILE);
  console.log(data)

  return (
    <div className="relative flex min-h-screen flex-col  overflow-hidden sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-1">
      <div className="max-w-sm rounded overflow-hidden  ">
        <div className="bg-white shadow-md rounded px-10 pt-12 pb-16 mb-8">
          <div className="font-bold text-xl mb-2">
            {/* Welcome {user.username} */}
            {data?.user.username}
          </div>
          <p className="text-gray-700 text-base">
            "Sometimes the smallest step in the right direction ends up being
            the biggest step of your life. Tiptoe if you must, but take a step"
          </p>
        </div>
      </div>

      <div className="bg-slate-200/50 shadow-md rounded px-5 pt-5 pb-5 mb-8">
        <div className="font-bold text-xl mb-2 ">Users Exercise Plan:</div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="selectedCard">
            {
              data?.user.exercise.map((exercise) => (
                <div key={exercise._id}>
                  <ExerciseCard exercise={exercise} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
