import React from "react";
import Hello from "./Hello";

class ShowNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
    }

    delete = () => this.setState({display: false});
    // delete = () => {
    //     setTimeout(result => {
    //         this.setState({display: false})
    //     },2000);
    // }

    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello/>;
        }
        return (
            <div style={{textAlign: 'center'}}>
                {comp}
                <span>Practice6 </span>
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }

}

export default ShowNotification;
