<template>
  <div id="playertables">
    <table>
      <tr>
        <td v-for="(x, index) in table.enemy_row_2" :key="index">
          <PlaceHolder/>
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.enemy_row_2" :key="index">
          <PlaceHolder/>
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.territory_row" :key="index">
          <Card
              @click.native="doSomething(index)"
              v-if="x !== undefined"
              :cardInfo="x"
              :faction="this.myFaction"
              style="transform: rotate(90deg)"
          />
          <PlaceHolder v-else/>
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.player_row_1" :key="index">
          <Card @click.native="doSomething(index)" v-if="x !== undefined" :cardInfo="x"
                :faction="this.myFaction"/>
          <PlaceHolder @click.native="doSomething(index)" v-else/>
        </td>
      </tr>
      <tr>
        <td v-for="(x, index) in table.player_row_2" :key="index">
          <Card @click.native="doSomething(index)" v-if="x !== undefined" :cardInfo="x"
                :faction="this.myFaction"/>
          <PlaceHolder @click.native="doSomething(index)" v-else/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import PlaceHolder from "./PlaceHolder.vue";
import Card from "./Card.vue";
import { usePlayerStore } from "@/publicStore";
import {Options, Vue} from "vue-class-component";
import FactionsEnum from "../milito-entities/FactionsEnum";

@Options({
  components: {
    Card,
    PlaceHolder
  },
  props: {
    table: Object
  },
  methods: {
    doSomething: function (index: number) {
      const playerStore = usePlayerStore();
      playerStore.clickOnPlayerRow(index);
      console.log(index);
      return "DSAD";
    }
  },
  data() {
    return {
      myFaction: FactionsEnum.AncientBritish,
    }
  },
})
export default class PlayerTable extends Vue {
  table!: Record<string, Array<number>>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#playertables {
  position: relative;
  width: 666px;
  height: 666px;
  background-color: burlywood;
}
</style>
