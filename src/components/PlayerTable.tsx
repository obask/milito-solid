import React from "react"
import '../css/PlayerTable.css'
import GameTableDTO from "../milito-shared/game/GameTableDTO"
import CardDTO from "../milito-shared/game/CardDTO"
import PlaceHolder from "./PlaceHolder"
import Card from "./Card"
import FactionsEnum from "../milito-shared/enums/FactionsEnum"

interface Props {
    game: GameTableDTO
}

export default class PlayerTable extends React.Component<Props, {}> {

    render() {
        return <table className="playertable">
            <tbody>
            <tr key={1}>
                {
                    this.props.game.anotherPlayer.row2.map((x, index) => {
                        return PlayerTable.renderCardOrPlaceholder(
                            this.props.game.anotherPlayer.faction,
                            index,
                            x)
                    })
                }
            </tr>
            <tr key={2}>
                {
                    this.props.game.anotherPlayer.row1.map((x, index) => {
                        return PlayerTable.renderCardOrPlaceholder(
                            this.props.game.anotherPlayer.faction,
                            index,
                            x)
                    })
                }
            </tr>
            <tr key={3}>
                {
                    this.props.game.neutral.map((x, index) => {
                        return PlayerTable.renderCardOrPlaceholder(
                            this.props.game.anotherPlayer.faction,
                            index)
                    })
                }
            </tr>
            <tr key={4}>
                {
                    this.props.game.currentPlayer.row1.map((x, index) => {
                        return PlayerTable.renderCardOrPlaceholder(
                            this.props.game.currentPlayer.faction,
                            index,
                            x)
                    })
                }
            </tr>
            <tr key={5}>
                {
                    this.props.game.currentPlayer.row2.map((x, index) => {
                        return PlayerTable.renderCardOrPlaceholder(
                            this.props.game.currentPlayer.faction,
                            index,
                            x)
                    })
                }
            </tr>
            </tbody>
        </table>
    }

    private static renderCardOrPlaceholder(faction: FactionsEnum, index: number, card?: CardDTO) {
        if (card === undefined) {
            return <td key={index}><PlaceHolder/></td>
        } else {
            return <td key={index}><Card cardInfo={card} faction={faction}/></td>
        }
    }
}
