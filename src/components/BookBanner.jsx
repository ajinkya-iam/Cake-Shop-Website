import React from "react";
import banner_3 from "../images/banner_3.png";

const BookBanner = () => {
    return (
        <div className="md:ml-[19%] p-4 -mt-8 flex flex-col justify-center">
            <div className="relative flex mt-3 items-center justify-center">
                <img
                    src={banner_3}
                    className="w-full h-screen md:object-contain object-cover"
                    alt=""
                />
                <button className="border border-[#CCCCCC] absolute md:mt-[140px] -mt-[220px] text-[#CCC] font-sans font-medium uppercase py-2 px-6 rounded-full hover:bg-white hover:text-black">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BookBanner;
