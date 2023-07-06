import React from 'react';
import './App.css';
import Footer from './common/Footer';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './common/Navbar';
import NotFound from './components/NotFound';
import BooksRoute from './components/BooksRoute';


function App() {
  return (
    <div className="App w-screen h-screen custom-background p-4 text-secondary-color text-xl">
      <div className="container mx-auto">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/books' element={<BooksRoute />}></Route>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        <Footer />

      </div>
    </div>
  );
}

export default App;
