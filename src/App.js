import './App.css';
import Main from './component/main';
import Home from './pages/home';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';




function App() {
  return (
    <Home/>
  );
}

export default App;
