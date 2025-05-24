import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidemenu from './components/SideMenu/Sidemenu';
const App = () =>{
  return (
    <>
    <div className='overflow-hidden'>
      <Header/>
    </div>
    <div className='w-full h-full flex justify-center items-center relative'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
          <Sidemenu/>
          <main className='ml-[275px] flex w-[600px] h-full flex-col'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, amet nisi tenetur voluptatibus neque totam recusandae eum ipsam enim? Optio dicta inventore quae corporis ratione reiciendis rerum eius tempore? Blanditiis?</main>
        </div>
  </div>
  </>
  )
}

export default App;