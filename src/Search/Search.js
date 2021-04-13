import React, { Component } from 'react';
import './Search.css';

class Search extends Component{
  svgLensIcon = "M38.25,35.59l-4.42-4.41a10.14,10.14,0,1,0-3.65,3.65l4.41,4.42a2.59,2.59,0,0,0,3.66-3.66ZM17.53,26.1a7.58,7.58,0,1,1,7.58,7.58A7.59,7.59,0,0,1,17.53,26.1Z";

  render(props){
    return (
      <div id = "search-bar" className = "Search-bar" style={this.props.stateStyleChange} onClick = {this.props.pushToTop}> 
        <input type="text" placeholder="Enter from address"></input>
        <input type="text" placeholder="Enter to address" style={{marginLeft: '5px'}}></input>
         <a href="#search"><span className="icon"> 
           <svg className="_h-2 _ivP _iv1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" width="54" height="54">
             <path fill="currentColor" d={this.svgLensIcon}>
             </path>
             </svg>
         </span></a>
        </div>
     )
  }
}

export default Search;
