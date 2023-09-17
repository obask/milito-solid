import HandDTO from "../milito-shared/game/HandDTO";
import FactionsEnum from "../milito-shared/enums/FactionsEnum";
import Card from "./Card";
import CardDTO from "../milito-shared/game/CardDTO";
import '../css/Hand.css';

interface Props {
    hand: HandDTO;
    faction: FactionsEnum;
    onCardSelect: (a: CardDTO, b: number) => void;
}

function Hand(props: Props) {

    const renderListElement = (card: CardDTO, position: number) => (
        <li onClick={() => props.onCardSelect(card, position)}>
            <Card cardInfo={card} faction={props.faction} />
        </li>
    );

    return (
        <ul id="hand">
            {props.hand.cards.map(renderListElement)}
        </ul>
    );
}

export default Hand;
