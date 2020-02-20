import React, {Component} from 'react';
import Shape from './shape'

class Selector extends Component {
  constructor(){
    super();
    this.state ={
      selectedShape: "square",
    }
  }

  //This is where the methods will live

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })
  }


render () {
  return (
    <div  className="container">
    <div className="navbar">
    <div> Selected: <span> {this.state.selectedShape}</span> </div>
    </div>
    <div className="shape-list">

    <Shape shape="square" selectShape= {this.selectShape}/>
    <Shape shape="circle" selectShape= {this.selectShape}/>
    <Shape shape="triangle" selectShape= {this.selectShape}/>
    </div>
    </div> //Closing Div for container

    )
  }
}
export default Selector;
//Home of the comnponents within the div at     <div className="shape-list">
//***********LINE 13 *******// Call the shape Component from the shape.js This is a function that calls a component and adds the properities to the DOM
//lower case shape is the props
