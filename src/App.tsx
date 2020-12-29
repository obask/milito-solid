import React from 'react';
import './css/App.css';
import initState from "./helpers/initState";
import GameState from "./milito-entities/game/GameState";
import Hand from "./components/Hand";

interface State {
    game: GameState
}

export default class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            game: initState(),
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<Card foo='/AncientBritish/slingers.jpeg'/>*/}
                    <Hand hand={this.state.game.currentPlayer.hand}
                          faction={this.state.game.currentPlayer.faction}
                    />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}
