import React from "react";
import delicious from "../images/delicious_name.png";

import { half_kg_cake_data } from "../assets/Data";

const CakeSection = () => {
    return (
        <div className="md:ml-[19%] p-4 flex flex-col justify-center">

            {/* 1/2 kg section */}
            <div className="flex flex-col items-center justify-center mt-16">
                <h1 className="text-white text-2xl font-sans font-medium uppercase">
                    <span className="text-4xl font-semibold font-sans oldstyle-nums">
                        1/2
                    </span>{" "}
                    KG Cake Section
                </h1>
                <img
                    src={delicious}
                    className="mt-2 w-[170px] object-contain"
                />
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-24 mt-[80px]">
                {half_kg_cake_data.map((item) => (
                    <div className="flex flex-col justify-center items-center hover:bg-neutral-900 hover:rounded-md py-2 cursor-pointer">
                        <img
                            src={item.image}
                            alt=""
                            className="w-[180px] object-contain"
                        />
                        <h1 className="text-white font-sans font-medium mt-4 text-center">
                            {item.cake_name}
                        </h1>
                        <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                            <h1 className="text-center font-sans font-medium mt-2 oldstyle-nums text-white text-xl">
                                {item.price}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* 1 Kg section */}
            <div className="flex flex-col items-center justify-center mt-16">
                <h1 className="text-white text-2xl font-sans font-medium uppercase">
                    <span className="text-4xl font-semibold font-sans oldstyle-nums">
                        1
                    </span>{" "}
                    KG Cake Section
                </h1>
                <img
                    src={delicious}
                    className="mt-2 w-[170px] object-contain"
                />
            </div>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-24 mt-[80px]">
                {half_kg_cake_data.map((item) => (
                    <div className="flex flex-col justify-center items-center hover:bg-neutral-900 hover:rounded-md py-2 cursor-pointer">
                        <img
                            src={item.image}
                            alt=""
                            className="w-[180px] object-contain"
                        />
                        <h1 className="text-white font-sans font-medium mt-4 text-center">
                            {item.cake_name}
                        </h1>
                        <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                            <h1 className="text-center font-sans font-medium mt-2 oldstyle-nums text-white text-xl">
                                {item.price}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CakeSection;
