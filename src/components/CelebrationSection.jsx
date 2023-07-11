import React from "react";
import label_2 from "../images/label_2.png";
import celebration_1 from "../images/celebration_1.png";
import celebration_2 from "../images/celebration_2.png";
import celebration_3 from "../images/celebration_3.png";
import celebration_4 from "../images/celebration_4.png";
import celebration_5 from "../images/celebration_5.png";
import celebration_6 from "../images/celebration_6.png";

const CelebrationSection = () => {
    return (
        <div className="md:ml-[19%] p-4 flex flex-col justify-center">
            <div className="flex flex-col mt-[100px] items-center justify-center">
                <h1 className="text-white text-2xl font-sans font-medium">
                    <span className="text-4xl font-semibold font-sans">
                        CELEBRATION
                    </span>
                </h1>
                <img
                    src={label_2}
                    className="mt-2 w-[130px] object-contain"
                    alt=""
                />

                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-16">
                    <img
                        src={celebration_1}
                        className="h-full w-full col-span-2 object-fill hidden md:block"
                        alt=""
                    />
                    <img
                        src={celebration_2}
                        className="h-full w-full col-start-3 object-fill"
                        alt=""
                    />
                    <img
                        src={celebration_3}
                        className="h-full w-full row-span-2 object-fill"
                        alt=""
                    />
                    <img
                        src={celebration_4}
                        className="h-full w-full col-start-1 object-fill"
                        alt=""
                    />
                    <img
                        src={celebration_5}
                        className="h-full w-full object-fill"
                        alt=""
                    />
                    <img
                        src={celebration_6}
                        className="h-full w-full object-fill"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default CelebrationSection;
