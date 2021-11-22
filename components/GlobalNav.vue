<template>
  <header>
  <nav>
      <ul>
        <li><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/blog/">Articles</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/gallery/">Gallery</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="#">Contact</NuxtLink></li>
    </ul>
  </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
}
nav ul {
  display: flex;
  justify-content: space-between;
}
nav li {
  margin: 20px 50px 20px 50px;
  font-size: 20px;
  list-style: none;
}
.nav-link {
  text-decoration: none;
  color: white;
}
</style>