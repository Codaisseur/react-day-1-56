import logo from './logo.svg';
import './App.css';
import WhoAreYou from './components/WhoAreYou';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Heading />


        <img src={logo} className="App-logo" alt="logo" />
       <h3>We 56 to React!</h3>
       <WhoAreYou name={'Matias'} random={"some value"}/>
      </header>
    </div>
  );
}

export default App;
