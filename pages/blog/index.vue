<script setup lang="ts">
import contentList from '~/components/content-list.vue'
import { getList } from '@/utils/getContent'

const list = await getList('blog')
</script>

<template>
  <main>
    <contentList :list="list"/>
  </main>
</template>
