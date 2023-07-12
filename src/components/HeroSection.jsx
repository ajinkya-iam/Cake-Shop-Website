import React from "react";
import banner_1 from "../images/banner_1.png";
import { hero_data } from "../assets/Data";

const HeroSection = () => {
    return (
        <div className="md:ml-[19%] md:mt-0 mt-14 bg-black h-full">
            <img src={banner_1} className="md:object-contain object-center rounded-md p-4" />
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-4 gap-2 m-4 bg-black">
                {hero_data.map((item) => (
                    <div className="relative flex">
                        <img className="object-contain rounded-md" src={item.image} />
                        <div className="bg-black text-white w-14 h-14 items-center absolute rounded-tl-md bottom-0 right-0">
                            <p className="text-center mt-5">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
