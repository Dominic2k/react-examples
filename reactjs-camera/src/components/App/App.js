import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

function App() {
  return (
    <div id="container">
      {/* this is header area */}
      <Header/>
      {/* this is content area */}
      <Content/>
      {/* this is footer area */}
      <Footer/>
    </div>
  );
}

export default App;


