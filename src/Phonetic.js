import React from "react";

export default function Phonetic(props) {
    console.log(Phonetic)

    return (
        <div className="Phonetic">
                {props.phonetic.text}
                 <br />
           <a href= {props.phonetic.audio} target="_blank" > 
            Listen </a>
        </div>
    )
}