<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="flex__container">
    <CNavbar />
    <RouterView  v-bind:products="products" v-bind:orders="orders"/>
  </div>
</template>
<script>
import CNavbar from './Components/CNavbar/CNavbar.vue';

export default {
  data() {
    return {
      products: [
        {

          id: 1,
          name: "Spicy seasoned seafood noodles",
          price: 2.29,
          bowl: 20,
          image: "../img/Food.png",
          category: 'hot'
        },
        {

          id: 2,
          name: "Salted Pasta with mushroom sauce",
          price: 2.69,
          bowl: 11,
          image: "../img/Food.png",
          category: 'cold'
        },
        {

          id: 3,
          name: "Beef dumpling in hot and sour soup",
          price: 2.99,
          bowl: 16,
          image: "../img/Food.png",
          category: 'soup'
        },
        {

          id: 4,
          name: "Healthy noodle with spinach leaf",
          price: 3.29,
          bowl: 22,
          image: "../img/Food.png",
          category: 'grill'
        },
        {

          id: 5,
          name: "Hot spicy fried rice with omelet",
          price: 3.49,
          bowl: 13,
          image: "../img/Food.png",
          category: 'appetiz'
        },
        {

          id: 6,
          name: "Spicy instant noodle with special omelette",
          price: 3.59,
          bowl: 17,
          image: "../img/Food.png",
          category: 'desert'
        },
      ],
      orders: 3345
    }
  },
  components: { CNavbar },
  methods: {
    handleToggleState() {
      console.log('Toggle')
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
::-webkit-scrollbar {
  width: 0.5208333333333334vw;
  background-color:  #1F1D2B;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #252836;
}

$baseDark: #1F1D2B;
$baseGray: #252836;
$baseActive: #EA7C69;

li {
  list-style: none;
}

.flex__container {
  display: flex;
}

@media (min-width: 0px) and (max-width: 768px) {
  .flex__container {
    flex-direction: column-reverse;
  }
}

</style>