// import logo from './logo.svg';
import './App.css';
import Counters from "./components/Counters";
import Conditional from "./components/Conditional"
import String from "./components/String"
import ObjectT from "./components/ObjectT"

// import image1 from "./assets/243-glasses-eye-blink-outline.svg"

function App() {
  return (
    <div className="App bg-dark">
      <div className="container">
        <div className="my-navbar d-flex justify-content-center align-items-center pt-4">
          {/* <img className="me-2" src={image1} alt="icon" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-folder me-3" viewBox="0 0 16 16">
            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
          </svg>
          <h2 className="text-light">React Stuff</h2>
          {/* <i class="bi bi-folder"></i> */}
        </div>
        <Counters/>
        <Conditional/>
        <String/>
        <ObjectT/>
      </div>
    </div>
  );
}

export default App;
