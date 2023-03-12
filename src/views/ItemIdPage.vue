<template>
  <div class="item-detail">
    <div v-if="item" class="detail">
      <div class="content">
        <h1>
          Nomi: <span>{{ item.name }}</span>
        </h1>
        <div>
          Katalogdan: <i>#{{ item.category }}</i>
        </div>
        <div v-if="item.desciption" class="mt-2 w-100">
          <span>{{ item.desciption }}</span>
        </div>
        <strong class="d-flex flex-wrap ga-5">
          <span> Narxi: </span>
          <strong v-if="item.price"
            >{{ item.price.toLocaleString() }} so'm</strong
          >

          <table v-if="item.min">
            <tbody class="d-flex gap-3 border p-2 rounded">
              <th class="text-center">
                <rb style="font-size: 13px">25sm</rb>
                <hr />
                <strong style="font-size: 15px"
                  >{{ item.min.toLocaleString() }} so'm</strong
                >
              </th>
              <th v-if="item.normal" class="text-center">
                <rb style="font-size: 13px">30sm</rb>
                <hr />
                <strong style="font-size: 15px"
                  >{{ item.normal.toLocaleString() }} so'm</strong
                >
              </th>
              <th v-if="item.max" class="text-center">
                <rb style="font-size: 13px">35sm</rb>
                <hr />
                <strong style="font-size: 15px"
                  >{{ item.max.toLocaleString() }} so'm</strong
                >
              </th>
            </tbody>
          </table>
          <span>
            <strong v-if="item.otherOnePirce"
              >{{ item.otherOnePirce }} so'm</strong
            >
            <strong v-if="item.otherOnePirce2"
              >{{ item.otherOnePirce2 }} so'm</strong
            >
          </span>
          <ul
            class="detail_for"
            v-for="detailItem in detailItems"
            :key="detailItem.id"
          >
            <li class="d-flex align-items-center gap-2">
              <img
                v-if="item.pitsaPrice"
                class="detail-image"
                :src="detailItem.cow"
              />
              <strong class="mt-0 pt-0">{{ item.pitsaPrice }}</strong>
            </li>
            <li class="d-flex gap-2">
              <img
                v-if="item.pitsaPrice2"
                class="detail-image"
                :src="detailItem.piza"
              />
              <strong class="mt-0 pt-0">{{ item.pitsaPrice2 }}</strong>
            </li>
          </ul>
        </strong>
        <div class="contact">
          <h4>Aloqa:</h4>
          <ul>
            <li><a href="tel::+998330106161">Telefon</a></li>
            <li>
              <a href="https://t.me/landburgerohangaron" target="_blank"
                >Telegram</a
              >
            </li>
          </ul>
        </div>
      </div>
      <img :src="item.images" alt="log" />
    </div>

    <div v-else>
      <h1>Topilmadi</h1>
    </div>

    <button class="btn" @click="router.back()">Asosiyga qaytish</button>
  </div>
</template>


<script setup>
import items from "@/data.json";
import MealsItem from "@/details.json";

import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const item = ref(null);
const router = useRouter();
const route = useRoute();

const { id } = route.params;

onBeforeMount(() => {
  item.value = items.find((c) => c.id === parseInt(id));
});

const detailItems = ref(MealsItem);
</script>


<style>
.item-detail {
  width: 100%;
  background: white;
  padding: 40px;
  border-radius: 20px;
}
.detail {
  max-width: 1000px;
  display: flex;
  gap: 30px;
  justify-content: space-between;
}
.content h1 {
  margin-bottom: 20px;
}
.content h1 span {
  color: #20b2ab93;
}
.content div i {
  color: #ccc;
}
.content strong {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 200;
  display: flex;
  justify-content: space-between;
}
.contact {
  margin-top: 20px;
}
.contact ul li {
  color: #ff6f00;
}
.contact ul li a {
  position: relative;
  color: #000;
}
.contact ul li a:hover {
  color: #ff6f00;
  letter-spacing: 1.5px;
}

.detail img {
  width: 500px;
  object-fit: contain;
  border-radius: 20px;
}
@media (max-width: 800px) {
  .detail img {
    width: 200px;
    object-fit: contain;
    border-radius: 20px;
  }
}
@media (max-width: 500px) {
  .item-detail {
    padding: 20px;
  }
  .detail {
    flex-wrap: wrap;
  }
  .detail img {
    width: 100%;
  }
}
button {
  margin-top: 20px;
  padding: 8px 25px !important;
  border: 1px solid lightslategrey !important;
  border-radius: 50px !important;
}
button:hover {
  border: 1px solid #000 !important;
}
</style>