import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    //console.log(response.data[0]);
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    //alert(`Searching for definition of: ${keyword}`);
    let apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
