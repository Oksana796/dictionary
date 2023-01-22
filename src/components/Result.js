import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import '../styles/Result.css'

function Result(props) {
  if (props.results) {
    
        return (
        <div className="result">
          <section>
            <h2>{props.results.word}</h2>
            <Phonetic phone={props.results.phonetics} />
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning mean={meaning} />
              </section>
            );
          })}
        </div>
       
    );
  } else {
    return null;
  }
}

export default Result;
