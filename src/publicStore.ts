import { defineStore } from 'pinia'

const SELECT_CARDS_STATE = "SELECT_CARDS_STATE"
const SELECT_COLUMN_TO_PLAY_STATE = "SELECT_COLUMN_TO_PLAY_STATE"
const DISCARD_CARDS_FROM_HAND_STATE = "DISCARD_CARDS_FROM_HAND_STATE"

class PlayerTable {
    enemy_row_2: [number?, number?, number?, number?, number?]
    enemy_row_1: [number?, number?, number?, number?, number?]
    territory_row: [number, number, number, number, number]
    player_row_1: [number?, number?, number?, number?, number?]
    player_row_2: [number?, number?, number?, number?, number?]

    constructor() {
        this.enemy_row_2 = [1, 0, 0, 1, 0]
        this.enemy_row_1 = [1, 0, 0, 1, 0]
        this.territory_row = [0, 0, 0, 0, 0]
        this.player_row_1 = [-1, 1, 2, 1, 2]
        this.player_row_2 = [1, -1, 3, 1, 3]
    }
}


class PlayerState {
    table: Object
    hand: Array<number>
    state: string
    cardsToDiscard: number
    selectedCard?: number
    selected_column?: number
    discarded_cards: Array<number>

    constructor() {
        this.table = new PlayerTable()
        this.hand = [1, 3, 2, 2, 2]
        this.state = SELECT_CARDS_STATE
        this.cardsToDiscard = 0
        this.selectedCard = undefined
        this.selected_column = undefined
        this.discarded_cards = []
    }
}

export const usePlayerStore = defineStore('player', {
    state: () => ({
        debug: true,
        playerState: new PlayerState(),
    }),
    actions: {
        clickOnHand(position: number) {
            if (this.debug) {
                console.log('STATE:', this.playerState.state)
                console.log('clickOnHand triggered:', position)
            }
            switch (this.playerState.state) {
                case SELECT_CARDS_STATE:
                    this.playerState.selectedCard = position
                    this.playerState.state = SELECT_COLUMN_TO_PLAY_STATE
                    break
                case DISCARD_CARDS_FROM_HAND_STATE:
                    this.playerState.discarded_cards.push(position)
                    this.playerState.cardsToDiscard -= 1
                    this.playerState.state = DISCARD_CARDS_FROM_HAND_STATE
                    console.log("cards to discard", this.playerState.cardsToDiscard)
                    if (this.playerState.cardsToDiscard <= 0) {
                        const requestOptions = {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            mode: "cors" as RequestMode,
                            body: JSON.stringify(this.playerState)
                        }
                        fetch("http://localhost:3000/ololo", requestOptions)
                            .then(response => response.json())
                            .then(newst => {
                                console.log(newst)
                                Object.assign(this.playerState, newst)
                                this.playerState.state = newst.state
                            })
                    }
                    break
            }
        },
        clickOnPlayerRow(position: number) {
            if (this.debug) {
                console.log('STATE:', this.playerState.state)
                console.log('clickOnPlayerRow triggered:', position)
            }
            switch (this.playerState.state) {
                case SELECT_COLUMN_TO_PLAY_STATE:
                    this.playerState.selected_column = position
                    this.playerState.cardsToDiscard = 1
                    this.playerState.state = DISCARD_CARDS_FROM_HAND_STATE
                    break
            }
        },
    },
})
