import React from "react";
import Synonyms from "./Synonyms";

import "../styles/Meaning.css";

const Meaning = (props) => {
  //console.log(props.mean);
  return (
    <div className="meaning">
      <h6>{props.mean.partOfSpeach}</h6>

      {props.mean.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">-{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synon={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;
