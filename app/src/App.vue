<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
const aray = ref('')
const link = 'https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=367'
async function s() {
  let a = await fetch(link)
  let b = await a.json()
  aray.value = b
}
onMounted(() => {
  s()
})
</script>

<template>
  <div class="fullheight">
    <h1 class="title">Homeless population</h1>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/line">Line Graph</RouterLink>
        <RouterLink to="/bubble">Bubble Graph</RouterLink>
        <RouterLink to="/donut">Donut Graph</RouterLink>
      </nav>
    </div>

    <RouterView :items="aray" />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-weight: 900;
}

.fullheight {
  height: 90vh;
}

/* ---------------- */
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}
*/
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: black;
}
/*
nav a.router-link-exact-active:hover {
  background-color: transparent;
} */
a {
  text-decoration: none;
}
a:hover {
  color: skyblue;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
} /*
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;

    flex-wrap: wrap;
  }

  nav {
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
