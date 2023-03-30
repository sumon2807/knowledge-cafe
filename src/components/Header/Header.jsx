import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between bg-gray-200 h-[70px] items-center px-8'>
                <div>
                    <a href="" className='font-bold text-2xl'><span className='text-purple-700'>Programing</span>-<span className='text-blue-700'>Cafe</span></a>
                </div>
                <div>
                    <a href=""><img className='w-[50px] h-[50px] rounded-full' src="../../../public/images/pro-removebg-preview.png" alt="" /></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;