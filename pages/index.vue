<script setup lang="ts">

</script>

<template>
  <section class="flex flex-col justify-center">
    <ContentDoc path="home" class="prose"></ContentDoc>
  </section>
  <div class="wave">
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="48%" y1="0%" x2="52%" y2="100%"><stop offset="5%" stop-color="#9900ef"></stop><stop offset="95%" stop-color="#000000"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 120.10526315789477,110.53110047846889 240.21052631578954,88.06220095693779 334,94 C 427.78947368421046,99.93779904306221 495.26315789473676,134.2822966507177 589,146 C 682.7368421052632,157.7177033492823 802.7368421052632,146.80861244019138 887,149 C 971.2631578947368,151.19138755980862 1019.7894736842104,166.48325358851673 1106,166 C 1192.2105263157896,165.51674641148327 1316.1052631578948,149.25837320574163 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="48%" y1="0%" x2="52%" y2="100%"><stop offset="5%" stop-color="#9900ef"></stop><stop offset="95%" stop-color="#000000"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 107.40669856459331,272.0956937799043 214.81339712918663,278.1913875598086 300,266 C 385.1866028708134,253.80861244019138 448.1531100478468,223.33014354066984 538,225 C 627.8468899521532,226.66985645933016 744.5741626794259,260.4880382775119 848,264 C 951.4258373205741,267.5119617224881 1041.5502392344497,240.71770334928232 1138,236 C 1234.4497607655503,231.28229665071768 1337.2248803827752,248.64114832535884 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"></path></svg>
  </div>
</template>

<style scoped>
.wave {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -310px;
}
</style>