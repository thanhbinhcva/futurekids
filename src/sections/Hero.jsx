import React, { useState, useEffect } from "react";
import ship from "../assets/ship.jpg";
import ship2 from "../assets/ship2.jpg";
import ship3 from "../assets/ship3.jpg";
import shipper from "../assets/shipper.png"; // hình shipper

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
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0"></div>

      {/* Wrapper content: Trái - Phải */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8">
        {/* Trái: Nội dung */}
        <div className="text-white text-center lg:text-left max-w-xl flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Vận chuyển nhanh chóng, <br /> an toàn
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Chúng tôi cung cấp dịch vụ vận tải uy tín hàng đầu Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">
              Tìm hiểu thêm
            </button>
            <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded text-white font-semibold transition">
              Liên hệ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
