import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Dùng navigate để chuyển trang
import wedoImage from "../assets/Wedo.avif";
import robotics from "../assets/robotics.png";
import code from "../assets/code.png";
import Scratch from "../assets/Scratch.png";

const roboticsCourses = [
  {
    id: 1,
    title: "Wedo 2.0",
    subtitle: "Start building simple robots",
    author: "GreatStack",
    rating: 0,
    reviews: 0,
    category: "robotics",
    thumbnail: wedoImage,
  },
  {
    id: 2,
    title: "Robotics Level 2",
    subtitle: "Start building simple robots",
    author: "FutureKids",
    rating: 4.5,
    reviews: 120,
    category: "robotics",
    thumbnail: robotics,
  },
  {
    id: 3,
    title: "Intro to Programming",
    subtitle: "Start coding a new project",
    author: "FutureKids",
    rating: 4.5,
    reviews: 120,
    category: "robotics",
    thumbnail: code,
  },
  {
    id: 4,
    title: "Basic & Advance Programming",
    subtitle: "Create your own story",
    author: "FutureKids",
    rating: 4.5,
    reviews: 120,
    category: "robotics",
    thumbnail: Scratch,
  },
];

const RoboticsCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // ⬅️ Hook để điều hướng

  const filteredCourses = roboticsCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseClick = (id) => {
    navigate(`/robotics/${id}`); // ⬅️ Điều hướng đến trang chi tiết
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <p className="text-gray-500 mb-2">
        <span className="text-blue-500">Home</span> / Course List
      </p>

      <h1 className="text-3xl font-bold mb-6">Robotics Courses</h1>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded shadow transition w-full md:w-auto">
          + Tạo khóa học mới
        </button>

        <div className="flex border rounded overflow-hidden w-full md:w-1/2 ml-auto">
          <input
            type="text"
            placeholder="Search robotics courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6">
            Search
          </button>
        </div>
      </div>

      {searchTerm && (
        <div className="bg-gray-100 text-black flex items-center gap-2 px-3 py-2 rounded w-fit mb-4">
          <span>{searchTerm}</span>
          <button
            onClick={() => setSearchTerm("")}
            className="text-red-500 text-xl"
          >
            ×
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)} // ⬅️ Xử lý click
            className="cursor-pointer rounded-lg border shadow-sm overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.subtitle}</p>
              <div className="text-sm mt-2">
                <p className="text-gray-800">{course.author}</p>
                <p className="text-gray-500">
                  {course.rating} ⭐ ({course.reviews})
                </p>
              </div>
            </div>
          </div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="text-gray-500 col-span-full">No courses found.</p>
        )}
      </div>
    </div>
    
  );
};

export default RoboticsCourses;
