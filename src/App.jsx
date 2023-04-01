import React, { useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SideCard from './components/SideCard/SideCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
const handleBookMarkTitle=(blogTitle,info,id)=>{
  const newCount=[...bookmurkCount, info];
  setBookMarkCount(newCount);
  const previousTitle=localStorage.getItem('blogTitle');
  if(previousTitle){
    const newName=JSON.parse(previousTitle);
    newName.push(blogTitle);
    localStorage.setItem('blogTitle', JSON.stringify(newName));
    setBlogTitle(newName);

    handleTostify(id);
  }
  else{
    localStorage.setItem('blogTitle', JSON.stringify([blogTitle]));
    setBlogTitle([blogTitle]);
  }
}

// tostify
const handleTostify=(id)=>{
  toast("Already Bookmarked..! Thanks");
};

  return (
    <div>
        <Header></Header>
        <div className='flex mt-10 justify-between'>
          <div className="card-container">
            <Card handleReadTime={handleReadTime} handleBookMarkTitle={handleBookMarkTitle}></Card>
          </div>
          <div className="side-card">
            <SideCard 
            readTime={readTime} 
            blogTitle={blogTitle}
            bookmurkCount={bookmurkCount}
            ></SideCard>
          </div>
        </div>
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
