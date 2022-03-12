import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from "../routes/Home";
import Projects from "../routes/Projects"
import Blog from "../routes/Blog"

export default function App() {
    return (
        <Router>
            <div className="page-wrapper">
                <Header />
                <div className="contents">
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/projects" element={<Projects />}></Route>
                        <Route exact path="/blog" element={<Blog />}></Route>
                    </Routes>    
                </div>
                <Footer />
            </div>
        </Router>
    )
}