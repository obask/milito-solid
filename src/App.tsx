import React from 'react';
import './css/App.css';
import initState from "./helpers/initState";
import GameTableDTO from "./milito-shared/game/GameTableDTO";
import Hand from "./components/Hand";
import PlayerTable from "./components/PlayerTable";
import CardDTO from "./milito-shared/game/CardDTO";
// import util from "util";

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
                <button onClick={this.clickReset.bind(this)}>SETUP</button>
            </div>
        )
    }

    async clickReset(event: React.MouseEvent<HTMLButtonElement>) {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            mode: "cors" as RequestMode,
            body: JSON.stringify({those: "this.state"}),
        }
        const tmp = await fetch("http://localhost:9000/api/game/setup", requestOptions)
        const body: GameTableDTO = await tmp.json()
        console.log(body)
        // replace all null values
        body.currentPlayer.row1 = body.currentPlayer.row1.map((x) => x ?? undefined)
        body.currentPlayer.row2 = body.currentPlayer.row2.map((x) => x ?? undefined)
        body.anotherPlayer.row1 = body.anotherPlayer.row1.map((x) => x ?? undefined)
        body.anotherPlayer.row2 = body.anotherPlayer.row2.map((x) => x ?? undefined)
        this.setState({game: body})
        // alert(util.inspect(body))
    }

}
