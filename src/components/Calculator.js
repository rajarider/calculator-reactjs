import React, { Component } from 'react';
import Keypad from './Keypad.js';
import './../App.css';
import Result from './Result.js';





export default class Calculator extends Component {

  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  btnClick = i => {

    if (i === "=") {
      this.calculate()
    }

    else if (i === "clear") {
      this.reset()
    }

    else if (i === "b") {
      this.backspace()
    }
    
    

    else {
      this.setState({
        result: this.state.result + i
      })
    }
  };


  calculate = () => {
    let res;
    try {
            res = eval(this.state.result)
      
    } catch (e) {
            res = "error"
      
    }

    this.setState({
      result: res
  })

};


  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

 


  render() {
    return (
          <center>
            <div className="calculatorWrap">
            
              <h1>CALCULATOR</h1>

              <Result  result={this.state.result} />
              <Keypad onClick={i => this.btnClick(i)} />
            </div>
            
          </center>
      
        
    )
  }
}
