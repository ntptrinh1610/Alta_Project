import React, { useState } from 'react';
import logo from './logo.svg';
import Topic1 from './component/Topic1';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Test from './component/Test';
import Topic2b from './component/Topic2b';
import Login from './component/Login';
import Dashboard from './pages/dashboard';

function App() {
  const [index,setIndex]=useState(1);
  const receiveIndex=(index:number)=>{
    setIndex(index);
  }

  return (
    <div>
      {/* <Header />
      <Topic1 /> 
      <Footer /> */}
      {/* <Test/> */}
      {/* <Topic2b /> */}
      {
        localStorage.getItem('username')!=null?
        <Dashboard/>:
        index==1?
        <Login handleLogin={receiveIndex} /> : <Dashboard/>
      }
    </div>
  );
}

export default App;
