import React, { Component } from 'react';
import Display from '../components/Display';
import { connect } from 'react-redux';
//import {pointReducer} from '../reducers/pointReducer';
import './DisplayContainner.scss';

class DisplayContainner extends Component {
  constructor(props) {
    super(props);
    this.state = {btnType:["btnPlus","btnMinus","btnMulti","btnDivide"],txttype:""};  //state
  
    this.process = this.process.bind(this);  //bind this
    this.pushPoint = this.pushPoint.bind(this);
}
componentDidMount(){
  this.props.setPoint(parseInt(0))
}
  process() {
    let vale = document.getElementById("txtPoint").value  // get value
    if(vale==""){
      alert("กรุณาใส่ค่า")
    }else{
    if(this.state.txttype =="btnPlus"){
      this.props.plus(parseInt(vale))   //action plus
 
    }else if(this.state.txttype =="btnMinus"){
      this.props.minus(parseInt(vale)) //action minus

    }else if(this.state.txttype =="btnMulti"){
      this.props.multi(parseInt(vale))  //action multi

    }else if(this.state.txttype =="btnDivide"){
      this.props.divide(parseInt(vale))   //action divide
    }
    document.getElementById("txtPoint").value = ""
    document.getElementById("btnPlus").style.opacity =  1;
    document.getElementById("btnMinus").style.opacity =  1;
    document.getElementById("btnMulti").style.opacity =  1;
    document.getElementById("btnDivide").style.opacity =  1;

  }
 }  

  pushPoint(type) {
    let vale = document.getElementById("txtPoint").value    /// มีค่าครั่งแรกๆ

    if (vale != "") {       // txt has value11111111111111111111111111  ใส่กก่อนหนึ่งครั้งแล้วถึงกด
      if (this.props.PointReducer.point == 0) {  ///// 1.1  ใส่กก่อนหนึ่งครั้ง   ถ้าไม่มีค่าก็เพิ่มเลย
  
        this.setState({ txttype: type })    // setstate under component
        this.props.setPoint(parseInt(vale))    // use  action 
        document.getElementById("txtPoint").value = ""

        //// วนค่าจากเสตท เพื่อหาว่าค่าไหนเป็นตัวกด ละเบลอค่าอื่น

        let btnType2 = this.state.btnType;
        btnType2.forEach(element => {
          if (element == type) {
            document.getElementById(element).style.opacity = 1;
            
          } else {
            document.getElementById(element).style.opacity = 0.4;
          
          }
        });
      }else{  // 1.2 มีค่าอยู๋แล้ว ละกดปุ่มก่อนใส่ เลขครั้งแรก   
               
              this.setState({ txttype: type })   
              // setstate under component
          //// วนค่าจากเสตท เพื่อหาว่าค่าไหนเป็นตัวกด ละเบลอค่าอื่น
          let btnType2 = this.state.btnType;
          btnType2.forEach(element => {
            if (element == type) {
              document.getElementById(element).style.opacity = 1;

            } else {
              document.getElementById(element).style.opacity = 0.4;
          
            }
          });
      }
    } else { //ไม่มีค่า  ///22222222222   ไม่ใส่ค่าก่อน อ
        if (this.props.PointReducer.point == 0) { ///2.1  ไม่มีค่าแต่กดเลย
        
          vale = 0;
          this.setState({ txttype: type })        // setstate under component
          this.props.setPoint(parseInt(vale))   // use  action 
          document.getElementById("txtPoint").value = ""
          //// วนค่าจากเสตท เพื่อหาว่าค่าไหนเป็นตัวกด ละเบลอค่าอื่น
          let btnType2 = this.state.btnType;
          btnType2.forEach(element => {
            if (element == type) {
              document.getElementById(element).style.opacity = 1;
          
            } else {
              document.getElementById(element).style.opacity = 0.4;
           
            }
          });
        } else {  /// มีค่าอยู่แล้วแต่กดเลย   2.2

       
            this.setState({ txttype: type })   
                // setstate under component
            //// วนค่าจากเสตท เพื่อหาว่าค่าไหนเป็นตัวกด ละเบลอค่าอื่น
            let btnType2 = this.state.btnType;
            btnType2.forEach(element => {
              if (element == type) {
                document.getElementById(element).style.opacity = 1;
      
              } else {
                document.getElementById(element).style.opacity = 0.4;
            
              }
            });
        }
    }

  }


  render(){
    return(
      <div className="contain">
        <div className="contain-sub">
          <h1>Calculator </h1>
        <input type="text" id="txtPoint"/>
        <br/>   <br/>
        <button onClick={()=>this.pushPoint("btnPlus")} id="btnPlus"> + </button>
       <button onClick={()=>this.pushPoint("btnMinus")} id="btnMinus"> - </button>
       <button onClick={()=>this.pushPoint("btnMulti")} id="btnMulti"> x </button>
       <button onClick={()=>this.pushPoint("btnDivide")} id="btnDivide"> / </button>
       <br/>
       <button onClick={()=>this.process()}id="btnRusult"> = </button>
       <Display  reusltPoint={this.props.PointReducer.point} />
        </div>
     
      </div>
    );
  }

}

// นำเสตทจากสโตรมาใส่ใน prop
const mapStateToProp=(state)=>{
  return {
    PointReducer:state.PointReducer
  }
}

///actionn  ไว้ให้้ใช้
///// 1.> action  ส่ง type ไป reducer 
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
      },
      setPoint:(num)=>{
        dispatch({
          type: "setPoint",
          payload:num
        })
      },
      multi:(num)=>{
        dispatch({
          type: "multi",
          payload:num
        })
      },
      divide:(num)=>{
        dispatch({
          type: "divide",
          payload:num
        })
      }
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(DisplayContainner);
