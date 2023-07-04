import React from 'react';
import logo from './logo.svg';
import Header from './common/Header';
import './App.css';
import Footer from './common/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './routes/Home';
import Work from './routes/Work';
import Contact from './routes/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
