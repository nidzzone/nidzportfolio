import React from 'react'
import './App.css'

import Brand from './components/brand/Brand'
import Navbar from './components/navbar/Navbar'

import {  Features, Footer, Header, Projects } from './containers'

function App() {


  return (


   <div className="App"> 
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>

    <Brand />

    <div className="gradient__bg">
    <Projects />
    </div>

    <Features />
   
  
    <Footer />

   </div> 

)}

export default App;
