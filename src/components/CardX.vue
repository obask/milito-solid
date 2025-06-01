<template>
<!--  <div class="cardontable" v-bind:style="ololo"></div>-->
  <img
    :src="imagePath"
    width="80"
    height="120"
    alt="ololo"
  />
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    imagePath: String
  },
  computed: {
    ololo: function (): string {
      return "background-position:-" + 80 * this.pos + "px -0px";
    }
  }
})

export default class CardX extends Vue {
  imagePath!: string;
}

</script>

<style scoped>
.cardontable {
  /*position: absolute;*/
  display: inline-block;
  margin-top: 2px;
  margin-left: 38px;
  width: 80px;
  height: 112px;
  background-image: url("../assets/cards.jpg");
  background-size: 320px 224px;
}
</style>
