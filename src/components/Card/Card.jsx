import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = ({handleReadTime, handleBookMarkTitle, handleWatchTime}) => {
    const [information, setInformation] =useState([])
    
    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setInformation(data))
    }, [])
    return (
        <div>
            {
                information.map(info=> <SingleData 
                    info={info} 
                    key={info.id}
                    handleReadTime={handleReadTime}
                    handleBookMarkTitle={handleBookMarkTitle}
                    ></SingleData>)
            }
        </div>
    );
};

export default Card;








// const previousBookMark=JSON.parse(localStorage.getItem("bookMark"));
//   console.log(previousBookMark)
//   let bookMark=[];
//   const content={id,blog_title,total_time,bookMark:true};
//   if(previousBookMark){
//       const isBookMark=previousBookMark.find(mark=>mark.id==id);
//      if(isBookMark){
//       handleTostify();
//      }
//      else{
//       bookMark.push(...previousBookMark, content);
//       localStorage.setItem('bookMark', JSON.stringify(bookMark));
//      }
//   }
//   else{
//       bookMark.push(content);
//       localStorage.setItem('bookMark', JSON.stringify(bookMark));
//   }