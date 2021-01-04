import PhasesEnum from "../PhasesEnum";
import PlayerInfoDTO from "./PlayerInfoDTO";

export default class GameTableDTO {
    neutral: [number, number, number, number, number]
    phase: PhasesEnum
    currentPlayer: PlayerInfoDTO
    anotherPlayer: PlayerInfoDTO


    constructor(props: GameTableDTO) {
        this.neutral = props.neutral
        this.phase = props.phase
        this.currentPlayer = props.currentPlayer
        this.anotherPlayer = props.anotherPlayer
    }

}
