<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="text-border-4 text-9xl">Star</h1>
      <h1 class="text-border-4 text-9xl">Wars</h1>
      <h3 class="text-border-2 text-2xl">isabelGM</h3>
      
      <!-- <img class="mt-8" src="/public/images/principal-title-img/star-font.png" alt="Star Wars App">
      <img class="" src="/public/images/principal-title-img/wars-font.png" alt="Star Wars App">
      <img class="" src="/public/images/principal-title-img/isabelGM-font.png" alt="Star Wars App"> -->
    </div>
    
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
  .text-border-4 {
    -webkit-text-stroke: 4px #fee81a;
  }

  .text-border-2 {
    -webkit-text-stroke: 2px #fee81a;
  }
</style>