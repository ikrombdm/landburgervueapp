<template>
  <main class="container pb-5">
    <nav>
      <router-link class="brand" to="/">
        <img :src="brand" alt="logo" />
      </router-link>
      <span>
        <router-link class="link" active-class="linked" to="/"
          >Asosiy</router-link
        >
        <router-link class="link" active-class="linked" to="/haqimizda/"
          >Haqimizda</router-link
        >
        <div id="google_translate_element">
          <i class="fa-solid fa-globe"></i>
        </div>
      </span>
    </nav>
    <br />
    <br />
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>


<script setup>
import brand from "../src/assets/logo/brand.png";

import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<style>

</style>
