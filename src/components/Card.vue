<template>
<!--  <div class="cardontable" v-bind:style="ololo"></div>-->
  <img
      :src="this.imagePath"
      width="80"
      height="112"
      alt="ololo"
      class="cardStyle"
  />

</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import IRCard from "../milito-entities/IRCard";
import FactionsEnum from "../milito-entities/FactionsEnum";

@Options({
  props: {
    cardInfo: IRCard,
    faction: FactionsEnum,
  },
  computed: {
    imagePath: function (): string {
      if (this.cardInfo === undefined) {
        return require("@/assets/plain.jpeg")
      } else {
        return require(`@/assets/${this.faction}/${this.cardInfo.unitType}.jpeg`)
      }
    }
  }
})

export default class Card extends Vue {
  cardInfo!: IRCard
  faction!: FactionsEnum
}

</script>

<style scoped>
.cardStyle {
  /*position: absolute;*/
  /*display: inline-block;*/
  margin-top: 2px;
  margin-left: 38px;
  /*width: 80px;*/
  /*height: 112px;*/
  /*background-image: url("../assets/cards.jpg");*/
  /*background-size: 320px 224px;*/
}
</style>
