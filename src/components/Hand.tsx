import React from "react";
import IRHand from "../milito-entities/game/IRHand";
import FactionsEnum from "../milito-entities/FactionsEnum";
import Card from "./Card";
import IRCard from "../milito-entities/game/IRCard";
import '../css/Hand.css';

interface Props {
    hand: IRHand
    faction: FactionsEnum
}

export default class Hand extends React.Component<Props, {}> {

    render() {
        return <ul id="hand">
            {this.props.hand.cards.map(this.renderListElement.bind(this))}
        </ul>
    }

    private renderListElement(card: IRCard) {
        return <li key={card.id}>
            <Card cardInfo={card} faction={this.props.faction}/>
        </li>;
    }
}
