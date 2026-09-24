import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  let meaningArray = [props.meaning];

  return (
    <div className="Meaning">
      {meaningArray.map(function (definition, index) {
        return (
          <div key={index}>
            <h3>{definition.partOfSpeech}</h3>
            <div className="definition">{definition.definition}</div>

            <div className="example">
              <em>{definition.example}</em>
            </div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
