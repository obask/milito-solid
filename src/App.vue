<template>
  <div id="app">
    <Card
        :cardInfo="this.cardI"
        :faction="this.fact"
    />
<!--        style="transform: rotate(180deg)"
-->
    <PlayerTables :table="table" />
    <Hand :hand="hand" :faction="fact" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Hand from "./components/Hand.vue";
import PlayerTables from "./components/PlayerTable.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Card.vue";
import { usePlayerStore } from "@/publicStore";
import IRCard from "./milito-entities/IRCard"
import FactionsEnum from "./milito-entities/FactionsEnum";

@Options({
  components: {
    PlayerTables,
    HelloWorld,
    Hand,
    Card,
  },
  data() {
    const playerStore = usePlayerStore();
    return {
      msg1: "Welcome to Milito!",
      myImage: require("@/assets/ancient_british/ab_warband_medium_infantry.jpeg"),
      cardI: new IRCard({unitType: 'light_cavalry'}),
      fact: FactionsEnum.AncientBritish,
      playerStore,
    }
  }
})
export default class App extends Vue {
  get table() {
    return this.playerStore.playerState.table;
  }
  get hand() {
    return { cards: this.playerStore.playerState.hand };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: rebeccapurple;
}
</style>
