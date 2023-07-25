 import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [generateEx , setEx]=useState("")
  const fetchExcuse=(excuses)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuses}/`).then((res)=>{
      setEx(res.data[0].excuse)
    })
  }
  return (
    <div className='container'>
      <h1>Generate Excuse :</h1>
    <button className='btn' onClick={()=>fetchExcuse("family")}>Family</button>
    <button className='btn' onClick={()=>fetchExcuse("party")}>Party</button>
    <button className='btn' onClick={()=>fetchExcuse("funny")}>Funny</button>
    <h4>{generateEx}</h4>
    </div>
   
  );
}

export default App;
