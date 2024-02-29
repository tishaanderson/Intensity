// WhyUs.js
import React from 'react';
import WeightedSquats from '/images/background1.jpg';

const WhyUs = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold mb-4 text-white" style={{marginLeft:"25px"}}>Why Us</h1>
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg" style={{textAlign:"justify"}}>
        {/* <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={WeightedSquats}
            alt="Weighted Squats"
            className="w-full h-auto rounded-lg"
          />
        </div> */}
        <div className="md:w-3/4 text-gray-800">
          <p className="text-lg mb-4 text-black">
          Welcome to Intensity – Where Your Fitness Journey Finds its Perfect Match!
          </p>
          <p className="text-lg mb-4 text-black">
          At Intensity, we understand that achieving your fitness goals requires more than just a generic workout routine; it demands personalized guidance and a connection with the right coach. That's why we've created a unique platform that goes beyond traditional fitness apps. Here's why Intensity stands out:
          </p>
          <p className="text-lg mb-4">
            <strong>Tailored Fitness Solutions:</strong> At Intensity, we believe in the power of personalized workouts. Our platform connects individuals with experienced trainers who specialize in crafting custom fitness plans based on your unique goals, preferences, and fitness levels. Say goodbye to one-size-fits-all routines and embrace a workout plan designed just for you.
          </p>
          <p className="text-lg mb-4">
            <strong>Expert Trainers, Your Partners in Success:</strong> We take pride in our diverse team of certified and passionate fitness experts. Our trainers are not just instructors; they are your partners in your fitness journey. Whether you're aiming for weight loss, muscle gain, or overall well-being, our trainers are here to guide, motivate, and support you every step of the way.
          </p>
          <div className="mb-4 md:mb-0">
          <img
            src={WeightedSquats}
            alt="Weighted Squats"
            className="w-full h-auto rounded-lg"
          />
          </div>
          <p className="text-lg mb-4">
            <strong>Seamless Matching Process:</strong> Finding the right coach shouldn't be a hassle. Our advanced matching algorithm ensures a seamless and efficient process. Simply input your fitness goals, preferences, and any specific requirements you may have, and let Intensity pair you with the perfect trainer who aligns with your objectives and coaching style preferences.
          </p>
          <p className="text-lg mb-4">
            <strong>Flexible Training Options:</strong> We understand that everyone's schedule is different. With Intensity, you have the flexibility to choose between in-person sessions, virtual training, or a combination of both. Access your workouts anytime, anywhere, and stay committed to your goals without compromising on your lifestyle.
          </p>
          <p className="text-lg mb-4">
            <strong>Community Support:</strong> Intensity is more than just a workout platform; it's a community of like-minded individuals striving for excellence. Connect with fellow users, share your successes, and draw inspiration from others on similar fitness journeys. The Intensity community is here to uplift and motivate you throughout your transformation.
          </p>
          <p className="text-lg mb-4">
            <strong>Continuous Progress Tracking:</strong> Track your progress effortlessly with our integrated tracking tools. Monitor your achievements, celebrate milestones, and make data-driven adjustments to your fitness plan. Our goal is to empower you with the tools and insights needed to make lasting improvements to your health and fitness.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
