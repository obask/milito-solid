import React from "react";
import IRCard from "../milito-entities/game/IRCard";
import FactionsEnum from "../milito-entities/FactionsEnum";
import '../css/Card.css'

interface Props {
    cardInfo: IRCard
    faction: FactionsEnum
}

export default class Card extends React.Component<Props, {}> {

    private cardImageSrc(): string {
        return `${process.env.PUBLIC_URL}/${this.props.faction}/${this.props.cardInfo.unitType}.jpeg`
    }

    render() {
        return <img src={this.cardImageSrc()}
                    width={100}
                    height={140}
                    alt="alternative"
                    onClick={this.handleOnClick.bind(this)}
                    className="cardStyle"
        />
    }

    private handleOnClick() {
        window.alert(`clicked: ${this.props.cardInfo.unitType}`)
    }

}
