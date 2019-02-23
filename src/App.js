import React, { Component } from 'react';
//import "./box.js"
//import './App.css';
import pilo from './unsplash.jpg';
import jiko from "./hhh.jpg";
import olio from "./olio.jpg";


class App extends Component {
  state = {
    list: [{
      image: "olio",
      nom: "live",
      des:"live is short",
    }, {
      image:" {jiko}",
      nom: "for",
      des:"inspire and breath",
    }, {
      nom: "everything",
      des:"this is great",
      image: " {olio}",
    }],
    currentIndex: 0
  }

  render() {
    const koko={
     marginLeft:"260px",
     fontSize:"30px",
    };
    return (
      <div>
      <header>
        <center>
      <button onClick={
        () => {
          this.setState({ currentIndex: 0 })
        }
      }>hello</button>
<button onClick={
        () => {
          this.setState({ currentIndex: 1})
        }
      }>every</button>
       <button onClick={
        () => {
          this.setState({ currentIndex: 2 })
        }
      }>body</button>
      </center>
      </header>

      <br>
      </br>
<center>
      {
      }
      <img src={ this.state.list[this.state.currentIndex].image} style = {{height : "500px", width : "400px"}}/>
      
     <h3  style = {{backgroundColor:"black",color:"white",fontFamily:"monospace",}}>{ this.state.list[this.state.currentIndex].nom}</h3>
     
    <h2>{ this.state.list[this.state.currentIndex].des}</h2>

</center>
    </div>
    
    );
  }
}

export default App;
