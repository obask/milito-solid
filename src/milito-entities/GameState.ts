import PhasesEnum from "./PhasesEnum";
import IRPlayerState from "./IRPlayerState";

export default class GameState {
    neutral: [number, number, number, number, number]
    phase: PhasesEnum
    currentPlayer: IRPlayerState
    anotherPlayer: IRPlayerState


    constructor(props: GameState) {
        this.neutral = props.neutral
        this.phase = props.phase
        this.currentPlayer = props.currentPlayer
        this.anotherPlayer = props.anotherPlayer
    }

}
