import React, { Component } from 'react';
class Practice2 extends Component {
    render() {
        return <h5><span>Practice2 </span>Total: {this.props.firstNumber + this.props.secondNumber}</h5>
    }
}
export default ClassComponent;

export function ClassComponent() {
    return (
        <div className="App">
            <Practice2 firstNumber={2} secondNumber={3}/>
        </div>
    );
}
