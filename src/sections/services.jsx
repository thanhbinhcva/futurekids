import React from "react";
import { Book, FileText, Gamepad2, Scissors } from "lucide-react"; // bạn cần icon thư viện Lucide

const resources = [
  {
    icon: <Book className="w-8 h-8 text-cyan-600" />,
    title: "Lesson Plans",
    description:
      "Free, ready-made lesson plans make it easy to provide meaningful, standards-aligned instruction in both classroom and homeschool settings.",
    button: "Plan my lesson today",
  },
  {
    icon: <FileText className="w-8 h-8 text-cyan-600" />,
    title: "Worksheets",
    description:
      "We've got a worksheet for anything your student is learning! Our printables make it easy to practice everything from handwriting to multiplication to sight words, and much more!",
    button: "Check it out",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-cyan-600" />,
    title: "Games",
    description:
      "Transform study time into an adventure! Sharpen math fluency and learn letters with immersive games like Flipping Pancakes Fractions and Irregular Nouns Ski Race.",
    button: "Play now",
  },
  {
    icon: <Scissors className="w-8 h-8 text-cyan-600" />,
    title: "Activities",
    description:
      "Our curated activities bring topics to life through hands-on science experiments, creative art projects, inspirational writing prompts, and more!",
    button: "Make something now",
  },
];

const LearningLibrary = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Our learning library
        </h2>
        <p className="text-gray-600 text-lg">
          With thousands of digital and printable resources, find the best
          resource for your student.
        </p>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow font-semibold transition">
          Dive right in
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((res, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 bg-cyan-100 p-3 rounded-full">{res.icon}</div>
            <h3 className="text-xl font-bold text-cyan-600 mb-2">{res.title}</h3>
            <p className="text-gray-700 mb-4">{res.description}</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
              {res.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningLibrary;
