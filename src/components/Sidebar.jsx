import React from "react";
import logo from "../images/color_cube_logo.png";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import twiter from "../images/twiter.png";
import linkedin from "../images/in.png";
import banner_1 from "../images/banner_1.png";
import banner_2 from "../images/banner_2.png";
import banner_3 from "../images/banner_3.png";
import img_1 from "../images/img_1.png";
import img_2 from "../images/img_2.png";
import img_3 from "../images/img_3.png";
import img_4 from "../images/img_4.png";
import delicious from "../images/delicious_name.png";
import cake_1 from "../images/cake_1.png";
import cake_2 from "../images/cake_2.png";
import cake_3 from "../images/cake_3.png";
import cake_4 from "../images/cake_4.png";
import label_1 from "../images/label_1.png";
import label_2 from "../images/label_2.png";
import label_3 from "../images/label_3.png";
import label_4 from "../images/label_4.png";
import celebration_1 from "../images/celebration_1.png";
import celebration_2 from "../images/celebration_2.png";
import celebration_3 from "../images/celebration_3.png";
import celebration_4 from "../images/celebration_4.png";
import celebration_5 from "../images/celebration_5.png";
import celebration_6 from "../images/celebration_6.png";
import selling_1 from "../images/selling_1.png";
import selling_2 from "../images/selling_2.png";
import selling_3 from "../images/selling_3.png";

const Sidebar = () => {
    return (
        <div className="bg-[#333333] h-screen w-full">
            <div className="fixed w-[20%] h-screen p-3 bg-black">
                <img
                    className="w-[90px] h-[90px] object-contain mt-[64px] ml-[24px]"
                    src={logo}
                />
                <ul className="flex flex-col ml-8 mt-10 space-y-10">
                    <li className="cursor-pointer hover:border-b-2 hover:border-white text-[#FF0] text-lg leading-[24px] uppercase">
                        Home
                    </li>
                    <li className="cursor-pointer hover:border-b-2 hover:border-white text-[#FF7F00] text-lg leading-[24px] uppercase">
                        Cakes
                    </li>
                    <li className="cursor-pointer hover:border-b-2 hover:border-white text-[#FF017E] text-lg leading-[24px] uppercase">
                        Pastries
                    </li>
                    <li className="cursor-pointer hover:border-b-2 hover:border-white text-[#0080FF] text-lg leading-[24px] uppercase">
                        Birthday Space
                    </li>
                    <li className="cursor-pointer hover:border-b-2 hover:border-white text-[#7FFFFF] text-lg leading-[24px] uppercase">
                        Order
                    </li>
                    <li className="cursor-pointer hover:border-b-2 hover:border-white text-[#017F01] text-lg leading-[24px] uppercase">
                        Reach Us
                    </li>
                </ul>
                <div className="mt-14">
                    <ul className="flex justify-around">
                        <img
                            className="w-4 h-4 cursor-pointer"
                            src={insta}
                            alt="Instagram"
                        />
                        <img
                            className="w-4 h-4 cursor-pointer"
                            src={fb}
                            alt="Facebook"
                        />
                        <img
                            className="w-4 h-4 cursor-pointer"
                            src={twiter}
                            alt="Twitter"
                        />
                        <img
                            className="w-4 h-4 cursor-pointer"
                            src={linkedin}
                            alt="LinkedIn"
                        />
                    </ul>
                </div>
            </div>
            {/* hero section */}
            <div className="ml-[20%] bg-[#333]">
                <img src={banner_1} className="object-contain" />
                <div className="grid grid-cols-4 gap-8 m-4 bg-[#333]">
                    <div className="relative flex">
                        <img
                            className="w-[350px] object-contain rounded-md"
                            src={img_1}
                        />
                        <div className="bg-black text-white w-14 h-14 items-center absolute rounded-tl-md rounded-br-md bottom-0 right-0">
                            <p className="text-center mt-5">1/2 Kg</p>
                        </div>
                    </div>
                    <div className="relative flex">
                        <img
                            className="w-[350px] object-contain rounded-md"
                            src={img_2}
                        />
                        <div className="bg-black text-white w-14 h-14 items-center absolute rounded-tl-md rounded-br-md bottom-0 right-0">
                            <p className="text-center mt-5">1 Kg</p>
                        </div>
                    </div>
                    <div className="relative flex">
                        <img
                            className="w-[350px] object-contain rounded-md"
                            src={img_3}
                        />
                        <div className="bg-black text-white w-14 h-14 items-center absolute rounded-tl-md rounded-br-md bottom-0 right-0">
                            <p className="text-center mt-5">Pastries</p>
                        </div>
                    </div>
                    <div className="relative flex">
                        <img
                            className="w-[350px] object-contain rounded-md bg-[#333]"
                            src={img_4}
                        />
                        <div className="bg-black text-white w-14 h-14 items-center absolute rounded-tl-md rounded-br-md bottom-0 right-0">
                            <p className="text-center mt-5">Custom</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* offer section */}
            <div className="-mt-10 ml-[20%] bg-[#333] flex flex-col pt-12">
                <div className="bg-black h-1 w-full" />
                <div className="flex justify-around mt-10">
                    <h1 className="w-[200px] text-[70px] font-mono font-medium uppercase text-white text-center">
                        Offer Zone
                    </h1>
                    <img
                        className="w-[500px] h-[220px] object-contain rounded-md"
                        src={banner_2}
                    />
                </div>
                <div className="bg-black h-1 w-full mt-10" />
            </div>

            {/* cake section */}
            <div className="ml-[20%] flex flex-col bg-[#333]">
                <div className="flex flex-col mt-[100px] items-center justify-center">
                    <h1 className="text-white text-2xl font-sans font-medium uppercase">
                        <span className="text-4xl font-semibold font-sans">
                            1/2
                        </span>{" "}
                        KG Cake Section
                    </h1>
                    <img
                        src={delicious}
                        className="mt-2 w-[170px] object-contain"
                        alt=""
                    />
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-24 mt-[80px]">
                        <div>
                            <img
                                src={cake_1}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 1
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img
                                src={cake_2}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 2
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img
                                src={cake_3}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 3
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img
                                src={cake_4}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 4
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-[100px] items-center justify-center">
                    <h1 className="text-white text-2xl font-sans font-medium uppercase">
                        <span className="text-4xl font-semibold font-sans">
                            1
                        </span>{" "}
                        KG Cake Section
                    </h1>
                    <img
                        src={delicious}
                        className="mt-2 w-[170px] object-contain"
                        alt=""
                    />
                    <div className="grid grid-cols-4 gap-24 mt-16">
                        <div>
                            <img
                                src={cake_1}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 1
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img
                                src={cake_2}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 2
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img
                                src={cake_3}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 3
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img
                                src={cake_4}
                                alt=""
                                className="w-[180px] object-contain"
                            />
                            <h1 className="text-white font-sans font-medium mt-4 text-center">
                                Cake Name 4
                            </h1>
                            <div className="border-dashed border-t-2 border-[#CDAA7C] mt-2">
                                <h1 className="text-center font-sans font-medium mt-2 text-white text-xl">
                                    ₹ 500
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-[100px] items-center justify-center">
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
                    <div className="grid grid-cols-2 mt-16 gap-10">
                        <div className="flex">
                            <img
                                src={cake_1}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={cake_2}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={cake_3}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={cake_4}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={cake_4}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={cake_3}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={cake_2}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={cake_1}
                                className="w-[80px] h-[80px] rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col justify-center ml-4">
                                <h1 className="text-2xl font-semibold text-white font-mono">
                                    Cake Name 1
                                    <span className="font-medium text-base">
                                        .................$10
                                    </span>
                                </h1>
                                <p className="text-gray-300 font-sans text-sm">
                                    ingredints/ingredints/ingredints/ingredints
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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

                    <div className="grid grid-cols-4 gap-4 mt-16 p-10">
                        <img
                            src={celebration_1}
                            className="h-full w-full col-span-2 object-fill"
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

                <div className="flex flex-col mt-[100px] items-center justify-center">
                    <h1 className="text-white text-2xl font-sans font-medium">
                        <span className="text-4xl font-semibold font-sans">
                            BEST SELLING FLAVOURS
                        </span>
                    </h1>
                    <img
                        src={label_3}
                        className="mt-2 w-[190px] object-contain"
                        alt=""
                    />
                    <div className="grid grid-cols-3 gap-8 p-10">
                        <img
                            src={selling_1}
                            className="h-[450px] w-[300px] object-contain"
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

                <div className="relative flex mt-3 items-center justify-center">
                    <img
                        src={banner_3}
                        className="w-full h-screen object-contain"
                        alt=""
                    />
                    <img
                        src={label_4}
                        className="absolute w-full h-16 object-contain -mt-[80px]"
                        alt=""
                    />
                    <h1 className="absolute text-[#CCCCCC] font-sans font-medium text-2xl ">
                        Wish You Have a Good MEAL!
                    </h1>
                    <button className="border border-[#CCCCCC] absolute mt-[100px] text-[#CCC] font-sans font-medium uppercase py-2 px-6 rounded-full hover:bg-white hover:text-black">
                        Book Now
                    </button>
                </div>

                <div className="flex flex-col mt-[70px] items-center justify-center">
                    <h1 className="text-white text-2xl font-sans font-medium">
                        <span className="text-4xl font-semibold font-sans uppercase">
                            Book a cake / celebrate at color cube
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
