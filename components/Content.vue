<template>
  <main>
    <h1>Template Company</h1>
    <div class="img-box">
      <nuxt-img
        src="assets/images/man-on-bike.jpg"
        sizes="sm:100vw md:80vw lg:820px"
      />
    </div>
  </main>
</template>

<style scoped>
.img-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
}
</style>