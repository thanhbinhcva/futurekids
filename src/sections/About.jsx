import React from "react";
import lessonImg from "../assets/wedo.jpg";
import assignImg from "../assets/wedo2.jpg";
import robotImg from "../assets/wedo.png";      // Góc trên trái
import spyImg from "../assets/spy.png";         // Góc dưới phải
import miloImg from "../assets/milo.png";       // Góc trên phải
import controllerImg from "../assets/controller.png"; // Góc dưới trái

const FeatureSection = () => {
  return (
    <section className="bg-[#ffe2d5] py-16 px-4 md:px-12 relative overflow-hidden">
      {/* Góc trên trái */}
      <img
        src={robotImg}
        alt="Robot"
        className="absolute top-0 left-0 w-40 md:w-56 z-0"
      />

      {/* Góc trên phải */}
      <img
        src={miloImg}
        alt="Milo"
        className="absolute top-0 right-0 w-64 md:w-72 z-0"
      />

      {/* Góc dưới trái */}
      <img
        src={controllerImg}
        alt="Controller"
        className="absolute bottom-0 left-0 w-64 md:w-72 z-0"
      />

      {/* Góc dưới phải */}
      <img
        src={spyImg}
        alt="Spy character"
        className="absolute bottom-0 right-0 w-64 md:w-72 z-0"
      />

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Unlock every student's true potential
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          A premium membership gives you unlimited access to all of our resources and tools like playlists of guided lessons, progress insights for each student, and more!
        </p>
      </div>

      {/* Descriptions & Overlapping Images */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 relative z-10">
        {/* Left Description */}
        <div className="max-w-sm text-right md:text-left text-gray-800 mr-28">
          <h3 className="text-2xl font-semibold mb-2">Guided Lessons</h3>
          <p className="text-gray-600">
            Follow our expertly-designed pathways of fun games<br />
            that help learners practice and build upon skills<br />
            in math, reading, writing, and typing!
          </p>
        </div>

        {/* Overlapping Images */}
        <div className="relative w-64 h-64 flex-shrink-0">
          <img
            src={lessonImg}
            alt="Guided Lessons"
            className="w-64 h-auto rounded-xl shadow-lg z-10 relative right-[56%]"
          />
          <img
            src={assignImg}
            alt="Support"
            className="w-64 h-auto rounded-xl shadow-lg absolute left-[64%] -translate-x-1/2 top-20 z-0"
          />
        </div>

        {/* Right Description */}
        <div className="max-w-sm text-left text-gray-800 ml-8">
          <h3 className="text-2xl font-semibold mb-2">Smart Insights</h3>
          <p className="text-gray-600">
            View analytics that help track progress and optimize teaching strategies.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center relative z-10">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow font-semibold transition">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
