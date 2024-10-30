import React, { useState, useEffect } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { BsCart3, BsShopWindow } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
    const [searchPlaceholder, setSearchPlaceholder] = useState("Search for Products, Brands, and More");
    const placeholderTexts = ["Search Mobiles...", "Search TVs...", "Search Beauty Products..."];

    useEffect(() => {
        const interval = setInterval(() => {
            setSearchPlaceholder(prev => {
                const currentIndex = placeholderTexts.indexOf(prev);
                return placeholderTexts[(currentIndex + 1) % placeholderTexts.length];
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    return (
        <nav className="fixed w-full top-0 z-10 bg-white shadow-md">
            <div className="flex justify-center items-center p-4 gap-8">
                <div className="flex items-center">
                    <img src="/images/flipkart-logo.svg" alt="Flipkart" className="w-44" />
                </div>

                <input
                    id="search-bar"
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-1/2 py-2 px-4 rounded-lg border border-gray-300"
                />

                <div className="flex gap-12">
                    <div className="flex items-center gap-2 cursor-pointer"><FaRegCircleUser size={20} /> Login</div>
                    <div className="flex items-center gap-2 cursor-pointer"><BsCart3 size={20} /> Cart</div>
                    <div className="flex items-center gap-2 cursor-pointer"><BsShopWindow size={20} />Become a Seller</div>
                    <div className="flex items-center cursor-pointer"><CiMenuKebab size={15} /></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
