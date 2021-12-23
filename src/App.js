import React from "react";
import GameBoard from "./components/GameBoard.jsx";
import "./App.css";
import "./media.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <GameBoard />
            </div>
        );
    }
}

export default App;
