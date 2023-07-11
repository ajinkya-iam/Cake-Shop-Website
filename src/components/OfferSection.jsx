import React from "react";
import banner_2 from "../images/banner_2.png";

const OfferSection = () => {
    return (
        <div className="md:ml-[19%] p-4 -mt-10 bg-black flex flex-col pt-12">
            <div className="bg-black h-1 w-full" />
            <div className="md:flex md:justify-around md:items-center grid grid-cols-1 mt-10">
                <h1 className="md:w-[200px] text-[45px] font-sans font-medium subpixel-antialiased  uppercase text-white text-center">
                    Offer Zone
                </h1>
                <img
                    className="md:w-[500px] object-contain rounded-md"
                    src={banner_2}
                />
            </div>
            <div className="bg-black h-1 w-full mt-10" />
        </div>
    );
};

export default OfferSection;
