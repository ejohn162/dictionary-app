import logo5 from "./logo5.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className ="container">
      <header className="App-header">
        <img src={logo5} className="App-logo d-none d-sm-block" alt="logo" />
        <h2 class="result-main"> Dictionary Search</h2>
     </header>
     <main>
       <Dictionary defaultKeyword="sunset"/>
     </main>


    <footer className= "App-footer">
      <small>
      Coded by Elizabeth Johnson
      </small>
      </footer>
     </div>
    </div>
  );
}


