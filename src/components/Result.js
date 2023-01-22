import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function Result(props) {
  if (props.results) {
    return (
      <div>
        return (
        <div className="result">
          <section>
            <h2>{props.results.word}</h2>
            <Phonetic phone={props.results.phonetics} />
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning mean={meaning} />
              </div>
            );
          })}
        </div>
        )
      </div>
    );
  } else {
    return null;
  }
}

export default Result;
