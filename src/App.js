import logo from './logo.svg';
import './App.css';
import docker from './docker.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={docker} className="App-logo" alt="logo" />
        <p>
          Hello World from React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
