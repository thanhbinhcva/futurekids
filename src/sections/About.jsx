import React from "react";

const About = () => {
    return (
        <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
        justify-between items-start gap-[50px]" id="about">
            <div className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
                <h1 className="text-red-500 text-2xl"> CHÀO MỪNG BẠN ĐẾN VỚI</h1>
                <h1 className="text-white uppercase text-[40px] font-bold">dịch vụ vận chuyển của chúng tôi</h1>
                <div className="w-[120px] h-[6px] bg-red-500"></div>
                <p className="text-3xl italic text-gray-50 mt-[60px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui repellendus aliquid corrupti cumque ratione vitae accusantium. Eligendi sapiente expedita eum omnis quidem consequatur, dolorum error distinctio cumque vero quaerat saepe.</p>
            </div>
            <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6">
                <p className="text-white text-lg text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit molestias sunt cumque nihil nobis blanditiis eveniet numquam vitae aliquam. Nobis accusantium harum, sit nulla non esse id exercitationem aliquam dignissimos.</p>
                <button className="bg-red-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black">
                    TÌM HIỂU THÊM
                </button>
            </div>
        </div>
    )
}
 export default About