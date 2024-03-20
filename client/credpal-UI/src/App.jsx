/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./pagee/Home";
import "./App.css";

function App() {

  return (
    <>
  <Router>
        <div className="container overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router> 
    </>
  )
}

export default App
