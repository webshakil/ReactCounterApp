import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './App.css';

const App=()=>{
  const [count, setCount]= useState(0)
  return(
    <div className="container my-5">
      <div className="card my-5">
        <div className="card-body text-center">
         
          <div className="my-5">
            <h2 className="my-5">{`You have clicked the button ${count} times`}</h2>
            <button className="btn btn-primary mx-3" onClick={()=>setCount(count+1)}><PlusOutlined /></button>
            <button className="btn btn-danger mx-3" onClick={()=>(count>0 ? setCount(count-1): setCount(0))}><MinusOutlined /></button>
           
            

            <button className="btn btn-secondary mx-3"onClick={()=>setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
