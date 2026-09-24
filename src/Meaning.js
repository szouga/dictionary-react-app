import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  let meaningArray = [props.meaning];

  return (
    <div className="Meaning">
      {meaningArray.map(function (definition, index) {
        return (
          <div key={index}>
            <h3>{definition.partOfSpeech}</h3>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
// export default function Meaning(props) {
//   console.log(props.meaning);
//   return (
//     <div className="Meaning">
//       <h3>{props.meaning.partOfSpeech}</h3>
//       {props.meaning.definition.map(function (definition, index) {
//         return (
//           <div key={index}>
//             <p>
//               {definition.definition}
//               <br />
//               <em>{definition.example}</em>
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
