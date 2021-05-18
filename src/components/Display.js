import React, { Component } from 'react';

class Display extends Component {
  render(){
    return(
      <div>
        <div>
       <h1>  ผลลัพธ์  {this.props.reusltPoint} </h1> 
        </div>
      </div>
    );
  }
}

export default Display;
