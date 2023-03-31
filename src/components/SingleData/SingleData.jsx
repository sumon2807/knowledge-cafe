import React from 'react';

const SingleData = ({info, handleReadTime}) => {
    const {id, author_name, author_img, blog_title, cover_img, publishDate, total_time}=info;

    return (
        <div>
            <div className="card bg-base-100 shadow-2xl mx-8 my-4">
                <figure><img className='h-[400px] w-[900px]' src={cover_img} alt="" /></figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className="about flex justify-center items-center">
                            <img className='w-[65px] h-[55px] rounded-full' src={author_img} alt="" />
                            <div className='ml-4'>
                                <h2 className="font-semibold">{author_name}</h2>
                                <p>{publishDate}</p>
                            </div>
                        </div>
                        <div className="bookmark flex">
                            <p><span>{total_time}</span> min read</p>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <h2 className="card-title">{blog_title}</h2>
                    <div className="card-actions">
                    <button onClick={()=>handleReadTime(total_time)} className='underline text-sky-400 hover:text-error'>Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;