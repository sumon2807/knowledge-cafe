import React from 'react';

const Header = () => {
    return (
        <div className='px-8'>
            <nav className='flex justify-between h-[70px] items-center'>
                <div>
                    <a href="" className='font-bold text-2xl'><span className='text-purple-700'>Programing</span>-<span className='text-blue-700'>Hub</span></a>
                </div>
                <div>
                    <a href=""><img className='w-[50px] h-[50px] rounded-full' src="../../../public/images/pro-removebg-preview.png" alt="" /></a>
                </div>
            </nav>
            <hr className='border-gray-300'/>
        </div>
    );
};

export default Header;