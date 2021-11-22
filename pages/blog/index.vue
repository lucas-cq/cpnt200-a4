<template>
  <div>
    <main>
      <h2>Card Loop</h2>
      <Card v-for="topic in topics" :key="topic.id" :info="topic" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogInfo: {
        title: "Lucas' Blog",
        author: "Lucas Cummings",
        desc: "Lucas' kick ass blog",
        
      },
      topics: [
        {
          imgName: "Lexus IS300",
          img: "images/sam-warren-aw-ckyl5jsg-unsplash.jpg",
          desc: "A red lexus IS300",
          author: "Sam Warren"
        },
        {
          imgName: "Lexus IS300",
          img: "images/sam-warren-aw-ckyl5jsg-unsplash.jpg",
          desc: "A red lexus IS300",
          author: "Sam Warren"
        }
      ]
    }
  }
}
</script>