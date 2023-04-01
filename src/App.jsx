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
const [showTitle, setShowTitle]=useState([]);
const handleBookMarkTitle=(blogTitle)=>{
  const previousTitle=localStorage.getItem('blogTitle');
  if(previousTitle){
    const newName=JSON.parse(previousTitle);
    newName.push(blogTitle);
    localStorage.setItem('blogTitle', JSON.stringify(newName));
    setShowTitle(newName);
  }
  else{
    localStorage.setItem('blogTitle', JSON.stringify([blogTitle]));
    setShowTitle([blogTitle]);
  }
}

// tostify
const handleTostify=()=>{
  toast("Opps Already Bookmarked!");
};

const [bookmurkCount, setBookMarkCount]=useState([]);
const handleWatchTime=(info)=>{
  console.log(info)
  const newCount=[...bookmurkCount, info];
  
  setBookMarkCount(newCount);
  }

  return (
    <div>
        <Header></Header>
        <div className='flex mt-10 justify-between'>
          <div className="card-container">
            <Card handleReadTime={handleReadTime} handleBookMarkTitle={handleBookMarkTitle} handleWatchTime={handleWatchTime}></Card>
          </div>
          <div className="side-card">
            <SideCard readTime={readTime} showTitle={showTitle} bookmurkCount={bookmurkCount}></SideCard>
          </div>
        </div>
        <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;



// const [read, setRead]=useState('')
//   const previousTitle=JSON.parse(localStorage.getItem('title'));
//   let bookMark=[];
//   const blogTitle={title};
// if(previousTitle){
//   const newBookMark=previousTitle + title;
//   console.log(newBookMark)
//   localStorage.setItem('title', newBookMark)
//   setRead(newBookMark);
// }
// else{
//   bookMark.push(blogTitle);
//   localStorage.setItem('title', JSON.stringify(bookMark));
//   setRead(bookMark);
// }