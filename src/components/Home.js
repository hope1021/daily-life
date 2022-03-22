import React from 'react';
import AxiosSpring from './AxiosSpring';
import Card from './Card';
import './Home.css';

function Home(props) {
  return (
    <div className='colum'>
      <h1>홈 입니다</h1>
      <div className='btnContainer low'>
        <button className='btn'>실시간</button>
        <button className='btn'>공감순</button>
        <button className='btn'>조회순</button>
      </div>
      <div className='cardContainer low'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default Home;