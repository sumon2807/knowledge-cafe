import React, { useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';

const App = () => {
  const [readTime, setReadTime]=useState([0]);
 const handleReadTime=(time)=>{
  const previousTime=JSON.parse(localStorage.getItem('readTime'));
  if(previousTime){
    const totalTime=previousTime + time;
    console.log(totalTime);
    localStorage.setItem('readTime', totalTime);
    setReadTime(totalTime);
  }
  else{
    localStorage.setItem('readTime', time);
    setReadTime(time);
  }
 }
  return (
    <div>
        <Header></Header>
        <div className='flex mt-24 justify-between'>
          <div className="card-container">
            <Card handleReadTime={handleReadTime}></Card>
          </div>
          <div className="side-card ">
            <SideCard readTime={readTime}></SideCard>
          </div>
        </div>
    </div>
  );
};

export default App;