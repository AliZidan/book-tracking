import React from 'react';
import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import DashBoard from './Pages/Dashboard/DashBoard';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
   <DashBoard/>
    </div>
  );
}

export default App;
