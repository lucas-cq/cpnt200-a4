<template>
  <figure>
    <h3>{{ info.imgName }}</h3>
    <nuxt-img :src="info.img" sizes="sm:100vw md:50vw lg:250px" />
      <figcaption>{{ info.desc }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ['info']
}
</script>