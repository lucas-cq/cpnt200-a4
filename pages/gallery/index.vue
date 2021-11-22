<template>
  <v-main>
    <h1>Galleries</h1>
    <div v-for="post in posts" :key="post.slug">
      <nuxt-link :to="post.slug">{{ post.title }}</nuxt-link>
    </div>
  </v-main>
</template>

<style scoped>
  div {
    text-align: center;
    font-size: 25px
  }
</style>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("gallery").fetch();
    return {
      posts,
    }
  }
}
</script>