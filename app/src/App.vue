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
        <div class="border"><RouterLink to="/">Home</RouterLink></div>
        <div class="border"><RouterLink to="/line">Line Graph</RouterLink></div>
        <div class="border"><RouterLink to="/bubble">Bubble Graph</RouterLink></div>
        <div class="border"><RouterLink to="/donut">Donut Graph</RouterLink></div>
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
  color: #dfe4e7;
  background-color: #2c3e50;
}
/*
nav a.router-link-exact-active:hover {
  background-color: transparent;
} */
a {
  color: black;
  text-decoration: none;
  font-weight: 500;
  background-color: #d2dbe259;
  border-radius: 5px;
  width: 120px;
  padding: 0rem 1rem 0rem 1rem;
  height: 100%;
}
a:hover {
  color: grey;
  background-color: #c2c9ce5e;
}
a:focus {
  background-color: #afb4b896;
}
.border {
  display: inline-block;
  padding: 0 0.125rem;
  border-left: 1.5px solid var(--color-border);
  text-decoration: none;
}

.border:first-of-type {
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
