import React from "react";
import "../styles/Synonyms.css";

const Synonyms = (props) => {
  if (props.synon) {
    return (
      <ul className="synonyms">
        {props.synon.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default Synonyms;
