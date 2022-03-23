import React from 'react';
import AxiosSpring from './AxiosSpring';
import BoardList from './BoardList';
import Card from './Card';
import './Home.css';

function Home({data}) {

  console.log(data)

  return (
    <div className='colum'>

      <BoardList></BoardList>
      {/* <div className='cardContainer low'>
        {
          data.map((item, i)=>{
            return <Card data={item}/>
          })
        }
      </div> */}
    </div>
  );
}

export default Home;