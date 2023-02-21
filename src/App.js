
import { useContext } from "react";
import './App.scss';
import BoardPage from './components/board';
import  { GameContext } from './context/GameContext';
import StartPage from './components/start';

function App() {
  const { screen } = useContext(GameContext);

  return (
    <div className="app">
      <div className="main">
        {screen === "start" ? <StartPage /> : <BoardPage />}
      </div>
    </div>
  );
}

export default App;
