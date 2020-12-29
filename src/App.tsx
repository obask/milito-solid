import React from 'react';
import './css/App.css';
import initState from "./helpers/initState";
import GameState from "./milito-entities/game/GameState";
import Hand from "./components/Hand";
import PlayerTable from "./components/PlayerTable";

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
                <PlayerTable
                    game={this.state.game}
                />
                <Hand hand={this.state.game.currentPlayer.hand}
                      faction={this.state.game.currentPlayer.faction}
                />
            </div>
        )
    }
}
