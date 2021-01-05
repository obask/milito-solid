import GameTableDTO from "../milito-shared/game/GameTableDTO"
import PhasesEnum from "../milito-shared/enums/PhasesEnum"
import PlayerInfoDTO from "../milito-shared/game/PlayerInfoDTO"
import HandDTO from "../milito-shared/game/HandDTO"
import CardDTO from "../milito-shared/game/CardDTO"
import FactionsEnum from "../milito-shared/enums/FactionsEnum"


export default function initState(): GameTableDTO {
    const anotherPlayer = new PlayerInfoDTO({
        faction: FactionsEnum.AlexandrianMacedonian,
        hand: new HandDTO({cards: []}),
        playerId: 2,
        row1: [undefined, undefined, undefined, undefined, undefined],
        row2: [undefined, undefined, undefined, new CardDTO({unitType: "heavy_cavalry"}), undefined],
    })
    const irHand = new HandDTO({
        cards: [
            new CardDTO({id: 1, unitType: "light_cavalry"}),
            new CardDTO({id: 2, unitType: "slingers"}),
            new CardDTO({id: 3, unitType: "leader_2"}),
        ]
    })
    const currentPlayer = new PlayerInfoDTO({
        faction: FactionsEnum.AncientBritish,
        hand: irHand,
        playerId: 2,
        row1: [undefined, undefined, undefined, new CardDTO({id: 4, unitType: "chariots"}), undefined],
        row2: [undefined, undefined, undefined, undefined, undefined],
    })
    return new GameTableDTO({
        anotherPlayer: anotherPlayer,
        currentPlayer: currentPlayer,
        neutral: [0, 0, 0, 0, 0],
        phase: PhasesEnum.PHASE_1_VICTORY_CHECK
    })
}