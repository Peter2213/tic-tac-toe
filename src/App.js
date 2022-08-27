import { useContext } from "react";
import Start from "./component/start/Start"
import Game from "./component/game/Game"
import { GameContext } from "./modelContext/GameContext";
import Model from "./component/model/model";

function App() {
   const { screen } = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        <Model />
        {screen === 'start' && <Start />}
        {screen === "game" && <Game />}
      </div> 
    </div>
  );
}

export default App;
