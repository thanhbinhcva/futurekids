import React from "react";
import robotImg from "../assets/wedo-removebg-preview.png"; // ảnh bạn vừa tải lên

const Contact = () => {
  return (
    <div id="contact" className="bg-white w-full relative overflow-hidden">
      {/* Hình ảnh tràn bên phải */}
      <img
        src={robotImg}
        alt="Robot"
        className="absolute bottom-0 right-0 w-[120%] md:w-[60%] max-w-none z-0 translate-x-1/4 translate-y-[1%]"
      />

      <div className="relative z-10 max-w-[90%] lg:max-w-[80%] mx-auto py-[60px] flex flex-col lg:flex-row items-start gap-[50px]">
        {/* Nội dung bên trái (tiêu đề + form) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* Tiêu đề */}
          <div className="flex flex-col gap-6">
            <h1 className="text-black uppercase text-[32px] lg:text-[40px] font-bold leading-snug">
              HÃY GỌI ĐẾN SỐ CỦA TRUNG TÂM NẾU BẠN CÓ BẤT CỨ CÂU HỎI NÀO
            </h1>
            <div className="w-[120px] h-[6px] bg-cyan-500"></div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Enter Fullname"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            ></textarea>
            <button className="bg-cyan-500 hover:bg-cyan-600 hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full">
              GỬI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
