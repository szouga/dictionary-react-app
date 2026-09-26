import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //console.log(response.data);
    //console.log(response.data.meanings);
    //console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    //setPhotos("Image Data received ", response.data.photos);
    //   console.log(response.data.photos);
    //   setPhotos(response.data.photos);
    //   console.log("FULL IMAGE RESPONSE:", response);
    //   if (!response || !response.data) {
    //     console.log("No response data.");
    //     return;
    //   }
    //   if (!response.data.photos) {
    //     console.log("No photos property in response:", response.data);
    //     return;
    //   }
    //   console.log("PHOTOS:", response.data.photos);
    setPhotos(response.data.photos);
  }

  function search() {
    //event.preventDefault();
    //alert(`Searching for definition of: ${keyword}`);
    let apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // let pexelsApiKey =
    //   "BbmM8bHxMBz7AXfsMdlVqSeGvR8U1AH970AGpiNheD6bbJWyzSLJ8rTv";
    // let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    // let headers = { Authorization: `${pexelsApiKey}` };

    // axios
    //   .get(pexelsApiUrl, {
    //     headers: headers,
    //   })
    //   .then(handlePexelsResponse);
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    //axios.get(imagesApiUrl).then(handleImagesResponse);
    axios
      .get(imagesApiUrl)
      .then(handleImagesResponse)
      .catch((error) => {
        console.log("IMAGE API ERROR:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What would you like to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga type word and press enter
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return <div>Loading</div>;
  }
}
