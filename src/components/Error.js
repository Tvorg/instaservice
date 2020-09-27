import React from "react";
import img from "../error.png";

const ErrorMessage = () => {
    return(
        <div><img src={img} alt ="error"/>
            <p className="Error_text">The server is not turned on!</p>
        </div>
    )
}

export default ErrorMessage;