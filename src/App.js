import React from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard currentScore={null} bestScore={null} />
    </div>
  );
}

export default App;
