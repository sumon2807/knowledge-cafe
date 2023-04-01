import React from 'react';

const SideCard = ({readTime, showTitle, bookmurkCount}) => {
    return (
        <div className='mr-8 p-4 border-2 h-full bg-slate-300 relative'>
            <div className='sticky top-0'>
                <h1 className='font-bold border-2 p-4 mb-4 text-info'>Spent time on read : {readTime} min</h1>
                <h1 className='font-bold border-2 p-4'>Bookmarked Blogs :{bookmurkCount.length} </h1>
                <p>{showTitle}</p>
            </div>
        </div>
    );
};

export default SideCard;


