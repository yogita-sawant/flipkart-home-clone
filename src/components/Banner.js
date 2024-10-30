import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const categories = [
        {
            name: "Top Offers",
            icon: "/images/header/1.jpg",
            dropdown: [
                { label: "Deals of the Day" },
                { label: "Flash Sales" },
                { label: "Clearance Offers" }
            ]
        },
        {
            name: "Mobiles & Tablets",
            icon: "/images/header/2.jpg",
            dropdown: [
                { label: "Smartphones" },
                { label: "Tablets" },
                { label: "Mobile Accessories" },
                { label: "Wearables" }
            ]
        },
        {
            name: "TVs & Appliances",
            icon: "/images/header/3.jpg",
            dropdown: [
                { label: "Smart TVs" },
                { label: "Refrigerators" },
                { label: "Washing Machines" },
                { label: "Air Conditioners" }
            ]
        },
        {
            name: "Electronics",
            icon: "/images/header/4.jpg",
            dropdown: [
                { label: "Headphones & Earphones" },
                { label: "Smart Watches" },
                { label: "Cameras" },
                { label: "Power Banks" }
            ]
        },
        {
            name: "Fashion",
            icon: "/images/header/5.jpg",
            dropdown: [
                { label: "Men's Clothing" },
                { label: "Women's Clothing" },
                { label: "Kid's Fashion" },
                { label: "Footwear" }
            ]
        },
        {
            name: "Beauty",
            icon: "/images/header/6.jpg",
            dropdown: [
                { label: "Skincare" },
                { label: "Makeup" },
                { label: "Hair Care" },
                { label: "Fragrances" }
            ]
        },
        {
            name: "Home & Kitchen",
            icon: "/images/header/7.jpg",
            dropdown: [
                { label: "Cookware & Dining" },
                { label: "Bedding & Furnishings" },
                { label: "Home Decor" },
                { label: "Furniture" }
            ]
        },
        {
            name: "Furniture",
            icon: "/images/header/8.jpg",
            dropdown: [
                { label: "Living Room" },
                { label: "Bedroom" },
                { label: "Office Furniture" },
                { label: "Outdoor Furniture" }
            ]
        },
        {
            name: "Travel",
            icon: "/images/header/9.jpg",
            dropdown: [
                { label: "Flights" },
                { label: "Hotels" },
                { label: "Holiday Packages" },
                { label: "Train Tickets" }
            ]
        },
        {
            name: "Grocery",
            icon: "/images/header/10.jpg",
            dropdown: [
                { label: "Fruits & Vegetables" },
                { label: "Snacks & Beverages" },
                { label: "Dairy Products" },
                { label: "Household Essentials" }
            ]
        },
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
    };

    const banners = [
        {
            img: "/images/home-banner/1.jpg",
            title: "Big Billion Day Sale",
            description: "Up to 60% Off on Top Brands",
            button: "Shop Now"
        },
        {
            img: "/images/home-banner/2.jpg",
            title: "Diwali Dhamaka",
            description: "Get Extra Discounts on Everything",
            button: "Explore Offers"
        },
        {
            img: "/images/home-banner/3.jpeg",
            title: "Diwali Dhamaka",
            description: "Get Extra Discounts on Everything",
            button: "Explore Offers"
        },
        {
            img: "/images/home-banner/4.jpg",
            title: "Diwali Dhamaka",
            description: "Get Extra Discounts on Everything",
            button: "Explore Offers"
        },
        {
            img: "/images/home-banner/5.jpg",
            title: "Diwali Dhamaka",
            description: "Get Extra Discounts on Everything",
            button: "Explore Offers"
        },
        {
            img: "/images/home-banner/7.jpg",
            title: "Diwali Dhamaka",
            description: "Get Extra Discounts on Everything",
            button: "Explore Offers"
        },
        {
            img: "/images/home-banner/8.jpeg",
            title: "Diwali Dhamaka",
            description: "Get Extra Discounts on Everything",
            button: "Explore Offers"
        },
    ];

    return (
        <div className="w-full mt-16 bg-gray-200">
            <div className='pt-8 pb-4 px-4'>
                <div className="flex justify-center bg-white p-2 gap-4">
                    {categories.map((category, index) => (
                        <div className="relative group mx-3 text-center">
                            <div className="relative cursor-pointer">
                                <div className="flex justify-center items-center text-2xl p-2 rounded-lg hover:bg-gray-200 transition-transform duration-300">
                                    <img src={category.icon} alt='' className='w-16 h-16 rounded-lg' />
                                </div>
                                <span className="block mt-2 text-sm font-semibold">{category.name}</span>
                            </div>

                            {category.dropdown && (
                                <div className="hidden group-hover:block absolute left-1/2 transform -translate-x-1/2 translate-y-2 bg-white shadow-lg rounded-lg py-2 px-4 z-50 w-48 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                    {category.dropdown.length > 0 && (
                                        <a href="#" className="flex items-center space-x-2 py-2 px-3 rounded-md transition-all">
                                            <span className="text-sm text-blue-700 font-semibold text-left">{category.dropdown[0].label}</span>
                                        </a>
                                    )}
                                    {category.dropdown.slice(1).map((item, i) => (
                                        <a href="#" key={i} className="flex items-center space-x-2 py-2 px-3 hover:bg-gray-100 rounded-md transition-all">
                                            <span className="text-sm text-black font-semibold text-left">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                    ))}
                </div>
            </div>

            <div className="relative overflow-hidden pb-2 px-4">
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div key={index} className="relative h-full cursor-pointer">
                            <img src={banner.img} alt={banner.title} className="object-cover" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banner;
