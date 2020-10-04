import React from "react";
import "./imagelinkform.css";

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3 center">
                {"This magic brain will detect faces in pictures!"}
            </p>
            <div className="center">
            <div className="center form pa4 br3 shadow-1">
            <input className="f4 pa2 w-70 center" type="text"></input>
                <button className="w-30 grow f4 br2 link ph3 pv2 dib white bg-light-purple">Detect</button>

            </div>
            </div>
        </div>
    )
}



export default ImageLinkForm;