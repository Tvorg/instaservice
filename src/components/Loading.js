import React from "react";
import img from "../loading.png";

const LoadingMessage = () => {
    return(
        <div><img src={img} alt ="loading"/>
            <p className="Loading_text">Loading components, please waite!</p>
        </div>
    )
}

export default LoadingMessage;