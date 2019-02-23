import React, { Component } from 'react';
//import './App.css';



class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div className="Box"  >
				<img style={images} src={this.props.img}/>
                <h1>{this.props.title}</h1>
				<p style={popo}>{this.props.name}</p>
				
			</div>
      </div>
    );
  }
}

export default App;
