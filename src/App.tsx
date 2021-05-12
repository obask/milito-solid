import React from 'react';
import './css/App.css';
import initState from "./helpers/initState";
import GameTableDTO from "./milito-shared/game/GameTableDTO";
import Hand from "./components/Hand";
import PlayerTable from "./components/PlayerTable";
import UIState from "./entities/UIState";
import UIStatusEnum from "./entities/UIStatusEnum";
import CardDTO from "./milito-shared/game/CardDTO";

interface Props {
}

interface State {
    game: GameTableDTO
    ui: UIState
}

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            game: initState(),
            ui: {
                status: UIStatusEnum.SELECT_CARDS,
                discardedCards: [],
                nCardsToDiscard: 2,
            },
        }
        // bind class methods
        this.clickReset = this.clickReset.bind(this)
        this.clickDiscard = this.clickDiscard.bind(this)
        this.handleClickOnHand = this.handleClickOnHand.bind(this)
    }

    render() {
        return (
            <div className="App">
                <PlayerTable
                    game={this.state.game}
                />
                <Hand hand={this.state.game.currentPlayer.hand}
                      faction={this.state.game.currentPlayer.faction}
                      onCardSelect={this.handleClickOnHand}
                />
                <button onClick={this.clickReset}>SETUP</button>
                <button onClick={this.clickDiscard}>DISCARD</button>
            </div>
        )
    }

    async clickDiscard(event: React.MouseEvent<HTMLButtonElement>) {
        const selectedCardId = this.state.ui.selectedCard
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            mode: "cors" as RequestMode,
            body: JSON.stringify({DISCARD_EVENT: {discardedCardId: selectedCardId}}),
        }
        const tmp = await fetch("http://localhost:9000/api/game/event", requestOptions)
        const body: GameTableDTO = await tmp.json()
        console.log(body)
        this.replaceResponseNullValues(body)
        this.setState({game: body})
        // alert(util.inspect(body))
    }

    private replaceResponseNullValues(body: GameTableDTO) {
        body.currentPlayer.row1 = body.currentPlayer.row1.map((x) => x ?? undefined)
        body.currentPlayer.row2 = body.currentPlayer.row2.map((x) => x ?? undefined)
        body.anotherPlayer.row1 = body.anotherPlayer.row1.map((x) => x ?? undefined)
        body.anotherPlayer.row2 = body.anotherPlayer.row2.map((x) => x ?? undefined)
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
        this.replaceResponseNullValues(body)
        this.setState({game: body})
        // alert(util.inspect(body))
    }

    async handleClickOnHand(card: CardDTO, position: number) {
        // alert("OLOLO: " + position)

        console.log('STATE:', this.state.ui.status)
        console.log('clickOnHand triggered:', position)
        // const requestOptions = {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({title: "Vue POST Request Example"})
        // };
        // fetch("http://localhost:3000/ololo", {mode: 'cors'})

        // fetch("http://localhost:3000/ololo", {mode: 'cors'})
        //     .then(response => console.log(response.json()))
        switch (this.state.ui.status) {
            case UIStatusEnum.SELECT_CARDS:
                this.setState(previousState => {
                    previousState.ui.selectedCard = position
                    previousState.ui.status = UIStatusEnum.SELECT_COLUMN_TO_PLAY_STATE
                    return previousState
                })
                break
            case UIStatusEnum.DISCARD_CARDS_FROM_HAND:
                this.setState(currentState => {
                    currentState.ui.discardedCards.push(position)
                    currentState.ui.nCardsToDiscard -= 1
                    currentState.ui.status = UIStatusEnum.DISCARD_CARDS_FROM_HAND
                    return currentState
                })
                // TODO check if here is a race condition
                console.log("cards to discard", this.state.ui.nCardsToDiscard)
                if (this.state.ui.nCardsToDiscard <= 0) {
                    const requestOptions = {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        mode: "cors" as RequestMode,
                        body: JSON.stringify(this.state)
                    }
                    const response = await fetch("http://localhost:3000/ololo", requestOptions)
                    const newState = await response.json()
                    console.log(newState)
                    this.setState({
                        game: newState
                    })
                    this.setState(currentState => {
                        currentState.ui.status = UIStatusEnum.SELECT_CARDS_STATE
                        return currentState
                    })
                }
                break
        }
    }

}
