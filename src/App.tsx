import React from 'react';
import './css/App.css';
import initState from "./helpers/initState";
import GameTableDTO from "./milito-shared/game/GameTableDTO";
import Hand from "./components/Hand";
import PlayerTable from "./components/PlayerTable";

interface State {
    game: GameTableDTO
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
