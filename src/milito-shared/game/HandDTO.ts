import CardDTO from "./CardDTO";

export default class HandDTO {
    cards: CardDTO[]

    constructor(props: HandDTO) {
        this.cards = props.cards
    }
}
