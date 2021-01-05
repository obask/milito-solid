class AUIState {

    status: string
    nCardsToDiscard: number
    discardedCards: number[]
    selectedCard?: number
    selectedColumn?: number

    constructor(that: AUIState) {
        this.status = that.status
        this.selectedCard = that.selectedCard
        this.selectedColumn = that.selectedColumn
        this.nCardsToDiscard = that.nCardsToDiscard
        this.discardedCards = that.discardedCards
    }

}


export default class UIState extends AUIState {

}