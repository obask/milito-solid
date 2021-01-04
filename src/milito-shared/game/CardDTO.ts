export default class CardDTO {
    id?: number
    unitType: string

    constructor(props: CardDTO) {
        this.id = props.id
        this.unitType = props.unitType
    }

}
