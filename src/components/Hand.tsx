import React from "react";
import HandDTO from "../milito-shared/game/HandDTO";
import FactionsEnum from "../milito-shared/enums/FactionsEnum";
import Card from "./Card";
import CardDTO from "../milito-shared/game/CardDTO";
import '../css/Hand.css';

interface Props {
    hand: HandDTO
    faction: FactionsEnum
}

export default class Hand extends React.Component<Props, {}> {

    render() {
        return <ul id="hand">
            {this.props.hand.cards.map(this.renderListElement.bind(this))}
        </ul>
    }

    private renderListElement(card: CardDTO) {
        return <li key={card.id}>
            <Card cardInfo={card} faction={this.props.faction}/>
        </li>;
    }
}
