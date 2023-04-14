import React from "react";

function Practice1(props) {
    console.log(props);
    return (
        <h5><span>Practice1 </span>Hello: {props.name}</h5>
    );
}

export default Practice1;

export function Welcome() {
    return (
        <div className="App">
            <Practice1 name="Admin"/>
        </div>
    );
}
