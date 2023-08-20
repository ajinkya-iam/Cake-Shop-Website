import React from "react";
import label_3 from "../images/label_3.png";
import selling_1 from "../images/selling_1.png";
import selling_2 from "../images/selling_2.png";
import selling_3 from "../images/selling_3.png";

const BestSellingFlavour = () => {
    return (
        <div className="md:ml-[19%] p-4 flex flex-col justify-center">
            <div className="flex flex-col mt-[100px] items-center justify-center">
                <h1 className="text-white text-2xl text-center font-sans font-medium">
                    <span className="text-4xl font-semibold text-center font-sans">
                        BEST SELLING FLAVOURS
                    </span>
                </h1>
                <img
                    src={label_3}
                    className="mt-2 w-[190px] object-contain"
                    alt=""
                />

                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 p-10">
                    <img
                        src={selling_1}
                        className="h-[450px] w-[300px] object-contain hover:saturate-150 transition delay-150 duration-300 ease-in-out"
                        alt=""
                    />
                    <img
                        src={selling_2}
                        className="h-[450px] w-[300px] object-contain"
                        alt=""
                    />
                    <img
                        src={selling_3}
                        className="h-[450px] w-[300px] object-contain"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default BestSellingFlavour;
