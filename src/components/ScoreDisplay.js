import React from "react";


const ScoreDisplay = (props) => {

    return (

        <div id="scoreBox">
            <h4>TIC-TAC-TOE</h4>
            <button
                type="button"
                onClick={() => props.newGame()}
                className="newGame">
                New Game</button>
            <h3>{props.winner}</h3>
        </div>)
};

export default ScoreDisplay;