import React from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Title from './Components/Title';
import Newarrivels from './Components/Newarrivels';
import Deals from './Components/Deals';
import Navbar2 from './Components/Navbar2';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
     <Navbar2 />
     <Slider />
     <Title />
     <Newarrivels />
     <Deals />
     <Footer />
    </div>
  );
}

export default App;
