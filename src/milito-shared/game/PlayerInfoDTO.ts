import HandDTO from "./HandDTO";
import CardDTO from "./CardDTO";
import FactionsEnum from "../FactionsEnum";

export default class PlayerInfoDTO {
    hand: HandDTO
    playerId: number
    faction: FactionsEnum
    row1: [CardDTO?, CardDTO?, CardDTO?, CardDTO?, CardDTO?]
    row2: [CardDTO?, CardDTO?, CardDTO?, CardDTO?, CardDTO?]

    constructor(that: PlayerInfoDTO) {
        this.faction = that.faction
        this.hand = that.hand
        this.playerId = that.playerId
        this.row1 = that.row1
        this.row2 = that.row2
    }

}
