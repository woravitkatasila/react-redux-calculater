import React from 'react'
import { connect } from 'react-redux'

const Display = (props) => {
    return   <div>
    <div>
   <h1>    {props.PointReducer.point} </h1> 
    </div>
  </div>
}

export default connect(
    state => ({   PointReducer: state.PointReducer})
)(Display)