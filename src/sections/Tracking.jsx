import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 thêm dòng này
import Warehouse from "../assets/Warehouse.jpg";
import { GiCardboardBox } from "react-icons/gi";

const Tracking = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const navigate = useNavigate(); // 👈 hook để điều hướng

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingCode.trim()) return alert("Vui lòng nhập mã kiện hàng!");

    // 👇 điều hướng đến trang tracking với mã đơn hàng
    navigate(`/tracking/${trackingCode.trim()}`);
  };

  return (
    <div
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
      id="about"
    >
      <div
        className="lg:w-[50%] w-full h-[400px] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${Warehouse})`,
        }}
      ></div>

      <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-6">
        <h1 className="text-2xl text-white sm:text-3xl lg:text-4xl font-bold leading-tight flex items-center gap-3">
          <GiCardboardBox className="text-red-400 text-4xl" />
          Theo dõi đơn hàng của bạn
        </h1>
        <form
          onSubmit={handleTrack}
          className="w-full flex flex-col sm:flex-row gap-4"
        >
          <input
            type="text"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            placeholder="Nhập mã kiện hàng"
            className="flex-1 px-4 py-3 rounded-lg text-black text-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-bold text-black"
          >
            THEO DÕI
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tracking;
