import './App.css';
import PopUpButton from './components/PopUpButton';
import PopUp from './components/PopUp';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MacMoney</h1>
      </header>
      <p>
      Hello welcome to <PopUpButton target="#mac">McMaster University</PopUpButton>! I am Shivam, your Student Mentor for this year. I will be helping you adjust to the new uni life with all thing finance. Let’s start with a basic tutorial on how the game will work and progress.
      </p>
      <PopUp id="mac">
        McMaster University (McMaster or Mac) is a public research university in Hamilton, Ontario, Canada. It operates six academic faculties: the DeGroote School of Business, Engineering, Health Sciences, Humanities, Social Science, and Science. It is a member of the U15, a group of research-intensive universities in Canada.
      </PopUp>
    </div>
  );
}

export default App;
