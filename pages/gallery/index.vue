<template>
    <main>
      <GlobalNav />
      <h2 class="text-4xl mt-5 text-center mb-8">Car Gallery</h2>
      <div class="gallery-box">
      <Card class="text-xl" v-for="topic in topics" :key="topic.id" :info="topic" />
      </div>
      <MyFooter />
    </main>
</template>

<style>
  figure {
    margin: auto 0px;
  }
  .gallery-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
</style>

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
          desc: "The Teenagers Lambo"
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