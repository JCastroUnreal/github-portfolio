import React from "react";
import "./ImageBlockUsedTechnology.css";

function ImageBlockUsedTechnology({ imageURL }) {
  return (
    <>
      <div className="card-div">
        <img src={imageURL} alt="Imagen" height={55} />
      </div>
    </>
  );
}

export default ImageBlockUsedTechnology;
