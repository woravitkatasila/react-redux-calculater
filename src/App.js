import React, { Component } from 'react';
import Display from './containers/DisplayContainner';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    return(
       <div>
      <Display/>
       </div>
        
    )
 
  }
}


export default App;
