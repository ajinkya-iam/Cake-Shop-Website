import {
    Checkbox,
    DatePicker,
    Input,
    InputNumber,
    Select,
    TimePicker,
} from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import "../CustomCss.css";

const BookSection = () => {
    const format = "HH:mm a";
    const [bookCake, setBookCake] = useState(true);
    const [bookSpace, setBookSpace] = useState(false);
    const [takeAway, setTakeAway] = useState(true);
    const [delivery, setDelivery] = useState(false);

    const onChangeBookCake = (e) => {
        setBookCake(e.target.checked);
        setBookSpace(!bookSpace);
    };

    const onChangeBookSpace = (e) => {
        setBookSpace(e.target.checked);
        setBookCake(!bookCake);
    };

    const onChangeTakeAway = (e) => {
        setTakeAway(e.target.checked);
        setDelivery(!delivery);
    };

    const onChangeDelivery = (e) => {
        setDelivery(e.target.checked);
        setTakeAway(!takeAway);
    };

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    const onChangeMobile = (value: number) => {
        console.log("changed", value);
    };

    const onChangeCustomCake = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearchCake = (value) => {
        console.log("search:", value);
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

                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mx-auto mt-10 border-2 border-[#FFCC66] rounded-lg md:w-[800px] w-full p-10">
                    <div>
                        <Input
                            className="w-full hover:border-white hover:border-x-transparent hover:border-t-transparent hover:border-b-[#FFCC66] outline-none bg-transparent text-[#CCC] placeholder-gray-300 border-x-transparent border-t-transparent rounded-none"
                            type="text"
                            placeholder="Name"
                        />
                    </div>

                    <div>
                        <DatePicker
                            className="w-full hover:border-white hover:border-x-transparent hover:border-t-transparent hover:border-b-[#FFCC66] outline-none bg-transparent border-x-transparent border-t-transparent rounded-none"
                            onChange={onChangeDate}
                        />
                    </div>

                    <div>
                        <Input
                            className="w-full hover:border-white hover:border-x-transparent hover:border-t-transparent hover:border-b-[#FFCC66] outline-none bg-transparent text-[#CCC] placeholder-gray-300 border-x-transparent border-t-transparent rounded-none"
                            placeholder="Phone"
                            maxLength={10}
                            onChange={onChangeMobile}
                        />
                    </div>

                    <div>
                        <TimePicker
                            className="w-full hover:border-white hover:border-x-transparent hover:border-t-transparent hover:border-b-[#FFCC66] outline-none bg-transparent text-[#CCC] placeholder-white border-x-transparent border-t-transparent rounded-none"
                            format={format}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mx-auto mt-10 border-2 border-[#FFCC66] rounded-lg md:w-[800px] w-full p-10">
                    <Select
                        showSearch
                        placeholder="Select a Custom Cake Design"
                        optionFilterProp="children"
                        onChange={onChangeCustomCake}
                        onSearch={onSearchCake}
                        className="text-center"
                        filterOption={(input, option) =>
                            (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: "Chocolate Cake",
                                label: "Chocolate Cake",
                            },
                            {
                                value: "Black Forest",
                                label: "Black Forest",
                            },
                            {
                                value: "Strawberry Cake",
                                label: "Strawberry Cake",
                            },
                        ]}
                    />
                </div>

                <div className="flex justify-center items-center space-x-4 mt-8">
                    <Checkbox checked={takeAway} onChange={onChangeTakeAway}>
                        <span className="font-sans font-medium text-[#CDAA7C] capitalize">
                            Take Away
                        </span>
                    </Checkbox>
                    <Checkbox checked={delivery} onChange={onChangeDelivery}>
                        <span className="font-sans font-medium text-[#CDAA7C] capitalize">
                            Delivery
                        </span>
                    </Checkbox>
                </div>

                <div className="grid grid-cols-1 gap-8 mx-auto mt-10 border-2 border-[#FFCC66] rounded-lg md:w-[800px] w-full p-10">
                    <Input
                        className="w-full hover:border-white hover:border-x-transparent hover:border-t-transparent hover:border-b-[#FFCC66] outline-none bg-transparent text-[#CCC] placeholder-gray-300 border-x-transparent border-t-transparent rounded-none"
                        type="text"
                        placeholder="Apartment/Home Name"
                    />

                    <Input
                        className="w-full hover:border-white hover:border-x-transparent hover:border-t-transparent hover:border-b-[#FFCC66] outline-none bg-transparent text-[#CCC] placeholder-gray-300 border-x-transparent border-t-transparent rounded-none"
                        type="text"
                        placeholder="Area/Colony"
                    />

                    <Input
                        className="w-full hover:border-white hover:border-x-transparent hover:border-t-transparent hover:border-b-[#FFCC66] outline-none bg-transparent text-[#CCC] placeholder-gray-300 border-x-transparent border-t-transparent rounded-none"
                        type="text"
                        placeholder="City"
                    />
                </div>

                <div className="flex justify-center mb-16">
                    <button className="border-2 rounded-md border-[#FFCC66] text-white md:w-[340px] w-[250px] py-3 mt-10 uppercase text-sm font-medium hover:bg-white hover:text-black">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookSection;
