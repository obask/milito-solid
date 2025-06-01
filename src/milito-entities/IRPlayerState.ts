import IRHand from "./IRHand";
import IRCard from "./IRCard";
import FactionsEnum from "./FactionsEnum";

export default class IRPlayerState {
    hand: IRHand
    playerId: number
    faction: FactionsEnum
    row1: [IRCard?, IRCard?, IRCard?, IRCard?, IRCard?]
    row2: [IRCard?, IRCard?, IRCard?, IRCard?, IRCard?]

    constructor(that: IRPlayerState) {
        this.faction = that.faction
        this.hand = that.hand
        this.playerId = that.playerId
        this.row1 = that.row1
        this.row2 = that.row2
    }

}
