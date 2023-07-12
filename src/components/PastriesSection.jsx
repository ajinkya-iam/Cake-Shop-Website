import React from "react";
import label_1 from "../images/label_1.png";
import { pastries_data } from "../assets/Data";

const PastriesSection = () => {
    return (
        <div className="md:ml-[19%] p-4 flex flex-col">
            <div className="flex flex-col mt-16 items-center justify-center">
                <h1 className="text-white text-2xl text-center font-sans font-medium">
                    <span className="text-4xl font-semibold font-sans uppercase">
                        PASTRIES
                    </span>
                </h1>
                <img
                    src={label_1}
                    className="mt-2 w-[200px] object-contain"
                    alt=""
                />
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-10 mx-auto">
                {pastries_data.map((item) => (
                    <div className="flex w-full justify-around items-center mx-auto">
                        <img
                            src={item.image}
                            className="w-[80px] h-[80px] rounded-full"
                            alt=""
                        />
                        <div className="ml-4 space-y-2">
                            <div className="flex">
                                <h1 className="flex flex-col md:text-lg text-base font-medium text-white font-sans subpixel-antialiased">
                                    {item.cake_name}
                                </h1>
                                <h2 className="oldstyle-nums w-auto  font-medium text-white">......{item.price}</h2>
                            </div>
                            <p className="text-gray-300 font-sans text-sm">
                                {item.ingredients}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PastriesSection;
