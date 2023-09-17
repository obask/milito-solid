import '../css/PlayerTable.css';
import GameTableDTO from "../milito-shared/game/GameTableDTO";
import CardDTO from "../milito-shared/game/CardDTO";
import PlaceHolder from "./PlaceHolder";
import Card from "./Card";
import FactionsEnum from "../milito-shared/enums/FactionsEnum";

interface Props {
    game: GameTableDTO;
}

function PlayerTable(props: Props) {

    const renderCardOrPlaceholder = (faction: FactionsEnum, _index: number, card?: CardDTO) => {
        if (card === undefined) {
            return <td><PlaceHolder/></td>;
        } else {
            return <td><Card cardInfo={card} faction={faction}/></td>;
        }
    };

    return (
        <table class="playertable">
            <tbody>
            <tr>
                {
                    props.game.anotherPlayer.row2.map((x, index) =>
                        renderCardOrPlaceholder(props.game.anotherPlayer.faction, index, x)
                    )
                }
            </tr>
            <tr>
                {
                    props.game.anotherPlayer.row1.map((x, index) =>
                        renderCardOrPlaceholder(props.game.anotherPlayer.faction, index, x)
                    )
                }
            </tr>
            <tr>
                {
                    props.game.neutral.map((_x, index) =>
                        renderCardOrPlaceholder(props.game.anotherPlayer.faction, index)
                    )
                }
            </tr>
            <tr>
                {
                    props.game.currentPlayer.row1.map((x, index) =>
                        renderCardOrPlaceholder(props.game.currentPlayer.faction, index, x)
                    )
                }
            </tr>
            <tr>
                {
                    props.game.currentPlayer.row2.map((x, index) =>
                        renderCardOrPlaceholder(props.game.currentPlayer.faction, index, x)
                    )
                }
            </tr>
            </tbody>
        </table>
    );
}

export default PlayerTable;
