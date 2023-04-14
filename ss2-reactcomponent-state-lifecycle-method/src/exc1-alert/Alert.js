import React from "react";

function Alert(props) {
    // console.log(props);
    return (
        <div className="alert alert-primary mt-1" role="alert">
            {props.text}
        </div>

    );
}
export default Alert;
