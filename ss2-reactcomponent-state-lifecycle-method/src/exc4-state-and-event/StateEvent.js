import React from "react";

function Explan(props) {
    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h1>Exercise4</h1>
                <button className="btn btn-primary" onClick={props.explanation}>Đóng Giới Thiệu</button>
                <p>Đây là đoạn giới thiệu......</p>
                <img src="https://i1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g" alt=""/>
            </div>
        </div>
    )
}

export class CheckExplanCollapse extends React.Component {
    constructor() {
        super();
        this.state = {
            isExplan: false
        }
    }

    handleExplan = () => {
        this.setState({isExplan: false})
    }
    handleCollapse = () => {
        this.setState({isExplan: true})
    }

    render() {
        const {isExplan} = this.state;
        if (isExplan) return (<Explan explanation={this.handleExplan}/>);
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <h1>Exercise4</h1>
                    <button className="btn btn-primary" onClick={this.handleCollapse}>Xem giới thiệu</button>
                </div>
            </div>

        );
    }
}
// export default CheckExplanCollapse;
