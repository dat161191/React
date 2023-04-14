import React from "react";

class Calculator extends React.Component {

    // input1;
    // input2;
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         num1: 0,
    //         num2: 0,
    //         result: 0
    //     }
    // }
    //
    // add = () => {
    //     console.log(this.input1,this.input2)
    //     this.setState({
    //         num1: parseInt(this.input1),
    //         num2: parseInt(this.input2),
    //         result: this.state.num1 + this.state.num2
    //     })
    // }
    //
    //
    // render() {
    //     return (
    //         <div className="border-3">
    //             <div className="pe-1 ps-1 w-100">
    //                 <input value={this.input1} className="form-control w-25 mb-1" type="number"/>
    //             </div>
    //             <div className="pe-1 ps-1 w-100 mb-1">
    //                 <input value={this.input2} className="form-control w-25 mb-1" type="number"/>
    //             </div>
    //             <button className="btn btn-primary mb-1" onClick={this.add}>+</button>
    //
    //             <p>Result:{this.state.result}</p>
    //
    //         </div>
    //     );
    // }
    constructor() {
        super();
        this.state = {
            num1: '',
            num2: '',
            result: ''
        }
    }

    addition = () => {
        const {num1, num2} = this.state;
        this.setState({
            result: parseInt(num1) + parseInt(num2),
            num1: '',
            num2: ''
        });
    }
    subtraction = () => {
        const {num1, num2} = this.state;
        this.setState({
            result: parseInt(num1) - parseInt(num2),
            num1: '',
            num2: ''
        });
    }
    multiplication = () => {
        const {num1, num2} = this.state;
        this.setState({
            result: parseInt(num1) * parseInt(num2),
            num1: '',
            num2: ''
        });
    }
    division = () => {
        const {num1, num2} = this.state;
        this.setState({
            result: parseInt(num1) / parseInt(num2),
            num1: '',
            num2: ''
        });
    }

    render() {
        const {num1, num2, result} = this.state;
        return (
            <div style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                <div style={{display: "block"}}><h4>Calculator</h4></div>
                <div className="d-flex align-items-center justify-content-center">
                    <input type="number" name="num1" className="form-control w-25 mb-1" value={num1}
                           onChange={e => this.setState({num1: e.target.value})}
                           placeholder="Number A"/>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <input type="number" name="num2" className="form-control w-25 mb-1" value={num2}
                           onChange={e => this.setState({num2: e.target.value})}
                           placeholder="Number B"/>
                </div>

                <button className="btn btn-primary me-1" onClick={this.addition}>+</button>
                <button className="btn btn-primary me-1" onClick={this.subtraction}>-</button>
                <button className="btn btn-primary me-1" onClick={this.multiplication}>X</button>
                <button className="btn btn-primary me-1" onClick={this.division}>/</button>
                <br/>
                <h4>Result: {result}</h4>
            </div>
        );
    }
}

export default Calculator;
