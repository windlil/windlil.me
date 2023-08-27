---
date: 2023-5-19 16:00:00
---
# 基于vue3，从零手写实现一个mini-vuex。


### 前言：

*   最近学习了vuex源码，为了巩固所学到的知识，因此准备从零实现一个mini-vuex。

*   所需要实现的mini-vuex包括了vuex最核心的代码存储功能，但是与完整版的相比，不具备模块化相关的功能，因此更加小巧，适用于作为练手项目。


github地址：<https://github.com/windlil/mini-vuex>

### 1. 搭建基本项目结构

使用vite创建一个vue项目：

其中，store文件夹存放基本store实例，vuex文件夹为我们对于mini-vuex的实现。

### 2. 基本options的配置

```javascript
import { createStore } from "../vuex/createStore"

export default createStore({
  state: {
    num: 0
  },
  getters: {
    add(state) {
      return num + 1
    }
  },
  mutations: {
    changeNum(state, newNum) {
      state.num = newNum
    }
  },
  actions: {
    asyncChangeNum(store, newNum) {
      setTimeout(() => {
        store.commit('changeNum', newNum)
      }, 2000)
    }
  }
})
```

### 3. Store类的创建

Store类为mini-vuex最核心的类，其核心的属性方法都存在于此类。

后续将通过 `createStore` 函数来创建Store实例

```javascript
export class Store {
  constructor(options) {
    const store = this
  }
}
```

**install方法的实现**

为了vue能通过 `app.use(store)` 使用到我们写的插件，需要在**Store**类中实现一个install方法。

vue3提供了 `provide` 和 `inject` 两个重要的方法帮助我们将实例注册到组件当中去

```javascript
install(app) {
    app.provide('store', this)   //vue3提供的方法，为所有组件提供一个可以使用的实例，后续通过inject方法注入到组件当中。
    app.config.globalProperties.$store = this //将$store添加到全局当中，可以通过$store.xxx来使用mini-vuex
  }
```

### 4. createStore和useStore方法实现

`createStore` 方法 传入options，返回一个Store实例

```javascript
import { Store } from "./index"

export function createStore(options) {
  return new Store(options)
}
```

在组件当中使用 `useStore` 方法，注入Store实例到组件当中。

```javascript
import { inject } from "vue";

export function useStore() {
  return inject('store')	
}
```

### 5.  基本属性的创建

```javascript
export class Store {
  constructor(options) {
    const store = this
    const state = options.state		//此时的state不是响应式的
    store._wrapperGetters = options.getters
    store._mutations = options.mutations
    store._actions = options.actions
  }

  install(app) {
    app.provide("store", this) //vue3提供的方法，为所有组件提供一个可以使用的实例，后续通过inject方法注入到组件当中。
    app.config.globalProperties.$store = this //将$store添加到全局当中，可以通过$store.xxx来使用mini-vuex
  }
}
```

### 6. 实现state和getter的响应式

到这里为止，我们已经实现了state的基本响应式原理。

```javascript
import { reactive } from "vue"

//1.创建一个工具函数
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

//2. 用于实现state和getters的响应式函数
function resetState(store, state) {
  store._state = reactive({data: state})  //vue3提供的方法，使用reactive包裹的数据会变为响应式
  store.getters = {}
  forEachValue(store._wrapperGetters, (getter, key) => {
    Object.defineProperty(store.getters, key, {
      get: () => getter(store.state)
    })
  })
}

export class Store {
  constructor(options) {
    const store = this
    const state = options.state
    store._wrapperGetters = options.getters
    store._mutations = options.mutations
    store._actions = options.actions
    //3. 调用resetState方法实现state的响应式
    resetState(store, state)
  }
  //4.定义访问器 使用$store.state的时候可以访问到store._state
  get state() {
    return this._state.data
  }

  install(app) {
    app.provide("store", this) //vue3提供的方法，为所有组件提供一个可以使用的实例，后续通过inject方法注入到组件当中。
    app.config.globalProperties.$store = this //将$store添加到全局当中，可以通过$store.xxx来使用mini-vuex
  }
}
```

### 7. mutations和actions的注册

```javascript
//用于安装mutations和actions
function installModule(store, options) {
  const mutations = options.mutations
  forEachValue(mutations, (mutation, key) => {
    store._mutations[key] = (payload) => {
      mutation(store.state, payload)
    }
  })

  const actions = options.actions
  forEachValue(actions, (action, key) => {
    store._actions[key] = (payload) => {
      action(store, payload)
    }
  })
}

export class Store {
  constructor(options) {
	...
    //调用installModule方法，来安装mutations和actions
    installModule(store, options)
	...
}
```

我们打印一下store实例看看结果，可以看到我们已经具备了实例的基本属性了，离项目最终完成已经不远。


### 8. dispatch和commit方法的实现

```javascript
export class Store {
	...
  commit = (type, payload) => {
    if (!this._mutations[type]) return //判断当前是否有该类型的mutation，没有的话结束函数
    this._mutations[type](payload)
  }

  dispatch = (type, payload) => {
    if (!this._actions[type]) return
    this._actions[type](payload)
  }
	...
}
```

### 9. 测试

`app.vue`

```vue
<template>
  <div class="app" style="margin-top: 50px">
    <div>num: {{ num }}</div>
    <div>getters/add: {{ numAdd }}</div>
    <div class="btn">
      <button @click="$store.state.num++">num + 1</button>
      <button @click="changeNum">changeNum</button>
      <button @click="asycnChangeNum">asyncChangeNum</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "./vuex/useStore"

const store = useStore()
const num = computed(() => store.state.num)
const numAdd = computed(() => store.getters.add)

function changeNum() {
  store.commit("changeNum", 1000)
}

function asycnChangeNum() {
  store.dispatch("asyncChangeNum", 2000)
}
</script>

<style>
.btn button {
  margin: 0 10px;
}
</style>

```


### 10. 完善

*   通过测试，我们已经可以看到state成功实现了响应式，dispatch和commit方法也能正常运行。

*   但是我们都知道使用vuex的时候，异步的函数通常会放在actions当中，调用dispatch会返回一个promise，但是我们并没有完成此功能，因此仍然需要对此进行完善。

对 `installModule` 函数进行修改

```javascript
function installModule(store, options) {
    ...
  const actions = options.actions
  forEachValue(actions, (action, key) => {
    store._actions[key] = (payload) => {
      let res = action(store, payload) //获取action函数的返回值
      if (!isPromise(res)) {
        return Promise.resolve(res) //如果使用者并没有给定Promise作为返回值，则在此手动创建一个并返回
      }
      return res
    }
  })
}

//用于判断参数是否为promise
function isPromise(res) {
  return res && typeof res?.then === 'function'
}
```

修改 `dispatch` 方法

```javascript
  dispatch = (type, payload) => {
    if (!this._actions[type]) return
    let res = this._actions[type](payload)
    return res	//返回一个Promise
  }
```