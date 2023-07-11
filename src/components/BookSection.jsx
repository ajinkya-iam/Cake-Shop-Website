import { Checkbox, DatePicker, Input, InputNumber, TimePicker } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import CustomCss from "../CustomCss.css";

const BookSection = () => {
    const format = 'HH:mm';
    const [bookCake, setBookCake] = useState(true);
    const [bookSpace, setBookSpace] = useState(false);

    const onChangeBookCake = (e) => {
        setBookCake(e.target.checked);
        setBookSpace(!bookSpace);
    };

    const onChangeBookSpace = (e) => {
        setBookSpace(e.target.checked);
        setBookCake(!bookCake);
    };

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    const onChangeMobile = (value: number) => {
        console.log("changed", value);
    };

    return (
        <div className="md:ml-[19%] p-4 flex flex-col justify-center">
            <div className="flex flex-col mt-0 items-center justify-center">
                <h1 className="text-white text-2xl font-sans font-medium">
                    <span className="text-3xl font-semibold font-sans uppercase">
                        Celebrate & Book
                    </span>
                </h1>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center items-center space-x-4 mt-8">
                    <Checkbox checked={bookCake} onChange={onChangeBookCake}>
                        <span className="font-sans font-extrabold text-[#CDAA7C] italic capitalize">
                            Book a Cake
                        </span>
                    </Checkbox>
                    <Checkbox checked={bookSpace} onChange={onChangeBookSpace}>
                        <span className="font-sans font-extrabold text-[#CDAA7C] italic capitalize">
                            Book Space at color cube
                        </span>
                    </Checkbox>
                </div>

                <div className="grid grid-cols-2 gap-8 mx-auto mt-10 border-2 border-[#FFCC66] rounded-lg w-[800px] p-10">
                    <div>
                        <Input className="w-full outline-none bg-transparent text-[#CCC] placeholder-white border-x-transparent border-t-transparent rounded-none" type="text" placeholder="Name" />
                    </div>

                    <div>
                        <DatePicker rootClassName={CustomCss} className="w-full outline-none bg-black text-white placeholder-white border-x-transparent border-t-transparent rounded-none" onChange={onChangeDate} />
                    </div>

                    <div>
                        <Input
                            className="w-full outline-none bg-transparent text-[#CCC] placeholder-white border-x-transparent border-t-transparent rounded-none"
                            placeholder="Phone"
                            maxLength={10}
                            onChange={onChangeMobile}
                        />
                    </div>

                    <div>
                        <TimePicker
                            className="w-full outline-none bg-transparent text-[#CCC] placeholder-white border-x-transparent border-t-transparent rounded-none"
                            format={format}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookSection;
