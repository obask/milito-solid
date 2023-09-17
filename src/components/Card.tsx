import CardDTO from "../milito-shared/game/CardDTO";
import FactionsEnum from "../milito-shared/enums/FactionsEnum";
import '../css/Card.css';

interface Props {
    cardInfo: CardDTO;
    faction: FactionsEnum;
}

function Card(props: Props) {

    const cardImageSrc = (): string => {
        return `/${props.faction}/${props.cardInfo.unitType}.jpeg`;
    };

    const handleOnClick = () => {
        console.log("clicked on a card");
    };

    return (
        <img
            src={cardImageSrc()}
            width={70}
            height={98}
            alt="alternative"
            onClick={handleOnClick}
            class="cardStyle"
        />
    );
}

export default Card;
