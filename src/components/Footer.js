import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#292626] text-gray-400">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-1 pt-[40px] pl-[60px]">
                    <div className='p-4'>
                        <h2 className="font-normal mb-2 text-left text-[#878787] text-[12px]">ABOUT</h2>
                        <ul className="text-left">
                            <li><a href="#" className="font-semibold text-white text-[12px]">Contact Us</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">About Us</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Careers</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Flipkart Stories</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Press</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Corporate Information</a></li>
                        </ul>
                    </div>
                    <div className='p-4'>
                        <h2 className="font-normal mb-2 text-left text-[#878787] text-[12px]">GROUP COMPANIES</h2>
                        <ul className="text-left">
                            <li><a href="#" className="font-semibold text-white text-[12px]">Myntra</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Cleartrip</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Shopsy</a></li>
                        </ul>
                    </div>
                    <div className='p-4'>
                        <h2 className="font-normal mb-2 text-left text-[#878787] text-[12px]">HELP</h2>
                        <ul className=" text-left">
                            <li><a href="#" className="font-semibold text-white text-[12px]">Payments</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Shipping</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Cancellation & Returns</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">FAQ</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Report Infringement</a></li>
                        </ul>
                    </div>
                    <div className='p-4'>
                        <h2 className="font-normal mb-2 text-left text-[#878787] text-[12px]">CONSUMER POLICY</h2>
                        <ul className="text-left">
                            <li><a href="#" className="font-semibold text-white text-[12px]">Cancellation & Returns</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Terms Of Use</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Security</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Privacy</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Sitemap</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">Grievance Redressal</a></li>
                            <li><a href="#" className="font-semibold text-white text-[12px]">EPR Compliance</a></li>
                        </ul>
                    </div>

                    <div className='p-4'>
                        <h2 className="font-normal mb-2 text-left text-[#878787] text-[12px]">Mail Us:</h2>
                        <p className="text-white text-left font-semibold text-white text-[12px]">
                            Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia &<br />
                            Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,<br />
                            Bengaluru, 560103,<br />
                            Karnataka, India
                        </p>
                    </div>

                    <div className='p-4'>
                        <h2 className="font-normal mb-2 text-left text-[#878787] text-[12px]">Registered Office Address:</h2>
                        <p className="text-white font-semibold text-white text-[12px] text-left">
                            Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia &<br />
                            Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,<br />
                            Bengaluru, 560103,<br />
                            Karnataka, India<br />
                            CIN: U51109KA2012PTC066107<br />
                            Telephone: 044-45614700 / 044-67415800
                        </p>
                    </div>
                </div>
                <div className='w-full border-t border-gray-700 flex justify-center'>
                    <div className="w-11/12 grid grid-cols-7 items-center py-[25px] gap-x-1">
                        <a href="#" className="flex items-center justify-center font-semibold text-white text-[12px] space-x-2">
                            <img src="/images/footer/1.svg" alt="Become a Seller Icon" className="w-4 h-4" />
                            <span>Become a Seller</span>
                        </a>
                        <a href="#" className="flex items-center justify-center font-semibold text-white text-[12px] space-x-2">
                            <img src="/images/footer/2.svg" alt="Advertise Icon" className="w-4 h-4" />
                            <span>Advertise</span>
                        </a>
                        <a href="#" className="flex items-center justify-center font-semibold text-white text-[12px] space-x-2">
                            <img src="/images/footer/3.svg" alt="Gift Cards Icon" className="w-4 h-4" />
                            <span>Gift Cards</span>
                        </a>
                        <a href="#" className="flex items-center justify-center font-semibold text-white text-[12px] space-x-2">
                            <img src="/images/footer/4.svg" alt="Help Center Icon" className="w-4 h-4" />
                            <span>Help Center</span>
                        </a>
                        <a href="#" className="flex items-center justify-center font-semibold text-white text-[12px] space-x-2">
                            <span>&copy; 2007-2024 Flipkart.com</span>
                        </a>
                        <a href="#" className="flex items-center justify-center font-semibold text-white text-[12px] col-span-2">
                            <img src="/images/payment.svg" alt="Payment Icon" className="w-full" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
