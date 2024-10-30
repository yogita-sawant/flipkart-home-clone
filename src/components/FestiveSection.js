import React from 'react';

const dealsData = [
    {
        id: 1,
        imageUrl: '/images/best-fest/2.png',
    },
    {
        id: 2,
        imageUrl: '/images/best-fest/3.jpg',
    },
    {
        id: 3,
        imageUrl: '/images/best-fest/4.jpg',
    },
    {
        id: 4,
        imageUrl: '/images/best-fest/5.jpg',
    },
    {
        id: 5,
        imageUrl: '/images/best-fest/6.jpg',
    },
    {
        id: 6,
        imageUrl: '/images/best-fest/7.jpg',
    },
    {
        id: 7,
        imageUrl: '/images/best-fest/8.jpg',
    },
    {
        id: 8,
        imageUrl: '/images/best-fest/9.jpg',
    },
    {
        id: 9,
        imageUrl: '/images/best-fest/10.jpg',
    },
    {
        id: 10,
        imageUrl: '/images/best-fest/11.jpg',
    },
    {
        id: 11,
        imageUrl: '/images/best-fest/12.jpg',
    },
    {
        id: 12,
        imageUrl: '/images/best-fest/13.jpeg',
    },
];

const FestiveSection = () => {
    return (
        <section className="bg-gray-200 py-10 px-4">
            <div className="relative">
                <img
                    src='/images/best-fest/1.jpg'
                    alt='Festive Title'
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {dealsData.map(deal => (
                    <div
                        key={deal.id}
                        className="relative bg-white text-purple-900 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                        <img
                            src={deal.imageUrl}
                            alt={`Deal ${deal.id}`}
                            className="w-full h-full object-cover transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FestiveSection;
