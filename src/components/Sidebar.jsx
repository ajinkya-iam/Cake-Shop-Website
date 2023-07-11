import React from "react";
import logo from "../images/logo.png";
import pure_veg from "../images/pure_veg.png";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import twiter from "../images/twiter.png";
import linkedin from "../images/in.png";

const Sidebar = () => {
    return (
        <div className="bg-black">
            <div className="hidden md:fixed md:flex flex-col items-center border-2 border-[#FFCC66] rounded-md m-4 w-[17%] h-screen p-3 bg-black">
                <img
                    className="w-full h-[41px] object-contain mt-4"
                    src={pure_veg}
                />
                <img
                    className="w-full h-[90px] object-contain mt-10 ml-[24px]"
                    src={logo}
                />
                <ul className="flex flex-col mt-10 space-y-8">
                    <li className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#FF0] text-lg leading-[24px] uppercase">
                        Home
                    </li>
                    <li className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#FF7F00] text-lg leading-[24px] uppercase">
                        Cakes
                    </li>
                    <li className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#FF017E] text-lg leading-[24px] uppercase">
                        Pastries
                    </li>
                    <li className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#0080FF] text-lg leading-[24px] uppercase">
                        Birthday Space
                    </li>
                    <li className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#7FFFFF] text-lg leading-[24px] uppercase">
                        Order
                    </li>
                    <li className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#017F01] text-lg leading-[24px] uppercase">
                        Reach Us
                    </li>
                </ul>

                <button className="border-2 rounded-md border-[#FFCC66] text-white w-[140px] py-1 mt-10 uppercase text-sm font-medium hover:bg-white hover:text-black">
                    Book a Cake
                </button>

                <div className="mt-4">
                    <ul className="flex justify-between space-x-4">
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
        </div>
    );
};

export default Sidebar;
