import React, { useState } from "react";
import axios from "axios";

import Result from "./Result";
import Photos from "./Photos";

import '../styles/Dictionary.css'

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [answer, setAnswer] = useState("");
  const [photos, setPhotos] = useState(null);

  const changeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleDictionaryResponse = (response) => {
    setAnswer(response.data[0]);
  };
  const handlePexelsResponse = (response) => {
    setPhotos(response.data.photos);
  };

  const search = (event) => {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey = `563492ad6f91700001000001352eccf8122c4ce6b5ef7070daeb8c9b`;
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  };

  return (
    <div className="dictionary">
      <section>
        <h5>What word do you want to look up?</h5>
        <form onSubmit={search}>
          <input type="search" onChange={changeKeyword} />
        </form>
      </section>
      <Result results={answer} />
      <Photos photo={photos} />
    </div>
  );
}

export default Dictionary;
