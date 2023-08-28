---
date: 2023-8-28 20:00:00
---

# 组件间v-model的实现
原理:
```vue
<template>
  <MyComponent v-model='value'/>
</template>

// 会展开成下面的格式

<template>
  <MyComponent 
    :modelValue='value'
    @update-modelValue='(newValue) => {value = newValue}'
  />
</template>
```

方法一：
```vue
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
   :value='modelValue'
   @input='$emit('update:modelVale', $event.target.value)'
  />

</template>
```

方法二:
```vue
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed(
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
)
</script>

<template>
  <input
   v-model='value'
  />
</template>
```
