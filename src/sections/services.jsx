import React from "react";
import { allservices } from "../export.js";

const Services = () => {
    return (
        <div id="services" className="w-full bg-white">
            <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]">
                <h1 className="text-red-500 text-2xl">DỊCH VỤ ĐẶC BIỆT</h1>
                <h1 className="text-black uppercase text-[40px] font-bold text-center">NHỮNG DỊCH VỤ TỐT NHẤT CỦA CHÚNG TÔI</h1>
                <div className="w-[120px] h-[6px] bg-red-500"></div>
                <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]"> 
                    {
                    allservices.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-5 p-8 text-center shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                        <item.icon className="w-[70px] h-[70px] text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-lg p-4 transition-all duration-300" />
                        <h2 className="text-xl font-bold text-black">{item.title}</h2>
                        <p className="text-gray-500">{item.about}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
 export default Services