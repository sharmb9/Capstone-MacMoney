import './App.css';
import PopUpButton from './components/PopUpButton';
import PopUp from './components/PopUp';
import Home from './components/Home';
import Npc from './components/Npc';

const App = () => {
  return (
    <div className="App">
      <Npc target="#hint"/>
      <PopUp id="hint">
        This is a hint.
      </PopUp>
    </div>
  );
}

export default App;
