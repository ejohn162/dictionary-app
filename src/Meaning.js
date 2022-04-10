import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning text-center">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        console.log(definition);
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
            </p>
            <br />
            <em>
              <strong>Example:</strong> {definition.example}
            </em>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}