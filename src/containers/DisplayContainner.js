import React, { Component } from 'react';
import Display from '../components/Display';
import { connect } from 'react-redux';
//import {pointReducer} from '../reducers/pointReducer';


class DisplayContainner extends Component {
  
  render(){
    return(
      <div>
        <input type="text"/>
        <label> + </label>
        <input type="text"/>
        <br/>
        <button onClick={()=>this.props.plus(500)}> + </button>
       <button onClick={()=>this.props.minus(500)}> - </button>
       <br/>
       <button onClick={()=>this.props.minus(500)}> = </button>
        <Display  reusltPoint={this.props.PointReducer.point} />

      </div>
    );
  }

}

const mapStateToProp=(state)=>{
  return {
    PointReducer:state.PointReducer
  }
}

const mapDispatchToProp=(dispatch)=>{
  return {
      plus:(num)=>{
        dispatch({
          type: "plus",
          payload:num
        })
      },
      minus:(num)=>{
        dispatch({
          type: "minus",
          payload:num
        })
      }
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(DisplayContainner);
