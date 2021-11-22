<template>
  <div>
  <GlobalNav />
    <section>
      <h2>{{ post.title }}</h2>
      <div class="img-box">
      <nuxt-img :src="post.image" width="400"/>
      </div>
      <p>Date Added: {{ post.date }} robot time</p>
    </section>
  <MyFooter />
  </div>
</template>

<style scoped>
  p {
    text-align: center;
    margin-bottom: 10rem;
  }
  h2 {
    text-align: center;
  }
  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content(`gallery/${params.slug}`).fetch()
      return {
        post,
      }
    } catch (error) {
      error('Gallery Not found')
    }
  }
}
</script>