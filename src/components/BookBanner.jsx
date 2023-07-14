import React from "react";
import banner_3 from "../images/banner_3.png";

const BookBanner = () => {
    return (
        <div className="md:ml-[19%] p-4 -mt-8 flex flex-col justify-center">
            <div className="flex mt-3 items-center justify-center">
                <img
                    src={banner_3}
                    className="w-full h-screen md:object-contain object-cover"
                    alt=""
                />
            </div>
        </div>
    );
};

export default BookBanner;
