import './App.css';
import PopUpButton from './components/PopUpButton';
import PopUp from './components/PopUp';
import Home from './components/Home';
import Npc from './components/Npc';
import Intro from './components/Intro';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/intro">
          <Intro/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
