import React from "react";
import banner_1 from "../images/banner_1.png";
import { hero_data } from "../assets/Data";

const HeroSection = () => {
    return (
        <div className="md:ml-[19%] md:mt-0 mt-14 bg-black h-full">
            <img src={banner_1} className="md:object-contain object-center rounded-md p-4" />
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-4 gap-2 m-4 bg-black">
                {hero_data.map((item) => (
                    <div className="flex w-full px-10 border-2 border-[#FFCC66] rounded-md py-2 items-center justify-center space-x-4">
                        <img className="object-contain w-[43px] h-[43px]" src={item.image} />
                        <p className="font-sans text-white text-xl">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
