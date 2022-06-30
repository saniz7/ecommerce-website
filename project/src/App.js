import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar  from './Component/Navbar';
import Register from './Component/Register';
// import Footer from './Component/Footer';
import Home from './Component/Home';
import Login from './Component/Login';
import Productdescription from './Component/Productdescription';
function App() {
  return (
  
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/productdescription/:id' element={<Productdescription/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      
  );
}

export default App;
