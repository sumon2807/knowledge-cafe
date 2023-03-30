import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [information, setInformation] =useState([])

    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setInformation(data))
    }, [])
    return (
        <div>
            {
                information.map(info=>{
                    console.log(info);
                    return <SingleData info={info}></SingleData>
                })
            }
        </div>
    );
};

export default Card;