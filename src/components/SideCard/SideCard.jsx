import React from 'react';

const SideCard = ({readTime, blogTitle, bookmurkCount}) => {
    
    return (
        <div className='mr-8 p-4 border-2 border-purple-700 h-full bg-slate-200 relative rounded-xl'>
            <div className='sticky top-0'>
                <h1 className='font-bold border border-purple-700 p-4 mb-4 text-info rounded'>Spent time on read : {readTime} min</h1>
                
                <h1 className='font-bold border border-purple-700 p-4 rounded'>Bookmarked Blogs : {bookmurkCount.length}</h1>
                    {
                        blogTitle.map(title=> <p className='bg-slate-50 m-4 py-4 pl-4 rounded'>{title}</p>)
                    }
            </div>
        </div>
    );
};

export default SideCard;

