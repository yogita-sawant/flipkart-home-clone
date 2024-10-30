import React, { useRef, useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const DealsSection = () => {
    const deals = [
        { id: 1, name: 'Samsung Watch 6 LTE', imageUrl: '/images/premium-prod/1.jpeg', price: 'From ₹17,499', discount: '₹19,999' },
        { id: 2, name: 'Oppo Earbuds', imageUrl: '/images/premium-prod/2.jpeg', price: 'From ₹1,299', discount: '₹1,999' },
        { id: 3, name: 'Acer QLED TV', imageUrl: '/images/premium-prod/3.jpeg', price: 'From ₹49,999', discount: '₹55,000' },
        { id: 4, name: 'Samsung Watch 6 LTE', imageUrl: '/images/premium-prod/4.jpeg', price: 'From ₹17,499', discount: '₹19,999' },
        { id: 5, name: 'Samsung Watch 6 LTE', imageUrl: '/images/premium-prod/5.jpeg', price: 'From ₹17,499', discount: '₹19,999' },
        { id: 6, name: 'Samsung Watch 6 LTE', imageUrl: '/images/premium-prod/6.jpeg', price: 'From ₹17,499', discount: '₹19,999' },
    ];

    const imageUrls = [
        '/images/premium-prod/7.jpeg',
        '/images/premium-prod/8.jpeg',
    ];

    const carouselRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [imageUrls.length]);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="px-4 flex gap-1">
            <div className="h-[70%] bg-white">
                <h2 className="text-2xl font-bold p-4 text-start">Premium Products</h2>
                <div className="relative">
                    <div ref={carouselRef} className="flex space-x-6 overflow-hidden pl-2">
                        {deals.slice(0, 6).map((deal, index) => (
                            <div
                                key={deal.id}
                                className={`mb-8 bg-white p-2 rounded-md shadow-md border border-gray-200 hover:shadow-lg transform transition-transform duration-200 ${index === 5 ? 'min-w-[100px]' : 'min-w-[200px] hover:scale-105'
                                    }`}
                            >
                                <img
                                    src={deal.imageUrl}
                                    alt={deal.name}
                                    className="w-full h-40 object-contain mb-4 rounded"
                                />
                                <h3 className="text-md font-medium">{deal.name}</h3>
                                <p className="text-lg font-semibold text-green-600 mt-1">{deal.price}</p>
                                {deal.discount && <p className="text-sm text-gray-500 line-through">{deal.discount}</p>}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={scrollRight}
                        className="absolute right-[15px] top-[-50px] mt-2 bg-blue-700 p-2 rounded-full shadow-lg hover:bg-blue-700 z-10 text-white"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="">
                <img
                    src={imageUrls[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full h-full object-fill mb-4 rounded"
                />
            </div>
        </div>
    );
};

export default DealsSection;
