import React from "react";

class ChangeColor extends React.Component {
    _color1 = 'red'

    get color1() {
        return this._color1;
    }

    set color1(value) {
        this._color1 = value;
    }

    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'blue'});
        }, 3000);
    }

    render() {
        return (
            <div>
                <h5 className="text-center">Practice5 </h5>
                <h4 className="text-center" onClick={()=>alert(this.color1)}>{this._color1}</h4>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        paddingTop: 20,
                        width: 80,
                        height: 80,
                        margin: 'auto'
                    }}
                />
            </div>
        );
    }
}

export default ChangeColor;
