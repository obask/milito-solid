<template>
  <ul id="hand">
    <li v-for="(x, index) in hand.cards" :key="index">
      <Card :cardInfo="x" :faction="faction" @click="doSomething(index)"/>
      <!--      <Placeholder/>-->
    </li>
  </ul>
</template>

<script lang="ts">
import Card from "./Card.vue";
import {Options, Vue} from "vue-class-component";
import { usePlayerStore } from "@/publicStore";
import IRHand from "../milito-entities/IRHand";
import FactionsEnum from "../milito-entities/FactionsEnum";

@Options({
  props: {
    hand: IRHand,
    faction: FactionsEnum,
  },
  components: {
    // Placeholder,
    Card,
  },
  methods: {
    doSomething: function (index: number) {
      const playerStore = usePlayerStore();
      playerStore.clickOnHand(index);
      console.log(index);
      return "DSAD";
    },
  },
})

export default class Hand extends Vue {
  hand!: IRHand
  faction!: FactionsEnum
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul#hand li {
  display: inline;
  list-style: none;
  background-color: dimgrey;
}
</style>
