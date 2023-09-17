import {createSignal} from "solid-js";
import './css/App.css';
import initState from "./helpers/initState";
import GameTableDTO from "./milito-shared/game/GameTableDTO";
import Hand from "./components/Hand";
import PlayerTable from "./components/PlayerTable";
// import UIState from "./entities/UIState";
import UIStatusEnum from "./entities/UIStatusEnum";

// import CardDTO from "./milito-shared/game/CardDTO";

function App() {
    const [state, setState] = createSignal({
        game: initState(),
        ui: {
            status: UIStatusEnum.SELECT_CARDS,
            discardedCards: [],
            nCardsToDiscard: 2,
        }
    });

    const clickReset = () => {
        // Logic for reset here (not provided in original code)
    };

    const handleClickOnHand = () => {
        // Logic for handleClickOnHand here (not provided in original code)
    };

    const clickDiscard = async (_event: MouseEvent) => {
        const selectedCardId = state().ui.status;
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            mode: "cors" as RequestMode,
            body: JSON.stringify({DISCARD_EVENT: {discardedCardId: selectedCardId}}),
        }
        const tmp = await fetch("http://localhost:9000/api/game/event", requestOptions);
        const body: GameTableDTO = await tmp.json();
        console.log(body);
        // this.replaceResponseNullValues(body)  <- Assuming this logic is missing from original
        setState({
            game: body, ui: {
                status: UIStatusEnum.SELECT_CARDS,
                discardedCards: [],
                nCardsToDiscard: 2,
            }
        });
    }

    return (
        <div class="App">
            <PlayerTable
                game={state().game}
            />
            <Hand
                hand={state().game.currentPlayer.hand}
                faction={state().game.currentPlayer.faction}
                onCardSelect={handleClickOnHand}
            />
            <button onClick={clickReset}>SETUP</button>
            <button onClick={clickDiscard}>DISCARD</button>
        </div>
    );
}

export default App;
