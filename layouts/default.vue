<template>
  <div>
    <header>
      <my-header></my-header>
    </header>
    <div class="content max-w-70ch m-auto">
      <slot></slot>
      <footer class="w-1/1 mt-100px mb-40px">
        <my-footer></my-footer>
      </footer>
    </div>
  </div>
</template>