import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from "../routes/Home";

export default function App() {
    return (
        <Router>
            <div className="page-wrapper">
                <Header />
                <div className="contents">
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                    </Routes>    
                </div>
                <Footer />
            </div>
        </Router>
    )
}