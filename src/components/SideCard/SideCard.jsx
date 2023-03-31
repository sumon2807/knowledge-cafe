import React from 'react';

const SideCard = ({readTime}) => {
    
    return (
        <div className='mx-8 p-8 border-2 h-full bg-slate-300 relative'>
            <div className='sticky top-28'>
                <h1 className='font-bold border-2 p-4 mb-4'>Spent time on read : {readTime}</h1>
                <h1 className='font-bold border-2 p-4'>Bookmarked Blogs : 8</h1>
            </div>
        </div>
    );
};

export default SideCard;