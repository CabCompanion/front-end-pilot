import './App.css';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import React, { Component, useState } from 'react';
import { render } from 'react-dom';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <header className="App-header">
        <div className="Brand-header">
          <a href="#home"><h1>CabCompanion <i style={{color:'#ffd100'}} class="fa fa-car"></i></h1></a>
        </div>
        <div className="Nav-header">
          <ul>
            <li><a class="active" href="#home">Cab</a></li>
            <li><a href="#Accessories">Accessories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="Signin-header">
          
          <ul>
            <li>
              <a href="#sign_in">
                <i class="fa fa-user"></i>
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </header>
      <body>
        <div className="Content-core">
          <section>
            <h2>
              Fare comparison.
              <span>Made simple.</span>
            </h2>
          </section>
          <Search></Search>
        </div>
      </body>
    </div>
  );
}

export default App;
