import React, { Component } from 'react';
import './new.css'

const weapons = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return alert("Oops it's a Tie!");
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return alert("YOU Win!");
    } else {
      return alert("YOU looooooooose!");
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <><h1>----------Rock - Paper - Scissors----------</h1>
        <div>
        -------------------------------------
          {/* <Player weapon={playerOne} /> */}<h2>Choose One</h2>
          ------------------------------------- <br/>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            Rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("paper")}
          >
            Paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("scissors")}
          >
            Scissor
          </button><br/>
          -------------------------------------<br/>
         <div className="butt">{playerOne}</div> 
         -------------------------------------
        </div>
        <button type="button" className="weaponBtn1" onClick={this.startGame}>
          Start!
        </button><br/>
        -------------------------------------
        <div>
          {/* <Player weapon={playerTwo} /> */}<h2>Opponent Chose</h2> <br/>
          -------------------------------------
          <div className="butt">{playerTwo}</div> 
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
      </>
    );
  }
}

export default App;
