<template>
  <div class="gallery-box">
    <main>
      <h2>Card Loop</h2>
      <Card v-for="topic in topics" :key="topic.id" :info="topic" />
    </main>
  </div>
</template>

<style scoped>
  figure {
    margin: auto 0px;
  }
  .gallery-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    text-align: center;
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