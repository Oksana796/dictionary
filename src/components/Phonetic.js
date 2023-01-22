import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "../styles/Phonetic.css";

const Phonetic = (props) => {
  return (
    <div className="Phonetic">
      <AudioPlayer src={props.phone[0].audio} controls />
      <span>{props.phone[0].text}</span>
    </div>
  );
};

export default Phonetic;
