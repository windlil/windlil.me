---
date: 2023-8-28 14:00:00
---
# Vue性能优化

## computed计算属性和方法的优劣

```vue
<script setup>
const data = reactive({
  name: 'jack'
})

const getDataName = computed(() => {
  return data.name
})

function getDataNameFunc() {
  return data.name
}
</script>
```
上面的示例中，`getDataName` 和 `getDataNameFunc` 在模板语法中得到的结果是一样的。

那么我们为什么要使用computed呢?

computed属性会的依赖会被收集, 当收集的响应式依赖被改变的时候, 才会重新执行。

而使用函数的话，并不具有缓存的功能，即使其他的依赖改变, 也会重新执行，对性能有所损耗。

## v-if 和 v-show
`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

`v-if` 是惰性的，在初次渲染为false的时候，不会做任何的事情，只有为true的时候才会初次渲染。

`v-show` 就是使用了CSS的 `display` 属性，对元素进行隐藏和显现，不论条件都会进行初次的渲染。

因此在频繁切换的条件下，使用 `v-show` 可以更好的节约性能, 如果在运行时绑定条件很少改变，则 `v-if` 会更合适。