import './App.css';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import React, { Component, useState } from 'react';
import { render } from 'react-dom';


class App extends Component {

  state = {
    styles: {
      appLayout: {
        visibility: "visible"
      }
    }
  }

  pushSearchBarTop = () => {
    this.setState({
      styles: {
        searchBar:{
          marginTop: "-100px"    
        },
        appLayout: {
          visibility: "hidden"
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <header className="App-header">
          <div className="Brand-header">
            <a href="#home"><h1>CabCompanion <i style={{ color: '#ffd100' }} class="fa fa-car"></i></h1></a>
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
            <span className = "Quote-title"  style = {{visibility: this.state.styles.appLayout.visibility == "visible" ? "hidden" : "visible"}}>Search.  Compare.  Choose the best.</span>          
            <section className = "Section-title" style = {{visibility: this.state.styles.appLayout.visibility}}>
              <h2>
                Fare comparison.
                <span>Made simple.</span>
              </h2>
            </section>
            <Search pushToTop={this.pushSearchBarTop} stateStyleChange={this.state.styles.searchBar}></Search>
          </div>
          <footer></footer>
        </body>
      </div>
    );
  }
}

export default App;