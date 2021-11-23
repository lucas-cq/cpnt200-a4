<template>
    <main>
      <GlobalNav />
      <h2 class="text-4xl mt-5 text-center mb-8"><span v-text="blogInfo.title"></span></h2>
      <div v-html="`<h2>By ${blogInfo.author}</h2>`"></div>
      <div class="gallery-box">
      <Card v-for="topic in topics" :key="topic.id" :info="topic" />
      </div>
      <MyFooter />
    </main>
</template>

<style>
  .gallery-box {
    @apply flex justify-around items-center flex-col
  }
  h2 {
    @apply text-xl text-center mb-6
  }
</style>

<script>
export default {
  data() {
    return {
      blogInfo: {
        title: "Japanese Cars",
        author: "Lucas Cummings",
        desc: "A gallery of cars",
        
      },
      topics: [
        {
          imgName: "Nissan Silvia's",
          img: "images/silvia.jpg",
          desc: "Two Japanese Legends"
        },
        {
          imgName: "Mitsubishi Evo",
          img: "images/mitevo.jpg",
          desc: "A Rally God"
        },
        {
          imgName: "Acura Integra",
          img: "images/teggy.jpg",
          desc: "A Teenagers Lambo"
        },
        {
          imgName: "Nissan 240sx",
          img: "images/240sx.jpg",
          desc: "These used to be cheap"
        }
      ]
    }
  }
}
</script>