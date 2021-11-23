<template>
  <figure>
    <h3 class="text-white text-2xl pb-2">{{ info.imgName }}</h3>
    <nuxt-img class="rounded-sm" :src="info.img" sizes="sm:100vw md:50vw lg:400px" />
      <figcaption>{{ info.desc }}</figcaption>
  </figure>
</template>

<style scoped>

figure {
  @apply bg-red-300 mb-8 px-6 py-2 rounded-lg 
}

figcaption {
  @apply text-white p-2 text-xl
}

</style>

<script>
export default {
  props: ['info']
}
</script>