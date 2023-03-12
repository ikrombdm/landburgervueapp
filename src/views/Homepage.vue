<template>
  <main>
    <div class="d-flex align-items-end justify-content-between gap-2">
      <span class="d-flex flex-wrap align-items-center gap-1">
        <h6>Filterlash:</h6>
        <select v-model="category" @change="handleChange" class="filter">
          
          <option value="All">Hammasi</option>
          <option value="burgerlar">burgerlar</option>
          <option value="pizza">Pitsalar</option>
          <option value="snacks">Yengil taomlar</option>
          <option value="ichimliklar">ichimliklar</option>
        </select>
      </span>

      <div class="btn-sidebar" v-on:click="for_btn">⩸</div>
    </div>
    <hr />
      <div class="card-items mt-4" :class="`${ListToGrid && 'ListToGrid'}`">
        
        <div
          class="card-item rounded p-2 position-relative"
          v-for="item in allitems"
          :key="item.id"
          @click="router.push(`/foods/${item.id}`)"
        >
        
          <img :src="item.images" alt="log" class="rounded" />

          <span v-if="item.quality" class="badge rounded-pill text-bg-warning">
            {{ item.quality }}
          </span>
          <span class="forme">
            <h3>{{ item.name }}</h3>

            <em># {{ item.category }}</em>
            <strong v-if="item.price">{{ item.price.toLocaleString() }}
              <span>so'm</span>
            </strong>
            <strong v-if="item.min">
              narxi ->
            </strong>
            <strong v-if="item.otherOnePirce"><br> {{item.otherOnePirce}}</strong><br>
            <strong v-if="item.otherOnePirce2">{{item.otherOnePirce2}}</strong>

            <ul class="detail_for" v-for="detail in detailsImg" :key="detail.id" >
              <li class="d-flex gap-2">
                <img v-if="item.pitsaPrice" class="detail-image" :src="detail.cow">
                <strong>{{item.pitsaPrice}}</strong>
              </li>
              <li class="d-flex gap-2">
                <img v-if="item.pitsaPrice2" class="detail-image" :src="detail.piza">
                <strong>{{item.pitsaPrice2}}</strong>
              </li>
            </ul>
          </span>
        </div>
      </div>
  </main>
</template>
  
<script setup>
import itemsData from "@/data.json";
import MealsImg from "@/details.json";

import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const allitems = ref(itemsData);
const category = ref("");
const detailsImg = ref(MealsImg)

watch(category, () => {
  if (category.value == "All") allitems.value = itemsData;
  else {
    allitems.value = itemsData.filter((c) => c.category === category.value);
  }
});

const ListToGrid = ref(localStorage.getItem("listTogrid") === "true");
const for_btn = () => {
  ListToGrid.value = !ListToGrid.value;

  localStorage.setItem("listTogrid", ListToGrid.value);
};
</script>


<style lang="css">
</style>
  