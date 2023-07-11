import React from "react";
import label_1 from "../images/label_1.png";
import { pastries_data } from "../assets/Data";

const PastriesSection = () => {
    return (
        <div className="md:ml-[19%] p-4 flex flex-col justify-center">
            <div className="flex flex-col mt-16 items-center justify-center">
                <h1 className="text-white text-2xl font-sans font-medium">
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
                    <div className="flex">
                        <img
                            src={item.image}
                            className="w-[80px] h-[80px] rounded-full"
                            alt=""
                        />
                        <div className="flex flex-col justify-center ml-4">
                            <h1 className="text-lg font-medium text-white font-sans subpixel-antialiased">
                                {item.cake_name}
                                <span className="font-medium text-base oldstyle-nums">
                                    ...........{item.price}
                                </span>
                            </h1>
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
