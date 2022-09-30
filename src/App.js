import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App=()=>{

  const apiKey=d7a23a47305e444c8319dd7cf38f1da1;

    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/Science" element={<News apiKey={apiKey} key="Science" pageSize={6} country="in" category="Science"/>}></Route>
            <Route exact path="/Entertainment" element={<News apiKey={apiKey} key="Entertainment" pageSize={6} country="in" category="Entertainment"/>}></Route>
            <Route exact path="/Business" element={<News apiKey={apiKey} key="Business" pageSize={6} country="in" category="Business"/>}></Route>
            <Route exact path="/Sports" element={<News apiKey={apiKey} key="Sports" pageSize={6} country="in" category="Sports"/>}></Route>
            <Route exact path="/Technology" element={<News apiKey={apiKey} key="Technology" pageSize={6} country="in" category="Technology"/>}></Route>
            <Route exact path="/" element={<News apiKey={apiKey} key="General" pageSize={6} country="in" category="General"/>}></Route>
            <Route exact path="/Health" element={<News apiKey={apiKey} key="Health" pageSize={6} country="in" category="Health"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App