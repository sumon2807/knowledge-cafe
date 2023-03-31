import React from 'react';

const SideCard = () => {
    return (
        <div className='mx-8 p-8 border-2 h-full bg-slate-300'>
            <div className="calculate-total-time border-2 p-4 mb-4">
                <h1 className='font-bold'>Spent time on read : 177 min</h1>
            </div>
            <div className="calculate-total-time border-2 p-4">
                <h1 className='font-bold'>Bookmarked Blogs : 8</h1>
            </div>
        </div>
    );
};

export default SideCard;