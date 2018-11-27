import React, { Component } from 'react'

export default class Keypad extends Component {
    renderSquare(i){
        return(
                <button className="square" 
                    name={i} 
                    onClick={() => this.props.onClick(i)}>
                    {i}
                </button>
        );

    }
  render() {
    return (
      

           <div className="keypadWrap">

            

             <div className="clear-row">
                     {this.renderSquare("clear")}
                     {this.renderSquare("%")}

                     {this.renderSquare("/")}

             </div>
        
            <div className="board-row board-first-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare("-")}
            </div>

            <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare("+")}
            </div>

            <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare("=")}   
            </div>

            <div className="board-row last-row">
                    {this.renderSquare(".")}
                    {this.renderSquare(0)}
                    {this.renderSquare("b")}
                    {this.renderSquare("*")}   
            </div>

        </div>

           
    )
  }
}
