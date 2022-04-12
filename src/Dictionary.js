import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";



export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
      
        setResults(response.data[0]);


    }

    function search() {
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();

    }
    function handleSubmit(event){
        event.preventDefault();
        search();
       
    }

    if(loaded) {

        return (
        
        <div className="Dictionary">
        <section>
        <form onSubmit ={handleSubmit}>
            <div className = "row">
                <div className="col-sm-9">
            <input 
            type ="search"  
            placeholder="Enter word here..." 
            onChange={handleKeywordChange} />
            </div>
            <div className="col-sm-3 justify-content end">
                <button type="submit" value="Search" className="form-btn">Submit</button>
            </div>
            </div>
         </form>
        </section>
        <Results  results={results} />
      </div>
     );
    } else {
      load();
      return "Loading";
    }
 }


    