import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './common/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './common/Navbar';


function App() {
  return (
    <div className="App w-screen h-screen bg-main-background">
      <div className="container mx-auto">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/work' element={<Work />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
          {/* <Contact /> */}
        <Footer />

      </div>
    </div>
  );
}

export default App;
