import logo4 from "./logo4.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className ="container">
      <header className="App-header">
        <img src={logo4} className="App-logo" alt="logo" />
     </header>
     <main>
       <Dictionary />
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


