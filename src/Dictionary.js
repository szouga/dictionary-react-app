import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //console.log(response.data);
    //console.log(response.data.meanings);
    //console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search() {
    //event.preventDefault();
    //alert(`Searching for definition of: ${keyword}`);
    let apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    load();
    return <div>Loading</div>;
  }
}
