import React from 'react';

import Header from "./components/Header";

import Tabs from "./components/Tabs";

import MainBody from "./components/MainBody";

import './App.css';

function App() {
  return (
    <div className="AppContainer">
      <div className="App">
      <Header />
      <Tabs />
      <MainBody />
      </div>
    </div>
  );
}

export default App;
