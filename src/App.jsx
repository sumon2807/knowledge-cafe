import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
        <Header></Header>
        <div className='mt-24'>
          <Card></Card>
        </div>
    </div>
  );
};

export default App;