import GameState from "./milito-entities/GameState";
import PhasesEnum from "./milito-entities/PhasesEnum";
import IRPlayerState from "./milito-entities/IRPlayerState";
import IRHand from "./milito-entities/IRHand";
import IRCard from "./milito-entities/IRCard";
import FactionsEnum from "./milito-entities/FactionsEnum";


export default function initState(): GameState {
    const anotherPlayer = new IRPlayerState({
        faction: FactionsEnum.AlexandrianMacedonian,
        hand: new IRHand({cards: []}),
        playerId: 2,
        row1: [undefined, undefined, undefined, undefined, undefined],
        row2: [undefined, undefined, undefined, new IRCard({unitType: "heavy_cavalry"}), undefined],
    })
    const irHand = new IRHand({
        cards: [
            new IRCard({unitType: "light_cavalry"}),
            new IRCard({unitType: "slingers"}),
            new IRCard({unitType: "leader_2"}),
        ]
    })
    const currentPlayer = new IRPlayerState({
        faction: FactionsEnum.AncientBritish,
        hand: irHand,
        playerId: 2,
        row1: [undefined, undefined, undefined, new IRCard({unitType: "chariots"}), undefined],
        row2: [undefined, undefined, undefined, undefined, undefined],
    })
    return new GameState({
        anotherPlayer: anotherPlayer,
        currentPlayer: currentPlayer,
        neutral: [0, 0, 0, 0, 0],
        phase: PhasesEnum.PHASE_1_VICTORY_CHECK
    })
}