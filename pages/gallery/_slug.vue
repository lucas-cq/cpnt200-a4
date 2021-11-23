<template>
  <div>
  <GlobalNav />
  <article>
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <nuxt-content :document="post" />
  </article>
  <MyFooter />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content(`blog/${params.slug}`).fetch()
      return {
        post,
      }
    } catch (error) {
      error('No article found')
    }
  }
}
</script>