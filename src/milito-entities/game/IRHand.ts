import IRCard from "./IRCard";

export default class IRHand {
    cards: IRCard[]

    constructor(props: IRHand) {
        this.cards = props.cards
    }
}
