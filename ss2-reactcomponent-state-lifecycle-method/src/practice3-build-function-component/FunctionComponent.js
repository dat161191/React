import React from "react";

export function Practice3(props) {
    return (
        <h5><span>Practice3 </span>Total: {props.firstNumber + props.secondNumber}</h5>
    );
}
export function FunctionComponent() {
    return (
        <div className="App">
            <Practice3 firstNumber={1} secondNumber={3}/>
        </div>
    );
}

