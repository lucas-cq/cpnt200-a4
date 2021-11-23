<template>
  <header>
  <nav>
      <ul>
        <li><NuxtLink class="nav-link" to="#">Home</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="#">Articles</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/">Gallery</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="#">Contact</NuxtLink></li>
    </ul>
  </nav>
  </header>
</template>

<style>
nav {
  @apply flex justify-around
}
nav ul {
  @apply flex justify-around
}
nav li {
  @apply text-2xl list-none my-6 mx-8
}
.nav-link {
  @apply text-white no-underline
}
header {
  @apply bg-red-400
}
</style>