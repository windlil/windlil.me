<script setup lang="ts">
defineProps<{
  list: any
}>()

const router = useRouter()

function toDetail(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="relative">
    <div class="year text-stroke-2 text-stroke-hex-aaa color-transparent text-stroke-2 text-stroke-hex-aaa">
      2023
    </div>
    <ul class="flex list">
      <li v-for="(item, index) in list" :key="index"
        class="list-item my-3"
        @click="toDetail(item._path)"
      >
        <span class="text-xl mr">{{ item.title }}</span>
        <span class="text-sm">{{ item.date }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
}
.list-item {
  cursor: pointer;
  color: var(--item-color);
  transition: 0.2s ease-in-out;
}
.list-item:hover {
  color: var(--item-hover);
}
.year {
  position: absolute;
  word-wrap:break-word;
  overflow: hidden;
  width: 35px;
  left: -50px;
  top: 0;
  font-size: 50px;
  font-weight: bold;
  z-index: -999;
  opacity: 0.4;
}
</style>
