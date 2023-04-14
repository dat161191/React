import React from "react";

class EventButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    increase = () => this.setState({number: this.state.number + 1});

    decrease = () => this.setState({number: this.state.number - 1});


    render() {
        return (
            <div style={{textAlign: "center", padding: 30}}>
                <span>Practice4 </span>
                <button onClick={this.decrease} style={{color: "blue"}}>Decrease</button>
                <span style={{padding: 10, color: "red"}}><b>{this.state.number}</b></span>
                <button onClick={this.increase} style={{color: "green"}}>Increase</button>
            </div>
        );
    }
}

export default EventButton;

