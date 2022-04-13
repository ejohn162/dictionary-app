import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";



export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos,setPhotos] = useState(null);

    function handleDictionaryResponse(response){
      
        setResults(response.data[0]);


    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);

    }

    function search() {
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f9170000100000105cc7c5ef69b4dfdb66a64f8ee478e07";
        let pexelsApiUrl =   `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`}

        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

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
        <Photos photos={photos} />
      </div>
     );
    } else {
      load();
      return "Loading";
    }
 }


    