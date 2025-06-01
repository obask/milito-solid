import React from "react";
import CardDTO from "../milito-shared/game/CardDTO";
import FactionsEnum from "../milito-shared/enums/FactionsEnum";
import '../css/Card.css'

interface Props {
    cardInfo: CardDTO
    faction: FactionsEnum
}

export default class Card extends React.Component<Props, {}> {

    private cardImageSrc(): string {
        return `/${this.props.faction}/${this.props.cardInfo.unitType}.jpeg`;
    }

    render() {
        return <img src={this.cardImageSrc()}
                    width={70}
                    height={98}
                    alt="alternative"
                    onClick={this.handleOnClick.bind(this)}
                    className="cardStyle"
        />
    }

    private handleOnClick() {
        // window.alert(`clicked: ${this.props.cardInfo.unitType}`)
        console.log("clicked on a card")
    }

}
