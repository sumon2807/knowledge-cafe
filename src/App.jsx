import React, { useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Other/Question';

const App = () => {
  // spent to reading total time
  const [readTime, setReadTime]=useState([0]);
  const handleReadTime=(time)=>{
  const previousTime=JSON.parse(localStorage.getItem('readTime'));
  if(previousTime){
    const totalTime=(previousTime + time);
    localStorage.setItem('readTime', totalTime);
    setReadTime(totalTime);
  }
  else{
    localStorage.setItem('readTime', time);
    setReadTime(time);
  }
 }


// handle bookmark button
const [bookmurkCount, setBookMarkCount]=useState([]);
const [blogTitle, setBlogTitle]=useState([]);

const handleBookMarkTitle=(blogTitle, id)=>{
  const newCount=[...bookmurkCount, id];
  setBookMarkCount(newCount);
  const previousTitle=localStorage.getItem('blogTitle');
  if(previousTitle){
    const newName=JSON.parse(previousTitle);
    newName.push(blogTitle);
    localStorage.setItem('blogTitle', JSON.stringify(newName));
    setBlogTitle(newName);
    handleTostify();
  }
  else{
    localStorage.setItem('blogTitle', JSON.stringify([blogTitle]));
    setBlogTitle([blogTitle]);
  }
}

// tostify
const handleTostify=()=>{
  toast("Already Bookmarked..! Thanks");
};

  return (
    <div>
        <div className="header">
            <Header></Header>
        </div>


        <div className='flex mt-8'>
        <div className='w-3/4'>
          <Card handleReadTime={handleReadTime} handleBookMarkTitle={handleBookMarkTitle}></Card>
          </div>
          <div className='w-1/4'>
          <SideCard 
            readTime={readTime} 
            blogTitle={blogTitle}
            bookmurkCount={bookmurkCount}
            ></SideCard>
          </div>
        </div>









        <div className='grid lg:grid-cols-2 mt-10 justify-between'>
          
        </div>
        <div className='other'>
              <Question></Question>
          </div>
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
