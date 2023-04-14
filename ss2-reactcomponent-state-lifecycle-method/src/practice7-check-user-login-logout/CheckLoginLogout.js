import React from "react";
import Home from "./Home";
class CheckLoginLogout extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    handleLogIn = () => {
        this.setState({ isLoggedIn: true })
    }

    handleLogOut = () => {
        this.setState({ isLoggedIn: false })
    }
    render () {
        const { isLoggedIn } = this.state
        if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
        return (
            <div style={{textAlign: 'center'}}>
                <div>
                    <h1>Please Log in</h1>
                    <span>Practice7 </span>
                    <button className="btn btn-primary" onClick={this.handleLogIn}>Log in</button>
                </div>
            </div>
        )
    }
}
export default CheckLoginLogout;
