import React, { useRef, useState } from 'react';
import logo from "../images/logo.png";
import pure_veg from "../images/pure_veg.png";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import twiter from "../images/twiter.png";
import linkedin from "../images/in.png";
import menu from "../images/menu.png";
import close from "../images/close.png";
import HeroSection from './HeroSection';
import OfferSection from './OfferSection';
import CakeSection from './CakeSection';
import PastriesSection from './PastriesSection';
import BestSellingFlavour from './BestSellingFlavour';
import BookBanner from './BookBanner';
import BookSection from './BookSection';
import ThankYouSection from './ThankYouSection';
import CelebrationSection from './CelebrationSection';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleMenuItemClick = (section) => {
        setNav(false);
        scrollComponentRef(section);
    };

    const scrollComponentRef = (menu) => {
        const refMap = {
            home: homeRef,
            cakes: cakesRef,
            pastries: pastriesRef,
            birthdaySpace: birthdaySpaceRef,
            order: orderRef,
            reachUs: reachUsRef,
        };
        const componentRef = refMap[menu];
        componentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const homeRef = useRef(null);
    const cakesRef = useRef(null);
    const pastriesRef = useRef(null);
    const birthdaySpaceRef = useRef(null);
    const orderRef = useRef(null);
    const reachUsRef = useRef(null);

    return (
        <div className="bg-black h-full flex">
            <div className={`hidden md:fixed md:flex flex-col items-center border-2 border-[#FFCC66] rounded-md m-4 w-[17%] h-screen mb-10 p-3
             bg-black ${nav ? "block" : "hidden"}`}>

            </div>
            {/* md:w-[60%] */}
            <div className={`w-[17%] bg-black fixed z-50 px-6 md:relative ${nav ? "-left-full md:left-0" : "flex"}`}>
                {/* <div className="md:hidden flex justify-start gap-6 items-center h-14 ">
                    <img
                        src={menu}
                        onClick={handleNav}
                        className="w-[24px] object-contain cursor-pointer"
                        alt="Menu"
                    />
                    <p className="text-white text-lg font-serif italic font-bold">Color Cube</p>
                </div> */}
                {!nav && <div className="block w-full h-14 bg-neutral-950 fixed z-50 px-6 -ml-6 md:hidden">
                    <div className="flex justify-start gap-6 items-center h-full">
                        <img
                            src={menu}
                            onClick={handleNav}
                            className="w-7 object-contain"
                            alt=""
                        />
                        <p className="text-white text-lg font-serif italic font-bold">Color Cube</p>
                    </div>
                </div>}
                <div className='hidden md:fixed md:flex flex-col items-center border-2 border-[#FFCC66] rounded-md m-4 w-[17%] h-screen mb-10 p-3 bg-black'>
                    <img
                        className="w-full h-[41px] object-contain mt-4"
                        src={pure_veg}
                        alt="Pure Veg"
                    />
                    <img
                        className="w-full h-[90px] object-contain mt-10 ml-[24px]"
                        src={logo}
                        alt="Logo"
                    />
                    <ul className="flex flex-col mt-10 space-y-8">
                        <li
                            onClick={() => handleMenuItemClick("home")}
                            className="text-center cursor-pointer active hover:border-b-2 hover:border-white text-[#FF0] text-lg leading-[24px] uppercase"
                        >
                            Home
                        </li>
                        <li
                            onClick={() => handleMenuItemClick("cakes")}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#FF7F00] text-lg leading-[24px] uppercase"
                        >
                            Cakes
                        </li>
                        <li
                            onClick={() => handleMenuItemClick("pastries")}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#FF017E] text-lg leading-[24px] uppercase"
                        >
                            Pastries
                        </li>
                        <li
                            onClick={() => handleMenuItemClick("birthdaySpace")}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#0080FF] text-lg leading-[24px] uppercase"
                        >
                            Birthday Space
                        </li>
                        <li
                            onClick={() => handleMenuItemClick("order")}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#7FFFFF] text-lg leading-[24px] uppercase"
                        >
                            Order
                        </li>
                        <li
                            onClick={() => handleMenuItemClick("reachUs")}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#017F01] text-lg leading-[24px] uppercase"
                        >
                            Reach Us
                        </li>
                    </ul>
                    <button
                        onClick={() => handleMenuItemClick("bookCake")}
                        className="border-2 rounded-md border-[#FFCC66] text-white w-[140px] py-1 mt-10 uppercase text-sm font-medium hover:bg-white hover:text-black"
                    >
                        Book a Cake
                    </button>
                    <div className="mt-8 pb-2">
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

            <div className={`fixed ${nav ? "left-0" : "-left-full"} top-0 w-[60%] h-full md:w-[40%] ease-in-out duration-500`}>
                <div className="flex flex-col items-start h-full p-6 space-y-8 border-2 border-[#FFCC66] rounded-md m-4 p-3 bg-black">
                    <div className="flex items-center justify-between w-full">
                        <img
                            className="w-[120px] h-auto object-contain"
                            src={logo}
                            alt="Logo"
                        />
                        <img
                            className="w-[24px] h-auto object-contain"
                            src={close}
                            alt="Logo"
                            onClick={handleNav}
                        />
                    </div>

                    <ul className="flex flex-col mt-10 space-y-8">
                        <li
                            onClick={() => {
                                handleMenuItemClick("home");
                                handleNav();
                            }}
                            className="text-center cursor-pointer active hover:border-b-2 hover:border-white text-[#FF0] text-lg leading-[24px] uppercase"
                        >
                            Home
                        </li>
                        <li
                            onClick={() => {
                                handleMenuItemClick("cakes");
                                handleNav();
                            }}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#FF7F00] text-lg leading-[24px] uppercase"
                        >
                            Cakes
                        </li>
                        <li
                            onClick={() => {
                                handleMenuItemClick("pastries");
                                handleNav();
                            }}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#FF017E] text-lg leading-[24px] uppercase"
                        >
                            Pastries
                        </li>
                        <li
                            onClick={() => {
                                handleMenuItemClick("birthdaySpace");
                                handleNav();
                            }}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#0080FF] text-lg leading-[24px] uppercase"
                        >
                            Birthday Space
                        </li>
                        <li
                            onClick={() => {
                                handleMenuItemClick("order");
                                handleNav();
                            }}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#7FFFFF] text-lg leading-[24px] uppercase"
                        >
                            Order
                        </li>
                        <li
                            onClick={() => {
                                handleMenuItemClick("home");
                                handleNav();
                            }}
                            className="text-center cursor-pointer hover:border-b-2 hover:border-white text-[#017F01] text-lg leading-[24px] uppercase"
                        >
                            Reach Us
                        </li>
                    </ul>

                    <button
                        className="border-2 rounded-md border-[#FFCC66] text-white w-[140px] py-1 uppercase text-sm font-medium hover:bg-white hover:text-black"
                        onClick={() => handleMenuItemClick("bookCake")}
                    >
                        Book a Cake
                    </button>

                    <div className="flex justify-center space-x-4">
                        <img className="w-6 h-6 cursor-pointer" src={insta} alt="Instagram" />
                        <img className="w-6 h-6 cursor-pointer" src={fb} alt="Facebook" />
                        <img className="w-6 h-6 cursor-pointer" src={twiter} alt="Twitter" />
                        <img className="w-6 h-6 cursor-pointer" src={linkedin} alt="LinkedIn" />
                    </div>
                </div>
            </div>

            <div>
                {/* Render the active menu component */}
                <div ref={homeRef}>
                    <HeroSection />
                    <OfferSection />
                </div>
                <div ref={cakesRef}>
                    <CakeSection />
                </div>
                <div ref={pastriesRef}>
                    <PastriesSection />
                </div>
                <div ref={birthdaySpaceRef}>
                    <CelebrationSection />
                    <BestSellingFlavour />
                    <BookBanner />
                </div>
                <div ref={orderRef}>
                    <BookSection />
                </div>
                <div ref={reachUsRef}><ThankYouSection /></div>
            </div>

        </div>
    );
};

export default Navbar;
