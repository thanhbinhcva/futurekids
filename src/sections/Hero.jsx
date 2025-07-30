import React, { useState, useEffect } from "react";
import ship from "../assets/ship.jpg";
import ship2 from "../assets/ship2.jpg";
import ship3 from "../assets/ship3.jpg";

const images = [ship, ship2, ship3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="hero"
      className="w-full lg:h-[700px] h-fit pt-[60px] lg:pt-0 px-5 lg:px-[100px] flex items-center justify-center bg-center bg-no-repeat bg-cover relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Lớp phủ mờ */}
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0"></div>

      {/* Wrapper content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 py-10">
        {/* Nội dung bên trái */}
        <div className="text-white text-center lg:text-left max-w-2xl flex-1 space-y-6">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-baloo font-bold mb-4 leading-tight">
            Từ ý tưởng đến hành động – Vẽ mơ ước, lắp tương lai
         </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition shadow-md">
              Tìm hiểu thêm
            </button>
            <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-full text-white font-semibold transition shadow-md">
              Liên hệ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
