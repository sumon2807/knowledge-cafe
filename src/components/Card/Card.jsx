import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = ({handleReadTime}) => {
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
                    ></SingleData>)
            }
        </div>
    );
};

export default Card;