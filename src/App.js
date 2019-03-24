import React, { Component } from "react";
import "./App.css";

const DICE_SIDES = [2, 4, 6, 8, 10, 12];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sides: 6,
      count: 3,
      rolls: [],
      total: null
    };
  }

  rollDice() {
    let rolls = [];
    let total = 0;
    for (let i = 0; i < this.state.count; i++) {
      const roll = Math.floor(Math.random() * this.state.sides) + 1;
      rolls.push(roll);
      total += roll;
    }
    this.setState({ rolls: rolls, total: total });
  }
  countChange(e) {
    this.setState({ count: e.target.value });
  }

  sidesChange(e) {
    this.setState({ sides: e.target.value });
  }

  render() {
    let total = "";
    if (this.state.total !== null) {
      total = <p>Total: {this.state.total}</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>Dice Rolla</p>
          <label>
            Sides:
            <select value={this.sides} onChange={e => this.sidesChange(e)}>
              {DICE_SIDES.map((val, index) => (
                <option key={val}>{val}</option>
              ))}
            </select>
          </label>
          <label>
            Count:
            <input
              type="number"
              value={this.state.count}
              onChange={e => this.countChange(e)}
            />
          </label>
          <button onClick={() => this.rollDice()}>Roll!</button>
          <div>
            {this.state.rolls.map((r, i) => (
              <p key={i}>{r}</p>
            ))}
            {total}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
