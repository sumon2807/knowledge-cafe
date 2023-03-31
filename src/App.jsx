import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';

const App = () => {
 const handleReadTime=(time)=>{
  console.log(time)
 }
  return (
    <div>
        <Header></Header>
        <div className='flex mt-24 justify-between'>
          <div className="card-container">
            <Card handleReadTime={handleReadTime}></Card>
          </div>
          <div className="side-card">
            <SideCard></SideCard>
          </div>
        </div>
    </div>
  );
};

export default App;