import logo from './logo.svg';
import './App.css';
import WhoAreYou from './components/WhoAreYou';
import Heading from './components/Heading';
import Characters from './components/Characters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
       <h3>Welcome 56 to React!</h3>
       <Characters />
      </header>
    </div>
  );
}

export default App;
