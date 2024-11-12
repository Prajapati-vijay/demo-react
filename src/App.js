import logo from './logo.svg';
import './App.css';
import Students from './components/student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World from React
        </p>
        <Students />
      </header>
      
    </div>
  );
}

export default App;
