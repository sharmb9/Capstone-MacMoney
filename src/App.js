import './CSS/App_skiddie.css';
import './CSS/App_danielzheng.css';
import './CSS/App_bilaval.css';


import PopUpButton from './components/skiddie/PopUpButton';
import PopUp from './components/skiddie/PopUp';
import Home from './components/skiddie/Home';
import Npc from './components/skiddie/Npc';
import Ntext from './components/danielzheng/NPC_text';
import Navbar from './components/danielzheng/Navbar';
import QuestionBox from './components/bilaval/QuestionBox';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Ntext/>
      <Npc target="#hint"/>
      <PopUp id="hint">
        This is a hint.
      </PopUp>
    </div>
  );
}

export default App;
