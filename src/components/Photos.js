import React from "react";
import "../styles/Photos.css";

function Photos(props) {
  if (props.photo) {
    return (
      
        <div className="photos">
          <div className="row">
            {props.photo.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt="landscape"
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      
    );
  } else {
    return null;
  }
}

export default Photos;
