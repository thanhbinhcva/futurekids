import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="bg-white w-full">
            <div className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]">
                <div className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6">
                    <h1 className="text-red-500 text-2xl">LIÊN HỆ</h1>
                    <h1 className="text-black uppercase text-[40px] font-bold">HÃY GỌI ĐẾN SỐ CỦA TỔNG ĐÀI KHI BẠN CÓ BẤT CỨ CÂU HỎI NÀO</h1>
                    <div className="w-[120px] h-[6px] bg-red-500"></div>
                    <h1 className="text-3xl italic text-gray-600 mt-[60px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id. Nam repellendus nihil iure, cupiditate dolores consequatur ipsam beatae delectus molestiae</h1>
                </div>
                   <form action="" className="flex flex-col justify-center items-start gap-4 w-full">
                        <input type="text" placeholder="Enter Fullname" className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"/>
                        <input type="email" placeholder="Enter Email" className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full" />
                        <input type="number" placeholder="Enter Mobile Number" className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full" />
                        <textarea name="" id="" placeholder="Enter your message" rows="4" className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"></textarea>
                        <button className="bg-red-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full">GUI</button>
                    </form>
            </div>
        </div>
    )
}
 export default Contact